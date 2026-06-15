const trafficScenario = {
  id: 'traffic',
  name: '交通事故',

  questions: [
    {
      id: 'traffic_q1',
      type: 'single_choice',
      question: '发生交通事故后，应该首先做什么？',
      options: ['立即移动车辆', '保护现场并设置警示标志', '与对方争吵', '私了解决'],
      correctAnswer: 1,
      explanation: '发生事故后应保护现场、设置警示标志，防止二次事故。',
      knowledgePoint: '事故现场处理'
    },
    {
      id: 'traffic_q2',
      type: 'true_false',
      question: '在高速公路上发生故障时，可以在车内等待救援。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '高速公路上发生故障应迅速转移至安全地带，切勿留在车内。',
      knowledgePoint: '高速故障处理'
    },
    {
      id: 'traffic_q3',
      type: 'single_choice',
      question: '三角警示牌应放置在故障车辆后方多少米处？',
      options: ['50米以内', '50-100米', '100-150米', '越远越好'],
      correctAnswer: 2,
      explanation: '高速公路上应将三角警示牌放置在故障车辆后方100-150米处。',
      knowledgePoint: '三角警示牌使用'
    },
    {
      id: 'traffic_q4',
      type: 'single_choice',
      question: '如果乘车时系了安全带，发生正面碰撞时应该怎么做？',
      options: ['立即解开安全带下车', '抓紧前方固定物，身体向后倾斜', '跳车逃生', '向前扑倒'],
      correctAnswer: 1,
      explanation: '系安全带时遇到碰撞应抓紧固定物，身体后倾，紧贴座椅靠背。',
      knowledgePoint: '安全带碰撞防护'
    },
    {
      id: 'traffic_q5',
      type: 'judgment',
      question: '判断：交通事故中，如果有人员受伤，应立即将伤者抱起移动到安全地带。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '对于骨折或脊柱受伤的伤者，不当移动可能造成二次伤害。应等待专业救援。',
      knowledgePoint: '伤员搬运原则'
    },
    {
      id: 'traffic_q6',
      type: 'multiple_choice',
      question: '飞机迫降时，正确的应急姿势包括？（多选）',
      options: ['收紧下巴', '双手抓住脚踝', '头部紧靠膝盖', '全程站立'],
      correctAnswer: [0, 1, 2],
      explanation: '飞机迫降时的防冲击姿势：收紧下巴，双手抓住脚踝，身体前倾头部紧靠膝盖。',
      knowledgePoint: '飞机迫降防护'
    },
    {
      id: 'traffic_q7',
      type: 'single_choice',
      question: '如果车辆落水，应该如何逃生？',
      options: ['立即打开车门游出', '等水浸满车厢后开门', '打碎前挡风玻璃逃生', '后备箱逃生'],
      correctAnswer: 2,
      explanation: '车辆落水时，应打碎侧窗或前挡风玻璃逃生。水浸满车厢后内外压力平衡才能开门。',
      knowledgePoint: '车辆落水逃生'
    },
    {
      id: 'traffic_q8',
      type: 'single_choice',
      question: '遇到校车停车让儿童上下车时，后方车辆应该？',
      options: ['鸣笛催促', '依次停车等待', '从左侧车道绕行', '加速通过'],
      correctAnswer: 1,
      explanation: '遇到校车停车时，后方车辆必须停车等待，等学生完全上下车后才能继续行驶。',
      knowledgePoint: '校车让行规则'
    },
    {
      id: 'traffic_q9',
      type: 'single_choice',
      question: '车辆在高速公路上突然爆胎，正确的应急处理是？',
      options: ['急踩刹车', '紧握方向盘逐渐减速', '立即变道', '原地停车'],
      correctAnswer: 1,
      explanation: '爆胎时应紧握方向盘，保持直线行驶，逐渐减速后靠到应急车道。急踩刹车会导致车辆失控。',
      knowledgePoint: '爆胎应急处理'
    },
    {
      id: 'traffic_q10',
      type: 'true_false',
      question: '发生交通事故后，可以不用报警直接私了。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '如有人员伤亡或财产损失较大，应报警处理。私了可能造成后续纠纷。',
      knowledgePoint: '事故处理原则'
    },
    {
      id: 'traffic_q11',
      type: 'single_choice',
      question: '乘坐飞机时，使用电子设备的规定是？',
      options: ['全程可以使用', '起飞和降落时必须关闭', '只有飞行模式可以使用', '没有任何限制'],
      correctAnswer: 1,
      explanation: '起飞和降落时必须关闭电子设备，电子信号可能干扰飞机导航系统。',
      knowledgePoint: '航空安全规定'
    },
    {
      id: 'traffic_q12',
      type: 'multiple_choice',
      question: '安全带的正确使用方法包括？（多选）',
      options: ['肩带横跨胸腔', '腰带系在腹部', '应该紧贴身体', '孕妇应调整系法'],
      correctAnswer: [0, 2, 3],
      explanation: '安全带肩带应跨过胸腔，腰带应系在髋部而非腹部，孕妇应调整腰带位置避免压迫胎儿。',
      knowledgePoint: '安全带使用'
    },
    {
      id: 'traffic_q13',
      type: 'single_choice',
      question: '车辆起火时，错误的灭火方法是？',
      options: ['用灭火器对准火焰根部喷射', '用水直接浇灭发动机', '拨打119报警', '尽快撤离到安全距离'],
      correctAnswer: 1,
      explanation: '发动机着火不能用水，会造成电路短路和火势蔓延。应使用灭火器或覆盖灭火。',
      knowledgePoint: '车辆起火处理'
    },
    {
      id: 'traffic_q14',
      type: 'judgment',
      question: '判断：酒后驾驶只要没被查到就没问题。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '酒后驾驶严重危害安全，血液酒精含量达标即构成违法。事故往往发生在侥幸心理下。',
      knowledgePoint: '酒驾危害'
    },
    {
      id: 'traffic_q15',
      type: 'single_choice',
      question: '在隧道内遇到火灾，应该如何逃生？',
      options: ['留在车内等待救援', '掉头逆行逃出', '沿着隧道壁快速跑出', '进入隧道内的紧急避难所'],
      correctAnswer: 3,
      explanation: '隧道内有紧急避难所，应进入避难所等待救援。切勿在隧道内乱跑或掉头。',
      knowledgePoint: '隧道逃生'
    },
    {
      id: 'traffic_q16',
      type: 'multiple_choice',
      question: '雨天驾车应该注意什么？（多选）',
      options: ['减速慢行', '保持安全车距', '频繁急刹车', '正确使用灯光'],
      correctAnswer: [0, 1, 3],
      explanation: '雨天应减速、保持车距、使用灯光。不要频繁急刹车，防止车辆打滑。',
      knowledgePoint: '雨天行车安全'
    },
    {
      id: 'traffic_q17',
      type: 'single_choice',
      question: '雪天路滑，正确的驾驶方式是？',
      options: ['加速行驶尽快通过', '减速慢行，避免急加速急刹车', '空挡滑行', '频繁变道'],
      correctAnswer: 1,
      explanation: '雪天应减速慢行，使用低挡位，避免急加速急刹车和频繁变道。',
      knowledgePoint: '雪天行车'
    },
    {
      id: 'traffic_q18',
      type: 'true_false',
      question: '开车时可以使用蓝牙耳机接打电话。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '即使是蓝牙耳机，长时间通话仍会分散注意力，增加事故风险。应使用免提或停车接听。',
      knowledgePoint: '驾驶分心'
    },
    {
      id: 'traffic_q19',
      type: 'sequence',
      question: '将交通事故处理步骤按正确顺序排列：',
      options: ['设置警示标志', '拨打报警电话', '保护事故现场', '检查人员伤亡'],
      correctAnswer: [3, 2, 0, 1],
      explanation: '正确顺序：检查伤亡→保护现场→设置警示标志→报警。',
      knowledgePoint: '事故处理流程'
    },
    {
      id: 'traffic_q20',
      type: 'single_choice',
      question: '行车中遇到大型车辆（货车、客车）时，错误的做法是？',
      options: ['保持安全距离', '不要长时间跟随其后', '从右侧超车', '注意其视野盲区'],
      correctAnswer: 2,
      explanation: '大型车辆视野盲区大，不应从右侧超车。应从左侧超车，保持安全距离。',
      knowledgePoint: '大型车辆安全'
    },
    {
      id: 'traffic_q21',
      type: 'judgment',
      question: '判断：儿童乘车时应该由家长抱着坐在副驾驶。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '儿童应使用安全座椅，坐在后排。怀抱儿童在事故中无法保护孩子，反而可能压伤孩子。',
      knowledgePoint: '儿童乘车安全'
    },
    {
      id: 'traffic_q22',
      type: 'single_choice',
      question: '遇到校车上下学生时，以下哪个行为是错误的？',
      options: ['在校车后方停车等待', '超越校车时减速', '鸣笛催促学生', '给停车让行的校车司机点赞'],
      correctAnswer: 2,
      explanation: '超越正在上下学生的校车时必须减速，且不能鸣笛催促，这会惊吓学生造成危险。',
      knowledgePoint: '校车安全'
    },
    {
      id: 'traffic_q23',
      type: 'multiple_choice',
      question: '高速公路上遇到交通拥堵，正确的做法是？（多选）',
      options: ['保持车道行驶', '占用应急车道', '与前车保持安全距离', '随意穿插变道'],
      correctAnswer: [0, 2],
      explanation: '拥堵时应保持车道行驶，与前车保持距离。占用应急车道和随意变道会加重拥堵。',
      knowledgePoint: '高速拥堵应对'
    },
    {
      id: 'traffic_q24',
      type: 'single_choice',
      question: '夜间会车时，正确的灯光使用是？',
      options: ['始终使用远光灯', '提前切换为近光灯', '不使用灯光', '一直闪烁远光'],
      correctAnswer: 1,
      explanation: '夜间会车应在距离对向来车150米外切换为近光灯，避免造成对方驾驶员眩目。',
      knowledgePoint: '灯光使用'
    },
    {
      id: 'traffic_q25',
      type: 'judgment',
      question: '判断：开车时遇到动物横穿马路，可以急打方向盘躲避。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '急打方向盘可能导致车辆失控翻车。应减速握稳方向盘，碰撞无法避免时握紧方向盘刹车。',
      knowledgePoint: '紧急避险'
    },
    {
      id: 'traffic_q26',
      type: 'single_choice',
      question: '乘客在船上应该注意什么安全事项？',
      options: ['随意走动', '穿好救生衣', '在船舷边站立看风景', '靠近船舶机器处'],
      correctAnswer: 1,
      explanation: '乘船时应穿好救生衣，不要在船舷边站立或靠近机器设备，避免发生意外。',
      knowledgePoint: '乘船安全'
    },
    {
      id: 'traffic_q27',
      type: 'multiple_choice',
      question: '车辆落水后，正确的逃生步骤包括？（多选）',
      options: ['解开安全带', '尝试打开车门', '打碎车窗玻璃', '立即跳车'],
      correctAnswer: [0, 1, 2],
      explanation: '车辆落水应先解开安全带，尝试开门逃生，如无法开门则打碎车窗逃生。不要直接跳车。',
      knowledgePoint: '车辆落水逃生'
    },
    {
      id: 'traffic_q28',
      type: 'single_choice',
      question: '刹车失灵时，正确的应急措施是？',
      options: ['拉起手刹配合降挡', '一直踩刹车', '熄火滑行', '跳车'],
      correctAnswer: 0,
      explanation: '刹车失灵时应拉起手刹、逐步降挡减速，利用发动机制动。不要熄火，会失去方向助力。',
      knowledgePoint: '刹车失灵应对'
    },
    {
      id: 'traffic_q29',
      type: 'true_false',
      question: '疲劳驾驶只要没出事就没关系。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '疲劳驾驶会显著降低反应能力，是导致交通事故的主要原因之一。应及时休息或换人驾驶。',
      knowledgePoint: '疲劳驾驶危害'
    },
    {
      id: 'traffic_q30',
      type: 'sequence',
      question: '将车辆自驾游出行前的安全检查步骤按顺序排列：',
      options: ['检查轮胎气压', '检查刹车系统', '规划路线', '检查油量'],
      correctAnswer: [2, 0, 1, 3],
      explanation: '正确顺序：规划路线→检查轮胎→检查刹车→检查油量。',
      knowledgePoint: '自驾出行检查'
    },
    {
      id: 'traffic_q31',
      type: 'single_choice',
      question: '遇到前方有事故时，错误的做法是？',
      options: ['减速避让', '不要围观事故现场', '帮忙指挥交通', '在应急车道行驶绕过'],
      correctAnswer: 3,
      explanation: '不要占用应急车道行驶，应急车道是救援通道。遇到事故应减速避让，不要围观。',
      knowledgePoint: '事故现场安全'
    },
    {
      id: 'traffic_q32',
      type: 'multiple_choice',
      question: '乘坐地铁时的安全注意事项包括？（多选）',
      options: ['站在安全线内候车', '关门警报响时不强行上车', '先下后上', '可以在车厢内奔跑'],
      correctAnswer: [0, 1, 2],
      explanation: '地铁候车应站在安全线内，关门时不抢上，先下后上。车厢内禁止奔跑。',
      knowledgePoint: '地铁安全'
    },
    {
      id: 'traffic_q33',
      type: 'single_choice',
      question: '为什么不能在下暴雨时通过积水涵洞？',
      options: ['会弄湿车辆', '积水深度不明，可能导致车辆熄火被困', '没有原因', '浪费时间'],
      correctAnswer: 1,
      explanation: '涵洞地势低洼，积水深度不明，可能导致车辆熄火被困，甚至被洪水冲走。',
      knowledgePoint: '涵洞积水危险'
    },
    {
      id: 'traffic_q34',
      type: 'judgment',
      question: '判断：开车时可以通过手机导航一边看一边开车。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '开车时看手机导航会分散注意力，应使用语音导航或将手机固定在支架上。',
      knowledgePoint: '驾驶注意力'
    },
    {
      id: 'traffic_q35',
      type: 'single_choice',
      question: '电动汽车起火时，不能用什么灭火？',
      options: ['干粉灭火器', '水基灭火器', '二氧化碳灭火器', '沙子'],
      correctAnswer: 1,
      explanation: '电动汽车电池起火不能用水基灭火器，可能导致电路短路。应使用干粉或二氧化碳灭火器。',
      knowledgePoint: '电车起火处理'
    },
    {
      id: 'traffic_q36',
      type: 'multiple_choice',
      question: '车辆发生碰撞后，应该检查车辆的哪些安全部件？（多选）',
      options: ['安全带是否完好', '气囊是否正常', '刹车是否正常', '音响系统'],
      correctAnswer: [0, 1, 2],
      explanation: '碰撞后应检查安全带、气囊、刹车等安全部件。音响系统与安全无关。',
      knowledgePoint: '碰撞后检查'
    },
    {
      id: 'traffic_q37',
      type: 'true_false',
      question: '乘坐电动扶梯时，可以推着婴儿车上去。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '婴儿车应在升降电梯内乘坐，电动扶梯空间狭窄且有夹缝，非常危险。',
      knowledgePoint: '扶梯安全'
    },
    {
      id: 'traffic_q38',
      type: 'single_choice',
      question: '遇到浓雾天气，错误的做法是？',
      options: ['打开雾灯和近光灯', '保持低速行驶', '尽快驶离高速', '使用远光灯增强视野'],
      correctAnswer: 3,
      explanation: '雾天应使用近光灯和雾灯，远光灯会在雾中形成反光，反而降低视野。',
      knowledgePoint: '雾天行车'
    }
  ],

  nodes: {
    start: {
      id: 'start',
      text: '下班高峰期，你正在城市道路上开车。突然，前方一辆车急刹车，你尽力躲避但还是追尾了前方的车。撞击不是很严重，但你的车头已经变形，前方车辆的司机下车走了过来...',
      scene: 'car_accident_start',
      choices: [
        {
          text: '下车查看情况',
          nextNode: 'check_accident',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '留在车内报警',
          nextNode: 'stay_and_call',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '试图和对方私了',
          nextNode: 'private_settlement',
          healthChange: 0,
          knowledgeChange: 0
        }
      ]
    },

    check_accident: {
      id: 'check_accident',
      text: '你下车检查，发现只是轻微的追尾事故，双方车辆都有轻微损坏。对方司机有些生气地问你有没有受伤...',
      scene: 'checking_accident',
      showQuestion: true,
      questionId: 'traffic_q1',
      choices: [
        {
          text: '在车后放置三角警示牌',
          nextNode: 'place_warning',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '和对方争论责任归属',
          nextNode: 'argue_responsibility',
          healthChange: -5,
          knowledgeChange: 0
        },
        {
          text: '拍照留证据后立即移车',
          nextNode: 'move_car_quick',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    stay_and_call: {
      id: 'stay_and_call',
      text: '你留在车内打电话报警，同时打开双闪灯。后方车辆纷纷变道避让，情况有些危险...',
      scene: 'calling_police',
      showQuestion: true,
      questionId: 'traffic_q3',
      choices: [
        {
          text: '下车放置三角警示牌',
          nextNode: 'place_warning',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '继续在车内等待交警',
          nextNode: 'wait_police_car',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    private_settlement: {
      id: 'private_settlement',
      text: '你和对方同意私了，互不追究。但对方后来反悔报警，你因为没有证据而陷入被动...',
      scene: 'private_settlement_problem',
      choices: [
        {
          text: '等待交警处理',
          nextNode: 'wait_police_car',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    place_warning: {
      id: 'place_warning',
      text: '你从后备箱取出三角警示牌，走到车后放置。但放置的距离似乎不太够...',
      scene: 'warning_placed',
      showQuestion: true,
      questionId: 'traffic_q3',
      choices: [
        {
          text: '将警示牌放到正确的距离',
          nextNode: 'correct_distance',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '算了，应该够用了',
          nextNode: 'insufficient_warning',
          healthChange: 0,
          knowledgeChange: 0
        }
      ]
    },

    correct_distance: {
      id: 'correct_distance',
      text: '你将三角警示牌移到了正确的距离（100米外）。后方来车提前减速避让，道路交通秩序得到保障。',
      scene: 'proper_warning',
      choices: [
        {
          text: '拍照留证据并交换信息',
          nextNode: 'exchange_info',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    insufficient_warning: {
      id: 'insufficient_warning',
      text: '由于警示牌距离不够，一辆快速驶来的车差点追尾你的车！',
      scene: 'near_miss',
      choices: [
        {
          text: '赶紧调整警示牌位置',
          nextNode: 'correct_distance',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    argue_responsibility: {
      id: 'argue_responsibility',
      text: '你和对方司机激烈争吵起来。周围车辆被迫绕行，交通越来越堵。争吵中你推搡了对方一下，对方报警说你打人...',
      scene: 'escalating_argument',
      choices: [
        {
          text: '冷静下来，协商解决',
          nextNode: 'calm_down',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '继续争吵',
          nextNode: 'police_arrival',
          healthChange: -10,
          knowledgeChange: 0
        }
      ]
    },

    calm_down: {
      id: 'calm_down',
      text: '你深吸一口气，冷静下来与对方协商。双方同意交换信息，拍照留证，然后移车让道。',
      scene: 'resolved_dispute',
      isEnding: true,
      endingType: 'win'
    },

    police_arrival: {
      id: 'police_arrival',
      text: '警察到达现场后，看到你们争吵的场面，对双方都进行了处罚。你不仅要承担事故责任，还因为打架被罚款。',
      scene: 'police_punishment',
      isEnding: true,
      endingType: 'lose'
    },

    move_car_quick: {
      id: 'move_car_quick',
      text: '你拍照后立即移车。但移车过程中与对方发生争执，对方说你逃逸！',
      scene: 'misunderstanding',
      choices: [
        {
          text: '解释清楚并出示照片证据',
          nextNode: 'provide_evidence',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    provide_evidence: {
      id: 'provide_evidence',
      text: '你出示了手机照片，证明你是为了疏导交通才移车。误会解除，但浪费了很多时间。',
      scene: 'evidence_cleared',
      isEnding: true,
      endingType: 'win'
    },

    exchange_info: {
      id: 'exchange_info',
      text: '你和对方交换了驾驶证、行驶证照片，并拍摄了车辆损伤情况、现场照片等证据。保险理赔有了依据。',
      scene: 'info_exchanged',
      isEnding: true,
      endingType: 'win'
    },

    wait_police_car: {
      id: 'wait_police_car',
      text: '你等待交警到来。但这期间交通越来越拥堵，其他司机怨声载道。',
      scene: 'traffic_jam',
      isEnding: true,
      endingType: 'win'
    },

    // 车祸人员受伤场景
    serious_accident: {
      id: 'serious_accident',
      text: '你赶到事故现场，看到一辆面包车和一辆轿车相撞。面包车侧翻，地上有血迹，轿车司机被困在车内，看起来伤势严重...',
      scene: 'serious_crash',
      choices: [
        {
          text: '立即拨打120和110',
          nextNode: 'call_emergency',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '上前试图拉出伤者',
          nextNode: 'pull_out_victim',
          healthChange: -10,
          knowledgeChange: 0
        },
        {
          text: '先查看周围是否还有危险',
          nextNode: 'check_danger',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    call_emergency: {
      id: 'call_emergency',
      text: '你拨打了急救电话，报告了事故地点和伤亡情况。同时你开始在事故车辆后方放置警示标志...',
      scene: 'emergency_called',
      choices: [
        {
          text: '引导交通，防止二次事故',
          nextNode: 'direct_traffic',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '尝试与被困司机说话保持意识',
          nextNode: 'keep_conscious',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    check_danger: {
      id: 'check_danger',
      text: '你检查发现事故车辆有漏油，现场随时可能起火爆炸！需要立即行动...',
      scene: 'fire_danger',
      showQuestion: true,
      questionId: 'traffic_q5',
      timerConfig: {
        enabled: true,
        duration: 20,
        urgencyLevel: 'critical',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 1,
          healthChange: -15,
          knowledgeChange: 0,
          message: '危险！'
        }
      },
      choices: [
        {
          text: '立即将伤者拉出车外',
          nextNode: 'pull_out_dangerous',
          healthChange: -15,
          knowledgeChange: 0
        },
        {
          text: '远离车辆，等待专业救援',
          nextNode: 'stay_away',
          healthChange: -5,
          knowledgeChange: 10
        }
      ]
    },

    pull_out_victim: {
      id: 'pull_out_victim',
      text: '你试图将伤者从车内拉出，但造成了伤者颈部受伤加重！医生说可能会造成永久性瘫痪...',
      scene: 'victim_injured',
      isEnding: true,
      endingType: 'lose'
    },

    pull_out_dangerous: {
      id: 'pull_out_dangerous',
      text: '你将伤者拉出的瞬间，车辆起火爆炸！你虽然逃离及时，但面部被轻度烧伤...',
      scene: 'explosion_injury',
      isEnding: true,
      endingType: 'lose'
    },

    stay_away: {
      id: 'stay_away',
      text: '你和周围人一起远离事故车辆。几分钟后车辆果然起火爆炸，但因为撤离及时，没有人受伤。',
      scene: 'safe_evacuation_accident',
      isEnding: true,
      endingType: 'win'
    },

    direct_traffic: {
      id: 'direct_traffic',
      text: '你站在路边引导车辆有序通行，避免了交通堵塞和二次事故。救援人员到达后对你赞不绝口。',
      scene: 'traffic_directed',
      isEnding: true,
      endingType: 'win'
    },

    keep_conscious: {
      id: 'keep_conscious',
      text: '你与被困司机保持对话，让他保持清醒。救援人员到达后，成功将司机救出。你的一句话可能救了他的命。',
      scene: 'consciousness_kept',
      isEnding: true,
      endingType: 'win'
    },

    // 高速公路场景
    highway_breakdown: {
      id: 'highway_breakdown',
      text: '你正在高速公路上行驶，突然发动机故障灯亮起，车辆开始抖动并在慢车道上停了下来。后方车辆纷纷紧急避让...',
      scene: 'highway_breakdown',
      timerConfig: {
        enabled: true,
        duration: 30,
        urgencyLevel: 'high',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 1,
          healthChange: -10,
          knowledgeChange: 0,
          message: '危险！'
        }
      },
      choices: [
        {
          text: '留在车内等待救援',
          nextNode: 'wait_in_car',
          healthChange: -15,
          knowledgeChange: 0
        },
        {
          text: '迅速转移至应急车道并报警',
          nextNode: 'move_to_emergency',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '打开双闪慢慢向前开到服务区',
          nextNode: 'drive_to_service',
          healthChange: -10,
          knowledgeChange: 0
        }
      ]
    },

    wait_in_car: {
      id: 'wait_in_car',
      text: '你留在车内等待，但一辆大货车因避让不及追尾了你的车！你身受重伤...',
      scene: 'highway_rear_end',
      isEnding: true,
      endingType: 'lose'
    },

    move_to_emergency: {
      id: 'move_to_emergency',
      text: '你快速转移到应急车道，并拨打了高速公路救援电话12122。救援拖车很快到达，将你安全带离。',
      scene: 'highway_rescued',
      isEnding: true,
      endingType: 'win'
    },

    drive_to_service: {
      id: 'drive_to_service',
      text: '你缓慢向前开，但车辆在途中完全熄火，被迫停在行车道上。后方一辆车差点追尾！',
      scene: 'highway_stranded',
      choices: [
        {
          text: '弃车转移到安全地带',
          nextNode: 'abandon_car_highway',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    abandon_car_highway: {
      id: 'abandon_car_highway',
      text: '你翻过护栏到安全地带等待救援。虽然车子被拖走了，但人安全了。',
      scene: 'car_abandoned_safe',
      isEnding: true,
      endingType: 'win'
    }
  },

  metadata: {
    title: '交通事故篇',
    endingTitle: '避险',
    intro: '掌握车祸和航空紧急情况的应对方法',

    achievements: [
      {
        id: 'traffic_master',
        name: '交规达人',
        icon: '🚦',
        type: 'gold',
        condition: (state) => state.endingRating === '完美通关'
      },
      {
        id: 'first_responder',
        name: '第一响应人',
        icon: '🚑',
        type: 'blue',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'call_emergency')
      },
      {
        id: 'calm_driver',
        name: '冷静驾驶',
        icon: '🧊',
        type: 'green',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'calm_down')
      },
      {
        id: 'life_saver',
        name: '生命守护',
        icon: '🛡️',
        type: 'red',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'keep_conscious' || c.nodeId === 'direct_traffic')
      }
    ],

    tips: [
      {
        id: 'tip1',
        icon: '🚨',
        title: '事故现场',
        description: '发生事故后应保护现场、设置警示标志，防止二次事故。',
        relevantWhen: ['check_accident', 'place_warning']
      },
      {
        id: 'tip2',
        icon: '🛑',
        title: '三角警示牌',
        description: '高速公路上应将三角警示牌放置在故障车辆后方100-150米处。',
        relevantWhen: ['place_warning', 'correct_distance']
      },
      {
        id: 'tip3',
        icon: '🚫',
        title: '禁止行为',
        description: '高速公路故障后禁止留在车内，应迅速转移到应急车道或护栏外。',
        relevantWhen: ['wait_in_car', 'highway_breakdown']
      },
      {
        id: 'tip4',
        icon: '🏥',
        title: '伤员处理',
        description: '对于受伤人员，除非有立即危险，否则不要轻易移动，等待专业救援。',
        relevantWhen: ['serious_accident', 'pull_out_victim']
      },
      {
        id: 'tip5',
        icon: '📞',
        title: '紧急电话',
        description: '遇到事故拨打110、伤员拨打120、高速故障拨打12122。',
        relevantWhen: ['call_emergency', 'move_to_emergency']
      },
      {
        id: 'tip6',
        icon: '⛽',
        title: '漏油处理',
        description: '车辆漏油时严禁明火，第一时间远离车辆，防止起火爆炸。',
        relevantWhen: ['check_danger', 'stay_away']
      }
    ]
  }
}

export default trafficScenario
