import { PEOPLE, STRUGGLES } from './content.js';
import { DIMENSIONS, QUESTIONS, calculateProfile, rankPeople, getContext, getAnswerEvidence, validateAnswers } from './quiz.js';

const STORAGE_KEY = 'jiangu:v1';
const app = document.querySelector('#app');
const infoDialog = document.querySelector('#info-dialog');
const shareDialog = document.querySelector('#share-dialog');
const dimensionIds = DIMENSIONS.map(d => d.id);
const escape = value => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch]));
const arrow = '<span class="arrow" aria-hidden="true">↗</span>';
let storageAvailable = true;
let state = loadState();
let currentReport = null;
let readingStruggle = null;
let readingEvent = null;
let posterBlob = null;
let posterGeneration = 0;
let toastTimeout;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!saved || saved.version !== 1 || !saved.answers || typeof saved.answers !== 'object' || Array.isArray(saved.answers)) return emptyState();
    const answers = {};
    QUESTIONS.forEach(q => { if (q.options.some(o => o.id === saved.answers[q.id])) answers[q.id] = saved.answers[q.id]; });
    return { version:1, answers, cursor:Number.isInteger(saved.cursor) ? Math.max(0, Math.min(QUESTIONS.length - 1, saved.cursor)) : 0, completedAt:validateAnswers(answers).complete ? saved.completedAt || null : null };
  } catch { return emptyState(); }
}
function emptyState() { return { version:1, answers:{}, cursor:0, completedAt:null }; }
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch { storageAvailable = false; }
}
function toast(message) {
  const el = document.querySelector('#toast');
  clearTimeout(toastTimeout); el.textContent = message; el.classList.add('visible');
  toastTimeout = setTimeout(() => el.classList.remove('visible'), 3200);
}
function navigate(hash) {
  infoDialog.close(); shareDialog.close();
  if (location.hash === hash) renderRoute(); else location.hash = hash;
}
function portrait(person, extra = '') {
  const x = (person.portraitIndex % 4) * 100 / 3;
  const y = Math.floor(person.portraitIndex / 4) * 100;
  return `<div class="portrait ${extra}" role="img" aria-label="${escape(person.name)}的艺术演绎插画" style="background-position:${x}% ${y}%"></div>`;
}
function tags(person) { return person.tags.map(t => `<span class="tag">${escape(t)}</span>`).join(''); }
function nav() {
  return `<header class="wrap nav"><a class="logo" href="#home" aria-label="见古首页"><span class="seal" aria-hidden="true">见</span><span><span class="brand-name">见古</span><span class="brand-en">JIANGU · KNOW YOURSELF</span></span></a><span class="nav-center">以古为镜，照见自己。</span><nav class="nav-links" aria-label="主导航"><a class="nav-library" href="#home" data-action="library">人物小传</a><button class="plain-button" data-action="about">关于见古</button><a class="nav-start" href="#quiz" data-action="start">开始探索 ↗</a></nav></header>`;
}
function footer() {
  return `<footer class="wrap site-footer"><p class="footer-note">见古 0.1 · 一场有历史依据的人格探索。人物匹配是编辑性解读，未经心理测量验证。画像为艺术演绎。<br>© 2026 见古 · 历史很远，相似的心事很近。</p><div class="footer-actions"><button data-action="method">匹配依据</button><button data-action="privacy">本机数据</button></div></footer>`;
}
function focusMain() {
  requestAnimationFrame(() => { const el = document.querySelector('#main-content'); el?.focus({ preventScroll:true }); window.scrollTo(0, 0); });
}
function renderHome() {
  document.title = '见古 — 在历史里，遇见另一个你'; currentReport = null;
  const status = validateAnswers(state.answers);
  const completed = status.complete && state.completedAt;
  const startText = completed ? '查看我的历史人格' : status.answered ? `继续我的探索 · ${status.answered}/36` : '找到我的历史人格';
  const featured = ['li-qingzhao', 'sima-qian', 'su-shi', 'xu-xiake'].map(id => PEOPLE.find(p => p.id === id));
  app.innerHTML = `${nav()}<main id="main-content" class="wrap fade-in" tabindex="-1"><section class="hero"><div class="eyebrow">一场跨越千年的性格探索 · VOL. 01</div><h1>在历史里，<br><em>遇见另一个你。</em></h1><p class="hero-description">你的性格，像历史上的哪一个人？<br>从一段真实人生里，也许能读懂此刻的自己。</p><div class="hero-actions"><button class="button" data-action="${completed ? 'my-report' : 'start'}">${startText}${arrow}</button><button class="text-button" data-action="sample">先读一份报告 ↗</button></div><div class="hero-meta"><span>36 道单选</span><span>约 10 分钟</span><span>答案留在本机</span></div><div class="hero-aside">不问前世，只照见当下。</div><div class="portrait-strip" aria-label="首版人物插画"><span class="strip-stamp">古今同心</span>${featured.map(p => `<div class="portrait-card">${portrait(p)}<div class="portrait-caption"><strong>${escape(p.name)}</strong><span>${escape(p.era)} · ${escape(p.title)}</span></div></div>`).join('')}<span class="strip-note">八种人生，万千可能。</span></div></section><section class="journey" aria-label="探索的三个阶段">${[
    ['01','认识真实的你','从日常选择，看见性格偏好'],['02','遇见历史中的人','找到相近的人，读懂相似之处'],['03','照见当下的路','从真实经历里，获得一个新视角']
  ].map(([n,t,d]) => `<div class="journey-item"><div class="journey-number">${n}</div><div><h2 class="journey-title">${t}</h2><p class="journey-description">${d}</p></div></div>`).join('')}</section><section id="people-library" class="section"><div class="section-heading"><div><p class="eyebrow">THE PEOPLE · 人物小传</p><h2>你会与谁，不期而遇？</h2></div><p>有人向远方走去，有人在日常里扎根。<br>先从八种不同的人生，认识自己的一面。</p></div><div class="people-grid">${PEOPLE.map((p,i) => `<button class="person-tile" data-action="person" data-id="${p.id}" aria-label="阅读${escape(p.name)}的人物小传"><div class="person-image-wrap"><span class="person-index">${String(i+1).padStart(2,'0')}</span>${portrait(p)}</div><div class="person-tile-meta"><span class="person-tile-name">${escape(p.name)}</span><span class="person-tile-era">${escape(p.era)} ↗</span></div><p class="person-tile-title">${escape(p.title)} · ${escape(p.tags[0])}</p></button>`).join('')}</div><div class="sample-invite"><div><p class="eyebrow">A LETTER FROM THE PAST</p><h3>先看看，一次相遇会是什么样。</h3><p>以苏轼为例，读一份完整的历史人格报告。</p></div><button class="text-button" data-action="sample">打开示例报告 ↗</button></div></section></main>${footer()}`;
}

function chapterFor(index) { return index < 14 ? 0 : index < 28 ? 1 : index < 34 ? 2 : 3; }
function renderQuiz() {
  currentReport = null; document.title = '认识自己 · 见古';
  const q = QUESTIONS[state.cursor];
  const completedCount = validateAnswers(state.answers).answered;
  const chapters = [['认识平常的你','日常与相处 · 01—14'],['看见你的选择','判断与行动 · 15—28'],['此刻的你','最近的处境 · 29—34'],['再多认识一点','最后两问 · 35—36']];
  const active = chapterFor(state.cursor);
  app.innerHTML = `${nav()}<main id="main-content" class="wrap quiz-layout fade-in" tabindex="-1"><aside class="quiz-sidebar"><p class="eyebrow">YOUR OWN STORY</p><h2>答案没有好坏，<br>只需像你。</h2>${chapters.map(([t,s],i) => `<div class="chapter ${active === i ? 'active' : ''}"><span class="mono">0${i+1}</span><div><p class="chapter-title">${t}</p><p class="chapter-sub">${s}</p></div></div>`).join('')}<p class="sidebar-note">按平常的自己作答，<br>不必成为任何人的理想答案。<br><br>你可以随时返回修改。</p><button class="plain-button" data-action="save-exit">保存，稍后继续 ↗</button></aside><div class="quiz-main"><div class="question-progress"><span>${escape(chapters[active][0])}</span><span class="mono">${String(state.cursor+1).padStart(2,'0')} / 36</span></div><div class="progress-track" role="progressbar" aria-label="已回答题数" aria-valuemin="0" aria-valuemax="36" aria-valuenow="${completedCount}"><div class="progress-value" style="width:${completedCount/36*100}%"></div></div>${state.cursor === 28 ? '<p class="chapter-break">性格画像已初步成形。接下来，聊聊你最近的处境。</p>' : ''}${state.cursor === 34 ? '<p class="chapter-break">最后两问。让这个历史身影，再清晰一点。</p>' : ''}<p class="question-label">QUESTION ${String(state.cursor+1).padStart(2,'0')} · ${q.kind === 'context' ? '当下的处境' : '平常的你'}</p><form id="question-form"><fieldset><legend class="question-title">${escape(q.title)}</legend><p class="question-hint">${escape(q.hint)}</p><div class="options">${q.options.map((o,i) => `<label class="option"><input type="radio" name="answer" value="${o.id}" ${state.answers[q.id] === o.id ? 'checked' : ''} required><span class="option-letter" aria-hidden="true">${String.fromCharCode(65+i)}</span><span>${escape(o.text)}</span><span class="option-mark" aria-hidden="true">✓</span></label>`).join('')}</div></fieldset><div class="quiz-actions"><button type="button" class="plain-button" data-action="previous" ${state.cursor === 0 ? 'disabled' : ''}>← 上一题</button><button id="next-question" type="submit" class="button" ${!state.answers[q.id] ? 'disabled' : ''}>${state.cursor === QUESTIONS.length-1 ? '遇见我的历史人格' : '下一题'}<span class="arrow" aria-hidden="true">→</span></button></div></form>${validateAnswers(state.answers).complete ? '<div class="quiz-update"><button class="text-button" data-action="update-report">修改好了，更新报告 ↗</button></div>' : ''}<div class="question-dots" aria-hidden="true">${QUESTIONS.map((item,i) => `<span class="question-dot ${state.answers[item.id] ? 'answered' : ''} ${i === state.cursor ? 'current' : ''}"></span>`).join('')}</div><p class="quiz-save">${storageAvailable ? '进度自动保存在本浏览器 · 退出后可以继续' : '浏览器未允许保存进度 · 请保持此页打开'}<button class="plain-button" data-action="save-exit">　暂存退出</button></p></div></main>`;
}
function advanceQuestion() {
  const q = QUESTIONS[state.cursor];
  if (!q.options.some(o => o.id === state.answers[q.id])) { toast('先选择最接近你的一项。'); return; }
  if (state.cursor === QUESTIONS.length-1) {
    const check = validateAnswers(state.answers);
    if (!check.complete) {
      state.cursor = QUESTIONS.findIndex(item => item.id === check.missing[0]);
      if (state.cursor < 0) state.cursor = 0;
      saveState(); renderQuiz(); focusMain(); toast('还有一道题没回答，我们回去看看。'); return;
    }
    state.completedAt = new Date().toISOString(); saveState(); readingStruggle = null; readingEvent = null; navigate('#report');
  } else { state.cursor++; saveState(); renderQuiz(); focusMain(); }
}
function makeSample() {
  const person = PEOPLE.find(p => p.id === 'su-shi');
  const answers = {};
  QUESTIONS.forEach(q => {
    if (q.kind === 'personality') {
      const target = person.vector[dimensionIds.indexOf(q.dimension)];
      answers[q.id] = [...q.options].sort((a,b) => Math.abs(a.value-target)-Math.abs(b.value-target))[0].id;
    } else answers[q.id] = q.options[0].id;
  });
  const context = getContext(answers);
  return { person, answers, profile:calculateProfile(answers), context, sample:true };
}
const preferenceCopy = {
  expression: [ ['先让想法在心里长好','你更习惯先整理，再选择合适的人和时机表达。'], ['在交流中长出想法','你常常通过说出来、听回应，让想法逐渐清晰。'], ['表达，也保留独处','你会在独自消化和与人交流之间，寻找合适的节奏。'] ],
  decision: [ ['先找可以站住的依据','作选择时，你往往先检查理由、标准与事情本身。'], ['先看见具体的人','你在意一个决定如何影响人，也愿意理解各自的处境。'], ['把道理与感受放在一起','你会同时考虑事情的依据与人的需要，随情境调整重心。'] ],
  planning: [ ['给变化留一个位置','你更愿意先开始，再从实际反馈中调整路径。'], ['让行动有清晰的次序','提前安排能让你安心，你愿意把事情拆成具体步骤。'], ['有主线，也有余地','你需要一些安排，也愿意为眼前的新信息改变计划。'] ],
  openness: [ ['在熟悉里慢慢深耕','可靠的日常和已经积累的经验，是你做选择的重要支点。'], ['对新可能保留好奇','陌生的事物容易吸引你，你愿意为新的体验留出空间。'], ['带着支点尝试新事','你会保留熟悉的部分，再试着向未知迈出一点。'] ]
};
function similarityCards(report) {
  return DIMENSIONS.map((d,i) => ({ d, index:i, delta:Math.abs(report.profile[d.id]-report.person.vector[i]) }))
    .sort((a,b) => a.delta-b.delta).slice(0,3).map(({d,index},i) => {
      const v = report.profile[d.id];
      const side = v < 42 ? 0 : v > 58 ? 1 : 2;
      const pv = report.person.vector[index];
      const personSide = pv < 42 ? 0 : pv > 58 ? 1 : 2;
      const opposite = side !== 2 && personSide !== 2 && side !== personSide;
      const close = Math.abs(v-pv) <= 25 && !opposite;
      const [preferenceTitle, preferenceDescription] = preferenceCopy[d.id][side];
      const title = close ? preferenceTitle : '这一面，你们有不同的节奏';
      const personPreference = personSide === 2 ? '两端之间' : personSide === 0 ? d.left : d.right;
      const yourPreference = side === 2 ? '会在两端之间切换' : `更偏向${side === 0 ? d.left : d.right}`;
      const description = close ? `${preferenceDescription} 这是你与这份${report.person.name}画像较接近的一面。` : `你的选择${yourPreference}；这份${report.person.name}画像的位置更接近${personPreference}。相近的人也会有不同之处，不必把这一面套在自己身上。`;
      const evidence = getAnswerEvidence(report.answers,d.id).sort((a,b) => Math.abs(a.value-v)-Math.abs(b.value-v))[0];
      return `<article class="similarity"><p class="eyebrow">0${i+1} · ${escape(d.label)} · ${close ? '相近' : '有别'}</p><h3>${title}</h3><p>${escape(description)}</p>${evidence ? `<details class="answer-evidence"><summary>${report.sample ? '示例答案依据' : '看看你的答题依据'}<span aria-hidden="true">＋</span></summary><p>${escape(evidence.title)}</p><blockquote>${escape(evidence.answer)}</blockquote></details>` : ''}</article>`;
    }).join('');
}
function chart(report) {
  return `<div class="profile-chart" aria-label="四种偏好对照">${DIMENSIONS.map((d,i) => `<div class="chart-row"><div class="chart-meta"><span>${escape(d.left)}</span><strong>${escape(d.label)}</strong><span>${escape(d.right)}</span></div><div class="axis-track" role="img" aria-label="${escape(d.label)}：你的内部画像值${Math.round(report.profile[d.id])}，人物编辑画像值${report.person.vector[i]}；不是相似度百分比"><span class="axis-person" style="left:${report.person.vector[i]}%"></span><span class="axis-user" style="left:${report.profile[d.id]}%"></span></div></div>`).join('')}<div class="chart-legend"><span class="legend-user">${report.sample ? '示例画像' : '你的答题偏好'}</span><span class="legend-person">${escape(report.person.name)}的编辑画像</span><span>仅表示偏好位置，不代表能力或相似度百分比</span></div></div>`;
}
function getReadingEvent(report, struggle) {
  if (readingEvent) return report.person.events.find(e => e.id === readingEvent) || report.person.events[0];
  return report.person.events.find(e => e.struggleKeys.includes(struggle)) || report.person.events[0];
}
function sourceLinks(person, ids) {
  return person.sources.filter(s => ids.includes(s.id)).map(s => `<a href="${escape(s.url)}" target="_blank" rel="noopener noreferrer">${escape(s.title)} ↗</a>`).join(' ');
}
function contextAdjustment(context) {
  if (context.energy === 'low') return '如果最近精力很低，把这一步缩小到两分钟就好。休息也可以是今天的安排。';
  if (context.energy === 'variable') return '把它留给精力比较充足的时段，先做最小的一部分。';
  if (context.goal === 'understanding') return '今天不必急着得出结论。先把自己的想法记下来，也是一小步。';
  if (context.support === 'company') return '如果你愿意，可以找一个信任的人陪你聊聊这件事。';
  return '这只是一个可选择的小实验。做完后，看看它有没有给你带来新的信息。';
}
function eventRows(report,event) {
  const sections = {
    situation:`<div class="event-row"><dt>当时的处境</dt><dd>${escape(event.situation)}</dd></div>`,
    choices:`<div class="event-row"><dt>做出的选择</dt><dd><ul>${event.choices.map(c=>`<li>${escape(c)}</li>`).join('')}</ul></dd></div>`,
    outcome:`<div class="event-row"><dt>后来的变化</dt><dd>${escape(event.outcome)}</dd></div>`,
    cost:`<div class="event-row event-cost"><dt>付出的代价</dt><dd>${escape(event.cost)}</dd></div>`
  };
  const orders = {
    choices:['choices','situation','outcome','cost'],
    costs:['cost','situation','choices','outcome'],
    'turning-point':['outcome','situation','choices','cost'],
    'daily-life':['situation','choices','outcome','cost']
  };
  const captions = {choices:'你关心怎样作选择，我们先从行动读起。',costs:'你关心选择的代价，我们先看看这一面。','turning-point':'你关心局面如何变化，先看看后来的记录。','daily-life':'你关心怎样继续生活，我们先看具体的处境。'};
  const focus=report.context.focus || 'daily-life';
  return `<p class="reading-focus">${escape(captions[focus] || captions['daily-life'])}</p><dl>${(orders[focus] || orders['daily-life']).map(key=>sections[key]).join('')}</dl>`;
}
function renderReport(sample = false) {
  if (!sample && (!validateAnswers(state.answers).complete || !state.completedAt)) {
    toast('完成答题后，就能打开你的报告。'); navigate('#quiz'); return;
  }
  const report = sample ? makeSample() : { person:rankPeople(calculateProfile(state.answers),PEOPLE)[0].person, answers:state.answers, profile:calculateProfile(state.answers), context:getContext(state.answers), sample:false };
  currentReport = report;
  const p = report.person;
  const selectedStruggle = readingStruggle ?? report.context.struggle;
  const struggle = STRUGGLES.find(s => s.id === selectedStruggle);
  const event = getReadingEvent(report,selectedStruggle);
  const direct = event.struggleKeys.includes(selectedStruggle);
  const contextQuestion = QUESTIONS.find(q => q.id === 'q30');
  const contextAnswer = contextQuestion?.options.find(o => o.id === report.answers.q30);
  document.title = `${sample ? '示例报告' : '我的历史人格'}：${p.name} · 见古`;
  app.innerHTML = `${nav()}${sample ? '<div class="sample-banner"><strong>示例报告 · 非真实测试结果</strong>以下使用预设答案展示阅读体验，不会覆盖你的作答进度。</div>' : ''}<main id="main-content" class="report-container fade-in" tabindex="-1"><div class="report-overline"><span class="eyebrow">YOUR HISTORICAL REFLECTION</span><span>${sample ? 'READING SAMPLE / 001' : 'JIANGU / VOL. 01'}</span></div><section class="report-hero"><div><p class="kicker">${sample ? '假如你与他相近' : '本次八位候选人物中，你更接近'}</p><h1>${escape(p.name)}</h1><p class="report-title">${escape(p.title)}</p><div>${tags(p)}</div><p class="report-quote">${escape(p.tagline)}</p><p class="quote-credit">见古写给你的话 · 原创人格短句</p><div class="report-actions"><button class="button red-button" data-action="share">保存我的人格卡${arrow}</button><button class="plain-button" data-action="${sample ? 'start' : 'review'}">${sample ? '开始自己的测试 →' : '返回修改答案 →'}</button></div></div><div class="report-portrait">${portrait(p)}<div class="report-portrait-caption"><span>${escape(p.era)} · ${escape(p.lifespan)}</span><span>与古人相照</span></div><span class="seal" aria-hidden="true">古今<br>同心</span></div></section><section class="report-section"><div class="report-section-heading"><span class="mono">01 /</span><h2>你们，相似在哪里？</h2></div><p class="report-intro">${escape(p.summary)}</p><div class="similarities">${similarityCards(report)}</div>${chart(report)}</section><section class="report-section"><div class="report-section-heading"><span class="mono">02 /</span><h2>相似之处，也有它的另一面。</h2></div><div class="tension-grid"><div><h3>一个值得留意的矛盾</h3><p>${escape(p.tension)}</p></div><div class="difference"><h3>你仍然是独一无二的你</h3><p>${escape(p.difference)} 相近的性格，不会让你们拥有相同的处境或结局。</p></div></div></section><section class="report-section" id="life-story"><div class="report-section-heading"><span class="mono">03 /</span><h2>${struggle ? '当你也走到这样的时刻。' : '看看，他怎样面对人生的转弯。'}</h2></div><p class="report-intro">${struggle ? escape(struggle.prompt) : '你选择了暂时没有明确困境。可以把下面的经历当作一次阅读，或选择感兴趣的角度。'}</p><div class="struggle-tabs" role="group" aria-label="切换经历阅读角度">${STRUGGLES.map(s => `<button class="struggle-tab ${s.id === selectedStruggle ? 'active' : ''}" data-action="struggle" data-id="${s.id}" aria-pressed="${s.id === selectedStruggle}">${escape(s.short)}</button>`).join('')}</div>${!sample && struggle && selectedStruggle === report.context.struggle && contextAnswer ? `<p class="context-echo">你提到，自己最近更接近：${escape(contextAnswer.text)}。下面这段经历，提供一个参照。</p>` : ''}<article class="event"><div class="event-overline"><span>人生片段</span><span>${escape(event.period)}</span></div><h3>${escape(event.title)}</h3>${struggle && !direct ? '<p class="small subtle">没有找到与这一困境直接对应的片段，以下仅提供一个相邻视角。</p>' : ''}${eventRows(report,event)}<p class="event-bridge"><strong>映照到今天 · </strong>${escape(event.bridge)}</p><div class="history-source"><span>史实来源</span>${sourceLinks(p,event.sourceIds)}</div></article><div class="event-select"><span>也可以翻到另一页：</span>${p.events.filter(e => e.id !== event.id).map(e => `<button data-action="event" data-id="${e.id}">${escape(e.title)} ↗</button>`).join('')}</div>${struggle ? `<div class="action-note"><span class="action-seal" aria-hidden="true">今日<br>一小步</span><div><h3>${report.context.goal === 'understanding' ? '先看清楚，再决定往哪里走。' : '把一个新视角，变成一件小事。'}</h3><p>${escape(struggle.action)}</p><p style="margin-top:9px">${escape(contextAdjustment(report.context))}</p></div></div>` : ''}<p class="small subtle" style="margin-top:17px">阅读角度可以改变，人物仍由性格答案决定。现代启发是本产品的解读，不是古人的原话。</p></section><section class="report-end"><p class="eyebrow">THE STORY CONTINUES</p><h2>历史替你照过一束光，<br>下一页，仍由你来写。</h2><p>把这次相遇存下来，或邀请朋友找找自己的历史人格。</p><div class="end-actions"><button class="button" data-action="share">保存分享卡${arrow}</button><button class="button outline" data-action="${sample ? 'start' : 'restart'}">${sample ? '开始我的探索' : '重新认识自己'}<span aria-hidden="true">→</span></button></div></section><details class="method-details"><summary>关于本次匹配、人物解读与全部来源 ＋</summary><p>这是初版的编辑性人格探索，未经心理测量验证。30道性格题形成四维偏好画像，与当前8位人物的编辑画像做等权距离比较；6道处境题只选择经历和阅读侧重。相同版本、相同性格答案得到相同人物。图中的位置不是能力、命运或相似度百分比。</p><p>人物的思想与行为远比四个维度复杂。这里选取一部分有记录的人生侧面，不代表人物的完整人格。标签与分享短句为原创文案；插画是艺术演绎。</p><p>本人物的来源：</p><ul>${p.sources.map(s => `<li><a href="${escape(s.url)}" target="_blank" rel="noopener noreferrer">${escape(s.title)} ↗</a></li>`).join('')}</ul></details></main>${footer()}`;
}
function showInfo(title,html) {
  document.querySelector('#info-content').innerHTML = `<div class="dialog-top"><span>${escape(title)}</span><button class="close-button" data-action="close-info" aria-label="关闭对话框">×</button></div><div class="dialog-body">${html}</div>`;
  infoDialog.showModal();
}
function showAbout() {
  showInfo('关于见古',`<p class="eyebrow">KNOW YOURSELF THROUGH HISTORY</p><h2>历史很远，<br>相似的心事很近。</h2><p>见古从你的日常选择出发，在八位历史人物中，找到一个与你的偏好相近的人。再从他的真实经历里，为你此刻的处境提供另一种看法。</p><h3>你会得到什么？</h3><p>一个人物、三个相似之处、一段与你关心的话题相关的经历，以及一张可以保存的人格卡。</p><h3>它还是一个初版。</h3><p>题目、人物画像和评分都在等待真实体验的检验。它是带有编辑性解读的探索，不是专业心理测评，也不预测你的人生。</p><button class="button" data-action="start">开始一次相遇${arrow}</button>`);
}
function showMethod() {
  showInfo('匹配依据',`<h2>性格决定人物，<br>处境决定翻到哪一页。</h2><p>36道题全部单选。其中30道性格题观察表达、判断、行动与变化偏好；6道处境题了解最近的困扰、精力和期待。</p><h3>人物怎样选出来？</h3><p>性格选项按固定规则形成四维画像，再与八位人物的编辑画像做等权距离比较。当前处境不参与人物排名，也不使用随机抽取。</p><h3>历史内容从哪里来？</h3><p>每段经历附有对应文献或机构资料。我们区分历史事件、人格解读与现代建议，不给古人伪造引语，不将每段经历写成成功故事。</p><h3>需要保留的边界</h3><p>这些维度、题目和人物分数是待验证的产品假设，尚未经过心理测量验证。四个数字无法概括一个人，更不能测定历史人物的真实心理。这里呈现的是可解释的一次相近，而非对你的定义。</p>`);
}
function showPrivacy() {
  showInfo('答案留在本机',`<h2>把选择留给你。</h2><p>你的作答进度保存在当前浏览器的本地存储中。本应用不向服务器提交答案，也不建立个人账户。换设备、清理浏览器数据或使用无痕浏览，可能无法继续上次的答题。</p><h3>分享卡上有什么？</h3><p>只有人物、人格称号、三个标签与一句原创短句。没有你的具体答案、当前困境或内部评分。示例卡会保留“示例”标识。</p><p>如打开字体或史实来源等第三方服务，会适用对应网站的访问规则。</p><button class="button outline" data-action="clear-data">清除本机作答记录</button>`);
}
function showPerson(id) {
  const p = PEOPLE.find(p => p.id === id); if (!p) return;
  showInfo('人物小传 · 编辑画像',`<div class="dialog-person">${portrait(p)}<div><p class="kicker">${escape(p.era)} · ${escape(p.lifespan)}</p><h2>${escape(p.name)}</h2><p>${escape(p.role)}</p><div>${tags(p)}</div></div></div><h3>${escape(p.title)}</h3><p>${escape(p.summary)}</p><h3>可以翻阅的人生片段</h3><ul>${p.events.map(e => `<li>${escape(e.title)} · ${escape(e.period)}</li>`).join('')}</ul><h3>资料来源</h3><ul>${p.sources.map(s => `<li><a href="${escape(s.url)}" target="_blank" rel="noopener noreferrer">${escape(s.title)} ↗</a></li>`).join('')}</ul><button class="button" data-action="start">看看我与谁相近${arrow}</button>`);
}
function showReset(clearOnly = false) {
  showInfo('重新开始之前',`<h2>${clearOnly ? '清除这次作答？' : '再认识自己一次？'}</h2><p>这会清除当前浏览器中保存的答案与报告。已经下载的分享卡不受影响。</p><button class="button red-button" data-action="${clearOnly ? 'confirm-clear' : 'confirm-restart'}">${clearOnly ? '确认清除记录' : '清除记录，重新开始'}</button><button class="plain-button" style="margin-left:22px" data-action="close-info">保留记录</button>`);
}
function renderShared(id) {
  const p = PEOPLE.find(p => p.id === id);
  if (!p) { navigate('#home'); return; }
  currentReport = null; document.title = `遇见${p.name} · 见古`;
  app.innerHTML = `${nav()}<main id="main-content" class="shared-card-page fade-in" tabindex="-1"><p class="eyebrow">A HISTORICAL PERSONALITY CARD</p><h1>有人在历史里，<br>遇见了${escape(p.name)}。</h1><div class="report-portrait">${portrait(p)}<div class="report-portrait-caption"><span>${escape(p.era)}</span><span>${escape(p.title)}</span></div></div><div>${tags(p)}</div><p>“${escape(p.tagline)}”</p><p>这是一张分享的人物卡，不是你的测试结果。<br>用自己的选择，找到属于你的那次相遇。</p><button class="button" data-action="start">我也想测测${arrow}</button></main>${footer()}`;
}

function wrapCanvasText(ctx,text,x,y,maxWidth,lineHeight) {
  let line = ''; let row = 0;
  for (const char of text) {
    if (ctx.measureText(line+char).width > maxWidth && line) { ctx.fillText(line,x,y+row*lineHeight); line=char; row++; } else line+=char;
  }
  if (line) ctx.fillText(line,x,y+row*lineHeight);
  return (row+1)*lineHeight;
}
async function buildPoster(canvas,report) {
  const ctx=canvas.getContext('2d'); if (!ctx) throw new Error('Canvas unavailable');
  const p=report.person;
  const image = await new Promise((resolve,reject) => { const img=new Image(); img.onload=()=>resolve(img); img.onerror=reject; img.src=new URL('./assets/portraits.png',import.meta.url).href; });
  await Promise.race([document.fonts.ready,new Promise(resolve=>setTimeout(resolve,1800))]);
  canvas.width=1080; canvas.height=1440;
  ctx.fillStyle='#f6f2ea'; ctx.fillRect(0,0,1080,1440);
  ctx.strokeStyle='#cacdbd'; ctx.lineWidth=2; ctx.strokeRect(45,45,990,1350);
  ctx.fillStyle='#ad3d2b';ctx.fillRect(82,83,64,64);ctx.fillStyle='#fff9ec';ctx.font='bold 43px "Noto Serif SC", "Songti SC", serif';ctx.textAlign='center';ctx.fillText('见',114,131);
  ctx.fillStyle='#292d29';ctx.textAlign='left';ctx.font='40px "Noto Serif SC", "Songti SC", serif';ctx.fillText('见古',168,130);
  ctx.font='20px sans-serif';ctx.textAlign='right';ctx.fillStyle='#73756b';ctx.fillText(report.sample ? '示例人格卡 · 非测试结果' : '我的历史人格 · VOL. 01',995,125);
  ctx.strokeStyle='#d5d8c9';ctx.beginPath();ctx.moveTo(82,178);ctx.lineTo(998,178);ctx.stroke();
  const sw=image.width/4, sh=image.height/2;
  ctx.drawImage(image,(p.portraitIndex%4)*sw,Math.floor(p.portraitIndex/4)*sh,sw,sh,278,205,524,524);
  ctx.fillStyle='#292d29';ctx.textAlign='center';ctx.font='bold 110px "Noto Serif SC", "Songti SC", serif';ctx.fillText(p.name,540,835);
  ctx.fillStyle='#ad3d2b';ctx.font='39px "Noto Serif SC", "Songti SC", serif';ctx.fillText(p.title,540,912);
  ctx.fillStyle='#73756b';ctx.font='24px sans-serif';ctx.fillText(p.tags.join('   /   '),540,977);
  ctx.fillStyle='#292d29';ctx.font='39px "Noto Serif SC", "Songti SC", serif';wrapCanvasText(ctx,`“${p.tagline}”`,540,1085,800,63);
  ctx.fillStyle='#73756b';ctx.font='18px sans-serif';ctx.fillText('见古 · 原创人格短句',540,1187);
  ctx.strokeStyle='#d5d8c9';ctx.beginPath();ctx.moveTo(82,1240);ctx.lineTo(998,1240);ctx.stroke();
  ctx.fillStyle='#73756b';ctx.font='23px sans-serif';ctx.fillText('在历史里，遇见另一个你。',540,1294);ctx.font='18px sans-serif';ctx.fillText('人格探索 · 编辑性解读 · 插画为艺术演绎',540,1341);
  return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('Export failed')),'image/png'));
}
async function showShare() {
  if (!currentReport) return;
  const generation=++posterGeneration;
  posterBlob=null;
  const report = currentReport;
  document.querySelector('#share-content').innerHTML=`<div class="dialog-top"><span>${report.sample?'示例人格卡':'把这次相遇，留在身边'}</span><button class="close-button" data-action="close-share" aria-label="关闭分享卡">×</button></div><div class="share-body"><canvas id="poster" role="img" aria-label="${escape(report.person.name)}的人格分享卡"></canvas><p id="poster-status" class="share-note">正在准备分享卡…</p><div class="share-controls"><button id="download-poster" class="button" data-action="download" disabled>保存图片 ↓</button><button class="button outline" data-action="copy-share">复制分享文案 ↗</button></div><p class="share-note">只分享人物与性格标签，不包含你的答案和困境。</p><textarea id="share-copy" class="share-copy" aria-label="可手动复制的分享文案" hidden readonly></textarea></div>`;
  shareDialog.showModal();
  try {
    const blob=await buildPoster(document.querySelector('#poster'),report);
    if(generation!==posterGeneration || currentReport!==report || !shareDialog.open)return;
    posterBlob=blob;
    document.querySelector('#download-poster').disabled=false;
    document.querySelector('#poster-status').textContent=report.sample?'示例卡已保留示例标识':'图片已准备好，可以保存或发送给朋友。';
  } catch { if(generation===posterGeneration && shareDialog.open)document.querySelector('#poster-status').textContent='图片暂时未能生成，仍可复制下方分享文案。'; }
}
function shareText() {
  const report=currentReport;if (!report) return '';
  const p=report.person;
  return `${report.sample?'我在见古读到一份苏轼示例报告':'我在见古遇见了'+p.name}：${p.title}。\n${p.tags.join(' · ')}\n“${p.tagline}”\n你会在历史里遇见谁？\n${location.origin}${location.pathname}#meet/${p.id}`;
}
async function copyShare() {
  const text=shareText();
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);toast('分享文案已复制，不包含你的困境。');
  } catch {
    const field=document.querySelector('#share-copy');field.value=text;field.hidden=false;field.focus();field.select();toast('请手动复制已选中的分享文案。');
  }
}
function downloadPoster() {
  if (!posterBlob || !currentReport) return;
  const url=URL.createObjectURL(posterBlob);const a=document.createElement('a');a.href=url;a.download=`见古-${currentReport.person.name}${currentReport.sample?'-示例':''}.png`;a.click();setTimeout(()=>URL.revokeObjectURL(url),15000);toast('分享卡已保存，请查看浏览器下载。');
}

function renderRoute() {
  const hash=location.hash;
  if (hash==='#quiz') renderQuiz();
  else if (hash==='#report') renderReport(false);
  else if (hash==='#sample') renderReport(true);
  else if (hash.startsWith('#meet/')) renderShared(hash.slice(6));
  else renderHome();
  focusMain();
}
document.addEventListener('change',event=>{
  if (event.target.matches('#question-form input[name="answer"]')) {
    const q=QUESTIONS[state.cursor];const id=event.target.value;
    if (!q.options.some(o=>o.id===id)) return;
    state.answers[q.id]=id;state.completedAt=null;saveState();
    document.querySelector('#next-question').disabled=false;
    const count=validateAnswers(state.answers).answered;
    const progress=document.querySelector('[role="progressbar"]');progress.setAttribute('aria-valuenow',count);
    document.querySelector('.progress-value').style.width=`${count/36*100}%`;
    document.querySelectorAll('.question-dot')[state.cursor]?.classList.add('answered');
  }
});
document.addEventListener('submit',event=>{if(event.target.id==='question-form'){event.preventDefault();advanceQuestion();}});
document.addEventListener('click',event=>{
  if(event.target.closest('.skip-link')){event.preventDefault();const main=document.querySelector('#main-content');main?.focus();main?.scrollIntoView();return;}
  const button=event.target.closest('[data-action]');if(!button || button.disabled)return;
  const action=button.dataset.action;
  event.preventDefault();
  switch(action){
    case 'start': {
      if(validateAnswers(state.answers).complete && state.completedAt){navigate('#report');break;}
      navigate('#quiz');break;
    }
    case 'my-report': navigate('#report');break;
    case 'sample': readingStruggle=null;readingEvent=null;navigate('#sample');break;
    case 'library': navigate('#home');requestAnimationFrame(()=>document.querySelector('#people-library')?.scrollIntoView({behavior:'smooth'}));break;
    case 'about': showAbout();break;
    case 'method': showMethod();break;
    case 'privacy': showPrivacy();break;
    case 'person': showPerson(button.dataset.id);break;
    case 'previous': if(state.cursor>0){state.cursor--;saveState();renderQuiz();focusMain();}break;
    case 'save-exit': saveState();navigate('#home');toast(storageAvailable?'进度已保存，下次可以继续。':'本浏览器未允许保存，请保持当前页打开。');break;
    case 'review': state.cursor=0;saveState();navigate('#quiz');break;
    case 'update-report': if(validateAnswers(state.answers).complete){state.completedAt=new Date().toISOString();saveState();navigate('#report');}break;
    case 'restart': showReset();break;
    case 'clear-data': showReset(true);break;
    case 'confirm-restart': state=emptyState();saveState();readingStruggle=null;readingEvent=null;navigate('#quiz');break;
    case 'confirm-clear': state=emptyState();try{localStorage.removeItem(STORAGE_KEY);}catch{}navigate('#home');toast('本机作答记录已清除。');break;
    case 'struggle': {
      const y=window.scrollY;readingStruggle=button.dataset.id;readingEvent=null;renderReport(currentReport?.sample);window.scrollTo(0,y);document.querySelector(`.struggle-tab[data-id="${readingStruggle}"]`)?.focus({preventScroll:true});break;
    }
    case 'event': {const y=window.scrollY;readingEvent=button.dataset.id;renderReport(currentReport?.sample);window.scrollTo(0,y);break;}
    case 'share': showShare();break;
    case 'download': downloadPoster();break;
    case 'copy-share': copyShare();break;
    case 'close-info': infoDialog.close();break;
    case 'close-share': ++posterGeneration;shareDialog.close();break;
  }
});
for(const dialog of [infoDialog,shareDialog])dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
window.addEventListener('hashchange',()=>{readingStruggle=null;readingEvent=null;renderRoute();});
window.addEventListener('pagehide',saveState);
renderRoute();
