const weatherScenario = {
  id: 'weather',
  name: '气象灾害',

  questions: [
    {
      id: 'weather_q1',
      type: 'single_choice',
      question: '台风预警信号分为几个等级？',
      options: ['3个', '4个', '5个', '6个'],
      correctAnswer: 1,
      explanation: '台风预警信号分为蓝色、黄色、橙色、红色四个等级。',
      knowledgePoint: '台风预警等级'
    },
    {
      id: 'weather_q2',
      type: 'true_false',
      question: '台风来临时，应该打开窗户通风以减少风压。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '台风来临时应关好门窗，在窗玻璃上贴"米"字形胶带，防止玻璃破碎。',
      knowledgePoint: '台风防护措施'
    },
    {
      id: 'weather_q3',
      type: 'single_choice',
      question: '雷暴天气中，以下哪种行为是安全的？',
      options: ['在大树下避雨', '站在山顶打电话', '在室内使用固定电话', '尽快跑到空旷地带'],
      correctAnswer: 2,
      explanation: '雷暴天气应待在室内，关闭门窗，远离金属设备和窗户。',
      knowledgePoint: '雷暴避险'
    },
    {
      id: 'weather_q4',
      type: 'single_choice',
      question: '遇到冰雹时，正确的做法是？',
      options: ['跑到树下躲避', '用衣物保护头部', '继续行驶', '下车观看冰雹'],
      correctAnswer: 1,
      explanation: '遇到冰雹应用衣物保护头部，尽快进入室内躲避。',
      knowledgePoint: '冰雹避险'
    },
    {
      id: 'weather_q5',
      type: 'multiple_choice',
      question: '沙尘暴来临时，应该采取哪些防护措施？（多选）',
      options: ['关好门窗', '佩戴口罩', '外出戴防护眼镜', '继续户外活动'],
      correctAnswer: [0, 1, 2],
      explanation: '沙尘暴来临时应关好门窗，佩戴口罩和护目镜，减少外出。',
      knowledgePoint: '沙尘暴防护'
    },
    {
      id: 'weather_q6',
      type: 'judgment',
      question: '判断：台风登陆后风力减弱，可以放心外出。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '台风登陆后仍可能有大风和暴雨，且破坏力可能持续，应继续待在安全场所。',
      knowledgePoint: '台风过境安全'
    },
    {
      id: 'weather_q7',
      type: 'single_choice',
      question: '看到"龙吸水"现象时，应该？',
      options: ['靠近观看', '迅速逃离', '跳入水中', '用手机拍摄'],
      correctAnswer: 1,
      explanation: '"龙吸水"是水龙卷风，破坏力极大，发现后应迅速逃离。',
      knowledgePoint: '水龙卷避险'
    },
    {
      id: 'weather_q8',
      type: 'sequence',
      question: '将台风来临前的准备步骤按正确顺序排列：',
      options: ['储备食物和饮用水', '检查门窗加固', '关注预警信息', '准备应急物品'],
      correctAnswer: [2, 3, 1, 0],
      explanation: '正确顺序：关注预警→准备应急物品→检查加固门窗→储备食物饮水。',
      knowledgePoint: '台风准备流程'
    },
    {
      id: 'weather_q9',
      type: 'single_choice',
      question: '雷暴天气时，在户外正确的避险方法是？',
      options: ['躲在大树下', '尽快躲入有防雷设施的建筑物内', '站在山顶', '在水边活动'],
      correctAnswer: 1,
      explanation: '雷暴时应尽快躲入有防雷设施的建筑物内，远离大树、金属物品和水边。',
      knowledgePoint: '雷暴避险'
    },
    {
      id: 'weather_q10',
      type: 'true_false',
      question: '高温红色预警信号发布时，应该减少户外活动。',
      options: ['正确', '错误'],
      correctAnswer: 0,
      explanation: '高温红色预警表示气温极高，应减少户外活动，注意防暑降温。',
      knowledgePoint: '高温预警'
    },
    {
      id: 'weather_q11',
      type: 'single_choice',
      question: '沙尘暴来临时的能见度通常低于多少米？',
      options: ['500米', '1000米', '1500米', '2000米'],
      correctAnswer: 1,
      explanation: '沙尘暴能见度通常低于1000米，强沙尘暴能见度可能低于50米。',
      knowledgePoint: '沙尘暴等级'
    },
    {
      id: 'weather_q12',
      type: 'multiple_choice',
      question: '台风来临时，应该做好哪些防范措施？（多选）',
      options: ['将花盆等易坠物品收进室内', '储备应急食品和饮用水', '加固临时建筑', '到海边观看台风'],
      correctAnswer: [0, 1, 2],
      explanation: '台风来临前应收进花盆、储备食品、加固临时建筑。严禁到海边或危险区域。',
      knowledgePoint: '台风防范'
    },
    {
      id: 'weather_q13',
      type: 'single_choice',
      question: '暴雨导致城市内涝，错误的做法是？',
      options: ['关注预警和交通信息', '蹚水通过积水路段', '将车停在高处', '远离排水口和电线'],
      correctAnswer: 1,
      explanation: '城市内涝积水深度不明，可能有缺失井盖的排水口，严禁蹚水。',
      knowledgePoint: '城市内涝避险'
    },
    {
      id: 'weather_q14',
      type: 'judgment',
      question: '判断：冰雹发生时，跑进有顶棚的地方（如候车亭）躲避即可。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '候车亭顶棚可能被冰雹砸穿或大风刮倒。应寻找有坚固顶棚的建筑物躲避。',
      knowledgePoint: '冰雹避险'
    },
    {
      id: 'weather_q15',
      type: 'single_choice',
      question: '高温天气下，以下哪种行为是正确的防暑措施？',
      options: ['剧烈运动后大量饮用白开水', '定时补充淡盐水', '立即冲冷水澡', '正午时分外出'],
      correctAnswer: 1,
      explanation: '高温天气应补充含电解质的淡盐水，避免剧烈运动，不要用冷水突然降温。',
      knowledgePoint: '高温防暑'
    },
    {
      id: 'weather_q16',
      type: 'multiple_choice',
      question: '雷暴天气中，哪些室内行为是安全的？（多选）',
      options: ['关闭门窗', '使用太阳能热水器洗澡', '远离金属管道', '不使用电器'],
      correctAnswer: [0, 2, 3],
      explanation: '雷暴时应关好门窗，远离金属管道和电器。太阳能热水器有雷击风险，不宜使用。',
      knowledgePoint: '室内防雷'
    },
    {
      id: 'weather_q17',
      type: 'single_choice',
      question: '寒潮来袭时，错误的应对措施是？',
      options: ['添加保暖衣物', '紧闭门窗防寒', '进行户外锻炼', '储备足够的食物'],
      correctAnswer: 2,
      explanation: '寒潮天气应避免户外锻炼，注意保暖和室内取暖安全，储备必要生活物资。',
      knowledgePoint: '寒潮应对'
    },
    {
      id: 'weather_q18',
      type: 'true_false',
      question: '大雾天气驾车时，应使用远光灯增强照明。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '大雾天气应使用近光灯和雾灯，远光灯会在雾中形成反射，降低能见度。',
      knowledgePoint: '雾天行车'
    },
    {
      id: 'weather_q19',
      type: 'sequence',
      question: '将高温天气预防中暑的步骤按正确顺序排列：',
      options: ['转移到阴凉处', '识别中暑症状', '补充水分和电解质', '物理降温'],
      correctAnswer: [1, 0, 3, 2],
      explanation: '正确顺序：识别症状→转移阴凉处→物理降温→补充水分。',
      knowledgePoint: '中暑急救流程'
    },
    {
      id: 'weather_q20',
      type: 'single_choice',
      question: '龙卷风来临时，正确的避险位置是？',
      options: ['窗户边', '建筑物中央的卫生间或楼梯间', '屋顶', '阳台'],
      correctAnswer: 1,
      explanation: '龙卷风时应躲入建筑物中央的卫生间或楼梯间，远离窗户和外墙。',
      knowledgePoint: '龙卷风避险'
    },
    {
      id: 'weather_q21',
      type: 'judgment',
      question: '判断：收到气象灾害预警后，应等事态严重了再做准备。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '气象灾害预警就是提前警示，应提前做好准备，不要等到事态严重才行动。',
      knowledgePoint: '预警响应'
    },
    {
      id: 'weather_q22',
      type: 'single_choice',
      question: '冻雨天气道路结冰，错误的出行方式是？',
      options: ['乘坐公共交通', '步行外出穿防滑鞋', '驾驶摩托车', '待在室内非必要不外出'],
      correctAnswer: 2,
      explanation: '冻雨天道路结冰，摩托车极易打滑摔倒，应尽量避免骑行，选择公共交通或步行。',
      knowledgePoint: '冻雨出行'
    },
    {
      id: 'weather_q23',
      type: 'multiple_choice',
      question: '气象灾害应急包里应该准备哪些物品？（多选）',
      options: ['手电筒和备用电池', '常用药品', '瓶装水和高热量食物', '游泳衣'],
      correctAnswer: [0, 1, 2],
      explanation: '应急包应准备照明工具、药品、食物和水。游泳衣在气象灾害中没有用处。',
      knowledgePoint: '应急物资'
    },
    {
      id: 'weather_q24',
      type: 'single_choice',
      question: '为什么不能在山谷或河谷地带扎营？',
      options: ['不方便', '容易遭受雷击和山洪', '没有风景', '太吵'],
      correctAnswer: 1,
      explanation: '山谷河谷易成为洪水通道，且雷暴时易聚集电荷。露营应选择地势高、开阔平坦处。',
      knowledgePoint: '户外露营安全'
    },
    {
      id: 'weather_q25',
      type: 'true_false',
      question: '听到气象预警广播后，可以继续正常活动不用理会。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '气象预警是重要警示信息，应密切关注并采取相应防护措施。',
      knowledgePoint: '预警重视'
    },
    {
      id: 'weather_q26',
      type: 'single_choice',
      question: '地震后暴雨天气，应特别警惕哪种次生灾害？',
      options: ['火灾', '泥石流和滑坡', '停电', '交通事故'],
      correctAnswer: 1,
      explanation: '地震后山体松动，暴雨极易引发泥石流和滑坡，应远离山谷和陡峭山坡。',
      knowledgePoint: '地震次生灾害'
    },
    {
      id: 'weather_q27',
      type: 'multiple_choice',
      question: '雷雨天气户外避险，正确的做法是？（多选）',
      options: ['远离孤立的大树', '离开水面和水边', '蹲下身体降低高度', '尽快跑到山顶'],
      correctAnswer: [0, 1, 2],
      explanation: '雷雨时应远离大树和水域，蹲下身体降低高度。不要跑到山顶，那更危险。',
      knowledgePoint: '户外防雷'
    },
    {
      id: 'weather_q28',
      type: 'single_choice',
      question: '高温天气中暑的早期症状是？',
      options: ['剧烈头痛', '大量出汗、头晕乏力', '体温升高到40度', '意识模糊'],
      correctAnswer: 1,
      explanation: '中暑早期表现为大量出汗、头晕乏力、恶心等。严重时才会高热和意识模糊。',
      knowledgePoint: '中暑识别'
    },
    {
      id: 'weather_q29',
      type: 'judgment',
      question: '判断：沙尘暴结束后可以立即外出活动。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '沙尘暴结束后空气中仍含有大量颗粒物，应等空气质量好转后再外出。',
      knowledgePoint: '沙尘暴后'
    },
    {
      id: 'weather_q30',
      type: 'sequence',
      question: '将收到暴雨预警后的应对步骤按正确顺序排列：',
      options: ['检查排水设施', '暂停不必要的户外活动', '关注最新预警信息', '准备应急物资'],
      correctAnswer: [2, 3, 0, 1],
      explanation: '正确顺序：关注预警→准备物资→检查排水→暂停户外活动。',
      knowledgePoint: '暴雨预警响应'
    },
    {
      id: 'weather_q31',
      type: 'single_choice',
      question: '台风"风眼"区域为什么反而平静？',
      options: ['台风已经结束', '下沉气流造成', '季风影响', '地形遮挡'],
      correctAnswer: 1,
      explanation: '台风风眼是下沉气流区，空气以下沉为主，所以天气平静。但离开风眼后会更危险。',
      knowledgePoint: '台风风眼'
    },
    {
      id: 'weather_q32',
      type: 'multiple_choice',
      question: '大风天气个人防护措施包括哪些？（多选）',
      options: ['远离广告牌和临时建筑', '小心高空坠物', '佩戴防护眼镜', '可以顺风奔跑'],
      correctAnswer: [0, 1, 2],
      explanation: '大风天气应远离危险物体，佩戴护目镜。逆风而行更安全，不要顺风跑。',
      knowledgePoint: '大风防护'
    },
    {
      id: 'weather_q33',
      type: 'single_choice',
      question: '遇到暴雪天气，错误的应对方式是？',
      options: ['待在室内', '储备足够的食物和水', '驾驶私家车外出采购', '关注天气和交通信息'],
      correctAnswer: 2,
      explanation: '暴雪天气道路积雪结冰，应尽量避免驾车外出，待在室内等待路况好转。',
      knowledgePoint: '暴雪应对'
    },
    {
      id: 'weather_q34',
      type: 'judgment',
      question: '判断：雷电时可以使用手机打电话。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '手机电磁波不会引雷，但雷暴时使用任何金属设备都有风险。应待在室内使用手机。',
      knowledgePoint: '防雷知识'
    },
    {
      id: 'weather_q35',
      type: 'single_choice',
      question: '气象灾害预警信号的颜色等级从轻到重排列正确的是？',
      options: ['蓝、黄、橙、红', '红、橙、黄、蓝', '黄、蓝、橙、红', '蓝、橙、黄、红'],
      correctAnswer: 0,
      explanation: '气象预警从轻到重为蓝色、黄色、橙色、红色，红色为最高级别。',
      knowledgePoint: '预警等级'
    },
    {
      id: 'weather_q36',
      type: 'multiple_choice',
      question: '台风来临时在建筑物内避险，应该注意什么？（多选）',
      options: ['远离窗户和玻璃门', '准备好手电筒和应急物品', '可以到阳台上观看', '关好门窗'],
      correctAnswer: [0, 1, 3],
      explanation: '台风避险应远离窗户，准备应急物品，关好门窗。严禁在阳台或窗边观看。',
      knowledgePoint: '室内避险'
    },
    {
      id: 'weather_q37',
      type: 'true_false',
      question: '干旱天气可以随意使用水资源。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '干旱天气水资源紧张，应节约用水，一水多用，不要浪费。',
      knowledgePoint: '干旱节水'
    },
    {
      id: 'weather_q38',
      type: 'single_choice',
      question: '气象灾害后，如果出现房屋受损、停水停电等情况，错误的做法是？',
      options: ['听从政府统一安排', '自行进入受损房屋抢搬财物', '互帮互助共渡难关', '耐心等待救援'],
      correctAnswer: 1,
      explanation: '灾害后受损房屋可能坍塌，不应进入。应收听政府安排，互帮互助，等待救援。',
      knowledgePoint: '灾后安全'
    }
  ],

  nodes: {
    start: {
      id: 'start',
      text: '七月的傍晚，你正在家中准备晚餐。突然，手机收到了台风红色预警信号：超强台风"海神"将于今晚在附近沿海地区登陆，届时将出现12级以上大风和暴雨...',
      scene: 'typhoon_warning',
      timerConfig: {
        enabled: true,
        duration: 30,
        urgencyLevel: 'high',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 1,
          healthChange: 0,
          knowledgeChange: 5,
          message: '台风即将来临！'
        }
      },
      choices: [
        {
          text: '去超市抢购食物',
          nextNode: 'panic_buy',
          healthChange: 0,
          knowledgeChange: 0
        },
        {
          text: '关好门窗，加固阳台物品',
          nextNode: 'secure_home',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '不管不顾，继续做饭',
          nextNode: 'ignore_typhoon',
          healthChange: -5,
          knowledgeChange: 0
        },
        {
          text: '出门看看情况',
          nextNode: 'go_outside',
          healthChange: -10,
          knowledgeChange: 0
        }
      ]
    },

    panic_buy: {
      id: 'panic_buy',
      text: '你赶到超市，发现货架已经被抢购一空。慌乱中你和别人争抢一袋大米，推搡中你摔倒了...',
      scene: 'supermarket_panic',
      choices: [
        {
          text: '忍痛站起来，放弃抢购',
          nextNode: 'give_up_shopping',
          healthChange: -5,
          knowledgeChange: 0
        },
        {
          text: '坚持抢到食物',
          nextNode: 'get_food_difficult',
          healthChange: -10,
          knowledgeChange: 0
        }
      ]
    },

    give_up_shopping: {
      id: 'give_up_shopping',
      text: '你空手回到家，发现台风已经开始影响，窗户被风吹得呼呼作响...',
      scene: 'return_empty',
      choices: [
        {
          text: '检查门窗是否关好',
          nextNode: 'check_windows',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    get_food_difficult: {
      id: 'get_food_difficult',
      text: '你费了九牛二虎之力抢到了一些方便食品，但身上多处淤青。回到家时台风已经登陆了...',
      scene: 'return_injured',
      isEnding: true,
      endingType: 'lose'
    },

    secure_home: {
      id: 'secure_home',
      text: '你仔细检查了所有窗户，用胶带在玻璃上贴了"米"字形加固。阳台上的花盆被收进室内，门窗都关紧了。',
      scene: 'home_secured',
      showQuestion: true,
      questionId: 'weather_q2',
      choices: [
        {
          text: '准备应急物品（手电筒、充电宝、常用药）',
          nextNode: 'prepare_supplies',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '储备足够的食物和饮用水',
          nextNode: 'stock_food',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    ignore_typhoon: {
      id: 'ignore_typhoon',
      text: '你继续做饭，对预警置之不理。突然，一阵狂风把阳台的门吹开，雨水涌入室内...',
      scene: 'window_blown',
      timerConfig: {
        enabled: true,
        duration: 20,
        urgencyLevel: 'critical',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 0,
          healthChange: -15,
          knowledgeChange: 0,
          message: '危险！'
        }
      },
      choices: [
        {
          text: '立即关上阳台门并用重物抵住',
          nextNode: 'close_balcony',
          healthChange: -5,
          knowledgeChange: 5
        },
        {
          text: '跑阳台去捡被吹走的东西',
          nextNode: 'chase_objects',
          healthChange: -15,
          knowledgeChange: 0
        }
      ]
    },

    go_outside: {
      id: 'go_outside',
      text: '你走出家门想看看情况，结果被一阵狂风吹倒，一块飞来铁皮差点划伤你！',
      scene: 'blown_by_wind',
      isEnding: true,
      endingType: 'lose'
    },

    prepare_supplies: {
      id: 'prepare_supplies',
      text: '你找到了手电筒、备用手机充电宝、创可贴、常用药物等应急物品。还给手机和充电宝充满了电。',
      scene: 'supplies_ready',
      choices: [
        {
          text: '给手机和充电宝充电',
          nextNode: 'charge_devices',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    stock_food: {
      id: 'stock_food',
      text: '你储备了足够的饮用水（桶装水、瓶装水）和易于保存的食物（方便面、饼干等）。',
      scene: 'food_stocked',
      choices: [
        {
          text: '给手机和充电宝充电',
          nextNode: 'charge_devices',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    charge_devices: {
      id: 'charge_devices',
      text: '你把手机和充电宝都充满了电，确保停电时也能保持通讯。突然，窗外传来巨大的声响——台风已经登陆了！',
      scene: 'typhoon_landing',
      timerConfig: {
        enabled: true,
        duration: 30,
        urgencyLevel: 'high',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 0,
          healthChange: 0,
          knowledgeChange: 5,
          message: '台风正在肆虐！'
        }
      },
      choices: [
        {
          text: '待在室内，远离窗户',
          nextNode: 'stay_indoors',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '用手机拍摄窗外的情景发朋友圈',
          nextNode: 'record_storm',
          healthChange: -5,
          knowledgeChange: 0
        }
      ]
    },

    check_windows: {
      id: 'check_windows',
      text: '你检查发现几扇窗户没有关紧，赶紧全部关好并加固。',
      scene: 'checked_windows',
      choices: [
        {
          text: '准备应急物品',
          nextNode: 'prepare_supplies',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    close_balcony: {
      id: 'close_balcony',
      text: '你奋力关上阳台门并用重物抵住，雨水被挡住了。但风力太大，玻璃开始震动...',
      scene: 'glass_shaking',
      choices: [
        {
          text: '用胶带加固玻璃',
          nextNode: 'tape_glass',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '转移到更安全的房间',
          nextNode: 'move_to_safer_room',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    chase_objects: {
      id: 'chase_objects',
      text: '你冲到阳台想捡回被吹走的东西，结果被一阵狂风卷入空中...',
      scene: 'blown_away',
      isEnding: true,
      endingType: 'lose'
    },

    tape_glass: {
      id: 'tape_glass',
      text: '你用胶带在玻璃上贴了"米"字形加固，玻璃不再那么震动了。',
      scene: 'glass_taped',
      choices: [
        {
          text: '转移到更安全的房间',
          nextNode: 'move_to_safer_room',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    move_to_safer_room: {
      id: 'move_to_safer_room',
      text: '你转移到没有窗户的卫生间或厨房，这里更加安全。',
      scene: 'safe_room',
      choices: [
        {
          text: '持续关注台风动态',
          nextNode: 'monitor_typhoon',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    stay_indoors: {
      id: 'stay_indoors',
      text: '你关好门窗，远离窗户区域。台风呼啸而过，但你的房屋保护完好。',
      scene: 'indoors_safe',
      showQuestion: true,
      questionId: 'weather_q6',
      choices: [
        {
          text: '继续待在安全位置直到台风完全过去',
          nextNode: 'wait_out_typhoon',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '感觉风力减弱了，出去看看',
          nextNode: 'go_out_early',
          healthChange: -10,
          knowledgeChange: 0
        }
      ]
    },

    record_storm: {
      id: 'record_storm',
      text: '你站在窗边拍视频，突然一块飞来的物体砸碎了玻璃！你被玻璃碎片划伤...',
      scene: 'glass_cut',
      isEnding: true,
      endingType: 'lose'
    },

    monitor_typhoon: {
      id: 'monitor_typhoon',
      text: '你通过手机关注着台风动态，看到气象部门发布的实时路径图。台风正在逐渐远离...',
      scene: 'monitoring',
      isEnding: true,
      endingType: 'win'
    },

    wait_out_typhoon: {
      id: 'wait_out_typhoon',
      text: '你在安全位置等待了数小时，直到台风完全过境。第二天早上出门，发现街道一片狼藉，但你和家人都安全无恙。',
      scene: 'typhoon_passed',
      isEnding: true,
      endingType: 'win'
    },

    go_out_early: {
      id: 'go_out_early',
      text: '你感觉风力减弱了，出门查看。结果被一阵突发的阵风刮倒，摔成了骨折...',
      scene: 'early_exit_injury',
      isEnding: true,
      endingType: 'lose'
    }
  },

  metadata: {
    title: '气象灾害篇',
    endingTitle: '避险',
    intro: '学习台风、雷暴、冰雹、沙尘暴的避险方法',

    achievements: [
      {
        id: 'weather_master',
        name: '气象专家',
        icon: '⛈️',
        type: 'gold',
        condition: (state) => state.endingRating === '完美通关'
      },
      {
        id: 'prepared_family',
        name: '有备无患',
        icon: '🎒',
        type: 'blue',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'prepare_supplies' || c.nodeId === 'stock_food')
      },
      {
        id: 'home_secure',
        name: '固若金汤',
        icon: '🏠',
        type: 'green',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'secure_home' || c.nodeId === 'tape_glass')
      },
      {
        id: 'patient_survivor',
        name: '耐心避险',
        icon: '⏳',
        type: 'purple',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'wait_out_typhoon')
      }
    ],

    tips: [
      {
        id: 'tip1',
        icon: '🔔',
        title: '关注预警',
        description: '密切关注气象预警信息，台风预警等级从低到高为蓝色、黄色、橙色、红色。',
        relevantWhen: ['start', 'secure_home']
      },
      {
        id: 'tip2',
        icon: '🏠',
        title: '居家防护',
        description: '关好门窗，用胶带在玻璃上贴"米"字形加固，搬走阳台上的花盆等易坠物品。',
        relevantWhen: ['secure_home', 'tape_glass']
      },
      {
        id: 'tip3',
        icon: '🎒',
        title: '应急准备',
        description: '储备食物和饮用水，准备手电筒、充电宝、急救药品等应急物品。',
        relevantWhen: ['prepare_supplies', 'stock_food']
      },
      {
        id: 'tip4',
        icon: '🚫',
        title: '禁止外出',
        description: '台风期间严禁外出，避免被风吹落的物体砸伤。',
        relevantWhen: ['go_outside', 'record_storm', 'go_out_early']
      },
      {
        id: 'tip5',
        icon: '🛡️',
        title: '转移避险',
        description: '当风力过大时，应转移到没有窗户的房间（如卫生间），或远离窗户的区域。',
        relevantWhen: ['move_to_safer_room', 'stay_indoors']
      },
      {
        id: 'tip6',
        icon: '⏱️',
        title: '台风过境后',
        description: '台风登陆后仍可能有危险，应继续待在安全场所，等待官方宣布安全后再外出。',
        relevantWhen: ['stay_indoors', 'wait_out_typhoon']
      }
    ]
  }
}

export default weatherScenario
