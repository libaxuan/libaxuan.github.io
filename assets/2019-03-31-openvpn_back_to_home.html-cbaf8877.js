import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as r,c as i,a as e,b as o,d as n,e as s}from"./app-962296ed.js";const c={},l=e("p",null,"有时在外面需要访问家里的文件，或直接利用家中网络设置翻墙。为此，利用路由器 OpenVPN 搭建了一条回家的路。",-1),_=e("h2",{id:"内网穿透",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#内网穿透","aria-hidden":"true"},"#"),o(" 内网穿透")],-1),d={href:"http://home.xxx.com",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"梅林路由器进入「高级设置」→「外部网络（WAN）」→「DDNS」，将路由器指向准备好的子域名。",-1),h=e("figure",null,[e("img",{src:"https://img.gpt-vip.top/20190331203233.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),m=e("p",null,"电信分配的公网 IP 经常会更换，每次都需要重定向子域名。在路由器 koolshare - 软件中心中安装 Aliddns，帮助更新家的公网 IP。插件中输入定向子域名和阿里云的 appkey，配置就完成了。如果没有自动在阿里云解析，可以先手动解析设置。",-1),f={href:"https://gpt-vip.top/posts/2018-06-08-Baizhuo_GP1700.html",target:"_blank",rel:"noopener noreferrer"},u=s('<h2 id="openvpn-配置" tabindex="-1"><a class="header-anchor" href="#openvpn-配置" aria-hidden="true">#</a> OpenVPN 配置</h2><p>内网穿透完成后，开始 OpenVPN 配置。梅林路由器进入「高级设置」→「VPN」→「虚拟专用网（VPN）服务器」，开启路由器自带的 OpenVPN。</p><figure><img src="https://img.gpt-vip.top/20190331200921.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>高级配置红色的部分有修改，特别是<strong>VPN 子网必须修改为与路由器不同的号段</strong>，如 192.168.3.0。如果使用默认子网，会无法顺利翻墙。</p><p>应用设置后，点击「一般设置」，并导出 .ovpn 文件。打开该配置文件，将远程端口改为光猫上虚拟服务器映射的端口。</p><figure><img src="https://img.gpt-vip.top/20190331202017.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>最后，手机导入 <code>.ovpn</code> 设置文件，就可以上网回家了！</p>',7);function x(b,v){const t=p("ExternalLinkIcon");return r(),i("div",null,[l,_,e("p",null,[o("连接家中内网，家里必须有个固定的访问地址。我将子域名 "),e("a",d,[o("home.xxx.com"),n(t)]),o(" 指向家中 IP。")]),g,h,m,e("p",null,[o("光猫设置参考"),e("a",f,[o("光猫改造 篇三：百卓 GP1700 进阶设置 - 端口映射"),n(t)]),o("。")]),u])}const V=a(c,[["render",x],["__file","2019-03-31-openvpn_back_to_home.html.vue"]]);export{V as default};
