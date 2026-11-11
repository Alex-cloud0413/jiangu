import { PEOPLE } from './content.js?v=0.2.0';
import { QUESTIONS, calculateProfile, rankPeople, validateAnswers } from './quiz.js?v=0.2.0';

export const LIBRARY_VERSION = 'world-32-v1';
export const LEGACY_LIBRARY_VERSION = 'china-8-v1';
export const LEGACY_PERSON_IDS = ['su-shi','li-qingzhao','tao-yuanming','wang-yangming','sima-qian','xin-qiji','ban-zhao','xu-xiake'];

export function personalitySignature(answers) {
  return QUESTIONS.filter(question=>question.kind==='personality').map(question=>`${question.id}:${answers?.[question.id] || ''}`).join('|');
}

/** Only an explicit completion or rematch replaces a saved identity. */
export function createResult(answers, people = PEOPLE) {
  if (!validateAnswers(answers).complete) throw new Error('请先完成全部单选题。');
  return {
    resultPersonId:rankPeople(calculateProfile(answers),people)[0].person.id,
    resultLibraryVersion:LIBRARY_VERSION,
    resultPoolSize:people.length,
    resultAnswerSignature:personalitySignature(answers)
  };
}

/** Old completed answers are resolved against the original pool, preserving v0.1 reports. */
export function resolveResult(answers, saved = {}, people = PEOPLE) {
  if (!validateAnswers(answers).complete) return null;
  const profile = calculateProfile(answers);
  const stored = people.find(person => person.id === saved.resultPersonId);
  if (stored) {
    const legacyId=LEGACY_PERSON_IDS.includes(stored.id);
    const libraryVersion=saved.resultLibraryVersion===LIBRARY_VERSION ? LIBRARY_VERSION : legacyId ? LEGACY_LIBRARY_VERSION : LIBRARY_VERSION;
    const poolSize=libraryVersion===LEGACY_LIBRARY_VERSION ? people.filter(person=>LEGACY_PERSON_IDS.includes(person.id)).length : people.length;
    return {person:stored,profile,libraryVersion,poolSize,isLegacy:libraryVersion!==LIBRARY_VERSION,answerSignature:typeof saved.resultAnswerSignature==='string' ? saved.resultAnswerSignature : personalitySignature(answers)};
  }
  const legacyPeople = people.filter(person => LEGACY_PERSON_IDS.includes(person.id));
  const pool = legacyPeople.length ? legacyPeople : people;
  return {person:rankPeople(profile,pool)[0].person,profile,libraryVersion:LEGACY_LIBRARY_VERSION,poolSize:pool.length,isLegacy:true,answerSignature:personalitySignature(answers)};
}

/** Updating a current-life answer changes the narrative, not the stored identity. */
export function refreshResult(answers,saved = {},{rematch = false} = {},people = PEOPLE) {
  if (!validateAnswers(answers).complete) throw new Error('请先完成全部单选题。');
  if (!rematch && saved.resultPersonId && saved.resultAnswerSignature===personalitySignature(answers)) {
    const result=resolveResult(answers,saved,people);
    if (result?.person.id===saved.resultPersonId) return {resultPersonId:result.person.id,resultLibraryVersion:result.libraryVersion,resultPoolSize:result.poolSize,resultAnswerSignature:result.answerSignature};
  }
  return createResult(answers,people);
}
