var head = [
    "对于#N#B的行为，我的回答是：",
    "中方就这一问题已多次表明立场：",
    "我们一再强调：",
    "我们此前已多次作出回应：",
    "我们已多次表明中方立场：",
    "中方对此严正声明："
]

var wumaoPhrase = "这个世界没有绝对的公平，不还是因为你不努力，别演了一看就是假的，这是几年前的事情了，这图一看就是P过的，主要是中国人口太多的问题，这种事情历朝历代都有，说这些话你有证据吗，你被外国反华势力洗脑了，不信谣不传谣等官方通知，国家欠我五毛钱，这是我国下的一盘大棋，共产党是抗日战争的中流砥柱，共产党垮台了谁来领导中国，中国变成叙利亚那样你就高兴了，你来（去）过（了解）中国吗，外国（人）现在都羡慕中国，中国轮得到你来指指点点，你们就是嫉妒中国越来越强大，不喜欢中国就别用中文，嫌中国不好就滚出去啊，太平洋又没加盖快游过去，退国籍只需要二百五十元，中央是好的是地方政府的问题，上面政策是好的只是下面没做好，中国建防火墙是为了保护外国人，翻墙之后我更爱国了，喜欢繁体字你怎么不用甲骨文，又是港独台独废青在带节奏，没有大陆香港早都完了，应该断了香港的水电，香港人都住劏房哪来的优越感，必须加强香港爱国主义教育，湾湾的智商堪忧（感人），武统台湾留岛不留人，台湾只是中国的一个省，台湾连大陆二三线城市都不如，香港人不少都是越南人后代，台湾人不少都是日本人后代，赚中国的钱还骂中国，西方的民主都是双重标准，这就是所谓的自由民主吗，自由民主又不能当饭吃，你美爹给你了多少钱啊，怎么不说美国侵略伊拉克，怎么不说美国杀印第安人，肯定又是美国搞的鬼，自由美利坚枪战每一天，美国最美丽的风景线，要是美国早就开枪了，没有美国世界就太平了，帝国主义亡我之心不死，犯我中华者虽远必诛，这盛世如你所愿".split("，")

var wumaoexcl = "就在刚刚，央视曝光，震惊国人，惊天秘密，曾是如今，看后惊呆，千万别吃，还敢喝吗，癌症前兆，赶快扔了，能害死你，多活十年，被害惨了，护肝降压，治病防癌，毒素最多，神奇功效，惊惊一幕，价值千万，绝密隐私，差点丧命，看后崩溃，意想不到，尺度不小，令人发指，身份曝光，颜值堪忧，灭绝人性，北京震怒，高层揭秘，强硬反击，全民炸锅，彻底玩完，摊大麻烦，绝世良机，全球沉默，大惊失色，沦为炮灰，诡异一幕，难得机遇，绝不再忍，胆战心惊，国人硬咽，西方胆寒，美国慌了，安倍沉默，安倍慌了，美国沉默，幕后黑手，彻底闭嘴，惨被打脸，下场凄凉，人心惶惶，直冒冷汗，北京发帆，世界哗然，果断出手，现场惨烈，突然翻脸，西方崩溃，最后警告，噩梦来临，国人哄笑，日本哀嚎，世界沸腾，国人不忍了，中国不忍了".split("，")

var vocab = "膝盖生根，慕洋犬，双标，一群妖魔鬼怪，带节奏，有指挥，阴谋论，站着说话不腰疼，折腾，跳梁小丑，上蹿下跳，喷子，杠精，台独，台毒，港独，港毒，废青，洗白，阴阳怪气，脑残，央妈，泼脏水，造谣，谣言，恨国党，你妈 XX ，崇洋媚外，害虫，荒谬， XX 黑，抄作业，无语，奇葩，垃圾，老百姓，反串黑，煞费苦心，趾高气昂，理直气壮，自豪，骄傲，大国，添乱，加油，感动，挺住，担当，命运共同体，滚，蝗虫，歧视，舔狗，跪舔，美国爸爸，洗，神经病，蹭热度，恶毒，嘴臭，狗东西，畜生，蠢，中华民族，实锤，一丘之貉，呵呵，关你屁事，你配，圣母，圣母裱，滚出中国，素质，尊重，侮辱中国，孤儿，制裁，惩罚，骗子，谎言，粉红，警告，洗白，下贱，不要脸，烦死，奴才，奴性，强国，搅屎棍，缺爹，软骨头，嶂螂，公知，理性，低级，真香，私下，绣红旗，背后，暗地里，战狼，取关，遗臭万年，灭了，武统，奴隶，蠢蛋，白痴，笑死，偷换概念，妄想症，装睡，一个德行，矫情，分裂，叛国，不容置疑，不见棺材不落泪，白眼狼，道歉，奇葩，存在感，凉凉，狡辩，脑子有病，注意脑子，五毒俱全，骂人，疯了，无脑狗，给爷爬，早死，沙雕，沙币，博同情，杏仁脑，辣鸡，美蛆，弱智，封杀，不孝子孙，底线，气死，表演，恶臭，无脑粉，毛线，封杀，留岛不留人".split("，")

var sentences = [
    "#N#B的举动严重干涉了中国内政，严重违反国际法和国际关系基本准则，是赤裸裸的霸权行径，中国政府和人民坚决反对。",
    "#N罔顾事实、颠倒黑白，公然#B，性质极其恶劣，用心十分险恶，其根本目的是干涉中国内政，破坏中华民族实现伟大复兴的历史进程。",
    "#B只会让广大中国人民进一步认清#N的险恶用心和霸权本质，只会让中国人民更加众志成城。",
    "中国政府和中国人民坚决反对#N#B的行为，中方已就此向#N提出严正交涉和强烈抗议。",
    "中方强烈敦促#N不得#B，以免影响两国关系和两国在重要领域的合作。",
    "中方强烈谴责并坚决反对#N#B，已就此向#N提出了严正交涉。",
    "#N如果#B，不仅将损害中方利益，损害中国和#N关系，也将严重损害#N自身的利益。",
    "我们要正告#N，任何外国政府和势力都无权干预中国内政。",
    "#N的图谋注定失败。",
    "中国政府反对任何外部势力干预中国事务的决心坚定不移，维护国家主权、安全、发展利益的决心坚定不移。",
    "我们奉劝#N不要一意孤行，否则中方必将予以坚决反制，由此产生的一切后果必须由#N承担。",
    "希望#N个别人士能以开放的心态和客观公正的态度对待中国，不要无中生有。",
    "#N有关人士的陈词滥调充满了政治偏见与谎言。",
    "我要强调，中国内政不容任何外部反华势力指手画脚。",
    "中国一向秉持和平共处五项原则处理国与国关系，历来坚定奉行不干涉内政原则，主张各国根据自身国情选择发展道路。",
    "#N的拙劣表演充分暴露出其不可告人的险恶用心和政治企图。",
    "中国坚持走和平发展道路，积极为维护世界和平稳定贡献智慧力量。",
    "中国坚持对外开放，互利共赢，同世界分享中国发展的机遇。",
    "#N自己不愿意投入，却千方百计干扰破坏中国和其他国家开展合作。",
    "#N试图挑拨中国共产党和中国人民的关系，极其阴险。",
    "任何妄图否定中国的社会主义制度、挑拨中国共产党和中国人民关系的政治图谋都注定不会得逞！",
    "我要告诉#N一些政客，人贵有自知之明，请他还是趁早反省一下#N自身的问题，放弃偏见和执念，停止喋喋不休的反华聒噪。",
    "还是我们经常说的那句话，请#N不要高估自己的造谣能力，也不要低估别人的判断能力。谎言重复一千遍，依然还是谎言。",
    "对于#N干涉中国内政、损害中方利益的行径，中方必将采取有力措施坚决反制。任何人都不要低估中方维护国家主权、安全、发展利益的坚定决心。",
    "如果#N一意孤行，中方必将采取有力措施予以坚决反制。",
    "我们奉劝某些政客别再浪费#N纳税人的钱，无事生非。",
    "中方已就此向#N提出严正交涉，表达强烈抗议。",
    "我们敦促#N立即停止此类挑衅行为，不要逆势而动，避免损害地区的和平与安宁。中方将采取一切必要措施，坚定维护国家主权和安全。",
    "我们奉劝#N有关媒体和人士尊重已经明确无误的事实和真相，恪守起码的职业道德操守，放下意识形态偏见，摘掉有色眼镜，不要再做不负责任、徒增笑柄的事情。",
    "#N罔顾事实、混淆是非、违反公理，玩弄双重标准，公然插手香港事务，干涉中国内政，严重违反国际法和国际关系基本准则，中方对此表示强烈谴责和坚决反对。",
    "#N任何企图干预中国内政、阻碍中国发展的把戏都不会得逞，到头来只会是枉费心机一场空。",
    "#N这一恶劣行径不仅损害中方利益，也会损害#N自身的重要利益。",
    "我们希望#N认真对待中方的严正交涉和严正立场，立即停止不负责任的言行，停止干涉中国内政。",
    "同时，我们敦促#N在中国问题上要谨言慎行，不要再发出错误信号，不要再挑拨怂恿，不要再干涉中国内政。",
    "对于#N的错误做法，中方必将采取有力的措施坚决予以反制，坚定地维护自身主权、安全、发展利益。",
    "#N此次的貌似公允再次暴露出他们的是非不分和虚伪面目，他们的口头正义也再次暴露出他们的双重标准和别有用心。"
]

var verb = [
    "通过", "签署", "开放", "承认", "否认", "推出", "退出", "拒绝", "谴责", "支持", "宣称", "表彰", "煽动", "组织", "公然挑衅", "成立", "模糊",
    "退出"
]

var glossary = {
    verb: {
        positive: ["通过", "签署", "承认", "推出", "支持", "宣称", "表彰", "煽动", "组织", "成立"],
        negative: ["否认", "退出", "拒绝", "谴责", "公然挑衅", "模糊", "不承认", "歪曲", "抨击"]
    },
    ob: {
        east: ["贸易保护主义政策", "网络空间主权", "高等教育学费减免", "删除敏感信息", "间接民主制度", "社会主义理论基础", "文化审查", "互联网舆情管控", "国家领土完整与统一性", "“一国两制”伟大构想", "“计划生育”基本国策", "共产主义理想", "维稳行动"],
        west: ["互惠贸易协议", "更新工作签证政策", "新法案", "全民公投", "独立公投", "罢工运动", "互联网自由运动", "言论自由共识", "司法独立", "全民免费医保", "陪产假制度", "权力制约体系", "民主普选", "公民持枪权", "开放移民政策", " LGBTQ 群体诉求"],
    }
}

var countries =
    "台湾当局、蒙古、朝鲜、韩国、日本、菲律宾、越南、老挝、柬埔寨、缅甸、泰国、马来西亚、文莱、新加坡、印度尼西亚、东帝汶、尼泊尔、不丹、孟加拉国、印度、巴基斯坦、斯里兰卡、马尔代夫、哈萨克斯坦、吉尔吉斯斯坦、塔吉克斯坦、乌兹别克斯坦、土库曼斯坦、阿富汗、伊拉克、伊朗、叙利亚、约旦、黎巴嫩、以色列、巴勒斯坦、沙特阿拉伯、巴林、卡塔尔、科威特、阿拉伯联合酋长国、阿曼、也门、格鲁吉亚、亚美尼亚、阿塞拜疆、土耳其、塞浦路斯、芬兰、瑞典、挪威、冰岛、丹麦、爱沙尼亚、拉脱维亚、立陶宛、白俄罗斯、俄罗斯、乌克兰、摩尔多瓦、波兰、捷克、斯洛伐克、匈牙利、德国、奥地利、瑞士、列支敦士登、英国、爱尔兰、荷兰、比利时、卢森堡、法国、摩纳哥、罗马尼亚、保加利亚、塞尔维亚、马其顿、阿尔巴尼亚、希腊、斯洛文尼亚、克罗地亚、波斯尼亚和墨塞哥维那、乍得、中非、喀麦隆、赤道几内亚、加蓬、刚果共和国、刚果民主共和国、圣多美及普林西比、毛里塔尼亚、西撒哈拉、塞内加尔、冈比亚、马里、布基纳法索、几内亚、几内亚比绍、佛得角、塞拉利昂、利比里亚、科特迪瓦、加纳、多哥、贝宁、尼日尔、加那利群岛、赞比亚、安哥拉、津巴布韦、马拉维、莫桑比克、博茨瓦纳、纳米比亚、南非、斯威士兰、莱索托、马达加斯加、科摩罗、毛里求斯、留尼旺、圣赫勒拿（英）、澳大利亚、新西兰、巴布亚新几内亚、所罗门群岛、瓦努阿图、密克罗尼西亚、马绍尔群岛、帕劳、瑙鲁、基里巴斯、图瓦卢、萨摩亚、斐济群岛、汤加、库克群岛（新）、关岛（美）、新喀里多尼亚（法）、法属波利尼西亚、皮特凯恩岛（英）、瓦利斯与富图纳（法）、纽埃（新）、托克劳（新）、美属萨摩亚、北马里亚纳（美）、加拿大、美国、墨西哥、格陵兰（丹）、危地马拉、伯利兹、萨尔瓦多、洪都拉斯、尼加拉瓜、哥斯达黎加、巴拿马、巴哈马、古巴、牙买加、海地、多米尼加共和国、安提瓜和巴布达、圣基茨和尼维斯、多米尼克、圣卢西亚、圣文森特和格林纳丁斯、格林纳达、巴巴多斯、特立尼达和多巴哥、波多黎各（美）、美属维尔京群岛、安圭拉（英）、蒙特塞拉特（英）、瓜德罗普（法）、马提尼克（法）、荷属安的列斯、阿鲁巴（荷）、特克斯和凯科斯群岛（英）、开曼群岛（英）、百慕大（英）、哥伦比亚、委内瑞拉、圭亚那、法属圭亚那、苏里南、厄瓜多尔、秘鲁、玻利维亚、巴西、智利、阿根廷、乌拉圭、巴拉圭、意大利、梵蒂冈、圣马力诺、马耳他、西班牙、葡萄牙、安道尔、埃及、利比亚、苏丹、突尼斯、阿尔及利亚、摩洛哥、亚速尔群岛（葡）、马德拉群岛（葡）、埃塞俄比亚、厄立特里亚、索马里、吉布提、肯尼亚、坦桑尼亚、乌干达、卢旺达、布隆迪、塞舌尔"
    .split("、")


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

function pick(items) {
    return items[Math.floor(Math.random() * items.length)]
}

function gengshuang(n, b) {
    paragraphs = Math.floor((Math.random() * 3 + 3))
    var i
    var answer = "<b>耿爽：</b>"
    answer += pick(head)

    var unusedSentences = Array.apply(null, {
        length: sentences.length
    }).map(Function.call, Number)
    shuffleArray(unusedSentences)
    for (i = 0; i < paragraphs; i++) {
        length = Math.floor((Math.random() * 3 + 3))
        for (j = 0; j < length; j++) {
            answer += sentences[unusedSentences.pop()]
        }
        answer += "<br><br>"
    }
    answer = answer.replace(/#N/g, n)
    answer = answer.replace(/#B/g, b)
    return answer
}

function wumao(n,b) {
	var clickbaitTitle = ("#X，#P！#N#V，#B，看看我们威武的外交部发言人<b>耿爽</b>如何回应？")
	var exclamation = pick(wumaoexcl)
	var proclamation = pick(wumaoPhrase)
	var insult = pick(vocab)
	clickbaitTitle = clickbaitTitle.replace(/#N/g, n)
	clickbaitTitle = clickbaitTitle.replace(/#B/g, b)
	clickbaitTitle = clickbaitTitle.replace(/#X/g, exclamation)
	clickbaitTitle = clickbaitTitle.replace(/#P/g, proclamation)
	clickbaitTitle = clickbaitTitle.replace(/#V/g, insult)
	return clickbaitTitle
}

function generate() {
    var text = document.getElementById("text")
    var n = document.getElementById("1").value
    var b = document.getElementById("2").value
    if (n.length === 0 || b.length === 0) {
        Snackbar.show({
            pos: 'bottom-center',
            text: '请提供完整的关键词'
        });
    } else {
        while (text.hasChildNodes()) {
            text.removeChild(text.firstChild)
        }
        var s = document.createElement("p")
        s.innerHTML = "<b>记者：</b>" + n + b + "，中方对此有何回应？"
        document.getElementById("text").appendChild(s)
        var t = document.createElement("p")
        gs = gengshuang(n, b)
        t.innerHTML = gs
	wumaoRiposta = wumao(n,b)
	var riposta = document.createElement("h2")
	riposta.innerHTML = wumaoRiposta()
	document.getElementById("text").appendChild(riposta)
        document.getElementById("text").appendChild(t)
    }
}

function random() {
    var praise = pick([true, false])
    if (praise) {
        document.getElementById("2").value = pick(glossary.verb.positive) + pick(glossary.ob.west)
    } else {
        document.getElementById("2").value = pick(glossary.verb.negative) + pick(glossary.ob.east)
    }
    document.getElementById("1").value = pick(countries)
    generate()
}

var clipboard = new ClipboardJS('.copy')
clipboard.on('success', function(e) {
    Snackbar.show({
        pos: 'bottom-center',
        text: '复制成功'
    });
});

clipboard.on('error', function(e) {
    Snackbar.show({
        pos: 'bottom-center',
        text: '复制失败'
    });
});

random()
