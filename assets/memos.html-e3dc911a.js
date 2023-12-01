import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c,a as n,b as s,d as a,e as i}from"./app-962296ed.js";const p={},r={href:"https://github.com/usememos/memos",target:"_blank",rel:"noopener noreferrer"},m=i(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">memos</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> neosmemo/memos<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> memos
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/memos<span class="token punctuation">:</span>/var/opt/memos
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5230<span class="token punctuation">:</span><span class="token number">5230</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),u={href:"https://github.com/Quorafind/Obsidian-Memos",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"flomo 支持将所有笔记导出，并允许通过微信输入内容。flomo Pro 每日会随机选取 12 条符合条件的内容，让你过往的记录发挥更大的价值。",-1),k=n("p",null,"然而，对于我个人而言，flomo 和 Memos 更适合碎片化记录，无需频繁回顾。除了记录心情类日记之外，有价值的信息可以以知识点的形式保存在思源笔记中，然后通过思源笔记的间隔重复闪卡功能来加强记忆。",-1);function v(_,b){const e=t("ExternalLinkIcon");return l(),c("div",null,[n("p",null,[n("a",r,[s("Memos"),a(e)]),s(" 可视为开源版的 flomo，其界面及功能非常相似，适用于碎片化记录和灵感捕捉，同时支持小范围的分享，适用于个人微博记录。Memos 能以时间线形式回顾你选择的日期的记录，并允许通过 Telegram 机器人输入内容。此外，你还可以选择将数据保存在第三方云存储中。")]),m,n("p",null,[s("如果你使用 Obsidian，还可以考虑使用其插件 "),n("a",u,[s("Obsidian-Memos"),a(e)]),s("，它与 Memos 功能类似，但笔记将保存在 Obsidian 中。你还可以使用 Memos Sync 插件将 memos 记录同步至 Obsidian。")]),d,k])}const g=o(p,[["render",v],["__file","memos.html.vue"]]);export{g as default};
