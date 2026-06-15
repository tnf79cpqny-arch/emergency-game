const fireScenario = {
  id: 'fire',
  name: '火灾逃生',

  questions: [
    {
      id: 'fire_q1',
      type: 'single_choice',
      question: '发现家中厨房着火，正确的第一步行动是？',
      options: ['立即用水灭火', '拨打119火警电话', '拿起灭火器灭火', '逃离现场并关门'],
      correctAnswer: 3,
      explanation: '火灾初期应确保自身安全，迅速逃离并关闭房门以阻隔烟雾和火势蔓延，然后再报警。',
      knowledgePoint: '火灾初期应对'
    },
    {
      id: 'fire_q2',
      type: 'true_false',
      question: '发生火灾时，应该乘坐电梯快速逃生。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '火灾时电梯会断电，且电梯井可能充满烟雾，非常危险。必须使用楼梯逃生。',
      knowledgePoint: '火灾逃生禁止乘电梯'
    },
    {
      id: 'fire_q3',
      type: 'single_choice',
      question: '灭火器使用四步法"拔、瞄、压、扫"中，"瞄"是指瞄准哪里？',
      options: ['火焰顶部', '火焰中部', '火焰根部', '随便哪里都行'],
      correctAnswer: 2,
      explanation: '灭火器应瞄准火焰根部喷射，才能有效隔绝氧气熄灭火焰。',
      knowledgePoint: '灭火器正确使用方法'
    },
    {
      id: 'fire_q4',
      type: 'judgment',
      question: '判断：湿毛巾捂住口鼻可以完全阻隔有毒烟雾。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '湿毛巾能过滤部分颗粒但无法阻隔所有有毒气体，最佳防护是佩戴专业防毒面罩。',
      knowledgePoint: '烟雾避险'
    },
    {
      id: 'fire_q5',
      type: 'single_choice',
      question: '在浓烟弥漫的火场中逃生，正确的姿势是？',
      options: ['直立快速奔跑', '弯腰低姿沿墙壁前进', '匍匐前进', '跳着走'],
      correctAnswer: 1,
      explanation: '烟雾上升，地面附近空气相对清洁。弯腰低姿可减少吸入有毒烟雾。',
      knowledgePoint: '浓烟逃生姿势'
    },
    {
      id: 'fire_q6',
      type: 'multiple_choice',
      question: '以下哪些是拨打119报警时需要说明的信息？（多选）',
      options: ['着火具体地址', '起火物质', '人员被困情况', '自己的姓名'],
      correctAnswer: [0, 1, 2],
      explanation: '报警时应说明地址、起火物质和人员情况，便于消防员准确响应。',
      knowledgePoint: '火警报警要点'
    },
    {
      id: 'fire_q7',
      type: 'sequence',
      question: '将灭火器使用方法按正确顺序排列：',
      options: ['压下手柄', '拔掉保险销', '扫射火焰根部', '将喷嘴对准火焰'],
      correctAnswer: [1, 3, 0, 2],
      explanation: '正确顺序：拔保险销→将喷嘴对准火焰→压下手柄→扫射根部。',
      knowledgePoint: '灭火器使用流程'
    },
    {
      id: 'fire_q8',
      type: 'single_choice',
      question: '身上衣物着火时，正确的做法是？',
      options: ['奔跑求救', '用手拍打灭火', '就地打滚压灭火焰', '脱下衣物'],
      correctAnswer: 2,
      explanation: '就地打滚可以隔绝空气灭火，用手拍打或奔跑会让火势扩大。',
      knowledgePoint: '身上着火处理'
    },
    {
      id: 'fire_q9',
      type: 'single_choice',
      question: '油锅着火，正确的灭火方法是？',
      options: ['用水浇灭', '用锅盖盖上', '直接跑掉', '用湿抹布扑灭'],
      correctAnswer: 1,
      explanation: '油锅着火应用锅盖盖上，隔绝空气灭火。浇水会导致热油溅出，加剧火势。',
      knowledgePoint: '油锅灭火'
    },
    {
      id: 'fire_q10',
      type: 'true_false',
      question: '发现火灾时，应该先确认火势大小再决定是否逃生。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '发现火灾应立即逃生，不要试图确认火势大小，宝贵的逃生时间不应浪费在观察火情上。',
      knowledgePoint: '火灾逃生原则'
    },
    {
      id: 'fire_q11',
      type: 'single_choice',
      question: '高层建筑发生火灾时，错误的逃生方式是？',
      options: ['使用楼梯下楼', '乘坐电梯逃生', '往楼顶跑等待救援', '用湿毛巾捂住口鼻'],
      correctAnswer: 1,
      explanation: '高层火灾严禁乘坐电梯，电梯可能断电困人或充满烟雾。应使用楼梯逃生。',
      knowledgePoint: '高层逃生'
    },
    {
      id: 'fire_q12',
      type: 'multiple_choice',
      question: '以下哪些是预防电气火灾的措施？（多选）',
      options: ['不私拉乱接电线', '使用合格电气产品', '超负荷使用插座', '出门前关掉电源总闸'],
      correctAnswer: [0, 1, 3],
      explanation: '预防电气火灾需要：不私拉电线、使用合格产品、避免超负荷、离开时断电。',
      knowledgePoint: '电气火灾预防'
    },
    {
      id: 'fire_q13',
      type: 'single_choice',
      question: '家中发生火灾，逃生时开门前正确的做法是？',
      options: ['直接打开门冲出去', '用手背试探门温度', '用力推门确认是否锁住', '踹开门快速离开'],
      correctAnswer: 1,
      explanation: '开门前应用手背试探门温度，如果门很烫说明外面火势很大，不应开门。',
      knowledgePoint: '火灾开门检查'
    },
    {
      id: 'fire_q14',
      type: 'judgment',
      question: '判断：火灾时如果身上着火，可以跑动着试图灭火。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '身上着火奔跑会让火借风势更大。应就地打滚或用厚重衣物压灭火焰。',
      knowledgePoint: '身上着火处理'
    },
    {
      id: 'fire_q15',
      type: 'multiple_choice',
      question: '商场发生火灾时，正确的逃生方式包括？（多选）',
      options: ['用湿毛巾捂住口鼻', '弯腰低姿沿墙壁前进', '乘坐电梯快速下楼', '注意疏散指示标志'],
      correctAnswer: [0, 1, 3],
      explanation: '商场逃生应用湿毛巾捂口鼻、弯腰低姿、沿墙行走、跟随疏散指示标志。严禁乘电梯。',
      knowledgePoint: '公共场所逃生'
    },
    {
      id: 'fire_q16',
      type: 'single_choice',
      question: '如果门外已经有火焰无法逃生，正确的做法是？',
      options: ['强行冲出去', '躲在浴室用水喷', '关门堵住门缝，到窗口求救', '打开所有窗户跳楼'],
      correctAnswer: 2,
      explanation: '无法逃生时应关门堵住门缝，用湿毛巾堵住缝隙，到窗口挥舞醒目物品求救。',
      knowledgePoint: '固守待援'
    },
    {
      id: 'fire_q17',
      type: 'true_false',
      question: '火灾逃生时，越快越好，应该第一时间冲出去。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '逃生时应冷静判断，不能盲目冲出去。如果门很烫应用湿毛巾堵门缝固守待援。',
      knowledgePoint: '火灾逃生原则'
    },
    {
      id: 'fire_q18',
      type: 'sequence',
      question: '将火灾报警的正确步骤按顺序排列：',
      options: ['告知详细地址', '说清起火物质', '描述人员被困情况', '等对方挂断电话'],
      correctAnswer: [0, 1, 2, 3],
      explanation: '正确顺序：告知地址→说清起火物质→描述被困情况→等调度员挂断电话。',
      knowledgePoint: '报警流程'
    },
    {
      id: 'fire_q19',
      type: 'single_choice',
      question: '家用灭火器一般建议多久检查一次？',
      options: ['每天', '每月', '每季度', '每年'],
      correctAnswer: 1,
      explanation: '家用灭火器建议每月检查一次，确认压力表指针在绿色区域，瓶身无损坏。',
      knowledgePoint: '灭火器检查'
    },
    {
      id: 'fire_q20',
      type: 'judgment',
      question: '判断：电闸保险丝烧断后，可以用铜丝代替保险丝。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '保险丝的作用是保护电路，用铜丝代替可能引发电气火灾。必须使用规定规格的保险丝。',
      knowledgePoint: '电气安全'
    },
    {
      id: 'fire_q21',
      type: 'single_choice',
      question: '在使用取暖设备时，以下哪种行为最可能引发火灾？',
      options: ['与可燃物保持安全距离', '无人看管时开启', '使用带有保护装置的设备', '远离易燃物品'],
      correctAnswer: 1,
      explanation: '取暖设备无人看管时开启极易引发火灾。必须有人值守，离开时关闭电源。',
      knowledgePoint: '取暖安全'
    },
    {
      id: 'fire_q22',
      type: 'multiple_choice',
      question: '家庭应配备哪些消防应急器材？（多选）',
      options: ['灭火器', '防烟面罩', '逃生绳', '消防斧'],
      correctAnswer: [0, 1, 2],
      explanation: '家庭应配备灭火器、防烟面罩、逃生绳等。消防斧是消防专用器材，家庭不宜配备。',
      knowledgePoint: '家庭消防配置'
    },
    {
      id: 'fire_q23',
      type: 'single_choice',
      question: '宾馆、酒店等公共场所的逃生面罩，一般放在哪里？',
      options: ['床头柜里', '门后的衣柜里', '床头柜抽屉或挂墙上', '窗户旁边'],
      correctAnswer: 2,
      explanation: '逃生面罩通常放在床头柜抽屉或挂在墙壁上，有明显标识，方便紧急取用。',
      knowledgePoint: '公共场所设施位置'
    },
    {
      id: 'fire_q24',
      type: 'true_false',
      question: '发生火灾时，可以用窗帘布等物品制作简易逃生绳从窗户下滑逃生。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '窗帘布等物品承重力不足，可能断裂造成坠落。只有在万不得已、无其他选择时才尝试，且要确保牢固。',
      knowledgePoint: '逃生绳使用'
    },
    {
      id: 'fire_q25',
      type: 'judgment',
      question: '判断：火灾时，如果身上烧伤应立即脱掉衣物冷却伤口。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '烧伤后不应立即脱衣物，可能造成皮肤撕脱。应先用冷水冲洗后再小心处理衣物。',
      knowledgePoint: '烧伤处理'
    },
    {
      id: 'fire_q26',
      type: 'single_choice',
      question: '燃气泄漏时，正确的第一步行动是？',
      options: ['打开电灯查找泄漏点', '点火检查', '关闭燃气阀门，打开窗户通风', '在室内使用手机'],
      correctAnswer: 2,
      explanation: '燃气泄漏时应关闭阀门、开窗通风。严禁开灯或使用手机，可能引发爆炸。',
      knowledgePoint: '燃气泄漏处理'
    },
    {
      id: 'fire_q27',
      type: 'multiple_choice',
      question: '火灾烟气的主要危害包括？（多选）',
      options: ['中毒窒息', '灼伤呼吸道', '降低视线', '爆炸冲击'],
      correctAnswer: [0, 1, 2],
      explanation: '火灾烟气含有一氧化碳等有毒气体，会导致中毒窒息，高温烟气会灼伤呼吸道和眼睛。',
      knowledgePoint: '烟气危害'
    },
    {
      id: 'fire_q28',
      type: 'single_choice',
      question: '为什么不能使用普通电梯逃生？',
      options: ['电梯太慢', '电梯可能停电或故障', '电梯太小', '电梯需要排队'],
      correctAnswer: 1,
      explanation: '火灾时电梯会断电，可能困人或电梯井充满烟雾，非常危险。必须使用楼梯。',
      knowledgePoint: '电梯安全'
    },
    {
      id: 'fire_q29',
      type: 'sequence',
      question: '将火灾逃生时的关键动作按正确顺序排列：',
      options: ['用湿毛巾捂住口鼻', '弯腰低姿前进', '沿墙壁摸索找到出口', '判断出口方向'],
      correctAnswer: [3, 0, 1, 2],
      explanation: '正确顺序：判断方向→捂口鼻→弯腰低姿→沿墙摸索找到出口。',
      knowledgePoint: '逃生流程'
    },
    {
      id: 'fire_q30',
      type: 'judgment',
      question: '判断：发现楼道里有浓烟时，应该屏住呼吸快速跑过。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '屏住呼吸只能维持短时间，无法跑过整个楼道。应判断其他逃生路线或固守待援。',
      knowledgePoint: '楼道逃生'
    },
    {
      id: 'fire_q31',
      type: 'single_choice',
      question: '汽车自燃初期，正确的灭火方法是？',
      options: ['用水浇灭', '用灭火器对准发动机舱灭火', '等火势大了再灭火', '用衣物拍打'],
      correctAnswer: 1,
      explanation: '汽车自燃应使用灭火器对准发动机舱喷射。水可能损坏电路导致火势扩大。',
      knowledgePoint: '汽车自燃应对'
    },
    {
      id: 'fire_q32',
      type: 'true_false',
      question: '火灾时躲进卫生间是绝对安全的。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '卫生间不是绝对安全的选择，部分卫生间的排气管道可能助长烟气蔓延。应选择最近的安全出口。',
      knowledgePoint: '避难位置选择'
    },
    {
      id: 'fire_q33',
      type: 'multiple_choice',
      question: '哪些物品燃烧时不能用水灭火？（多选）',
      options: ['油锅着火', '电器着火', '棉被衣物', '木质家具'],
      correctAnswer: [0, 1],
      explanation: '油锅和电器着火不能用水，会造成油火飞溅或触电。应使用灭火器或覆盖灭火。',
      knowledgePoint: '灭火禁忌'
    },
    {
      id: 'fire_q34',
      type: 'single_choice',
      question: 'KTV、电影院等密闭公共场所发生火灾，正确的逃生方式是？',
      options: ['躲在原位置等待救援', '用脚踹开所有门逃跑', '用手触摸门判断温度后，沿墙壁有序撤离', '往舞台方向跑'],
      correctAnswer: 2,
      explanation: '密闭场所逃生应先用手试探门温度，未过热时可开门，沿墙有序撤离，切勿踩踏。',
      knowledgePoint: '密闭场所逃生'
    },
    {
      id: 'fire_q35',
      type: 'judgment',
      question: '判断：火灾时如果看到有人从高处跳楼求生，应该模仿。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '跳楼求生只有在万不得已时才能尝试，高楼跳下生还率极低。应固守待援或寻找其他逃生方式。',
      knowledgePoint: '跳楼危险'
    },
    {
      id: 'fire_q36',
      type: 'single_choice',
      question: '化学实验室发生火灾，错误的灭火方法是？',
      options: ['使用实验室专用灭火器', '立即撤离并报警', '用水浇灭所有化学品火灾', '按实验室紧急预案处理'],
      correctAnswer: 2,
      explanation: '某些化学品与水会发生剧烈反应，导致更大危险。应使用适合的灭火器并按紧急预案处理。',
      knowledgePoint: '化学火灾处理'
    },
    {
      id: 'fire_q37',
      type: 'multiple_choice',
      question: '火灾时发出求救信号的方式包括？（多选）',
      options: ['大声呼喊', '挥舞鲜艳物品', '用手电筒闪烁', '发朋友圈'],
      correctAnswer: [0, 1, 2],
      explanation: '被困时应大声呼喊、挥舞醒目物品或用手电筒闪烁求救。发朋友圈无法求救。',
      knowledgePoint: '被困求救'
    },
    {
      id: 'fire_q38',
      type: 'true_false',
      question: '电动车可以在楼道或室内充电，充电时间越长越好。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '电动车严禁在楼道或室内充电，充电时间过长会导致电池过热引发火灾。应在指定区域充电，充电时间不宜过长。',
      knowledgePoint: '电动车充电安全'
    }
  ],

  nodes: {
    start: {
      id: 'start',
      text: '周六晚上，你正在家中客厅沙发上看电视。突然，你闻到一股刺鼻的焦糊味，看到厨房方向有火光闪烁，浓烟开始向客厅蔓延...',
      scene: 'apartment_fire_start',
      timerConfig: {
        enabled: true,
        duration: 30,
        urgencyLevel: 'critical',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 1,
          healthChange: -15,
          knowledgeChange: 0,
          message: '犹豫不决让火势迅速扩大！'
        }
      },
      choices: [
        {
          text: '立即冲向厨房查看火情',
          nextNode: 'check_kitchen',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '快速撤离到室外并报警',
          nextNode: 'evacuate_and_call',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '先切断电源总闸',
          nextNode: 'cut_power',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '用手机拍下视频发朋友圈',
          nextNode: 'bad_delay',
          healthChange: -10,
          knowledgeChange: 0
        }
      ]
    },

    check_kitchen: {
      id: 'check_kitchen',
      text: '你冲进厨房，发现是抽油烟机着火，火势不大但烟雾很浓。油锅也在冒烟。你应该如何处理？',
      scene: 'kitchen_fire',
      showQuestion: true,
      questionId: 'fire_q1',
      timerConfig: {
        enabled: true,
        duration: 20,
        urgencyLevel: 'high',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 2,
          healthChange: -10,
          knowledgeChange: 0,
          message: '火势变大了！'
        }
      },
      choices: [
        {
          text: '用水浇灭油锅火灾',
          nextNode: 'water_oil_disaster',
          healthChange: -20,
          knowledgeChange: -5
        },
        {
          text: '用灭火器扑灭抽油烟机火',
          nextNode: 'use_fire_extinguisher',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '关闭燃气阀门，用湿毛巾覆盖',
          nextNode: 'cover_flame',
          healthChange: -5,
          knowledgeChange: 5
        },
        {
          text: '立即逃离并报警',
          nextNode: 'escape_kitchen',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    evacuate_and_call: {
      id: 'evacuate_and_call',
      text: '你迅速撤离到室外，拨打了119报警。消防队员询问了详细地址。现在你应该？',
      scene: 'outside_building',
      showQuestion: true,
      questionId: 'fire_q6',
      choices: [
        {
          text: '在路口等待消防车并指引方向',
          nextNode: 'guide_firefighters',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '返回楼内尝试自己灭火',
          nextNode: 'return_dangerous',
          healthChange: -15,
          knowledgeChange: 0
        },
        {
          text: '通知邻居一起撤离',
          nextNode: 'notify_neighbors',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    cut_power: {
      id: 'cut_power',
      text: '你找到配电箱切断了电源。厨房的烟雾变得更浓了，但电器着火的危险消除了。现在你需要？',
      scene: 'power_cut',
      choices: [
        {
          text: '尝试用灭火器灭火',
          nextNode: 'use_fire_extinguisher',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '快速撤离并报警',
          nextNode: 'escape_kitchen',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '用湿毛巾捂住口鼻继续观察',
          nextNode: 'observe_smoke',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    bad_delay: {
      id: 'bad_delay',
      text: '你忙着拍视频发朋友圈，错失了最佳逃生时机。浓烟已经蔓延到客厅，你开始感到呼吸困难...',
      scene: 'smoke_spreading',
      timerConfig: {
        enabled: true,
        duration: 15,
        urgencyLevel: 'critical',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 0,
          healthChange: -20,
          knowledgeChange: 0,
          message: '吸入过多有毒烟雾！'
        }
      },
      choices: [
        {
          text: '立即逃离到室外',
          nextNode: 'late_escape',
          healthChange: -10,
          knowledgeChange: 5
        },
        {
          text: '用湿毛巾捂住口鼻',
          nextNode: 'wet_towel_escape',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    water_oil_disaster: {
      id: 'water_oil_disaster',
      text: '你用水浇油锅的瞬间，油锅爆裂！热油飞溅到你的手臂和脸上，造成严重烫伤...',
      scene: 'oil_explosion',
      isEnding: true,
      endingType: 'lose'
    },

    use_fire_extinguisher: {
      id: 'use_fire_extinguisher',
      text: '你拿起客厅的灭火器，来到厨房门口。但面对正在燃烧的抽油烟机，你突然不记得正确的使用步骤了...',
      scene: 'extinguisher_moment',
      showQuestion: true,
      questionId: 'fire_q3',
      choices: [
        {
          text: '拔掉保险销，将喷嘴对准火焰顶部喷射',
          nextNode: 'wrong_aim',
          healthChange: -5,
          knowledgeChange: -5
        },
        {
          text: '拔掉保险销，瞄准火焰根部扫射',
          nextNode: 'correct_extinguisher',
          healthChange: 0,
          knowledgeChange: 15
        },
        {
          text: '直接压下手柄喷射',
          nextNode: 'missed_pin',
          healthChange: 0,
          knowledgeChange: -5
        }
      ]
    },

    wrong_aim: {
      id: 'wrong_aim',
      text: '你瞄准火焰顶部喷射，但火势并没有减小。灭火器粉末撒得到处都是，却无法扑灭火源。',
      scene: 'wrong_technique',
      choices: [
        {
          text: '立即逃离并报警',
          nextNode: 'escape_kitchen',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '继续尝试，从根部开始喷射',
          nextNode: 'correct_extinguisher',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    missed_pin: {
      id: 'missed_pin',
      text: '你试图直接压下手柄，但灭火器没有任何反应。你这才想起来还没拔掉保险销...',
      scene: 'forgot_pin',
      choices: [
        {
          text: '拔掉保险销后重新操作',
          nextNode: 'correct_extinguisher',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    correct_extinguisher: {
      id: 'correct_extinguisher',
      text: '你按照"拔、瞄、压、扫"的步骤操作，灭火器喷出白色干粉，火势很快被扑灭！',
      scene: 'fire_extinguished',
      showQuestion: true,
      questionId: 'fire_q7',
      choices: [
        {
          text: '确认火已完全熄灭，打开窗户通风',
          nextNode: 'success_ending',
          healthChange: 5,
          knowledgeChange: 15
        },
        {
          text: '用水浇一下确认不会再着',
          nextNode: 'water_after_extinguisher',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    cover_flame: {
      id: 'cover_flame',
      text: '你关闭燃气阀门，用湿毛巾盖住油锅。火焰渐渐熄灭，但厨房充满油烟，你需要？',
      scene: 'flame_covered',
      choices: [
        {
          text: '打开抽油烟机排出油烟',
          nextNode: 'smoke_inhalation',
          healthChange: -5,
          knowledgeChange: 0
        },
        {
          text: '打开窗户自然通风',
          nextNode: 'natural_ventilation',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '用湿毛巾捂住口鼻离开厨房',
          nextNode: 'leave_kitchen',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    escape_kitchen: {
      id: 'escape_kitchen',
      text: '你快速离开厨房，但浓烟已经扩散到整个客厅。门外的楼道也充满了烟雾...',
      scene: 'smoke_corridor',
      showQuestion: true,
      questionId: 'fire_q5',
      timerConfig: {
        enabled: true,
        duration: 20,
        urgencyLevel: 'critical',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 1,
          healthChange: -15,
          knowledgeChange: 0,
          message: '浓烟越来越浓！'
        }
      },
      choices: [
        {
          text: '直立快速跑向消防通道',
          nextNode: 'run_upright',
          healthChange: -10,
          knowledgeChange: -5
        },
        {
          text: '弯腰低姿，沿墙壁摸向消防通道',
          nextNode: 'low_escape',
          healthChange: 0,
          knowledgeChange: 15
        },
        {
          text: '躲进卫生间等待救援',
          nextNode: 'wait_bathroom',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    run_upright: {
      id: 'run_upright',
      text: '你直立快速奔跑，但浓烟让你几乎无法呼吸，眼睛也睁不开。你不得不停下脚步...',
      scene: 'smoke_overwhelm',
      choices: [
        {
          text: '趴下，继续爬行逃生',
          nextNode: 'crawl_escape',
          healthChange: -5,
          knowledgeChange: 10
        },
        {
          text: '用湿毛巾捂住口鼻尝试低姿前进',
          nextNode: 'wet_towel_escape',
          healthChange: -5,
          knowledgeChange: 10
        },
        {
          text: '强行继续奔跑',
          nextNode: 'fabric_cloth',
          healthChange: -10,
          knowledgeChange: 5
        }
      ]
    },

    low_escape: {
      id: 'low_escape',
      text: '你弯下腰，贴近地面前进。空气果然清新很多！你用手摸索着墙壁，找到了消防通道的门。',
      scene: 'corridor_found',
      showQuestion: true,
      questionId: 'fire_q2',
      choices: [
        {
          text: '推开消防通道门，用电梯快速下楼',
          nextNode: 'elevator_trap',
          healthChange: -15,
          knowledgeChange: -5
        },
        {
          text: '走楼梯下楼',
          nextNode: 'stairs_escape',
          healthChange: 0,
          knowledgeChange: 15
        }
      ]
    },

    elevator_trap: {
      id: 'elevator_trap',
      text: '电梯门打开的瞬间，你踏进去按下了1楼。但电梯刚下降就剧烈抖动，随后停止运作——停电了！你被困在电梯里...',
      scene: 'elevator_trapped',
      timerConfig: {
        enabled: true,
        duration: 30,
        urgencyLevel: 'high',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 0,
          healthChange: -5,
          knowledgeChange: 0,
          message: '电梯内空气变得有些沉闷！'
        }
      },
      choices: [
        {
          text: '保持冷静，拨打119等待救援',
          nextNode: 'wait_rescue',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '强行扒开电梯门自救',
          nextNode: 'dangerous_self_rescue',
          healthChange: -15,
          knowledgeChange: 0
        }
      ]
    },

    wait_rescue: {
      id: 'wait_rescue',
      text: '你保持冷静，用手机拨打了119报告自己的位置。消防队员很快找到了你，成功将你救出。',
      scene: 'rescued',
      isEnding: true,
      endingType: 'win'
    },

    dangerous_self_rescue: {
      id: 'dangerous_self_rescue',
      text: '你试图强行打开电梯门，不小心从缝隙坠落，身受重伤...',
      scene: 'fall_injury',
      isEnding: true,
      endingType: 'lose'
    },

    stairs_escape: {
      id: 'stairs_escape',
      text: '你沿着楼梯快速下行，每层都确认没有浓烟。途中你遇到一位老人行动不便，你选择？',
      scene: 'stairs_meet_elder',
      choices: [
        {
          text: '帮助老人一起下楼',
          nextNode: 'help_elder_escape',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '让老人慢慢走，自己先逃',
          nextNode: 'leave_elder',
          healthChange: -5,
          knowledgeChange: -5
        }
      ]
    },

    help_elder_escape: {
      id: 'help_elder_escape',
      text: '你搀扶着老人一起下楼，终于安全到达地面。消防队员对你们的撤离表示赞赏。',
      scene: 'successful_escape_with_elder',
      isEnding: true,
      endingType: 'win'
    },

    leave_elder: {
      id: 'leave_elder',
      text: '你独自快速下楼，虽然安全了，但心里一直担心那位老人的安全...',
      scene: 'guilty_escape',
      isEnding: true,
      endingType: 'lose'
    },

    crawl_escape: {
      id: 'crawl_escape',
      text: '你趴下来用手和膝盖爬行，虽然速度慢但空气更清新。你坚持爬到了消防通道门口...',
      scene: 'crawl_success',
      choices: [
        {
          text: '站起来继续跑楼梯',
          nextNode: 'stairs_escape',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    fabric_cloth: {
      id: 'fabric_cloth',
      text: '用衣物捂口鼻虽然有一定效果，但浓烟的毒性还是让你感到头晕目眩...',
      scene: 'smoke_poisoning',
      timerConfig: {
        enabled: true,
        duration: 15,
        urgencyLevel: 'critical',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 0,
          healthChange: -20,
          knowledgeChange: 0,
          message: '中毒过深！'
        }
      },
      choices: [
        {
          text: '拼命冲出去',
          nextNode: 'desperate_escape',
          healthChange: -10,
          knowledgeChange: 5
        },
        {
          text: '找到窗户呼吸新鲜空气',
          nextNode: 'window_breathing',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    desperate_escape: {
      id: 'desperate_escape',
      text: '你拼命向外冲，但终因吸入过多有毒烟雾，体力不支倒在了楼道里...',
      scene: 'collapsed',
      isEnding: true,
      endingType: 'lose'
    },

    window_breathing: {
      id: 'window_breathing',
      text: '你打开窗户呼吸到新鲜空气，状态好转。但消防队员赶到后发现你仍在屋内，非常危险！',
      scene: 'window_rescue',
      choices: [
        {
          text: '立即跟随消防队员撤离',
          nextNode: 'firefighter_rescue',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    firefighter_rescue: {
      id: 'firefighter_rescue',
      text: '在消防队员的帮助下，你安全撤离到室外。虽然经历了惊险的一晚，但你学到了很多消防知识。',
      scene: 'safe_outside',
      isEnding: true,
      endingType: 'win'
    },

    late_escape: {
      id: 'late_escape',
      text: '你挣扎着逃出房间，但已经吸入了大量有毒烟雾，到达室外时几乎昏迷...',
      scene: 'smoke_injury',
      isEnding: true,
      endingType: 'lose'
    },

    wet_towel_escape: {
      id: 'wet_towel_escape',
      text: '你用湿毛巾捂住口鼻，虽然能阻挡部分烟雾，但效果有限。你勉强逃到了楼道里...',
      scene: 'wet_towel_help',
      showQuestion: true,
      questionId: 'fire_q4',
      choices: [
        {
          text: '继续用湿毛巾低姿逃生',
          nextNode: 'low_escape',
          healthChange: -5,
          knowledgeChange: 10
        },
        {
          text: '在楼道找个房间躲避等待救援',
          nextNode: 'wait_bathroom',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    smoke_inhalation: {
      id: 'smoke_inhalation',
      text: '抽油烟机把烟雾排出，但你的喉咙和眼睛都被刺激得难受。油烟的毒性让你开始咳嗽...',
      scene: 'irritated',
      timerConfig: {
        enabled: true,
        duration: 20,
        urgencyLevel: 'normal',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 2,
          healthChange: -15,
          knowledgeChange: 0,
          message: '油烟中毒过深！'
        }
      },
      choices: [
        {
          text: '关闭抽油烟机，开窗通风',
          nextNode: 'natural_ventilation',
          healthChange: -5,
          knowledgeChange: 5
        },
        {
          text: '快速离开现场',
          nextNode: 'leave_kitchen',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '继续忍受，强行灭火',
          nextNode: 'smoke_injury_ending',
          healthChange: -20,
          knowledgeChange: -5
        }
      ]
    },

    natural_ventilation: {
      id: 'natural_ventilation',
      text: '你打开窗户让空气流通，感觉好多了。但刚才的火灾还是让你心有余悸...',
      scene: 'ventilated',
      choices: [
        {
          text: '检查厨房，确保安全',
          nextNode: 'check_kitchen_safe',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '离开房屋，等专业人员检查',
          nextNode: 'leave_and_wait',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    leave_kitchen: {
      id: 'leave_kitchen',
      text: '你离开厨房来到客厅，发现客厅的烟雾越来越浓。你需要做出决定...',
      scene: 'living_room_smoke',
      choices: [
        {
          text: '快速撤离到室外',
          nextNode: 'evacuate_and_call',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '寻找防毒面具或制作湿毛巾',
          nextNode: 'find_protection',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    find_protection: {
      id: 'find_protection',
      text: '你找到了一条毛巾，但水龙头的水流很小，只够弄湿一部分...',
      scene: 'poor_towel',
      choices: [
        {
          text: '用半湿的毛巾捂住口鼻撤离',
          nextNode: 'wet_towel_escape',
          healthChange: -5,
          knowledgeChange: 5
        },
        {
          text: '不浪费时间，直接冲出去',
          nextNode: 'direct_run',
          healthChange: -10,
          knowledgeChange: 0
        }
      ]
    },

    direct_run: {
      id: 'direct_run',
      text: '你屏住呼吸直接向外冲，但浓烟让你几乎无法呼吸，眼睛也睁不开...',
      scene: 'smoke_challenge',
      choices: [
        {
          text: '趴下爬行',
          nextNode: 'crawl_escape',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    wait_bathroom: {
      id: 'wait_bathroom',
      text: '你躲进卫生间关上门，用湿毛巾堵住门缝。但卫生间的空间越来越闷热...',
      scene: 'bathroom_hiding',
      timerConfig: {
        enabled: true,
        duration: 60,
        urgencyLevel: 'high',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 0,
          healthChange: -10,
          knowledgeChange: 0,
          message: '等待时间过长！'
        }
      },
      choices: [
        {
          text: '继续等待救援，不要浪费体力',
          nextNode: 'wait_more',
          healthChange: -5,
          knowledgeChange: 5
        },
        {
          text: '打开窗户呼救',
          nextNode: 'window_help',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '冒险冲出去寻找逃生通道',
          nextNode: 'risk_escape',
          healthChange: -10,
          knowledgeChange: 5
        }
      ]
    },

    wait_more: {
      id: 'wait_more',
      text: '你继续在卫生间等待，但氧气越来越稀薄，意识开始模糊...',
      scene: 'oxygen_low',
      isEnding: true,
      endingType: 'lose'
    },

    window_help: {
      id: 'window_help',
      text: '你打开窗户大声呼救，楼下的人发现了你并报了警。消防队员很快赶到将你救出。',
      scene: 'window_rescue',
      isEnding: true,
      endingType: 'win'
    },

    risk_escape: {
      id: 'risk_escape',
      text: '你冒险冲出卫生间，在浓烟中摸索前进。幸运的是你摸到了一扇门...',
      scene: 'found_door',
      choices: [
        {
          text: '推开这扇门',
          nextNode: 'low_escape',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    guide_firefighters: {
      id: 'guide_firefighters',
      text: '你准确地向消防队员描述了火灾位置和情况，并带领他们找到了最近的消防栓。专业的引导让灭火工作进展顺利。',
      scene: 'professional_guided',
      isEnding: true,
      endingType: 'win'
    },

    notify_neighbors: {
      id: 'notify_neighbors',
      text: '你大声敲邻居的门，提醒他们火灾情况。邻居们纷纷撤离，对你的及时提醒表示感激。',
      scene: 'neighbors_saved',
      isEnding: true,
      endingType: 'win'
    },

    return_dangerous: {
      id: 'return_dangerous',
      text: '你试图返回屋内灭火，但浓烟让你瞬间迷失了方向。消防队员及时赶到将你救出，但你已经受了重伤...',
      scene: 'return_injury',
      isEnding: true,
      endingType: 'lose'
    },

    observe_smoke: {
      id: 'observe_smoke',
      text: '你用湿毛巾捂住口鼻观察情况，但烟雾越来越大，你不得不做出最终决定...',
      scene: 'smoke_decision',
      choices: [
        {
          text: '立即撤离',
          nextNode: 'escape_kitchen',
          healthChange: -5,
          knowledgeChange: 5
        },
        {
          text: '尝试灭火',
          nextNode: 'use_fire_extinguisher',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    water_after_extinguisher: {
      id: 'water_after_extinguisher',
      text: '你用水浇了一下，瞬间产生大量蒸汽，差点烫伤自己！',
      scene: 'steam_burn',
      choices: [
        {
          text: '立即离开厨房',
          nextNode: 'escape_kitchen',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    smoke_injury_ending: {
      id: 'smoke_injury_ending',
      text: '虽然逃出来了，但你因吸入大量有毒烟雾造成肺部损伤，需要住院治疗...',
      scene: 'hospital_treatment',
      isEnding: true,
      endingType: 'lose'
    },

    success_ending: {
      id: 'success_ending',
      text: '你打开窗户通风，并检查确认没有复燃迹象。这次经历让你意识到学好消防知识的重要性。你成功化解了危机！',
      scene: 'fire_prevention_success',
      isEnding: true,
      endingType: 'win'
    },

    check_kitchen_safe: {
      id: 'check_kitchen_safe',
      text: '你小心翼翼地检查了厨房，确认火源已经完全熄灭，燃气阀门也已关闭。危机解除！',
      scene: 'kitchen_safe',
      isEnding: true,
      endingType: 'win'
    },

    leave_and_wait: {
      id: 'leave_and_wait',
      text: '你离开房屋在室外等待，拨打了物业电话。专业人员检查确认安全后，你才回到家中。',
      scene: 'professional_check',
      isEnding: true,
      endingType: 'win'
    }
  },

  metadata: {
    title: '火灾逃生篇',
    endingTitle: '逃生',
    intro: '学习火灾发生时的正确逃生方法，掌握灭火器使用、浓烟避险等知识',

    achievements: [
      {
        id: 'fire_master',
        name: '消防达人',
        icon: '🚒',
        type: 'gold',
        condition: (state) => state.endingRating === '完美通关'
      },
      {
        id: 'quick_thinker',
        name: '快速反应',
        icon: '⚡',
        type: 'blue',
        condition: (state) => state.knowledgePoints >= 70
      },
      {
        id: 'helper',
        name: '热心助人',
        icon: '🤝',
        type: 'green',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'help_elder_escape' || c.nodeId === 'notify_neighbors')
      },
      {
        id: 'firefighter_trained',
        name: '灭火专家',
        icon: '🧯',
        type: 'red',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'correct_extinguisher')
      }
    ],

    tips: [
      {
        id: 'tip1',
        icon: '🚨',
        title: '火灾报警',
        description: '发现火灾后第一时间拨打119，说明详细地址、起火物质和人员被困情况。',
        relevantWhen: ['evacuate_and_call', 'guide_firefighters']
      },
      {
        id: 'tip2',
        icon: '🧯',
        title: '灭火器使用',
        description: '牢记"拔、瞄、压、扫"四步法：拔掉保险销、瞄准火焰根部、压下手柄、左右扫射。',
        relevantWhen: ['use_fire_extinguisher', 'correct_extinguisher']
      },
      {
        id: 'tip3',
        icon: '💨',
        title: '浓烟避险',
        description: '用湿毛巾捂住口鼻，弯腰低姿沿墙壁前进，逃离浓烟区域。',
        relevantWhen: ['escape_kitchen', 'low_escape', 'wet_towel_escape']
      },
      {
        id: 'tip4',
        icon: '🚫',
        title: '禁止乘电梯',
        description: '发生火灾时严禁乘坐电梯，必须使用楼梯逃生。',
        relevantWhen: ['elevator_trap', 'low_escape']
      },
      {
        id: 'tip5',
        icon: '🛁',
        title: '身上着火',
        description: '身上衣物着火时可就地打滚压灭火焰，切勿奔跑以免火势扩大。',
        relevantWhen: ['smoke_spreading', 'bad_delay']
      },
      {
        id: 'tip6',
        icon: '🚪',
        title: '固守待援',
        description: '如果无法逃生，可躲进有窗户的房间，用湿毛巾堵住门缝，打开窗户呼救。',
        relevantWhen: ['wait_bathroom', 'window_help']
      }
    ]
  }
}

export default fireScenario
