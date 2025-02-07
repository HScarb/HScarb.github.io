import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as n,c as t,a as e,b as d,d as o,e as i}from"./app-259499e5.js";const s={},r={href:"http://hscarb.github.io/other/20191229-vim-note.html",target:"_blank",rel:"noopener noreferrer"},p=i('<h1 id="vim笔记" tabindex="-1"><a class="header-anchor" href="#vim笔记" aria-hidden="true">#</a> Vim笔记</h1><h2 id="vim模式" tabindex="-1"><a class="header-anchor" href="#vim模式" aria-hidden="true">#</a> Vim模式</h2><h3 id="normal普通模式" tabindex="-1"><a class="header-anchor" href="#normal普通模式" aria-hidden="true">#</a> Normal普通模式</h3><p>移动、操作</p><ul><li><code>u</code> undo</li></ul><h3 id="insert插入模式" tabindex="-1"><a class="header-anchor" href="#insert插入模式" aria-hidden="true">#</a> Insert插入模式</h3><p>进入</p><ul><li><code>i</code> insert</li><li><code>a</code> append</li><li><code>o</code> open a line below</li><li><code>I</code> insert before line</li><li><code>A</code> append after line</li><li><code>O</code> append a line above</li><li><code>gi</code> 快速跳转到最后一次编辑的地方并进入插入模式</li></ul><p>退出</p><ul><li><code>esc</code> 退出到Normal模式</li><li><code>ctrl+c</code> 回退到Normal模式</li><li><code>ctrl+[</code> 回退到Normal模式</li></ul><p>插入模式快捷键</p><ul><li><code>ctrl+h</code> 删除上一字符</li><li><code>ctrl+w</code> 删除上一单词</li><li><code>ctrl+u</code> 删除当前行</li></ul><h3 id="command命令模式" tabindex="-1"><a class="header-anchor" href="#command命令模式" aria-hidden="true">#</a> Command命令模式</h3><p>Normal下输入<code>:</code>后执行命令</p><ul><li><code>:vs</code> (vertical split)</li><li><code>:sp</code> (split)</li><li><code>:% s/foo/bar/g</code> 全局替换</li><li><code>:set number/set nu</code> 显示行号</li><li><code>:set nonu</code> 隐藏行号</li><li><code>:syntax on</code> 语法高亮</li><li><code>:set hls</code> 搜索高亮 highlight search</li><li><code>:set incsearch</code> 增量搜索 边搜索边高亮</li><li><code>:help {cmd}</code> 查看帮助</li><li><code>:e</code> 重新加载该文件</li></ul><p>Read</p><ul><li><p><code>:r! echo %</code> 插入文件名</p></li><li><p><code>:r! echo %:p</code> 插入文件名全路径</p></li><li><p><code>:help read</code></p></li><li><p><code>:help filename-modifiers</code></p></li></ul><h3 id="visual可视模式" tabindex="-1"><a class="header-anchor" href="#visual可视模式" aria-hidden="true">#</a> Visual可视模式</h3><ul><li><code>v</code> Normal模式下进入</li><li><code>V</code> 选择行</li><li><code>ctrl+v</code> 块状选择</li></ul><p>可视模式下快捷键</p><ul><li><code>d</code> delete 删除</li><li><code>y</code> yank 复制</li><li><code>p</code> paste 粘贴</li></ul><h2 id="快速移动" tabindex="-1"><a class="header-anchor" href="#快速移动" aria-hidden="true">#</a> 快速移动</h2><p>在Normal模式下</p><ul><li>word 以非空白符分割的单词</li><li>WORD 以空白符分割的单词</li></ul><p>移动</p><ul><li><code>hjkl</code> ←↓↑→</li><li><code>w/W</code> 下一个word/WORD开头</li><li><code>e/E</code> 下一个word/WORD尾</li><li><code>b/B</code> backword 回到上一个word/WORD开头</li></ul><p>行间搜索移动</p><ul><li><code>f{char}</code> find 移动到char字符</li><li><code>F{char}</code> rfind 从行尾开始搜索移动到char</li><li><code>t</code> till 移动到char的前一个字符</li><li><code>T</code> rtill 从行尾移动到char前一个字符</li><li><code>;/,</code>继续搜索该行下一个/上一个</li></ul><p>水平移动</p><ul><li><code>0</code> 移动到行首</li><li><code>^</code>移动到第一个非空白字符</li><li><code>$</code> 移动到行尾</li><li><code>g_</code>移动到行尾非空白字符</li></ul><p>垂直移动</p><ul><li><code>()</code> 在句子间移动</li><li><code>{}</code> 在段落间移动</li></ul><p>页面移动</p><ul><li><code>gg/G</code> 移动到文件开头/结尾</li><li><code>ctrl+o</code> 快速返回</li><li><code>H/M/L</code> 跳转到屏幕开头<code>Head</code> 中间<code>Middle</code> 结尾<code>Lower</code></li><li><code>ctrl+u</code> upword 向上翻页</li><li><code>ctrl+f</code> 向下翻页</li><li><code>zz</code> 把屏幕置为中间</li></ul><h2 id="快速增删改查" tabindex="-1"><a class="header-anchor" href="#快速增删改查" aria-hidden="true">#</a> 快速增删改查</h2><h3 id="快速删除" tabindex="-1"><a class="header-anchor" href="#快速删除" aria-hidden="true">#</a> 快速删除</h3><p>快速删除字符/单词</p><ul><li><code>x</code> 删除一个字符</li><li><code>d{}</code> delete 配合文本对象删除一个单词</li><li><code>dw</code> delete (around) word</li><li><code>daw</code> = <code>dw</code> delete around word (include space)</li><li><code>diw</code> delete word (exclude space)</li></ul><p>删除行</p><ul><li><code>dd</code> delete line</li><li><code>dt{}</code> delete till <code>{}</code></li><li><code>d$</code> delete to end of the sline</li><li><code>d0</code> delete to start of the line</li></ul><p>重复</p><ul><li><code>{num}{cmd}</code> repeat <code>cmd</code> <code>num</code> times</li><li><code>{num}x</code> 删除<code>num</code>个字符</li><li><code>{num}dd</code> 删除<code>num</code>行</li></ul><h3 id="快速修改" tabindex="-1"><a class="header-anchor" href="#快速修改" aria-hidden="true">#</a> 快速修改</h3><ul><li><p><code>r{}</code> replace 替换一个字符为<code>{}</code></p></li><li><p><code>s</code> substitute 删除当前字符并进入插入模式</p></li><li><p><code>c{obj}</code> change 删除文本对象并进入插入模式</p></li><li><p><code>ct{}</code> change to {} 删除到``并进入插入模式</p></li><li><p><code>R</code> 连续替换字符</p></li><li><p><code>S</code> 删除整行并进入插入模式</p></li><li><p><code>C</code> 删除整行并进入插入操作</p></li><li><p><code>{num}r{char}</code> 替换<code>num</code>个字符为<code>char</code></p></li><li><p><code>{num}s</code> 删除<code>num</code>个字符并入插入模式</p></li></ul><h3 id="快速查询" tabindex="-1"><a class="header-anchor" href="#快速查询" aria-hidden="true">#</a> 快速查询</h3><ul><li><code>/</code> 前向搜索</li><li><code>?</code> 反向搜索</li><li><code>n/N</code> 跳转到上一个/下一个匹配</li><li><code>*/#</code> 搜索光标所在的当前单词，前向/后向匹配</li></ul><h2 id="正则搜索替换" tabindex="-1"><a class="header-anchor" href="#正则搜索替换" aria-hidden="true">#</a> 正则搜索替换</h2><ul><li><code>:[range]s[ubstitute]/{pattern}/{string}/[flags]</code> 查找并且替换文本，支持正则表达式</li><li><code>range</code> 表示范围，<code>10,20</code>表示10-20行，<code>%</code>表示全部</li><li><code>pattern</code> 要替换的模式（正则表达式）</li><li><code>string</code> 替换后文本</li><li><code>flags</code> 替换标志 <ul><li><code>g</code> global 全局范围执行</li><li><code>c</code> confirm 替换前需要确认</li><li><code>n</code> <code>number</code> 报告匹配的次数而不替换，可用来查询匹配次数</li></ul></li></ul><h2 id="多文件操作" tabindex="-1"><a class="header-anchor" href="#多文件操作" aria-hidden="true">#</a> 多文件操作</h2><ul><li><code>vim {filename1} {filename2} -O</code> 在多个窗口打开多个文件</li></ul><p>三种多文件操作概念</p><ul><li>Buffer: 打开的一个文件的内存缓冲区</li><li>Window: Buffer可视化的分割区域</li><li>Tab：可以组织为窗口的一个工作区</li></ul><h3 id="buffer缓冲区" tabindex="-1"><a class="header-anchor" href="#buffer缓冲区" aria-hidden="true">#</a> Buffer缓冲区</h3><ul><li><p><code>:ls</code> 列举当前缓冲区</p></li><li><p><code>:b n</code> 跳转到第n个缓冲区</p></li><li><p><code>:bpre</code> <code>:bnext</code> <code>:bfirst</code> <code>:blast</code></p></li><li><p><code>:b buffer_name</code> 加上tab补全来跳转</p></li><li><p><code>:e {文件名}</code> 修改文件</p></li></ul><h3 id="window窗口" tabindex="-1"><a class="header-anchor" href="#window窗口" aria-hidden="true">#</a> Window窗口</h3><p>是可视化的分割区域</p><ul><li>一个缓冲区可以分割成多个窗口，每个窗口也可以打开不同缓冲区</li><li><code>ctrl + w, s</code> <code>:sp</code> 水平分割</li><li><code>ctrl + w, v</code> <code>:vs</code> 垂直分割</li><li>每个窗口可以继续被无限分割</li></ul><p>窗口切换</p><ul><li><code>ctrl + w, w</code> 窗口间循环切换</li><li><code>ctrl + w, h</code> 切换到左边的窗口</li><li><code>ctrl + w, j</code> 切换到下边的窗口</li><li><code>ctrl + w, k</code> 切换到上边的窗口</li><li><code>ctrl + w, l</code> 切换到右边的窗口</li></ul><p>移动窗口</p><ul><li><code>ctrl + w, H</code> 左移窗口</li><li><code>ctrl + w, J</code> 下移窗口</li><li><code>ctrl + w, K</code> 上移窗口</li><li><code>ctrl + w, L</code> 右移窗口</li></ul><p>重排窗口</p><ul><li><code>:h window-resize</code> 查看文档</li><li><code>ctrl + w, =</code> 使所有窗口等宽、等高</li><li><code>ctrl + w, _</code> 最大化活动窗口的高度</li><li><code>ctrl + w, |</code> 最大化活动窗口的宽度</li><li><code>[N], ctrl + w, _</code> 把活动窗口的高度设为<code>[N]</code>行</li><li><code>[N], ctrl + w, |</code> 把活动窗口的宽度设为<code>[N]</code>列</li></ul><h3 id="tab标签页-将窗口分组" tabindex="-1"><a class="header-anchor" href="#tab标签页-将窗口分组" aria-hidden="true">#</a> Tab标签页 将窗口分组</h3><p>Tab是可以容纳一系列窗口的容器</p><ul><li><code>:h tabpage</code> 查看文档</li><li>Vim的Tab和其他编辑器不太一样，可以想象成Linux的虚拟桌面</li><li>如一个Tab管理所有Python文件，一个Tab管理所有HTML文件</li></ul><p>Tab操作</p><ul><li><code>:tabnew {filename}</code> 新建标签页，打开<code>{filename}</code></li><li><code>:tabe[dit] {filename}</code> 在新标签页中打开<code>{filename}</code></li><li><code>ctrl + w, T</code> 把当前窗口移到一个新标签页</li><li><code>:tabc[lose]</code> 关闭当前标签页及其中的所有窗口</li><li><code>:tabo[nly]</code> 只保留活动标签页，关闭所有其他标签页</li></ul><p>Tab切换</p><table><thead><tr><th>Command模式命令</th><th>普通模式命令</th><th>用途</th></tr></thead><tbody><tr><td><code>:tabn[ext] {N}</code></td><td><code>{N}gt</code></td><td>切换到编号为<code>{N}</code>的标签页</td></tr><tr><td><code>:tabn[ext]</code></td><td><code>gt</code></td><td>切换到下一标签页</td></tr><tr><td><code>:tabp[revious]</code></td><td><code>gT</code></td><td>切换到上一标签页</td></tr></tbody></table><h2 id="vim的text-object" tabindex="-1"><a class="header-anchor" href="#vim的text-object" aria-hidden="true">#</a> Vim的Text Object</h2><p>文本对象操作方式</p><ul><li><code>[number]&lt;command&gt;[text object]</code></li><li><code>number</code> 次数</li><li><code>command</code> 命令 d(elete), c(hange), y(ank), v(isual)</li><li><code>text object</code> 操作的文本对象 <code>w</code>单词，<code>s</code>句子，<code>p</code>段落</li><li><code>iw</code> inner word，表示这个单词，不包含单词外的字符</li><li><code>aw</code> around word，这个单词及环绕这个单词的字符(包含空格)</li></ul><p>操作成对括号中的内容</p><ul><li><p><code>i(</code> <code>i)</code> 1 * (<strong>[2 + 3]</strong>)</p></li><li><p><code>a(</code> <code>a)</code> 1 * <strong>[(2 + 3)]</strong></p></li><li><p><code>i&lt;</code> <code>i&gt;</code> The &lt;<strong>[tag]</strong>&gt;</p></li><li><p>......</p></li><li><p><code>{}</code></p></li><li><p><code>[]</code></p></li><li><p><code>&quot;&quot;</code></p></li><li><p>``</p></li><li><p><code>ci&quot;</code> 删除双引号里面的内容并进入插入模式</p></li></ul><h2 id="vim复制粘贴与寄存器" tabindex="-1"><a class="header-anchor" href="#vim复制粘贴与寄存器" aria-hidden="true">#</a> Vim复制粘贴与寄存器</h2><p>Normal模式赋值粘贴</p><ul><li><code>y(ank)</code> 复制</li><li><code>p(ut)</code> 粘贴</li><li><code>d(elete)</code> 剪切</li><li><code>v(isual)</code> 选中要复制的地方</li><li><code>yiw</code> 复制一个单词</li><li><code>yy</code> 复制一行</li></ul><p>Insert模式复制粘贴</p><ul><li>和其他编辑器差不多</li><li>在vimrc设置<code>autoindent</code>，粘贴代码会缩进错乱</li><li>需要用<code>:set paste</code> <code>:set nopaste</code>解决</li></ul><h3 id="vim寄存器" tabindex="-1"><a class="header-anchor" href="#vim寄存器" aria-hidden="true">#</a> Vim寄存器</h3><ul><li>Vim复制粘贴操作的是寄存器而不是系统剪贴板</li><li>默认复制和剪切的内容放到了“无名寄存器”</li><li>Vim使用多组寄存器进行剪切、复制与粘贴</li><li><code>&quot;{register}</code> 指定寄存器 <code>{register}</code>为有名寄存器<code>a-z</code></li><li><code>&quot;&quot;</code> 无名寄存器</li><li><code>&quot;ayiw</code> 复制一个单词到寄存器<code>a</code>中</li><li><code>&quot;bdd</code>剪切当前行到寄存器b中</li><li><code>:reg {register}</code>查看寄存器内容</li></ul><h3 id="常见寄存器" tabindex="-1"><a class="header-anchor" href="#常见寄存器" aria-hidden="true">#</a> 常见寄存器</h3><ul><li><code>&quot;0</code> 复制专用寄存器，使用y复制文本同时会被拷贝到复制寄存器<code>0</code></li><li><code>&quot;+</code> 系统剪贴板，在复制前加上<code>&quot;+</code>可以将内容复制到系统剪贴板</li><li><code>&quot;%</code> 当前文件名</li><li><code>&quot;.</code> 上次插入文本</li><li><code>:set clipboard=unnamed</code> <code>set clipboard+=unnamed</code> 直接复制粘贴系统剪贴板内容</li></ul><h2 id="vim宏-macro" tabindex="-1"><a class="header-anchor" href="#vim宏-macro" aria-hidden="true">#</a> Vim宏(Macro)</h2><ul><li>一系列命令的集合</li><li>可以使用宏录制一系列操作，然后用于回放</li><li>可以方便的应用在多行文本上</li></ul><h3 id="录制和回放宏" tabindex="-1"><a class="header-anchor" href="#录制和回放宏" aria-hidden="true">#</a> 录制和回放宏</h3><ul><li><code>q{register}</code> 在普通模式下录制到<code>register</code>寄存器</li><li><code>q</code> 结束录制</li><li><code>@{register}</code> 回放某寄存器中的宏</li></ul><h3 id="将宏应用到多行-在command模式下执行normal模式命令" tabindex="-1"><a class="header-anchor" href="#将宏应用到多行-在command模式下执行normal模式命令" aria-hidden="true">#</a> 将宏应用到多行，在Command模式下执行Normal模式命令</h3><ul><li>在<code>visual</code>模式下选择多行</li><li><code>:&#39;&lt;,&#39;&gt;</code> 输冒号进入Command模式</li><li><code>:&#39;&lt;,&#39;&gt;normal @a</code> 为多行执行normal命令</li></ul><h2 id="vim补全" tabindex="-1"><a class="header-anchor" href="#vim补全" aria-hidden="true">#</a> Vim补全</h2><table><thead><tr><th>命令</th><th>补全类型</th><th>常用</th></tr></thead><tbody><tr><td><code>ctrl + n</code></td><td>普通关键字</td><td>√</td></tr><tr><td><code>ctrl + w, ctrl + n</code></td><td>当前缓冲区关键字</td><td></td></tr><tr><td><code>ctrl + x, ctrl + i</code></td><td>包含文件关键字</td><td></td></tr><tr><td><code>ctrl + x, ctrl + ]</code></td><td>标签文件关键字</td><td></td></tr><tr><td><code>ctrl + x, ctrl + k</code></td><td>字典查找</td><td></td></tr><tr><td><code>ctrl + x, ctrl + l</code></td><td>整行补全</td><td></td></tr><tr><td><code>ctrl + x, ctrl + f</code></td><td>文件名补全</td><td>√</td></tr><tr><td><code>ctrl + x, ctrl + o</code></td><td>全能(Omni)补全</td><td>√</td></tr></tbody></table><h2 id="更换配色" tabindex="-1"><a class="header-anchor" href="#更换配色" aria-hidden="true">#</a> 更换配色</h2><ul><li><code>:colorscheme</code> 显示当前主题颜色，默认default</li><li><code>:colorscheme &lt;ctrl + d&gt;</code> 显示所有配色</li><li><code>:colorscheme {配色名}</code> 修改配色</li></ul><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2><h3 id="安装插件管理器" tabindex="-1"><a class="header-anchor" href="#安装插件管理器" aria-hidden="true">#</a> 安装插件管理器</h3>',96),u={href:"https://github.com/junegunn/vim-plug",target:"_blank",rel:"noopener noreferrer"},h=i(`<li>安装：<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iwr <span class="token parameter variable">-useb</span> https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim <span class="token operator">|</span>\`
    ni <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>@<span class="token punctuation">(</span>$env:XDG_DATA_HOME, $env:LOCALAPPDATA<span class="token punctuation">)</span><span class="token punctuation">[</span>$null <span class="token parameter variable">-eq</span> $env:XDG_DATA_HOME<span class="token punctuation">]</span><span class="token variable">)</span></span>/nvim-data/site/autoload/plug.vim&quot;</span> <span class="token parameter variable">-Force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>使用： <ul><li><code>:edit $MYVIMRC</code></li></ul><div class="language-vim line-numbers-mode" data-ext="vim"><pre class="language-vim"><code><span class="token keyword">call</span> plug#<span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">&quot; List your plugins here</span>
Plug <span class="token string">&#39;tpope/vim-sensible&#39;</span>

<span class="token keyword">call</span> plug#<span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Reload the file <code>:source %</code> or restart Vim, then you can, <ul><li><code>:PlugInstall</code> to install the plugins</li><li><code>:PlugUpdate</code> to install or update the plugins</li><li><code>:PlugDiff</code> to review the changes from the last update</li><li><code>:PlugClean</code> to remove plugins no longer in the list</li></ul></li></ul></li>`,2),m=e("h3",{id:"插件网站",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#插件网站","aria-hidden":"true"},"#"),d(" 插件网站")],-1),b={href:"https://vimawesome.com/",target:"_blank",rel:"noopener noreferrer"},v=i(`<h3 id="快速跳转插件" tabindex="-1"><a class="header-anchor" href="#快速跳转插件" aria-hidden="true">#</a> 快速跳转插件</h3><div class="language-vim line-numbers-mode" data-ext="vim"><pre class="language-vim"><code><span class="token keyword">if</span> <span class="token function">exists</span><span class="token punctuation">(</span><span class="token string">&#39;g:vscode&#39;</span><span class="token punctuation">)</span>
  Plug <span class="token string">&#39;asvetliakov/vim-easymotion&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&#39;as&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;vsc-easymotion&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">else</span>
  Plug <span class="token string">&#39;vim-easymotion/vim-easymotion&#39;</span>
<span class="token keyword">endif</span>


<span class="token comment">&quot; ...</span>

<span class="token comment">&quot; easy motion 添加递归映射（后面那个也是一个映射，所以要递归映射）</span>
<span class="token comment">&quot; 含义为：按下 ss，就开始搜索 2 个字符的 EasyMotion 跳转</span>
nmap <span class="token builtin">ss</span> <span class="token operator">&lt;</span>Plug<span class="token operator">&gt;</span><span class="token punctuation">(</span>easymotion<span class="token operator">-</span>s2<span class="token punctuation">)</span>ggjjjjjjjjjjk

<span class="token comment">&quot; easy motion</span>
<span class="token keyword">let</span> g<span class="token punctuation">:</span>EasyMotion_smartcase <span class="token operator">=</span> <span class="token number">1</span>   <span class="token comment">&quot; 启用智能大小写匹配</span>
nmap <span class="token operator">&lt;</span>Leader<span class="token operator">&gt;</span><span class="token keyword">j</span> <span class="token operator">&lt;</span>Plug<span class="token operator">&gt;</span><span class="token punctuation">(</span>easymotion<span class="token operator">-</span>jumptoanywhere<span class="token punctuation">)</span> <span class="token comment">&quot; 按下;j跳转到任意位置</span>
nmap <span class="token operator">&lt;</span>Leader<span class="token operator">&gt;</span><span class="token keyword">f</span> <span class="token operator">&lt;</span>Plug<span class="token operator">&gt;</span><span class="token punctuation">(</span>easymotion<span class="token operator">-</span>s2<span class="token punctuation">)</span>    <span class="token comment">&quot; 按下;f触发双字符搜索</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>欢迎关注公众号【消息中间件】（middleware-mq），更新消息中间件的源码解析和最新动态！</p><figure><img src="https://scarb-images.oss-cn-hangzhou.aliyuncs.com/img/202205170102971.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,5);function g(k,f){const l=a("ExternalLinkIcon");return n(),t("div",null,[e("p",null,[d("原文地址："),e("a",r,[d("http://hscarb.github.io/other/20191229-vim-note.html"),o(l)])]),p,e("ul",null,[e("li",null,[d("推荐插件："),e("a",u,[d("https://github.com/junegunn/vim-plug"),o(l)])]),h]),m,e("ul",null,[e("li",null,[e("a",b,[d("https://vimawesome.com/"),o(l)])])]),v])}const _=c(s,[["render",g],["__file","20191229-vim-note.html.vue"]]);export{_ as default};
