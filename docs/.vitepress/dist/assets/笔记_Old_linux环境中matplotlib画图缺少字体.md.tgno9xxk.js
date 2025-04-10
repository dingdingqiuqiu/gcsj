import{_ as a,c as i,o as t,ae as e}from"./chunks/framework.ChhGBEr5.js";const r=JSON.parse('{"title":"linux环境中matplotlib画图缺少字体","description":"","frontmatter":{"title":"linux环境中matplotlib画图缺少字体","date":"2024-09-15T00:25:58.000Z","tags":"机器学习","categories":null},"headers":[],"relativePath":"笔记/Old/linux环境中matplotlib画图缺少字体.md","filePath":"笔记/Old/linux环境中matplotlib画图缺少字体.md","lastUpdated":1743185048000}'),l={name:"笔记/Old/linux环境中matplotlib画图缺少字体.md"};function p(n,s,h,o,d,c){return t(),i("div",null,s[0]||(s[0]=[e(`<p>本文主要解决linux环境下画图没中文字体的问题</p><h3 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h3><p>倘若使用的linux没有x协议支持，无法使用<code>plt.show</code>函数绘图，转而使用<code>plt.savefig</code>和<code>plt.close</code>函数保存图片查看。我们使用以下代码添加中文支持。</p><blockquote><p>补充: <code>feh</code>可以查看png图片，<code>apt-get install fet</code>安装它，<code>feh example.png</code>查看图片。</p></blockquote><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plt.rcParams[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;font.sans-serif&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SimHei&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plt.rcParams[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;axes.unicode_minus&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> False</span></span></code></pre></div><p>但会出现下面报错<img src="https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvYy9mYmQ0NGEwNjM2YTQyNDJlL0VTNGtwRFlHU3RRZ2dQdUtEUUFBQUFBQjJWNm54V242VUx4Q1BQQW80RjFBelE_ZT0zd3A2blc.png" width="958" height=" "></p><h3 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h3><h3 id="字体下载安装" tabindex="-1">字体下载安装 <a class="header-anchor" href="#字体下载安装" aria-label="Permalink to &quot;字体下载安装&quot;">​</a></h3><ul><li><p>下载： <a href="https://us-logger1.oss-cn-beijing.aliyuncs.com/SimHei.ttf" target="_blank" rel="noreferrer">SimHei字体下载链接</a></p></li><li><p>安装：</p></li></ul><p>将字体放到对应文件夹</p><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SimHei.ttf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/share/fonts/SimHei.ttf</span></span></code></pre></div><p>赋予使用权限</p><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 777</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/share/fonts</span></span></code></pre></div><h3 id="配置matplotlib" tabindex="-1">配置matplotlib <a class="header-anchor" href="#配置matplotlib" aria-label="Permalink to &quot;配置matplotlib&quot;">​</a></h3><h4 id="方法1-删除缓存" tabindex="-1">方法1.删除缓存 <a class="header-anchor" href="#方法1-删除缓存" aria-label="Permalink to &quot;方法1.删除缓存&quot;">​</a></h4><blockquote><p>已尝试，有效</p></blockquote><p>查看<code>matplotlib</code>的缓存</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> matplotlib </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mlt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mlt.get_cacahedir())</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># /home/ubuntu22/.cache/matplotlib</span></span></code></pre></div><p>删除缓存</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rm -rf /home/ubuntu22/.cache/matplotlib</span></span></code></pre></div><h4 id="方法2-在matplotlib对应字体文件夹下更改" tabindex="-1">方法2.在matplotlib对应字体文件夹下更改 <a class="header-anchor" href="#方法2-在matplotlib对应字体文件夹下更改" aria-label="Permalink to &quot;方法2.在matplotlib对应字体文件夹下更改&quot;">​</a></h4><p>查看<code>matplotlib</code>配置文件位置</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> matplotlib</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(matplotlib.matplotlib_fname())</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># /home/ubuntu22/henu/ML/ml/lib/python3.10/site-packages/matplotlib/mpl-data/matplotlibrc</span></span></code></pre></div><p>由输出，我们得到字体目录为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/home/ubuntu22/henu/ML/ml/lib/python3.10/site-packages/matplotlib/mpl-data/fonts/ttf</span></span></code></pre></div><p>我们把安装好的字体复制过去一份</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cp /usr/share/fonts/SimHei.ttf /home/ubuntu22/henu/ML/ml/lib/python3.10/site-packages/matplotlib/mpl-data/fonts/ttf/SimHei.ttf</span></span></code></pre></div>`,27)]))}const u=a(l,[["render",p]]);export{r as __pageData,u as default};
