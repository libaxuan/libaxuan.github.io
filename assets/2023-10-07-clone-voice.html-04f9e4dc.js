import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c,d as a,a as e,b as n,e as t}from"./app-962296ed.js";const h={},d=e("p",null,"每个人的声音都是独一无二的，克隆自己的声音可以用于制作高度个性化的内容，如播客、视频、音乐等。",-1),p=e("p",null,"你的声音是个人品牌的重要组成部分。利用人工智能，你可以不需要亲自录音就能生成大量优质音频内容，节省时间的同时确保内容质量和一致性。市场上虽有众多第三方语音生成技术，但它们大多数使用通用或他人的声音，导致内容缺乏个性化特质。例如，「注意看，这个男人叫小帅」的声音已经在众多影视作品中被重复使用。与之不同，AI 克隆技术能提供前所未有的个性化和定制体验。",-1),_=e("p",null,"艾什莉的播客就是一个典型例子，她利用 AI 生成了根据当日新闻热点定制的讲稿，再用 AI 克隆的自己的声音进行朗读，配上背景音乐，既经济又高效。",-1),u={href:"https://github.com/Plachtaa/VITS-fast-fine-tuning",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"收集语音样本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#收集语音样本","aria-hidden":"true"},"#"),n(" 收集语音样本")],-1),f=e("p",null,[n("克隆声音的第一步是准备自己的声音样本。确保录音中只有你的声音，且语音清晰、语速均匀。录音完成后，需检查 "),e("code",null,"final_annotation"),n(" 等 txt 文件的音频转写情况，确认停顿和文字是否正确。")],-1),m=e("figure",null,[e("img",{src:"https://img.gpt-vip.top/2023-10-08-21-53-46.png?imageMogr2/format/webp/thumbnail/400x",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),b={href:"https://weixinxcxdb.oss-cn-beijing.aliyuncs.com/gwYinPinKu/BZNSYP.rar",target:"_blank",rel:"noopener noreferrer"},v=e("figure",null,[e("img",{src:"https://img.gpt-vip.top/2023-10-11-10-22-27.png?imageMogr2/format/webp/thumbnail/400x",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),k=e("h2",{id:"云端训练模型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#云端训练模型","aria-hidden":"true"},"#"),n(" 云端训练模型")],-1),x={href:"https://github.com/Plachtaa/VITS-fast-fine-tuning/blob/main/README_ZH.md",target:"_blank",rel:"noopener noreferrer"},y={href:"https://colab.research.google.com/drive/1pn1xnFfdLK63gVXDwV4zCXfVeo8c-I-0?usp=sharing",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"max_epochs",-1),C=e("figure",null,[e("img",{src:"https://img.gpt-vip.top/2023-10-07-07-37-52.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),w=e("p",null,"我曾在 Colab 上用 8 分钟的 B 站视频进行训练，但三小时后由于超出免费额度被终止。后来我在配备了 3080Ti 的本地设备上进行训练，4 小时后便完成了调试。",-1),P=e("h2",{id:"本地训练模型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本地训练模型","aria-hidden":"true"},"#"),n(" 本地训练模型")],-1),V={href:"https://github.com/Plachtaa/VITS-fast-fine-tuning/blob/main/LOCAL.md",target:"_blank",rel:"noopener noreferrer"},j={href:"https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"pip install --upgrade numpy",-1),z={href:"https://huggingface.co/datasets/Plachta/sampled_audio4ft/resolve/main/sampled_audio4ft_v2.zip",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,"第 7 步 (下载模型与配置)：",-1),D={href:"https://huggingface.co/datasets/Plachta/sampled_audio4ft/resolve/main/VITS-Chinese/D_0.pth",target:"_blank",rel:"noopener noreferrer"},L={href:"https://huggingface.co/datasets/Plachta/sampled_audio4ft/resolve/main/VITS-Chinese/G_0.pth",target:"_blank",rel:"noopener noreferrer"},E={href:"https://huggingface.co/datasets/Plachta/sampled_audio4ft/resolve/main/VITS-Chinese/config.json",target:"_blank",rel:"noopener noreferrer"},G={href:"https://huggingface.co/spaces/sayashi/vits-uma-genshin-honkai/resolve/main/model/D_0-p.pth",target:"_blank",rel:"noopener noreferrer"},M={href:"https://huggingface.co/spaces/sayashi/vits-uma-genshin-honkai/resolve/main/model/G_0-p.pth",target:"_blank",rel:"noopener noreferrer"},O={href:"https://huggingface.co/spaces/sayashi/vits-uma-genshin-honkai/resolve/main/model/config.json",target:"_blank",rel:"noopener noreferrer"},U={href:"https://huggingface.co/spaces/Plachta/VITS-Umamusume-voice-synthesizer/resolve/main/pretrained_models/D_trilingual.pth",target:"_blank",rel:"noopener noreferrer"},A={href:"https://huggingface.co/spaces/Plachta/VITS-Umamusume-voice-synthesizer/resolve/main/pretrained_models/G_trilingual.pth",target:"_blank",rel:"noopener noreferrer"},B={href:"https://huggingface.co/spaces/Plachta/VITS-Umamusume-voice-synthesizer/resolve/main/configs/uma_trilingual.json",target:"_blank",rel:"noopener noreferrer"},N=t("<li>选择上方一种模型进行下载。完成下载后，将 G 模型重命名为 <code>G_0.pth</code>，将 D 模型重命名为 <code>D_0.pth</code>，并将配置文件 .json 重命名为 <code>finetune_speaker.json</code>。<code>G_0.pth</code> 和 <code>D_0.pth</code> 放入 pretrained_models 目录，<code>finetune_speaker.json</code> 放入 config 目录。特别注意，要保证 json 文件是直接下载而非复制粘贴，以防后续步骤中打开 inference 出现问题。</li>",1),F={href:"http://LOCAL.md",target:"_blank",rel:"noopener noreferrer"},H=t(`<li><p>第 9 步：运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python scripts/video2audio.py
python scripts/denoise_audio.py

python scripts/long_audio_transcribe.py <span class="token parameter variable">--languages</span> C <span class="token parameter variable">--whisper_size</span> large-v2
python scripts/short_audio_transcribe.py <span class="token parameter variable">--languages</span> C <span class="token parameter variable">--whisper_size</span> large-v2

python scripts/resample.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>第 10 步：执行 <code>python preprocess_v2.py --add_auxiliary_data True --languages C</code>。</p></li><li><p>第 11 步：</p><ul><li>开始训练：<code>python finetune_speaker_v2.py -m ./OUTPUT_MODEL --max_epochs 5000 --drop_speaker_embed True</code>。</li><li>如果训练过程中断，要继续训练，执行 <code>python finetune_speaker_v2.py -m ./OUTPUT_MODEL --max_epochs 10000 --drop_speaker_embed False --cont True</code>。</li></ul><figure><img src="https://img.gpt-vip.top/2023-10-10-05-01-08.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li>`,3),J=e("h2",{id:"文字生成语音",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#文字生成语音","aria-hidden":"true"},"#"),n(" 文字生成语音")],-1),Z=e("code",null,"OUTPUT_MODEL",-1),K={href:"https://github.com/Plachtaa/VITS-fast-fine-tuning/releases",target:"_blank",rel:"noopener noreferrer"},W=e("code",null,"G_latest.pth",-1),X=e("code",null,"finetune_speaker.json",-1),Y=e("figure",null,[e("img",{src:"https://img.gpt-vip.top/2023-10-09-09-08-31.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),q=e("code",null,"finetune_speaker.json",-1),R=e("code",null,'File "inference.py", line 99',-1),Q={href:"https://wwva.lanzouq.com/iIy5m1b4bosf",target:"_blank",rel:"noopener noreferrer"},$=e("code",null,"config.json",-1),ee=e("code",null,"finetune_speaker.json",-1),ne=t('<h2 id="声音微调" tabindex="-1"><a class="header-anchor" href="#声音微调" aria-hidden="true">#</a> 声音微调</h2><h3 id="生成声音与原声无关" tabindex="-1"><a class="header-anchor" href="#生成声音与原声无关" aria-hidden="true">#</a> 生成声音与原声无关</h3><p>在检查语料转写文本时，尽量减少对 <code>short_character_anno.txt</code> 和 <code>long_character_anno.txt</code> 文件的非必要修改。过多的修改可能会导致生成的声音与原始声音产生明显差异。最初的训练中，可以将 <code>max_epochs</code> 设置为 200。在确生成声音符合预期后，再进行后续的训练。</p><p>例如：因个人语调的不同，我读的是「假语村言」，但 whisper 将其识别为「甲乙寸言」。如果我保留 whisper 的识别结果不做修改，最终生成的声音与我本人的声音非常接近。但当我将 whisper 识别结果修改为原文本后，生成的声音产生了显著变化，几乎听不出与原声音的相似性。我们只需要对那些发音明显错误的部分做出修改。例如，「假」和「甲」的发音相同，无需更改；「语」和「乙」之间的差异较大，但由于是个人发音的特点，也无需更改；对于「村」和「寸」这样声调不同的词汇，可以在检查录音后做出相应更改。</p><h3 id="语音克隆的「口音」问题" tabindex="-1"><a class="header-anchor" href="#语音克隆的「口音」问题" aria-hidden="true">#</a> 语音克隆的「口音」问题</h3>',5),ae=t('<p>这个示例是使用 8 分钟 B 站视频和 CJE 模型训练出的。但你可能注意到了明显的断调口音问题，仿佛一个日本人在说中文。正如 @zachx121 指出的，「CJE 用的时候 romaji 的注音，就好比说用汉语拼音去标注英文单词的发音一样会有“口音”」。为了避免这个问题，可以使用纯中文设计的 C 模式进行训练和生成，以确保音频的自然和准确性。增加训练次数也有助于改善口音问题。</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="无法启动-inference" tabindex="-1"><a class="header-anchor" href="#无法启动-inference" aria-hidden="true">#</a> 无法启动 inference</h3><p>如果你遇到无法启动 inference 的问题，通常是因为 <code>finetune_speaker.json</code> 配置文件有问题。确保你下载的 json 文件是对应的版本，并且格式完整。如果问题仍然存在，可以考虑使用 <code>configs/modified_finetune_speaker.json</code> 文件替代原有配置文件，通常这样可以解决运行中出现的错误。</p><h3 id="长音频识别问题" tabindex="-1"><a class="header-anchor" href="#长音频识别问题" aria-hidden="true">#</a> 长音频识别问题</h3><p>要注意，长音频需要采用 wav 格式。即即使原本为 mp3 格式的音频文件在后期转为 wav，也可能出错。因此，直接使用 wav 格式进行长音频录制或选择是更好的做法。</p><h3 id="录音中出现-zh" tabindex="-1"><a class="header-anchor" href="#录音中出现-zh" aria-hidden="true">#</a> 录音中出现 zh</h3><p>在使用纯中文模式调试时，音频前后可能会标注当前语言，例如，中文语言中出现 ZH 标注。为去除这些不必要的语言标注，可以将生成语言设置为 <code>Mix</code> 模式。</p><h3 id="长句读音含糊" tabindex="-1"><a class="header-anchor" href="#长句读音含糊" aria-hidden="true">#</a> 长句读音含糊</h3><p>用短句生成了一段 6 秒的清晰音频，但当将两个相同的短句重复形成长句时，生成的语音时长仅为 9 秒，发音特别含糊。可能是因为语料文本过度修改，一些语音没有被 Whisper 识别，但已经标注。这与训练次数无关，出现此问题后，需重新检查语料。</p>',10);function oe(te,ie){const i=r("AudioPlayer"),o=r("ExternalLinkIcon");return l(),c("div",null,[d,p,_,a(i,{src:"https://oss.gpt-vip.top/audio/clonevoice00.wav",title:"克隆音频实例"}),e("p",null,[n("我使用了 "),e("a",u,[n("VITS-fast-fine-tuning"),a(o)]),n(" 来克隆我的声音。这款工具能从短音频、长音频或视频中克隆特定角色的声音，只需几小时即可完成预训练的 VITS 模型的微调。微调后的模型不仅能进行声线转换，还能完成中、日、英三种语言的文本到语音的转换。")]),g,f,m,e("p",null,[n("为增加语音样本的多样性，选择不同主题和领域的文本材料。我使用的文本来自"),e("a",b,[n("标贝数据集"),a(o)]),n("，该数据集包含 10000 条文本和对应的读音。我选了 300 条用于短音频录制，每条录音时长在 2 至 10 秒之间。语料的质量优于数量，如果需要，可以减少语料条数或使用长视频。VITS-fast-fine-tuning 工具会自动将长音频剪切成短音频。")]),v,k,e("p",null,[n("关于模型的微调和部署，你可以参考官方 GitHub "),e("a",x,[n("页面"),a(o)]),n("的详细操作指南。")]),e("p",null,[n("在 "),e("a",y,[n("Google Colab"),a(o)]),n(" 进行模型微调时，可能会因长时间未连接或超出免费配置限制而中断。为防止数据丢失，应提前选择「STEP 5 下载模型」的下载选项。在 Colab 进行云端训练时，建议长音频时长控制在 20 分钟以内，"),T,n(" 设置为 100。如需进一步提升模型质量，可继续训练模型，再进行 100 次 epochs。")]),C,w,P,e("p",null,[n("如果需要进行深入的模型调整，比如执行 5000 次 epochs，可能需要数天的时间。为此，你可以参考 "),e("a",V,[n("LOCAL.md"),a(o)]),n(" 来在本地环境进行训练。而针对其中可能存在的不明确部分，以下补充具体步骤和建议。")]),e("ul",null,[e("li",null,[e("p",null,[n("第 0 步：预先确认本地环境的 Python 版本为 3.8，并且已经安装了 "),e("a",j,[n("Microsoft C++ 生成工具"),a(o)]),n(" 和 ffmpeg。这样可以预防潜在错误。在启动本地运行之前，执行 "),I,n(" 来更新 numpy 版本。")])]),e("li",null,[e("p",null,[n("第 6 步：鉴于 wget 下载命令在 Windows 中可能不起作用，建议手动下载 "),e("a",z,[n("sampled_audio4ft_v2.zip"),a(o)]),n("，随后将文件解压至运行路径。")])]),e("li",null,[S,e("ul",null,[e("li",null,[n("C 模型（纯中文）：下载 HuggingFace 平台上的 "),e("a",D,[n("D_0.pth"),a(o)]),n("、"),e("a",L,[n("G_0.pth"),a(o)]),n(" 和 "),e("a",E,[n("config.json"),a(o)]),n("。")]),e("li",null,[n("CJ 模型（中日）：下载 "),e("a",G,[n("D_0-p.pth"),a(o)]),n("、"),e("a",M,[n("G_0-p.pth"),a(o)]),n(" 和 "),e("a",O,[n("config.json"),a(o)]),n("。")]),e("li",null,[n("CJE 模型（中日英）：下载 "),e("a",U,[n("D_trilingual.pth"),a(o)]),n("、"),e("a",A,[n("G_trilingual.pth"),a(o)]),n(" 和 "),e("a",B,[n("uma_trilingual.json"),a(o)]),n("。")]),N])]),e("li",null,[e("p",null,[n("第 8 步：由于 "),e("a",F,[n("LOCAL.md"),a(o)]),n(" 教程中未包含在线视频，所以需要将相关视频文件下载到本地。")])]),H]),J,e("p",null,[n("微调完成后，将 "),Z,n(" 下的模型文件和 config 文件放在语音生成工具 "),e("a",K,[n("inference"),a(o)]),n(" 解压文件夹下，其文件名分别为 "),W,n(" 和 "),X,n("。一切准备就绪后，运行 inference.exe, 浏览器会自动弹出窗口，即可在本地环境下生成个性化的语音内容。注意其所在路径不能有中文字符或者空格。")]),Y,e("p",null,[n("在这个阶段，特别注意中文模型（即 languages C）的 "),q,n(" 格式问题。确保「speaks」部分被修改为字典格式，否则在运行 inference 时，你可能会遇到 "),R,n(" 的报错。为方便，你可以直接点击"),e("a",Q,[n("这里"),a(o)]),n("下载我调整好的 json 文件。如果你不需要二次元声音，可以直接使用 OUTPUT_MODEL 下的 "),$,n(" 替代 "),ee,n("。")]),ne,a(i,{src:"https://oss.gpt-vip.top/audio/clonevoice01.wav",title:"克隆音频实例 2"}),ae])}const le=s(h,[["render",oe],["__file","2023-10-07-clone-voice.html.vue"]]);export{le as default};
