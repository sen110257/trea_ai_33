export const ingredientCategories = [
  { id: 'vegetable', name: '蔬菜', icon: '🥬' },
  { id: 'fruit', name: '水果', icon: '🍎' },
  { id: 'meat', name: '肉类', icon: '🥩' },
  { id: 'seafood', name: '水产', icon: '🐟' },
  { id: 'dry', name: '干货', icon: '🌰' }
]

export const recipeCategories = [
  { id: 'home', name: '家常菜', icon: '🍳' },
  { id: 'soup', name: '汤粥', icon: '🥣' },
  { id: 'dessert', name: '甜品', icon: '🍰' },
  { id: 'quick', name: '快手菜', icon: '⚡' },
  { id: 'vegetarian', name: '素菜', icon: '🥗' },
  { id: 'meat_dish', name: '荤菜', icon: '🍖' }
]

export const ingredients = [
  {
    id: 1,
    name: '西红柿',
    category: 'vegetable',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=新鲜红西红柿，白色背景，食品摄影&image_size=square',
    tags: ['防癌', '抗氧化', '维生素C'],
    effects: '西红柿富含番茄红素，具有强大的抗氧化作用，有助于预防前列腺癌、肺癌等多种癌症。富含维生素C和维生素A，有助于增强免疫力，保护心血管健康。西红柿中的膳食纤维有助于促进消化，预防便秘。',
    taboos: '1. 脾胃虚寒者不宜生食西红柿，容易导致腹泻。\n2. 服用肝素、双香豆素等抗凝血药物时不宜食用。\n3. 不宜与黄瓜同食，黄瓜含有维生素C分解酶，会破坏西红柿中的维生素C。\n4. 未成熟的青西红柿含有龙葵素，食用后可能中毒。',
    suggestions: '1. 搭配鸡蛋：西红柿炒鸡蛋是经典搭配，营养互补。\n2. 搭配牛肉：西红柿炖牛肉，番茄红素有助于铁的吸收。\n3. 搭配豆腐：西红柿豆腐汤，营养丰富且易于消化。\n4. 少量油脂加热：番茄红素是脂溶性的，加热后更易吸收。',
    notices: '1. 西红柿最好在餐后食用，可促进胃液分泌，帮助消化。\n2. 购买时选择颜色鲜红、饱满、有弹性的西红柿。\n3. 储存时不宜放入冰箱，低温会影响口感和营养价值。\n4. 西红柿皮富含膳食纤维和抗氧化物质，最好带皮食用。',
    compatible: [
      { name: '鸡蛋', desc: '营养互补，促进蛋白质吸收，味道鲜美' },
      { name: '牛肉', desc: '番茄红素有助于铁的吸收，补气养血' },
      { name: '西兰花', desc: '双重抗氧化，防癌抗癌效果更佳' },
      { name: '洋葱', desc: '降血压、降血脂，保护心血管' }
    ],
    incompatible: [
      { name: '黄瓜', desc: '黄瓜含维生素C分解酶，会破坏西红柿中的维生素C' },
      { name: '胡萝卜', desc: '胡萝卜含维生素C分解酶，降低营养价值' },
      { name: '鱼', desc: '西红柿中的维生素C会抑制鱼肉中营养物质的吸收' },
      { name: '红薯', desc: '同食会产生不良反应，可能导致腹痛、腹泻' }
    ],
    hot: true
  },
  {
    id: 2,
    name: '西兰花',
    category: 'vegetable',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=新鲜西兰花，白色背景，食品摄影&image_size=square',
    tags: ['抗癌', '叶酸', '膳食纤维'],
    effects: '西兰花是十字花科蔬菜中的佼佼者，富含萝卜硫素，具有强大的抗癌作用。富含维生素C、维生素K和叶酸，有助于增强免疫力、促进骨骼健康。膳食纤维含量高，有助于控制体重、改善肠道功能。',
    taboos: '1. 痛风患者慎食，西兰花含有一定量的嘌呤。\n2. 甲状腺疾病患者不宜过量食用，可能影响碘吸收。\n3. 对十字花科蔬菜过敏者禁食。\n4. 服用抗凝血药物者需注意，西兰花含维生素K。',
    suggestions: '1. 搭配西红柿：双重抗氧化，防癌效果更佳。\n2. 搭配大蒜：增强免疫力，抗菌消炎。\n3. 搭配虾仁：优质蛋白质与维生素互补。\n4. 搭配橄榄油：帮助吸收脂溶性维生素。',
    notices: '1. 烹饪时间不宜过长，最好焯水2-3分钟，保留营养。\n2. 食用前用盐水浸泡15分钟，去除农药残留。\n3. 西兰花茎部也富含营养，不要丢弃。\n4. 选择颜色鲜绿、花球紧密的西兰花。',
    compatible: [
      { name: '西红柿', desc: '双重抗氧化，防癌抗癌效果更佳' },
      { name: '大蒜', desc: '增强免疫力，抗菌消炎' },
      { name: '虾仁', desc: '优质蛋白质与维生素互补' },
      { name: '胡萝卜', desc: '营养丰富，保护视力' }
    ],
    incompatible: [
      { name: '动物肝脏', desc: '肝脏中的铜铁会破坏西兰花中的维生素C' },
      { name: '牛奶', desc: '影响钙的吸收' }
    ],
    hot: true
  },
  {
    id: 3,
    name: '胡萝卜',
    category: 'vegetable',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=新鲜胡萝卜，白色背景，食品摄影&image_size=square',
    tags: ['护眼', 'β胡萝卜素', '维生素A'],
    effects: '胡萝卜富含β-胡萝卜素，在体内可转化为维生素A，对保护视力、预防夜盲症有重要作用。有助于增强免疫力、保护心血管健康。膳食纤维有助于促进消化。',
    taboos: '1. 过量食用可能导致皮肤黄染（胡萝卜素血症），停止食用后可恢复。\n2. 不宜与富含维生素C的食物同食，会破坏维生素C。\n3. 脾胃虚寒者不宜生食。',
    suggestions: '1. 搭配肉类：β-胡萝卜素是脂溶性的，与肉类同炒更易吸收。\n2. 搭配洋葱：降血压、降血脂。\n3. 搭配玉米：营养互补，增加膳食纤维。',
    notices: '1. 胡萝卜最好用油炒或与肉类同炖，以利于β-胡萝卜素吸收。\n2. 胡萝卜皮富含营养，最好带皮食用，清洗干净即可。\n3. 选择颜色鲜艳、表面光滑的胡萝卜。',
    compatible: [
      { name: '猪肉', desc: 'β-胡萝卜素是脂溶性的，与肉类同炒更易吸收' },
      { name: '洋葱', desc: '降血压、降血脂，保护心血管' },
      { name: '玉米', desc: '营养互补，增加膳食纤维' },
      { name: '西兰花', desc: '营养丰富，保护视力' }
    ],
    incompatible: [
      { name: '西红柿', desc: '胡萝卜含维生素C分解酶，会破坏西红柿中的维生素C' },
      { name: '山楂', desc: '山楂富含维生素C，会被胡萝卜破坏' },
      { name: '白萝卜', desc: '两者同食会降低营养价值' }
    ],
    hot: false
  },
  {
    id: 4,
    name: '菠菜',
    category: 'vegetable',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=新鲜菠菜，白色背景，食品摄影&image_size=square',
    tags: ['补铁', '叶酸', '膳食纤维'],
    effects: '菠菜富含铁元素和叶酸，有助于预防缺铁性贫血。富含维生素K，有助于骨骼健康。膳食纤维含量高，有助于改善肠道功能。',
    taboos: '1. 菠菜含有较多草酸，不宜与富含钙的食物同食，会影响钙吸收。\n2. 肾结石患者慎食，草酸可能加重结石。\n3. 脾胃虚寒、腹泻者不宜多食。',
    suggestions: '1. 焯水后食用：焯水可去除大部分草酸。\n2. 搭配鸡蛋：营养互补，促进铁吸收。\n3. 搭配猪肝：补铁效果更佳。',
    notices: '1. 菠菜最好先焯水再烹饪，去除草酸。\n2. 菠菜根也富含营养，不要丢弃。\n3. 选择叶片鲜嫩、颜色深绿的菠菜。',
    compatible: [
      { name: '鸡蛋', desc: '营养互补，促进铁吸收' },
      { name: '猪肝', desc: '补铁效果更佳，预防贫血' },
      { name: '猪血', desc: '补铁补血' },
      { name: '花生', desc: '营养互补，抗衰老' }
    ],
    incompatible: [
      { name: '豆腐', desc: '菠菜含草酸，豆腐含钙，易形成结石' },
      { name: '牛奶', desc: '影响钙的吸收' },
      { name: '黄豆', desc: '影响钙的吸收' }
    ],
    hot: true
  },
  {
    id: 5,
    name: '苹果',
    category: 'fruit',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=新鲜红苹果，白色背景，食品摄影&image_size=square',
    tags: ['抗氧化', '膳食纤维', '降血压'],
    effects: '苹果富含膳食纤维和多种维生素，有助于促进消化、降低胆固醇。苹果皮富含抗氧化物质，有助于预防慢性疾病。有助于控制体重、稳定血糖。',
    taboos: '1. 溃疡性结肠炎患者不宜生食苹果，尤其是急性发作期。\n2. 胃寒者不宜生食苹果，可蒸熟食用。\n3. 苹果核含有少量氰化物，不要食用。',
    suggestions: '1. 搭配酸奶：益生菌与膳食纤维互补，促进消化。\n2. 搭配燕麦：营养早餐，控制血糖。\n3. 搭配蜂蜜：润肺止咳，润肠通便。',
    notices: '1. 苹果最好带皮食用，皮富含营养。\n2. 早上吃苹果效果最佳，促进消化。\n3. 选择色泽均匀、无损伤的苹果。',
    compatible: [
      { name: '酸奶', desc: '益生菌与膳食纤维互补，促进消化' },
      { name: '燕麦', desc: '营养早餐，控制血糖' },
      { name: '蜂蜜', desc: '润肺止咳，润肠通便' },
      { name: '胡萝卜', desc: '增强免疫力' }
    ],
    incompatible: [
      { name: '海鲜', desc: '苹果中的鞣酸与海鲜中的蛋白质结合，可能引起腹痛' },
      { name: '牛奶', desc: '果酸与蛋白质结合，影响消化吸收' }
    ],
    hot: true
  },
  {
    id: 6,
    name: '香蕉',
    category: 'fruit',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=新鲜香蕉，白色背景，食品摄影&image_size=square',
    tags: ['补钾', '润肠通便', '缓解压力'],
    effects: '香蕉富含钾元素，有助于维持心脏和肌肉功能。富含膳食纤维，有助于润肠通便。含有天然的镁元素，有助于缓解压力、改善睡眠。',
    taboos: '1. 空腹不宜大量食用香蕉，可能引起心脏不适。\n2. 脾胃虚寒、便溏者不宜多食。\n3. 糖尿病患者慎食，香蕉含糖量较高。\n4. 肾炎患者慎食，钾含量高。',
    suggestions: '1. 搭配牛奶：营养互补，促进钙吸收。\n2. 搭配燕麦：营养早餐，增加饱腹感。\n3. 搭配蜂蜜：润肠通便效果更佳。',
    notices: '1. 香蕉最好在饭后食用，避免空腹。\n2. 选择表皮有少量斑点但果肉完好的香蕉，甜度最佳。\n3. 未成熟的香蕉含有鞣酸，反而可能导致便秘。',
    compatible: [
      { name: '牛奶', desc: '营养互补，促进钙吸收' },
      { name: '燕麦', desc: '营养早餐，增加饱腹感' },
      { name: '蜂蜜', desc: '润肠通便效果更佳' },
      { name: '草莓', desc: '营养丰富，抗氧化' }
    ],
    incompatible: [
      { name: '红薯', desc: '同食可能引起腹胀' },
      { name: '芋头', desc: '同食可能引起腹胀' },
      { name: '西瓜', desc: '脾胃虚寒者同食易腹泻' }
    ],
    hot: false
  },
  {
    id: 7,
    name: '鸡蛋',
    category: 'meat',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=新鲜鸡蛋，白色背景，食品摄影&image_size=square',
    tags: ['优质蛋白质', '卵磷脂', '维生素D'],
    effects: '鸡蛋是优质蛋白质的最佳来源之一，含有人体必需的氨基酸。蛋黄富含卵磷脂，有助于大脑发育和记忆力提升。富含维生素D和维生素B族。',
    taboos: '1. 鸡蛋不宜生吃，可能含有沙门氏菌。\n2. 高胆固醇患者不宜过量食用蛋黄。\n3. 对鸡蛋过敏者禁食。\n4. 鸡蛋与豆浆同食会影响蛋白质吸收。',
    suggestions: '1. 搭配西红柿：经典搭配，营养互补。\n2. 搭配韭菜：补肾壮阳，营养丰富。\n3. 搭配虾仁：优质蛋白质互补。',
    notices: '1. 鸡蛋最好煮熟食用，避免细菌感染。\n2. 每日食用1-2个鸡蛋为宜，不宜过量。\n3. 选择蛋壳光滑、无裂痕的新鲜鸡蛋。',
    compatible: [
      { name: '西红柿', desc: '经典搭配，营养互补，促进蛋白质吸收' },
      { name: '韭菜', desc: '补肾壮阳，营养丰富' },
      { name: '虾仁', desc: '优质蛋白质互补' },
      { name: '菠菜', desc: '营养互补，促进铁吸收' }
    ],
    incompatible: [
      { name: '豆浆', desc: '豆浆中的胰蛋白酶抑制剂影响鸡蛋蛋白质吸收' },
      { name: '兔肉', desc: '两者同食易导致腹泻' },
      { name: '柿子', desc: '同食可能引起腹痛、腹泻' }
    ],
    hot: true
  },
  {
    id: 8,
    name: '鸡胸肉',
    category: 'meat',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=新鲜鸡胸肉，白色背景，食品摄影&image_size=square',
    tags: ['高蛋白', '低脂肪', '健身首选'],
    effects: '鸡胸肉是优质蛋白质的极佳来源，脂肪含量低，是健身人士的首选。富含多种氨基酸和B族维生素，有助于肌肉生长和修复。',
    taboos: '1. 鸡肉不宜与兔肉同食，易导致腹泻。\n2. 鸡肉不宜与芥末同食，易上火。\n3. 感冒发热、内火偏旺者慎食。',
    suggestions: '1. 搭配西兰花：高蛋白与维生素互补。\n2. 搭配彩椒：增加维生素C，促进铁吸收。\n3. 搭配糙米：营养均衡的健身餐。',
    notices: '1. 鸡胸肉最好去皮食用，减少脂肪摄入。\n2. 烹饪时不宜过度加热，以免肉质变老。\n3. 选择颜色鲜艳、无异味的新鲜鸡胸肉。',
    compatible: [
      { name: '西兰花', desc: '高蛋白与维生素互补' },
      { name: '彩椒', desc: '增加维生素C，促进铁吸收' },
      { name: '糙米', desc: '营养均衡的健身餐' },
      { name: '胡萝卜', desc: '营养丰富' }
    ],
    incompatible: [
      { name: '兔肉', desc: '两者同食易导致腹泻' },
      { name: '芥末', desc: '易上火' },
      { name: '李子', desc: '同食可能引起不良反应' }
    ],
    hot: true
  },
  {
    id: 9,
    name: '三文鱼',
    category: 'seafood',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=新鲜三文鱼，白色背景，食品摄影&image_size=square',
    tags: ['Omega-3', 'DHA', '优质脂肪'],
    effects: '三文鱼富含Omega-3脂肪酸（DHA和EPA），有助于大脑健康、保护心血管。优质蛋白质含量高，易于消化吸收。富含维生素D，有助于钙吸收。',
    taboos: '1. 过敏体质者慎食海鲜。\n2. 痛风患者慎食，嘌呤含量较高。\n3. 出血性疾病患者慎食，Omega-3可能延长凝血时间。\n4. 孕妇慎食生鱼片，避免寄生虫感染。',
    suggestions: '1. 搭配芦笋：营养互补，抗氧化。\n2. 搭配柠檬：去腥增香，促进铁吸收。\n3. 搭配牛油果：健康脂肪组合。',
    notices: '1. 三文鱼最好选择新鲜的，烹饪至全熟更安全。\n2. 生鱼片应选择正规渠道购买的刺身级三文鱼。\n3. 选择肉质呈橙红色、纹理清晰的三文鱼。',
    compatible: [
      { name: '芦笋', desc: '营养互补，抗氧化' },
      { name: '柠檬', desc: '去腥增香，促进铁吸收' },
      { name: '牛油果', desc: '健康脂肪组合' },
      { name: '西兰花', desc: '营养丰富' }
    ],
    incompatible: [
      { name: '柿子', desc: '同食可能引起腹痛、腹泻' },
      { name: '葡萄', desc: '影响消化吸收' },
      { name: '石榴', desc: '影响消化吸收' }
    ],
    hot: true
  },
  {
    id: 10,
    name: '虾',
    category: 'seafood',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=新鲜虾，白色背景，食品摄影&image_size=square',
    tags: ['高蛋白', '低脂肪', '补钙'],
    effects: '虾是优质蛋白质的极佳来源，脂肪含量低。富含钙、磷、镁等矿物质，有助于骨骼健康。含有虾青素，具有抗氧化作用。',
    taboos: '1. 过敏体质者慎食海鲜。\n2. 痛风患者慎食，嘌呤含量较高。\n3. 虾不宜与富含维生素C的食物大量同食，可能产生有害物质。\n4. 虾线含有排泄物，应去除。',
    suggestions: '1. 搭配西兰花：高蛋白与维生素互补。\n2. 搭配韭菜：补肾壮阳。\n3. 搭配鸡蛋：优质蛋白质互补。',
    notices: '1. 虾最好煮熟食用，避免寄生虫感染。\n2. 烹饪前去除虾线和虾头。\n3. 选择虾身完整、有弹性的新鲜虾。',
    compatible: [
      { name: '西兰花', desc: '高蛋白与维生素互补' },
      { name: '韭菜', desc: '补肾壮阳' },
      { name: '鸡蛋', desc: '优质蛋白质互补' },
      { name: '芦笋', desc: '营养丰富' }
    ],
    incompatible: [
      { name: '柿子', desc: '同食可能引起腹痛、腹泻' },
      { name: '葡萄', desc: '影响消化吸收' },
      { name: '石榴', desc: '影响消化吸收' },
      { name: '维生素C片', desc: '大量同食可能产生有害物质' }
    ],
    hot: false
  },
  {
    id: 11,
    name: '黑木耳',
    category: 'dry',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=干黑木耳，白色背景，食品摄影&image_size=square',
    tags: ['清肺', '补血', '膳食纤维'],
    effects: '黑木耳富含膳食纤维，有助于促进消化、降低胆固醇。含铁量高，有助于预防贫血。含有多糖物质，具有抗氧化和免疫调节作用。',
    taboos: '1. 鲜黑木耳含有毒素，不宜食用，应选择干木耳泡发。\n2. 木耳不宜与田螺同食，可能引起消化不良。\n3. 出血性疾病患者慎食。\n4. 孕妇慎食。',
    suggestions: '1. 搭配鸡蛋：营养互补。\n2. 搭配红枣：补血效果更佳。\n3. 搭配洋葱：降血脂、降血压。',
    notices: '1. 干木耳应使用温水泡发，泡发时间不宜过长。\n2. 泡发后应去除根部杂质。\n3. 烹饪前焯水，口感更好。',
    compatible: [
      { name: '鸡蛋', desc: '营养互补' },
      { name: '红枣', desc: '补血效果更佳' },
      { name: '洋葱', desc: '降血脂、降血压' },
      { name: '西兰花', desc: '营养丰富' }
    ],
    incompatible: [
      { name: '田螺', desc: '可能引起消化不良' },
      { name: '萝卜', desc: '可能引起皮炎' }
    ],
    hot: true
  },
  {
    id: 12,
    name: '红枣',
    category: 'dry',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=干红枣，白色背景，食品摄影&image_size=square',
    tags: ['补血', '益气', '维生素C'],
    effects: '红枣富含铁元素和维生素C，有助于补血益气。含有多种维生素和矿物质，有助于增强免疫力。膳食纤维有助于促进消化。',
    taboos: '1. 红枣含糖量高，糖尿病患者慎食。\n2. 湿热体质、舌苔黄腻者不宜多食。\n3. 红枣不宜与海鲜同食。\n4. 过量食用可能导致腹胀。',
    suggestions: '1. 搭配枸杞：滋阴补肾，明目。\n2. 搭配银耳：润肺养颜。\n3. 搭配红豆：补血养颜。',
    notices: '1. 红枣最好去核食用，避免卡喉。\n2. 每日食用3-5颗为宜。\n3. 选择颜色鲜红、饱满的红枣。',
    compatible: [
      { name: '枸杞', desc: '滋阴补肾，明目' },
      { name: '银耳', desc: '润肺养颜' },
      { name: '红豆', desc: '补血养颜' },
      { name: '黑木耳', desc: '补血效果更佳' }
    ],
    incompatible: [
      { name: '海鲜', desc: '可能引起腹痛' },
      { name: '黄瓜', desc: '黄瓜含维生素C分解酶，破坏红枣中的维生素C' }
    ],
    hot: false
  }
]

export const recipes = [
  {
    id: 1,
    name: '西红柿炒鸡蛋',
    category: 'home',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=西红柿炒鸡蛋，家常菜，美食摄影&image_size=square',
    difficulty: '简单',
    time: '15分钟',
    tags: ['家常菜', '快手菜', '下饭菜'],
    likes: 1256,
    hot: true,
    description: '经典家常菜，酸甜可口，营养丰富，是每个家庭餐桌的常客。',
    suitableFor: '老少皆宜，尤其适合儿童和孕妇',
    tips: '1. 西红柿最好选择熟透的，酸甜味更浓。\n2. 鸡蛋要充分打散，炒出来更蓬松。\n3. 可以加少许白糖提鲜，中和酸味。',
    ingredients: [
      { name: '西红柿', amount: '2个' },
      { name: '鸡蛋', amount: '3个' },
      { name: '葱花', amount: '适量' },
      { name: '盐', amount: '适量' },
      { name: '白糖', amount: '少许' },
      { name: '食用油', amount: '适量' }
    ],
    steps: [
      {
        order: 1,
        text: '西红柿洗净切块，鸡蛋打散备用，葱切葱花。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=准备食材，西红柿切块，鸡蛋打散，美食摄影&image_size=square'
      },
      {
        order: 2,
        text: '锅中倒油烧热，倒入鸡蛋液，用筷子快速划散成块，盛出备用。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=炒鸡蛋，美食摄影&image_size=square'
      },
      {
        order: 3,
        text: '锅中留底油，放入葱花爆香，加入西红柿块翻炒。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=炒西红柿，美食摄影&image_size=square'
      },
      {
        order: 4,
        text: '西红柿炒出汁后，加入少许白糖和盐调味。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=西红柿出汁，美食摄影&image_size=square'
      },
      {
        order: 5,
        text: '倒入炒好的鸡蛋，翻炒均匀，让鸡蛋裹上西红柿汁即可出锅。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=西红柿炒鸡蛋成品，美食摄影&image_size=square'
      }
    ]
  },
  {
    id: 2,
    name: '蒜蓉西兰花',
    category: 'vegetarian',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=蒜蓉西兰花，素菜，美食摄影&image_size=square',
    difficulty: '简单',
    time: '10分钟',
    tags: ['素菜', '健康', '低脂'],
    likes: 892,
    hot: true,
    description: '清爽健康的素菜，蒜香浓郁，西兰花保持翠绿，营养不流失。',
    suitableFor: '减肥人群、健康饮食爱好者',
    tips: '1. 西兰花焯水时间不宜过长，保持脆嫩口感。\n2. 焯水时加少许盐和油，颜色更翠绿。\n3. 蒜末要最后放，避免炒糊。',
    ingredients: [
      { name: '西兰花', amount: '1朵' },
      { name: '大蒜', amount: '5瓣' },
      { name: '盐', amount: '适量' },
      { name: '生抽', amount: '1勺' },
      { name: '食用油', amount: '适量' }
    ],
    steps: [
      {
        order: 1,
        text: '西兰花掰成小朵，用盐水浸泡15分钟后洗净，大蒜切末。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=准备食材，西兰花掰朵，蒜末，美食摄影&image_size=square'
      },
      {
        order: 2,
        text: '锅中加水烧开，加少许盐和油，放入西兰花焯水2分钟。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=西兰花焯水，美食摄影&image_size=square'
      },
      {
        order: 3,
        text: '捞出西兰花过凉水，沥干水分备用。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=西兰花过凉水，美食摄影&image_size=square'
      },
      {
        order: 4,
        text: '锅中倒油烧热，放入大部分蒜末爆香。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=爆香蒜末，美食摄影&image_size=square'
      },
      {
        order: 5,
        text: '加入西兰花翻炒，加盐和生抽调味，最后加入剩余蒜末翻炒均匀即可。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=蒜蓉西兰花成品，美食摄影&image_size=square'
      }
    ]
  },
  {
    id: 3,
    name: '清蒸鲈鱼',
    category: 'seafood',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=清蒸鲈鱼，海鲜，美食摄影&image_size=square',
    difficulty: '中等',
    time: '20分钟',
    tags: ['海鲜', '清淡', '高蛋白'],
    likes: 756,
    hot: true,
    description: '经典粤式做法，鱼肉鲜嫩，原汁原味，营养丰富。',
    suitableFor: '老人、儿童、孕妇',
    tips: '1. 鱼要新鲜，蒸出来才鲜美。\n2. 蒸鱼时间要控制好，根据鱼的大小调整。\n3. 最后淋热油是关键，激发出葱香。',
    ingredients: [
      { name: '鲈鱼', amount: '1条' },
      { name: '姜片', amount: '适量' },
      { name: '葱段', amount: '适量' },
      { name: '葱丝', amount: '适量' },
      { name: '蒸鱼豉油', amount: '2勺' },
      { name: '料酒', amount: '1勺' },
      { name: '食用油', amount: '适量' }
    ],
    steps: [
      {
        order: 1,
        text: '鲈鱼处理干净，在鱼身两面划几刀，抹上料酒和盐，腌制10分钟。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=鲈鱼处理干净，美食摄影&image_size=square'
      },
      {
        order: 2,
        text: '鱼身放姜片和葱段，鱼腹内也放姜片去腥。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=鲈鱼放姜片葱段，美食摄影&image_size=square'
      },
      {
        order: 3,
        text: '蒸锅加水烧开，放入鲈鱼，大火蒸8-10分钟。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=蒸鱼，美食摄影&image_size=square'
      },
      {
        order: 4,
        text: '蒸好后取出，倒掉盘中蒸出的汤汁，去掉姜片和葱段，放上葱丝。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=蒸鱼取出，美食摄影&image_size=square'
      },
      {
        order: 5,
        text: '淋上蒸鱼豉油，锅中烧热油，淋在葱丝上激发出香味即可。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=清蒸鲈鱼成品，美食摄影&image_size=square'
      }
    ]
  },
  {
    id: 4,
    name: '可乐鸡翅',
    category: 'meat_dish',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=可乐鸡翅，荤菜，美食摄影&image_size=square',
    difficulty: '简单',
    time: '30分钟',
    tags: ['荤菜', '下饭菜', '甜香'],
    likes: 1523,
    hot: true,
    description: '甜香浓郁的家常菜，鸡翅软烂入味，色泽诱人，是孩子们的最爱。',
    suitableFor: '老少皆宜',
    tips: '1. 鸡翅焯水要冷水下锅，去除血水更彻底。\n2. 用无糖可乐也可以，减少糖分摄入。\n3. 最后大火收汁，颜色更漂亮。',
    ingredients: [
      { name: '鸡翅中', amount: '10个' },
      { name: '可乐', amount: '1罐(330ml)' },
      { name: '姜片', amount: '适量' },
      { name: '葱段', amount: '适量' },
      { name: '料酒', amount: '2勺' },
      { name: '生抽', amount: '2勺' },
      { name: '老抽', amount: '1勺' },
      { name: '盐', amount: '少许' }
    ],
    steps: [
      {
        order: 1,
        text: '鸡翅中洗净，两面各划两刀便于入味。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=鸡翅划刀，美食摄影&image_size=square'
      },
      {
        order: 2,
        text: '鸡翅冷水下锅，加姜片和料酒焯水，撇去浮沫后捞出洗净。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=鸡翅焯水，美食摄影&image_size=square'
      },
      {
        order: 3,
        text: '锅中倒油，放入鸡翅煎至两面金黄。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=煎鸡翅，美食摄影&image_size=square'
      },
      {
        order: 4,
        text: '加入姜片、葱段、生抽、老抽、料酒翻炒均匀。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=翻炒鸡翅，美食摄影&image_size=square'
      },
      {
        order: 5,
        text: '倒入可乐，大火烧开后转中小火炖煮15-20分钟。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=炖鸡翅，美食摄影&image_size=square'
      },
      {
        order: 6,
        text: '大火收汁，加盐调味，翻炒均匀即可出锅。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=可乐鸡翅成品，美食摄影&image_size=square'
      }
    ]
  },
  {
    id: 5,
    name: '番茄鸡蛋汤',
    category: 'soup',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=番茄鸡蛋汤，汤类，美食摄影&image_size=square',
    difficulty: '简单',
    time: '10分钟',
    tags: ['汤类', '快手菜', '清淡'],
    likes: 945,
    hot: false,
    description: '简单快手的营养汤品，酸甜可口，开胃下饭。',
    suitableFor: '老少皆宜',
    tips: '1. 鸡蛋液要慢慢倒入，边倒边搅拌，蛋花更细腻。\n2. 可以加少许水淀粉勾芡，汤汁更浓稠。\n3. 出锅前淋少许香油，更香。',
    ingredients: [
      { name: '西红柿', amount: '2个' },
      { name: '鸡蛋', amount: '2个' },
      { name: '葱花', amount: '适量' },
      { name: '盐', amount: '适量' },
      { name: '白糖', amount: '少许' },
      { name: '香油', amount: '少许' }
    ],
    steps: [
      {
        order: 1,
        text: '西红柿切块，鸡蛋打散，葱切葱花。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=准备食材，西红柿鸡蛋，美食摄影&image_size=square'
      },
      {
        order: 2,
        text: '锅中加适量水烧开，放入西红柿块煮软出汁。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=煮西红柿，美食摄影&image_size=square'
      },
      {
        order: 3,
        text: '加盐和少许白糖调味。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=调味，美食摄影&image_size=square'
      },
      {
        order: 4,
        text: '转小火，将鸡蛋液慢慢倒入锅中，边倒边用筷子轻轻搅拌。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=倒鸡蛋液，美食摄影&image_size=square'
      },
      {
        order: 5,
        text: '蛋花成型后关火，加入葱花和香油即可。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=番茄鸡蛋汤成品，美食摄影&image_size=square'
      }
    ]
  },
  {
    id: 6,
    name: '蛋炒饭',
    category: 'quick',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=蛋炒饭，快手菜，美食摄影&image_size=square',
    difficulty: '简单',
    time: '10分钟',
    tags: ['快手菜', '主食', '便捷'],
    likes: 1123,
    hot: true,
    description: '经典快手主食，粒粒分明，香气四溢，是懒人必备。',
    suitableFor: '老少皆宜',
    tips: '1. 最好用隔夜饭，米饭松散，炒出来粒粒分明。\n2. 先炒鸡蛋，再炒米饭，顺序很重要。\n3. 用大火快炒，米饭更香。',
    ingredients: [
      { name: '米饭', amount: '1碗' },
      { name: '鸡蛋', amount: '2个' },
      { name: '葱花', amount: '适量' },
      { name: '盐', amount: '适量' },
      { name: '生抽', amount: '少许' },
      { name: '食用油', amount: '适量' }
    ],
    steps: [
      {
        order: 1,
        text: '米饭提前打散，鸡蛋打散，葱切葱花。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=准备食材，米饭鸡蛋，美食摄影&image_size=square'
      },
      {
        order: 2,
        text: '锅中倒油烧热，倒入鸡蛋液炒成块，盛出备用。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=炒鸡蛋，美食摄影&image_size=square'
      },
      {
        order: 3,
        text: '锅中再加少许油，倒入米饭大火快炒。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=炒米饭，美食摄影&image_size=square'
      },
      {
        order: 4,
        text: '米饭炒散后，加入盐和少许生抽调味。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=调味，美食摄影&image_size=square'
      },
      {
        order: 5,
        text: '倒入炒好的鸡蛋和葱花，翻炒均匀即可。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=蛋炒饭成品，美食摄影&image_size=square'
      }
    ]
  },
  {
    id: 7,
    name: '糖醋里脊',
    category: 'meat_dish',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=糖醋里脊，荤菜，美食摄影&image_size=square',
    difficulty: '中等',
    time: '25分钟',
    tags: ['荤菜', '经典', '酸甜'],
    likes: 1876,
    hot: true,
    description: '外酥里嫩，酸甜可口的经典名菜，色泽金黄，让人食欲大开。',
    suitableFor: '老少皆宜',
    tips: '1. 里脊肉要顺着纹路切，口感更嫩。\n2. 面糊要挂匀，炸出来外皮才酥脆。\n3. 糖醋汁比例要调好，酸甜适中。',
    ingredients: [
      { name: '猪里脊肉', amount: '300g' },
      { name: '鸡蛋', amount: '1个' },
      { name: '淀粉', amount: '适量' },
      { name: '番茄酱', amount: '3勺' },
      { name: '白醋', amount: '2勺' },
      { name: '白糖', amount: '2勺' },
      { name: '生抽', amount: '1勺' },
      { name: '料酒', amount: '1勺' },
      { name: '盐', amount: '少许' },
      { name: '食用油', amount: '适量' }
    ],
    steps: [
      {
        order: 1,
        text: '里脊肉切成长条，加料酒、盐腌制15分钟。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=里脊肉切条腌制，美食摄影&image_size=square'
      },
      {
        order: 2,
        text: '调糖醋汁：番茄酱、白醋、白糖、生抽、少许水调匀备用。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=调糖醋汁，美食摄影&image_size=square'
      },
      {
        order: 3,
        text: '腌好的里脊肉裹上鸡蛋液，再裹上淀粉。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=里脊肉裹淀粉，美食摄影&image_size=square'
      },
      {
        order: 4,
        text: '锅中倒油烧热，放入里脊肉炸至金黄酥脆，捞出沥油。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=炸里脊，美食摄影&image_size=square'
      },
      {
        order: 5,
        text: '锅中留底油，倒入糖醋汁，小火熬至浓稠。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=熬糖醋汁，美食摄影&image_size=square'
      },
      {
        order: 6,
        text: '倒入炸好的里脊肉，快速翻炒均匀，让每块肉都裹上糖醋汁即可。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=糖醋里脊成品，美食摄影&image_size=square'
      }
    ]
  },
  {
    id: 8,
    name: '芒果班戟',
    category: 'dessert',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=芒果班戟，甜品，美食摄影&image_size=square',
    difficulty: '中等',
    time: '40分钟',
    tags: ['甜品', '港式', '水果'],
    likes: 654,
    hot: false,
    description: '经典港式甜品，薄软的班戟皮包裹着鲜奶油和芒果，香甜可口。',
    suitableFor: '年轻人、儿童',
    tips: '1. 班戟皮要煎得薄而均匀。\n2. 奶油要打发到位，口感才好。\n3. 芒果要选择熟透的，甜度更高。',
    ingredients: [
      { name: '低筋面粉', amount: '80g' },
      { name: '牛奶', amount: '200ml' },
      { name: '鸡蛋', amount: '2个' },
      { name: '细砂糖', amount: '30g' },
      { name: '黄油', amount: '15g' },
      { name: '淡奶油', amount: '200ml' },
      { name: '糖粉', amount: '20g' },
      { name: '芒果', amount: '2个' }
    ],
    steps: [
      {
        order: 1,
        text: '鸡蛋打散，加入细砂糖和牛奶搅拌均匀。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=搅拌蛋液牛奶，美食摄影&image_size=square'
      },
      {
        order: 2,
        text: '筛入低筋面粉，搅拌至无颗粒，加入融化的黄油拌匀。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=筛入面粉，美食摄影&image_size=square'
      },
      {
        order: 3,
        text: '平底锅小火加热，倒入一勺面糊，快速转动锅子让面糊均匀摊开，煎至表面凝固即可取出。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=煎班戟皮，美食摄影&image_size=square'
      },
      {
        order: 4,
        text: '淡奶油加糖粉打发至硬性发泡，芒果切块。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=打发奶油切芒果，美食摄影&image_size=square'
      },
      {
        order: 5,
        text: '取一张班戟皮，中间放奶油和芒果块，包成方形即可。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=芒果班戟成品，美食摄影&image_size=square'
      }
    ]
  }
]

export const getIngredientsByCategory = (categoryId) => {
  if (!categoryId) return ingredients
  return ingredients.filter(i => i.category === categoryId)
}

export const getRecipesByCategory = (categoryId) => {
  if (!categoryId) return recipes
  return recipes.filter(r => r.category === categoryId)
}

export const getIngredientById = (id) => {
  return ingredients.find(i => i.id === parseInt(id))
}

export const getRecipeById = (id) => {
  return recipes.find(r => r.id === parseInt(id))
}

export const searchIngredients = (keyword) => {
  if (!keyword) return []
  const lowerKeyword = keyword.toLowerCase()
  return ingredients.filter(i => 
    i.name.toLowerCase().includes(lowerKeyword) ||
    i.tags.some(t => t.toLowerCase().includes(lowerKeyword)) ||
    i.effects.toLowerCase().includes(lowerKeyword)
  )
}

export const searchRecipes = (keyword) => {
  if (!keyword) return []
  const lowerKeyword = keyword.toLowerCase()
  return recipes.filter(r => 
    r.name.toLowerCase().includes(lowerKeyword) ||
    r.tags.some(t => t.toLowerCase().includes(lowerKeyword))
  )
}

export const searchAll = (keyword) => {
  const ingredientsResult = searchIngredients(keyword)
  const recipesResult = searchRecipes(keyword)
  return {
    ingredients: ingredientsResult,
    recipes: recipesResult
  }
}

export const getHotIngredients = () => {
  return ingredients.filter(i => i.hot)
}

export const getHotRecipes = () => {
  return recipes.filter(r => r.hot)
}
