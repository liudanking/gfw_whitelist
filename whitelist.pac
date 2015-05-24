/*
            gfw_whitelist.pac
  
            GFW Whitelist
            - inspired by autoproxy and chnroutes
  
            v1.2
            Author: n0gfwall0@gmail.com
            License: MIT License

                                                          */

    /* * * * * * * * * * * * * * * * * * * * * * * * * * 
     *                                                 *
     *  一定要换成你的ip地址                           *
     *  Replace your proxy ip-address:port here!!      *
     *                                                 *
     * * * * * * * * * * * * * * * * * * * * * * * * * */

var IP_ADDRESS = '127.0.0.1:1080'; // Need to change to a real address!!

    /* * * * * * * * * * * * * * * * * * * * * * * * * * 
     *                                                 *
     * 代理类型 (翻墙一般适用 SOCKS 或 HTTPS)          *
     * Proxy type                                      *
     *                                                 *
     * * * * * * * * * * * * * * * * * * * * * * * * * */
var PROXY_TYPE = 'SOCKS5'; // or 'SOCKS5' or 'PROXY' or 'HTTPS'

    // HTTPS 是用于 Chrome 的安全代理
    // http://www.chromium.org/developers/design-documents/secure-web-proxy

    /* * * * * * * * * * * * * * * * * * * * * * * * * */
var PROXY_METHOD = PROXY_TYPE + ' ' + IP_ADDRESS;


    // a very long list. trust chrome will cache the results

    // skip top Chinese sites
    // source: 
    // (1) custom list
    // (2) https://dl-web.dropbox.com/u/3241202/apps/chn-cdn/dnsmasq.server.conf - ihipop
    // (3) @xream's whitelist
    // (4) alexa 500
    //     less all the cn domains
    //     less google.com.hk, google.com, google.co.uk, googleusercontent.com
    //     google.com.tw, tumblr.com, wikipedia.org, youtube, github, wordpress
    //     wsj.com, godaddy,stackoverflow.com, zaobao.com

    // custom list. feel free to add.
    // mostly ad servers and img servers
var RULES = [
    [
        "www.speedtest.net",
        ".dapenti.com"
    ],
    //cn
    [
        ".cn"
    ],
    //custom-list
    [
        ".zoopda.com",
        ".yixun.com",
        ".jd.com",
        ".zdmimg.com",
        ".appgame.com",
        ".kandian.com",
        ".homeinns.com",
        ".sinajs.com",
        ".douban.fm",
        ".pixlr.com",
        ".jing.fm",
        ".oadz.com",
        ".youshang.com",
        ".kuaidi100.com",
        ".sinahk.net",
        ".kuaidi100.com",
        ".adsame.com",
        ".scorecardresearch.com",
        ".imrworldwide.com",
        ".wrating.com",
        ".mediav.com",
        ".lycos.com",
        ".gamesville.com",
        ".lygo.com",
        ".quantserve.com",
        ".miaozhen.com",
        ".qstatic.com",
        ".tremormedia.com",
        ".yieldmanager.com",
        ".adsonar.com",
        ".adtechus.com",
        ".bluekai.com",
        ".ipinyou.com",
        ".bdstatic.com",
        ".bdimg.com",
        ".mediaplex.com",
        ".ykimg.com",
        ".irs01.com",
        ".irs01.net",
        ".mmstat.com",
        ".tanx.com",
        ".atdmt.com",
        ".tudouui.com",
        ".tdimg.com",
        ".ku6img.com",
        ".ku6cdn.com",
        ".staticsdo.com",
        ".snyu.com",
        ".mlt01.com",
        ".doubleclick.net",
        ".scanscout.com",
        ".betrad.com",
        ".invitemedia.com",
        ".adroll.com",
        ".mathtag.com",
        ".2mdn.net",
        ".rtbidder.net",
        ".compete.com",
        ".vizu.com",
        ".adnxs.com",
        ".mookie1.com",
        ".pubmatic.com",
        ".serving-sys.com",
        ".legolas-media.com",
        ".harrenmedianetwork.com",
        ".google-analytics.com",
        ".qiniucdn.com",
        ".wangyin.com",
        ".gewara.com",
        ".ele.me",
        ".teambition.com",
        ".anquanbao.com"
    ],
    //"ihipop"
    [
        ".renren.com",
        ".sina.com",
        ".iask.com",
        ".cctv.com",
        ".img.cctvpic.com",
        ".163.com",
        ".netease.com",
        ".126.net",
        ".qq.com",
        ".ptlogin2.qq.com",
        ".gtimg.com",
        ".taobao.com",
        ".taobaocdn.com",
        ".lxdns.com",
        ".sohu.com",
        ".ifeng.com",
        ".jysq.net",
        ".nipic.com",
        ".fastcdn.com",
        ".oeeee.com",
        ".mosso.com",
        ".pengyou.com",
        ".360buyimg.com",
        ".51buy.com",
        ".icson.com"
    ],
    //"xream"
    [
        ".07073.com",
        ".0x110.com",
        ".10010.com",
        ".100tjs.com",
        ".100ye.com",
        ".114la.com",
        ".115.com",
        ".115img.com",
        ".120ask.com",
        ".123cha.com",
        ".126.com",
        ".126.net",
        ".1616.net",
        ".163.com",
        ".17173.com",
        ".1717388.com",
        ".1778.com",
        ".178.com",
        ".17cdn.com",
        ".17kuxun.com",
        ".17u.com",
        ".198game.com",
        ".19lou.com",
        ".1o26.com",
        ".1ting.com",
        ".1uuc.com",
        ".21cn.com",
        ".2345.com",
        ".24quan.com",
        ".265.com",
        ".265g.com",
        ".28.com",
        ".28tui.com",
        ".293.net",
        ".2hua.com",
        ".2mdn.net",
        ".315che.com",
        ".3366.com",
        ".360buy.com",
        ".360buyimg.com",
        ".360doc.com",
        ".360tl.com",
        ".36kr.com",
        ".37see.com",
        ".39.net",
        ".3dmgame.com",
        ".4399.com",
        ".4738.com",
        ".5000pk.com",
        ".500wan.com",
        ".51.com",
        ".51.la",
        ".5173.com",
        ".51auto.com",
        ".51buy.com",
        ".51cto.com",
        ".51fanli.com",
        ".51img1.com",
        ".51job.com",
        ".51jobcdn.com",
        ".51yes.com",
        ".52kmh.com",
        ".52pk.net",
        ".52tlbb.com",
        ".53kf.com",
        ".55bbs.com",
        ".55tuan.com",
        ".56.com",
        ".58.com",
        ".591hx.com",
        ".5d6d.com",
        ".5d6d.net",
        ".61.com",
        ".6dad.com",
        ".6rooms.com",
        ".701sou.com",
        ".70e.com",
        ".766.com",
        ".777wyx.com",
        ".778669.com",
        ".7c.com",
        ".7k7k.com",
        ".859652.com",
        ".88db.com",
        ".91.com",
        ".968tl.com",
        ".9787.com",
        ".99114.com",
        ".99bill.com",
        ".a135.net",
        ".a963.com",
        ".abang.com",
        ".abchina.com",
        ".acfun.tv",
        ".ad1111.com",
        ".admin5.com",
        ".adnxs.com",
        ".adobe.com",
        ".adroll.com",
        ".ads8.com",
        ".adsame.com",
        ".adsonar.com",
        ".adtechus.com",
        ".aibang.com",
        ".aifang.com",
        ".aili.com",
        ".aipai.com",
        ".aizhan.com",
        ".ali213.net",
        ".alibaba.com",
        ".alicdn.com",
        ".aliexpress.com",
        ".aliimg.com",
        ".alimama.com",
        ".alipay.com",
        ".alipayobjects.com",
        ".alisoft.com",
        ".alivv.com",
        ".aliyun.com",
        ".allyes.com",
        ".amazon.com",
        ".anjuke.com",
        ".anzhi.com",
        ".aol.com",
        ".appinn.com",
        ".apple.com",
        ".arpg2.com",
        ".atdmt.com",
        ".atpanel.com",
        ".b2b168.com",
        ".babytree.com",
        ".baidu.com",
        ".baihe.com",
        ".baixing.com",
        ".bankcomm.com",
        ".baomihua.com",
        ".bdimg.com",
        ".bdstatic.com",
        ".bendibao.com",
        ".bestb2b.com",
        ".betrad.com",
        ".bilibili.tv",
        ".bing.com",
        ".bitauto.com",
        ".bjbus.com",
        ".blog.163.com",
        ".blogbus.com",
        ".blogchina.com",
        ".blueidea.com",
        ".bluekai.com",
        ".bokee.net",
        ".booksky.org",
        ".boosj.com",
        ".brothersoft.com",
        ".cache.netease.com",
        ".caing.com",
        ".caixin.com",
        ".ccb.com",
        ".ccidnet.com",
        ".cctv.com",
        ".cctvcom",
        ".cdn20.com",
        ".changyou.com",
        ".chdbits.org",
        ".chetx.com",
        ".china.com",
        ".chinabyte.com",
        ".chinahr.com",
        ".chinamobile.com",
        ".chinanews.com",
        ".chinaren.com",
        ".chinaunix.net",
        ".chinaw3.com",
        ".chinaz.com",
        ".chiphell.com",
        ".chuangelm.com",
        ".ci123.com",
        ".cmbchina.com",
        ".cn",
        ".cnbeta.com",
        ".cnblogs.com",
        ".cncn.com",
        ".cnepub.com",
        ".cnfol.com",
        ".cngba.com",
        ".cnhubei.com",
        ".cnki.net",
        ".cnmo.com",
        ".cntv.net",
        ".cnwest.com",
        ".cnxad.com",
        ".cnzz.com",
        ".cocoren.com",
        ".compete.com",
        ".comsenz.com",
        ".coo8.com",
        ".cqnews.net",
        ".cqtiyu.com",
        ".crsky.com",
        ".csdn.net",
        ".ct10000.com",
        ".ctrip.com",
        ".dangdang.com",
        ".daqi.com",
        ".dayoo.com",
        ".dbank.com",
        ".ddmap.com",
        ".dedecms.com",
        ".dh818.com",
        ".diandian.com",
        ".dianping.com",
        ".didatuan.com",
        ".dipan.com",
        ".discuz.net",
        ".doc88.com",
        ".docin.com",
        ".donews.com",
        ".dospy.com",
        ".douban.com",
        ".douban.fm",
        ".doubleclick.com",
        ".doubleclick.net",
        ".dpfile.com",
        ".dream4ever.org",
        ".duapp.com",
        ".duba.net",
        ".duomi.com",
        ".duote.com",
        ".duowan.com",
        ".dy2018.com",
        ".dytt8.net",
        ".dzwww.com",
        ".eastday.com",
        ".eastmoney.com",
        ".eb80.com",
        ".ebay.com",
        ".egou.com",
        ".ellechina.com",
        ".elong.com",
        ".ename.net",
        ".et8.org",
        ".etao.com",
        ".exam8.com",
        ".eye.rs",
        ".eyoudi.com",
        ".fantong.com",
        ".fastcdn.com",
        ".fastif.net",
        ".fat999.com",
        ".fblife.com",
        ".fengniao.com",
        ".fenzhi.com",
        ".ffdy.cc",
        ".flickr.com",
        ".fobshanghai.com",
        ".ftchinese.com",
        ".ftuan.com",
        ".funshion.com",
        ".fx120.net",
        ".game3737.com",
        ".game3896.com",
        ".gamersky.com",
        ".gamestlbb.com",
        ".gamesville.com",
        ".gamewan.net",
        ".ganji.com",
        ".gaopeng.com",
        ".getfirebug.com",
        ".gfan.com",
        ".gfw.io",
        ".ggmm777.com",
        ".go2map.com",
        ".gongchang.com",
        ".goodbabygroup.com",
        ".google-analytics.com",
        ".gougou.com",
        ".gtimg.com",
        ".gy9y.com",
        ".gzmama.com",
        ".haliyuya.com",
        ".hao123.com",
        ".haodf.com",
        ".harrenmedianetwork.com",
        ".hc360.com",
        ".hdslb.com",
        ".hefei.cc",
        ".help.apple.com",
        ".hf365.com",
        ".hi-pda.com",
        ".hiapk.com",
        ".hichina.com",
        ".hlwan.net",
        ".homeinns.com",
        ".hoopchina.com",
        ".hotsales.net",
        ".house365.com",
        ".huaban.com",
        ".huanqiu.com",
        ".hudong.com",
        ".huochepiao.com",
        ".hupu.com",
        ".iask.com",
        ".ibm.com",
        ".iciba.com",
        ".icson.com",
        ".idailyapp.com",
        ".ifeng.com",
        ".ifengimg.com",
        ".ifensi.com",
        ".ijinshan.com",
        ".iloveyouxi.com",
        ".im286.com",
        ".imanhua.com",
        ".img-space.com",
        ".img.cctvpic.com",
        ".imrworldwide.com",
        ".inc.gs",
        ".infzm.com",
        ".invitemedia.com",
        ".ip138.com",
        ".ipinyou.com",
        ".iqilu.com",
        ".iqiyi.com",
        ".irs01.com",
        ".irs01.net",
        ".is686.com",
        ".it168.com",
        ".iteye.com",
        ".iweek.ly",
        ".iyaya.com",
        ".james520.com",
        ".jandan.net",
        ".jb51.net",
        ".jianshu.io",
        ".jiathis.com",
        ".jiatx.com",
        ".jiayuan.com",
        ".jiepang.com",
        ".jing.fm",
        ".jinti.com",
        ".jiuyaoyouxi.com",
        ".jjwxc.net",
        ".joqoo.com",
        ".jqw.com",
        ".jstv.com",
        ".jumei.com",
        ".junshijia.com",
        ".jxedt.com",
        ".jysq.net",
        ".kaixin001.com",
        ".kandian.com",
        ".kandian.net",
        ".kanimg.com",
        ".kankan.com",
        ".kdnet.net",
        ".keyunzhan.com",
        ".kimiss.com",
        ".koudai8.com",
        ".ku6.com",
        ".ku6cdn.com",
        ".ku6img.com",
        ".kuaidi100.com",
        ".kuaiwan.com",
        ".kugou.com",
        ".l99.com",
        ".lady8844.com",
        ".lafaso.com",
        ".lampdrive.com",
        ".lashou.com",
        ".lashouimg.com",
        ".legolas-media.com",
        ".lehecai.com",
        ".leho.com",
        ".letao.com",
        ".letv.com",
        ".liebiao.com",
        ".lietou.com",
        ".linezing.com",
        ".linkedin.com",
        ".live.com",
        ".local",
        ".localhost",
        ".logmein.com",
        ".lohas.ly",
        ".loli.mg",
        ".loli.vg",
        ".longhoo.net",
        ".love21cn.com",
        ".lusongsong.com",
        ".lvping.com",
        ".lxdns.com",
        ".lycos.com",
        ".lygo.com",
        ".m18.com",
        ".m1905.com",
        ".made-in-china.com",
        ".makepolo.com",
        ".mangocity.com",
        ".manzuo.com",
        ".mapabc.com",
        ".mapbar.com",
        ".mathtag.com",
        ".mediaplex.com",
        ".mediav.com",
        ".meilele.com",
        ".meilishuo.com",
        ".meishichina.com",
        ".meituan.com",
        ".meizu.com",
        ".miaozhen.com",
        ".microsoft.com",
        ".miercn.com",
        ".mlt01.com",
        ".mmstat.com",
        ".mnwan.com",
        ".mogujie.com",
        ".mookie1.com",
        ".moonbasa.com",
        ".mop.com",
        ".mosso.com",
        ".mozilla.org",
        ".mplife.com",
        ".msn.com",
        ".mtime.com",
        ".mumayi.com",
        ".my.cl.ly",
        ".mydrivers.com",
        ".nbweekly.com",
        ".net114.com",
        ".netease.com",
        ".newsmth.net",
        ".ngacn.cc",
        ".nipic.com",
        ".njobt.com",
        ".nowec.com",
        ".nuomi.com",
        ".oadz.com",
        ".oeeee.com",
        ".okbuy.com",
        ".okooo.com",
        ".onetad.com",
        ".onlinedown.net",
        ".onlylady.com",
        ".oschina.net",
        ".otwan.com",
        ".p5w.net",
        ".paipai.com",
        ".paypal.com",
        ".pcbeta.com",
        ".pchome.net",
        ".pcpop.com",
        ".pengyou.com",
        ".php100.com",
        ".phpwind.net",
        ".pingan.com",
        ".pixlr.com",
        ".pp.cc",
        ".pplive.com",
        ".ppstream.com",
        ".pptv.com",
        ".pr56789.com",
        ".ptlogin2.qq.com",
        ".pubmatic.com",
        ".q150.com",
        ".qianlong.com",
        ".qidian.com",
        ".qingdaonews.com",
        ".qire123.com",
        ".qiushibaike.com",
        ".qiyi.com",
        ".qiyipic.com",
        ".qiyou.com",
        ".qjy168.com",
        ".qq.com",
        ".qq937.com",
        ".qqmail.com",
        ".qstatic.com",
        ".quantserve.com",
        ".qunar.com",
        ".qvbuy.com",
        ".rakuten.co.jp",
        ".ranwen.com",
        ".readnovel.com",
        ".renren.com",
        ".rrimg.com",
        ".rtbidder.net",
        ".sanguosha.com",
        ".scanscout.com",
        ".scorecardresearch.com",
        ".sdo.com",
        ".seowhy.com",
        ".serving-sys.com",
        ".sf-express.com",
        ".sg560.com",
        ".shangdu.com",
        ".shuangtv.net",
        ".si.kz",
        ".sina.com",
        ".sinaapp.com",
        ".sinaedge.com",
        ".sinahk.net",
        ".sinaimg.com",
        ".sinajs.com",
        ".sj-tl.com",
        ".skycn.com",
        ".smzdm.com",
        ".snsfun.cc",
        ".snyu.com",
        ".sodu.org",
        ".sogou.com",
        ".sohu.com",
        ".soku.com",
        ".sootoo.com",
        ".soso.com",
        ".soufun.com",
        ".soufunimg.com",
        ".sourceforge.net",
        ".stackoverflow.com",
        ".staticsdo.com",
        ".stockstar.com",
        ".sttlbb.com",
        ".suning.com",
        ".synacast.com",
        ".szhome.com",
        ".sznews.com",
        ".tangdou.com",
        ".tanx.com",
        ".tao123.com",
        ".taobao.com",
        ".taobaocdn.com",
        ".tbcache.com",
        ".tdimg.com",
        ".tencent.com",
        ".tenpay.com",
        ".tgbus.com",
        ".thawte.com",
        ".theplanet.com",
        ".thethirdmedia.com",
        ".tiancity.com",
        ".tianji.com",
        ".tianyaui.com",
        ".tiao8.info",
        ".tiexue.net",
        ".titan24.com",
        ".tlbb2.com",
        ".tlbb8.com",
        ".tlbbsifu.com",
        ".tmall.com",
        ".tom.com",
        ".toocle.com",
        ".tremormedia.com",
        ".tuan800.com",
        ".tudou.com",
        ".tudouui.com",
        ".tui18.com",
        ".tuniu.com",
        ".typecho.org",
        ".tvmao.com",
        ".twcczhu.com",
        ".u17.com",
        ".ucjoy.com",
        ".ulink.cc",
        ".umiwi.com",
        ".uniontoufang.com",
        ".up2c.com",
        ".uusee.com",
        ".uuu9.com",
        ".uuzu.com",
        ".v.iask.com",
        ".vancl.com",
        ".vcimg.com",
        ".verycd.com",
        ".vipshop.com",
        ".vizu.com",
        ".vjia.com",
        ".wandoujia.com",
        ".wdjimg.com",
        ".web887.com",
        ".weibo.com",
        ".weiphone.com",
        ".west263.com",
        ".whlongda.com",
        ".wikipedia.org",
        ".williamlong.info",
        ".woniu.com",
        ".wordpress.org",
        ".wrating.com",
        ".wsj.com",
        ".wumii.com",
        ".www.renren.com",
        ".xi666.com",
        ".xiachufang.com",
        ".xiami.com",
        ".xiami.net",
        ".xiaomi.com",
        ".xiaonei.com",
        ".xiazaiba.com",
        ".xici.net",
        ".xilu.com",
        ".xinhuanet.com",
        ".xinnet.com",
        ".xitek.com",
        ".xiu.com",
        ".xiyou53.com",
        ".xiyou54.com",
        ".xlpan.com",
        ".xmfish.com",
        ".xn--fiqs8s",
        ".xp9365.com",
        ".xtltt.com",
        ".xungou.com",
        ".xunlei.com",
        ".xyxy.net",
        ".yaolan.com",
        ".ydstatic.com",
        ".yesky.com",
        ".yieldmanager.com",
        ".yihaodian.com",
        ".yihaodianimg.com",
        ".yingjiesheng.com",
        ".yintai.com",
        ".yinyuetai.com",
        ".yiqifa.com",
        ".yiyi.cc",
        ".ykimg.com",
        ".ynet.com",
        ".yocc.net",
        ".yoka.com",
        ".yolk7.com",
        ".youboy.com",
        ".youdao.com",
        ".yougou.com",
        ".youku.com",
        ".youshang.com",
        ".youwo123.com",
        ".yupoo.com",
        ".yxlady.com",
        ".yyets.com",
        ".zaobao.com",
        ".zaojiao.com",
        ".zbjimg.com",
        ".zdface.com",
        ".zhaodao123.com",
        ".zhaopin.com",
        ".zhenai.com",
        ".zhi.hu",
        ".zhibo8.cc",
        ".zhibo8.com",
        ".zhihu.com",
        ".zhongsou.net",
        ".zhubajie.com",
        ".zongheng.com",
        ".zoosnet.net",
        ".zqgame.com",
        ".ztgame.com",
        ".zx915.com"
    ],
    //alexa cn 500
    [
        ".baidu.com",
        ".qq.com",
        ".taobao.com",
        ".163.com",
        ".weibo.com",
        ".sohu.com",
        ".youku.com",
        ".soso.com",
        ".ifeng.com",
        ".tmall.com",
        ".hao123.com",
        ".tudou.com",
        ".360buy.com",
        ".chinaz.com",
        ".alipay.com",
        ".sogou.com",
        ".renren.com",
        ".cnzz.com",
        ".douban.com",
        ".pengyou.com",
        ".58.com",
        ".alibaba.com",
        ".56.com",
        ".xunlei.com",
        ".bing.com",
        ".iqiyi.com",
        ".csdn.net",
        ".soku.com",
        ".xinhuanet.com",
        ".ku6.com",
        ".aizhan.com",
        ".4399.com",
        ".yesky.com",
        ".soufun.com",
        ".youdao.com",
        ".china.com",
        ".hudong.com",
        ".ganji.com",
        ".kaixin001.com",
        ".paipai.com",
        ".live.com",
        ".alimama.com",
        ".mop.com",
        ".51.la",
        ".51job.com",
        ".dianping.com",
        ".126.com",
        ".admin5.com",
        ".it168.com",
        ".2345.com",
        ".huanqiu.com",
        ".arpg2.com",
        ".777wyx.com",
        ".chinanews.com",
        ".letv.com",
        ".jiayuan.com",
        ".39.net",
        ".twcczhu.com",
        ".cnblogs.com",
        ".microsoft.com",
        ".dangdang.com",
        ".pchome.net",
        ".pptv.com",
        ".vancl.com",
        ".zhaopin.com",
        ".apple.com",
        ".bitauto.com",
        ".etao.com",
        ".qunar.com",
        ".eastmoney.com",
        ".yihaodian.com",
        ".115.com",
        ".21cn.com",
        ".blog.163.com",
        ".hupu.com",
        ".duowan.com",
        ".52pk.net",
        ".baixing.com",
        ".iteye.com",
        ".verycd.com",
        ".suning.com",
        ".discuz.net",
        ".7k7k.com",
        ".mtime.com",
        ".msn.com",
        ".ccb.com",
        ".hc360.com",
        ".cmbchina.com",
        ".51.com",
        ".yoka.com",
        ".seowhy.com",
        ".chinabyte.com",
        ".qidian.com",
        ".ctrip.com",
        ".cnbeta.com",
        ".tom.com",
        ".tenpay.com",
        ".meituan.com",
        ".120ask.com",
        ".ebay.com",
        ".51cto.com",
        ".sdo.com",
        ".meilishuo.com",
        ".17173.com",
        ".xyxy.net",
        ".19lou.com",
        ".yiqifa.com",
        ".nuomi.com",
        ".eastday.com",
        ".onlinedown.net",
        ".oschina.net",
        ".zhubajie.com",
        ".amazon.com",
        ".babytree.com",
        ".kdnet.net",
        ".docin.com",
        ".qq937.com",
        ".tgbus.com",
        ".51buy.com",
        ".nipic.com",
        ".im286.com",
        ".baomihua.com",
        ".doubleclick.com",
        ".dh818.com",
        ".ads8.com",
        ".hiapk.com",
        ".ynet.com",
        ".sootoo.com",
        ".mogujie.com",
        ".gfan.com",
        ".ppstream.com",
        ".a135.net",
        ".ip138.com",
        ".zx915.com",
        ".lashou.com",
        ".crsky.com",
        ".iciba.com",
        ".uuzu.com",
        ".tuan800.com",
        ".haodf.com",
        ".youboy.com",
        ".ulink.cc",
        ".qiyou.com",
        ".88db.com",
        ".tao123.com",
        ".178.com",
        ".ci123.com",
        ".yolk7.com",
        ".tiexue.net",
        ".stockstar.com",
        ".xici.net",
        ".pcpop.com",
        ".linkedin.com",
        ".weiphone.com",
        ".doc88.com",
        ".adobe.com",
        ".shangdu.com",
        ".aili.com",
        ".anjuke.com",
        ".360doc.com",
        ".cnxad.com",
        ".west263.com",
        ".jiathis.com",
        ".gougou.com",
        ".whlongda.com",
        ".mnwan.com",
        ".onetad.com",
        ".duote.com",
        ".55bbs.com",
        ".iloveyouxi.com",
        ".gongchang.com",
        ".meishichina.com",
        ".qire123.com",
        ".55tuan.com",
        ".cocoren.com",
        ".xiaomi.com",
        ".phpwind.net",
        ".abchina.com",
        ".thethirdmedia.com",
        ".coo8.com",
        ".aliexpress.com",
        ".onlylady.com",
        ".manzuo.com",
        ".elong.com",
        ".aibang.com",
        ".10010.com",
        ".3366.com",
        ".28tui.com",
        ".vipshop.com",
        ".1616.net",
        ".pp.cc",
        ".jumei.com",
        ".tui18.com",
        ".52tlbb.com",
        ".yinyuetai.com",
        ".eye.rs",
        ".baihe.com",
        ".iyaya.com",
        ".imanhua.com",
        ".lusongsong.com",
        ".taobaocdn.com",
        ".leho.com",
        ".315che.com",
        ".donews.com",
        ".cqnews.net",
        ".591hx.com",
        ".114la.com",
        ".gamersky.com",
        ".tangdou.com",
        ".91.com",
        ".uuu9.com",
        ".xinnet.com",
        ".dedecms.com",
        ".cnmo.com",
        ".51fanli.com",
        ".liebiao.com",
        ".yyets.com",
        ".lady8844.com",
        ".newsmth.net",
        ".ucjoy.com",
        ".duba.net",
        ".cnki.net",
        ".70e.com",
        ".funshion.com",
        ".qjy168.com",
        ".paypal.com",
        ".3dmgame.com",
        ".m18.com",
        ".caixin.com",
        ".linezing.com",
        ".53kf.com",
        ".makepolo.com",
        ".dospy.com",
        ".xiami.com",
        ".5173.com",
        ".vjia.com",
        ".hotsales.net",
        ".4738.com",
        ".mydrivers.com",
        ".alisoft.com",
        ".titan24.com",
        ".u17.com",
        ".jb51.net",
        ".diandian.com",
        ".dzwww.com",
        ".hichina.com",
        ".abang.com",
        ".qianlong.com",
        ".m1905.com",
        ".chinahr.com",
        ".zhaodao123.com",
        ".daqi.com",
        ".sourceforge.net",
        ".yaolan.com",
        ".5d6d.net",
        ".fobshanghai.com",
        ".q150.com",
        ".l99.com",
        ".ccidnet.com",
        ".aifang.com",
        ".aol.com",
        ".theplanet.com",
        ".chinaunix.net",
        ".hf365.com",
        ".ad1111.com",
        ".zhihu.com",
        ".blueidea.com",
        ".net114.com",
        ".07073.com",
        ".alivv.com",
        ".mplife.com",
        ".allyes.com",
        ".jqw.com",
        ".netease.com",
        ".1ting.com",
        ".yougou.com",
        ".dbank.com",
        ".made-in-china.com",
        ".36kr.com",
        ".wumii.com",
        ".zoosnet.net",
        ".xitek.com",
        ".ali213.net",
        ".exam8.com",
        ".jxedt.com",
        ".uniontoufang.com",
        ".zqgame.com",
        ".52kmh.com",
        ".yxlady.com",
        ".sznews.com",
        ".longhoo.net",
        ".game3737.com",
        ".51auto.com",
        ".booksky.org",
        ".iqilu.com",
        ".ddmap.com",
        ".cncn.com",
        ".ename.net",
        ".1778.com",
        ".blogchina.com",
        ".778669.com",
        ".dayoo.com",
        ".ct10000.com",
        ".zhibo8.cc",
        ".qingdaonews.com",
        ".zongheng.com",
        ".1o26.com",
        ".oeeee.com",
        ".tiancity.com",
        ".jinti.com",
        ".si.kz",
        ".tuniu.com",
        ".xiu.com",
        ".265.com",
        ".gamestlbb.com",
        ".2hua.com",
        ".moonbasa.com",
        ".sf-express.com",
        ".qiushibaike.com",
        ".ztgame.com",
        ".yupoo.com",
        ".kimiss.com",
        ".cnhubei.com",
        ".pingan.com",
        ".lafaso.com",
        ".rakuten.co.jp",
        ".zhenai.com",
        ".tiao8.info",
        ".7c.com",
        ".tianji.com",
        ".kugou.com",
        ".house365.com",
        ".flickr.com",
        ".xiazaiba.com",
        ".aipai.com",
        ".sodu.org",
        ".bankcomm.com",
        ".lietou.com",
        ".toocle.com",
        ".fengniao.com",
        ".99bill.com",
        ".bendibao.com",
        ".mapbar.com",
        ".nowec.com",
        ".yingjiesheng.com",
        ".comsenz.com",
        ".meilele.com",
        ".otwan.com",
        ".61.com",
        ".meizu.com",
        ".readnovel.com",
        ".fenzhi.com",
        ".up2c.com",
        ".500wan.com",
        ".fx120.net",
        ".ftuan.com",
        ".17u.com",
        ".lehecai.com",
        ".28.com",
        ".bilibili.tv",
        ".huaban.com",
        ".szhome.com",
        ".miercn.com",
        ".fblife.com",
        ".chinaw3.com",
        ".smzdm.com",
        ".b2b168.com",
        ".265g.com",
        ".anzhi.com",
        ".chuangelm.com",
        ".php100.com",
        ".100ye.com",
        ".hefei.cc",
        ".mumayi.com",
        ".sttlbb.com",
        ".mangocity.com",
        ".fantong.com"
    ]
];

function FindProxyForURL(url, host) {

    function check_ipv4() {
        // check if the ipv4 format (TODO: ipv6)
        //   http://home.deds.nl/~aeron/regex/
        var re_ipv4 = /^\d+\.\d+\.\d+\.\d+$/g;
        if (re_ipv4.test(host)) {
            // in theory, we can add chnroutes test here.
            // but that is probably too much an overkill.
            return true;
        }
    }

    function isDomain(domain) {
        var host_length, domain_length;
        return ((domain[0] === '.') ? (host === domain.slice(1) || ((host_length = host.length) >= (domain_length = domain.length) && host.slice(host_length - domain_length) === domain)) : (host === domain));
    } 

    function rule_filter(callback) {
        // IMPORTANT: Respect the order of RULES.
        for (var j = 0; j < RULES.length; j++) {
            var rules=RULES[j]
            for (var i = 0; i < rules.length; i++) {
               if (callback(rules[i]) === true) {
                   return true;
               }
            } 
        } 
        return false;
    }

    // skip local hosts
    if (isPlainHostName(host) === true || check_ipv4() === true || rule_filter(isDomain) === true) {
        return "DIRECT";

    } else {
            // if none of above cases, it is always safe to use the proxy
            return PROXY_METHOD;
    }

}


/*
    MIT License
    Copyright (C) 2012 n0gfwall0@gmail.com

    Permission is hereby granted, free of charge, to any person obtaining a 
    copy of this software and associated documentation files (the "Software"), 
    to deal in the Software without restriction, including without limitation 
    the rights to use, copy, modify, merge, publish, distribute, sublicense, 
    and/or sell copies of the Software, and to permit persons to whom the 
    Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in 
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.

                                                                              */
