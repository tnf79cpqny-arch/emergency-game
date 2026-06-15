const publicHealthScenario = {
  id: 'publicHealth',
  name: '公共卫生',

  questions: [
    {
      id: 'ph_q1',
      type: 'single_choice',
      question: '预防传染病最有效的方法是？',
      options: ['戴口罩', '勤洗手', '吃维生素C', '多喝水'],
      correctAnswer: 1,
      explanation: '勤洗手是预防传染病最简单有效的措施，可以去除手上的病原体。',
      knowledgePoint: '传染病预防'
    },
    {
      id: 'ph_q2',
      type: 'single_choice',
      question: '七步洗手法的标准时间是多少秒？',
      options: ['10秒', '20秒', '40秒', '60秒'],
      correctAnswer: 2,
      explanation: '七步洗手法全程应不少于40秒，才能有效清洁双手。',
      knowledgePoint: '正确洗手方法'
    },
    {
      id: 'ph_q3',
      type: 'true_false',
      question: '咳嗽或打喷嚏时，应该用双手捂住口鼻。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '应用纸巾或手肘内侧遮挡，避免用双手捂住口鼻，因为双手会沾染病毒传播病原体。',
      knowledgePoint: '咳嗽礼仪'
    },
    {
      id: 'ph_q4',
      type: 'single_choice',
      question: '口罩的正确佩戴方式是？',
      options: ['有颜色的一面朝外', '有颜色的一面朝内', '正反面都可以', '无所谓'],
      correctAnswer: 0,
      explanation: '口罩有颜色的一面朝外，浅色或白色一面朝内。',
      knowledgePoint: '口罩佩戴'
    },
    {
      id: 'ph_q5',
      type: 'multiple_choice',
      question: '以下哪些是预防食物中毒的措施？（多选）',
      options: ['生熟分开', '彻底加热食物', '吃过期食品', '保持清洁'],
      correctAnswer: [0, 1, 3],
      explanation: '预防食物中毒需要：保持清洁、生熟分开、彻底加热、妥善保存食物。',
      knowledgePoint: '食物中毒预防'
    },
    {
      id: 'ph_q6',
      type: 'single_choice',
      question: '发现集体食物中毒事件，应该首先做什么？',
      options: ['隐瞒不报', '自行处理', '立即向相关部门报告', '继续正常上课'],
      correctAnswer: 2,
      explanation: '发现食物中毒应立即向学校、疾控部门或市场监管部门报告。',
      knowledgePoint: '食物中毒处理'
    },
    {
      id: 'ph_q7',
      type: 'judgment',
      question: '判断：流感季节，应该等出现症状后再戴口罩。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '流感季节应在人群密集场所佩戴口罩，出现症状后更应该佩戴，防止传播。',
      knowledgePoint: '流感防护'
    },
    {
      id: 'ph_q8',
      type: 'single_choice',
      question: '发现自己有发热、咳嗽等疑似传染病症状时，应该？',
      options: ['坚持上学/上班', '自行服药继续活动', '及时就医并做好防护', '去人员密集场所'],
      correctAnswer: 2,
      explanation: '出现疑似症状应及时就医，并做好个人防护，避免传染他人。',
      knowledgePoint: '疑似症状处理'
    },
    {
      id: 'ph_q9',
      type: 'single_choice',
      question: '疫苗接种的主要目的是？',
      options: ['治疗疾病', '预防疾病', '增强体质', '没有任何作用'],
      correctAnswer: 1,
      explanation: '疫苗接种的主要目的是预防疾病，通过激发人体免疫系统产生抗体。',
      knowledgePoint: '疫苗接种意义'
    },
    {
      id: 'ph_q10',
      type: 'single_choice',
      question: '感染性腹泻（如诺如病毒）期间，饮食应该注意？',
      options: ['多喝含糖饮料', '补充淡盐水或口服补液盐', '禁食禁水', '吃辛辣食物'],
      correctAnswer: 1,
      explanation: '感染性腹泻会导致脱水，应补充淡盐水或口服补液盐，避免含糖饮料。',
      knowledgePoint: '腹泻处理'
    },
    {
      id: 'ph_q11',
      type: 'single_choice',
      question: '狂犬病的主要传播途径是？',
      options: ['空气传播', '被携带病毒的动物咬伤或抓伤', '食物传播', '血液传播'],
      correctAnswer: 1,
      explanation: '狂犬病主要通过被感染动物的咬伤或抓伤传播，一旦被咬伤应立即就医接种疫苗。',
      knowledgePoint: '狂犬病传播'
    },
    {
      id: 'ph_q12',
      type: 'true_false',
      question: '被猫狗抓伤后，皮肤没有出血就不需要接种狂犬疫苗。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '只要被动物抓伤，即使没有出血也可能感染狂犬病，应及时就医并接种疫苗。',
      knowledgePoint: '狂犬病预防'
    },
    {
      id: 'ph_q13',
      type: 'single_choice',
      question: '预防流感最有效的方法是？',
      options: ['多喝水', '接种流感疫苗', '吃板蓝根', '用醋熏房间'],
      correctAnswer: 1,
      explanation: '接种流感疫苗是预防流感最有效的方法，建议在流感季节前接种。',
      knowledgePoint: '流感预防'
    },
    {
      id: 'ph_q14',
      type: 'multiple_choice',
      question: '以下哪些属于呼吸道传染病的预防措施？（多选）',
      options: ['勤洗手', '佩戴口罩', '开窗通风', '密切接触病人'],
      correctAnswer: [0, 1, 2],
      explanation: '预防呼吸道传染病应勤洗手、戴口罩、开窗通风。密切接触病人会增加感染风险。',
      knowledgePoint: '呼吸道传染病预防'
    },
    {
      id: 'ph_q15',
      type: 'single_choice',
      question: '使用过的口罩应该如何处理？',
      options: ['随手扔掉', '开水烫后重复使用', '丢入带盖的垃圾桶', '烧掉'],
      correctAnswer: 2,
      explanation: '使用过的口罩应丢入有盖的垃圾桶，避免病毒传播。不要重复使用或随意丢弃。',
      knowledgePoint: '口罩处理'
    },
    {
      id: 'ph_q16',
      type: 'judgment',
      question: '判断：传染病隔离期满后，身体没有症状就可以不用再注意防护了。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '隔离期满后仍需做好个人防护，部分传染病康复后仍可能携带病原体或出现复发。',
      knowledgePoint: '隔离后防护'
    },
    {
      id: 'ph_q17',
      type: 'single_choice',
      question: '流行性腮腺炎（痄腮）主要通过什么途径传播？',
      options: ['空气飞沫', '血液', '食物', '接触宠物'],
      correctAnswer: 0,
      explanation: '流行性腮腺炎主要通过空气飞沫和密切接触传播，常见于儿童。',
      knowledgePoint: '腮腺炎传播'
    },
    {
      id: 'ph_q18',
      type: 'multiple_choice',
      question: '预防蚊虫传播疾病的方法包括哪些？（多选）',
      options: ['使用蚊帐', '清理积水', '喷洒杀虫剂', '在草丛中玩耍'],
      correctAnswer: [0, 1, 2],
      explanation: '预防蚊虫传播疾病应使用蚊帐、清理积水、喷洒杀虫剂。避免在蚊虫多的地方久留。',
      knowledgePoint: '蚊虫防治'
    },
    {
      id: 'ph_q19',
      type: 'single_choice',
      question: '手足口病主要感染人群是？',
      options: ['成年人', '老年人', '儿童', '孕妇'],
      correctAnswer: 2,
      explanation: '手足口病主要感染5岁以下儿童，成人多为隐性感染。',
      knowledgePoint: '手足口病人群'
    },
    {
      id: 'ph_q20',
      type: 'true_false',
      question: '艾滋病可以通过一起吃饭、共用餐具被感染。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '艾滋病通过血液、性接触和母婴传播。一起吃饭、共用餐具、握手等日常接触不会感染。',
      knowledgePoint: '艾滋病传播'
    },
    {
      id: 'ph_q21',
      type: 'sequence',
      question: '将正确戴口罩的步骤按顺序排列：',
      options: ['压紧鼻梁金属条', '将有金属条的一边朝上', '罩住口鼻', '先洗手'],
      correctAnswer: [3, 1, 2, 0],
      explanation: '正确顺序：先洗手→将有金属条一边朝上→罩住口鼻→压紧鼻梁金属条。',
      knowledgePoint: '戴口罩步骤'
    },
    {
      id: 'ph_q22',
      type: 'single_choice',
      question: '肺结核的常见症状是？',
      options: ['发热、腹泻', '咳嗽、咳痰两周以上', '头痛、头晕', '皮疹'],
      correctAnswer: 1,
      explanation: '肺结核常见症状为咳嗽、咳痰两周以上，伴有低热、盗汗、消瘦等。',
      knowledgePoint: '肺结核症状'
    },
    {
      id: 'ph_q23',
      type: 'judgment',
      question: '判断：细菌性食物中毒通常在食用污染食物后2-4小时发病。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '细菌性食物中毒一般在数小时到数天内发病，取决于细菌种类和摄入量。',
      knowledgePoint: '食物中毒'
    },
    {
      id: 'ph_q24',
      type: 'multiple_choice',
      question: '以下哪些情况需要及时洗手？（多选）',
      options: ['饭前便后', '外出回家后', '接触公共物品后', '游泳前'],
      correctAnswer: [0, 1, 2],
      explanation: '饭前便后、外出回家后、接触公共物品后都应及时洗手。游泳前不需要特别洗手。',
      knowledgePoint: '洗手时机'
    },
    {
      id: 'ph_q25',
      type: 'single_choice',
      question: '预防霍乱最主要的措施是？',
      options: ['戴口罩', '接种疫苗', '保证食物和水源安全', '多洗澡'],
      correctAnswer: 2,
      explanation: '霍乱主要通过污染的水和食物传播，保证水源和食物安全是最重要的预防措施。',
      knowledgePoint: '霍乱预防'
    },
    {
      id: 'ph_q26',
      type: 'true_false',
      question: '传染病痊愈后，身体一定会产生终身免疫力。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '不同传染病产生的免疫力持续时间不同，有些疾病（如流感）不会产生终身免疫。',
      knowledgePoint: '免疫'
    },
    {
      id: 'ph_q27',
      type: 'single_choice',
      question: '关于抗生素的使用，正确的是？',
      options: ['抗生素可以治疗所有感染', '抗生素对病毒感染有效', '抗生素应遵医嘱使用', '感冒时可以自行服用抗生素'],
      correctAnswer: 2,
      explanation: '抗生素是处方药，应在医生指导下使用。滥用抗生素会导致耐药性。',
      knowledgePoint: '抗生素使用'
    },
    {
      id: 'ph_q28',
      type: 'multiple_choice',
      question: '预防血吸虫病应该怎么做？（多选）',
      options: ['不接触疫水', '使用防护用品', '消灭钉螺', '在疫水中游泳'],
      correctAnswer: [0, 1, 2],
      explanation: '血吸虫病通过接触疫水传播，应避免接触、使用防护用品、消灭钉螺。',
      knowledgePoint: '血吸虫病预防'
    },
    {
      id: 'ph_q29',
      type: 'single_choice',
      question: '处理疑似传染病病人的呕吐物时，正确的做法是？',
      options: ['直接用手清理', '用纸巾直接擦拭', '戴手套后用消毒剂处理', '用水冲掉'],
      correctAnswer: 2,
      explanation: '清理呕吐物应戴手套，用含氯消毒剂处理，再进行清洁。直接接触或用水冲会扩大污染。',
      knowledgePoint: '呕吐物处理'
    },
    {
      id: 'ph_q30',
      type: 'judgment',
      question: '判断：疾病预防控制中心电话12320用于报告传染病疫情。',
      options: ['正确', '错误'],
      correctAnswer: 0,
      explanation: '12320是公共卫生热线，可用于咨询和报告传染病相关信息。',
      knowledgePoint: '疫情报告'
    },
    {
      id: 'ph_q31',
      type: 'single_choice',
      question: '乙型肝炎的主要传播途径是？',
      options: ['空气飞沫', '血液和体液', '食物', '日常接触'],
      correctAnswer: 1,
      explanation: '乙肝主要通过血液、体液和母婴垂直传播。日常接触如握手、共餐不会传播。',
      knowledgePoint: '乙肝传播'
    },
    {
      id: 'ph_q32',
      type: 'multiple_choice',
      question: '心理健康的标准包括哪些？（多选）',
      options: ['情绪稳定', '人际关系和谐', '有自我认知', '过度追求完美'],
      correctAnswer: [0, 1, 2],
      explanation: '心理健康标准包括情绪稳定、人际和谐、自我认知清晰等。过度追求完美不是健康心态。',
      knowledgePoint: '心理健康'
    },
    {
      id: 'ph_q33',
      type: 'single_choice',
      question: '发现野生动物异常死亡，错误的做法是？',
      options: ['报告相关部门', '接触死亡动物', '设置警示标志', '远离死亡动物'],
      correctAnswer: 1,
      explanation: '接触死亡野生动物可能感染病原体，发现异常死亡应报告并远离，等待专业人员处理。',
      knowledgePoint: '野生动物安全'
    },
    {
      id: 'ph_q34',
      type: 'true_false',
      question: '病毒性感冒服用抗生素可以加快康复。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '抗生素对病毒无效，服用抗生素不仅不能治疗病毒感染，还会增加耐药风险。',
      knowledgePoint: '感冒治疗'
    },
    {
      id: 'ph_q35',
      type: 'single_choice',
      question: '预防人感染高致病性禽流感，错误的做法是？',
      options: ['避免接触病死禽类', '禽类食品彻底加热', '与活禽密切接触', '注意厨房卫生'],
      correctAnswer: 2,
      explanation: '人感染禽流感主要通过接触病死禽类，应避免与活禽密切接触，禽肉要彻底加热。',
      knowledgePoint: '禽流感预防'
    },
    {
      id: 'ph_q36',
      type: 'multiple_choice',
      question: '发生公共卫生紧急事件时，应该怎么做？（多选）',
      options: ['听从政府统一指挥', '不信谣不传谣', '隐瞒病情', '配合流行病学调查'],
      correctAnswer: [0, 1, 3],
      explanation: '突发公共卫生事件时应配合政府指挥，不信谣传谣，配合调查。隐瞒病情是违法行为。',
      knowledgePoint: '紧急事件应对'
    },
    {
      id: 'ph_q37',
      type: 'single_choice',
      question: '关于过期药品，正确的处理方式是？',
      options: ['随手扔进垃圾桶', '冲入马桶', '送药店回收', '继续服用'],
      correctAnswer: 2,
      explanation: '过期药品应送回药店或医疗机构回收处理，随意丢弃会污染环境，服用会危害健康。',
      knowledgePoint: '药品处理'
    },
    {
      id: 'ph_q38',
      type: 'judgment',
      question: '判断：疫情期间，只要没有发热症状就可以不遵守防控规定。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '许多传染病在潜伏期就有传染性，防控规定是为了保护所有人，不能因为没有症状就不遵守。',
      knowledgePoint: '防控规定'
    }
  ],

  nodes: {
    start: {
      id: 'start',
      text: '周一早晨，你和同学们正在教室上课。突然，班主任通知有两位同学出现呕吐、腹泻症状，需要被家长接回家休息。老师说校医正在调查情况...',
      scene: 'school_illness_start',
      choices: [
        {
          text: '继续上课，不理会这件事',
          nextNode: 'ignore_illness',
          healthChange: -5,
          knowledgeChange: 0
        },
        {
          text: '告诉老师自己也有点不舒服',
          nextNode: 'report_discomfort',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '和同学们讨论这是什么病',
          nextNode: 'discuss_with_classmates',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '用消毒湿巾擦一下自己的课桌',
          nextNode: 'disinfect_desk',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    ignore_illness: {
      id: 'ignore_illness',
      text: '你继续上课，但心里有些不安。到了中午，越来越多的同学出现类似症状，学校决定提前放假...',
      scene: 'illness_spreads',
      showQuestion: true,
      questionId: 'ph_q6',
      choices: [
        {
          text: '回家后用正确方法洗手消毒',
          nextNode: 'proper_hand_wash',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '和同学一起去逛街放松',
          nextNode: 'go_shopping',
          healthChange: -10,
          knowledgeChange: 0
        }
      ]
    },

    report_discomfort: {
      id: 'report_discomfort',
      text: '你告诉班主任自己也有点恶心想吐。校医立即对你进行检查，并通知了你的家长。',
      scene: 'checked_by_nurse',
      choices: [
        {
          text: '配合校医检查',
          nextNode: 'cooperate_check',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '觉得自己没事，想继续上课',
          nextNode: 'want_to_stay',
          healthChange: -5,
          knowledgeChange: 0
        }
      ]
    },

    discuss_with_classmates: {
      id: 'discuss_with_classmates',
      text: '你们小声讨论着，有同学说是诺如病毒，有同学说是食物中毒。老师听到了，制止了你们的讨论。',
      scene: 'discussion_stopped',
      choices: [
        {
          text: '停止讨论，认真上课',
          nextNode: 'focus_on_class',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '偷偷用免洗洗手液消毒',
          nextNode: 'use_hand_sanitizer',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    disinfect_desk: {
      id: 'disinfect_desk',
      text: '你用消毒湿巾仔细擦拭了课桌表面。老师注意到你的做法，对大家说这是正确的预防措施。',
      scene: 'desk_disinfected',
      showQuestion: true,
      questionId: 'ph_q1',
      choices: [
        {
          text: '继续观察并做好个人防护',
          nextNode: 'continue_prevention',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    proper_hand_wash: {
      id: 'proper_hand_wash',
      text: '回到家后，你用七步洗手法认真清洗双手（内、外、夹、弓、大、立、腕），整个过程超过40秒。',
      scene: 'proper_washing',
      showQuestion: true,
      questionId: 'ph_q2',
      choices: [
        {
          text: '告诉家人学校发生的情况',
          nextNode: 'inform_family',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    go_shopping: {
      id: 'go_shopping',
      text: '你和同学一起去商场逛街。但人多的地方病毒传播更快，你回去后也开始发烧呕吐...',
      scene: 'got_sick',
      isEnding: true,
      endingType: 'lose'
    },

    cooperate_check: {
      id: 'cooperate_check',
      text: '校医检查后发现你没有发烧，但为了安全起见，通知家长接你回家观察一天。',
      scene: 'sent_home',
      choices: [
        {
          text: '回家后做好隔离防护',
          nextNode: 'home_isolation',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    want_to_stay: {
      id: 'want_to_stay',
      text: '你坚持自己没事想继续上课。但到了下午，你也出现了呕吐症状...',
      scene: 'got_sick_too',
      isEnding: true,
      endingType: 'lose'
    },

    focus_on_class: {
      id: 'focus_on_class',
      text: '你认真上课，放学后立即用正确方法洗手并回家。',
      scene: 'normal_day',
      isEnding: true,
      endingType: 'win'
    },

    use_hand_sanitizer: {
      id: 'use_hand_sanitizer',
      text: '你悄悄用免洗洗手液消毒了双手。这种做法值得提倡。',
      scene: 'sanitizer_used',
      isEnding: true,
      endingType: 'win'
    },

    continue_prevention: {
      id: 'continue_prevention',
      text: '你继续保持警惕，下课后用流水和肥皂认真洗手。放学时，学校宣布因疾病传播停课一周。',
      scene: 'school_closed',
      choices: [
        {
          text: '回家进行居家健康监测',
          nextNode: 'home_monitoring',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    inform_family: {
      id: 'inform_family',
      text: '你告诉家人学校发生的情况，家人立即对你的衣物进行了消毒处理，并准备了清淡的饮食。',
      scene: 'family_prepared',
      choices: [
        {
          text: '进行居家健康监测',
          nextNode: 'home_monitoring',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    home_isolation: {
      id: 'home_isolation',
      text: '你回到家后待在自己房间里，使用独立的餐具，父母定时对家里进行消毒。你的做法有效阻断了传播。',
      scene: 'isolated_home',
      isEnding: true,
      endingType: 'win'
    },

    home_monitoring: {
      id: 'home_monitoring',
      text: '你每天测量体温，观察是否出现症状。一周后，班级里大部分同学康复了，你和家人都安然无恙。',
      scene: 'healthy_recovery',
      isEnding: true,
      endingType: 'win'
    },

    // 食物中毒场景
    restaurant_start: {
      id: 'restaurant_start',
      text: '周末你和朋友在一家餐厅聚餐。吃完后，你开始感觉胃部不适，有人开始腹泻呕吐...',
      scene: 'restaurant_food_poisoning',
      choices: [
        {
          text: '立即拨打120急救电话',
          nextNode: 'call_120_food',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '以为是普通肠胃炎，吃点药休息一下',
          nextNode: 'self_medicate',
          healthChange: -5,
          knowledgeChange: 0
        },
        {
          text: '保留食物样本并拍照',
          nextNode: 'keep_food_sample',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    call_120_food: {
      id: 'call_120_food',
      text: '你拨打了120，急救人员很快到达。在询问情况时，你提供了详细的信息：用餐时间、餐厅名称、点的菜品等。',
      scene: 'ambulance_arrives',
      showQuestion: true,
      questionId: 'ph_q5',
      choices: [
        {
          text: '配合疾控人员调查',
          nextNode: 'cooperate_investigation',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    self_medicate: {
      id: 'self_medicate',
      text: '你吃了止泻药以为会好，但症状越来越严重，出现高烧和脱水...',
      scene: 'worsening_symptoms',
      choices: [
        {
          text: '赶紧拨打120急救',
          nextNode: 'call_120_food',
          healthChange: -10,
          knowledgeChange: 5
        }
      ]
    },

    keep_food_sample: {
      id: 'keep_food_sample',
      text: '你用保鲜袋保存了一份剩余食物样本，并拍了菜品照片。医生说这些信息对诊断很有帮助。',
      scene: 'sample_preserved',
      choices: [
        {
          text: '一起拨打120',
          nextNode: 'call_120_food',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    cooperate_investigation: {
      id: 'cooperate_investigation',
      text: '疾控中心调查后发现是某道凉菜被污染导致的食物中毒事件。因为你的及时报告和配合，相关部门对餐厅进行了处理，避免了更多人中毒。',
      scene: 'outbreak_controlled',
      isEnding: true,
      endingType: 'win'
    },

    // 流感季节场景
    flu_season: {
      id: 'flu_season',
      text: '秋冬季节，流感高发。你发现身边很多人都在咳嗽打喷�涕。学校通知说近期是流感高峰期，要求大家做好防护...',
      scene: 'flu_season_start',
      choices: [
        {
          text: '去接种流感疫苗',
          nextNode: 'get_vaccine',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '觉得没必感，继续正常活动',
          nextNode: 'no_vaccine',
          healthChange: -5,
          knowledgeChange: 0
        },
        {
          text: '去药店买些口罩和消毒用品',
          nextNode: 'buy_protection',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    get_vaccine: {
      id: 'get_vaccine',
      text: '你去社区卫生服务中心接种了流感疫苗。医生说两周后会产生保护性抗体。',
      scene: 'vaccinated',
      showQuestion: true,
      questionId: 'ph_q9',
      choices: [
        {
          text: '继续做好个人防护',
          nextNode: 'continue_flu_prevention',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    no_vaccine: {
      id: 'no_vaccine',
      text: '你觉得接种疫苗没必要。但一周后，你还是被传染了流感，发烧三天...',
      scene: 'got_flu',
      isEnding: true,
      endingType: 'lose'
    },

    buy_protection: {
      id: 'buy_protection',
      text: '你买了几包口罩和免洗洗手液。正确佩戴口罩后去上学。',
      scene: 'protection_bought',
      showQuestion: true,
      questionId: 'ph_q4',
      choices: [
        {
          text: '向同学推广正确戴口罩的方法',
          nextNode: 'teach_classmates',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    continue_flu_prevention: {
      id: 'continue_flu_prevention',
      text: '你继续保持良好的卫生习惯：勤洗手、戴口罩、保持室内通风。整个流感季节你都安然无恙！',
      scene: 'flu_season_safe',
      isEnding: true,
      endingType: 'win'
    },

    teach_classmates: {
      id: 'teach_classmates',
      text: '你教同学们正确佩戴口罩的方法，并分享了洗手的重要性。大家都说你是"防疫小能手"！',
      scene: 'classmates_taught',
      isEnding: true,
      endingType: 'win'
    },

    // 日常卫生习惯场景
    daily_hygiene: {
      id: 'daily_hygiene',
      text: '妈妈提醒你说学校在宣传爱国卫生运动，要求每个学生都要掌握正确的洗手方法。你决定好好学习一下...',
      scene: 'hand_washing_learn',
      showQuestion: true,
      questionId: 'ph_q2',
      choices: [
        {
          text: '在网上搜索七步洗手法教程',
          nextNode: 'learn_seven_steps',
          healthChange: 0,
          knowledgeChange: 15
        },
        {
          text: '随便洗洗就行了',
          nextNode: 'lazy_washing',
          healthChange: 0,
          knowledgeChange: 0
        }
      ]
    },

    learn_seven_steps: {
      id: 'learn_seven_steps',
      text: '你认真学习了七步洗手法：内（掌心）、外（手背）、夹（指缝）、弓（指背）、大（大拇指）、立（指尖）、腕（手腕），每个动作至少5秒，总计不少于40秒。',
      scene: 'seven_steps_learned',
      choices: [
        {
          text: '教会家人一起做',
          nextNode: 'teach_family',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    lazy_washing: {
      id: 'lazy_washing',
      text: '你随便用水冲了一下手就完了。结果因为没洗干净，接触了脏东西后拉了肚子...',
      scene: 'sick_from_dirt',
      isEnding: true,
      endingType: 'lose'
    },

    teach_family: {
      id: 'teach_family',
      text: '你教会了全家人正确的七步洗手法。全家人都养成了良好的卫生习惯，减少了生病的机会。',
      scene: 'family_healthy',
      isEnding: true,
      endingType: 'win'
    }
  },

  metadata: {
    title: '公共卫生篇',
    endingTitle: '防疫',
    intro: '了解传染病防控和食物中毒的应对措施',

    achievements: [
      {
        id: 'health_guardian',
        name: '健康卫士',
        icon: '🛡️',
        type: 'gold',
        condition: (state) => state.endingRating === '完美通关'
      },
      {
        id: 'hygiene_expert',
        name: '卫生专家',
        icon: '🧼',
        type: 'blue',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'learn_seven_steps')
      },
      {
        id: 'responsible_citizen',
        name: '责任公民',
        icon: '🏅',
        type: 'green',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'cooperate_investigation')
      },
      {
        id: 'prevention_champion',
        name: '防疫标兵',
        icon: '🎖️',
        type: 'purple',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'get_vaccine' || c.nodeId === 'buy_protection')
      }
    ],

    tips: [
      {
        id: 'tip1',
        icon: '🧼',
        title: '正确洗手',
        description: '七步洗手法：内、外、夹、弓、大、立、腕，每个动作至少5秒，总计不少于40秒。',
        relevantWhen: ['learn_seven_steps', 'proper_hand_wash', 'disinfect_desk']
      },
      {
        id: 'tip2',
        icon: '😷',
        title: '口罩佩戴',
        description: '口罩有颜色的一面朝外，浅色或白色一面朝内，压紧鼻梁金属条。',
        relevantWhen: ['buy_protection', 'teach_classmates']
      },
      {
        id: 'tip3',
        icon: '🤧',
        title: '咳嗽礼仪',
        description: '咳嗽或打喷嚏时用纸巾或手肘内侧遮挡，不要用双手捂住口鼻。',
        relevantWhen: ['discuss_with_classmates']
      },
      {
        id: 'tip4',
        icon: '💉',
        title: '疫苗接种',
        description: '接种流感疫苗是预防流感的有效手段，建议在流感季节前接种。',
        relevantWhen: ['get_vaccine', 'no_vaccine']
      },
      {
        id: 'tip5',
        icon: '🍽️',
        title: '食物安全',
        description: '生熟分开、彻底加热、保持清洁是预防食物中毒的基本原则。',
        relevantWhen: ['call_120_food', 'cooperate_investigation']
      },
      {
        id: 'tip6',
        icon: '📢',
        title: '及时报告',
        description: '发现集体食物中毒或传染病迹象应及时向学校、疾控部门报告。',
        relevantWhen: ['report_discomfort', 'cooperate_investigation']
      },
      {
        id: 'tip7',
        icon: '🏠',
        title: '居家隔离',
        description: '出现传染病症状时，应做好居家隔离，使用独立餐具，定时消毒。',
        relevantWhen: ['home_isolation', 'inform_family']
      },
      {
        id: 'tip8',
        icon: '💊',
        title: '科学就医',
        description: '出现症状应及时就医，不要自行服药延误治疗，也不要带病上课/上班。',
        relevantWhen: ['self_medicate', 'call_120_food']
      }
    ]
  }
}

export default publicHealthScenario
