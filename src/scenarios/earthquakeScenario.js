const earthquakeScenario = {
  id: 'earthquake',
  name: '地震避险',

  questions: [
    {
      id: 'eq_q1',
      type: 'single_choice',
      question: '地震发生时，在办公室工作的你应该首先怎么做？',
      options: ['立即跑出大楼', '躲在办公桌下，伏地遮挡', '乘坐电梯快速下楼', '站在窗户旁观看'],
      correctAnswer: 1,
      explanation: '地震时室内应立即躲避在坚固家具下，采用"伏地、遮挡、手抓牢"的姿势。',
      knowledgePoint: '地震室内避险'
    },
    {
      id: 'eq_q2',
      type: 'true_false',
      question: '地震发生时，可以就近选择玻璃门窗或悬挂物下方躲避。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '玻璃和悬挂物下方危险，容易被破碎的玻璃划伤或被坠落的悬挂物砸伤。',
      knowledgePoint: '地震避险位置选择'
    },
    {
      id: 'eq_q3',
      type: 'single_choice',
      question: '"伏地、遮挡、手抓牢"是地震避险的基本原则，其中"遮挡"是指？',
      options: ['躲在桌子底下', '用书包等物品遮挡头部', '躲在承重墙墙角', '平躺在地上'],
      correctAnswer: 1,
      explanation: '"遮挡"主要指用书包、手臂等物品保护头部，免受坠落物伤害。',
      knowledgePoint: '地震避险三步法'
    },
    {
      id: 'eq_q4',
      type: 'judgment',
      question: '判断：地震发生时，应该顺手拉开门窗以防被困。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '地震时不要慌忙去开门窗，可能因震动导致门窗变形而困住自己。应先避险，再择机逃生。',
      knowledgePoint: '地震应急误区'
    },
    {
      id: 'eq_q5',
      type: 'multiple_choice',
      question: '地震后，以下哪些情况需要警惕？（多选）',
      options: ['余震频繁', '建筑物出现裂缝', '闻到煤气味', '手机有信号'],
      correctAnswer: [0, 1, 2],
      explanation: '余震、裂缝和煤气泄漏都需要警惕。手机有信号通常是正常的。',
      knowledgePoint: '震后安全检查'
    },
    {
      id: 'eq_q6',
      type: 'single_choice',
      question: '地震时如果你正在开车，应该如何正确应对？',
      options: ['立即停车，留在车内', '加速开到空旷地带停车', '紧急刹车后下车逃跑', '停在天桥下等待'],
      correctAnswer: 1,
      explanation: '地震时应尽快将车开到空旷地带停下，留在车内等待震动停止，不要慌忙下车。',
      knowledgePoint: '地震行车避险'
    },
    {
      id: 'eq_q7',
      type: 'sequence',
      question: '将地震避险步骤按正确顺序排列：',
      options: ['保护头部', '观察周围环境', '就近躲避在坚固家具下', '在震动停止后有序撤离'],
      correctAnswer: [1, 2, 0, 3],
      explanation: '正确顺序：观察环境→就近躲避→保护头部→震动停止后撤离。',
      knowledgePoint: '地震避险流程'
    },
    {
      id: 'eq_q8',
      type: 'single_choice',
      question: '地震后被埋在废墟中，正确的求救方式是？',
      options: ['大声呼喊求救', '拼命挣扎试图脱困', '保存体力，敲击管道发出声响', '用手机一直打电话直到电量耗尽'],
      correctAnswer: 2,
      explanation: '被困时应保存体力，用敲击管道的方式发出规律求救信号，救援人员更容易定位。',
      knowledgePoint: '被困废墟自救'
    },
    {
      id: 'eq_q9',
      type: 'single_choice',
      question: '在学校上课时发生地震，正确的做法是？',
      options: ['立刻跑出教室', '躲到课桌下，双手握紧桌腿', '站在窗边等待老师指挥', '拥挤在教室门口准备逃生'],
      correctAnswer: 1,
      explanation: '上课时发生地震应迅速躲在课桌下，双手握紧桌腿，保护头部，待震动停止后再在老师指导下有序撤离。',
      knowledgePoint: '学校地震避险'
    },
    {
      id: 'eq_q10',
      type: 'true_false',
      question: '地震发生时，如果身处平房或一楼，可以迅速跑到室外空旷处避险。',
      options: ['正确', '错误'],
      correctAnswer: 0,
      explanation: '如果身处平房或一楼，且出口未被坠落物阻挡，可以迅速跑到室外空旷处避险，但要避开建筑物和电线。',
      knowledgePoint: '平房地震避险'
    },
    {
      id: 'eq_q11',
      type: 'multiple_choice',
      question: '地震引发火灾时，应该如何应对？（多选）',
      options: ['用湿毛巾捂住口鼻', '立即使用室内灭火器扑救', '迅速逃离现场报警', '返回取贵重物品'],
      correctAnswer: [0, 1, 2],
      explanation: '地震引发火灾时，应用湿毛巾捂住口鼻，如能扑灭初期火灾可尝试灭火，同时尽快逃离现场并拨打119报警。切勿返回取物品。',
      knowledgePoint: '地震火灾逃生'
    },
    {
      id: 'eq_q12',
      type: 'single_choice',
      question: '地震时正在商场购物，正确的避险方式是？',
      options: ['乘电梯快速下楼', '躲在货架旁边', '躲在承重柱旁边，避开玻璃橱窗和货架', '冲向出口奔跑逃生'],
      correctAnswer: 2,
      explanation: '商场地震时应迅速躲到承重柱旁边，避开玻璃橱窗和货架，伏地掩护，待震动停止后有序撤离。',
      knowledgePoint: '公共场所地震避险'
    },
    {
      id: 'eq_q13',
      type: 'judgment',
      question: '判断：地震后可以立即返回室内检查财物损失。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '地震后余震可能造成二次伤害，不应立即返回室内。应先确认安全，等专业人员评估后再进入。',
      knowledgePoint: '震后安全意识'
    },
    {
      id: 'eq_q14',
      type: 'sequence',
      question: '将地震被困时的自救步骤按正确顺序排列：',
      options: ['判断自身伤势', '寻找安全三角区躲避', '保存体力发出求救信号', '用手或衣物捂住口鼻'],
      correctAnswer: [1, 3, 0, 2],
      explanation: '正确顺序：寻找安全三角区→捂住口鼻→判断伤势→保存体力发出求救信号。',
      knowledgePoint: '被困自救流程'
    },
    {
      id: 'eq_q15',
      type: 'single_choice',
      question: '地震后帮助伤员时，发现伤员有颈椎损伤，正确的做法是？',
      options: ['立即扶伤员坐起', '不移动伤员，保持其头部稳定', '尽快背着伤员离开危险区', '让伤员自己站起来试试'],
      correctAnswer: 1,
      explanation: '怀疑颈椎损伤时，不要移动伤员，应保持其头部和颈部稳定，等待专业救援人员处理。',
      knowledgePoint: '伤员急救处理'
    },
    {
      id: 'eq_q16',
      type: 'true_false',
      question: '地震时如果在公共场所无法逃离，应该躲在大型家具旁边以防被坠落物砸伤。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '应躲在结实的家具下方或旁边（如桌子、柜子），而非旁边。躲在旁边大型家具旁可能因家具倾倒而被压伤。',
      knowledgePoint: '公共场所避险'
    },
    {
      id: 'eq_q17',
      type: 'multiple_choice',
      question: '地震前可以做好哪些准备？（多选）',
      options: ['固定好高大家具防止倾倒', '准备应急包（包含水、食物、药品等）', '熟悉住所的逃生路线', '将家中重物放在高处方便取用'],
      correctAnswer: [0, 1, 2],
      explanation: '平时应固定高大家具、准备应急包、熟悉逃生路线。不应将重物放在高处，以免地震时坠落伤人。',
      knowledgePoint: '地震预防准备'
    },
    {
      id: 'eq_q18',
      type: 'single_choice',
      question: '地震后出现堰塞湖，正确应对方式是？',
      options: ['尽快搬回家中躲避', '关注预警信息，听从政府安排转移', '无视继续正常生活', '自行前往观看堰塞湖'],
      correctAnswer: 1,
      explanation: '堰塞湖可能决堤造成洪水，应关注官方预警信息，听从政府安排转移到安全地带。',
      knowledgePoint: '地震次生灾害'
    },
    {
      id: 'eq_q19',
      type: 'judgment',
      question: '判断：闻到煤气味时，应立即打开电灯查找泄漏源。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '闻到煤气味时严禁打开电器开关（包括电灯），可能引发爆炸。应打开窗户通风，关掉阀门，迅速撤离到室外报警。',
      knowledgePoint: '燃气泄漏处理'
    },
    {
      id: 'eq_q20',
      type: 'single_choice',
      question: '地震时正在使用燃气灶做饭，应该如何应对？',
      options: ['继续观察火势', '立即关闭燃气阀门', '赶紧端着锅逃离', '用水浇灭火焰'],
      correctAnswer: 1,
      explanation: '地震时应立即关闭燃气阀门，防止燃气泄漏引发火灾。然后迅速躲避，震动停止后再处理。',
      knowledgePoint: '燃气使用安全'
    },
    {
      id: 'eq_q21',
      type: 'sequence',
      question: '将地震救人时的步骤按正确顺序排列：',
      options: ['清除伤员身上覆盖物', '与伤员保持对话安慰', '评估伤员意识和伤势', '在专业人员指导下搬运'],
      correctAnswer: [2, 1, 0, 3],
      explanation: '正确顺序：评估意识伤势→保持对话安慰→清除覆盖物→在专业人员指导下搬运。',
      knowledgePoint: '地震救人原则'
    },
    {
      id: 'eq_q22',
      type: 'multiple_choice',
      question: '地震后为了预防传染病，应该注意以下哪些事项？（多选）',
      options: ['注意饮食饮水卫生', '及时处理垃圾和污水', '消灭蚊蝇害虫', '与伤员密切接触以便照顾'],
      correctAnswer: [0, 1, 2],
      explanation: '震后应注意饮食饮水卫生、处理好垃圾污水、消灭害虫。不应密切接触伤员以免交叉感染。',
      knowledgePoint: '震后防疫'
    },
    {
      id: 'eq_q23',
      type: 'single_choice',
      question: '地震时如果你在电影院观看电影，正确的做法是？',
      options: ['立即跑向出口', '蹲在座椅旁边，避开排椅之间的空隙', '站在幕布前观看情况', '从高处跳下减少伤害'],
      correctAnswer: 1,
      explanation: '电影院里应蹲在座椅旁边伏低身体，避开排椅之间的空隙（可防止被踩踏），等震动停止后有序撤离。',
      knowledgePoint: '电影院避险'
    },
    {
      id: 'eq_q24',
      type: 'judgment',
      question: '判断：地震后应尽快进入受损建筑物抢搬财产。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '地震后严禁进入受损建筑物，不仅可能遭遇余震坍塌，还可能因建筑物结构受损而造成伤亡。',
      knowledgePoint: '震后安全'
    },
    {
      id: 'eq_q25',
      type: 'single_choice',
      question: '地震时正在使用电梯，电梯突然停止运作，正确的做法是？',
      options: ['强行扒开电梯门', '在电梯内跳跃使电梯恢复运作', '保持冷静，使用紧急呼叫按钮求救', '爬到电梯顶部打开天花板的逃生口'],
      correctAnswer: 2,
      explanation: '电梯困人时应保持冷静，按下紧急呼叫按钮或使用电梯内的通讯设备求救，耐心等待救援，切勿强行扒门或攀爬。',
      knowledgePoint: '电梯被困应对'
    },
    {
      id: 'eq_q26',
      type: 'true_false',
      question: '地震时，可以利用窗户玻璃的三角地带躲避坠落物。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '窗户周围危险，玻璃可能在震动中破碎飞溅。应避开窗户，选择承重墙墙角或坚固家具下方躲避。',
      knowledgePoint: '避险位置选择'
    },
    {
      id: 'eq_q27',
      type: 'multiple_choice',
      question: '地震后撤离时，应该如何选择逃生路线？（多选）',
      options: ['选择安全楼梯，不要乘坐电梯', '避开可能有坠落物的外墙', '沿着墙壁快速奔跑', '注意避开断裂的电线'],
      correctAnswer: [0, 1, 3],
      explanation: '撤离时应走安全楼梯，避开外墙（可能有坠落物）和电线。不应沿着墙壁快速奔跑，以免摔倒。',
      knowledgePoint: '安全撤离'
    },
    {
      id: 'eq_q28',
      type: 'single_choice',
      question: '地震时被埋在废墟中，以下哪种信号表示求救最有效？',
      options: ['不间断大喊"救命"', '有节奏地敲击金属管道，每隔约一秒敲三下', '用石块持续敲击任意硬物', '手机铃声循环播放'],
      correctAnswer: 1,
      explanation: '有节奏的敲击信号更容易被救援人员识别。建议敲三下停一下，循环往复，每隔约一秒敲三下。',
      knowledgePoint: '求救信号'
    },
    {
      id: 'eq_q29',
      type: 'judgment',
      question: '判断：地震时，跳窗逃生比躲在室内更安全。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '跳窗非常危险，高楼跳窗必死无疑。即使一楼，跳窗也可能摔伤。应优先选择室内躲避。',
      knowledgePoint: '跳窗危险'
    },
    {
      id: 'eq_q30',
      type: 'single_choice',
      question: '地震后如果被困废墟中，应该如何处理伤口？',
      options: ['用泥土或污水自行处理伤口', '尽量不移动受伤部位，用随身衣物加压止血', '用力挤压伤口止血', '用牙咬断坏死组织'],
      correctAnswer: 1,
      explanation: '被困时伤口应用衣物加压止血，尽量不移动受伤部位。泥土和污水含有细菌，不应随意处理伤口。',
      knowledgePoint: '被困伤口处理'
    },
    {
      id: 'eq_q31',
      type: 'multiple_choice',
      question: '以下哪些物品适合放在地震应急包中？（多选）',
      options: ['瓶装水和高热量食物', '创可贴和常用药品', '手电筒和备用电池', '大量现金和珠宝'],
      correctAnswer: [0, 1, 2],
      explanation: '应急包应包含水、食物、药品、手电筒等实用物品。大量现金和珠宝不仅增加负重，还可能在紧急情况下遗失。',
      knowledgePoint: '应急包准备'
    },
    {
      id: 'eq_q32',
      type: 'sequence',
      question: '将地震后回家时的检查步骤按正确顺序排列：',
      options: ['检查燃气管道是否泄漏', '进入室内开窗通风', '检查房屋结构是否有明显损坏', '确认无异常后再入住'],
      correctAnswer: [2, 0, 1, 3],
      explanation: '回家时应先检查结构→检查燃气→通风→确认安全后再入住。不按此顺序可能造成安全事故。',
      knowledgePoint: '震后回家检查'
    },
    {
      id: 'eq_q33',
      type: 'single_choice',
      question: '地震时如果你正在山脚下，正确的做法是？',
      options: ['向山顶奔跑避险', '观察周围环境，避开山体滑坡和落石区域', '躲在山脚下的大树下', '继续行走不理会地震'],
      correctAnswer: 1,
      explanation: '山脚下地震可能引发山体滑坡落石，应观察环境避开危险区域，向远离山体的空旷地带撤离。',
      knowledgePoint: '山区地震避险'
    },
    {
      id: 'eq_q34',
      type: 'true_false',
      question: '地震后可以饮用游泳池里的水来维持生命。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '游泳池水含有消毒剂等化学物质，不宜饮用。震后应寻找清洁水源或使用应急供水。',
      knowledgePoint: '震后饮水安全'
    },
    {
      id: 'eq_q35',
      type: 'judgment',
      question: '判断：地震发生时，可以躲在厕所、厨房等空间较小的房间避险。',
      options: ['正确', '错误'],
      correctAnswer: 0,
      explanation: '厕所、厨房等小空间反而更坚固，且有管道可供抓握，不易被坠落物压到，是较好的避险地点。',
      knowledgePoint: '避险位置选择'
    },
    {
      id: 'eq_q36',
      type: 'multiple_choice',
      question: '地震后出现心理创伤，可能有哪些表现？（多选）',
      options: ['反复回忆地震场景', '睡眠障碍和噩梦', '过度警觉和焦虑', '积极参与社交活动'],
      correctAnswer: [0, 1, 2],
      explanation: '地震后心理创伤可能表现为闪回、睡眠障碍、过度警觉等。应及时寻求专业心理帮助。积极参与社交是恢复的表现。',
      knowledgePoint: '心理创伤识别'
    },
    {
      id: 'eq_q37',
      type: 'single_choice',
      question: '地震时如果你在地下商场，正确的做法是？',
      options: ['尽快跑到地面', '在结实的柜台或柱子旁躲避', '乘电梯快速离开', '站在货架旁等待震动停止'],
      correctAnswer: 1,
      explanation: '地下商场应选择在结实的柜台、柱子旁躲避，远离货架和玻璃，待震动停止后从应急通道有序撤离。',
      knowledgePoint: '地下场所避险'
    },
    {
      id: 'eq_q38',
      type: 'true_false',
      question: '地震时，靠近门的位置是最安全的避险点。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '门框可能在震动中变形，且地震时门可能会猛然关闭造成伤害。应躲在坚固家具下，而非门边。',
      knowledgePoint: '避险位置选择'
    }
  ],

  nodes: {
    start: {
      id: 'start',
      text: '工作日下午3点，你正在16层办公楼的会议室里和同事开会。突然，你感到地面剧烈晃动，吊灯摇晃不止，桌上的水杯开始晃动...',
      scene: 'office_earthquake_start',
      choices: [
        {
          text: '立刻躲在会议桌下',
          nextNode: 'hide_under_table',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '冲向电梯准备下楼',
          nextNode: 'elevator_danger',
          healthChange: -20,
          knowledgeChange: 0
        },
        {
          text: '站在窗边观察情况',
          nextNode: 'window_danger',
          healthChange: -15,
          knowledgeChange: 0
        },
        {
          text: '冲出会议室跑向楼梯',
          nextNode: 'run_stairs_wrong',
          healthChange: -10,
          knowledgeChange: 0
        }
      ]
    },

    hide_under_table: {
      id: 'hide_under_table',
      text: '你和同事们迅速躲在会议桌下。你用手护住头部，感受到地震的剧烈摇晃。会议室里的文件柜开始摇晃，发出刺耳的金属碰撞声...',
      scene: 'under_table_hiding',
      showQuestion: true,
      choices: [
        {
          text: '抓紧桌腿，继续护住头部',
          nextNode: 'hold_table',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '等震动稍缓就站起来',
          nextNode: 'stand_too_early',
          healthChange: -10,
          knowledgeChange: 0
        },
        {
          text: '用手臂护住头部和颈部',
          nextNode: 'protect_neck',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    hold_table: {
      id: 'hold_table',
      text: '你紧紧抓住桌腿，感受到地震的震颤。大约过了30秒，震动终于渐渐平息。会议室里一片狼藉，文件散落一地...',
      scene: 'quake_stopped_office',
      showQuestion: true,
      choices: [
        {
          text: '立即站起来冲出去',
          nextNode: 'run_out_wrong',
          healthChange: -10,
          knowledgeChange: 0
        },
        {
          text: '等震动完全停止，观察周围环境后再撤离',
          nextNode: 'observe_before_exit',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '用桌子作为遮挡，保护头部有序撤离',
          nextNode: 'shielded_exit',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    stand_too_early: {
      id: 'stand_too_early',
      text: '你过早站起来想撤离，突然一块天花板掉落，砸在你的肩膀上！你感到剧痛...',
      scene: 'ceiling_fall',
      choices: [
        {
          text: '忍住疼痛继续撤离',
          nextNode: 'injured_exit',
          healthChange: -15,
          knowledgeChange: 0
        },
        {
          text: '用衣物包扎伤口，等待救援',
          nextNode: 'wait_rescue_office',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    protect_neck: {
      id: 'protect_neck',
      text: '你用手臂护住头部和颈部，同时紧紧抓住桌腿。震动结束后，你发现自己的姿势很好地保护了要害部位。',
      scene: 'good_protection',
      choices: [
        {
          text: '检查自己和同事的受伤情况',
          nextNode: 'check_injuries',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '立即组织同事有序撤离',
          nextNode: 'organized_exit',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    check_injuries: {
      id: 'check_injuries',
      text: '你检查了同事们的情况，一位同事手部被碎玻璃划伤，需要包扎。你应该？',
      scene: 'injury_check',
      choices: [
        {
          text: '用随身手帕包扎伤口',
          nextNode: 'bandage_injury',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '不管伤口，先撤离再说',
          nextNode: 'ignore_injury',
          healthChange: -5,
          knowledgeChange: 0
        }
      ]
    },

    bandage_injury: {
      id: 'bandage_injury',
      text: '你用干净的手帕为受伤的同事包扎了伤口。危机中你展现了冷静和专业的急救意识。',
      scene: 'bandaged',
      choices: [
        {
          text: '带领大家有序撤离',
          nextNode: 'organized_exit',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    ignore_injury: {
      id: 'ignore_injury',
      text: '你不管同事的伤口急忙撤离，虽然最终安全了，但同事的伤口因为没有及时处理而感染了...',
      scene: 'poor_decision',
      choices: [
        {
          text: '下楼后立即寻找医疗救助',
          nextNode: 'downstairs_rescue',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    organized_exit: {
      id: 'organized_exit',
      text: '你组织同事们排队有序撤离，避免了混乱导致的踩踏。你走在最后，确认所有人都安全撤离。',
      scene: 'orderly_evacuation',
      isEnding: true,
      endingType: 'win'
    },

    observe_before_exit: {
      id: 'observe_before_exit',
      text: '你先观察了会议室的情况，发现天花板有裂缝，门框也有些变形。你应该？',
      scene: 'observe_damage',
      showQuestion: true,
      choices: [
        {
          text: '顺手拉开门窗确保出口通畅',
          nextNode: 'wrong_door_action',
          healthChange: -10,
          knowledgeChange: 0
        },
        {
          text: '判断出口安全后，从门口有序撤离',
          nextNode: 'safe_exit',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    wrong_door_action: {
      id: 'wrong_door_action',
      text: '你慌忙去拉门，突然门框剧烈变形，你的右手被卡住！剧痛传来...',
      scene: 'hand_trapped',
      choices: [
        {
          text: '用力挣脱',
          nextNode: 'force_flee',
          healthChange: -20,
          knowledgeChange: 0
        },
        {
          text: '保持冷静，等待救援',
          nextNode: 'wait_rescue_office',
          healthChange: -5,
          knowledgeChange: 10
        }
      ]
    },

    force_flee: {
      id: 'force_flee',
      text: '你用力挣脱，手臂严重受伤，鲜血直流。在同事的帮助下才勉强撤离...',
      scene: 'injured_escape',
      isEnding: true,
      endingType: 'lose'
    },

    wait_rescue_office: {
      id: 'wait_rescue_office',
      text: '你保持冷静，用衣物固定受伤的手臂，在原地等待救援。消防队员赶到后，将你安全救出。',
      scene: 'rescued_office',
      isEnding: true,
      endingType: 'win'
    },

    safe_exit: {
      id: 'safe_exit',
      text: '你判断出口安全后，带领同事们有序地从楼梯撤离。每个人都保持冷静，没有发生混乱。',
      scene: 'safe_evacuation',
      isEnding: true,
      endingType: 'win'
    },

    shielded_exit: {
      id: 'shielded_exit',
      text: '你用会议桌作为盾牌护住头部，带领大家沿墙壁有序撤离。这种做法有效地保护了团队安全。',
      scene: 'shielded_evacuation',
      isEnding: true,
      endingType: 'win'
    },

    injured_exit: {
      id: 'injured_exit',
      text: '你忍痛撤离，但伤势严重，到达安全区域后需要立即接受治疗...',
      scene: 'injured_result',
      isEnding: true,
      endingType: 'lose'
    },

    downstairs_rescue: {
      id: 'downstairs_rescue',
      text: '下楼后你找到了急救人员，为受伤的同事进行了处理。虽然经历惊险，但最终平安无事。',
      scene: 'downstairs_help',
      isEnding: true,
      endingType: 'win'
    },

    elevator_danger: {
      id: 'elevator_danger',
      text: '你冲向电梯按下按钮，电梯门打开的瞬间，你踏进去按下了1楼。电梯开始下降，突然剧烈抖动停止运作——地震导致停电，你被困在电梯里！',
      scene: 'elevator_trapped_eq',
      showQuestion: true,
      choices: [
        {
          text: '保持冷静，用手机拨打求救电话',
          nextNode: 'eq_elevator_rescue',
          healthChange: -5,
          knowledgeChange: 10
        },
        {
          text: '强行扒开电梯门',
          nextNode: 'eq_elevator_danger',
          healthChange: -20,
          knowledgeChange: 0
        }
      ]
    },

    eq_elevator_rescue: {
      id: 'eq_elevator_rescue',
      text: '你保持冷静，用手机拨打了119。救援人员通过定位找到了你，将你安全救出。',
      scene: 'eq_rescued',
      isEnding: true,
      endingType: 'win'
    },

    eq_elevator_danger: {
      id: 'eq_elevator_danger',
      text: '你试图强行打开电梯门，电梯突然恢复供电开始移动，你被卷入电梯井...',
      scene: 'eq_elevator_fall',
      isEnding: true,
      endingType: 'lose'
    },

    window_danger: {
      id: 'window_danger',
      text: '你站在窗边观察，结果一块碎玻璃突然掉落，划伤了你的手臂！同时窗户也开始破裂...',
      scene: 'glass_injury',
      showQuestion: true,
      choices: [
        {
          text: '立即趴下躲避',
          nextNode: 'duck_under_window',
          healthChange: -10,
          knowledgeChange: 5
        }
      ]
    },

    duck_under_window: {
      id: 'duck_under_window',
      text: '你及时趴下，躲过了更多坠落的玻璃碎片。但你已经被划伤，需要处理伤口。',
      scene: 'ducked_successfully',
      choices: [
        {
          text: '用衣物包扎伤口，然后撤离',
          nextNode: 'bandage_escape',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    bandage_escape: {
      id: 'bandage_escape',
      text: '你用撕下的衣物包扎了伤口，在震动停止后小心地撤离到安全区域。',
      scene: 'injured_escape_eq',
      isEnding: true,
      endingType: 'win'
    },

    run_stairs_wrong: {
      id: 'run_stairs_wrong',
      text: '你冲出会议室向楼梯跑去，但楼道里已经挤满了惊慌的人群。在推搡中你摔倒受伤...',
      scene: 'stairs_panic',
      showQuestion: true,
      choices: [
        {
          text: '爬起来继续跑',
          nextNode: 'stairs_injured',
          healthChange: -15,
          knowledgeChange: 0
        },
        {
          text: '在墙角蹲下保护自己',
          nextNode: 'corner_protect',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    stairs_injured: {
      id: 'stairs_injured',
      text: '你爬起来继续跑，但在混乱中被踩踏，身受重伤...',
      scene: 'stampede_injury',
      isEnding: true,
      endingType: 'lose'
    },

    corner_protect: {
      id: 'corner_protect',
      text: '你在墙角蹲下，用手护住头部。等人群过去后，才慢慢站起来继续撤离。',
      scene: 'corner_survived',
      choices: [
        {
          text: '等震动停止后有序撤离',
          nextNode: 'wait_quake_end',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    wait_quake_end: {
      id: 'wait_quake_end',
      text: '震动停止后，你发现楼梯结构完好，于是有序地撤离到室外。',
      scene: 'stairs_safe',
      isEnding: true,
      endingType: 'win'
    },

    run_out_wrong: {
      id: 'run_out_wrong',
      text: '你站起来就跑，但一块天花板正好掉落，砸中了你的头部！你当场昏迷...',
      scene: 'head_injury',
      isEnding: true,
      endingType: 'lose'
    },

    // 震后场景
    post_earthquake: {
      id: 'post_earthquake',
      text: '地震终于停止了。你和同事们安全撤到了楼下的广场。但余震还在持续，你看到周围的建筑物有些已经出现裂缝...',
      scene: 'post_earthquake_square',
      showQuestion: true,
      choices: [
        {
          text: '远离有裂缝的建筑物',
          nextNode: 'avoid_damaged',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '回去取重要物品',
          nextNode: 'return_dangerous_eq',
          healthChange: -15,
          knowledgeChange: 0
        },
        {
          text: '寻找空旷地带避险',
          nextNode: 'open_area',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    avoid_damaged: {
      id: 'avoid_damaged',
      text: '你远离了受损的建筑，和同事们一起在广场等待救援和余震过去。',
      scene: 'safe_waiting',
      isEnding: true,
      endingType: 'win'
    },

    return_dangerous_eq: {
      id: 'return_dangerous_eq',
      text: '你返回受损的建筑物取东西，结果遭遇强烈余震，被困在废墟中...',
      scene: 'trapped_rubble',
      showQuestion: true,
      choices: [
        {
          text: '大声呼喊求救',
          nextNode: 'shout_trapped',
          healthChange: -5,
          knowledgeChange: 0
        },
        {
          text: '保存体力，敲击管道发出声响',
          nextNode: 'signal_rescue',
          healthChange: -5,
          knowledgeChange: 10
        }
      ]
    },

    shout_trapped: {
      id: 'shout_trapped',
      text: '你大声呼喊，但因为体力耗尽，声音越来越弱...',
      scene: 'exhausted_rescue',
      isEnding: true,
      endingType: 'lose'
    },

    signal_rescue: {
      id: 'signal_rescue',
      text: '你保存体力，用砖块敲击旁边的金属管道，发出有规律的求救信号。救援人员循着声音找到了你。',
      scene: 'smart_rescue',
      isEnding: true,
      endingType: 'win'
    },

    open_area: {
      id: 'open_area',
      text: '你和同事们转移到空旷的地带，远离所有建筑物。你注意到周围有人受伤需要帮助。',
      scene: 'open_ground',
      showQuestion: true,
      choices: [
        {
          text: '用所学的急救知识帮助伤者',
          nextNode: 'help_injured',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '等待专业人员来处理',
          nextNode: 'wait_professional',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    help_injured: {
      id: 'help_injured',
      text: '你运用急救知识，为骨折的伤者进行了简单的固定，为出血的伤者进行了包扎。救援队员到达后称赞你的专业。',
      scene: 'professional_help',
      isEnding: true,
      endingType: 'win'
    },

    wait_professional: {
      id: 'wait_professional',
      text: '你安静地等待，照顾好自己和同事。救援人员很快赶到现场进行有序的疏散。',
      scene: 'patient_wait',
      isEnding: true,
      endingType: 'win'
    }
  },

  metadata: {
    title: '地震避险篇',
    endingTitle: '避险',
    intro: '掌握地震来临时的避险技巧，了解"伏地、遮挡、手抓牢"原则',

    achievements: [
      {
        id: 'earthquake_master',
        name: '避险专家',
        icon: '🏔️',
        type: 'gold',
        condition: (state) => state.endingRating === '完美通关'
      },
      {
        id: 'calm_leader',
        name: '冷静领袖',
        icon: '🎖️',
        type: 'blue',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'organized_exit')
      },
      {
        id: 'first_aid_expert',
        name: '急救能手',
        icon: '🏥',
        type: 'green',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'help_injured' || c.nodeId === 'bandage_injury')
      },
      {
        id: 'smart_survivor',
        name: '机智求生',
        icon: '🧠',
        type: 'purple',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'signal_rescue')
      }
    ],

    tips: [
      {
        id: 'tip1',
        icon: '🛡️',
        title: '室内避险',
        description: '"伏地、遮挡、手抓牢"：迅速躲到坚固家具下，用手保护头部，抓牢固定物体。',
        relevantWhen: ['hide_under_table', 'hold_table']
      },
      {
        id: 'tip2',
        icon: '🚫',
        title: '绝对禁止',
        description: '地震时严禁乘坐电梯、靠近窗户或玻璃门、慌忙跳楼。',
        relevantWhen: ['elevator_danger', 'window_danger']
      },
      {
        id: 'tip3',
        icon: '🚶',
        title: '有序撤离',
        description: '震动停止后，观察环境确认安全再有序撤离，不要仓皇逃窜。',
        relevantWhen: ['observe_before_exit', 'safe_exit']
      },
      {
        id: 'tip4',
        icon: '🏚️',
        title: '远离危险',
        description: '远离受损的建筑物、电线、桥梁等可能坍塌或危险的区域。',
        relevantWhen: ['post_earthquake', 'avoid_damaged']
      },
      {
        id: 'tip5',
        icon: '📢',
        title: '被困呼救',
        description: '被困时保持冷静，敲击管道或金属发出规律求救信号，保存体力等待救援。',
        relevantWhen: ['return_dangerous_eq', 'signal_rescue']
      },
      {
        id: 'tip6',
        icon: '➰',
        title: '余震警惕',
        description: '主震后要警惕余震，余震可能比主震更具破坏性。不要返回受损建筑物。',
        relevantWhen: ['post_earthquake', 'return_dangerous_eq']
      }
    ]
  }
}

export default earthquakeScenario
