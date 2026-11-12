import * as legacy from './legacy-quiz.js?v=0.4.0';

/** Original editorial prompts and scores; this is not a validated psychological instrument. */
export const ASSESSMENT_VERSION = 'scale-v1';
export const LEGACY_ASSESSMENT_VERSION = 'choice-v1';
export const DIMENSIONS = legacy.DIMENSIONS;
export const SCALE_OPTIONS = [
  '非常不符合','比较不符合','有点不符合','不确定','有点符合','比较符合','非常符合'
].map((text,index)=>Object.freeze({id:String(index+1),text,level:index}));

function personality(id,dimension,title,reverse=false) {
  return {id,kind:'personality',dimension,title,reverse,hint:'按平常的自己来选。',
    options:SCALE_OPTIONS.map(option=>({...option,scoreStep:reverse ? 6-option.level : option.level,value:(reverse ? 6-option.level : option.level)*100/6}))};
}
function context(id,title,contextKey) {
  return {id,kind:'context',title,contextKey,reverse:false,hint:'只想想最近这段时间。',options:SCALE_OPTIONS.map(option=>({...option}))};
}

export const QUESTIONS = [
  personality('s01','expression','跟人聊着聊着，我常会把想法理顺。'),
  personality('s02','decision','做重要决定时，我会先想想人的感受。'),
  personality('s03','planning','出发前，我喜欢先把主要行程安排好。'),
  personality('s04','openness','闲下来时，没试过的事会更吸引我。'),
  personality('s05','expression','聚会里都是生面孔，我会主动找人聊聊。'),
  personality('s06','decision','意见不合时，我会先弄清事实和依据。',true),
  personality('s07','planning','我习惯边做边看，再决定下一步。',true),
  personality('s08','openness','做事情时，我更愿意用自己熟悉的办法。',true),
  personality('s09','expression','心里有了新的感受，我想先自己慢慢消化。',true),
  personality('s10','decision','选方案时，我会在意受影响的人能不能接受。'),
  personality('s11','planning','计划一变，我就想尽快把新安排定下来。'),
  personality('s12','openness','挑书或文章时，陌生的领域会让我好奇。'),
  personality('s13','expression','想法还没成形，我也愿意先和大家聊聊。'),
  personality('s14','decision','做判断时，我在意前后是不是用同一套标准。',true),
  personality('s15','planning','学新技能，我喜欢按计划一直练下去。'),
  personality('s16','openness','日子按熟悉的节奏过，我心里会更踏实。',true),
  personality('s17','expression','跟人待了一整天，我更想自己安静一会儿。',true),
  personality('s18','decision','要提不同意见，我会先试着理解对方的感受。'),
  personality('s19','planning','事情比较复杂，我会先列清单，排好顺序。'),
  personality('s20','openness','听到不一样的看法，我愿意换个角度想想。'),
  personality('s21','expression','聊到我熟悉的话题，我会主动说说自己的想法。'),
  personality('s22','decision','回头看一个决定，我先看它有没有达到预期。',true),
  personality('s23','planning','跟朋友见面，我喜欢到了再决定接下来做什么。',true),
  personality('s24','openness','去一个陌生的城市生活，想想就让我心动。'),
  personality('s25','expression','开口前，我习惯先把自己的想法理一理。',true),
  personality('s26','decision','两件事撞到一起，我会先想想各自对人的影响。'),
  personality('s27','planning','新机会来了，我愿意随时改改原先的计划。',true),
  personality('s28','openness','一件事做熟了，我更想找个新问题试试。'),
  context('s29','最近，挫折或被否定的经历让我心里难受。','setback'),
  context('s30','最近，我拿不准下一步该往哪儿走。','direction'),
  context('s31','最近，努力了却迟迟没回报，让我感到焦虑。','slow-growth'),
  context('s32','最近，我有精力试着做一点改变。','energy'),
  context('s33','有烦心事时，我希望有人先听我说一说。','company'),
  context('s34','眼下，我更想先弄懂自己，再考虑怎么做。','understanding'),
  personality('s35','planning','步骤和时间都安排清楚，我做事会更自在。'),
  personality('s36','openness','比起不断变化，我更喜欢日子过得稳定。',true),
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
