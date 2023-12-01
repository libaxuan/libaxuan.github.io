import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as c,c as d,a as e,b as t,d as o,w as a,e as l}from"./app-962296ed.js";const h={},u=e("p",null,"NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点：",-1),_=e("ul",null,[e("li",null,"选择「控制面板」>「文件服务」>「SMB」>「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。"),e("li",null,"选择「控制面板」>「任务计划」>「新增」>「计划的任务」>「用户定义的脚本」，给 NAS 建立定时任务脚本。"),e("li",null,"SSD 缓存对家用的 NAS 性能提升不大，没必要加。"),e("li",null,"群晖系统分布在所有硬盘，拔出一个不影响使用。但应用会有影响？"),e("li",null,"NAS Docker 建议指定本地端口，否则重启容器会让端口发生改变，重启不会不影响 docker 配置。"),e("li",null,"升级容器镜像，不影响内部数据库。群晖的「Docker 导出」只会导出安装镜像和配置，但不包括容器内部使用的数据库，用处不大。")],-1),p=e("h2",{id:"nas-套件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nas-套件","aria-hidden":"true"},"#"),t(" NAS 套件")],-1),f={href:"https://spk7.imnks.com/",target:"_blank",rel:"noopener noreferrer"},b=l('<ul><li>DS/Transmission：用于 PT 下载 (禁用 DHT，半小时停止做种)。</li><li>Synology Drive Server：电脑文件备份。</li><li>Hyper Backup：本地多硬盘备份，防止一个硬盘丢失后重要文件损坏，比如 docker 容器的本地配置文件夹。</li><li>Surveillance Station：管理 IP 摄像机以保护您的家庭和办公环境。借助 Surveillance Station，您可以透过网络浏览器，VisualStation 或移动设备观看和记录实时视频，设置定时记录，回放记录的视频，从而实现远程监控。发生重要事件时，您也会收到通知。注意，摄像头需支持 <strong>ONVIF 协议</strong>。</li></ul><h2 id="docker-容器" tabindex="-1"><a class="header-anchor" href="#docker-容器" aria-hidden="true">#</a> Docker 容器</h2><h3 id="常用" tabindex="-1"><a class="header-anchor" href="#常用" aria-hidden="true">#</a> 常用</h3>',3),m={href:"https://registry.hub.docker.com/r/linuxserver/qbittorrent/",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"BitTorrent - DHT",-1),g={href:"https://blog.csdn.net/weixin_45120915/article/details/114691473",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/AragonSnow/qiandao",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/ckx000/get-cookies",target:"_blank",rel:"noopener noreferrer"},S=e("li",null,[e("a",{href:"/services/dockers-on-nas/mt-photos"},"MT Photos"),t("：支持自动整理、分类您的照片，比如：时间、地点、人物、照片类型。需要 99 元买断服务，每周连线检查授权状态。比较喜欢的是，支持网页分享特定图片影集，适合将宝宝照片批量分享给家人。")],-1),x={href:"https://docs.photoprism.app/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/immich-app/immich",target:"_blank",rel:"noopener noreferrer"},N={href:"https://containrrr.dev/watchtower/",target:"_blank",rel:"noopener noreferrer"},T=e("ul",null,[e("li",null,[t("监控指定名称的镜像："),e("code",null,"docker run -d --name watchtower -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --cleanup --run-once nginx redis"),t("。本案例只更新名为「nginx」和「redis」的容器，其他容器将被忽略。")]),e("li",null,[t("指定容器的 compose 命令中添加 lable "),e("code",null,"com.centurylinklabs.watchtower.enable=false"),t("，可禁止该容器的监控和更新。")])],-1),y=e("h3",{id:"资讯",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#资讯","aria-hidden":"true"},"#"),t(" 资讯")],-1),D=e("li",null,"RSSHub：无需保存数据，pubData 为 GMT 时区，普通用户无法更改，Docker Timezone 设置也不会有改变。",-1),B=e("li",null,"Huginn：定期备份抓取脚本，数据库保存在本地。",-1),E={href:"https://registry.hub.docker.com/r/wangqiru/mercury-parser-api",target:"_blank",rel:"noopener noreferrer"},M=e("li",null,[t("Cloudflare Tunnels：可以将局域网内容转发到外网。不过，每次容器重启后都需要重新构建，"),e("code",null,"sudo docker run --name cloudflared -d --restart unless-stopped cloudflare/cloudflared:latest tunnel --no-autoupdate run --token [Your Tokens]"),t("。后期考虑是否将启动命令放入容器。")],-1),P={href:"https://github.com/easychen/checkchan-dist",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/dgtlmoon/changedetection.io",target:"_blank",rel:"noopener noreferrer"},R=e("h3",{id:"娱乐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#娱乐","aria-hidden":"true"},"#"),t(" 娱乐")],-1),H={href:"https://github.com/alist-org/alist",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.navidrome.org/docs/installation/docker/",target:"_blank",rel:"noopener noreferrer"},$={href:"https://github.com/Difegue/LANraragi",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/Difegue/LANraragi/blob/32cc991e8c5bae3bbd57d163278048c50159ae9f/tools/Documentation/advanced-usage/external-readers.md",target:"_blank",rel:"noopener noreferrer"},L=e("li",null,[e("a",{href:"/services/dockers-on-nas/tachidesk"},"Tachidesk"),t("：开源的漫画阅读应用，通过安装扩展插件，可以方便地订阅并聚合漫画源。使用前，需进入 Extensions，点右上角的 Enabled Languages 按钮，设置为中文源，然后会在页面底部发现中文漫画源。安装源后，进入 Souces 中点击进入对应源。")],-1),q=e("li",null,[e("a",{href:"/services/dockers-on-nas/reader"},"reader"),t("：阅读 3 的服务器版，摆脱客户端，网页版即可查看。自定义替换进入文章页面左侧的「设置」-「过滤规则管理」。")],-1),V={href:"https://github.com/talebook/talebook",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/zzcabc/Docker_Buildx_Danmuji",target:"_blank",rel:"noopener noreferrer"},F={href:"https://hub.docker.com/r/makedie/noname_kill",target:"_blank",rel:"noopener noreferrer"},G={href:"https://hub.docker.com/r/gswxy/gswxy",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.gswxy.com/?p=67",target:"_blank",rel:"noopener noreferrer"},X=e("h3",{id:"自动化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自动化","aria-hidden":"true"},"#"),t(" 自动化")],-1),U={href:"https://blog.csdn.net/alex_yangchuansheng/article/details/122295193",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://www.home-assistant.io/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/monicahq/monica",target:"_blank",rel:"noopener noreferrer"},K={href:"https://github.com/monicahq/docker",target:"_blank",rel:"noopener noreferrer"},W=e("code",null,"Me as a contact",-1),Q={href:"https://supermanito.github.io/Helloworld/#/",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://registry.hub.docker.com/r/dorowu/ubuntu-desktop-lxde-vnc",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://rustdesk.com/zh/",target:"_blank",rel:"noopener noreferrer"},te=e("h3",{id:"待了解",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#待了解","aria-hidden":"true"},"#"),t(" 待了解")],-1),oe=e("li",null,"Nextcloud: 私有云盘，完成 PC 端文件同步、版本控制，提供 web 端、移动端 app。",-1),ne={href:"https://github.com/lsky-org/lsky-pro",target:"_blank",rel:"noopener noreferrer"},re={href:"https://github.com/EstrellaXD/Auto_Bangumi",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://github.com/jxxghp/nas-tools/wiki/%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"},se=e("li",null,"Clash：代理服务器。",-1),le=e("h2",{id:"影视整理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#影视整理","aria-hidden":"true"},"#"),t(" 影视整理")],-1),ie=e("p",null,"下载文件后，用 tinyMediaManager 重命名并下载 NFO 和影视封面，最后放置于分类文件夹。",-1),ce={href:"https://www.tinymediamanager.org/download/",target:"_blank",rel:"noopener noreferrer"},de=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),he=l('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 电视节目重命名规则</span>\n季文件夹名：Season <span class="token variable">${seasonNr}</span>\n剧集档案名：<span class="token variable">${showTitle}</span> - S<span class="token variable">${seasonNr2}</span>E<span class="token variable">${episodeNr2}</span> - <span class="token variable">${title}</span>\n\n<span class="token comment"># 当只有一季时，则更改重命名规则</span>\n季文件夹名：为空时，会自动调用默认值\n剧集档案名：<span class="token variable">${showTitle}</span> - E<span class="token variable">${episodeNr2}</span>\n\n<span class="token comment"># 多季，有标题时</span>\n剧集档案名：<span class="token variable">${showTitle}</span> - E<span class="token variable">${episodeNr2}</span> - <span class="token variable">${title}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nas-硬盘" tabindex="-1"><a class="header-anchor" href="#nas-硬盘" aria-hidden="true">#</a> NAS 硬盘</h2><p>插入新硬盘，新建储存空间，使用 Btrfs 或 Basic 格式。SHR 是群晖的智能 RAID 格式，不适用于硬盘容量不同的情况。</p><table><thead><tr><th>硬盘</th><th>容量</th><th>到期时间（5 年）</th></tr></thead><tbody><tr><td>硬盘 1</td><td>10T</td><td>2025-06-18</td></tr><tr><td>硬盘 2</td><td>4T</td><td>2023-01-24</td></tr><tr><td>硬盘 3</td><td>14T</td><td>2027-02-11</td></tr><tr><td>硬盘 4</td><td>8T</td><td>2026-01-06</td></tr><tr><td>冷备份</td><td>2T</td><td>2014-10</td></tr></tbody></table><p>换下的机械硬盘做冷备份，存储照片等长期数据。</p><p>硬盘临期后，用大容量硬盘替换。选择「存储池」&gt;「更改 RAID 类型」，无损转换 basic 到 Raid1。不过，不同容量硬盘组 RAID，只能以最小磁盘容量计使用空间。</p><p>更换硬盘后，注意将数据连同文件夹用 file station 复制过去 (按住 Shift 选中所有你要的文件点右键 移动到...)，关机卸载旧盘。如果该硬盘涉及套件位置，注意检查设置。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p>共享文件迁移：选择「控制面板」&gt;「共享文件夹」，把你的共享文件夹位置修改到新储存空间。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p><hr class="footnotes-sep">',9),ue={class:"footnotes"},_e={class:"footnotes-list"},pe={id:"footnote1",class:"footnote-item"},fe={href:"https://post.smzdm.com/p/a0d67m2z/",target:"_blank",rel:"noopener noreferrer"},be=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),me={id:"footnote2",class:"footnote-item"},ke={href:"https://www.bigzhang.com/3264.html",target:"_blank",rel:"noopener noreferrer"},ge=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),ve={id:"footnote3",class:"footnote-item"},we={href:"https://blog.csdn.net/hilaryfrank/article/details/109722319",target:"_blank",rel:"noopener noreferrer"},Se=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1);function xe(Ae,Ne){const n=s("ExternalLinkIcon"),r=s("RouterLink");return c(),d("div",null,[u,_,p,e("p",null,[t("除了官方套件源，我会加上 "),e("a",f,[t("DSM7.x 矿神 SPK 套件源"),o(n)]),t("。")]),b,e("ul",null,[e("li",null,[e("a",m,[t("qbittorrent"),o(n)]),t("：需修改所有默认端口，否则容易报错。PT 下载关闭 "),k,t(" 和其他隐私选项，半小时停止做种，将下载文件添加 Everyone 权限，其他设置参考"),e("a",g,[t("群晖使用 qbittorrent"),o(n)]),t("。")]),e("li",null,[e("a",v,[t("qiandao"),o(n)]),t("：自动签到开源框架，需搭配浏览器扩展 "),e("a",w,[t("get-cookies"),o(n)]),t(" 使用，可导出配置。")]),S,e("li",null,[e("a",x,[t("PhotoPrism"),o(n)]),t("：基于 ai 私有化部署的个人相册，但实际很多照片无法识别，无法对外分享。如果部署时出错，则尝试删除数据库文件夹下的内容。地点标记功能非常强大，类似本地版 Google Photos。")]),e("li",null,[e("a",A,[t("Immich"),o(n)]),t(": 相册备份、浏览，提供 web 端、移动端 app。但不支持扫描已有文件。")]),e("li",null,[e("a",N,[t("watchtower"),o(n)]),t("：监控并更新 Docker 容器。 "),T])]),y,e("ul",null,[D,B,e("li",null,[t("Tiny Tiny RSS：定期备份订阅源和设置，自动更新，可配置全文插件 "),e("a",E,[t("mercury-parser-api"),o(n)]),t("。")]),M,e("li",null,[e("a",P,[t("Check 酱"),o(n)]),t("：监测网页内容变化，并发送异动到微信。亦支持 http status、json 和 rss 监测。配合自架云端，关电脑后也能运行。同类工具有 "),e("a",z,[t("changedetection.io"),o(n)]),t("。")])]),R,e("ul",null,[e("li",null,[e("a",H,[t("AList"),o(n)]),t("：开源的网盘管理工具，还支持对象存储，本地存储，FTP 等等。")]),e("li",null,[e("a",I,[t("Navidrome"),o(n)]),t("：NAS 上的私人专属在线音乐库。")]),e("li",null,[o(r,{to:"/services/dockers-on-nas/"},{default:a(()=>[t("Emby")]),_:1}),t("/Plex：这两者都是热门的视频流媒体解决方案。终身会员的价格为 119 美元。Jellyfin 作为一个开源免费的选择，同样是一个不错的考虑。")]),e("li",null,[e("a",$,[t("LANraragi"),o(n)]),t("：免费开源的漫画管理器，支持 zip/rar/targz/lzma/7z/xz/cbz/cbr/pdf 多种格式，可从网页和 "),e("a",C,[t("第三方客户端"),o(n)]),t(" 浏览。")]),L,q,e("li",null,[e("a",V,[t("Tale Book"),o(n)]),t("：基于 Calibre 的简单的个人图书管理系统，支持在线阅读，但阅读体验不强且 Bug 较多，个人更喜欢直接用 PC 端查看。")]),e("li",null,[e("a",j,[t("Bilibili_Danmuji"),o(n)]),t("：B 站直播礼物答谢、定时广告、关注感谢，自动回复工具，房管工具，自动打卡，Bilibili 直播弹幕姬 (使用 websocket 协议)，java 版 B 站弹幕姬。部署 Docker 时需更新 jdr release 文件。")]),e("li",null,[e("a",F,[t("无名杀"),o(n)]),t("：部署在 NAS 上的三国杀游戏。")]),e("li",null,[e("a",G,[t("GSWXY - 魔兽世界单机服务端"),o(n)]),t("：需要 2G 内存和 20G 硬盘空间。你也可以直接使用"),e("a",O,[t("耳语海岸 RP 服"),o(n)]),t("。")])]),X,e("ul",null,[e("li",null,[e("a",U,[t("n8n"),o(n)]),t("：开源 IFTTT 工具，偏重于云服务。")]),e("li",null,[o(r,{to:"/family/HomeAutomation.html#node-red"},{default:a(()=>[t("Node-RED")]),_:1}),t("：开源流处理，类似本地版的 IFTTT。")]),e("li",null,[e("a",Y,[t("Home Assistant"),o(n)]),t("：开源家庭自动化平台，可自定义集中管理各品牌的智能家居设备。米家设备需使用 hacs 下的集成 "),o(r,{to:"/family/HomeAutomation.html#home-assistant"},{default:a(()=>[t("Xiaomi Miot Auto")]),_:1}),t("。")]),e("li",null,[e("a",J,[t("Monica"),o(n)]),t("：Monica 允许人们记录所有关于朋友和家人的重要事情。喜欢和他们一起的活动。你最后一次打电话给某人的时候，你们谈了些什么。它会帮助你记住他们孩子的名字和年龄。它还能提醒你打电话给一个很久没联系的人。Monica 的容器设置查看 "),e("a",K,[t("Monica Docker"),o(n)]),t("。"),W,t(" 是它常年的一个 bug，可以通过指定数据库中的 users.me_contact_id 来解决。")]),e("li",null,[e("a",Q,[t("supermanito/Helloworld"),o(n)]),t("：京东签到等脚本，功能很强大，没怎么研究。")]),e("li",null,[e("a",Z,[t("ubuntu-desktop-lxde-vnc"),o(n)]),t("：能在 Docker 上运行的 Ubuntu 桌面版，适合挂载要长期运行的程序。测试 OBS 时，对内存要求不高，但 CPU 直冲 100%，fps 只有 7。")]),e("li",null,[e("a",ee,[t("RustDesk"),o(n)]),t("：自建远程桌面，平替 TeamViewer 的开源软件。矿神源有套件，可直接部署中继服务器。")])]),te,e("ul",null,[oe,e("li",null,[e("a",ne,[t("兰空图床"),o(n)]),t("：图床已经部署在七牛云，用 Picgo 上传，没感觉有必要用它。")]),e("li",null,[e("a",re,[t("AutoBangumi"),o(n)]),t("：自动追番器，用以替代自我审查的 Bilibili。")]),e("li",null,[e("a",ae,[t("nas-tools"),o(n)]),t("：号称能自动整理文件，但测试识别中很容易出错，暂不考虑。")]),se]),le,ie,e("p",null,[e("a",ce,[t("tinyMediaManager"),o(n)]),t(" v4 免费版足够个人使用，v3 作偶尔补充使用，搜索首选语言改为「大陆简体」更精准。"),de]),he,e("section",ue,[e("ol",_e,[e("li",pe,[e("p",null,[e("a",fe,[t("群晖 NAS 使用 Emby+tMM 打造全平台观影畅爽体验（附下载地址）"),o(n)]),t(),be])]),e("li",me,[e("p",null,[e("a",ke,[t("如何把群晖 NAS 上的套件搬到另外个硬盘上"),o(n)]),t(),ge])]),e("li",ve,[e("p",null,[e("a",we,[t("群晖 NAS 跨存储空间移动共享文件夹 (NAS 新增磁盘)"),o(n)]),t(),Se])])])])])}const De=i(h,[["render",xe],["__file","NAS.html.vue"]]);export{De as default};
