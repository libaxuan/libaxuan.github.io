const a=JSON.parse(`{"key":"v-08917e81","path":"/services/dockers-on-nas/uptime-kuma.html","title":"Uptime Kuma：轻量运维监控","lang":"zh-CN","frontmatter":{"article":false,"title":"Uptime Kuma：轻量运维监控","order":80,"description":"Uptime Kuma 是一款轻量级自动化运维监控工具，支持监控 HTTP(s)、TCP、Ping、DNS 记录、推送以及 Steam 游戏服务器的正常运行时间。相对于 Check 酱，它的设置更为简单，非常适合用于网页监测服务。如果您只需检查特定关键词是否存在于网页中，使用 Uptime Kuma 就足够了。 version: '3.8' services: uptime-kuma: image: louislam/uptime-kuma:1 container_name: uptime-kuma volumes: - /volume1/docker/uptime-kuma/data:/app/data # 用于 Docker 容器监控 - /var/run/docker.sock:/var/run/docker.sock ports: - \\"3001:3001\\" # &lt;Host Port&gt;:&lt;Container Port&gt; restart: always","head":[["meta",{"property":"og:url","content":"https://gpt-vip.top/services/dockers-on-nas/uptime-kuma.html"}],["meta",{"property":"og:site_name","content":"LearnHubs"}],["meta",{"property":"og:title","content":"Uptime Kuma：轻量运维监控"}],["meta",{"property":"og:description","content":"Uptime Kuma 是一款轻量级自动化运维监控工具，支持监控 HTTP(s)、TCP、Ping、DNS 记录、推送以及 Steam 游戏服务器的正常运行时间。相对于 Check 酱，它的设置更为简单，非常适合用于网页监测服务。如果您只需检查特定关键词是否存在于网页中，使用 Uptime Kuma 就足够了。 version: '3.8' services: uptime-kuma: image: louislam/uptime-kuma:1 container_name: uptime-kuma volumes: - /volume1/docker/uptime-kuma/data:/app/data # 用于 Docker 容器监控 - /var/run/docker.sock:/var/run/docker.sock ports: - \\"3001:3001\\" # &lt;Host Port&gt;:&lt;Container Port&gt; restart: always"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T10:03:56.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2023-12-01T10:03:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Uptime Kuma：轻量运维监控\\",\\"description\\":\\"Uptime Kuma 是一款轻量级自动化运维监控工具，支持监控 HTTP(s)、TCP、Ping、DNS 记录、推送以及 Steam 游戏服务器的正常运行时间。相对于 Check 酱，它的设置更为简单，非常适合用于网页监测服务。如果您只需检查特定关键词是否存在于网页中，使用 Uptime Kuma 就足够了。 version: '3.8' services: uptime-kuma: image: louislam/uptime-kuma:1 container_name: uptime-kuma volumes: - /volume1/docker/uptime-kuma/data:/app/data # 用于 Docker 容器监控 - /var/run/docker.sock:/var/run/docker.sock ports: - \\\\\\"3001:3001\\\\\\" # &lt;Host Port&gt;:&lt;Container Port&gt; restart: always\\"}"]]},"headers":[],"git":{"createdTime":1701425036000,"updatedTime":1701425036000,"contributors":[{"name":"libaxuan","email":"33255877+libaxuan@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.5,"words":149},"filePathRelative":"services/dockers-on-nas/uptime-kuma.md","localizedDate":"2023年12月1日","excerpt":"<p><a href=\\"https://github.com/louislam/uptime-kuma\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Uptime Kuma</a> 是一款轻量级自动化运维监控工具，支持监控 HTTP(s)、TCP、Ping、DNS 记录、推送以及 Steam 游戏服务器的正常运行时间。相对于 Check 酱，它的设置更为简单，非常适合用于网页监测服务。如果您只需检查特定关键词是否存在于网页中，使用 Uptime Kuma 就足够了。</p>\\n<div class=\\"language-yaml line-numbers-mode\\" data-ext=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token key atrule\\">version</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'3.8'</span>\\n\\n<span class=\\"token key atrule\\">services</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">uptime-kuma</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">image</span><span class=\\"token punctuation\\">:</span> louislam/uptime<span class=\\"token punctuation\\">-</span>kuma<span class=\\"token punctuation\\">:</span><span class=\\"token number\\">1</span>\\n    <span class=\\"token key atrule\\">container_name</span><span class=\\"token punctuation\\">:</span> uptime<span class=\\"token punctuation\\">-</span>kuma\\n    <span class=\\"token key atrule\\">volumes</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> /volume1/docker/uptime<span class=\\"token punctuation\\">-</span>kuma/data<span class=\\"token punctuation\\">:</span>/app/data\\n      <span class=\\"token comment\\"># 用于 Docker 容器监控</span>\\n      <span class=\\"token punctuation\\">-</span> /var/run/docker.sock<span class=\\"token punctuation\\">:</span>/var/run/docker.sock\\n    <span class=\\"token key atrule\\">ports</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> <span class=\\"token string\\">\\"3001:3001\\"</span>  <span class=\\"token comment\\"># &lt;Host Port&gt;:&lt;Container Port&gt;</span>\\n    <span class=\\"token key atrule\\">restart</span><span class=\\"token punctuation\\">:</span> always\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{a as data};
