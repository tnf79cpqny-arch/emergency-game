const firstAidScenario = {
  id: 'firstAid',
  name: '急救知识',

  questions: [
    {
      id: 'fa_q1',
      type: 'single_choice',
      question: '发现有人晕倒无呼吸无脉搏，应该首先做什么？',
      options: ['掐人中', '进行心肺复苏(CPR)', '喂水', '移动伤者'],
      correctAnswer: 1,
      explanation: '发现有人心脏骤停时，应立即进行心肺复苏(CPR)，每分钟100-120次胸外按压。',
      knowledgePoint: '心脏骤停急救'
    },
    {
      id: 'fa_q2',
      type: 'single_choice',
      question: 'CPR胸外按压的正确位置是哪里？',
      options: ['心口正中', '两乳头连线中点', '腹部', '左胸'],
      correctAnswer: 1,
      explanation: '胸外按压的正确位置是两乳头连线中点的胸骨处。',
      knowledgePoint: 'CPR按压位置'
    },
    {
      id: 'fa_q3',
      type: 'single_choice',
      question: 'CPR按压频率应该是多少？',
      options: ['60-80次/分钟', '80-100次/分钟', '100-120次/分钟', '越快越好'],
      correctAnswer: 2,
      explanation: 'CPR按压频率应为100-120次/分钟，过快或过慢都会影响效果。',
      knowledgePoint: 'CPR按压频率'
    },
    {
      id: 'fa_q4',
      type: 'single_choice',
      question: '成人CPR按压深度应该是多少？',
      options: ['至少5厘米', '至少3厘米', '越深越好', '2-3厘米'],
      correctAnswer: 0,
      explanation: '成人CPR按压深度至少5厘米，但不超过6厘米。',
      knowledgePoint: 'CPR按压深度'
    },
    {
      id: 'fa_q5',
      type: 'true_false',
      question: '进行心肺复苏时，不需要确认周围环境安全。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '进行急救前必须确认现场安全，避免造成二次伤害。',
      knowledgePoint: '急救安全确认'
    },
    {
      id: 'fa_q6',
      type: 'single_choice',
      question: 'AED到达后，应该首先做什么？',
      options: ['立即电击', '打开电源粘贴电极片', '继续CPR', '测量血压'],
      correctAnswer: 1,
      explanation: 'AED到达后，首先打开电源，然后按提示粘贴电极片。',
      knowledgePoint: 'AED使用流程'
    },
    {
      id: 'fa_q7',
      type: 'multiple_choice',
      question: '使用AED时，以下哪些情况需要注意？（多选）',
      options: ['确保无人触碰患者', '电极片贴在裸露皮肤上', '避开起搏器位置', '可以贴在衣服上'],
      correctAnswer: [0, 1, 2],
      explanation: '使用AED时要确保无人触碰，电极片需贴在裸露皮肤上，避开起搏器等植入设备。',
      knowledgePoint: 'AED使用注意事项'
    },
    {
      id: 'fa_q8',
      type: 'single_choice',
      question: '被烫伤后，应该怎么做？',
      options: ['用冰块直接敷', '涂抹牙膏', '用冷水冲洗20分钟', '弄破水泡'],
      correctAnswer: 2,
      explanation: '烫伤后应用流动冷水冲洗至少20分钟，不要冰敷、涂牙膏或弄破水泡。',
      knowledgePoint: '烫伤处理'
    },
    {
      id: 'fa_q9',
      type: 'single_choice',
      question: '有人出血不止，应该怎么做？',
      options: ['让血流出来', '用绷带加压包扎', '用水冲', '不包扎'],
      correctAnswer: 1,
      explanation: '出血应立即用干净纱布加压包扎止血，同时抬高伤处。',
      knowledgePoint: '止血处理'
    },
    {
      id: 'fa_q10',
      type: 'judgment',
      question: '判断：发现有人晕倒，应该立即将其扶起坐好。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '不明原因晕倒时不要轻易移动患者，以免造成脊髓等二次损伤。应先评估情况再处理。',
      knowledgePoint: '晕倒处理'
    },
    {
      id: 'fa_q11',
      type: 'single_choice',
      question: '七步洗手法正确的顺序是什么？',
      options: ['内外夹弓大立腕', '内外夹弓立大腕', '外内夹弓大立腕', '内外夹大弓立腕'],
      correctAnswer: 0,
      explanation: '七步洗手法口诀：内、外、夹、弓、大、立、腕。',
      knowledgePoint: '正确洗手方法'
    },
    {
      id: 'fa_q12',
      type: 'single_choice',
      question: '气道异物梗阻时，正确的急救方法是？',
      options: ['喝水吞下', '背部叩击+腹部冲击', '拍背让对方吐出来', '等自然缓解'],
      correctAnswer: 1,
      explanation: '气道异物梗阻应使用海姆立克急救法：先背部叩击，无效时进行腹部冲击。',
      knowledgePoint: '气道异物急救'
    },
    {
      id: 'fa_q13',
      type: 'single_choice',
      question: '成人CPR中，按压与通气的比例是？',
      options: ['15:2', '30:2', '15:1', '30:1'],
      correctAnswer: 1,
      explanation: '成人CPR的标准比例是30:2，即30次按压后进行2次人工呼吸。',
      knowledgePoint: 'CPR按压通气比'
    },
    {
      id: 'fa_q14',
      type: 'true_false',
      question: 'AED分析心律时，救援人员应继续进行胸外按压。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: 'AED分析心律和放电时，所有人必须离开患者身体，否则会干扰分析或造成触电。',
      knowledgePoint: 'AED使用安全'
    },
    {
      id: 'fa_q15',
      type: 'single_choice',
      question: '海姆立克急救法（腹部冲击）的正确位置是？',
      options: ['肚脐上方', '胸口正中', '肚脐下方', '背部'],
      correctAnswer: 0,
      explanation: '海姆立克急救法应冲击患者肚脐上方、剑突下方的腹部，一手握拳另一手握住拳头向内向上用力。',
      knowledgePoint: '海姆立克位置'
    },
    {
      id: 'fa_q16',
      type: 'multiple_choice',
      question: '烧烫伤后正确的急救措施包括？（多选）',
      options: ['用冷水持续冲洗', '涂抹酱油或牙膏', '剪开伤处的衣物', '用干净纱布覆盖'],
      correctAnswer: [0, 2, 3],
      explanation: '烧烫伤后应冷水冲洗、剪开衣物、覆盖干净纱布。不要涂酱油、牙膏等物品。',
      knowledgePoint: '烧烫伤急救'
    },
    {
      id: 'fa_q17',
      type: 'single_choice',
      question: '发现有人中暑，错误的急救方法是？',
      options: ['移到阴凉处', '大量饮用白开水', '用冰水擦拭身体', '解开衣物散热'],
      correctAnswer: 1,
      explanation: '中暑时应补充含盐分的饮料，白开水不能补充流失的电解质，大量饮用可能加重症状。',
      knowledgePoint: '中暑急救'
    },
    {
      id: 'fa_q18',
      type: 'judgment',
      question: '判断：对于骨折伤员，应尽快将其扶到舒适的位置。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '骨折伤员不应轻易移动，可能造成二次伤害。应等待专业救援或进行简易固定后再转移。',
      knowledgePoint: '骨折处理'
    },
    {
      id: 'fa_q19',
      type: 'single_choice',
      question: '被毒蛇咬伤后，错误的急救方法是？',
      options: ['保持冷静，减少活动', '用清水冲洗伤口', '用嘴吸出毒液', '尽快就医'],
      correctAnswer: 2,
      explanation: '用嘴吸出毒液不仅无效，还可能造成吸入口腔黏膜的人中毒。应保持冷静、冲洗伤口、尽快就医。',
      knowledgePoint: '蛇咬伤处理'
    },
    {
      id: 'fa_q20',
      type: 'multiple_choice',
      question: '有人触电倒地，正确的急救步骤包括？（多选）',
      options: ['立即切断电源', '用木棒将伤者与电源分离', '立即进行胸外按压', '用水泼洒伤者'],
      correctAnswer: [0, 1, 2],
      explanation: '触电急救应先切断电源，用绝缘物分离伤者与电源，然后检查呼吸进行CPR。用水泼洒可能造成触电。',
      knowledgePoint: '触电急救'
    },
    {
      id: 'fa_q21',
      type: 'single_choice',
      question: '进行伤口包扎时，松紧度应该是？',
      options: ['越紧越好', '松紧要适中', '越松越好', '不需要包扎'],
      correctAnswer: 1,
      explanation: '包扎过紧会阻断血液循环，过松无法有效止血。应松紧适中，以能插入一指为宜。',
      knowledgePoint: '包扎松紧度'
    },
    {
      id: 'fa_q22',
      type: 'true_false',
      question: '鼻出血时，应该仰头并捏住鼻翼止血。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '鼻出血应低头向前倾，捏住鼻翼止血。仰头会使血液流入喉咙引起呛咳。',
      knowledgePoint: '鼻出血处理'
    },
    {
      id: 'fa_q23',
      type: 'single_choice',
      question: '发现有人癫痫发作，错误的做法是？',
      options: ['清理周围的危险物品', '在患者口中放东西防止咬舌', '将患者侧卧', '记录发作时间'],
      correctAnswer: 1,
      explanation: '癫痫发作时不要在口中放东西，可能造成窒息或牙齿损伤。应侧卧保持呼吸道通畅。',
      knowledgePoint: '癫痫急救'
    },
    {
      id: 'fa_q24',
      type: 'multiple_choice',
      question: '化学物质入眼的急救措施包括？（多选）',
      options: ['用大量清水冲洗', '揉搓眼睛', '覆盖眼部', '尽快就医'],
      correctAnswer: [0, 2, 3],
      explanation: '化学物质入眼应立即用大量清水冲洗至少15分钟，不要揉搓，用干净纱布覆盖后尽快就医。',
      knowledgePoint: '眼外伤急救'
    },
    {
      id: 'fa_q25',
      type: 'single_choice',
      question: '对于低血糖昏迷的患者，正确的急救方法是？',
      options: ['喂食糖果或含糖饮料', '强行喂水', '让患者继续睡觉', '注射胰岛素'],
      correctAnswer: 0,
      explanation: '低血糖患者意识清醒时可喂食糖果、果汁等含糖食物。如果昏迷，不要强行喂食。',
      knowledgePoint: '低血糖处理'
    },
    {
      id: 'fa_q26',
      type: 'judgment',
      question: '判断：伤口消毒时，酒精浓度越高消毒效果越好。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '75%的酒精消毒效果最好，浓度过高会在伤口表面形成保护膜，反而影响消毒效果。',
      knowledgePoint: '消毒知识'
    },
    {
      id: 'fa_q27',
      type: 'single_choice',
      question: '关节扭伤后，正确的处理方法是？',
      options: ['立即热敷', '按摩揉搓', '冰敷并加压包扎', '继续活动'],
      correctAnswer: 2,
      explanation: '关节扭伤后应立即冰敷、抬高患肢、加压包扎，以减少肿胀和疼痛。24小时后再热敷。',
      knowledgePoint: '扭伤处理'
    },
    {
      id: 'fa_q28',
      type: 'multiple_choice',
      question: '怀疑颈椎或脊柱受伤的患者，搬运时应注意什么？（多选）',
      options: ['使用硬板担架', '保持脊柱成一直线', '整体翻转患者', '由多人抬起头脚'],
      correctAnswer: [0, 1, 2],
      explanation: '脊柱损伤患者应使用硬板担架，保持脊柱成一直线整体移动，避免造成二次伤害。',
      knowledgePoint: '脊柱损伤搬运'
    },
    {
      id: 'fa_q29',
      type: 'single_choice',
      question: '蜜蜂蜇伤后，错误的处理方法是？',
      options: ['用卡片刮出毒刺', '用肥皂水清洗', '用嘴吸出毒液', '冷敷蜇伤部位'],
      correctAnswer: 2,
      explanation: '蜜蜂蜇伤应用卡片刮出毒刺，肥皂水清洗，冷敷缓解疼痛。不要用嘴吸，会造成口腔感染。',
      knowledgePoint: '虫咬伤处理'
    },
    {
      id: 'fa_q30',
      type: 'true_false',
      question: '伤员有明显的活动性出血时，应立即止血后再检查其他伤情。',
      options: ['正确', '错误'],
      correctAnswer: 0,
      explanation: '出血会危及生命，应立即止血后再进行其他急救处理。',
      knowledgePoint: '急救优先级'
    },
    {
      id: 'fa_q31',
      type: 'single_choice',
      question: '淹溺急救时，首先应该做什么？',
      options: ['立即倒出呼吸道积水', '进行胸外按压', '确认现场安全和患者意识', '进行人工呼吸'],
      correctAnswer: 2,
      explanation: '任何急救首先要确认现场安全，然后评估患者意识状态，再进行相应急救。',
      knowledgePoint: '淹溺急救步骤'
    },
    {
      id: 'fa_q32',
      type: 'multiple_choice',
      question: '使用止血带止血时的注意事项包括？（多选）',
      options: ['标注止血带使用时间', '每隔1小时放松一次', '越紧越好', '尽快送医'],
      correctAnswer: [0, 3],
      explanation: '止血带应记录使用时间，每隔1小时放松片刻，避免肢体缺血坏死。不宜过紧。',
      knowledgePoint: '止血带使用'
    },
    {
      id: 'fa_q33',
      type: 'single_choice',
      question: '一岁以下婴儿发生气道异物梗阻，正确的急救方法是？',
      options: ['海姆立克腹部冲击', '拍背和胸部冲击', '让婴儿喝水', '倒提双脚抖出异物'],
      correctAnswer: 1,
      explanation: '婴儿应采用拍背和胸部冲击法，冲击部位在两乳头连线中点下方，避免损伤内脏。',
      knowledgePoint: '婴儿气道异物'
    },
    {
      id: 'fa_q34',
      type: 'judgment',
      question: '判断：伤口在包扎后如果不再渗血，就不需要再换药。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '伤口需要定期换药以观察愈合情况，即使表面结痂，内部也可能存在感染。',
      knowledgePoint: '伤口护理'
    },
    {
      id: 'fa_q35',
      type: 'single_choice',
      question: '发现有人急性心肌梗死，错误的急救措施是？',
      options: ['让患者保持安静', '尽快服用硝酸甘油', '立即进行心肺复苏', '拨打120急救'],
      correctAnswer: 2,
      explanation: '心肌梗死患者如果有呼吸心跳，不应进行胸外按压。应保持安静、服用硝酸甘油、拨打120。',
      knowledgePoint: '心梗急救'
    },
    {
      id: 'fa_q36',
      type: 'multiple_choice',
      question: '冻伤后的急救措施包括？（多选）',
      options: ['将冻伤部位放入温水复温', '不要揉搓冻伤部位', '用火烤或热水烫', '尽快转移到温暖环境'],
      correctAnswer: [1, 3],
      explanation: '冻伤应逐渐复温，不要揉搓，也不要直接用火或热水烫，以免造成烫伤。',
      knowledgePoint: '冻伤处理'
    },
    {
      id: 'fa_q37',
      type: 'single_choice',
      question: '昆虫飞入耳道，正确的处理方法是？',
      options: ['用手指挖出', '用手电筒照射引诱', '倒入食用油', '用力拍打头部'],
      correctAnswer: 1,
      explanation: '可用手电筒照射耳道，利用昆虫的趋光性将其引诱出来。不要用手或工具挖取。',
      knowledgePoint: '耳道异物处理'
    },
    {
      id: 'fa_q38',
      type: 'true_false',
      question: '现场急救时，只要伤员说没事就不需要再检查了。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '有些伤情表面不明显但实际很严重，如内脏出血、骨折等。现场应全面检查，密切观察。',
      knowledgePoint: '急救检查原则'
    }
  ],

  nodes: {
    start: {
      id: 'start',
      text: '周末下午，你正在公园散步时，突然看到前方有人群聚集。你走近一看——一位老人倒在地上，面色苍白，周围的人都在焦急地观望，却不知如何是好...',
      scene: 'park_elder_collapse',
      choices: [
        {
          text: '立刻上前查看情况',
          nextNode: 'check_victim',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '先打120急救电话',
          nextNode: 'call_120_first',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '围观看看情况',
          nextNode: 'stand_watching',
          healthChange: -5,
          knowledgeChange: 0
        }
      ]
    },

    check_victim: {
      id: 'check_victim',
      text: '你快步上前，轻拍老人肩膀并呼唤："先生，您还好吗？"老人没有反应。你观察他的胸口，发现没有起伏，嘴唇发紫...',
      scene: 'checking_victim',
      showQuestion: true,
      questionId: 'fa_q1',
      choices: [
        {
          text: '立即进行心肺复苏',
          nextNode: 'start_cpr',
          healthChange: 5,
          knowledgeChange: 15
        },
        {
          text: '先把老人扶起来',
          nextNode: 'lift_victim',
          healthChange: -10,
          knowledgeChange: 0
        },
        {
          text: '掐老人人中',
          nextNode: 'pinch_renshen',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    call_120_first: {
      id: 'call_120_first',
      text: '你拨通了120急救电话，简明报告了地点和情况。调度员告诉你救护车需要15分钟到达，并指导你检查老人呼吸和意识...',
      scene: 'calling_120',
      showQuestion: true,
      questionId: 'fa_q5',
      choices: [
        {
          text: '按照指导检查意识并开始急救',
          nextNode: 'follow_dispatch_guidance',
          healthChange: 5,
          knowledgeChange: 15
        },
        {
          text: '等待120到来',
          nextNode: 'wait_for_120',
          healthChange: -15,
          knowledgeChange: 0
        }
      ]
    },

    stand_watching: {
      id: 'stand_watching',
      text: '你站在人群中观望。但看着老人越来越差的脸色，你意识到不能再等下去了...',
      scene: 'watching_worsening',
      choices: [
        {
          text: '冲上前进行急救',
          nextNode: 'check_victim',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '继续等待专业救援',
          nextNode: 'bad_ending_wait',
          healthChange: -20,
          knowledgeChange: 0
        }
      ]
    },

    lift_victim: {
      id: 'lift_victim',
      text: '你和周围的人一起把老人扶起来靠坐在长椅上。但老人的脸色越来越差，出现了呕吐现象...',
      scene: 'elder_worsening',
      choices: [
        {
          text: '让老人侧卧，防止窒息',
          nextNode: 'recovery_position',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '继续扶着他等待救援',
          nextNode: 'wait_for_120',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    pinch_renshen: {
      id: 'pinch_renshen',
      text: '你用力掐老人的人中，但老人依然没有反应。你意识到这不是普通的晕厥...',
      scene: 'pinching_no_effect',
      choices: [
        {
          text: '立即进行心肺复苏',
          nextNode: 'start_cpr',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '继续尝试其他方法',
          nextNode: 'bad_ending_delay',
          healthChange: -15,
          knowledgeChange: 0
        }
      ]
    },

    follow_dispatch_guidance: {
      id: 'follow_dispatch_guidance',
      text: '你按照120调度员的指导，轻拍老人双肩呼叫，确认无反应后检查呼吸。老人确实没有呼吸，需要立即进行心肺复苏。',
      scene: 'following_instructions',
      showQuestion: true,
      questionId: 'fa_q2',
      choices: [
        {
          text: '开始进行胸外按压',
          nextNode: 'start_cpr',
          healthChange: 5,
          knowledgeChange: 15
        }
      ]
    },

    wait_for_120: {
      id: 'wait_for_120',
      text: '你守着老人等待120到来。但时间一分一秒过去，老人的呼吸越来越微弱，脸色越来越青...',
      scene: 'waiting_deteriorating',
      showQuestion: true,
      questionId: 'fa_q3',
      choices: [
        {
          text: '不能再等了，立即开始CPR',
          nextNode: 'start_cpr',
          healthChange: -5,
          knowledgeChange: 10
        }
      ]
    },

    recovery_position: {
      id: 'recovery_position',
      text: '你将老人侧卧，防止呕吐物窒息。但老人的心跳越来越弱...',
      scene: 'recovery_position_scene',
      choices: [
        {
          text: '呼叫120并开始心肺复苏',
          nextNode: 'start_cpr',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '继续观察等待',
          nextNode: 'bad_ending_wait',
          healthChange: -15,
          knowledgeChange: 0
        }
      ]
    },

    start_cpr: {
      id: 'start_cpr',
      text: '你将老人平放在地上，解开他的上衣。现在进入心肺复苏模拟环节，请按照指导进行操作...',
      scene: 'cpr_in_progress',
      simulationType: 'cpr',
      simulationConfig: {
        bpmTarget: 110,
        compressionCount: 30,
        requiredAccuracy: 0.75
      },
      choices: [
        {
          text: '完成CPR模拟',
          nextNode: 'continue_compressions',
          healthChange: 0,
          knowledgeChange: 0
        }
      ]
    },

    continue_compressions: {
      id: 'continue_compressions',
      text: '你继续进行30次胸外按压。现在需要继续进行2分钟的心肺复苏（约5个循环）...',
      scene: 'cpr_continue',
      simulationType: 'cpr',
      simulationConfig: {
        bpmTarget: 110,
        compressionCount: 30,
        requiredAccuracy: 0.7
      },
      choices: [
        {
          text: '完成CPR模拟',
          nextNode: 'cpr_complete',
          healthChange: 0,
          knowledgeChange: 0
        }
      ]
    },

    cpr_complete: {
      id: 'cpr_complete',
      text: '你持续进行了高质量的心肺复苏。老人开始有了微弱的呼吸！120急救人员也赶到了，立即使用AED进行除颤...',
      scene: 'aed_arrives',
      simulationType: 'aed',
      simulationConfig: {
        autoProgress: true
      },
      choices: [
        {
          text: '协助进行AED除颤',
          nextNode: 'aed_simulation',
          healthChange: 0,
          knowledgeChange: 0
        }
      ]
    },

    aed_simulation: {
      id: 'aed_simulation',
      text: '120急救人员赶到，立即使用AED进行除颤。现在进入AED模拟操作环节，请按照指导进行...',
      scene: 'aed_in_progress',
      simulationType: 'aed',
      simulationConfig: {
        autoProgress: true
      },
      choices: [
        {
          text: '协助进行AED除颤',
          nextNode: 'successful_rescue',
          healthChange: 0,
          knowledgeChange: 0
        }
      ]
    },

    successful_rescue: {
      id: 'successful_rescue',
      text: '在急救人员的抢救下，老人终于恢复了心跳！他们称赞你在黄金4分钟内的急救非常及时有效。',
      scene: 'elder_saved',
      isEnding: true,
      endingType: 'win'
    },

    bad_ending_wait: {
      id: 'bad_ending_wait',
      text: '由于错过了最佳抢救时机，老人最终没能抢救过来...',
      scene: 'elder_lost',
      isEnding: true,
      endingType: 'lose'
    },

    bad_ending_delay: {
      id: 'bad_ending_delay',
      text: '你继续尝试其他方法，但宝贵的抢救时间已经流失。当120到达时，老人已经没有了生命体征...',
      scene: 'elder_lost_delay',
      isEnding: true,
      endingType: 'lose'
    },

    // 烫伤场景分支
    kitchen_start: {
      id: 'kitchen_start',
      text: '你在家做饭时，不小心打翻了刚烧开的热水壶。滚烫的热水溅到了你的手臂上，皮肤立刻红肿起来，疼痛难忍...',
      scene: 'kitchen_burn',
      choices: [
        {
          text: '立即用冷水冲洗',
          nextNode: 'cold_water_burn',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '涂抹牙膏',
          nextNode: 'toothpaste_burn',
          healthChange: -5,
          knowledgeChange: 0
        },
        {
          text: '用冰块敷',
          nextNode: 'ice_burn',
          healthChange: -10,
          knowledgeChange: 0
        }
      ]
    },

    cold_water_burn: {
      id: 'cold_water_burn',
      text: '你打开水龙头，让冷水持续冲洗烫伤部位。冰凉的触感让疼痛缓解了不少...',
      scene: 'running_water_burn',
      showQuestion: true,
      questionId: 'fa_q8',
      choices: [
        {
          text: '继续冲洗20分钟以上',
          nextNode: 'proper_burn_treatment',
          healthChange: 5,
          knowledgeChange: 15
        },
        {
          text: '冲洗1分钟就停下来',
          nextNode: 'insufficient_cooling',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    proper_burn_treatment: {
      id: 'proper_burn_treatment',
      text: '你持续用冷水冲洗了20分钟，疼痛明显减轻。之后你用干净的纱布轻轻擦干，涂上了烫伤膏。',
      scene: 'proper_treatment',
      choices: [
        {
          text: '用纱布轻轻包扎',
          nextNode: 'burn_treated',
          healthChange: 5,
          knowledgeChange: 10
        }
      ]
    },

    burn_treated: {
      id: 'burn_treated',
      text: '你用干净的纱布轻轻包扎了烫伤处，并决定之后去医院进一步检查处理。处理得当，恢复良好！',
      scene: 'burn_recovery',
      isEnding: true,
      endingType: 'win'
    },

    insufficient_cooling: {
      id: 'insufficient_cooling',
      text: '你只冲洗了一分钟就停了，但烫伤处还是很疼，水泡也越来越大...',
      scene: 'blistering_burn',
      choices: [
        {
          text: '继续用冷水冲洗',
          nextNode: 'proper_burn_treatment',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    toothpaste_burn: {
      id: 'toothpaste_burn',
      text: '你涂抹了牙膏，但很快发现牙膏干燥后反而更难清洗，而且烫伤处开始起泡...',
      scene: 'toothpaste_worse',
      choices: [
        {
          text: '用冷水冲洗干净',
          nextNode: 'cold_water_burn',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    ice_burn: {
      id: 'ice_burn',
      text: '你用冰块直接敷在烫伤处，但冰块的低温反而造成了冻伤，皮肤变成了青紫色...',
      scene: 'ice_injury',
      choices: [
        {
          text: '立刻停止，用冷水冲洗',
          nextNode: 'cold_water_burn',
          healthChange: -10,
          knowledgeChange: 5
        }
      ]
    },

    // 出血场景
    outdoor_start: {
      id: 'outdoor_start',
      text: '周末你去郊外骑车，不慎在转弯时摔倒。膝盖和手掌都被粗糙的地面擦破，鲜血不断渗出...',
      scene: 'bike_fall',
      choices: [
        {
          text: '用干净的布加压止血',
          nextNode: 'pressure_bleeding',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '用溪水清洗伤口',
          nextNode: 'stream_water_wound',
          healthChange: -5,
          knowledgeChange: 5
        },
        {
          text: '不处理，等它自己止血',
          nextNode: 'wait_bleeding',
          healthChange: -10,
          knowledgeChange: 0
        }
      ]
    },

    pressure_bleeding: {
      id: 'pressure_bleeding',
      text: '你用一块干净的手帕折叠后压在伤口上，持续加压。血渗的速度渐渐慢了下来...',
      scene: 'pressure_bleeding_scene',
      showQuestion: true,
      questionId: 'fa_q9',
      choices: [
        {
          text: '持续加压10分钟后包扎',
          nextNode: 'continue_pressure',
          healthChange: 5,
          knowledgeChange: 15
        },
        {
          text: '压一下就拿开看看',
          nextNode: 'check_wound',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    continue_pressure: {
      id: 'continue_pressure',
      text: '你持续加压10分钟后，伤口出血已经基本停止。你用绷带轻轻包扎，并决定前往医院打破伤风针。',
      scene: 'wound_dressed',
      isEnding: true,
      endingType: 'win'
    },

    check_wound: {
      id: 'check_wound',
      text: '你反复拿开布料查看，导致刚刚形成的血痂被破坏，出血又加重了...',
      scene: 'disturbed_clot',
      choices: [
        {
          text: '持续加压不再查看',
          nextNode: 'continue_pressure',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    stream_water_wound: {
      id: 'stream_water_wound',
      text: '你用溪水清洗了伤口，但很快发现伤口开始发炎红肿——溪水并不干净！',
      scene: 'infected_wound',
      choices: [
        {
          text: '用干净的布加压止血后去医院',
          nextNode: 'hospital_treatment',
          healthChange: -5,
          knowledgeChange: 10
        }
      ]
    },

    hospital_treatment: {
      id: 'hospital_treatment',
      text: '你用干净的手帕加压止血，然后前往医院。医生处理了伤口并打了破伤风针。',
      scene: 'hospital_scene',
      isEnding: true,
      endingType: 'win'
    },

    wait_bleeding: {
      id: 'wait_bleeding',
      text: '你任由伤口流血不止。但血一直没有止住，你感到越来越头晕...',
      scene: 'bleeding_uncontrolled',
      choices: [
        {
          text: '赶紧加压止血',
          nextNode: 'pressure_bleeding',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    }
  },

  metadata: {
    title: '急救知识篇',
    endingTitle: '急救',
    intro: '学习日常急救技能，包括心肺复苏、止血包扎、烫伤处理等',

    achievements: [
      {
        id: 'perfect',
        name: '急救高手',
        icon: '🏆',
        type: 'gold',
        condition: (state) => state.endingRating === '完美通关'
      },
      {
        id: 'scholar',
        name: '急救专家',
        icon: '📚',
        type: 'blue',
        condition: (state) => state.knowledgePoints >= 80
      },
      {
        id: 'cpr_hero',
        name: 'CPR英雄',
        icon: '❤️',
        type: 'red',
        condition: (state) => {
          return state.choicesMade.some(c => c.nodeId === 'start_cpr' || c.nodeId === 'continue_compressions')
        }
      },
      {
        id: 'composed',
        name: '沉着冷静',
        icon: '🧘',
        type: 'green',
        condition: (state) => {
          return state.choicesMade.some(c => c.nodeId === 'call_120_first')
        }
      },
      {
        id: 'helper',
        name: '热心救人',
        icon: '🤝',
        type: 'orange',
        condition: (state) => {
          return state.choicesMade.some(c => c.nodeId === 'successful_rescue')
        }
      },
      {
        id: 'proper_first_aid',
        name: '正确急救',
        icon: '🩹',
        type: 'purple',
        condition: (state) => {
          return state.choicesMade.some(c => c.nodeId === 'proper_burn_treatment' || c.nodeId === 'continue_pressure')
        }
      }
    ],

    tips: [
      {
        id: 'tip1',
        icon: '❤️',
        title: '心肺复苏（CPR）',
        description: '遇到心脏骤停患者时，在黄金4分钟内进行心肺复苏，按压位置为两乳头连线中点，频率100-120次/分，深度至少5厘米。',
        relevantWhen: ['start_cpr', 'continue_compressions']
      },
      {
        id: 'tip2',
        icon: '📞',
        title: '拨打急救电话',
        description: '发现有人晕倒或受伤时，立即拨打120，简明报告地点和情况，并在指导下进行急救。',
        relevantWhen: ['call_120_first', 'follow_dispatch_guidance']
      },
      {
        id: 'tip3',
        icon: '🚿',
        title: '烫伤处理',
        description: '烫伤后用流动冷水冲洗至少20分钟，不要冰敷、涂牙膏或弄破水泡。',
        relevantWhen: ['cold_water_burn', 'proper_burn_treatment']
      },
      {
        id: 'tip4',
        icon: '🩹',
        title: '出血处理',
        description: '出血时用干净纱布加压包扎，持续加压10分钟以上，不要反复查看。',
        relevantWhen: ['pressure_bleeding', 'continue_pressure']
      },
      {
        id: 'tip5',
        icon: '🚫',
        title: '避免错误做法',
        description: '烫伤不要涂牙膏、酱油等；烧伤不要冰敷；昏迷不要掐人中；心脏病发作不要移动患者。',
        relevantWhen: ['toothpaste_burn', 'ice_burn', 'lift_victim', 'pinch_renshen']
      },
      {
        id: 'tip6',
        icon: '⏱️',
        title: '黄金救援时间',
        description: '心脏骤停的黄金救援时间是4分钟内。每延迟1分钟，生存率下降7-10%。',
        relevantWhen: ['start_cpr', 'wait_for_120']
      },
      {
        id: 'tip7',
        icon: '⚡',
        title: 'AED使用',
        description: '打开电源后按照语音提示操作，将电极片贴在指定位置，等待分析心律后按下电击按钮。电击后继续进行胸外按压。',
        relevantWhen: ['aed_simulation', 'successful_rescue']
      },
      {
        id: 'tip8',
        icon: '⚠️',
        title: 'AED注意事项',
        description: '使用AED时确保无人触碰患者，电极片需贴在裸露的皮肤上，避开起搏器或除颤仪植入位置。',
        relevantWhen: ['aed_simulation']
      }
    ]
  }
}

export default firstAidScenario
