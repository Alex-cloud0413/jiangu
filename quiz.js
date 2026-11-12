import * as legacy from './legacy-quiz.js?v=0.3.0';

/** Original editorial prompts and scores; this is not a validated psychological instrument. */
export const ASSESSMENT_VERSION = 'scale-v1';
export const LEGACY_ASSESSMENT_VERSION = 'choice-v1';
export const DIMENSIONS = legacy.DIMENSIONS;
export const SCALE_OPTIONS = [
  '非常不符合','比较不符合','有点不符合','不确定','有点符合','比较符合','非常符合'
].map((text,index)=>Object.freeze({id:String(index+1),text,level:index}));

function personality(id,dimension,title,reverse=false) {
  return {id,kind:'personality',dimension,title,reverse,hint:'按平常的自己，选择符合程度。',
    options:SCALE_OPTIONS.map(option=>({...option,scoreStep:reverse ? 6-option.level : option.level,value:(reverse ? 6-option.level : option.level)*100/6}))};
}
function context(id,title,contextKey) {
  return {id,kind:'context',title,contextKey,reverse:false,hint:'只考虑最近一段时间。',options:SCALE_OPTIONS.map(option=>({...option}))};
}

export const QUESTIONS = [
  personality('s01','expression','和别人交流时，我的想法会更清晰。'),
  personality('s02','decision','面对重要选择，我会先考虑人的感受。'),
  personality('s03','planning','出行之前，我喜欢提前安排主要行程。'),
  personality('s04','openness','空闲时，我更想尝试没有体验过的事。'),
  personality('s05','expression','在陌生人的聚会里，我会主动聊天。'),
  personality('s06','decision','发生分歧时，我会先核对事实和依据。',true),
  personality('s07','planning','开始一件事后，我会边做边决定下一步。',true),
  personality('s08','openness','完成一件事时，我更愿意用熟悉的方法。',true),
  personality('s09','expression','有了新的感受，我更想先自己消化。',true),
  personality('s10','decision','选择方案时，我在意相关的人能否接受。'),
  personality('s11','planning','计划改变时，我希望尽快确定新安排。'),
  personality('s12','openness','挑选读物时，陌生的领域会让我好奇。'),
  personality('s13','expression','讨论时，我愿意说出还在成形的想法。'),
  personality('s14','decision','判断一件事时，我看重标准是否一致。',true),
  personality('s15','planning','学习新技能时，我喜欢按计划持续练习。'),
  personality('s16','openness','生活保持熟悉的节奏，会让我更安心。',true),
  personality('s17','expression','和人相处一整天后，我更想安静独处。',true),
  personality('s18','decision','提出不同意见前，我会先理解对方的感受。'),
  personality('s19','planning','处理复杂事务时，我会先列清单排顺序。'),
  personality('s20','openness','遇到不同观点，我愿意换个角度想想。'),
  personality('s21','expression','聊到熟悉的话题，我会主动表达观点。'),
  personality('s22','decision','做决定时，我会先比较目标与实际结果。',true),
  personality('s23','planning','和朋友见面时，我喜欢到场后再决定安排。',true),
  personality('s24','openness','到陌生的城市生活，对我很有吸引力。'),
  personality('s25','expression','说话之前，我习惯先把想法整理好。',true),
  personality('s26','decision','两件事撞在一起时，我先考虑对人的影响。'),
  personality('s27','planning','遇到新机会时，我愿意随时调整原计划。',true),
  personality('s28','openness','熟练掌握一件事后，我更想探索新问题。'),
  context('s29','最近，我正因为受挫或被否定而困扰。','setback'),
  context('s30','最近，我对下一步该往哪里走感到迷茫。','direction'),
  context('s31','最近，努力迟迟没有回报让我感到焦虑。','slow-growth'),
  context('s32','最近，我有精力尝试一点新的改变。','energy'),
  context('s33','遇到困扰时，我希望有人先听我说一说。','company'),
  context('s34','此刻，我更希望先理解自己，再考虑行动。','understanding'),
  personality('s35','planning','有清楚的步骤和时间安排，会让我更自在。'),
  personality('s36','openness','比起不断变化，我更喜欢稳定的生活。',true),
];

const dimensionIds=DIMENSIONS.map(dimension=>dimension.id);
const personalityQuestions=QUESTIONS.filter(question=>question.kind==='personality');
const questionMap=new Map(QUESTIONS.map(question=>[question.id,question]));
function isLegacy(version) {
  if(version!==ASSESSMENT_VERSION && version!==LEGACY_ASSESSMENT_VERSION)throw new TypeError('未知的测评版本。');
  return version===LEGACY_ASSESSMENT_VERSION;
}
function getSelection(question,answers) {
  if(!answers || typeof answers!=='object' || Array.isArray(answers) || !Object.prototype.hasOwnProperty.call(answers,question.id))return undefined;
  return question.options.find(option=>option.id===answers[question.id]);
}

export function validateAnswers(answers,assessmentVersion=ASSESSMENT_VERSION) {
  if(isLegacy(assessmentVersion))return legacy.validateAnswers(answers);
  const missing=QUESTIONS.filter(question=>!getSelection(question,answers)).map(question=>question.id);
  return {complete:missing.length===0,answered:QUESTIONS.length-missing.length,total:QUESTIONS.length,missing};
}
export function calculateProfile(answers,assessmentVersion=ASSESSMENT_VERSION) {
  if(isLegacy(assessmentVersion))return legacy.calculateProfile(answers);
  const missing=personalityQuestions.filter(question=>!getSelection(question,answers));
  if(missing.length)throw new Error(`性格题尚未完成：${missing.map(question=>question.id).join('、')}`);
  return Object.fromEntries(dimensionIds.map(id=>{
    const questions=personalityQuestions.filter(question=>question.dimension===id);
    const sum=questions.reduce((value,question)=>value+getSelection(question,answers).scoreStep,0);
    return [id,Number((sum*100/(questions.length*6)).toFixed(1))];
  }));
}
export const rankPeople=legacy.rankPeople;
export function matchPerson(answers,people,assessmentVersion=ASSESSMENT_VERSION) {
  return rankPeople(calculateProfile(answers,assessmentVersion),people)[0].person;
}

/** Context never changes personality. Three equally strong difficulties use stable question order. */
export function getContext(answers,assessmentVersion=ASSESSMENT_VERSION) {
  if(isLegacy(assessmentVersion))return legacy.getContext(answers);
  const result={struggle:'none',support:'none',pattern:'none',energy:'steady',goal:'understanding',focus:'daily-life',struggleEvidence:null};
  let strongest=3;
  for(const question of QUESTIONS.slice(28,31)) {
    const selection=getSelection(question,answers);
    if(selection && selection.level>strongest) {
      strongest=selection.level;result.struggle=question.contextKey;
      result.struggleEvidence={questionId:question.id,title:question.title,answerText:selection.text};
    }
  }
  const energy=getSelection(questionMap.get('s32'),answers);
  if(energy)result.energy=energy.level<=1 ? 'low' : energy.level<=3 ? 'variable' : energy.level===4 ? 'steady' : 'ready';
  const company=getSelection(questionMap.get('s33'),answers);
  if(company && company.level>3)result.support='company';
  const understanding=getSelection(questionMap.get('s34'),answers);
  if(understanding && understanding.level<3)result.goal='next-step';
  return result;
}
export function getAnswerEvidence(answers,dimension,assessmentVersion=ASSESSMENT_VERSION) {
  if(isLegacy(assessmentVersion))return legacy.getAnswerEvidence(answers,dimension);
  if(!dimensionIds.includes(dimension))return [];
  return personalityQuestions.filter(question=>question.dimension===dimension).flatMap(question=>{
    const option=getSelection(question,answers);
    return option ? [{questionId:question.id,title:question.title,answer:option.text,value:option.value,reverse:question.reverse}] : [];
  });
}
export function getQuestion(id,assessmentVersion=ASSESSMENT_VERSION) {
  return isLegacy(assessmentVersion) ? legacy.getQuestion(id) : questionMap.get(id);
}
