const floodScenario = {
  id: 'flood',
  name: '洪水应对',

  questions: [
    {
      id: 'flood_q1',
      type: 'single_choice',
      question: '收到洪水预警信号，你应该首先做什么？',
      options: ['去河边看水情', '储备应急物资，关注预警信息', '继续正常活动', '开车去接孩子'],
      correctAnswer: 1,
      explanation: '收到预警后应关注最新消息，准备应急物资，必要时按照指示撤离。',
      knowledgePoint: '洪水预警响应'
    },
    {
      id: 'flood_q2',
      type: 'true_false',
      question: '洪水来临时，可以尝试徒步穿越积水区域。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '洪水水流湍急，积水深度不明，可能有漩涡、暗沟等危险，严禁涉水。',
      knowledgePoint: '洪水避险禁止涉水'
    },
    {
      id: 'flood_q3',
      type: 'single_choice',
      question: '如果你在开车时遇到洪水淹没道路，应该怎么做？',
      options: ['加速冲过去', '缓慢行驶观察水情', '立即停车并迅速转移到高处', '掉头往回开'],
      correctAnswer: 2,
      explanation: '遇到洪水淹没道路应立即停车，快速转移到地势高处，切勿继续行驶或掉头。',
      knowledgePoint: '洪水行车避险'
    },
    {
      id: 'flood_q4',
      type: 'judgment',
      question: '判断：洪水来临时，应该迅速向低洼处撤离躲避。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '低洼处更容易积水，洪水时应向高处撤离。',
      knowledgePoint: '洪水撤离方向'
    },
    {
      id: 'flood_q5',
      type: 'multiple_choice',
      question: '洪水预警颜色等级从低到高分别是？（多选）',
      options: ['蓝色', '黄色', '橙色', '红色'],
      correctAnswer: [0, 1, 2, 3],
      explanation: '洪水预警等级依次为蓝色（IV级）、黄色（III级）、橙色（II级）、红色（I级）。',
      knowledgePoint: '洪水预警等级'
    },
    {
      id: 'flood_q6',
      type: 'single_choice',
      question: '被困在洪水中无法脱困时，正确的求救方式是？',
      options: ['游向远处尝试脱困', '保存体力，抓住漂浮物等待救援', '大声呼喊用力挣扎', '逆流游向建筑物'],
      correctAnswer: 1,
      explanation: '被困时应保存体力，抓住树木或漂浮物等待救援，不要盲目挣扎消耗体力。',
      knowledgePoint: '洪水中被困自救'
    },
    {
      id: 'flood_q7',
      type: 'single_choice',
      question: '如果洪水涌入建筑物内部，你应该逃到？',
      options: ['地下室', '一楼', '高层屋顶或天台', '阳台'],
      correctAnswer: 2,
      explanation: '洪水来时应迅速转移到高层屋顶或天台，等待救援。地下室最危险。',
      knowledgePoint: '建筑内洪水避险'
    },
    {
      id: 'flood_q8',
      type: 'sequence',
      question: '将洪水逃生步骤按正确顺序排列：',
      options: ['转移到高处', '丢弃沉重衣物', '拨打求救电话', '发现洪水征兆'],
      correctAnswer: [3, 1, 0, 2],
      explanation: '正确顺序：发现征兆→丢弃沉重衣物→转移到高处→拨打求救电话。',
      knowledgePoint: '洪水逃生流程'
    },
    {
      id: 'flood_q9',
      type: 'single_choice',
      question: '洪水来临时，以下哪种行为是错误的？',
      options: ['关注预警信息', '往高处转移', '在河边观看洪水', '关闭电源总闸'],
      correctAnswer: 2,
      explanation: '洪水时在河边观看非常危险，可能被洪水卷走。应关注预警、往高处转移、关闭电源。',
      knowledgePoint: '洪水避险禁忌'
    },
    {
      id: 'flood_q10',
      type: 'true_false',
      question: '暴雨天气时，可以尝试蹚水过积水路段。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '暴雨积水深度不明，可能有缺失井盖的排水口或暗沟，非常危险，严禁涉水。',
      knowledgePoint: '暴雨涉水危险'
    },
    {
      id: 'flood_q11',
      type: 'single_choice',
      question: '如果你在山区遇到山洪，应该向哪个方向逃跑？',
      options: ['顺着溪流往下游跑', '垂直于溪流往高处跑', '往低洼处躲避', '在原地等待'],
      correctAnswer: 1,
      explanation: '山洪来临时应垂直于溪流方向往高处跑，切勿顺流而下或逆流而上。',
      knowledgePoint: '山洪逃生'
    },
    {
      id: 'flood_q12',
      type: 'multiple_choice',
      question: '洪水来袭前的应急准备包括哪些？（多选）',
      options: ['储备饮用水和食物', '准备应急手电筒', '转移到低洼处方便救援', '准备防水袋保护财物'],
      correctAnswer: [0, 1, 3],
      explanation: '洪水应急准备包括储备饮用水食物、准备手电筒、用防水袋保护财物。不应转移到低洼处。',
      knowledgePoint: '洪水应急准备'
    },
    {
      id: 'flood_q13',
      type: 'single_choice',
      question: '洪水淹没道路时，为什么不能快速行驶冲过去？',
      options: ['会溅到行人', '发动机可能进水熄火', '违反交通规则', '浪费时间'],
      correctAnswer: 1,
      explanation: '车辆快速通过积水时，水可能从进气口进入发动机导致熄火，失去动力被困在洪水中。',
      knowledgePoint: '车辆涉水危险'
    },
    {
      id: 'flood_q14',
      type: 'judgment',
      question: '判断：洪水退去后，可以立即返回家中检查损失。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '洪水退去后，建筑物可能受损、存在漏电危险、饮用水可能被污染，应等专业人员评估后再返回。',
      knowledgePoint: '洪水退去后安全'
    },
    {
      id: 'flood_q15',
      type: 'multiple_choice',
      question: '洪水中被困时，可以利用哪些物品帮助求生？（多选）',
      options: ['塑料桶或泡沫箱', '大树或电线杆', '洪水中行走', '木板或塑料板'],
      correctAnswer: [0, 1, 3],
      explanation: '被困时可抓住塑料桶、泡沫箱、木板等漂浮物，或抱住大树等待救援。严禁在洪水中行走。',
      knowledgePoint: '洪水中求生'
    },
    {
      id: 'flood_q16',
      type: 'single_choice',
      question: '为什么不能靠近倾倒的电杆、架空线和变压器？',
      options: ['会被砸到', '可能触电', '影响交通', '没有原因'],
      correctAnswer: 1,
      explanation: '倾倒的电杆可能带电，积水会导电，靠近可能引发触电事故。',
      knowledgePoint: '触电危险'
    },
    {
      id: 'flood_q17',
      type: 'true_false',
      question: '洪水期间，可以饮用雨水解渴。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '雨水在降落过程中可能吸附空气中的污染物，且无法确认其清洁度，不宜直接饮用。',
      knowledgePoint: '饮用水安全'
    },
    {
      id: 'flood_q18',
      type: 'sequence',
      question: '将暴雨橙色预警发布后的应对步骤按正确顺序排列：',
      options: ['关注最新预警信息', '做好转移准备', '检查房屋排水', '必要时转移到安全地带'],
      correctAnswer: [0, 2, 1, 3],
      explanation: '正确顺序：关注预警→检查排水→做好转移准备→必要时转移。',
      knowledgePoint: '暴雨预警响应流程'
    },
    {
      id: 'flood_q19',
      type: 'single_choice',
      question: '洪水围困时，以下哪种求救方式最有效？',
      options: ['大声呼喊', '挥动鲜艳衣物', '发送手机定位求救', '放飞风筝'],
      correctAnswer: 2,
      explanation: '被困时发送手机定位能让救援人员精确定位，提高救援效率。呼喊和挥动物品也可配合使用。',
      knowledgePoint: '被困求救'
    },
    {
      id: 'flood_q20',
      type: 'judgment',
      question: '判断：山区河谷地带遇到洪水，可以躲在桥下避雨。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '河谷和桥下都是山洪经过的通道，非常危险。应往高处转移，远离河谷和桥梁。',
      knowledgePoint: '山区避险'
    },
    {
      id: 'flood_q21',
      type: 'single_choice',
      question: '洪水后需要预防的主要传染病是？',
      options: ['感冒', '腹泻和肠道疾病', '皮肤病', '骨折'],
      correctAnswer: 1,
      explanation: '洪水后水源可能被污染，容易引发腹泻等肠道传染病。应注意饮食饮水卫生。',
      knowledgePoint: '洪灾后防疫'
    },
    {
      id: 'flood_q22',
      type: 'multiple_choice',
      question: '洪水后返回家园前，应做好哪些安全检查？（多选）',
      options: ['检查房屋结构是否受损', '检查燃气管道是否泄漏', '立即通电使用电器', '检查饮用水是否被污染'],
      correctAnswer: [0, 1, 3],
      explanation: '返回前应检查房屋结构、燃气管道、饮用水等。不要立即通电，应由专业人员检查电路。',
      knowledgePoint: '返回家园安全检查'
    },
    {
      id: 'flood_q23',
      type: 'single_choice',
      question: '如果你在公交车中被洪水围困，正确的做法是？',
      options: ['敲碎车窗逃生', '等待水退', '安抚乘客，等待救援', '打开车门让水进来'],
      correctAnswer: 2,
      explanation: '公交车相对安全，不应敲碎车窗。应安抚乘客，保持冷静，等待专业救援。',
      knowledgePoint: '公交车内避险'
    },
    {
      id: 'flood_q24',
      type: 'true_false',
      question: '遇到堰塞湖时，应尽快回家取贵重物品。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '堰塞湖可能决堤造成洪水，应关注官方预警，听从政府安排转移，不要冒险回家。',
      knowledgePoint: '堰塞湖避险'
    },
    {
      id: 'flood_q25',
      type: 'judgment',
      question: '判断：洪水来临时，应该先抢救财产再逃生。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '生命安全永远是第一位。财产损失可以挽回，生命只有一次。',
      knowledgePoint: '逃生原则'
    },
    {
      id: 'flood_q26',
      type: 'single_choice',
      question: '被洪水困住无法逃脱时，身体哪个部位最需要保暖？',
      options: ['头部', '胸部', '四肢', '腹部'],
      correctAnswer: 1,
      explanation: '胸部核心区域保持温暖最重要，可维持身体机能，减少失温风险。',
      knowledgePoint: '水中保暖'
    },
    {
      id: 'flood_q27',
      type: 'multiple_choice',
      question: '洪水应急包中应该准备哪些物品？（多选）',
      options: ['饮用水和应急食品', '手电筒和备用电池', '急救药箱', '游泳圈'],
      correctAnswer: [0, 1, 2],
      explanation: '应急包应准备饮用水食物、手电筒电池、急救药箱等。游泳圈在洪水中作用有限且可能不安全。',
      knowledgePoint: '应急包准备'
    },
    {
      id: 'flood_q28',
      type: 'single_choice',
      question: '洪水退去后，如何判断房屋是否可以安全进入？',
      options: ['自己进去查看', '等专业人员评估', '敲敲门看看有没有人', '闻闻有没有味道'],
      correctAnswer: 1,
      explanation: '洪水可能造成地基受损、燃气泄漏、电路短路等危险，应等待专业人员评估确认安全后再进入。',
      knowledgePoint: '房屋安全评估'
    },
    {
      id: 'flood_q29',
      type: 'true_false',
      question: '洪水中救援时，可以直接用手接触溺水者。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '救援者应使用木棍、绳索等延长物体接触溺水者，避免被其拖拽导致双双被困。',
      knowledgePoint: '水中救援安全'
    },
    {
      id: 'flood_q30',
      type: 'sequence',
      question: '将救助溺水者的正确步骤按顺序排列：',
      options: ['呼救并拨打120', '寻找漂浮物抛给溺水者', '在岸上尝试拉拽', '确认现场安全'],
      correctAnswer: [3, 0, 1, 2],
      explanation: '正确顺序：确认安全→呼救拨打120→抛漂浮物→岸上拉拽。不可贸然下水。',
      knowledgePoint: '救助溺水步骤'
    },
    {
      id: 'flood_q31',
      type: 'single_choice',
      question: '遇到洪水正在快速上涨，以下做法错误的是？',
      options: ['往高处跑', '抓住固定物体', '尝试游泳逃离', '爬到屋顶或高处等待救援'],
      correctAnswer: 2,
      explanation: '洪水中水流湍急，游泳可能消耗体力且被水流卷走。应往高处爬，等待救援。',
      knowledgePoint: '洪水逃生'
    },
    {
      id: 'flood_q32',
      type: 'judgment',
      question: '判断：遇到积水路段，可以根据其他车辆通行情况判断水深。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '其他车辆能通过不代表你也能通过，每辆车的底盘高度不同，且水深可能在变化。',
      knowledgePoint: '积水判断'
    },
    {
      id: 'flood_q33',
      type: 'multiple_choice',
      question: '台风带来的暴雨可能引发哪些次生灾害？（多选）',
      options: ['山洪暴发', '城市内涝', '泥石流', '地震'],
      correctAnswer: [0, 1, 2],
      explanation: '台风可能引发山洪、城市内涝、泥石流等次生灾害，但不会引发地震。',
      knowledgePoint: '台风次生灾害'
    },
    {
      id: 'flood_q34',
      type: 'single_choice',
      question: '地下车库被洪水淹没，正确的逃生方式是？',
      options: ['从地下车库出口逃出', '往更高的楼层跑', '寻找车钥匙开车逃出', '等待救援'],
      correctAnswer: 1,
      explanation: '地下车库出口通常在最低处，水会从这里涌入。应往更高楼层转移，等待救援。',
      knowledgePoint: '地下空间避险'
    },
    {
      id: 'flood_q35',
      type: 'true_false',
      question: '洪水期间，可以食用冰箱里被水浸泡过的食物。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '洪水可能含有污水和病原微生物，被浸泡过的食物可能被污染，不应食用。',
      knowledgePoint: '饮食安全'
    },
    {
      id: 'flood_q36',
      type: 'single_choice',
      question: '如果你在河边游玩时突然收到洪水预警，正确的做法是？',
      options: ['继续在河边观看', '立即往高处转移', '到河里游泳躲避', '找棵树躲起来'],
      correctAnswer: 1,
      explanation: '收到预警应立即离开河边，往高处转移。不要在河边逗留，更不能下水。',
      knowledgePoint: '河边避险'
    },
    {
      id: 'flood_q37',
      type: 'multiple_choice',
      question: '洪水后环境清理时，应该注意哪些卫生问题？（多选）',
      options: ['佩戴口罩和手套', '对环境进行消毒', '直接饮用井水', '及时清理污泥和垃圾'],
      correctAnswer: [0, 1, 3],
      explanation: '清理时要注意防护、消毒、清理污泥。洪水后饮用水源可能受污染，不能直接饮用。',
      knowledgePoint: '灾后卫生'
    },
    {
      id: 'flood_q38',
      type: 'judgment',
      question: '判断：遇到洪水时可以抓住电线荡到安全地带。',
      options: ['正确', '错误'],
      correctAnswer: 1,
      explanation: '电线可能带电或断裂，抓住荡秋千的方式极易引发触电或摔伤。切勿尝试。',
      knowledgePoint: '触电危险'
    }
  ],

  nodes: {
    start: {
      id: 'start',
      text: '雨季连续的暴雨已经下了三天。早上你被手机上的暴雨红色预警警报惊醒，窗外雷声大作，街道上的积水已经漫过了人行道...',
      scene: 'flood_warning_morning',
      timerConfig: {
        enabled: true,
        duration: 20,
        urgencyLevel: 'high',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 1,
          healthChange: 0,
          knowledgeChange: 5,
          message: '预警就是命令！'
        }
      },
      choices: [
        {
          text: '继续睡觉，觉得没什么大不了',
          nextNode: 'ignore_warning',
          healthChange: 0,
          knowledgeChange: -5
        },
        {
          text: '起床关注最新汛情，准备应急物资',
          nextNode: 'prepare_emergency',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '立刻开车去公司看看情况',
          nextNode: 'drive_to_work',
          healthChange: -5,
          knowledgeChange: 0
        },
        {
          text: '出门去超市囤积食物和水',
          nextNode: 'go_to_supermarket',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    ignore_warning: {
      id: 'ignore_warning',
      text: '你继续睡觉，没有注意到外面的情况正在急剧恶化。突然，你听到窗外有人在呼救...',
      scene: 'ignored_situation',
      timerConfig: {
        enabled: true,
        duration: 30,
        urgencyLevel: 'critical',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 0,
          healthChange: -10,
          knowledgeChange: 0,
          message: '洪水已经涌入街道！'
        }
      },
      choices: [
        {
          text: '赶紧往高处跑',
          nextNode: 'late_escape_flood',
          healthChange: -10,
          knowledgeChange: 5
        },
        {
          text: '待在家里等待救援',
          nextNode: 'wait_rescue_flood',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    prepare_emergency: {
      id: 'prepare_emergency',
      text: '你打开电视和手机查看最新汛情。气象部门发布紧急公告：你家所在区域将在2小时内出现超警戒水位，建议低洼地带居民立即撤离！',
      scene: 'emergency_broadcast',
      showQuestion: true,
      questionId: 'flood_q1',
      choices: [
        {
          text: '收拾必要物品，准备撤离',
          nextNode: 'pack_essential',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '打电话给住在地势低洼处的父母',
          nextNode: 'call_parents',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '继续观察情况再决定',
          nextNode: 'wait_too_long',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    drive_to_work: {
      id: 'drive_to_work',
      text: '你开车上路，发现街道上的积水已经很深。有些车已经熄火抛锚在路上。你应该？',
      scene: 'driving_in_rain',
      showQuestion: true,
      questionId: 'flood_q3',
      timerConfig: {
        enabled: true,
        duration: 15,
        urgencyLevel: 'critical',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 0,
          healthChange: -15,
          knowledgeChange: 0,
          message: '水深正在上涨！'
        }
      },
      choices: [
        {
          text: '加大油门快速冲过去',
          nextNode: 'rush_through',
          healthChange: -20,
          knowledgeChange: 0
        },
        {
          text: '立即停车，转移到高处',
          nextNode: 'car_stuck_high',
          healthChange: -5,
          knowledgeChange: 15
        },
        {
          text: '缓慢行驶继续前进',
          nextNode: 'slow_drive_fail',
          healthChange: -10,
          knowledgeChange: 0
        }
      ]
    },

    go_to_supermarket: {
      id: 'go_to_supermarket',
      text: '你来到超市，发现货架已经被抢购一空，只剩下一些零食。你正准备空手而归时，窗外传来一阵骚动...',
      scene: 'supermarket_situation',
      choices: [
        {
          text: '出去看看发生了什么',
          nextNode: 'see_outside',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '赶紧回家',
          nextNode: 'rush_home',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    see_outside: {
      id: 'see_outside',
      text: '你走出超市，看到街道上的积水已经漫过了车轮。有人在大声呼喊，说前面的桥下有车辆被洪水冲走了！',
      scene: 'street_flooding',
      choices: [
        {
          text: '寻找地势较高的建筑躲避',
          nextNode: 'find_high_ground',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '徒步涉水回家（很近）',
          nextNode: 'wade_home',
          healthChange: -10,
          knowledgeChange: 0
        }
      ]
    },

    find_high_ground: {
      id: 'find_high_ground',
      text: '你快速转移到超市的二楼仓库。这里地势较高，视野开阔，可以看到街道上的洪水正在快速上涨...',
      scene: 'high_ground_supermarket',
      choices: [
        {
          text: '用手机关注最新汛情',
          nextNode: 'monitor_flood',
          healthChange: 0,
          knowledgeChange: 5
        },
        {
          text: '帮助超市员工一起转移货物',
          nextNode: 'help_move_goods',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    monitor_flood: {
      id: 'monitor_flood',
      text: '你通过手机关注汛情，看到政府已经启动I级应急响应。救援队伍正在组织救援。你安全地在高处等待。',
      scene: 'monitoring_rescue',
      isEnding: true,
      endingType: 'win'
    },

    help_move_goods: {
      id: 'help_move_goods',
      text: '你和超市员工一起将重要物资转移到高处。你的行为帮助减少了财产损失，也为大家提供了物资保障。',
      scene: 'good_samaritan',
      isEnding: true,
      endingType: 'win'
    },

    rush_home: {
      id: 'rush_home',
      text: '你快步往家赶，但街道上的积水越来越深。你不得不蹚水前进，水流开始变得湍急...',
      scene: 'wading_street',
      choices: [
        {
          text: '抓住路边的栏杆稳住身体',
          nextNode: 'grab_railing',
          healthChange: -5,
          knowledgeChange: 10
        },
        {
          text: '继续往前走',
          nextNode: 'continue_wade',
          healthChange: -15,
          knowledgeChange: 0
        }
      ]
    },

    grab_railing: {
      id: 'grab_railing',
      text: '你紧紧抓住栏杆，稳住了身体。但水流越来越急，你无法继续前进。',
      scene: 'holding_on',
      choices: [
        {
          text: '慢慢蹲下降低重心，等待救援',
          nextNode: 'crouch_wait',
          healthChange: -5,
          knowledgeChange: 10
        },
        {
          text: '尝试往回走',
          nextNode: 'try_back',
          healthChange: -10,
          knowledgeChange: 0
        }
      ]
    },

    crouch_wait: {
      id: 'crouch_wait',
      text: '你蹲下来降低重心，紧紧抓住栏杆。救援人员赶到后将你安全救出。',
      scene: 'rescued_flood',
      isEnding: true,
      endingType: 'win'
    },

    try_back: {
      id: 'try_back',
      text: '你试图往回走，但水流太急，你被冲倒，卷入洪水中...',
      scene: 'swept_away',
      isEnding: true,
      endingType: 'lose'
    },

    continue_wade: {
      id: 'continue_wade',
      text: '你继续蹚水前进，但突然脚下一滑，掉入一个被洪水掩盖的坑洼中！水流瞬间将你卷走...',
      scene: 'carried_by_flood',
      isEnding: true,
      endingType: 'lose'
    },

    rush_through: {
      id: 'rush_through',
      text: '你加大油门想冲过积水区，但车突然熄火，水开始从车门缝隙渗入车内！',
      scene: 'car_flooding',
      timerConfig: {
        enabled: true,
        duration: 10,
        urgencyLevel: 'critical',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 0,
          healthChange: -15,
          knowledgeChange: 0,
          message: '水正在涌入车内！'
        }
      },
      choices: [
        {
          text: '立刻弃车逃生',
          nextNode: 'abandon_car',
          healthChange: -5,
          knowledgeChange: 10
        },
        {
          text: '试图重新发动车辆',
          nextNode: 'try_restart',
          healthChange: -15,
          knowledgeChange: 0
        }
      ]
    },

    abandon_car: {
      id: 'abandon_car',
      text: '你迅速解开安全带，推开车门向高处撤离。车子很快被洪水淹没...',
      scene: 'car_abandoned',
      choices: [
        {
          text: '跑到附近的高层建筑',
          nextNode: 'run_to_building',
          healthChange: -5,
          knowledgeChange: 10
        }
      ]
    },

    run_to_building: {
      id: 'run_to_building',
      text: '你跑进了一栋高层建筑的大堂，这里已经聚集了不少避险的市民。物业正在组织大家到高层躲避。',
      scene: 'building_shelter',
      isEnding: true,
      endingType: 'win'
    },

    try_restart: {
      id: 'try_restart',
      text: '你试图重新发动车辆，但发动机进水损坏。车内水位迅速上升，你被困在车内...',
      scene: 'trapped_in_car',
      isEnding: true,
      endingType: 'lose'
    },

    car_stuck_high: {
      id: 'car_stuck_high',
      text: '你立即停车，和车里的家人一起转移到高处。但水位还在上涨，你需要找到更安全的地方...',
      scene: 'evacuated_from_car',
      choices: [
        {
          text: '爬上路边的一棵大树',
          nextNode: 'climb_tree',
          healthChange: -5,
          knowledgeChange: 5
        },
        {
          text: '跑到附近的立交桥上',
          nextNode: 'run_to_overpass',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    climb_tree: {
      id: 'climb_tree',
      text: '你和家人爬上了路边的大树。但水位还在上涨，情况紧急。你需要做出决定...',
      scene: 'tree_climbing',
      choices: [
        {
          text: '继续往上爬，等待救援',
          nextNode: 'high_tree_wait',
          healthChange: -5,
          knowledgeChange: 5
        },
        {
          text: '跳到另一棵更粗的树上',
          nextNode: 'jump_tree',
          healthChange: -15,
          knowledgeChange: 0
        }
      ]
    },

    high_tree_wait: {
      id: 'high_tree_wait',
      text: '你们紧紧抱住树干等待救援。几个小时后，救援人员用冲锋舟将你们安全救出。',
      scene: 'rescued_tree',
      isEnding: true,
      endingType: 'win'
    },

    jump_tree: {
      id: 'jump_tree',
      text: '你试图跳到另一棵树上，但跳跃失败，你落入湍急的洪水中...',
      scene: 'fall_into_flood',
      isEnding: true,
      endingType: 'lose'
    },

    run_to_overpass: {
      id: 'run_to_overpass',
      text: '你和家人跑上了立交桥，这里地势较高，相对安全。救援人员正在桥上进行疏散。',
      scene: 'overpass_rescue',
      isEnding: true,
      endingType: 'win'
    },

    slow_drive_fail: {
      id: 'slow_drive_fail',
      text: '你缓慢行驶观察水情，但水位突然快速上涨，车辆在积水中熄火，水开始渗入车内...',
      scene: 'car_sinking',
      choices: [
        {
          text: '立刻弃车往高处跑',
          nextNode: 'abandon_car',
          healthChange: -5,
          knowledgeChange: 10
        }
      ]
    },

    pack_essential: {
      id: 'pack_essential',
      text: '你快速收拾了重要物品：手机、充电宝、身份证、少量现金和饮用水。然后准备出门转移。',
      scene: 'packed_essentials',
      showQuestion: true,
      questionId: 'flood_q5',
      choices: [
        {
          text: '往地势较高的亲戚家转移',
          nextNode: 'go_to_relative',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '去社区临时避险中心',
          nextNode: 'go_to_shelter',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '等水退了在走',
          nextNode: 'wait_water_level',
          healthChange: 0,
          knowledgeChange: 5
        }
      ]
    },

    call_parents: {
      id: 'call_parents',
      text: '你赶紧给父母打电话，得知他们住在低洼地区，水已经开始浸入了！你必须赶紧去救援他们...',
      scene: 'parents_in_danger',
      choices: [
        {
          text: '驾车去接父母',
          nextNode: 'drive_to_rescue_parents',
          healthChange: -5,
          knowledgeChange: 5
        },
        {
          text: '打电话让父母往高处走，你远程指导',
          nextNode: 'remote_guide_parents',
          healthChange: 0,
          knowledgeChange: 10
        },
        {
          text: '拨打110/119请求救援父母',
          nextNode: 'call_rescue_parents',
          healthChange: 0,
          knowledgeChange: 10
        }
      ]
    },

    drive_to_rescue_parents: {
      id: 'drive_to_rescue_parents',
      text: '你驾车前往父母家，但途中道路被洪水淹没，你不得不折返，白白浪费了宝贵时间...',
      scene: 'failed_rescue_attempt',
      choices: [
        {
          text: '远程指导父母自救',
          nextNode: 'remote_guide-parents',
          healthChange: -5,
          knowledgeChange: 5
        }
      ]
    },

    remote_guide_parents: {
      id: 'remote_guide_parents',
      text: '你通过电话指导父母转移到邻居家的二层楼。你冷静的指导帮助父母安全避险。',
      scene: 'parents_safe',
      isEnding: true,
      endingType: 'win'
    },

    call_rescue_parents: {
      id: 'call_rescue_parents',
      text: '你拨打了119和110，救援人员迅速赶到，成功将你的父母转移到安全地点。',
      scene: 'rescue_parents_success',
      isEnding: true,
      endingType: 'win'
    },

    go_to_relative: {
      id: 'go_to_relative',
      text: '你往郊外地势较高的亲戚家转移。一路上水深变化无常，你小心翼翼地驾驶，终于安全到达。',
      scene: 'arrived_relative',
      isEnding: true,
      endingType: 'win'
    },

    go_to_shelter: {
      id: 'go_to_shelter',
      text: '你来到社区临时避险中心，这里有政府提供的基本生活保障和专业医疗人员。你安全地度过了洪水危机。',
      scene: 'community_shelter',
      isEnding: true,
      endingType: 'win'
    },

    wait_too_long: {
      id: 'wait_too_long',
      text: '你继续观察水情，但水位在短短30分钟内迅速上涨，已经来不及撤离了！',
      scene: 'trapped_home',
      showQuestion: true,
      questionId: 'flood_q7',
      timerConfig: {
        enabled: true,
        duration: 15,
        urgencyLevel: 'critical',
        onTimeout: {
          autoSelect: true,
          defaultChoiceIndex: 0,
          healthChange: -15,
          knowledgeChange: 0,
          message: '洪水已经进入屋内！'
        }
      },
      choices: [
        {
          text: '迅速转移到屋顶',
          nextNode: 'roof_escape',
          healthChange: -5,
          knowledgeChange: 10
        },
        {
          text: '往高层跑',
          nextNode: 'high_floor_escape',
          healthChange: -5,
          knowledgeChange: 10
        }
      ]
    },

    roof_escape: {
      id: 'roof_escape',
      text: '你爬上屋顶，挥舞衣物求救。救援人员用冲锋舟将你救出。',
      scene: 'roof_rescue',
      isEnding: true,
      endingType: 'win'
    },

    high_floor_escape: {
      id: 'high_floor_escape',
      text: '你跑到高层和邻居们一起避险。大家互相帮助，共同等待救援。',
      scene: 'high_floor_waiting',
      isEnding: true,
      endingType: 'win'
    },

    late_escape_flood: {
      id: 'late_escape_flood',
      text: '你慌忙往高处跑，但洪水流速太快，你被卷入水中...',
      scene: 'caught_by_flood',
      isEnding: true,
      endingType: 'lose'
    },

    wait_rescue_flood: {
      id: 'wait_rescue_flood',
      text: '你待在家里等待救援，但洪水越来越大，已经漫过了一楼。你不得不转移到更高楼层。',
      scene: 'flood_escalating',
      showQuestion: true,
      questionId: 'flood_q6',
      choices: [
        {
          text: '保存体力，抓住漂浮物',
          nextNode: 'grab_floating',
          healthChange: -5,
          knowledgeChange: 10
        },
        {
          text: '试图游泳逃生',
          nextNode: 'try_swim_escape',
          healthChange: -15,
          knowledgeChange: 0
        }
      ]
    },

    grab_floating: {
      id: 'grab_floating',
      text: '你抓住一个塑料桶保存体力，救援人员发现了你并成功将你救出。',
      scene: 'rescued_floating',
      isEnding: true,
      endingType: 'win'
    },

    try_swim_escape: {
      id: 'try_swim_escape',
      text: '你试图游泳逃生，但洪水流速太快，你体力耗尽被冲走...',
      scene: 'swimming_failed',
      isEnding: true,
      endingType: 'lose'
    },

    wade_home: {
      id: 'wade_home',
      text: '你蹚水回家，但水流越来越急。你突然脚下一空，掉入了被水淹没的排水沟...',
      scene: 'drain_trap',
      isEnding: true,
      endingType: 'lose'
    }
  },

  metadata: {
    title: '洪水应对篇',
    endingTitle: '抗洪',
    intro: '了解洪水灾害的应急措施，认识洪水预警信号',

    achievements: [
      {
        id: 'flood_master',
        name: '防洪达人',
        icon: '🌊',
        type: 'gold',
        condition: (state) => state.endingRating === '完美通关'
      },
      {
        id: 'prepared_survivor',
        name: '有备无患',
        icon: '🎒',
        type: 'blue',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'prepare_emergency')
      },
      {
        id: 'filial_piety',
        name: '孝心感人',
        icon: '❤️',
        type: 'red',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'call_rescue_parents' || c.nodeId === 'remote_guide_parents')
      },
      {
        id: 'community_hero',
        name: '社区英雄',
        icon: '🏅',
        type: 'green',
        condition: (state) => state.choicesMade.some(c => c.nodeId === 'go_to_shelter')
      }
    ],

    tips: [
      {
        id: 'tip1',
        icon: '📢',
        title: '关注预警',
        description: '密切关注气象预警信息，洪水预警等级从低到高为蓝色、黄色、橙色、红色。',
        relevantWhen: ['prepare_emergency', 'emergency_broadcast']
      },
      {
        id: 'tip2',
        icon: '🚗',
        title: '行车避险',
        description: '遇洪水淹没道路应立即停车，转移到高处。切勿强行涉水或弃车跳入洪水中。',
        relevantWhen: ['drive_to_work', 'car_stuck_high']
      },
      {
        id: 'tip3',
        icon: '🏠',
        title: '建筑内避险',
        description: '洪水浸入建筑时，迅速转移到高层屋顶或天台，切勿留在地下室。',
        relevantWhen: ['wait_too_long', 'roof_escape']
      },
      {
        id: 'tip4',
        icon: '🚫',
        title: '禁止行为',
        description: '严禁徒步涉水、跨越洪水、靠近河道、围观洪水。看似浅薄的水流可能暗藏危险。',
        relevantWhen: ['wade_home', 'continue_wade']
      },
      {
        id: 'tip5',
        icon: '🆘',
        title: '被困求救',
        description: '被困时抓住漂浮物保存体力，拨打119/110或敲击物体发出求救信号。',
        relevantWhen: ['wait_rescue_flood', 'grab_floating']
      },
      {
        id: 'tip6',
        icon: '🏃',
        title: '撤离原则',
        description: '遵循"听谁"原则：听政府预警、听社区指挥、听救援人员安排。不要单独行动。',
        relevantWhen: ['prepare_emergency', 'go_to_shelter']
      }
    ]
  }
}

export default floodScenario
