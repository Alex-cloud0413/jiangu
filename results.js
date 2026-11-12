import { PEOPLE } from './content.js?v=0.2.0';
import { ASSESSMENT_VERSION, LEGACY_ASSESSMENT_VERSION, QUESTIONS, calculateProfile, getContext, rankPeople, validateAnswers } from './quiz.js?v=0.4.0';
import { QUESTIONS as LEGACY_QUESTIONS } from './legacy-quiz.js?v=0.4.0';

export const LIBRARY_VERSION = 'world-32-v1';
export const LEGACY_LIBRARY_VERSION = 'china-8-v1';
export const LEGACY_PERSON_IDS = ['su-shi','li-qingzhao','tao-yuanming','wang-yangming','sima-qian','xin-qiji','ban-zhao','xu-xiake'];
const validAssessment=version=>version===ASSESSMENT_VERSION || version===LEGACY_ASSESSMENT_VERSION;

export function personalitySignature(answers,assessmentVersion=ASSESSMENT_VERSION) {
  if(!validAssessment(assessmentVersion))throw new TypeError('未知的测评版本。');
  const questions=assessmentVersion===LEGACY_ASSESSMENT_VERSION ? LEGACY_QUESTIONS : QUESTIONS;
  const signature=questions.filter(question=>question.kind==='personality').map(question=>`${question.id}:${answers?.[question.id] || ''}`).join('|');
  return assessmentVersion===ASSESSMENT_VERSION ? `${assessmentVersion}|${signature}` : signature;
}

/** A new scale result has a separate assessment identity from the old four-choice questionnaire. */
export function createResult(answers,people=PEOPLE,{assessmentVersion=ASSESSMENT_VERSION}={}) {
  if(!validateAnswers(answers,assessmentVersion).complete)throw new Error('请先完成全部单选题。');
  return {assessmentVersion,resultPersonId:rankPeople(calculateProfile(answers,assessmentVersion),people)[0].person.id,
    resultLibraryVersion:LIBRARY_VERSION,resultPoolSize:people.length,resultAnswerSignature:personalitySignature(answers,assessmentVersion)};
}

/** Unversioned records are always old four-choice records; never reinterpret their IDs or values. */
export function resolveResult(answers,saved={},people=PEOPLE) {
  const assessmentVersion=saved.assessmentVersion ?? LEGACY_ASSESSMENT_VERSION;
  if(!validAssessment(assessmentVersion) || !validateAnswers(answers,assessmentVersion).complete)return null;
  const profile=calculateProfile(answers,assessmentVersion);
  const context=getContext(answers,assessmentVersion);
  const isLegacyAssessment=assessmentVersion===LEGACY_ASSESSMENT_VERSION;
  const stored=people.find(person=>person.id===saved.resultPersonId);
  let person,libraryVersion,poolSize;
  if(stored) {
    person=stored;
    const legacyId=LEGACY_PERSON_IDS.includes(stored.id);
    libraryVersion=!isLegacyAssessment || saved.resultLibraryVersion===LIBRARY_VERSION || !legacyId ? LIBRARY_VERSION : LEGACY_LIBRARY_VERSION;
    poolSize=libraryVersion===LEGACY_LIBRARY_VERSION ? people.filter(candidate=>LEGACY_PERSON_IDS.includes(candidate.id)).length : people.length;
  } else {
    const legacyPeople=people.filter(candidate=>LEGACY_PERSON_IDS.includes(candidate.id));
    const pool=isLegacyAssessment && legacyPeople.length ? legacyPeople : people;
    person=rankPeople(profile,pool)[0].person;
    libraryVersion=isLegacyAssessment ? LEGACY_LIBRARY_VERSION : LIBRARY_VERSION;
    poolSize=pool.length;
  }
  return {person,profile,context,assessmentVersion,isLegacyAssessment,libraryVersion,poolSize,isLegacy:libraryVersion!==LIBRARY_VERSION,
    answerSignature:typeof saved.resultAnswerSignature==='string' ? saved.resultAnswerSignature : personalitySignature(answers,assessmentVersion)};
}

/** Context-only edits preserve the identity within the same assessment; changed personality can rematch. */
export function refreshResult(answers,saved={},{rematch=false,assessmentVersion}={},people=PEOPLE) {
  const version=assessmentVersion ?? saved.assessmentVersion ?? (LEGACY_QUESTIONS.some(question=>Object.prototype.hasOwnProperty.call(answers || {},question.id)) ? LEGACY_ASSESSMENT_VERSION : ASSESSMENT_VERSION);
  if(!validateAnswers(answers,version).complete)throw new Error('请先完成全部单选题。');
  const signature=personalitySignature(answers,version);
  if(!rematch && saved.resultPersonId && saved.resultAnswerSignature===signature) {
    const result=resolveResult(answers,{...saved,assessmentVersion:version},people);
    if(result?.person.id===saved.resultPersonId)return {assessmentVersion:version,resultPersonId:result.person.id,resultLibraryVersion:result.libraryVersion,resultPoolSize:result.poolSize,resultAnswerSignature:result.answerSignature};
  }
  return createResult(answers,people,{assessmentVersion:version});
}
