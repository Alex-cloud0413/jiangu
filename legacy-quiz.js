/**
 * 见古 0.1 / 编辑性人格探索，非经验证的心理量表。
 * 人格选择仅依赖 personality 项。context 项只决定报告的讲述角度。
 * 所有分数都是本产品内部比较值，不是人格强度或相似度百分比。
 */
export const DIMENSIONS = [
  { id: 'expression', label: '表达方式', left: '内敛整理', right: '向外表达', description: '想法更常在独处中成形，还是在交流中逐渐清晰。' },
  { id: 'decision', label: '判断重心', left: '逻辑标准', right: '人际感受', description: '作决定时，更先检查一致的依据，还是先理解具体的人。' },
  { id: 'planning', label: '行动节奏', left: '灵活调整', right: '提前规划', description: '更愿意在行动中寻找路线，还是先安排好路径再出发。' },
  { id: 'openness', label: '变化偏好', left: '熟悉稳定', right: '探索可能', description: '面对可选择的生活，更容易被熟悉的确定性，还是新的可能吸引。' },
];

const letters = ['a', 'b', 'c', 'd'];
const personality = (id, dimension, title, entries, hint = '选最像平常的你的一项，不用选你觉得应该成为的样子。') => ({
  id, kind: 'personality', dimension, title, hint,
  options: entries.map(([text, value], index) => ({ id: letters[index], text, value })),
});
const context = (id, title, entries, hint = '只考虑最近一段时间的自己。') => ({
  id, kind: 'context', title, hint,
  options: entries.map(([text, data], index) => ({ id: letters[index], text, context: data })),
});

export const QUESTIONS = [
  personality('q01', 'expression', '一个新想法冒出来时，你通常怎样把它想清楚？', [
    ['先自己想一会儿，成形后再说', 0], ['写点东西，再找熟人聊', 33], ['边和人聊天边理清思路', 67], ['立刻说出来，让讨论带着它向前走', 100],
  ]),
  personality('q02', 'decision', '朋友问你要不要离开一份工作，你会先问什么？', [
    ['这份工作让你最难受的是什么', 100], ['留下和离开，各自有什么实际条件', 0], ['你想过怎样的生活，条件能否支持它', 67], ['两条路的得失，哪些最重要', 33],
  ]),
  personality('q03', 'planning', '一个月后的旅行刚确定下来，你更接近哪种安排？', [
    ['先定几处想去的地方，其余到了再说', 33], ['交通、住宿和每天行程都先安排好', 100], ['只定出发时间，看当时想往哪里走', 0], ['先安排主要路线，再留出一些空白', 67],
  ]),
  personality('q04', 'openness', '周末有一整天空闲，你更容易被哪种安排吸引？', [
    ['去没去过的地方，做点没做过的事', 100], ['照常去喜欢的店，过熟悉的一天', 0], ['保留习惯的安排，加一个小小的新尝试', 33], ['换个地方或方式，让这一天有些不同', 67],
  ]),
  personality('q05', 'expression', '聚会里，大多数人你都不熟悉。你通常会？', [
    ['自然地和身边的人聊起来', 100], ['先听大家说，遇到兴趣相投的话题再加入', 33], ['和一两个人慢慢聊，比较自在', 0], ['主动接几个话题，再看看想和谁深聊', 67],
  ]),
  personality('q06', 'decision', '两位同事对同一件事各执一词，你更自然的做法是？', [
    ['先分别听听，他们为什么这么在意', 100], ['先把双方一致和不一致的事实列出来', 0], ['看清事实后，再了解各自的处境', 33], ['先理解各自的顾虑，再寻找共同依据', 67],
  ]),
  personality('q07', 'planning', '接到一件两周后交付的事，你最舒服的推进方式是？', [
    ['今天先试着做一点，再判断怎么安排', 0], ['分成几个阶段，每个阶段留一点调整空间', 67], ['先定交付目标，按每天的进展灵活推进', 33], ['先拆好步骤和时间点，照着逐项完成', 100],
  ]),
  personality('q08', 'openness', '两种办法都能完成任务，你会更偏向哪一种？', [
    ['已经很熟悉、表现稳定的办法', 0], ['新办法，哪怕需要重新摸索', 100], ['熟悉的办法为主，局部试试新方法', 33], ['先试新办法，必要时回到熟悉的方法', 67],
  ]),
  personality('q09', 'expression', '经历了一件让你很有感触的事，你通常会？', [
    ['先在心里消化，未必需要马上分享', 0], ['很想及时讲给别人听', 100], ['先找一个信任的人聊一聊', 33], ['和几位朋友聊聊，从回应里获得新的感受', 67],
  ]),
  personality('q10', 'decision', '大家要在两个方案中选一个，你最先在意什么？', [
    ['受影响的人能否接受这个选择', 100], ['哪一个更符合事先约定的标准', 0], ['先符合主要标准，再照顾个别处境', 33], ['先听清不同人的需要，再比较方案', 67],
  ]),
  personality('q11', 'planning', '朋友临时改了你们原定的周末安排，你的第一反应更接近？', [
    ['重新排一下时间，确定新的安排', 67], ['正好看看还能做什么，随时调整', 0], ['先了解变化，保留原安排中最重要的部分', 33], ['希望尽快确定替代方案，让一天重新有序', 100],
  ]),
  personality('q12', 'openness', '你在书店可以随意挑一本书，更容易拿起哪一本？', [
    ['喜欢的作者或熟悉领域的新作', 0], ['一个原本完全不了解的领域', 100], ['熟悉领域里，和自己观点不同的书', 67], ['和最近兴趣有关、内容有些新意的书', 33],
  ]),
  personality('q13', 'expression', '讨论中你想到一个还不成熟的观点，通常会？', [
    ['先说出来，听大家怎么接', 100], ['想得更完整一些再开口', 0], ['先用问题的方式试探一下', 33], ['说明只是初步想法，然后一起完善', 67],
  ]),
  personality('q14', 'decision', '熟人请求你为他破一次惯例，你会怎样考虑？', [
    ['先了解这次请求背后的具体难处', 100], ['先看这个例外能否适用于其他相同情况', 0], ['先检查惯例的理由，再考虑特殊处境', 33], ['先理解处境，再想怎样兼顾原有约定', 67],
  ]),
  personality('q15', 'planning', '为了学习一项新技能，你更可能？', [
    ['先排一个学习计划，按进度练习', 100], ['跟着当下的兴趣，先动手玩起来', 0], ['确定一个阶段目标，具体方法随时调整', 67], ['先尝试几种学法，再决定要不要安排进度', 33],
  ]),
  personality('q16', 'openness', '一段已经很顺手的日常，你更希望它？', [
    ['继续保持，让自己少花心思', 0], ['经常有变化，能遇见不同的可能', 100], ['大体稳定，偶尔添点新鲜内容', 33], ['保留必要的固定部分，其余常常换一换', 67],
  ]),
  personality('q17', 'expression', '和人相处了一整天，接下来有两小时属于自己。你更想？', [
    ['安静待着，让注意力回到自己身上', 0], ['如果聊得投机，还想继续见人', 100], ['找熟悉的人轻松聊聊，不想太热闹', 67], ['独处一会儿，再看是否想联系别人', 33],
  ]),
  personality('q18', 'decision', '你需要给一个朋友提不同意见，最自然的起点是？', [
    ['先指出关键依据，把不同的判断讲清楚', 0], ['先让他知道，你理解他的感受和用意', 100], ['把观点讲清楚，再确认他听后的感受', 33], ['先确认他的处境，再慢慢谈自己的判断', 67],
  ]),
  personality('q19', 'planning', '整理一项复杂的个人事务时，你比较习惯？', [
    ['想到哪一部分就先处理哪一部分', 0], ['先列清单，确定先后顺序再开始', 100], ['列出主要事项，次序可以跟着进展改变', 67], ['先解决最顺手的一点，做着做着再整理', 33],
  ]),
  personality('q20', 'openness', '有人提出一个与你原先想法很不同的观点，你通常？', [
    ['很想沿着它想下去，看看能走到哪里', 100], ['先看它和自己已有经验能否对上', 0], ['愿意了解，但更想找到可验证的具体部分', 33], ['愿意暂时放下原有判断，试着换个角度看', 67],
  ]),
  personality('q21', 'expression', '朋友们正在讨论一个你熟悉的话题，你更常？', [
    ['直接加入，把自己的想法展开说', 100], ['听到有人问，或确有补充时再说', 0], ['先听一会儿，再选择一个点加入', 33], ['边听边回应，自然地接着往下聊', 67],
  ]),
  personality('q22', 'decision', '回顾一个重要选择，你更容易用什么判断它是否合适？', [
    ['当时的理由是否一致，结果是否符合目标', 0], ['它是否照顾到自己和重要的人的真实需要', 100], ['主要目标是否达成，同时有没有遗漏人的处境', 33], ['相关的人是否感到合适，再看具体结果', 67],
  ]),
  personality('q23', 'planning', '你要组织一次几位朋友的碰面，更愿意？', [
    ['先约好时间地点，其他到时随意', 33], ['时间、地点、活动和备选方案都先想好', 100], ['先把人约出来，到时候一起决定做什么', 0], ['先确定主要安排，再留一段自由时间', 67],
  ]),
  personality('q24', 'openness', '如果有机会在另一个城市生活一段时间，你更接近哪种想法？', [
    ['新环境本身就很吸引我，愿意试试看', 100], ['除非有明确需要，否则更想留在熟悉的生活里', 0], ['如果能保留重要的日常联系，也愿意尝试', 33], ['愿意去体验，具体的不熟悉可以慢慢适应', 67],
  ]),
  personality('q25', 'expression', '一场讨论结束后，你最常发现自己？', [
    ['有些话回去想清楚了，才知道要怎么说', 0], ['在说的过程中，已经逐渐形成了判断', 100], ['交流提供了线索，但还想独自整理一下', 33], ['想法已基本成形，还愿意找人接着聊', 67],
  ]),
  personality('q26', 'decision', '两件同样重要的事撞在一起，你首先会？', [
    ['比较时间、影响和已有承诺，定出优先顺序', 0], ['想想每个选择对相关的人意味着什么', 100], ['先比较事情本身，再考虑对人的影响', 33], ['先确认自己最在意的关系与需要，再安排事情', 67],
  ]),
  personality('q27', 'planning', '一个长期安排出现了更有意思的新机会，你通常？', [
    ['先抓住机会，原来的安排可以再改', 0], ['先检查原计划，除非必要尽量不改', 100], ['保留原计划的主线，为机会调整一部分', 67], ['先探索机会，再决定原计划保留多少', 33],
  ]),
  personality('q28', 'openness', '当你熟练掌握了一件事，接下来更有吸引力的是？', [
    ['继续精进，让它变成可靠的长处', 0], ['转向一个自己还不了解的新问题', 100], ['在原有长处旁边，延伸一点新的内容', 33], ['找一个不同的场景，重新试试自己的可能', 67],
  ]),
  context('q29', '最近，哪一种处境更接近你？', [
    ['遭遇挫折或被否定，想找回自己的节奏', { struggle: 'setback' }],
    ['站在选择面前，不确定接下来往哪里走', { struggle: 'direction' }],
    ['一直在努力，但暂时看不到期待的回报', { struggle: 'slow-growth' }],
    ['暂时没有明显困境，主要想认识自己', { struggle: 'none' }],
  ], '它只会改变报告中的人生片段，不会改变你匹配的人物。'),
  context('q30', '被一件事卡住的时候，你最近最常出现哪种反应？', [
    ['反复想同一件事，迟迟难以下决定', { pattern: 'ruminate' }],
    ['再多做一点，希望靠行动推开局面', { pattern: 'push' }],
    ['先暂时放一放，等自己有余力再回来', { pattern: 'pause' }],
    ['找人聊聊，看看有没有遗漏的角度', { pattern: 'seek-feedback' }],
  ]),
  context('q31', '这时候，哪一种支持更让你觉得有用？', [
    ['给我一点空间，让我自己慢慢想清楚', { support: 'space' }],
    ['陪我把问题拆开，理出可以做的步骤', { support: 'structure' }],
    ['先听我说完，不急着帮我下结论', { support: 'company' }],
    ['给我一个原来没想到过的观察角度', { support: 'new-angle' }],
  ]),
  context('q32', '如果明天开始做一点改变，你当下的余力更接近？', [
    ['只想先做一件很小、不太费劲的事', { energy: 'low' }],
    ['有时愿意行动，有时更想停一停', { energy: 'variable' }],
    ['可以稳定留出一些时间，慢慢推进', { energy: 'steady' }],
    ['已经准备好，想马上试一种新做法', { energy: 'ready' }],
  ]),
  context('q33', '读完这份报告，你最希望带走什么？', [
    ['一个今天就能试的小行动', { goal: 'next-step' }],
    ['一个帮助自己作选择的提问', { goal: 'decision' }],
    ['一段能让我更理解自己的解释', { goal: 'understanding' }],
    ['一点继续往前走的勇气', { goal: 'encouragement' }],
  ]),
  context('q34', '关于这位历史人物，你最想先看见什么？', [
    ['他在岔路口怎样作出选择', { focus: 'choices' }],
    ['他为自己的选择承担了什么', { focus: 'costs' }],
    ['他如何一点点改变原来的局面', { focus: 'turning-point' }],
    ['局面未变时，他怎样继续过日子', { focus: 'daily-life' }],
  ], '没有标准答案，只是帮我们找到你更关心的阅读角度。'),
  personality('q35', 'planning', '最后，再想想你做事时最自在的状态。更接近哪一句？', [
    ['下一步明确，变化来了也能有序调整', 67],
    ['先行动，路线往往会在过程中出现', 0],
    ['有一个方向，但不必太早确定每一步', 33],
    ['事情有清楚的结构和时间安排', 100],
  ], '这题回到你平常的偏好，不只考虑眼下的困境。'),
  personality('q36', 'openness', '如果不用考虑别人的期待，你希望自己的生活多一些什么？', [
    ['熟悉、稳定，以及不断加深的积累', 0],
    ['未知、变化，以及重新开始的可能', 100],
    ['安稳的底座，和偶尔出现的新鲜感', 33],
    ['持续探索，同时保留几处熟悉的落脚点', 67],
  ], '没有哪种生活更好，选让你更有向往的一项。'),
];

const dimensionIds = DIMENSIONS.map((dimension) => dimension.id);
const questionMap = new Map(QUESTIONS.map((question) => [question.id, question]));
const personalityQuestions = QUESTIONS.filter((question) => question.kind === 'personality');

function getSelection(question, answers) {
  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) return undefined;
  if (!Object.prototype.hasOwnProperty.call(answers, question.id)) return undefined;
  return question.options.find((option) => option.id === answers[question.id]);
}

export function validateAnswers(answers) {
  const missing = QUESTIONS.filter((question) => !getSelection(question, answers)).map((question) => question.id);
  return { complete: missing.length === 0, answered: QUESTIONS.length - missing.length, total: QUESTIONS.length, missing };
}

export function calculateProfile(answers) {
  const incomplete = personalityQuestions.filter((question) => !getSelection(question, answers));
  if (incomplete.length) throw new Error(`性格题尚未完成：${incomplete.map((question) => question.id).join('、')}`);
  return Object.fromEntries(dimensionIds.map((id) => {
    const questions = personalityQuestions.filter((question) => question.dimension === id);
    const average = questions.reduce((sum, question) => sum + getSelection(question, answers).value, 0) / questions.length;
    return [id, Number(average.toFixed(1))];
  }));
}

function vectorOf(profile) {
  const vector = Array.isArray(profile) ? profile : dimensionIds.map((id) => profile?.[id]);
  if (vector.length !== dimensionIds.length || vector.some((value) => !Number.isFinite(value) || value < 0 || value > 100)) {
    throw new TypeError('画像需要四个 0—100 之间的有效数值。');
  }
  return vector;
}

export function rankPeople(profile, people) {
  const userVector = vectorOf(profile);
  if (!Array.isArray(people) || people.length === 0) throw new TypeError('人物库不能为空。');
  const ranking = people.map((person) => {
    if (!person || typeof person.id !== 'string' || !person.id) throw new TypeError('人物必须有稳定的 id。');
    const vector = vectorOf(person.vector);
    const distance = vector.reduce((sum, value, index) => sum + (value - userVector[index]) ** 2, 0) / userVector.length;
    return { person, distance };
  });
  return ranking.sort((a, b) => a.distance - b.distance || (a.person.id < b.person.id ? -1 : a.person.id > b.person.id ? 1 : 0));
}

export function matchPerson(answers, people) {
  return rankPeople(calculateProfile(answers), people)[0].person;
}

/** Context values are stable codes; none means no self-reported current difficulty. */
export function getContext(answers) {
  const defaults = { struggle: 'none', support: 'space', pattern: 'pause', energy: 'steady', goal: 'understanding', focus: 'choices' };
  for (const question of QUESTIONS) {
    if (question.kind !== 'context') continue;
    const selection = getSelection(question, answers);
    if (selection) Object.assign(defaults, selection.context);
  }
  return defaults;
}

export function getAnswerEvidence(answers, dimension) {
  if (!dimensionIds.includes(dimension)) return [];
  return personalityQuestions.filter((question) => question.dimension === dimension).flatMap((question) => {
    const option = getSelection(question, answers);
    return option ? [{ questionId: question.id, title: question.title, answer: option.text, value: option.value }] : [];
  });
}

// Kept exported for consumers that need stable question lookup without array positions.
export function getQuestion(id) {
  return questionMap.get(id);
}
