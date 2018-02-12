var singers = [
	{id:1,name:'那英',song:'song',pinyin:'NY',sex:'女',birth:'2012-08-12',nickname:'那姐',region:{id:1,name:'华语歌手'},introduce:'个人简介' , icon:'naying.jpg',songNum:'18首'},
	{id:2,name:'汪峰',song:'song',pinyin:'WF',sex:'男',birth:'2012-08-12',nickname:'风暴',region:{id:1,name:'华语歌手'},introduce:'个人简介' , icon:'wangfeng.jpg',songNum:'21首'},
	{id:3,name:'张学友',song:'song',pinyin:'ZXY',sex:'男',birth:'2012-08-12',nickname:'歌神',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'zhangxueyou.jpg',songNum:'22首'},
	{id:4,name:'韩红',song:'song',pinyin:'HH',sex:'女',birth:'2012-08-12',nickname:'央金卓玛',region:{id:2,name:'华语歌手'},introduce:'个人简介' , icon:'hanhong.jpg',songNum:'32首'},
	{id:5,name:'陈奕迅',song:'song',pinyin:'CYX',sex:'男',birth:'2012-08-12',nickname:'吹神',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'chenyixun.jpg',songNum:'24首'},
	{id:6,name:'刘德华',song:'song',pinyin:'LDH',sex:'男',birth:'2012-08-12',nickname:'Andy',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'liudehua.jpg',songNum:'52首'},
	{id:7,name:'王菲',song:'song',pinyin:'WF',sex:'女',birth:'2012-08-12',nickname:'王靖雯',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'hanhong.jpg',songNum:'21首'},
	{id:8,name:'雷·查尔斯',song:'song',pinyin:'LCRS',sex:'男',birth:'2012-08-12',nickname:'灵魂歌王',region:{id:2,name:'欧美歌手'},introduce:'个人简介' , icon:'raycharlce.jpg',songNum:'42首'},
	{id:9,name:'后街男孩',song:'song',pinyin:'HJNH',sex:'男',birth:'2012-08-12',nickname:'backstreet',region:{id:2,name:'欧美歌手'},introduce:'个人简介' , icon:'backstreet.jpg',songNum:'22首'},
	{id:10,name:'张信哲',song:'song',pinyin:'ZXZ',sex:'男',birth:'2012-08-12',nickname:'情歌王子',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'zhangxinzhe.jpg',songNum:'12首'},
	{id:11,name:'李克勤',song:'song',pinyin:'LKQ',sex:'男',birth:'2012-08-12',nickname:'Hacken Lee',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'likeqin.jpg',songNum:'42首'},
	{id:12,name:'林俊杰',song:'song',pinyin:'LJJ',sex:'男',birth:'2012-08-12',nickname:'JJ',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'linjunjie.jpg',songNum:'23首'},
	{id:13,name:'孙楠',song:'song',pinyin:'SN',sex:'男',birth:'2012-08-12',nickname:'楠哥',region:{id:2,name:'华语歌手'},introduce:'个人简介' , icon:'sunnan.jpg',songNum:'21首'},
	{id:14,name:'李健',song:'song',pinyin:'LJ',sex:'男',birth:'2012-08-12',nickname:'健哥',region:{id:2,name:'华语歌手'},introduce:'个人简介' , icon:'lijian.jpg',songNum:'32首'},
	{id:15,name:'张国荣',song:'song',pinyin:'ZGR',sex:'男',birth:'2012-08-12',nickname:'哥哥',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'zhangguorong.jpg',songNum:'12首'},
	{id:16,name:'朴树',song:'song',pinyin:'PS',sex:'男',birth:'2012-08-12',nickname:'树哥',region:{id:2,name:'华语歌手'},introduce:'个人简介' , icon:'pushu.jpg',songNum:'24首'},
	{id:17,name:'刘欢',song:'song',pinyin:'SN',sex:'男',birth:'2012-08-12',nickname:'欢欢',region:{id:2,name:'华语歌手'},introduce:'个人简介' , icon:'liuhuan.jpg',songNum:'28首'},
	{id:18,name:'周杰伦',song:'song',pinyin:'ZJL',sex:'男',birth:'2012-08-12',nickname:'双截棍',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'zhoujielun.jpg',songNum:'62首'},
	{id:19,name:'Beyond',song:'song',pinyin:'BY',sex:'男',birth:'2012-08-12',nickname:'',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'Beyond.jpg',songNum:'42首'},
	{id:20,name:'杨宗纬',song:'song',pinyin:'YZW',sex:'男',birth:'2012-08-12',nickname:'纬哥',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'yangzhongwei.jpg',songNum:'22首'},
	{id:21,name:'邓紫棋',song:'song',pinyin:'DZQ',sex:'女',birth:'2012-08-12',nickname:'G.E.M',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'dengziqi.jpg',songNum:'12首'},
	{id:22,name:'刘若英',song:'song',pinyin:'LRY',sex:'女',birth:'2012-08-12',nickname:'英子',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'liuruoying.jpg',songNum:'32首'},
	{id:23,name:'梅艳芳',song:'song',pinyin:'MYF',sex:'女',birth:'2012-08-12',nickname:'芳芳',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'meiyanfang.jpg',songNum:'25首'},
	{id:24,name:'张惠妹',song:'song',pinyin:'ZWM',sex:'女',birth:'2012-08-12',nickname:'妹妹',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'zhanghuimei.jpg',songNum:'21首'},
	{id:25,name:'贾斯汀·比伯',song:'song',pinyin:'JSD',sex:'男',birth:'2012-08-12',nickname:'Justin Bieber',region:{id:2,name:'欧美歌手'},introduce:'个人简介' , icon:'justinbieber.jpg',songNum:'32首'},
	{id:26,name:'迈克尔·杰克逊',song:'song',pinyin:'MKJS',sex:'男',birth:'2012-08-12',nickname:'Michael Jackson',region:{id:2,name:'欧美歌手'},introduce:'个人简介' , icon:'michaeljackson.jpg',songNum:'12首'},
	{id:27,name:'布兰妮',song:'song',pinyin:'BLN',sex:'女',birth:'2012-08-12',nickname:'Britney Spears',region:{id:2,name:'欧美歌手'},introduce:'个人简介' , icon:'BritneySpears.jpg',songNum:'32首'},
	{id:28,name:'张宇',song:'song',pinyin:'ZY',sex:'男',birth:'2012-08-12',nickname:'宇哥',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'zhangyusheng.jpg',songNum:'25首'},
	{id:29,name:'张雨生',song:'song',pinyin:'ZYS',sex:'男',birth:'2012-08-12',nickname:'小宝',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'BritneySpears.jpg',songNum:'12首'},
	{id:30,name:'阿黛尔',song:'song',pinyin:'ADELE',sex:'女',birth:'2012-08-12',nickname:'Adele',region:{id:2,name:'欧美歌手'},introduce:'个人简介' , icon:'Adele.jpg',songNum:'52首'},
	{id:31,name:'游鸿明',song:'song',pinyin:'YHM',sex:'男',birth:'2012-08-12',nickname:'明仔',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'youhongming.jpg',songNum:'23首'},
	{id:32,name:'林忆莲',song:'song',pinyin:'LYL',sex:'女',birth:'2012-08-12',nickname:'Sandy Lam',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'linyilian.jpg',songNum:'22首'},
	{id:33,name:'崔健',song:'song',pinyin:'CJ',sex:'男',birth:'2012-08-12',nickname:'cuijian',region:{id:2,name:'华语歌手'},introduce:'个人简介' , icon:'cuijian.jpg',songNum:'22首'},
	{id:34,name:'陈百强',song:'song',pinyin:'CBQ',sex:'男',birth:'2012-08-12',nickname:'强仔',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'chenbaiqiang.jpg',songNum:'52首'},
	{id:35,name:'吕方',song:'song',pinyin:'LF',sex:'男',birth:'2012-08-12',Josh:'',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'lvfang.jpg',songNum:'21首'},
	{id:36,name:'齐秦',song:'song',pinyin:'QQ',sex:'男',birth:'2012-08-12',nickname:'小哥',region:{id:2,name:'港台歌手'},introduce:'个人简介' , icon:'qiqin.jpg',songNum:'12首'}
];
localStorage.singerss = JSON.stringify(singers);
var songs = [
	{id:1 , name:'默' , singer:{id:1 , name:'那英'} , duration:314 , introduce:'歌曲介绍' , icon:'mo.jpg' , res:'mo.mp3'},
	{id:2 , name:'有个爱你的人不容易' , singer:{id:1 , name:'那英'} , duration:270 , introduce:'歌曲介绍' , icon:'ygandrbry.jpg' , res:'ygandrbry.mp3'},
	{id:3 , name:'怒放的生命' , singer:{id:2 , name:'汪峰'} , duration:263 , introduce:'歌曲介绍' , icon:'nufangdeshengming.jpg' , res:'nufangdeshengming.mp3'},
	{id:4 , name:'像梦一样自由' , singer:{id:2 , name:'汪峰'} , duration:229 , introduce:'歌曲介绍' , icon:'xiangmongyixiang.jpg' , res:'xiangmongyiyangziyou.mp3'},
	{id:5 , name:'慢慢' , singer:{id:3,name:'张学友'} , duration:273 , introduce:'歌曲介绍' , icon:'manman.jpg' , res:'manman.mp3'},
	{id:6 , name:'小城大事' , singer:{id:3,name:'张学友'} , duration:226 , introduce:'歌曲介绍' , icon:'dachengxiaoshi.jpg' , res:'dachengxiaoshi.mp3'},
	{id:7 , name:'一个人' , singer:{id:4,name:'韩红'} , duration:273 , introduce:'歌曲介绍' , icon:'yigeren.jpg' , res:'yigeren.mp3'},
	{id:8 , name:'那片海' , singer:{id:4,name:'韩红'} , duration:259 , introduce:'歌曲介绍' , icon:'napianhai.jpg' , res:'napianhai.mp3'},
	{id:9 , name:'好久不见' , singer:{id:5,name:'陈奕迅'} , duration:250 , introduce:'歌曲介绍' , icon:'haojiubujian.jpg' , res:'haojiubujian.mp3'},
	{id:10 , name:'十年' , singer:{id:5,name:'陈奕迅'} , duration:202 , introduce:'歌曲介绍' , icon:'shinian.jpg' , res:'shinian.mp3'},
	{id:11 , name:'匆匆那年' , singer:{id:7,name:'王菲'} , duration:234 , introduce:'歌曲介绍' , icon:'cuocuonanian.jpg' , res:'cuocuonanian.mp3'},
	{id:12 , name:'红豆' , singer:{id:7,name:'王菲'} , duration:251 , introduce:'歌曲介绍' , icon:'hongdou.jpg' , res:'hongdou.mp3'},
	{id:13 , name:'What d I Say' , singer:{id:8,name:'雷·查尔斯'} , duration:377 , introduce:'歌曲介绍' , icon:'What d I Say.jpg' , res:'What d I Say.mp3'},
	{id:14 , name:'Sorry Seems to Be the Hardest Word' , singer:{id:8,name:'雷·查尔斯'} , duration:230 , introduce:'歌曲介绍' , icon:'Sorry Seems to Be the Hardest Word.jpg' , res:'Sorry Seems to Be the Hardest Word.mp3'},
	{id:15 , name:'As Long As You Love Me' , singer:{id:9,name:'后街男孩'} , duration:230 , introduce:'歌曲介绍' , icon:'As Long As You Love Me.jpg' , res:'As Long As You Love Me.mp3'},
	{id:16 , name:'Show Me The Meaning Of Being Lonely' , singer:{id:9,name:'后街男孩'} , duration:230 , introduce:'歌曲介绍' , icon:'Show Me The Meaning Of Being Lonely.jpg' , res:'Show Me The Meaning Of Being Lonely.mp3'},
	{id:17 , name:'信仰' , singer:{id:10,name:'张信哲'} , duration:246 , introduce:'歌曲介绍' , icon:'xinyang.jpg' , res:'xinyang.mp3'},
	{id:18 , name:'平凡之路' , singer:{id:10,name:'张信哲'} , duration:251 , introduce:'歌曲介绍' , icon:'pingfanzhilu.jpg' , res:'pingfanzhilu.mp3'},
	{id:19 , name:'富士山下' , singer:{id:11,name:'李克勤'} , duration:291 , introduce:'歌曲介绍' , icon:'fushishanxia.png' , res:'fushishanxia.mp3'},
	{id:20 , name:'红日' , singer:{id:11,name:'李克勤'} , duration:251 , introduce:'歌曲介绍' , icon:'hongri.png' , res:'hongri.mp3'},
	{id:21 , name:'风月' , singer:{id:12,name:'林俊杰'} , duration:220 , introduce:'歌曲介绍' , icon:'fengyue.jpg' , res:'fengyue.mp3'},
	{id:22 , name:'她说' , singer:{id:12,name:'林俊杰'} , duration:307 , introduce:'歌曲介绍' , icon:'tashuo.jpg' , res:'tashuo.mp3'},
	{id:23 , name:'拯救' , singer:{id:13,name:'孙楠'} , duration:320 , introduce:'歌曲介绍' , icon:'zhengjiu.jpg' , res:'zhengjiu.mp3'},
	{id:24 , name:'风往北吹' , singer:{id:13,name:'孙楠'} , duration:282 , introduce:'歌曲介绍' , icon:'fengwangbeicui.jpg' , res:'fengwangbeicui.mp3'},
	{id:25 , name:'贝加尔湖畔' , singer:{id:14,name:'李健'} , duration:307 , introduce:'歌曲介绍' , icon:'bjrhp.jpg' , res:'bjrhp.mp3'},
	{id:26 , name:'当你老了' , singer:{id:14,name:'李健'} , duration:308 , introduce:'歌曲介绍' , icon:'dangnilaole.jpg' , res:'dangnilaole.mp3'},
	{id:27 , name:'Moment' , singer:{id:15,name:'张国荣'} , duration:233 , introduce:'歌曲介绍' , icon:'Moment.jpg' , res:'Moment.mp3'},
	{id:28 , name:'你该停留的地方' , singer:{id:15,name:'张国荣'} , duration:180 , introduce:'歌曲介绍' , icon:'nigaitingliudedifang.jpg' , res:'nigaitingliudedifang.mp3'},
	{id:29 , name:'从头再来' , singer:{id:17,name:'刘欢'} , duration:233 , introduce:'歌曲介绍' , icon:'congtouzailai.jpg' , res:'congtouzailai.mp3'},
	{id:30 , name:'弯弯的月亮' , singer:{id:17,name:'刘欢'} , duration:180 , introduce:'歌曲介绍' , icon:'wanwanyueliang.jpg' , res:'wanwanyueliang.mp3'},
	{id:31 , name:'七里香' , singer:{id:18,name:'周杰伦'} , duration:288 , introduce:'歌曲介绍' , icon:'qilixiang.jpg' , res:'qilixiang.mp3'},
	{id:32 , name:'青花瓷' , singer:{id:18,name:'周杰伦'} , duration:232 , introduce:'歌曲介绍' , icon:'qinghuaci.jpg' , res:'qinghuaci.mp3'},
	{id:33 , name:'真的爱你' , singer:{id:19,name:'Beyond'} , duration:278 , introduce:'歌曲介绍' , icon:'zhendiaini.jpg' , res:'zhendiaini.mp3'},
	{id:34 , name:'情人' , singer:{id:19,name:'Beyond'} , duration:320 , introduce:'歌曲介绍' , icon:'zhendiaini.jpg' , res:'qingren.mp3'},
	{id:35 , name:'一次就好' , singer:{id:20,name:'杨宗纬'} , duration:266 , introduce:'歌曲介绍' , icon:'yicijiuhao.jpg' , res:'yicijiuhao.mp3'},
	{id:36 , name:'空白格' , singer:{id:20,name:'杨宗纬'} , duration:222 , introduce:'歌曲介绍' , icon:'kongbaige.jpg' , res:'kongbaige.mp3'},
	{id:37 , name:'喜欢你' , singer:{id:21,name:'邓紫棋'} , duration:230 , introduce:'歌曲介绍' , icon:'xihuanni.png' , res:'xihuanni.mp3'},
	{id:38 , name:'后会无期' , singer:{id:21,name:'邓紫棋'} , duration:215 , introduce:'歌曲介绍' , icon:'houhuiwuqi.jpg' , res:'houhuiwuqi.mp3'},
	{id:39 , name:'后来' , singer:{id:22,name:'刘若英'} , duration:326 , introduce:'歌曲介绍' , icon:'houlai.jpg' , res:'houlai.mp3'},
	{id:40 , name:'为爱痴狂' , singer:{id:22,name:'刘若英'} , duration:293 , introduce:'歌曲介绍' , icon:'weiaichikuang.jpg' , res:'weiaichikuang.mp3'},
	{id:41 , name:'女人花' , singer:{id:23,name:'梅艳芳'} , duration:290 , introduce:'歌曲介绍' , icon:'nvrenhua.jpg' , res:'nvrenhua.mp3'},
	{id:42 , name:'亲密爱人' , singer:{id:23,name:'梅艳芳'} , duration:298 , introduce:'歌曲介绍' , icon:'qinmiairen.jpg' , res:'qinmiairen.mp3'},
	{id:43 , name:'我要飞' , singer:{id:24,name:'张惠妹'} , duration:209 , introduce:'歌曲介绍' , icon:'woyaofei.jpg' , res:'woyaofei.mp3'},
	{id:44 , name:'存在' , singer:{id:24,name:'张惠妹'} , duration:127 , introduce:'歌曲介绍' , icon:'cunzai.jpg' , res:'cunzai.mp3'},
	{id:45 , name:'baby' , singer:{id:25,name:'贾斯汀·比伯'} , duration:207 , introduce:'歌曲介绍' , icon:'baby.jpg' , res:'baby.mp3'},
	{id:46 , name:'WhatDoYouMean' , singer:{id:25,name:'贾斯汀·比伯'} , duration:200 , introduce:'歌曲介绍' , icon:'WhatDoYouMean.jpg' , res:'WhatDoYouMean.mp3'},
	{id:47 , name:'给你们' , singer:{id:28,name:'张宇'} , duration:277 , introduce:'歌曲介绍' , icon:'geinimen.jpg' , res:'geinimen.mp3'},
	{id:48 , name:'伞下' , singer:{id:28,name:'张宇'} , duration:202 , introduce:'歌曲介绍' , icon:'sanxia.jpg' , res:'sanxia.mp3'},
	{id:49 , name:'Sledgehammer' , singer:{id:30,name:'阿黛尔'} , duration:203 , introduce:'歌曲介绍' , icon:'Sledgehammer.jpg' , res:'Sledgehammer.mp3'},
	{id:50 , name:'SomeoneLikeYou' , singer:{id:30,name:'阿黛尔'} , duration:276 , introduce:'歌曲介绍' , icon:'SomeoneLikeYou.jpg' , res:'SomeoneLikeYou.mp3'},
	{id:51 , name:'五月胡雪' , singer:{id:31,name:'游鸿明'} , duration:308 , introduce:'歌曲介绍' , icon:'wuyuedexue.jpg' , res:'wuyuedexue.mp3'},
	{id:52 , name:'一天一万年' , singer:{id:31,name:'游鸿明'} , duration:288 , introduce:'歌曲介绍' , icon:'yitianyiwannian.jpg' , res:'yitianyiwannian.mp3'},
	{id:53 , name:'伤痕' , singer:{id:32,name:'林忆莲'} , duration:243 , introduce:'歌曲介绍' , icon:'shanghen.jpg' , res:'shanghen.mp3'},
	{id:54 , name:'夜太黑' , singer:{id:32,name:'林忆莲'} , duration:286 , introduce:'歌曲介绍' , icon:'yetaihei.jpg' , res:'yetaihei.mp3'},
	{id:55 , name:'假行僧' , singer:{id:33,name:'崔健'} , duration:297 , introduce:'歌曲介绍' , icon:'jiaxingseng.jpg' , res:'jiaxingseng.mp3'},
	{id:56 , name:'一无所有' , singer:{id:33,name:'崔健'} , duration:257 , introduce:'歌曲介绍' , icon:'yiwusuoyou.jpg' , res:'yiwusuoyou.mp3'},
	
];
localStorage.songss = JSON.stringify(songs);