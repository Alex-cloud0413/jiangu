// 世界人物补充 B。人格称号、向量与现代启发是编辑性产品假设，不是历史人物的心理测量结果。
// 四轴依次为表达（内敛→外放）、判断（逻辑→共情）、行动（灵活→计划）、变化（稳定→探索）。
export const WORLD_PEOPLE_B = [
  {
    id:'jane-austen', name:'简·奥斯汀', era:'18—19世纪', lifespan:'1775—1817', country:'英国', region:'欧洲',
    role:'小说家', title:'敏锐的观察者', tagline:'把平常日子看深，也是一种创造。',
    tags:['洞察日常','分寸清楚','耐心打磨'], color:'#80675e', portraitSheet:'world-2', portraitIndex:4,
    vector:[27,51,82,48],
    summary:'这份画像取奥斯汀细看日常关系、反复修改作品的一面。安静的观察不等于没有主见，未被及时看见也不等于没有价值。',
    strengths:['能从细小互动中辨认关系','愿意让作品经过反复打磨','不急着用热闹代替判断'],
    tension:'观察得很细，也可能迟迟不愿把作品交出去。给打磨设置一个可以结束的节点。',
    difference:'她所处的出版与女性生活条件，不能直接等同你的选择空间。',
    events:[
      {
        id:'austen-susan', title:'作品被搁置时，仍去追问它的去向', period:'1803—1816年', struggleKeys:['setback','slow-growth'],
        situation:'《苏珊》的手稿售给出版商后长期没有出版。奥斯汀曾写信追问，后来才买回版权。',
        choices:['1809年主动致信出版商询问。','1816年买回手稿版权，并继续修改。'],
        outcome:'小说在她去世后以《诺桑觉寺》出版，等待没有在她生前完全结束。',
        cost:'出版主动权受到合约与资源限制，好作品也可能被长期搁置。',
        bridge:'可借鉴的是把“没人回应”拆成可查的具体问题，保留追问与另找路径的余地。',
        sourceIds:['austen-manuscript']
      },
      {
        id:'austen-chawton', title:'有了一个支点，把旧稿重新接起来', period:'1809—1817年 · 查顿', struggleKeys:['direction','slow-growth'],
        situation:'父亲去世后，奥斯汀与母亲、姐姐辗转居住。1809年，她们迁入兄长提供的查顿住宅。',
        choices:['重写早年的《埃莉诺与玛丽安》，成为《理智与情感》。','在查顿继续修改旧作并创作新的小说。'],
        outcome:'《理智与情感》于1811年出版，此后数部小说陆续问世。稳定居所是重要的实际条件。',
        cost:'她的工作依靠家庭提供的居住与出版支持，并非只靠个人意志。',
        bridge:'先辨认创作或学习缺少的具体支点，再为它争取一点固定空间。',
        sourceIds:['austen-life']
      }
    ],
    sources:[
      {id:'austen-manuscript',title:'牛津大学 Jane Austen Fiction Manuscripts：《Susan》手稿说明',url:'https://janeausten.ac.uk/edition/ms/SusanHeadNote.html'},
      {id:'austen-life',title:'Jane Austen’s House：Jane Austen, A Life',url:'https://janeaustens.house/jane-austen/jane-austen-a-life/'}
    ]
  },
  {
    id:'mary-shelley', name:'玛丽·雪莱', era:'19世纪', lifespan:'1797—1851', country:'英国', region:'欧洲',
    role:'小说家', title:'追问边界的想象者', tagline:'给一个奇怪的念头，长成故事的时间。',
    tags:['想象大胆','追问后果','持续改写'], color:'#6c687d', portraitSheet:'world-2', portraitIndex:5,
    vector:[43,60,24,94],
    summary:'这份画像取雪莱把科学、责任与人的处境放进想象，并持续改写作品的一面。新想法可以先不完整，再逐步找到形状。',
    strengths:['愿意走进没有现成答案的问题','能把不同领域的线索连起来','敢于重新检查早年的作品'],
    tension:'可能性越多，越容易让故事或计划无限生长。先完成一个能被阅读的版本。',
    difference:'小说的惊异想象不等于对现实科学的预测，也不代表你的全部性格。',
    events:[
      {
        id:'shelley-first-novel', title:'一个写作挑战，慢慢变成第一部长篇', period:'1816—1818年', struggleKeys:['direction','slow-growth'],
        situation:'1816年在日内瓦湖畔，雪莱与同行者参与鬼故事写作。她随后发展出《弗兰肯斯坦》。',
        choices:['把最初的故事构想继续写成长篇。','在手稿中修改、誊清，并与出版环节接洽。'],
        outcome:'小说于1818年匿名出版，现存手稿保留了从构想到成书的修改痕迹。',
        cost:'从念头到出版经过持续劳动，不能只用“一夜灵感”概括。',
        bridge:'把有吸引力的想法写成一个可完成的小版本，再通过修改让它长大。',
        sourceIds:['shelley-chronology']
      },
      {
        id:'shelley-revision', title:'已经出版的作品，也可以再想一次', period:'1831年 · 《弗兰肯斯坦》修订版', struggleKeys:['direction','slow-growth'],
        situation:'《弗兰肯斯坦》初版出版十三年后，雪莱参与新版出版，再次面对已经熟悉的故事。',
        choices:['重读旧作，为新版修订正文。','补写创作缘起，说明自己怎样开始这个故事。'],
        outcome:'1831年修订版出版，不同版本保存了作品持续变化的过程。',
        cost:'修订意味着重新面对旧判断，发表并不让作品自动定型。',
        bridge:'过去的成果不必成为不能修改的身份。可以保留旧版，再试一个新的解释。',
        sourceIds:['shelley-chronology','shelley-variorum']
      }
    ],
    sources:[
      {id:'shelley-chronology',title:'Shelley-Godwin Archive：《Frankenstein》创作与出版年表',url:'https://shelleygodwinarchive.org/contents/frankenstein/frankenstein-chronology/'},
      {id:'shelley-variorum',title:'Frankenstein Digital Variorum：手稿及不同版本对照',url:'https://frankensteinvariorum.org/'}
    ]
  },
  {
    id:'ludwig-van-beethoven', name:'贝多芬', era:'18—19世纪', lifespan:'1770—1827', country:'德意志地区 · 主要活动于维也纳', region:'欧洲',
    role:'作曲家', title:'执着的声音探索者', tagline:'认真对待心里的声音，也承认眼前的限制。',
    tags:['表达强烈','反复推敲','不轻易定型'], color:'#796148', portraitSheet:'world-2', portraitIndex:6,
    vector:[35,69,54,96],
    summary:'这份画像取贝多芬在限制中持续探索音乐形式的一面。他的作品与痛苦同时存在，成就不能被当作伤害的补偿。',
    strengths:['对想表达的内容有强烈要求','能反复推敲复杂作品','愿意在熟悉形式里寻找新路径'],
    tension:'坚持自己的表达，也可能把压力全留给自己。承认困难和接受支持并不削弱认真。',
    difference:'听力受损是具体的健康经历，不是性格标签或应当承受的考验。',
    events:[
      {
        id:'beethoven-heiligenstadt', title:'把难以说出的处境写下来', period:'1802年 · 海利根施塔特', struggleKeys:['setback'],
        situation:'听力恶化影响了贝多芬的社交与工作。他写信给兄弟，解释旁人眼中疏离的行为。',
        choices:['具体写下听力问题带来的限制与痛苦。','在文字里说明自己仍想完成的艺术工作。'],
        outcome:'这封未寄出的信保存了他的困境，不能据此认定写完就已走出痛苦。',
        cost:'书写没有治愈听力，也没有消除沟通上的困难。',
        bridge:'可以先说明真实限制，再决定需要何种支持，而非用表面表现否定自己。',
        sourceIds:['beethoven-testament']
      },
      {
        id:'beethoven-ninth', title:'长久的构想，要经过具体的完成过程', period:'1823—1824年 · 第九交响曲', struggleKeys:['slow-growth','direction'],
        situation:'贝多芬原定1823年交付给伦敦爱乐协会的交响曲迟迟未完成，工作继续延至次年。',
        choices:['继续推进总谱，将构想落实为完整作品。','完成后把作品交付，并安排演出。'],
        outcome:'第九交响曲于1824年完成，同年在维也纳首演，1825年在伦敦演出。',
        cost:'创作有延期与交付压力，作品的后世声名不能抹去过程的困难。',
        bridge:'长项目既需要保留要求，也需要识别剩下的具体步骤与可交付节点。',
        sourceIds:['beethoven-ninth-source']
      }
    ],
    sources:[
      {id:'beethoven-testament',title:'贝多芬《海利根施塔特遗书》原文（维基文库，附手稿来源）',url:'https://de.wikisource.org/wiki/Heiligenst%C3%A4dter_Testament'},
      {id:'beethoven-ninth-source',title:'波恩贝多芬故居：第九交响曲作品说明',url:'https://www.beethoven.de/en/work/view/5556714292117504/'}
    ]
  },
  {
    id:'frida-kahlo', name:'弗里达·卡罗', era:'20世纪', lifespan:'1907—1954', country:'墨西哥', region:'美洲',
    role:'画家', title:'真实的自我描绘者', tagline:'把自己的现实，画成不必借来的颜色。',
    tags:['感受鲜明','自我表达','珍视连结'], color:'#a34a39', portraitSheet:'world-2', portraitIndex:7,
    vector:[65,94,22,79],
    summary:'这份画像聚焦卡罗对自身经验的表达，以及她在支持与限制中继续创作的一面。艺术让现实被看见，却不要求苦难必须有用。',
    strengths:['愿意看见并表达复杂感受','能把自身经验变成独特语言','让重要关系进入自己的创作'],
    tension:'对感受很敏锐时，也要给自己留下不必展示、不必创作的空间。',
    difference:'她的身体经历与时代处境不能直接套用到你的生活。',
    events:[
      {
        id:'kahlo-first-portrait', title:'行动受限时，寻找仍能使用的表达方式', period:'1925—1926年', struggleKeys:['setback','direction'],
        situation:'严重交通事故后，卡罗需要长时间卧床。家人为她安排镜子与可以躺着使用的画架。',
        choices:['接受家人提供的实际支持。','开始画画，并于1926年创作第一幅自画像。'],
        outcome:'绘画成为她持续发展的表达方式，身体的困难仍伴随此后生活。',
        cost:'事故造成的损伤没有因为创作而消失，不能把受伤说成艺术的必要条件。',
        bridge:'先寻找能降低行动门槛的工具或帮助，再决定是否愿意做一点表达。',
        sourceIds:['kahlo-timeline']
      },
      {
        id:'kahlo-mexico-exhibition', title:'重要的相遇，也可以接受他人协助', period:'1953年 · 墨西哥城个展', struggleKeys:['slow-growth','setback'],
        situation:'摄影家洛拉·阿尔瓦雷斯·布拉沃为卡罗组织在墨西哥的个展，当时卡罗的健康状况很差。',
        choices:['让朋友与画廊共同完成展览安排。','在救护车与病床的帮助下到场参加。'],
        outcome:'这成为她生前在墨西哥唯一一次个展，作品与观众有了直接相遇。',
        cost:'活动依赖照护和协助，也没有逆转她的健康状况。',
        bridge:'重要的事不必都亲自独立完成。安排支持，可以成为计划本身的一部分。',
        sourceIds:['kahlo-timeline']
      }
    ],
    sources:[{id:'kahlo-timeline',title:'弗里达·卡罗博物馆：生平与作品年表',url:'https://www.museofridakahlo.org.mx/frida/'}]
  },
  {
    id:'katsushika-hokusai', name:'葛饰北斋', era:'江户时代', lifespan:'1760—1849', country:'日本', region:'东亚',
    role:'画家 · 浮世绘艺术家', title:'不断重看的创造者', tagline:'熟悉的世界，总还有一种没看过的样子。',
    tags:['观察入微','尝试不停','专注技艺'], color:'#4d7183', portraitSheet:'world-3', portraitIndex:0,
    vector:[29,28,18,98],
    summary:'这份画像取北斋持续观察不同事物、转换题材与画面方法的一面。经验可以成为新的起点，而不只是一套熟练动作。',
    strengths:['会从平常事物中发现新角度','愿意通过大量练习丰富技艺','不把年龄当作探索的截止线'],
    tension:'总想再试一种画法，也可能很难为作品收尾。可以把探索分成一系列有限的小题目。',
    difference:'作品里的探索只是一部分材料，不能证明他在所有生活领域都如此。',
    events:[
      {
        id:'hokusai-manga', title:'把零散观察，整理成可分享的练习', period:'1814年起 · 《北斋漫画》', struggleKeys:['slow-growth','direction'],
        situation:'北斋为学习绘画的人积累了人物、动植物、风景等各类图样，内容来自广泛的观察。',
        choices:['把不同题材的画稿整理成册。','让画样通过出版，进入更多学习者的日常。'],
        outcome:'《北斋漫画》首卷于1814年出版，随后系列持续发展。部分卷册在他去世后才出版。',
        cost:'大量素材需要持续描绘与整理，今天看到的系列也包含后续出版工作。',
        bridge:'零碎练习不一定毫无关联。先整理一次，就可能看见已有的积累。',
        sourceIds:['hokusai-manga-source']
      },
      {
        id:'hokusai-fuji', title:'同一座山，试出许多种视角', period:'约1830年代初 · 《富岳三十六景》', struggleKeys:['direction','slow-growth'],
        situation:'七十岁前后，北斋围绕富士山创作系列版画，把山放进不同地点、季节和人们的劳动中。',
        choices:['保留共同主题，变化构图与观察位置。','与出版者及版画工匠合作完成系列。'],
        outcome:'《富岳三十六景》中的《神奈川冲浪里》等作品，使这一系列持续受到关注。',
        cost:'版画来自画师、雕版师、印刷者和出版者的协作，并非一人的全部功劳。',
        bridge:'方向未必需要不停更换。可以保留一个主题，尝试几种不同的做法。',
        sourceIds:['hokusai-met']
      }
    ],
    sources:[
      {id:'hokusai-manga-source',title:'日本政府《Highlighting Japan》：The World of Hokusai Manga',url:'https://www.gov-online.go.jp/eng/publicity/book/hlj/html/201807/201807_03_en.html'},
      {id:'hokusai-met',title:'大都会艺术博物馆：《Hokusai》馆刊',url:'https://resources.metmuseum.org/resources/metpublications/pdf/Hokusai_The_Metropolitan_Museum_of_Art_Bulletin_v_43_no_1_Summer_1985.pdf'}
    ]
  },
  {
    id:'kate-sheppard', name:'凯特·谢泼德', era:'19—20世纪', lifespan:'1847/1848—1934', country:'新西兰 · 出生于英国', region:'大洋洲',
    role:'女性参政权倡导者', title:'耐心的连结者', tagline:'把分散的声音，连成可以被听见的回应。',
    tags:['善于联络','行动有序','持续倡议'], color:'#6b7755', portraitSheet:'world-3', portraitIndex:1,
    vector:[83,70,95,55],
    summary:'这份画像取谢泼德把演讲、通信、请愿与组织工作接起来的一面。改变并非只来自一次发言，也来自许多人的长期协作。',
    strengths:['能把共同目标转成可分工的任务','愿意耐心解释并争取支持','在阶段成果之后继续建设组织'],
    tension:'长期联络会消耗精力。共同目标也需要共同分担，不能永远由一个人维系。',
    difference:'历史上的权利运动有制度背景，不能缩减成个人说服技巧。',
    events:[
      {
        id:'sheppard-petition', title:'让支持变得具体、可见', period:'1887—1893年 · 女性参政权运动', struggleKeys:['setback','slow-growth'],
        situation:'争取女性投票权遭遇持续反对。谢泼德与各地支持者组织通信、宣传与多轮请愿。',
        choices:['通过演讲、传单和书信解释主张。','把各地签名汇集为1893年的大型请愿书。'],
        outcome:'1893年选举法获通过，新西兰女性取得议会选举投票权。这是集体运动的成果。',
        cost:'多年投入没有即时保证，反对意见也没有在法律通过后全部消失。',
        bridge:'抽象的支持可以拆成一个清楚、能被别人参与的步骤。',
        sourceIds:['sheppard-council']
      },
      {
        id:'sheppard-ncw', title:'一项胜利之后，仍保留继续协作的地方', period:'1896年 · 新西兰全国妇女理事会', struggleKeys:['direction','slow-growth'],
        situation:'取得投票权并不等于所有政治与社会障碍已经解除。各妇女团体继续寻找联合发声的方式。',
        choices:['参与联合各地女性组织。','担任全国妇女理事会首任主席，继续推动公共议题。'],
        outcome:'理事会成为持续讨论与倡议的平台，新的目标仍需要继续争取。',
        cost:'组织建设不如单次胜利醒目，却需要长期协调不同意见。',
        bridge:'达到一个目标后，可以先问“什么值得保留”，再决定下一阶段如何一起做。',
        sourceIds:['sheppard-teara']
      }
    ],
    sources:[
      {id:'sheppard-council',title:'基督城市议会：Women’s suffrage and Kate Sheppard',url:'https://www.ccc.govt.nz/culture-and-community/heritage/heritage-in-the-city/womens-suffrage'},
      {id:'sheppard-teara',title:'新西兰国家人物传记：Katherine Wilson Sheppard',url:'https://teara.govt.nz/en/biographies/2s20/sheppard-katherine-wilson'}
    ]
  },
  {
    id:'wangari-maathai', name:'旺加里·马塔伊', era:'20—21世纪', lifespan:'1940—2011', country:'肯尼亚', region:'非洲',
    role:'环保与公共行动倡导者', title:'扎根的行动者', tagline:'先种下一点改变，再让它与别人相连。',
    tags:['关心具体的人','愿意动手','联结社区'], color:'#536d47', portraitSheet:'world-3', portraitIndex:2,
    vector:[91,85,70,73],
    summary:'这份画像取马塔伊从社区日常需要出发，把种树与人的生计、参与连接起来的一面。行动可以很具体，也可以看见背后的结构。',
    strengths:['能把大问题带回具体生活','愿意邀请身边的人一起行动','在阻力中仍追问公共利益'],
    tension:'关心的问题可能越来越多。为一件能持续的小事安排分工，比独自承担所有事情更有用。',
    difference:'公共环境问题需要制度与集体行动，不能都归给个人是否努力。',
    events:[
      {
        id:'maathai-greenbelt', title:'从社区需要开始，而不是先等一个宏大方案', period:'1977年起 · 绿带运动', struggleKeys:['direction','slow-growth'],
        situation:'森林减少影响农村家庭的燃料、用水与生计。马塔伊创办绿带运动，与女性共同参与种树。',
        choices:['以社区种植树苗作为具体行动。','把环境保护与女性参与、社区能力建设联系起来。'],
        outcome:'运动逐步扩大，成为长期的植树与社区行动网络。生长和组织都需要时间。',
        cost:'幼苗培育和社区协调需要持续投入，改变不是一次活动就能完成。',
        bridge:'先找一个与日常有关、能够持续的小入口，再邀请别人共同参与。',
        sourceIds:['maathai-goldman']
      },
      {
        id:'maathai-uhuru', title:'面对阻力，把一个地方的价值说清楚', period:'1989年起 · 内罗毕乌胡鲁公园', struggleKeys:['setback'],
        situation:'乌胡鲁公园面临大型开发计划。马塔伊与绿带运动反对失去这一城市公共绿地。',
        choices:['通过持续倡议争取对公共绿地的关注。','把保护公园与更广泛的公民参与联系起来。'],
        outcome:'相关开发计划最终未能建成，运动也因此承受打压与持续冲突。',
        cost:'公开行动伴随人身与组织风险，不是每个人都能承受相同代价。',
        bridge:'先说明自己想守护的具体价值，再判断有哪些安全、可行的参与方式。',
        sourceIds:['maathai-goldman']
      }
    ],
    sources:[{id:'maathai-goldman',title:'Goldman Environmental Prize：The Green Belt Movement, 40 Years of Impact',url:'https://www.goldmanprize.org/blog/green-belt-movement-wangari-maathai/'}]
  },
  {
    id:'nelson-mandela', name:'纳尔逊·曼德拉', era:'20—21世纪', lifespan:'1918—2013', country:'南非', region:'非洲',
    role:'反种族隔离运动领导者 · 政治家', title:'有原则的对话者', tagline:'知道自己要守住什么，也为改变保留谈判的空间。',
    tags:['目标清楚','重视协商','长期投入'], color:'#897344', portraitSheet:'world-3', portraitIndex:3,
    vector:[88,55,88,47],
    summary:'这份画像取曼德拉长期坚持政治目标、又转向正式协商的一面。原则与调整手段可以并存，历史改变也离不开众多参与者。',
    strengths:['能区分目标与达成目标的方法','愿意在复杂关系中推进协商','能把长期目标接到具体阶段'],
    tension:'坚定可能变成不愿调整，协商也可能让人误以为放弃原则。需要持续说明哪些可变、哪些不可变。',
    difference:'种族隔离与政治监禁的历史，不能直接类比为普通职场或人际分歧。',
    events:[
      {
        id:'mandela-imprisonment', title:'漫长限制中，辨认仍能保留的目标', period:'1962—1990年 · 监禁时期', struggleKeys:['setback','slow-growth'],
        situation:'曼德拉长期被监禁，无法自由参与家庭与公共生活，曾拒绝附带条件的释放提议。',
        choices:['没有接受要求放弃政治条件的释放安排。','继续学习，并于1989年获得法律学位。'],
        outcome:'他于1990年获无条件释放；长期监禁造成的家庭损失无法补回。',
        cost:'失去自由与家人相聚的岁月，是不可轻描淡写的代价。',
        bridge:'可以辨认哪些承诺仍重要，但不应借他的经历要求自己忍受伤害。',
        sourceIds:['mandela-biography']
      },
      {
        id:'mandela-negotiation', title:'目标不变，也可以改变推进的方法', period:'1980年代后期—1994年', struggleKeys:['direction'],
        situation:'结束少数白人统治需要面对政治对立与暴力风险。曼德拉从接触谈话走向正式谈判。',
        choices:['与种族隔离政府代表开启对话。','出狱后领导正式协商，并争取对谈判进程的支持。'],
        outcome:'谈判促成政治转型，1994年举行民主选举；过程并非没有反复与冲突。',
        cost:'对话需要在不信任中推进，不能保证每个参与者都接受妥协。',
        bridge:'先区分共同目标与不同手段，可能有助于看见原先忽略的沟通路径。',
        sourceIds:['mandela-talks']
      }
    ],
    sources:[
      {id:'mandela-biography',title:'纳尔逊·曼德拉基金会：Biography of Nelson Mandela',url:'https://www.nelsonmandela.org/biography'},
      {id:'mandela-talks',title:'纳尔逊·曼德拉基金会：Talking to the Enemy, 1985 to 1994',url:'https://www.nelsonmandela.org/talking-to-the-enemy-1985-to-1994'}
    ]
  },
  {
    id:'frederick-douglass', name:'弗雷德里克·道格拉斯', era:'19世纪', lifespan:'约1818—1895', country:'美国', region:'美洲',
    role:'废奴主义者 · 作家 · 报人', title:'有力的讲述者', tagline:'让真实经历，拥有自己的讲述位置。',
    tags:['表达有力','追问公平','主动发声'], color:'#636d76', portraitSheet:'world-3', portraitIndex:4,
    vector:[96,42,58,86],
    summary:'这份画像取道格拉斯把个人证言、公开演讲与出版结合起来的一面。他不只等待别人替自己解释，也不断改变表达的渠道。',
    strengths:['能把经历整理成清楚的表达','愿意回应质疑而不轻易自我否定','会为重要议题建立持续渠道'],
    tension:'不断回应外界质疑会消耗自己。并非每次质疑都值得用个人经历来证明。',
    difference:'反抗奴隶制的历史不应被缩成普通的个人逆袭故事。',
    events:[
      {
        id:'douglass-narrative', title:'面对质疑，留下可以核对的记录', period:'1845年 · 第一部自传', struggleKeys:['setback'],
        situation:'道格拉斯以演讲揭露奴隶制，但部分听众怀疑他的出身。他把姓名、地点和经历写入自传。',
        choices:['出版《美国奴隶弗雷德里克·道格拉斯生平自述》。','随后赴英国、爱尔兰等地演讲，争取支持。'],
        outcome:'证言被更多人读到，公开身份也使他面临被重新奴役的风险。',
        cost:'公开叙述不只是勇气，还涉及真实的安全与法律风险。',
        bridge:'重要的表达可以回到具体事实，但你有权决定哪些经历不向外界公开。',
        sourceIds:['douglass-nps']
      },
      {
        id:'douglass-northstar', title:'把一次发声，变成持续的平台', period:'1847年起 · 《北极星报》', struggleKeys:['direction','slow-growth'],
        situation:'回到美国后，道格拉斯不只继续演讲，也选择通过报纸推进反奴隶制与平等议题。',
        choices:['在罗切斯特创办《北极星报》。','持续编辑出版，并在后来调整报刊形式。'],
        outcome:'首期于1847年12月发行，他此后长期参与报刊编辑工作。',
        cost:'稳定出版需要资源与协作，持续发声比一次演讲承担更多日常工作。',
        bridge:'若一件事值得反复讨论，可以先建立一个自己能维持的小渠道。',
        sourceIds:['douglass-chronology']
      }
    ],
    sources:[
      {id:'douglass-nps',title:'美国国家公园管理局：Frederick Douglass',url:'https://www.nps.gov/people/frederick-douglass.htm'},
      {id:'douglass-chronology',title:'美国国家公园管理局：Chronology of the Life of Frederick Douglass',url:'https://www.nps.gov/frdo/learn/kidsyouth/chronology.htm'}
    ]
  },
  {
    id:'harriet-tubman', name:'哈丽雅特·塔布曼', era:'19—20世纪', lifespan:'约1822—1913', country:'美国', region:'美洲',
    role:'废奴主义者 · 自由行动者', title:'沉着的护路人', tagline:'看清下一步，也为同行的人留一条路。',
    tags:['行动审慎','珍视连结','承诺坚定'], color:'#70654c', portraitSheet:'world-3', portraitIndex:5,
    vector:[45,74,97,44],
    summary:'这份画像取塔布曼在危险环境里依靠联系、规划与具体行动帮助人的一面。她的经历说明自由需要实际条件，不只是态度。',
    strengths:['会把关心落实为具体安排','在紧张环境里重视准备','愿意维护重要的关系与承诺'],
    tension:'责任感强时，容易把别人的安全全扛在自己身上。支持网络同样重要。',
    difference:'逃离奴隶制的风险不能比作日常挑战，也不能用来要求你冒险。',
    events:[
      {
        id:'tubman-escape', title:'脱离危险，需要一条具体的路线', period:'1849年 · 逃离奴隶制', struggleKeys:['setback','direction'],
        situation:'奴隶主去世后，塔布曼面临被出售、与家人分离的威胁。她于1849年逃到费城。',
        choices:['采取行动离开奴役环境。','到达后与黑人及白人废奴主义者建立联系，获得支持。'],
        outcome:'她取得自由，但仍与家人分离，也没有脱离整个奴隶制带来的威胁。',
        cost:'行程充满危险，自由并不意味着原有关系与生活能立即恢复。',
        bridge:'面对真实危险时，先寻找可信的支持和安全路径，而不是把一切交给勇气。',
        sourceIds:['tubman-nps']
      },
      {
        id:'tubman-return', title:'把个人的路，连接成互助的网络', period:'1850—1860年 · 多次返回马里兰', struggleKeys:['slow-growth','direction'],
        situation:'取得自由之后，塔布曼仍牵挂被奴役的亲友。她多次返回马里兰东岸，协助他们离开。',
        choices:['依托废奴者的联系与支持反复行动。','帮助家人和朋友规划逃离路线。'],
        outcome:'美国国家公园管理局记载，她在这一时期返回13次，帮助70余位亲友取得自由。',
        cost:'每次行动都有被捕风险；这样的结果来自多人协助，也承受巨大代价。',
        bridge:'日常中的互助可以从一个具体请求和可靠分工开始，不需要照搬她所承担的危险。',
        sourceIds:['tubman-nps']
      }
    ],
    sources:[{id:'tubman-nps',title:'美国国家公园管理局：Harriet Tubman 生平与自由行动',url:'https://www.nps.gov/hatu/learn/historyculture/htubman.htm'}]
  },
  {
    id:'florence-nightingale', name:'弗洛伦斯·南丁格尔', era:'19—20世纪', lifespan:'1820—1910', country:'英国', region:'欧洲',
    role:'护理改革者 · 统计工作者', title:'有章法的照护者', tagline:'让关心有依据，也让改变有办法。',
    tags:['重视证据','行动有序','关心实际需要'], color:'#4f7780', portraitSheet:'world-3', portraitIndex:6,
    vector:[42,15,98,36],
    summary:'这份画像取南丁格尔把照护、记录、设施与训练联系起来的一面。关心一个人，也可以表现为让环境和流程更可靠。',
    strengths:['愿意先把情况记录清楚','会把关切拆成可执行的改进','重视让经验能被别人学会'],
    tension:'追求完善流程时，也需要听见具体的人。记录与关怀应该互相校正。',
    difference:'历史上的护理改革不等于今天的个人健康建议。',
    events:[
      {
        id:'nightingale-records', title:'把想改变的事，先记录清楚', period:'1850年代 · 克里米亚战争及其后', struggleKeys:['direction','setback'],
        situation:'战地医院的卫生与设施需要改善。南丁格尔组织护理工作，也推动准确记录与统计表达。',
        choices:['争取更好的设施、设备和卫生条件。','以数据和图表说明问题，向公众及决策者提出改革主张。'],
        outcome:'记录和统计成为她持续推动医疗改革的工具，而不只是对个人功绩的描述。',
        cost:'改善医院涉及复杂条件与多人协作，不能全归功于一项措施或一个人。',
        bridge:'遇到反复发生的问题，可以先收集几条具体记录，再讨论怎样改变流程。',
        sourceIds:['nightingale-kcl']
      },
      {
        id:'nightingale-school', title:'让一次经验，成为别人能接着做的事', period:'1860年起 · 护士训练学校', struggleKeys:['slow-growth','direction'],
        situation:'返回英国后，南丁格尔希望战时经验能持续改善护理，而不只停留在一次救助行动中。',
        choices:['用公众捐款在圣托马斯医院建立护士训练学校。','通过著作与训练，把护理经验传递给更多人。'],
        outcome:'学校于1860年成立，护理训练与此后的改革持续发展。',
        cost:'培训和制度建设需要长期维护，知名度不会自动变成稳定的教学。',
        bridge:'若一种做法反复有效，可以写成简单步骤，让别人也能独立使用。',
        sourceIds:['nightingale-museum']
      }
    ],
    sources:[
      {id:'nightingale-kcl',title:'伦敦国王学院：Florence Nightingale 生平与统计工作',url:'https://www.kcl.ac.uk/people/florence-nightingale'},
      {id:'nightingale-museum',title:'伦敦南丁格尔博物馆：Florence Nightingale',url:'https://www.florence-nightingale.co.uk/about-florence-nightingale/'}
    ]
  },
  {
    id:'rumi', name:'鲁米', era:'13世纪', lifespan:'1207—1273', country:'波斯语文化圈 · 主要活动于安纳托利亚', region:'西亚与中亚',
    role:'诗人 · 苏菲思想家', title:'开放的意义寻找者', tagline:'让相遇改变问题，也让失去留下表达。',
    tags:['重视相遇','表达丰沛','持续追问'], color:'#9d7150', portraitSheet:'world-3', portraitIndex:7,
    vector:[75,99,12,69],
    summary:'这份画像取鲁米通过相遇、诗歌与教学不断追问意义的一面。他的创作有明确的苏菲宗教语境，不能只截成现代励志短句。',
    strengths:['愿意让重要关系带来新问题','能以多种形式表达复杂感受','把个人体验放进更大的意义中理解'],
    tension:'不断寻找意义，也可能让具体问题被搁置。可以把抽象追问重新接回今天的一件事。',
    difference:'人格上的类比不表示你认同其宗教思想，也不替代对作品语境的理解。',
    events:[
      {
        id:'rumi-shams', title:'重要的相遇，可以打开原先的问题', period:'约1244年 · 科尼亚', struggleKeys:['direction'],
        situation:'已从事教学的鲁米在科尼亚结识沙姆斯。两人的密切交往成为他诗歌与思想发展的重要转折。',
        choices:['与沙姆斯展开长期交流。','在既有学者与教师生活之外，发展诗歌表达。'],
        outcome:'这段相遇深刻影响其后创作；具体关系也受到周围人的反应影响。',
        cost:'重要关系的变化未必容易被身边人理解，不能把转折简化为一次顿悟。',
        bridge:'一个可信的新视角可能改变提问方式，但你仍可以保留自己的判断。',
        sourceIds:['rumi-poets']
      },
      {
        id:'rumi-poetry', title:'失去之后，把未能说完的话继续写下去', period:'沙姆斯离开后 · 13世纪中后期', struggleKeys:['setback','slow-growth'],
        situation:'沙姆斯消失之后，鲁米持续写诗与教学。关于沙姆斯离开的具体原因，资料存在不同说法。',
        choices:['以诗歌、吟诵等形式继续表达。','留下《沙姆斯诗集》《玛斯纳维》等重要作品。'],
        outcome:'这些创作构成其主要作品的一部分，文学记录并没有给关系的谜团提供唯一答案。',
        cost:'表达能保存经验，却不能保证失去的人或原有生活重新回来。',
        bridge:'可以给仍未结束的感受一个表达位置，不必先找到完整解释才允许自己继续。',
        sourceIds:['rumi-foundation']
      }
    ],
    sources:[
      {id:'rumi-poets',title:'美国诗人学会：Jalal al-Din Rumi',url:'https://poets.org/poet/jalal-al-din-rumi'},
      {id:'rumi-foundation',title:'Poetry Foundation：Jalal al-Din Rumi 生平与作品',url:'https://www.poetryfoundation.org/poets/jalal-al-din-rumi'}
    ]
  }
];
