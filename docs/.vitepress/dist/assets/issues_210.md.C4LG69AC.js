import{_ as e,c as a,a0 as o,o as i}from"./chunks/framework.p2VkXzrt.js";const u=JSON.parse('{"title":"yt-dlp cookies 文件上传功能","description":"","frontmatter":{"title":"yt-dlp cookies 文件上传功能"},"headers":[],"relativePath":"issues/210.md","filePath":"issues/210.md","lastUpdated":null}'),s={name:"issues/210.md"};function l(c,t,r,n,h,d){return i(),a("div",null,t[0]||(t[0]=[o(`<h1 id="yt-dlp-cookies-文件上传功能" tabindex="-1">yt-dlp cookies 文件上传功能 <a class="header-anchor" href="#yt-dlp-cookies-文件上传功能" aria-label="Permalink to &quot;yt-dlp cookies 文件上传功能&quot;" target="_self">​</a></h1><p>此功能用于解决 yt-dlp 下载资源失败时使用，比如 ip 被 B站或者 youtube 加入黑名单后才需要使用。</p><p>上传的文件用于 yt-dlp 的 <code>--cookies</code> 参数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>--cookies FILE   Netscape formatted file to read cookies from</span></span>
<span class="line"><span>                      and dump cookie jar in</span></span></code></pre></div><h2 id="获取-cookies-txt-文件" tabindex="-1">获取 cookies.txt 文件 <a class="header-anchor" href="#获取-cookies-txt-文件" aria-label="Permalink to &quot;获取 cookies.txt 文件&quot;" target="_self">​</a></h2><ol><li>下载插件 <a href="https://chromewebstore.google.com/detail/cclelndahbckbenkjhflpdbgdldlbecc" target="_self">Get cookies.txt LOCALLY</a></li><li>给予插件访问权限和无痕模式允许使用 <img src="https://github.com/user-attachments/assets/89f6ce94-bb51-4805-8c16-a867ba41e5d2" alt="image"></li><li>打开无痕窗口</li><li>打开 youtube.com</li><li>登陆 youtube.com</li><li>打开新标签页</li><li>关闭 youtube.com 的标签页</li><li>保存 cookies.txt <img src="https://github.com/user-attachments/assets/64242595-7b5c-4159-a8bc-4fc922d5de9e" alt="image"></li></ol><p>原因见 <a href="https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies" target="_self">https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies</a></p><h2 id="上传-cookies-txt" tabindex="-1">上传 cookies.txt <a class="header-anchor" href="#上传-cookies-txt" aria-label="Permalink to &quot;上传 cookies.txt&quot;" target="_self">​</a></h2><ol><li>打开设置页面</li><li>设置启用yt-dlp-cookies 选项为 true <img src="https://github.com/user-attachments/assets/49760905-475b-493c-9ff4-271c5e797b2f" alt="Screenshot_2024-09-29-22-31-40-134_com android chrome-edit"></li><li>点击保存</li><li>再点击选择文件，选择前面保存好的 cookies.txt 文件，点击上传。 <img src="https://github.com/user-attachments/assets/838bfd1c-f19f-4690-86b0-8208d596fbf1" alt="Screenshot_2024-09-29-22-33-21-361_com android chrome-edit"></li></ol><h2 id="后续用途" tabindex="-1">后续用途 <a class="header-anchor" href="#后续用途" aria-label="Permalink to &quot;后续用途&quot;" target="_self">​</a></h2><ol><li>语音下载歌曲都会带上前面上传的 cookies.txt 文件去搜索下载歌曲。</li><li>歌曲批量下载工具下载歌曲或者歌单时也会带上 cookies.txt 文件。</li></ol><h2 id="评论" tabindex="-1">评论 <a class="header-anchor" href="#评论" aria-label="Permalink to &quot;评论&quot;" target="_self">​</a></h2><h3 id="评论-1-kingfly2016" tabindex="-1">评论 1 - kingfly2016 <a class="header-anchor" href="#评论-1-kingfly2016" aria-label="Permalink to &quot;评论 1 - kingfly2016&quot;" target="_self">​</a></h3><p>0.3.37的版本并没有发现可以开启yt-dlp-cookies 并上传cookies文件的地方,尝试把导出的cookies.txt手工上传到conf目录下,没有生效. <img src="https://github.com/user-attachments/assets/9b8b9750-b616-4fd3-8a3c-216b2f99d02c" alt="屏幕截图_11-10-2024_183725_192 168 6 202"></p><hr><h3 id="评论-2-hanxi" tabindex="-1">评论 2 - hanxi <a class="header-anchor" href="#评论-2-hanxi" aria-label="Permalink to &quot;评论 2 - hanxi&quot;" target="_self">​</a></h3><p>需要等38版本，或者用测试版本，镜像名后面加 :main</p><hr><h3 id="评论-3-kingfly2016" tabindex="-1">评论 3 - kingfly2016 <a class="header-anchor" href="#评论-3-kingfly2016" aria-label="Permalink to &quot;评论 3 - kingfly2016&quot;" target="_self">​</a></h3><blockquote><p>需要等38版本，或者用测试版本，镜像名后面加 :main</p></blockquote><p>谢谢</p><hr><p><a href="https://github.com/hanxi/xiaomusic/issues/210" target="_self">链接到 GitHub Issue</a></p>`,23)]))}const b=e(s,[["render",l]]);export{u as __pageData,b as default};