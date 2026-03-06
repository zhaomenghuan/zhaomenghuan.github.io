import{_ as a,B as p,o as l,c as t,a1 as e,D as i}from"./chunks/framework.Cv09mJXI.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blog/webpack-conditional-compile-loader.md","filePath":"blog/webpack-conditional-compile-loader.md"}'),c={name:"blog/webpack-conditional-compile-loader.md"};function o(u,n,d,r,q,g){const s=p("site-footer");return l(),t("div",null,[n[0]||(n[0]=e(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var content = \`&lt;template&gt;</span></span>
<span class="line"><span>  &lt;view&gt;</span></span>
<span class="line"><span>    &lt;page-head title=&quot;conditional-compile&quot;</span></span>
<span class="line"><span>      desc=&quot;条件编译&quot;&gt;</span></span>
<span class="line"><span>    &lt;/page-head&gt;</span></span>
<span class="line"><span>    &lt;view class=&quot;page-content&quot;&gt;</span></span>
<span class="line"><span>      &lt;view class=&quot;amp-title&quot;&gt;JS逻辑的条件编译&lt;/view&gt;</span></span>
<span class="line"><span>      &lt;button type=&quot;primary&quot; class=&quot;mb15&quot; @tap=&quot;onlyWxMPExecuted&quot;&gt;仅微信小程序执行&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;button type=&quot;primary&quot; class=&quot;mb15&quot; @tap=&quot;onlyBaiduMPExecuted&quot;&gt;仅百度小程序执行&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;button type=&quot;primary&quot; class=&quot;mb15&quot; @tap=&quot;onlyAliPayMPExecuted&quot;&gt;仅支付宝小程序执行&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;button type=&quot;primary&quot; class=&quot;mb15&quot; @tap=&quot;wxMPNotExecuted&quot;&gt;微信小程序不执行&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/view&gt;</span></span>
<span class="line"><span>  &lt;/view&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  config: {</span></span>
<span class="line"><span>    navigationBarTitleText: &quot;条件编译&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    onlyWxMPExecuted() {</span></span>
<span class="line"><span>      // #ifdef MP-WEIXIN</span></span>
<span class="line"><span>      amp.showToast({</span></span>
<span class="line"><span>        title: &quot;微信小程序执行&quot;,</span></span>
<span class="line"><span>        icon: &quot;success&quot;,</span></span>
<span class="line"><span>        duration: 2000</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>      // #endif</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    onlyBaiduMPExecuted() {</span></span>
<span class="line"><span>      // #ifdef MP-BAIDU</span></span>
<span class="line"><span>      amp.showToast({</span></span>
<span class="line"><span>        title: &quot;百度小程序执行&quot;,</span></span>
<span class="line"><span>        icon: &quot;success&quot;,</span></span>
<span class="line"><span>        duration: 2000</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>      // #endif</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    onlyAliPayMPExecuted() {</span></span>
<span class="line"><span>      // #ifdef MP-ALIPAY</span></span>
<span class="line"><span>      amp.showToast({</span></span>
<span class="line"><span>        title: &quot;支付宝小程序执行&quot;,</span></span>
<span class="line"><span>        icon: &quot;success&quot;,</span></span>
<span class="line"><span>        duration: 2000</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>      // #endif</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    wxMPNotExecuted() {</span></span>
<span class="line"><span>      // #ifndef MP-WEIXIN</span></span>
<span class="line"><span>      amp.showToast({</span></span>
<span class="line"><span>        title: &quot;除微信以外都执行&quot;,</span></span>
<span class="line"><span>        icon: &quot;success&quot;,</span></span>
<span class="line"><span>        duration: 2000</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>      // #endif</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var JSIfdefLogicReg = new RegExp(</span></span>
<span class="line"><span>  \`\\/\\/\\\\s+\\#ifdef((.|\\n)+?)\\/\\/\\\\s+\\#endif\`,</span></span>
<span class="line"><span>  &quot;gi&quot;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>var JSIfdefLogicMatch;</span></span>
<span class="line"><span>var avaliMatch = [];</span></span>
<span class="line"><span>while ((JSIfdefLogicMatch = JSIfdefLogicReg.exec(content)) !== null) {</span></span>
<span class="line"><span>  if(!JSIfdefLogicMatch[1].trim().startsWith(platform)) {</span></span>
<span class="line"><span>    let index = JSIfdefLogicMatch.index;</span></span>
<span class="line"><span>    avaliMatch.push({</span></span>
<span class="line"><span>      start: index,</span></span>
<span class="line"><span>      length: JSIfdefLogicMatch[0].length,</span></span>
<span class="line"><span>      value</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(avaliMatch);</span></span></code></pre></div>`,1)),i(s)])}const h=a(c,[["render",o]]);export{m as __pageData,h as default};
