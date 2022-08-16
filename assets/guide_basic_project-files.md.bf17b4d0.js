import{_ as s,c as n,o as a,a as p}from"./app.9df6b99b.js";const D=JSON.parse('{"title":"\u9879\u76EE\u6587\u4EF6","description":"","frontmatter":{},"headers":[],"relativePath":"guide/basic/project-files.md","lastUpdated":1660634493000}'),l={name:"guide/basic/project-files.md"},e=p(`<h1 id="\u9879\u76EE\u6587\u4EF6" tabindex="-1">\u9879\u76EE\u6587\u4EF6 <a class="header-anchor" href="#\u9879\u76EE\u6587\u4EF6" aria-hidden="true">#</a></h1><p>WordPress 6.0.1 \u9879\u76EE\u521D\u59CB\u5316\u4E4B\u540E\uFF0C\u4F7F\u7528 <code>tree</code> \u547D\u4EE4\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u6587\u4EF6\u548C\u76EE\u5F55\u7ED3\u6784\uFF1A</p><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 index.php              WordPress \u6838\u5FC3\u7A0B\u5E8F\u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 license.txt            WordPress GPL\u8BB8\u53EF\u8BC1\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 readme.html            WordPress \u5B89\u88C5\u5BFC\u8BFB\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-activate.php        WordPress \u7528\u6237\u6CE8\u518C\u6FC0\u6D3B\u6587\u4EF6</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-admin    \u540E\u53F0\u7BA1\u7406\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-blog-header.php     WordPress \u52A0\u8F7D\u73AF\u5883\u548C\u6A21\u7248</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-comments-post.php   WordPress \u63A5\u53D7\u8BC4\u8BBA\uFF0C\u5E76\u5C06\u5176\u6DFB\u52A0\u5230\u6570\u636E\u5E93\u5B58\u50A8</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-config-sample.php   WordPress \u8FDE\u63A5\u5230\u6570\u636E\u5E93\u7684\u914D\u7F6E\u3001\u7CFB\u7EDF\u52A0\u5BC6\u5BC6\u94A5\u4EE5\u53CA\u8C03\u8BD5\u6A21\u5F0F\u8BBE\u7F6E\u7684\u6A21\u677F\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-config.php          WordPress \u8FDE\u63A5\u5230\u6570\u636E\u5E93\u7684\u914D\u7F6E\u3001\u7CFB\u7EDF\u52A0\u5BC6\u5BC6\u94A5\u4EE5\u53CA\u8C03\u8BD5\u6A21\u5F0F\u6587\u4EF6\uFF0C\u5B89\u88C5\u540E\u81EA\u52A8\u751F\u6210\u3002</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-content    \u7CFB\u7EDF\u8BED\u8A00\u3001\u63D2\u4EF6\u3001\u4E3B\u9898\u548C\u6587\u4EF6\u4E0A\u4F20\u5B58\u50A8\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 index.php          \u9632\u6B62\u5BF9\u76EE\u5F55\u7AA5\u63A2</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 languages          \u591A\u8BED\u8A00\u914D\u7F6E\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 admin-zh_CN.mo</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 admin-zh_CN.po  \u540E\u53F0\u8BED\u8A00\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528 poedit \u8F6F\u4EF6\u8FDB\u884C\u7F16\u8F91</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 ...</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   \u251C\u2500\u2500 plugins         \u63D2\u4EF6\u8BED\u8A00\u5305\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 themes          \u4E3B\u9898\u8BED\u8A00\u5305\u76EE\u5F55</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 ...</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 zh_CN.mo</span></span>
<span class="line"><span style="color:#A6ACCD;">|   \u2502   \u2514\u2500\u2500 zh_CN.po        \u524D\u53F0\u8BED\u8A00\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528 poedit \u8F6F\u4EF6\u8FDB\u884C\u7F16\u8F91</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 plugins            \u63D2\u4EF6\u5B89\u88C5\u3001\u5F00\u53D1\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 themes             \u4E3B\u9898\u5B89\u88C5\u3001\u5F00\u53D1\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 upgrade            \u66F4\u65B0\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 uploads            \u6587\u4EF6\u4E0A\u4F20\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-cron.php            WordPress \u6267\u884C\u5B9A\u65F6\u4EFB\u52A1\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-includes    \u7C7B\u5E93\u53CA\u6838\u5FC3\u51FD\u6570\u5B9A\u4E49\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 ...</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 ...</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 post.php           WordPress \u6587\u7AE0\u76F8\u5173\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 post-template.php  WordPress \u6587\u7AE0\u6A21\u7248\u76F8\u5173\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 ...</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 wp-db.php           WordPress \u6570\u636E\u5E93\u589E\u3001\u5220\u3001\u6539\u3001\u67E5\u76F8\u5173\u64CD\u4F5C\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 ...</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 ...</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-links-opml.php      WordPress \u751F\u6210OPML\u683C\u5F0F\u7684\u94FE\u63A5\uFF08\u901A\u8FC7\u7BA1\u7406\u83DC\u5355\u6DFB\u52A0\uFF09\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-load.php            WordPress \u52A0\u8F7D\u914D\u5408\u548C\u8BBE\u7F6E\u516C\u5171\u53D8\u91CF\u4EE5\u53CA\u52A0\u8F7D\u7C7B\u5E93\u7B49</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-login.php           WordPress \u5B9A\u4E49\u7528\u6237\u7684\u767B\u5F55\u9875\u9762\u903B\u8F91\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-mail.php            WordPress \u90AE\u4EF6\u5904\u7406\u903B\u8F91\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-settings.php        WordPress \u68C0\u67E5\u5B89\u88C5\u662F\u5426\u6B63\u786E\uFF0C\u4F7F\u7528\u8F85\u52A9\u51FD\u6570\uFF0C\u5E94\u7528\u7528\u6237\u63D2\u4EF6\uFF0C\u521D\u59CB\u5316\u6267\u884C\u8BA1\u65F6\u5668\u7B49</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-signup.php          WordPress \u5B9A\u4E49\u6CE8\u518C\u65B0\u7528\u6237\u8D26\u53F7\u3001\u591A\u7AD9\u70B9\u8D26\u53F7\u6CE8\u518C\u9875\u9762\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 wp-trackback.php       WordPress \u5904\u7406trackback\u8BF7\u6C42\u903B\u8F91\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 xmlrpc.php             WordPress \u8FDC\u7A0B\u53D1\u5E03\u529F\u80FD\u903B\u8F91\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3 directories, 17 files</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u539F\u5219\u4E0A\u5076\u5C14\u4F1A\u9700\u8981\u4FEE\u6539 <code>wp-config.php</code> \u4E2D\u5173\u4E8E\u6570\u636E\u5E93\u7684\u914D\u7F6E\uFF0C\u5927\u90E8\u5206\u65F6\u95F4\u90FD\u5728 <code>wp-contents</code>\u76EE\u5F55\u4E0B\u8FDB\u884C\u5F00\u53D1\u5DE5\u4F5C\uFF0C\u5305\u62EC\u4E3B\u9898\u5F00\u53D1\u3001\u63D2\u4EF6\u5F00\u53D1\u7B49\u3002</p><p>\u5176\u4ED6\u6587\u4EF6\u548C\u76EE\u5F55\uFF0C\u4F8B\u5982\uFF1Awp-admin \u6216 wp-includes \u57FA\u672C\u4E0A\u4E0D\u9700\u8981\u4FEE\u6539\u3002</p></blockquote>`,4),o=[e];function c(r,t,i,C,A,d){return a(),n("div",null,o)}var y=s(l,[["render",c]]);export{D as __pageData,y as default};
