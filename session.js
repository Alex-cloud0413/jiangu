import { QUESTIONS, validateAnswers } from './quiz.js?v=0.4.0';
import { QUESTIONS as LEGACY_QUESTIONS } from './legacy-quiz.js?v=0.4.0';
import { resolveResult } from './results.js?v=0.4.0';

export const STORAGE_KEY = 'jiangu:v2';
export const LEGACY_STORAGE_KEY = 'jiangu:v1';

export function emptyState() {
  return {version:2,assessmentVersion:'scale-v1',answers:{},cursor:0,completedAt:null,resultPersonId:null,resultLibraryVersion:null,resultPoolSize:null,resultAnswerSignature:null};
}

function restore(saved, legacy) {
  const fallback = legacy ? null : emptyState();
  if (!saved || saved.version !== (legacy ? 1 : 2) || !saved.answers || typeof saved.answers !== 'object' || Array.isArray(saved.answers)) return fallback;
  if (!legacy && saved.assessmentVersion !== 'scale-v1') return fallback;
  const assessmentVersion = legacy ? 'choice-v1' : 'scale-v1';
  const questions = legacy ? LEGACY_QUESTIONS : QUESTIONS;
  const answers = {};
  for (const q of questions) if (q.options.some(option=>option.id===saved.answers[q.id])) answers[q.id]=saved.answers[q.id];
  const complete = validateAnswers(answers,assessmentVersion).complete;
  if (legacy && (!complete || !saved.completedAt)) return null;
  const metadata = {...saved,assessmentVersion};
  const result = complete && (saved.completedAt || saved.resultPersonId) ? resolveResult(answers,metadata) : null;
  return {
    version:legacy ? 1 : 2,assessmentVersion,answers,
    cursor:Number.isInteger(saved.cursor) ? Math.max(0,Math.min(questions.length-1,saved.cursor)) : 0,
    completedAt:complete ? saved.completedAt || null : null,
    resultPersonId:result?.person.id || null,
    resultLibraryVersion:result?.libraryVersion || null,
    resultPoolSize:result?.poolSize || null,
    resultAnswerSignature:result?.answerSignature || null
  };
}

export const restoreScaleState = saved => restore(saved,false);
export const restoreLegacyState = saved => restore(saved,true);
