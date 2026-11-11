import { WORLD_PEOPLE_A } from './people-world-a.js?v=0.2.0';
import { WORLD_PEOPLE_B } from './people-world-b.js?v=0.2.0';

// 见古 v0.2 内容库。人格称号、向量与现代启发均为编辑性产品假设，未经心理测量验证。
// vector: [expression 内敛→外放, decision 逻辑→共情, planning 灵活→计划, openness 稳定→探索]。
// 史实仅写入 events，来源由 sourceIds 指向；不把文学表达直接当作心理测量结果。

export const STRUGGLES = [
  {
    id: 'setback', title: '受挫，或不被理解', short: '受挫与否定',
    description: '一次失利、一个评价，或迟迟得不到的认可，让你开始怀疑自己。',
    prompt: '当外界的回应不如期待，你怎样把自己的生活重新接起来？',
    action: '给自己十分钟，把“实际发生的事”和“我对自己的评价”分成两栏。只从事实栏挑一件今天能处理的小事。'
  },
  {
    id: 'direction', title: '站在路口，不知怎么选', short: '方向与选择',
    description: '几条路各有理由，你在安全、期待与真正想做的事之间犹豫。',
    prompt: '暂时没有确定答案时，怎样迈出一个能得到新信息的小步？',
    action: '选出正在犹豫的两条路，各写一个最想验证的问题。为其中一个安排一次低成本、可撤回的小尝试。'
  },
  {
    id: 'slow-growth', title: '已经努力，却迟迟没回响', short: '等待与积累',
    description: '你没有停下来，只是不知道这些投入什么时候才会被看见。',
    prompt: '外在结果还没出现时，怎样分辨积累、消耗和需要调整的地方？',
    action: '回看过去两周，写下一个已经积累的成果和一个反复受阻的环节。保留前者，给后者设一个明确的复盘日期。'
  }
];

const CHINESE_PEOPLE = [
  {
    id: 'su-shi', name: '苏轼', era: '北宋', lifespan: '1037—1101', role: '文学家 · 书画家',
    title: '旷达的生活家', tagline: '风雨有时，日子仍值得认真过。',
    tags: ['感受丰沛', '随境生长', '保有好奇'], color: '#ad4937', portraitIndex: 0,
    vector: [78, 76, 28, 88],
    summary: '这份人物画像选取苏轼在处境变化中重新组织生活、持续表达感受的一面：有兴致，也容得下失落。它不是“永远乐观”的标签。',
    strengths: ['愿意在变化中重新寻找生活的支点', '能把具体感受转化成表达', '不只用一条外在评价线衡量生活'],
    tension: '有兴致不等于没有伤心。把失落说成“我应该看开”，也可能让真正的需要被搁置。',
    difference: '这里只对应其生活与表达的一面，不代表你赞同他的全部选择。',
    events: [
      {
        id: 'su-shi-east-field', title: '在黄州，先让生活重新运转', period: '黄州时期 · 1081年前后',
        struggleKeys: ['setback', 'slow-growth'],
        situation: '谪居黄州后，苏轼的生活日渐困乏。友人马正卿为他向郡中申请一片废营地，那里久已荒芜，又遇旱年，开垦并不轻松。',
        choices: ['接受友人的实际帮助，开始开垦土地。', '把劳作和对来年收成的期待写进《东坡八首》。'],
        outcome: '他开始以躬耕应对生计，把日常劳动也纳入自己的诗歌。诗序仍写劳累与叹息，不能据此说困境已经完全解决。',
        cost: '荒地、旱情与体力消耗都真实存在，耕作不是轻松的“换一种活法”。',
        bridge: '可借鉴的是先修复具体生活、接受帮助。古代谪居与今天的挫折不同，不必复刻他的生活方式。',
        sourceIds: ['su-east-field']
      },
      {
        id: 'su-shi-cold-food', title: '把难过留下来，而非急着看开', period: '黄州时期 · 1082年',
        struggleKeys: ['setback', 'direction'],
        situation: '在黄州第三个寒食节前后，连日阴雨、生活困乏与仕途挫折进入苏轼的诗。他写出的并非一个始终轻松愉快的自己。',
        choices: ['作《寒食雨二首》，具体写下眼前的生活和失意。', '此后书写成卷，让情绪也进入笔墨变化。'],
        outcome: '这些感受保存在《黄州寒食诗帖》中，成为可见的表达；作品不能证明他从此不再困顿。',
        cost: '书写保留了情绪，却不会自动消除生活和政治处境的限制。',
        bridge: '你可以给感受一个出口，再决定下一步。表达是一种应对，并非“只要想开就能好”的保证。',
        sourceIds: ['su-cold-food']
      }
    ],
    sources: [
      { id: 'su-east-field', title: '台湾大学学位论文：《东坡八首》序与黄州躬耕材料（第65页）', url: 'https://tdr.lib.ntu.edu.tw/bitstream/123456789/6920/1/ntu-101-1.pdf' },
      { id: 'su-cold-food', title: '国立故宫博物院：北宋苏东坡书黄州寒食诗卷', url: 'https://digitalarchive.npm.gov.tw/Collection/Detail/14714?dep=P' }
    ]
  },
  {
    id: 'li-qingzhao', name: '李清照', era: '两宋之际', lifespan: '1084—约1155', role: '词人 · 金石研究参与者',
    title: '清醒的感受者', tagline: '把感受写清，也把珍视的事守住。',
    tags: ['细腻敏锐', '自有尺度', '认真珍惜'], color: '#78615a', portraitIndex: 1,
    vector: [34, 90, 66, 72],
    summary: '这份画像聚焦李清照对感受的精细表达，以及她参与校勘、收藏时的认真。敏感可以与判断力并存，不必只有柔弱一种解释。',
    strengths: ['能觉察不容易被别人注意的细节', '对自己珍视的事有明确尺度', '愿意长期整理和保存有意义的事物'],
    tension: '珍惜得很深，失去时也可能更难放手。辨别哪些值得守护，和承认哪些已无法挽回，同样重要。',
    difference: '个人创作和战争流离不同，不能用她的经历推定你的命运。',
    events: [
      {
        id: 'li-qingzhao-collation', title: '把喜欢的东西，做成长期的事', period: '北宋时期 · 与赵明诚共同收藏',
        struggleKeys: ['slow-growth', 'direction'],
        situation: '李清照在《金石录后序》中记下与赵明诚购求书画金石的生活。他们并非总能买得起，也曾因费用不足归还想要的画作。',
        choices: ['每得书籍就一同勘校、整理、签题。', '在能力范围内长期搜求和传写资料，而非只等一次大收获。'],
        outcome: '这些具体劳动成为两人金石收藏与研究的一部分。《后序》也留下这段积累如何发生的记录。',
        cost: '投入时间与财力，也有求而不得；喜欢一件事，并不消除资源限制。',
        bridge: '可借鉴的是把兴趣拆成可积累的工作。并不是建议为热爱压缩必要生活开支。',
        sourceIds: ['li-jinshilu']
      },
      {
        id: 'li-qingzhao-loss', title: '失去很多之后，仍为经历作证', period: '南渡以后 · 1127年起',
        struggleKeys: ['setback'],
        situation: '南渡、兵乱和赵明诚去世，使李清照原有的生活被打断。书画金石在迁移中多次散失，她在《金石录后序》中逐项追记。',
        choices: ['在携带受限时反复取舍，尽力保存部分书物。', '把共同收藏、离乱与散失的过程写入《金石录后序》。'],
        outcome: '物品没有全部找回，但收藏与流离的经历留在文字中。这里没有“失去后终于一切更好”的确定结局。',
        cost: '亲人的离世与收藏的散失无法被一篇文章补回。',
        bridge: '承认损失，并为仍想留下的事做记录，是一种可能的回应；战争经历与当下处境并不等同。',
        sourceIds: ['li-jinshilu', 'li-local-history']
      }
    ],
    sources: [
      { id: 'li-jinshilu', title: '李清照：《金石录后序》原文（维基文库）', url: 'https://zh.wikisource.org/zh-hans/金石錄後序_(李清照)' },
      { id: 'li-local-history', title: '山东地方志资料归档：李清照文', url: 'https://shandong-chorography.org/database/a/section/87/article/19/' }
    ]
  },
  {
    id: 'tao-yuanming', name: '陶渊明', era: '东晋', lifespan: '约365—427', role: '诗人',
    title: '自在的守拙者', tagline: '自己的尺度，也是一条路。',
    tags: ['内在笃定', '珍惜日常', '不逐热闹'], color: '#65715b', portraitIndex: 2,
    vector: [18, 68, 35, 30],
    summary: '这份画像取陶渊明反复辨认生活所需、最终选择归田的一面。他的田园里有安适，也有劳作与生计，并非没有代价的隐居。',
    strengths: ['能辨认哪些期待并非自己的', '愿意守住安静而具体的生活', '不轻易用他人的热闹替代自己的尺度'],
    tension: '离开不合适的环境可能带来空间，也可能带来新的生计问题；自主需要与现实一起安排。',
    difference: '归田是他的具体选择，不是给你的辞职或退出建议。',
    events: [
      {
        id: 'tao-yuanming-return', title: '承认不合适，重新选择生活', period: '405年 · 辞去彭泽令',
        struggleKeys: ['direction', 'setback'],
        situation: '《归去来兮辞》序说，陶渊明因家贫而求官，但任职后不久便思归。他同时写到生计压力与违背本意的不适。',
        choices: ['辨认自己为何求官，也承认任职中的内在冲突。', '妹妹去世后自免去职，随后写下《归去来兮辞》。'],
        outcome: '他结束了八十余日的彭泽任职，转向归田生活；这一决定并不意味着贫困问题已经消失。',
        cost: '放下官职也意味着放下相应收入与机会，不能只看见选择的诗意。',
        bridge: '先写清一条路给你的资源与消耗，再做选择。今天可以先试探和准备，无须照搬辞官。',
        sourceIds: ['tao-return']
      },
      {
        id: 'tao-yuanming-farming', title: '把选择，落实到每天的劳作', period: '归田时期 · 《归园田居》',
        struggleKeys: ['slow-growth', 'direction'],
        situation: '《归园田居》既写村落与草屋，也写种豆、除草和晚归。回到田园，不是从此离开所有辛苦。',
        choices: ['以耕作维持日常，在诗中写下实际劳动。', '用田园诗表达自己对生活方式的选择。'],
        outcome: '诗中保留了亲近自然的满足，也承认作物长势不如意；选择的价值与即时收成没有完全重合。',
        cost: '作物生长受条件影响，认同一种生活也仍要承担劳动与不确定性。',
        bridge: '看见自己愿意承担哪种辛苦，比只比较哪条路更轻松更有用。这是现代解读，不是农业或职业建议。',
        sourceIds: ['tao-garden']
      }
    ],
    sources: [
      { id: 'tao-return', title: '陶渊明：《归去来辞并序》原文（维基文库）', url: 'https://zh.wikisource.org/wiki/归去来辞' },
      { id: 'tao-garden', title: '陶渊明：《归园田居》原文（维基文库）', url: 'https://zh.wikisource.org/zh-hans/歸園田居' }
    ]
  },
  {
    id: 'wang-yangming', name: '王阳明', era: '明', lifespan: '1472—1529', role: '思想家 · 政治家',
    title: '笃行的破局者', tagline: '想明白一点，就向前实践一点。',
    tags: ['重视实践', '自省有度', '临事求变'], color: '#826039', portraitIndex: 3,
    vector: [62, 30, 78, 70],
    summary: '这份画像聚焦王阳明把思考带回行动、根据具体处境组织应对的一面。这里不把复杂思想简化为“只靠相信自己就行”。',
    strengths: ['愿意让想法接受实际检验', '遇到复杂局面能抓住行动次序', '能在外界受阻时重新审视原有理解'],
    tension: '行动能带来信息，也可能被急于证明自己推动；先厘清判断依据，再决定做多大一步。',
    difference: '历史上的政治军事行动，不能直接套用到现代人际关系。',
    events: [
      {
        id: 'wang-yangming-longchang', title: '旧答案失效时，重新追问', period: '1508年前后 · 贵州龙场',
        struggleKeys: ['setback', 'direction'],
        situation: '因上书触怒刘瑾，王阳明受罚后被贬为龙场驿丞。抵达龙场时，他面对陌生环境与物资困乏，也重新思考自己的学问。',
        choices: ['继续思考经义，写下《五经臆说》。', '重新审视自己对格物与圣人之道的理解，形成后来心学的重要转折。'],
        outcome: '龙场经历成为其思想发展的关键阶段，后来继续讲学并提出知行合一。思想转折不是困苦必然带来的奖赏。',
        cost: '贬谪、健康与生存压力真实存在，不能把受苦包装为必须经历的成长关卡。',
        bridge: '可以问“我原先默认的答案还适用吗”，再用小行动验证新理解；这不是要求在逆境里独自解决一切。',
        sourceIds: ['wang-life']
      },
      {
        id: 'wang-yangming-chenhao', title: '复杂局面里，先判断关键次序', period: '1519年 · 宁王之乱',
        struggleKeys: ['direction'],
        situation: '宁王朱宸濠起兵后，王守仁需要在兵力、城防与行军路线的约束下组织应对。他的奏疏留下对各路局势的分析。',
        choices: ['联络地方官员，组织兵力并传檄各地。', '比较直接赴援与攻击南昌等方案，再据局势调动兵力。'],
        outcome: '朱宸濠最终被擒，叛乱被平定。奏疏是当事人的战后报告，阅读时也应保留这一立场。',
        cost: '军事行动伴随伤亡与政治后果，不能抽象成无代价的个人“破局术”。',
        bridge: '可借鉴的是列清约束、比较路径与行动次序；现代问题不等于战争，也不宜把他人视为敌军。',
        sourceIds: ['wang-chenhao']
      }
    ],
    sources: [
      { id: 'wang-life', title: '钱德洪等编：《王文成全书》卷三十二·年谱一（Wikisource）', url: 'https://wikisource.org/wiki/王文成全書/卷32' },
      { id: 'wang-chenhao', title: '王守仁：《擒获宸濠捷音疏》原文（识典古籍）', url: 'https://www.shidianguji.com/book/SBCK266/chapter/1j7409n2x9647_165' }
    ]
  },
  {
    id: 'sima-qian', name: '司马迁', era: '西汉', lifespan: '约前145—卒年未详', role: '史学家 · 文学家',
    title: '深潜的记录者', tagline: '把眼前的片段，慢慢写成自己的长卷。',
    tags: ['长期专注', '追问本末', '认真作证'], color: '#5b666a', portraitIndex: 4,
    vector: [22, 28, 90, 64],
    summary: '这份画像取司马迁搜集、整理、追问历史的长期投入。他的人生不能被压成励志口号，更不能用其承受的伤害要求别人忍受伤害。',
    strengths: ['愿意为重要问题做长时间积累', '面对复杂材料，会追问来龙去脉', '能把零散信息组织成可理解的脉络'],
    tension: '长期目标能支撑行动，也可能让人忽略当下的消耗；继续投入和保护自己需要同时考虑。',
    difference: '不把他的苦难当作你必须忍耐的理由，也不保证坚持就有回报。',
    events: [
      {
        id: 'sima-qian-history', title: '把一个大愿望，变成具体的篇章', period: '西汉 · 编纂《史记》',
        struggleKeys: ['slow-growth', 'direction'],
        situation: '《太史公自序》记述司马谈临终嘱托，也交代司马迁接续史官工作、整理文献和编次历史的过程。任务远超一次短期写作。',
        choices: ['承接父亲的修史愿望，同时形成自己的历史判断。', '把材料分为本纪、表、书、世家、列传等部分，逐篇组织。'],
        outcome: '《史记》形成一百三十篇的整体结构。书的形成包含长期劳动，也包含后世流传与文本变化。',
        cost: '这样的工作耗时漫长，难以用短期外在反馈衡量。',
        bridge: '把大目标拆成能独立完成和复盘的小篇章；你可以调整目标，不必为了“宏大”牺牲所有其他生活。',
        sourceIds: ['sima-preface']
      },
      {
        id: 'sima-qian-letter', title: '在重创之后，说明仍想完成的事', period: '李陵事件受刑之后',
        struggleKeys: ['setback', 'slow-growth'],
        situation: '司马迁因李陵事件受刑。《报任安书》写下他的羞愤与艰难，也说明史书尚未完成，是他仍想继续活下去、完成著述的重要原因。',
        choices: ['在信中向任安说明自己的处境与难言之处。', '继续整理和完成已启动的史书写作。'],
        outcome: '著述得以继续，但信中的痛苦并未因此消失。不能把作品成就当作对伤害的补偿。',
        cost: '身体伤害与屈辱不可逆，也没有理由被美化成成才的必要条件。',
        bridge: '可以辨认一件仍愿意保留的事，也可以先求助和休息。这里绝不意味着你应忍受伤害来换取成就。',
        sourceIds: ['sima-letter', 'sima-preface']
      }
    ],
    sources: [
      { id: 'sima-preface', title: '司马迁：《史记·太史公自序》（维基文库）', url: 'https://zh.wikisource.org/wiki/史記/卷130' },
      { id: 'sima-letter', title: '司马迁：《报任少卿书》（即《报任安书》，维基文库）', url: 'https://zh.wikisource.org/wiki/報任少卿書' }
    ]
  },
  {
    id: 'xin-qiji', name: '辛弃疾', era: '南宋', lifespan: '1140—1207', role: '词人 · 官员',
    title: '炽热的行动派', tagline: '心里有山河，也把脚下的事做好。',
    tags: ['表达直接', '目标鲜明', '不甘停步'], color: '#9b433b', portraitIndex: 5,
    vector: [90, 44, 74, 58],
    summary: '这份画像选取辛弃疾直面问题、提出具体方案的一面，也保留他壮志受阻的现实。热烈不是永远有机会施展。',
    strengths: ['对在意的方向有鲜明立场', '愿意把主张写成具体方案', '在能力范围内主动寻找可以做的事'],
    tension: '目标很明确时，外界的迟疑容易变得刺耳；辨认局势限制，能帮助你把热情放在可推进的位置。',
    difference: '不把历史上的战争与忠义观念，套成今天必须认同的价值。',
    events: [
      {
        id: 'xin-qiji-plans', title: '把热望，写成可讨论的方案', period: '南归以后 · 《美芹十论》《九议》',
        struggleKeys: ['direction', 'slow-growth'],
        situation: '南归后，辛弃疾希望恢复失地，但个人主张与朝廷路线并不一致。他以《美芹十论》《九议》等提出军事政治意见。',
        choices: ['分析南北形势，把主张分条写成奏议。', '在地方任职时处理具体政务，而非只停留在表达愿望。'],
        outcome: '这些奏议保存了他的分析与筹划，并未换来其恢复目标的实现。《美芹十论》的具体进奏年份有不同说法。',
        cost: '认真准备的方案也可能不被采用，目标是否实现不完全取决于个人投入。',
        bridge: '可把愿望变成别人能够理解和反馈的方案，同时确认决策权在哪里；这不是保证说服他人的方法。',
        sourceIds: ['xin-plans', 'xin-life']
      },
      {
        id: 'xin-qiji-daihu', title: '没有舞台的时候，仍有表达', period: '1181年后 · 带湖闲居',
        struggleKeys: ['setback', 'slow-growth'],
        situation: '被免职后，辛弃疾退居带湖。乡村生活与友人交往进入他的词作，未酬的政治愿望也没有因此完全放下。',
        choices: ['在闲居中继续写词，描写乡村与内心的不平。', '与陈亮等友人往来唱和、讨论世事。'],
        outcome: '闲居成为其创作的重要时期，但词作成就不等于政治目标得到兑现。',
        cost: '失去职位、壮志受阻与内心矛盾并存，不能简单称为主动选择的慢生活。',
        bridge: '在暂时无法推进主目标时，保留表达和可信任的交流。它可以支持你，却不必被说成另一种“成功”。',
        sourceIds: ['xin-life']
      }
    ],
    sources: [
      { id: 'xin-life', title: '《山东省志·诸子名家志·辛弃疾》生平（公开归档）', url: 'https://shandong-chorography.org/database/zzmj/section/7/article/4/' },
      { id: 'xin-plans', title: '《山东省志》辛弃疾库：《美芹十论》（含年代争议）', url: 'https://shandong-chorography.org/database/a/section/90/article/25/' }
    ]
  },
  {
    id: 'ban-zhao', name: '班昭', era: '东汉', lifespan: '约45—约117', role: '史学家 · 文学家',
    title: '沉静的织史者', tagline: '不必喧哗，也能留下自己的篇章。',
    tags: ['严谨有序', '耐心深耕', '以学立身'], color: '#78634c', portraitIndex: 6,
    vector: [28, 38, 92, 32],
    summary: '这份画像取班昭续修史书、讲授学问与文学表达的一面。关注她的学术劳动，不意味着照搬她所处时代的性别规范。',
    strengths: ['能接住复杂工作并继续整理', '重视知识的条理与传递', '愿意在安静的劳动中建立自己的位置'],
    tension: '擅长接住责任，也可能太少追问“这件事是否仍值得我投入”；承担与边界可以并存。',
    difference: '只对应其学术劳动，不照搬古代性别秩序与《女诫》规范。',
    events: [
      {
        id: 'ban-zhao-hanshu', title: '接续未竟之书，也走进学问之中', period: '东汉 · 续修《汉书》',
        struggleKeys: ['slow-growth', 'direction'],
        situation: '班固去世时，《汉书》的八表及天文志尚未完成。《后汉书》记载，和帝命班昭到东观藏书阁继续相关工作。',
        choices: ['进入东观，接续整理未完成的史书部分。', '向马融等人讲授《汉书》，参与知识的传递。'],
        outcome: '她成为《汉书》成书与传授过程的重要参与者；史书也记有马续接续完成的工作，不宜把全部功劳归于一人。',
        cost: '史书编纂需要长期细密劳动，个人贡献也处在家学、宫廷与多人协作的结构之中。',
        bridge: '可借鉴的是把复杂任务整理成能交接、能讲清的成果；不必把替所有人收尾当成个人义务。',
        sourceIds: ['ban-history']
      },
      {
        id: 'ban-zhao-east', title: '离开熟悉之地，先看清沿途', period: '113年 · 随子东行',
        struggleKeys: ['direction', 'setback'],
        situation: '《东征赋》写班昭随儿子东行。她坦陈离开故地的不舍，也记沿途地点、人物与对往事的追想。',
        choices: ['继续行程，同时把不舍与犹疑写进作品。', '观察沿途景物，并借历史人物反思当下的处境。'],
        outcome: '这一行程留下《东征赋》。作品展示她怎样书写迁移中的心绪，并非所有现实问题都已得到解答。',
        cost: '启程伴随着怀乡和不安，文中的古代伦理也有特定时代背景。',
        bridge: '走向陌生处境时，可以一面行动一面记录，不必先消除全部不安。今天的选择条件与古代迁行不同。',
        sourceIds: ['ban-east']
      }
    ],
    sources: [
      { id: 'ban-history', title: '范晔：《后汉书》卷八十四·班昭传（维基文库）', url: 'https://zh.wikisource.org/zh-hans/後漢書/卷84#班昭' },
      { id: 'ban-east', title: '班昭：《东征赋》原文（维基文库）', url: 'https://zh.wikisource.org/wiki/東征賦_(班昭)' }
    ]
  },
  {
    id: 'xu-xiake', name: '徐霞客', era: '明', lifespan: '1587—1641', role: '旅行家 · 地理学家',
    title: '好奇的探路人', tagline: '先走近一点，答案才有机会改变。',
    tags: ['亲身验证', '好奇驱动', '细看世界'], color: '#687b6b', portraitIndex: 7,
    vector: [48, 22, 38, 98],
    summary: '这份画像选取徐霞客走向现场、持续观察与记录的一面。探索可以很认真，也需要准备、支持与必要时停下的判断。',
    strengths: ['愿意亲自确认而非只接受现成结论', '对陌生事物保持持续的兴趣', '能把探索中的细节记录下来'],
    tension: '好奇可能把人带得很远，也可能让消耗暂时隐身；探索与准备、求助和停止并不矛盾。',
    difference: '旅行不是所有人的答案，也不鼓励在缺乏准备时冒险。',
    events: [
      {
        id: 'xu-xiake-travel', title: '用走访与记录，替代远远想象', period: '1608年起 · 长期游历',
        struggleKeys: ['direction', 'slow-growth'],
        situation: '徐霞客少年喜读地志，成年后走向实地。他的游历持续三十余年，观察范围包括山川地貌、水文以及地方生活。',
        choices: ['把实地行走作为长期投入，而非只在书中认识地理。', '按日记录所见，逐步积累游记资料。'],
        outcome: '留下的大量游记成为明代地理学的重要材料。今天读到的书也经过后人的整理与流传。',
        cost: '长期出行需要时间、体力与支持，无法只凭热情维持。',
        bridge: '如果一直在想，可以安排一次安全、有限的现场了解。探索的第一步可以很小，不必远行。',
        sourceIds: ['xu-museum', 'xu-journal']
      },
      {
        id: 'xu-xiake-hardship', title: '路并不总通，也要知道何时停', period: '长期游历与晚年西南之行',
        struggleKeys: ['setback', 'slow-growth'],
        situation: '徐霞客旅途中经历遇盗、断粮等困难。1640年，他病倒于云南丽江，后来由人护送回乡，次年去世。',
        choices: ['在长期行走中继续观察和记录。', '病重后结束行程，在他人护送下返乡。'],
        outcome: '他的记录保存了探索所得，身体限制也最终使旅程停止。这不是“只要坚持就能抵达”的故事。',
        cost: '风险、疾病与物资困难都可能中断计划，不能因其历史成就而忽略。',
        bridge: '遇到阻碍时，既可以调整路线，也可以停止并求助。照顾资源和身体，是探索的一部分。',
        sourceIds: ['xu-museum']
      }
    ],
    sources: [
      { id: 'xu-museum', title: '故宫博物院：徐霞客词条', url: 'https://www.dpm.org.cn/lemmas/241596.html' },
      { id: 'xu-journal', title: '徐弘祖：《徐霞客游记》原文目录（维基文库）', url: 'https://zh.wikisource.org/zh-hans/徐霞客遊記' }
    ]
  }
];


export const PEOPLE = [...CHINESE_PEOPLE.map(person => ({...person,country:"中国",region:"东亚",portraitSheet:"china"})),...WORLD_PEOPLE_A,...WORLD_PEOPLE_B];
