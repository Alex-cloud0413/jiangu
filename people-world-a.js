// 世界人物 A 组。四维向量、称号、标签与现代启发均为待验证的编辑性设计。
// vector: [expression 内敛→外放, decision 逻辑→共情, planning 灵活→计划, openness 稳定→探索]。
// 人物归属记录历史文化与主要活动地区，不将今天的国籍概念倒推为本人身份。
export const WORLD_PEOPLE_A = [
  {
    id: 'leonardo-da-vinci', name: '列奥纳多·达·芬奇', era: '文艺复兴', lifespan: '1452—1519',
    country: '意大利诸邦／法国', region: '欧洲', role: '艺术家 · 自然研究者',
    title: '好奇的连线者', tagline: '让不同的好奇，在同一页相遇。',
    tags: ['跨界联想', '亲手观察', '保留问题'], color: '#8c6446', portraitSheet: 'world-1', portraitIndex: 0,
    vector: [55, 24, 17, 100],
    summary: '这份画像取达·芬奇用图画连接艺术、机械与自然观察的一面。他的笔记容纳了大量问题，也留下未完成与被修正的想法。',
    strengths: ['能在不同领域之间发现联系', '愿意画下来、试着理解具体事物', '允许问题暂时没有统一答案'],
    tension: '兴趣不断延伸，也可能让收束变难。好奇值得保护，完成一个小单元同样有价值。',
    difference: '跨界的相似不等于拥有他的才华，也不要求同时承担很多项目。',
    events: [
      { id: 'leonardo-notebooks', title: '把散开的兴趣放进可回看的笔记', period: '约1487—1505年 · 笔记研究', struggleKeys: ['direction', 'slow-growth'],
        situation: '在米兰等地工作时，达·芬奇同时记录几何、水力、服饰、建筑与人体观察。这些内容常交错出现在同一本笔记中。',
        choices: ['用短记、草图和图解保存具体问题。', '让绘画与机械等不同领域的观察互相提供线索。'],
        outcome: '留存的《福斯特手稿》呈现了持续积累的研究痕迹，许多条目并未在当时变成成品。',
        cost: '笔记能保留思路，却不自动解决整理、验证和完成作品的工作。',
        bridge: '可先为不同兴趣建立一个回看入口，再选其中一个问题做小实验。现代启发是整理方法，而非模仿天才的工作量。', sourceIds: ['leonardo-vam'] },
      { id: 'leonardo-anatomy', title: '证据不足时，允许理解重新开始', period: '1489年后至1510—1511年 · 解剖研究', struggleKeys: ['setback', 'slow-growth'],
        situation: '早期只有头骨材料时，达·芬奇无法充分理解脑的结构，相关研究一度停顿；获得更多解剖材料后，他又重返这些问题。',
        choices: ['用实际解剖与实验检验早先的身体图像。', '借助分层、剖面与多角度图解，重新记录骨骼和肌肉。'],
        outcome: '新的观察使他修正部分旧有认识，1510—1511年的图稿成为其解剖研究的重要成果。',
        cost: '研究依赖材料和合作机会，长期停顿不能简单归因为意志不足。',
        bridge: '如果缺少关键材料，先标出缺口；等条件变化时重新检查，比要求自己立刻想通更可行。', sourceIds: ['leonardo-anatomy'] }
    ],
    sources: [
      { id: 'leonardo-vam', title: '维多利亚与艾尔伯特博物馆：《福斯特手稿 III》', url: 'https://www.vam.ac.uk/articles/explore-leonardo-da-vincis-notebooks-codex-forster-iii.html' },
      { id: 'leonardo-anatomy', title: '英国皇家收藏：达·芬奇的解剖研究', url: 'https://www.rct.uk/collection/stories/leonardo-in-the-royal-collection/leonardos-study-of-anatomy' }
    ]
  },
  {
    id: 'galileo-galilei', name: '伽利略', era: '16—17世纪', lifespan: '1564—1642', country: '意大利诸邦', region: '欧洲', role: '天文学家 · 物理研究者',
    title: '求证的发问者', tagline: '把一个疑问，交给可检验的观察。', tags: ['追问依据', '动手求证', '表达鲜明'], color: '#7a654f', portraitSheet: 'world-1', portraitIndex: 1,
    vector: [72, 10, 57, 88],
    summary: '这份画像聚焦伽利略通过仪器和观察提出问题的一面，也保留他身处权力约束时的现实处境。坚持研究并不意味着没有妥协。',
    strengths: ['会追问判断依靠什么证据', '愿意改进工具再检查问题', '能把观察整理成可讨论的论述'],
    tension: '想把依据讲清楚，有时会忽略讨论环境的限制。表达的力度与可承受的代价，需要一起判断。',
    difference: '现代分歧并不等同宗教审判，不能把每次反对都理解成自己必然正确。',
    events: [
      { id: 'galileo-telescope', title: '先把观察工具变得更可靠', period: '1609—1610年 · 望远镜观测', struggleKeys: ['direction', 'slow-growth'],
        situation: '望远镜已在欧洲出现，伽利略改进并制作仪器，将它转向天空，逐步记录月面及木星附近的变化。',
        choices: ['制作并使用望远镜进行重复观测。', '整理发现，于1610年发表《星际信使》。'],
        outcome: '木星卫星等观察为当时的宇宙讨论带来新材料，仪器与观察也需要他人检查和重复。',
        cost: '观测精度和解释都有限，新的工具不会使所有判断立即得到认同。',
        bridge: '先问自己能否把一个争论变成可观察的小问题，而不是只增加表达的音量。', sourceIds: ['galileo-telescope', 'galileo-life'] },
      { id: 'galileo-two-sciences', title: '在受限的条件里，整理仍能完成的研究', period: '1633—1638年 · 审判之后', struggleKeys: ['setback', 'slow-growth'],
        situation: '1633年受审并被迫宣誓放弃相关主张后，伽利略受到居住、会面及出版限制。他的晚年研究环境明显收窄。',
        choices: ['继续整理关于材料强度和运动的研究。', '通过出版合作，使《两门新科学》于1638年在莱顿出版。'],
        outcome: '多年研究得以结集，但出版并未使审判、健康和行动限制消失。',
        cost: '他的自由受到实质限制；完成作品不是这些损失的补偿。',
        bridge: '受阻时可辨认哪些工作仍能推进，同时保留对外部支持与现实边界的判断。', sourceIds: ['galileo-two-sciences', 'galileo-life'] }
    ],
    sources: [
      { id: 'galileo-telescope', title: '伽利略博物馆：伽利略的望远镜', url: 'https://catalogue.museogalileo.it/object/GalileosTelescope.html' },
      { id: 'galileo-life', title: '伽利略博物馆：生平年表', url: 'https://www.museogalileo.it/en/galileo/life.html' },
      { id: 'galileo-two-sciences', title: '伽利略博物馆：《两门新科学》与出版背景', url: 'https://www2.museogalileo.it/en/library-and-research-institute/projects/meet-galileo/38-works/470-discorsi-e-dimostrazioni-matematiche-intorno-a-due-nuove-scienze-1638.html' }
    ]
  },
  {
    id: 'isaac-newton', name: '牛顿', era: '17—18世纪', lifespan: '1642/1643—1727', country: '英格兰', region: '欧洲', role: '数学家 · 自然哲学家',
    title: '深究的筑基者', tagline: '让一个问题，在反复推敲中站稳。', tags: ['专注深究', '结构清晰', '反复校验'], color: '#556254', portraitSheet: 'world-1', portraitIndex: 2,
    vector: [9, 7, 98, 72],
    summary: '这份画像选取牛顿长期推演、修订论证的一面。他的工作也依赖同行交流与支持，并不是独自完成一切的神话。',
    strengths: ['愿意追究问题背后的基础结构', '能长时间处理细节与论证', '会对已有成果继续修订'],
    tension: '把标准设得很高有助于严谨，也可能让人难以交付。区分关键错误与可以以后完善的部分。',
    difference: '专注偏好不等于科学能力，也不需要复制他的全部处世方式。',
    events: [
      { id: 'newton-principia', title: '让成熟的思考进入公开交流', period: '1687年 · 《自然哲学的数学原理》初版', struggleKeys: ['slow-growth', 'direction'],
        situation: '经过长期研究，牛顿将运动与引力的论证组织成《自然哲学的数学原理》。这项出版也需要具体的编辑和资金支持。',
        choices: ['把分散的研究写成相互关联的论证。', '接受哈雷的推动、监督与出版资助。'],
        outcome: '初版于1687年出版，为后来的研究提供了共同讨论的文本。',
        cost: '从推导到出版仍有大量组织工作，严谨的想法也需要合作才能被读到。',
        bridge: '可以为已有积累做一个可交流的版本，并明确自己需要哪一类帮助。', sourceIds: ['newton-principia'] },
      { id: 'newton-revisions', title: '完成之后，仍允许重要部分继续修订', period: '1687—1713年 · 《原理》再版', struggleKeys: ['slow-growth', 'setback'],
        situation: '初版问世后，牛顿认为若干部分仍应修改。修订跨越多年，并非一次发表就结束。',
        choices: ['持续记录补充与改动，让少数同行阅读相关材料。', '与罗杰·科茨合作，对1713年第二版作出实质修订。'],
        outcome: '第二版纳入大量改进，显示一项重要成果也可以在公开之后继续成长。',
        cost: '修订需要长期投入；回到旧工作会占用处理其他问题的时间。',
        bridge: '先确定一个版本的交付边界，再为真正重要的改进留出迭代空间。', sourceIds: ['newton-principia'] }
    ],
    sources: [
      { id: 'newton-principia', title: '格拉斯哥大学馆藏：《原理》初版与修订', url: 'https://www.gla.ac.uk/myglasgow/archivespecialcollections/digitisedcollections/revolutionsinastronomy/sirisaacnewtonprincipia/' },
      { id: 'newton-museum', title: '英国科学博物馆集团：艾萨克·牛顿', url: 'https://collection.sciencemuseumgroup.org.uk/people/cp91430/isaac-newton' }
    ]
  },
  {
    id: 'charles-darwin', name: '达尔文', era: '19世纪', lifespan: '1809—1882', country: '英国', region: '欧洲', role: '博物学家',
    title: '耐心的观察者', tagline: '结论可以晚一点，观察不必停下来。', tags: ['持续观察', '重视证据', '耐心积累'], color: '#69715a', portraitSheet: 'world-1', portraitIndex: 3,
    vector: [25, 20, 73, 92],
    summary: '这份画像取达尔文把旅行观察转化为长期研究的一面。提出解释、搜集证据与决定何时发表，是不同的工作。',
    strengths: ['愿意在真实材料中寻找线索', '能把零散观察长期组织起来', '遇到新证据会重新检查解释'],
    tension: '想等证据更完整是谨慎，也可能延迟交流。需要分清仍缺什么，与只是难以接受不确定性。',
    difference: '耐心研究不意味着无限等待，长期投入也需要阶段性判断。',
    events: [
      { id: 'darwin-beagle', title: '让陌生经历成为长期问题的起点', period: '1831—1836年 · 贝格尔号航行', struggleKeys: ['direction', 'slow-growth'],
        situation: '贝格尔号航行使达尔文接触到化石、地质与生物分布的大量差异。这些观察尚不是一套完成的演化解释。',
        choices: ['搜集并保存动植物、岩石和化石等材料。', '把野外观察带回持续整理和比较。'],
        outcome: '旅途资料成为其此后研究的重要基础，影响延续到多年后的著作。',
        cost: '远行与采集只是开始，整理、比较和解释仍耗费漫长时间。',
        bridge: '给一次新体验留下具体记录，再从中挑一个值得持续追问的问题。', sourceIds: ['darwin-fossils'] },
      { id: 'darwin-publication', title: '当别人也走到相近问题前，开始交流', period: '1858—1859年 · 共同发表与成书', struggleKeys: ['slow-growth', 'setback'],
        situation: '长期积累后，达尔文仍在考虑如何发表。1858年华莱士寄来相近理论，促使事情进入新的阶段。',
        choices: ['与同行商议，让两人的论述共同向林奈学会介绍。', '整理自己的论证，于1859年出版《物种起源》。'],
        outcome: '自然选择理论进入公开讨论，也引发了强烈争论；华莱士的独立贡献应被保留。',
        cost: '公开观点意味着接受质疑，积累并不能免除沟通与修订的压力。',
        bridge: '如果一直等待更完美的时机，可以先让可信任的人看见一个有依据的阶段版本。', sourceIds: ['darwin-life'] }
    ],
    sources: [
      { id: 'darwin-fossils', title: '英国自然史博物馆：达尔文航行采集的化石', url: 'https://www.nhm.ac.uk/our-science/services/collections/digital/programme/darwins-fossils.html' },
      { id: 'darwin-life', title: '英国自然史博物馆：达尔文生平与共同发现', url: 'https://www.nhm.ac.uk/discover/charles-darwin-most-famous-biologist.html' }
    ]
  },
  {
    id: 'marie-curie', name: '玛丽·居里', era: '19—20世纪', lifespan: '1867—1934', country: '波兰文化背景／法国', region: '欧洲', role: '物理学家 · 化学家',
    title: '坚定的探究者', tagline: '把重要的问题，做成可以继续的一步。', tags: ['专注投入', '重视实证', '安静坚定'], color: '#65706c', portraitSheet: 'world-1', portraitIndex: 4,
    vector: [18, 26, 95, 80],
    summary: '这份画像聚焦居里把研究拆成持续实验、并在生活剧变后重新承担工作的一面。科学成就不能抵消她经历的失去与健康代价。',
    strengths: ['愿意对重要问题持续投入', '能用反复实验检验线索', '在变化中重新安排可继续的工作'],
    tension: '专注可能让人忽略消耗。值得做的事，也需要条件、协作与健康边界。',
    difference: '研究中的风险不是应当复制的勇敢，承担越多也不代表越有价值。',
    events: [
      { id: 'curie-radioactivity', title: '把一个异常，追成可验证的线索', period: '1890年代末 · 放射性研究', struggleKeys: ['slow-growth', 'direction'],
        situation: '居里夫妇发现沥青铀矿的放射性强于其中的铀，推测矿石里可能还有其他放射性物质。',
        choices: ['对矿物和物质进行持续测量与化学分离。', '与皮埃尔·居里合作，追查异常读数的来源。'],
        outcome: '研究带来钋和镭的发现，随后获得1903年诺贝尔物理学奖的共同认可。',
        cost: '艰苦实验与当时未被充分认识的辐射风险带来真实健康代价。',
        bridge: '把“哪里不对劲”写成一个能检查的问题，同时把资源与安全条件纳入计划。', sourceIds: ['curie-facts', 'curie-science'] },
      { id: 'curie-new-role', title: '失去合作伙伴后，重新承担一个位置', period: '1906年 · 皮埃尔去世之后', struggleKeys: ['setback', 'direction'],
        situation: '皮埃尔·居里意外去世，玛丽同时面对失亲、家庭照顾与研究工作的改变。',
        choices: ['接续实验室与教学工作。', '于1906年开始承担索邦的物理学教授职责。'],
        outcome: '她继续开展研究并开设课程，成为首位担任该教授职位的女性。失去并没有因此被抹去。',
        cost: '工作与照顾责任同时存在，继续研究不意味着悲痛已经结束。',
        bridge: '面对剧变，可先辨认一项愿意保留的责任，再为它安排支持，不必立即恢复全部节奏。', sourceIds: ['curie-biography', 'curie-science'] }
    ],
    sources: [
      { id: 'curie-facts', title: '诺贝尔奖官网：玛丽·居里事实资料', url: 'https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/' },
      { id: 'curie-biography', title: '诺贝尔奖官网：玛丽·居里传记', url: 'https://www.nobelprize.org/prizes/physics/1903/marie-curie/biographical/' },
      { id: 'curie-science', title: '诺贝尔奖官网：居里夫妇与钋、镭的发现', url: 'https://www.nobelprize.org/prizes/themes/marie-and-pierre-curie-and-the-discovery-of-polonium-and-radium/' }
    ]
  },
  {
    id: 'ada-lovelace', name: '阿达·洛夫莱斯', era: '19世纪', lifespan: '1815—1852', country: '英国', region: '欧洲', role: '数学研究者 · 计算先驱',
    title: '理性的想象家', tagline: '想象远一点，也把步骤写清一点。', tags: ['跨界想象', '重视结构', '看见潜能'], color: '#76606c', portraitSheet: 'world-1', portraitIndex: 5,
    vector: [48, 35, 68, 99],
    summary: '这份画像取洛夫莱斯把数学训练与想象结合的一面。她既关注计算步骤，也追问机器还能表达什么。',
    strengths: ['能从已有工具想到新的用途', '愿意把抽象设想写成具体步骤', '善于通过学习和书信开展协作'],
    tension: '看见远期可能很令人兴奋，但愿景仍要和当下能验证的部分分开。',
    difference: '有想象力并不要求预测未来，也不意味着每个设想都能马上实现。',
    events: [
      { id: 'ada-meets-engine', title: '把一次好奇，变成持续的学习', period: '1833年起 · 接触巴贝奇的机器', struggleKeys: ['direction', 'slow-growth'],
        situation: '十七岁的洛夫莱斯在聚会上结识巴贝奇，看见计算机器的工作部分；女性当时通常缺少这样的数学学习机会。',
        choices: ['继续接受数学训练并理解机器背后的原理。', '通过与数学家和科学友人的往来，延伸自己的问题。'],
        outcome: '这段学习与交往为她后来研究分析机提供了基础，并非一次相遇就完成的突破。',
        cost: '学习受到当时教育与家庭生活条件的限制，进展并不连续。',
        bridge: '如果新领域吸引你，先找一个入门问题与持续交流的对象，不急着要求立刻选定终身方向。', sourceIds: ['ada-chm', 'ada-museum'] },
      { id: 'ada-notes', title: '把远期想象写成能讨论的说明', period: '1843年 · 分析机译文与注释', struggleKeys: ['slow-growth', 'direction'],
        situation: '洛夫莱斯翻译梅纳布雷亚关于分析机的文章，并加入大篇幅注释。当时分析机并未完整建成。',
        choices: ['列出机器处理数学问题所需的步骤。', '讨论数字还能表示符号与音乐等内容的可能。'],
        outcome: '译文与注释发表，留下早期程序步骤和通用计算想象的记录。',
        cost: '纸上的说明无法代替完整机器的运行验证，历史贡献也不是单人独立完成。',
        bridge: '把愿景分成“可示范的步骤”和“尚待验证的可能”，更容易让别人理解并参与。', sourceIds: ['ada-history', 'ada-museum'] }
    ],
    sources: [
      { id: 'ada-chm', title: '计算机历史博物馆：阿达·洛夫莱斯', url: 'https://www.computerhistory.org/babbage/adalovelace' },
      { id: 'ada-history', title: '计算机历史博物馆：分析机与注释的历史', url: 'https://www.computerhistory.org/babbage/history' },
      { id: 'ada-museum', title: '英国科学博物馆集团：阿达·洛夫莱斯', url: 'https://collection.sciencemuseumgroup.org.uk/people/cp38764/ada-lovelace' }
    ]
  },
  {
    id: 'katherine-johnson', name: '凯瑟琳·约翰逊', era: '20—21世纪', lifespan: '1918—2020', country: '美国', region: '美洲', role: '数学家 · 航天研究者',
    title: '可靠的校验者', tagline: '让重要的一步，有可以信赖的依据。', tags: ['准确细致', '追问原理', '稳步协作'], color: '#6c574b', portraitSheet: 'world-1', portraitIndex: 6,
    vector: [44, 12, 98, 48],
    summary: '这份画像选取约翰逊在计算、核验和团队协作中的细致。可靠并非安静执行一切，也包含主动追问问题的来龙去脉。',
    strengths: ['对关键步骤愿意反复核对', '能把复杂任务拆成清楚的计算', '重视可供团队信赖的工作'],
    tension: '习惯承担校验责任，可能使自己接下过多工作。可靠也需要明确分工和可承受的节奏。',
    difference: '性格偏好不代表数学能力，团队成果也不能归给一个人。',
    events: [
      { id: 'johnson-langley', title: '从一次机会，进入新的研究位置', period: '1953—1960年 · 兰利研究工作', struggleKeys: ['direction', 'slow-growth'],
        situation: '约翰逊得知兰利的计算岗位机会后，与家人迁居并于1953年入职。她很快进入飞行研究相关项目。',
        choices: ['参与飞行试验数据分析，积累实际问题经验。', '与工程师合著关于轨道计算的研究报告。'],
        outcome: '1960年她成为该飞行研究部门首位获研究报告作者署名的女性。',
        cost: '职业发展发生在种族隔离与性别限制的环境中，个人努力不能概括所有障碍。',
        bridge: '可以先把已有能力接到一个具体项目上，同时主动了解进入新角色所需的支持条件。', sourceIds: ['johnson-nasa'] },
      { id: 'johnson-glenn', title: '面对关键节点，用复核建立信任', period: '1962年 · 格伦轨道飞行准备', struggleKeys: ['setback', 'slow-growth'],
        situation: '格伦轨道飞行依赖电子计算机计算轨迹，任务团队仍担心机器出现故障。格伦请求约翰逊人工核对相同数据。',
        choices: ['使用桌面机械计算机复核相关方程与数值。', '把核验结果提供给飞行准备团队。'],
        outcome: '这项工作成为发射前检查的一部分，格伦的轨道飞行最终成功。',
        cost: '高风险任务中的准确性依靠多人流程，不能用个人“从不出错”来替代。',
        bridge: '把担心转成一张有边界的检查清单，并确定谁能协助核对关键步骤。', sourceIds: ['johnson-nasa'] }
    ],
    sources: [{ id: 'johnson-nasa', title: '美国国家航空航天局：凯瑟琳·约翰逊传记', url: 'https://www.nasa.gov/centers-and-facilities/langley/katherine-johnson-biography/' }]
  },
  {
    id: 'albert-einstein', name: '爱因斯坦', era: '19—20世纪', lifespan: '1879—1955', country: '德国出生／瑞士与美国工作', region: '欧洲', role: '理论物理学家',
    title: '独立的追问者', tagline: '先看清问题，也允许换一种问法。', tags: ['独立思考', '探索本质', '敢于重问'], color: '#626b74', portraitSheet: 'world-1', portraitIndex: 7,
    vector: [30, 16, 34, 96],
    summary: '这份画像取爱因斯坦重新检查基本假设、在熟悉问题中寻找新问法的一面。他的重要成果与未完成追求都应被看见。',
    strengths: ['愿意重新检查被视为理所当然的前提', '能从简单的问题追到更深层结构', '对未被解决的问题保留耐心'],
    tension: '独立判断能打开新路，也可能使人过度依恋自己的解释。持续让想法面对反馈同样重要。',
    difference: '与他的思考取向相近，不代表科学能力或观点必然正确。',
    events: [
      { id: 'einstein-1905', title: '在日常工作之外，持续整理重要问题', period: '1905年 · 伯尔尼时期', struggleKeys: ['slow-growth', 'direction'],
        situation: '在伯尔尼专利局任职期间，爱因斯坦继续研究物理问题。1905年，他的工作涉及光、布朗运动和相对论等领域。',
        choices: ['把基本概念中的疑问整理成明确的论证。', '以论文形式向科学共同体提出新的解释。'],
        outcome: '这一年的多篇论文产生深远影响，但它们并非凭一次灵感就完成的全部人生。',
        cost: '研究仍需要长期学习与推导，工作之外的投入也受到时间约束。',
        bridge: '为一个重要问题保留稳定的小块时间，并把思考写成别人能检查的内容。', sourceIds: ['einstein-works'] },
      { id: 'einstein-ias', title: '迁往新环境后，继续追问未完成的方向', period: '1933—1955年 · 普林斯顿高等研究院', struggleKeys: ['direction', 'slow-growth'],
        situation: '1933年爱因斯坦赴美国加入高等研究院，随后长期在那里研究。他继续追求统一场论这一尚未解决的方向。',
        choices: ['在新的学术环境中继续开展理论研究。', '把精力投入自己认为重要、但同行选择不同的问题。'],
        outcome: '高等研究院成为其后半生的工作基地，而他并未完成一套被接受的统一场理论。',
        cost: '长期追求不保证得到预期答案，也可能与主流研究方向拉开距离。',
        bridge: '可以认真对待自己的问题，同时定期检查路径和投入，不把坚持本身当成结果。', sourceIds: ['einstein-ias'] }
    ],
    sources: [
      { id: 'einstein-works', title: '普林斯顿高等研究院：爱因斯坦1905年的重要论文', url: 'https://www.ias.edu/albert-einstein-great-works' },
      { id: 'einstein-ias', title: '普林斯顿高等研究院：爱因斯坦人物档案', url: 'https://www.ias.edu/scholars/einstein' }
    ]
  },
  {
    id: 'ibn-battuta', name: '伊本·白图泰', era: '14世纪', lifespan: '1304—约1368/1369', country: '摩洛哥', region: '非洲', role: '旅行家 · 游记口述者',
    title: '开放的远行者', tagline: '先走一小段，再让世界回答。', tags: ['乐于交往', '适应变化', '向往远方'], color: '#99714b', portraitSheet: 'world-2', portraitIndex: 0,
    vector: [93, 53, 18, 96],
    summary: '这份画像取白图泰通过旅行与交往接触陌生世界的一面。《游记》也混合回忆、转述和文学加工，不能当作每段路线的独立证明。',
    strengths: ['愿意进入不熟悉的环境', '能借助交流建立临时支持', '会在实际旅途中不断调整路线'],
    tension: '新鲜经历容易吸引注意，也可能让风险和承诺被放到后面。出发之前仍需要边界。',
    difference: '现代探索不必是远行，更不应以冒险的程度衡量勇气。',
    events: [
      { id: 'battuta-departure', title: '从一个明确目的，走向更大的世界', period: '1325年起 · 离开丹吉尔', struggleKeys: ['direction'],
        situation: '白图泰从丹吉尔出发，最初目的是前往麦加朝觐。这一明确目的后来延伸成持续多年的旅行。',
        choices: ['沿途加入旅行者与朝觐者的网络。', '在不同城镇停留，接触学者、商旅与当地生活。'],
        outcome: '旅程跨越约二十九年，留下关于多地社会生活的叙述，也伴随多次路线变化。',
        cost: '长途旅行意味着疾病、失散和交通风险，不能只保留浪漫的一面。',
        bridge: '先给探索一个小而清楚的目的，并提前安排可获得的帮助，不必一开始就设计整个人生。', sourceIds: ['battuta-journey'] },
      { id: 'battuta-rihla', title: '回到起点，把经历交给共同整理', period: '1354—1355年 · 非斯整理《游记》', struggleKeys: ['slow-growth', 'direction'],
        situation: '回到非斯后，摩洛哥苏丹要求白图泰讲述旅途，由伊本·朱扎伊整理成书，追记多年前的经历。',
        choices: ['口述见闻，配合撰写者组织叙述。', '把散落的记忆转成能被他人阅读的游记形式。'],
        outcome: '《游记》得以流传，但其中也有借用前人记述、转闻和记忆不确定之处。',
        cost: '整理经历需要取舍与核对，生动的故事并不自动等于准确的记录。',
        bridge: '回看经历时区分亲见、听说与推测，再找一个人帮助你整理，而不只是不断增加新体验。', sourceIds: ['battuta-writing'] }
    ],
    sources: [
      { id: 'battuta-journey', title: '加州大学伯克利分校 ORIAS：白图泰的旅行', url: 'https://orias.berkeley.edu/resources-teachers/travels-ibn-battuta' },
      { id: 'battuta-writing', title: '加州大学伯克利分校 ORIAS：整理《游记》', url: 'https://orias.berkeley.edu/node/177' }
    ]
  },
  {
    id: 'al-biruni', name: '比鲁尼', era: '10—11世纪', lifespan: '973—1048', country: '花拉子模／伽色尼地区', region: '西亚与中亚', role: '数学家 · 天文学家 · 文化研究者',
    title: '审慎的求知者', tagline: '先理解不同，再说出自己的判断。', tags: ['比较求证', '跨文化理解', '精细测量'], color: '#5c7473', portraitSheet: 'world-2', portraitIndex: 1,
    vector: [40, 6, 86, 95],
    summary: '这份画像聚焦比鲁尼用语言学习、比较和测量理解世界的一面。他既研究自然，也尝试把陌生文化说明白。',
    strengths: ['愿意为理解对象补充背景知识', '能区分观察与解释', '把复杂问题拆成可以测量的关系'],
    tension: '谨慎比较能减少误判，也可能让行动迟迟开始。先决定眼下需要多少信息。',
    difference: '跨文化理解不等于拥有完全中立的位置，历史著作同样存在时代与视角限制。',
    events: [
      { id: 'biruni-india', title: '身处陌生环境，先学习对方的语言', period: '11世纪前期 · 印度研究', struggleKeys: ['setback', 'direction'],
        situation: '政治变化使比鲁尼迁至伽色尼，并接触印度地区。他面对的是语言、宗教与知识传统都不同的社会。',
        choices: ['学习梵语，与当地学者交流并阅读相关著作。', '比较不同传统的数学、天文与文化知识。'],
        outcome: '他在《印度志》中整理观察与理解，形成一项重要的跨文化研究。',
        cost: '理解依赖语言、接触机会和自身立场，不能保证没有误解。',
        bridge: '遇到不熟悉的人或环境，先问自己还缺哪些背景，再急着作评价。', sourceIds: ['biruni-mactutor'] },
      { id: 'biruni-measurement', title: '把宏大的问题，拆成可测量的关系', period: '11世纪 · 地球测量研究', struggleKeys: ['slow-growth', 'direction'],
        situation: '要理解地球大小，无法仅靠直觉。比鲁尼把山高、地平线方向与几何关系联系起来研究。',
        choices: ['将高度和角度等测量组织成计算方法。', '在地理研究中比较不同地点及前人的资料。'],
        outcome: '他提出以三角测量处理地球及地面距离问题的方法，留下可供讨论的计算路径。',
        cost: '计算结果仍受测量精度、地形和所用假设影响。',
        bridge: '面对过大的目标，先找一个可测量的局部，并把采用的假设写出来。', sourceIds: ['biruni-mactutor'] }
    ],
    sources: [{ id: 'biruni-mactutor', title: '圣安德鲁斯大学 MacTutor：比鲁尼传记', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Al-Biruni/' }]
  },
  {
    id: 'rabindranath-tagore', name: '泰戈尔', era: '19—20世纪', lifespan: '1861—1941', country: '孟加拉地区（今印度）', region: '南亚', role: '诗人 · 教育实践者',
    title: '温厚的理想家', tagline: '让珍视的理想，落在真实的人与事里。', tags: ['关注感受', '文化开放', '以行动表达'], color: '#8f755b', portraitSheet: 'world-2', portraitIndex: 2,
    vector: [70, 96, 42, 91],
    summary: '这份画像选取泰戈尔把文学感受、教育与社会关切连在一起的一面。理想不只写在作品中，也需要在现实组织里接受检验。',
    strengths: ['能从具体生活感受他人的处境', '愿意在不同文化之间交流', '会为重视的价值建立实践空间'],
    tension: '对理想投入很深时，容易把所有责任都揽到自己身上。关切需要与资源和分工一起安排。',
    difference: '温和表达不意味着回避立场，文化开放也不要求接受一切。',
    events: [
      { id: 'tagore-school', title: '把教育理想，变成一所可以实践的学校', period: '1901年起 · 圣蒂尼克坦', struggleKeys: ['direction', 'slow-growth'],
        situation: '泰戈尔对教育有自己的想象，希望让学习与自然、文化交流和人的发展相连。',
        choices: ['在圣蒂尼克坦建立实验学校。', '以学校为场所，继续尝试不同传统间的教育交流。'],
        outcome: '学校逐渐成为其创作、教育与文化活动的重要基地，理想由此获得具体的实践场所。',
        cost: '办学需要持续组织和资源支持，愿景本身不足以保证运行。',
        bridge: '为一个理想设计一次小范围的实际尝试，让真实参与者的反馈帮助你修正。', sourceIds: ['tagore-facts', 'tagore-india'] },
      { id: 'tagore-knighthood', title: '当荣誉与价值冲突，重新表达立场', period: '1919年 · 阿姆利则惨案之后', struggleKeys: ['setback', 'direction'],
        situation: '阿姆利则惨案发生后，泰戈尔认为此前接受的英国爵位已与自己要表达的抗议不相容。',
        choices: ['致信印度总督，请求放弃爵位。', '用公开行动表达对殖民统治暴行的反对。'],
        outcome: '他明确拒绝继续保有这项荣誉，但一次象征行动并未结束殖民处境。',
        cost: '表达立场意味着放下既有身份带来的认可，也无法立即改变结构性问题。',
        bridge: '遇到价值冲突时，可以先写清自己不愿交换的部分，再选择可承担的表达方式。', sourceIds: ['tagore-india'] }
    ],
    sources: [
      { id: 'tagore-facts', title: '诺贝尔奖官网：泰戈尔事实资料', url: 'https://www.nobelprize.org/prizes/literature/1913/tagore/facts/' },
      { id: 'tagore-india', title: '诺贝尔奖官网：阿马蒂亚·森《泰戈尔与他的印度》', url: 'https://www.nobelprize.org/prizes/literature/1913/tagore/article/' }
    ]
  },
  {
    id: 'murasaki-shikibu', name: '紫式部', era: '日本平安时代', lifespan: '约10世纪末—11世纪初', country: '日本', region: '东亚', role: '作家 · 宫廷女官',
    title: '细腻的观心者', tagline: '安静观察，也能写下复杂的世界。', tags: ['敏锐观察', '内在整理', '细致表达'], color: '#806779', portraitSheet: 'world-2', portraitIndex: 3,
    vector: [8, 91, 79, 69],
    summary: '这份画像取紫式部对宫廷生活与人情细节的观察，以及通过文字组织复杂感受的一面。作品中的人物不应直接等同作者本人。',
    strengths: ['能留意关系中的细微变化', '愿意在独处中整理复杂感受', '可以用长期写作保存观察'],
    tension: '留意他人的目光有助于理解关系，也可能让自己过度收敛。需要为真实想法保留安全的表达空间。',
    difference: '细腻不等于能猜准他人心思，小说人物也不是作者的人格测验答案。',
    events: [
      { id: 'murasaki-learning', title: '在限制之中，辨认可以保留的学问', period: '11世纪初 · 宫廷日记中的记录', struggleKeys: ['setback', 'direction'],
        situation: '紫式部的日记记下她对流言的顾虑，也写到自己曾假装不懂屏风上的汉字；当时女性学习汉文受到性别期待约束。',
        choices: ['根据宫廷关系判断如何显露自己的知识。', '在日记中保留对处境与他人评价的观察。'],
        outcome: '这些记录让后人看见知识、表达与性别规范之间的紧张，并非一个毫无阻力的才女故事。',
        cost: '适应环境可能带来压抑，谨慎表达不等于认可造成限制的规则。',
        bridge: '先辨认在哪里可以安全表达，也可以寻找支持者；不必要求自己在每个场合证明全部能力。', sourceIds: ['murasaki-met'] },
      { id: 'murasaki-genji', title: '让长期观察，慢慢成为可以传阅的作品', period: '1008年前后 · 《源氏物语》写作与传抄', struggleKeys: ['slow-growth', 'direction'],
        situation: '紫式部在宫廷中持续写作。1008年的日记已提及《源氏物语》，也记下抄写、装订与宫廷读者的活动。',
        choices: ['通过人物与叙事组织对生活的观察。', '参与作品的传抄与整理，让文本进入读者之间。'],
        outcome: '作品当时已被阅读，写作可能仍在继续；1008年不能简单当作确定的完稿日期。',
        cost: '长篇写作、传抄与流传依赖具体环境和他人劳动，不只是个人灵感。',
        bridge: '把长项目拆成可以整理和分享的片段，不必等到所有部分都完成才获得反馈。', sourceIds: ['murasaki-met'] }
    ],
    sources: [{ id: 'murasaki-met', title: '大都会艺术博物馆：《源氏物语——日本经典的图像世界》展览图录', url: 'https://resources.metmuseum.org/resources/metpublications/pdf/The_Tale_of_Genji_A_Japanese_Classic_Illuminated.pdf' }]
  }
];
