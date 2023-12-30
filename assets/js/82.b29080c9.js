(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{343:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"webpack入门详解"}},[t._v("webpack入门详解")]),t._v(" "),s("h2",{attrs:{id:"写在前面"}},[t._v("写在前面")]),t._v(" "),s("p",[t._v("上一篇文章里面讲到前端模块化的基本概念，同时用webpack进行打包演示了一个基础的hello world实例，webpack的内容肯定不止那么多，在这篇文章里面我会详细介绍webpack的使用细节。同时，会结合vue.js完成一个更加实用的例子。如果你还没有看上一篇内容，建议你先阅读相关的内容，再看本篇文章效果会更好。")]),t._v(" "),s("blockquote",[s("p",[t._v("小伙伴戳这里 → "),s("strong",[s("a",{attrs:{href:"http://zhaomenghuan.github.io/#!/blog/20160415",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅析前端模块化"),s("OutboundLink")],1)])])]),t._v(" "),s("h2",{attrs:{id:"webpack插件详解"}},[t._v("webpack插件详解")]),t._v(" "),s("p",[t._v("在讲解插件之前我们先说明一下接下来的实例的目录结构如下：")]),t._v(" "),t._m(0),t._v(" "),s("h3",{attrs:{id:"package-json包含可配置项"}},[t._v("package.json包含可配置项")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[t._v("这是一个webpack自动生成html文件的插件，在上一篇博客hello world那个例子中当我们合并合并了js，然后是手动的新建html文件并引用了生成的bundle.js文件，这里我们引用一个html-webpack-plugin插件，可以实现自动生成html模板文件。")]),t._v(" "),s("p",[t._v("执行下面的代码在命令行安装:")]),t._v(" "),t._m(7),s("p",[t._v("安装完这个插件,开始写webpack.config.js文件:")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("上面任务虽然完成了，但是我们修改了要不断运行程序然后刷新页面，所以最好新建一个开发服务器，可以serve我们pack以后的代码，并且当代码更新的时候自动刷新浏览器。")]),t._v(" "),s("p",[t._v("执行下面的代码在命令行安装:")]),t._v(" "),t._m(11),s("p",[t._v("安装完毕后,在webpack.config.js中添加配置:")]),t._v(" "),t._m(12),s("p",[t._v("然后再package.json里面配置一下运行的命令,npm支持自定义一些命令")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),s("p",[t._v("浏览器自动刷新，新的结果出现了。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("现在来添加一些样式，webpack使用loader的方式来处理各种各样的资源，比如说样式文件，我们需要两种loader，css-loader 和 style－loader，css-loader会遍历css文件，找到所有的url(...)并且处理。style-loader会把所有的样式插入到你页面的一个style tag中。")]),t._v(" "),s("p",[t._v("安装我们的loader:")]),t._v(" "),t._m(19),s("p",[t._v("在webpack.config.js中配置loader:")]),t._v(" "),t._m(20),s("p",[t._v("在新建一个样式文件 style.css")]),t._v(" "),t._m(21),s("p",[t._v("记得在入口文件index.js中引用")]),t._v(" "),t._m(22),s("p",[t._v("然后发现页面背景颜色变成红色的了，webpack的理念是基于项目处理的，把对应的文件格式给对应的loader处理，然后你就不用管了，它会决定怎么压缩，编译。")]),t._v(" "),s("p",[t._v("那现在想使用一些有爱的css预编译程序，来点sass吧。你可能已经想到了，再来个loader就行啦，确实是这样简单。")]),t._v(" "),s("p",[t._v("不过特别注意：这里还需要添加node-sass来解析sass文件。")]),t._v(" "),t._m(23),s("p",[t._v("稍微修改一下webpack.config.js，删掉我们先前添加的css规则，加上下面的loader")]),t._v(" "),t._m(24),s("p",[t._v("添加两个sass文件，variables.scss和style.scss")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),s("p",[t._v("在index.js中引用:")]),t._v(" "),t._m(29),s("p",[t._v("然后会发现页面背景颜色变成了蓝色。")]),t._v(" "),t._m(30),t._v(" "),s("p",[t._v("上面的css-loader、style-loader、sass-loader主要是用于处理样式文件，这里url-loader用于处理图片文件的。")]),t._v(" "),s("h3",{attrs:{id:"安装url-loader"}},[t._v("安装url-loader")]),t._v(" "),t._m(31),s("h3",{attrs:{id:"配置config文件"}},[t._v("配置config文件")]),t._v(" "),t._m(32),s("p",[t._v("注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片。")]),t._v(" "),t._m(33),t._v(" "),t._m(34),s("p",[t._v("在index.js里面添加如下内容：")]),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37),t._v(" "),s("p",[t._v("如果你想通过项目熟悉一下ES6，那么你可以ES6的语法支持，但是考虑兼容性的问题，我们可以使用babel处理。")]),t._v(" "),s("h3",{attrs:{id:"安装loader"}},[t._v("安装loader")]),t._v(" "),t._m(38),s("h3",{attrs:{id:"配置我们的webpack-config-js文件"}},[t._v("配置我们的webpack.config.js文件")]),t._v(" "),t._m(39),s("p",[t._v("es2015这个参数是babel的plugin，可以支持各种最新的es6的特性,现在我们可以改掉CommonJS风格的文件了。")]),t._v(" "),t._m(40),t._v(" "),t._m(41),t._m(42),t._v(" "),t._m(43),s("p",[t._v("通过import语句引入后加载模块时，可以为模块匿名函数指定任意名字。")]),t._v(" "),s("h2",{attrs:{id:"参考文章"}},[t._v("参考文章")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vikingmute/webpack-for-fools/blob/master/entries/chapter-1.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack傻瓜式指南（一）"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/module",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMAScript 6 入门"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"纯扯淡"}},[t._v("纯扯淡")]),t._v(" "),s("p",[t._v("最近在准备暑期实习生的面试，感慨万千，感觉真的越来越渴望进入前端这个行业成为一个真正的前端工程师，也希望各位朋友可以坚持自己的爱好，不要放弃，勇敢去追求，我相信我们都会成实现的。也真正体会到其实之前很多担忧是多余的，如果真的有技术，不用太在乎是不是计算机专业，因为一个人的天赋和潜力和所处的环境不一定是完全相关的，潜下心去钻研或许更好。")]),t._v(" "),s("site-footer")],1)}),[function(){var t=this,s=t._self._c;return s("ul",[s("li",[t._v("项目名/")]),t._v(" "),s("li",[t._v("├── dist  //打包之后最终部署到服务器上的文件（名称自定义）")]),t._v(" "),s("li",[t._v("├── src //资源文件（名称自定义）")]),t._v(" "),s("li",[t._v("├── node_modules //在打包过程中依赖的包")]),t._v(" "),s("li",[t._v("├── package.json //包含各种所需模块以及项目的配置信息。")]),t._v(" "),s("li",[t._v("└── webpack.config.js //打包配置文件")])])},function(){var t=this,s=t._self._c;return s("ul",[s("li",[t._v("name 名称")]),t._v(" "),s("li",[t._v("description 应用描述")]),t._v(" "),s("li",[t._v("version 版本号")]),t._v(" "),s("li",[t._v("config 应用的配置项")]),t._v(" "),s("li",[t._v("author 作者")]),t._v(" "),s("li",[t._v("respository 资源仓库地址")]),t._v(" "),s("li",[t._v("licenses 授权方式")]),t._v(" "),s("li",[t._v("directories 目录")]),t._v(" "),s("li",[t._v("main 应用入口文件")]),t._v(" "),s("li",[t._v("bin 命令行文件")]),t._v(" "),s("li",[t._v("dependencies 项目应用运行依赖模块")]),t._v(" "),s("li",[t._v("devDependencies 项目应用开发环境依赖")]),t._v(" "),s("li",[t._v("engines 运行引擎")]),t._v(" "),s("li",[t._v("script 脚本")])])},function(){var t=this._self._c;return t("p",[this._v("这里沿用上一篇文章中的代码，不过要稍微修改一下，将下面的index.js和sub.js放在src文件夹下面。\n"),t("strong",[this._v("index.js:")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引用sub模块")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sub "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./sub'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("sub.js:")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//我们这里使用CommonJS的风格")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello China"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this._self._c;return t("blockquote",[t("p",[t("strong",[this._v("html-webpack-plugin")])])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" html-webpack-plugin --save-dev\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" HtmlwebpackPlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html-webpack-plugin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义了一些文件夹的路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ROOT_PATH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SRC_PATH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ROOT_PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DIST_PATH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ROOT_PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SRC_PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出的文件名 合并以后的js会命名为bundle.js")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DIST_PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//添加我们的插件 会自动生成一个html文件")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HtmlwebpackPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[this._v("然后在项目根目录运行"),t("code",[this._v("webpack")]),this._v(",终端显示一堆信息，然后告诉你成功了,你会发现在dist文件夹下生成了一个index.html文件，点开这个文件你会发现和上一篇的效果一样。")])},function(){var t=this._self._c;return t("blockquote",[t("p",[t("strong",[this._v("webpack-dev-server")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm install webpack"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("server "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("devServer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("historyApiFallback")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hot")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("inline")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("progress")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("...\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack-dev-server --hot --inline"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n...\n")])])])},function(){var t=this._self._c;return t("p",[this._v("好了，万事具备了，在项目根目录下输入"),t("code",[this._v("npm start")]),this._v(",一堆花花绿绿的信息后server已经起来了，在浏览器里面输入"),t("code",[this._v("http://localhost:8080")]),this._v(",发现伟大的hello world出现了，在js里面随便修改一些输出然后保存!这里我把sub.js里面的内容改为:")])},function(){var t=this._self._c;return t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[this._v("element"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),this._v("innerHTML "),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v('"Hello China,I am zhaomenghuan"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("对比一下：")])])},function(){var t=this._self._c;return t("p",[this._v("这个是直接打开的结果：\n"),t("img",{attrs:{src:"http://i.imgur.com/pzUQRRi.png",alt:""}}),this._v("\n这个是webpack-dev-server下的结果：\n"),t("img",{attrs:{src:"http://i.imgur.com/t16hZS0.png",alt:""}}),this._v("\n这里我们可以看出来webpack-dev-server自动帮我们进行了内容的更新，这样避免了我们修改一下内容就要重新打包一下、刷新浏览器等一系列琐碎的事，我们只需要在最后部署的时候使用"),t("code",[this._v("webpack")]),this._v("命令打包一下就ok了。")])},function(){var t=this._self._c;return t("blockquote",[t("p",[t("strong",[this._v("css-loader style-loader")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm install css"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("loader style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("loader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loaders")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.css$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loaders")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  background"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" #f00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'./style.css'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm install sass"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("loader node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sass "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loaders")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.scss$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loaders")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sass'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("variables.scss:")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-sass extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sass"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable-line"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$blue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" blue;")]),this._v("\n")])])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("style.scss:")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-sass extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sass"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('import "./variables.scss";')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'./style.scss'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this._self._c;return t("blockquote",[t("p",[t("strong",[this._v("url-loader")])])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" url-loader --save-dev\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttest"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" /\\.(png|jpg)$/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tloader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'url-loader?limit="),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40000")]),t._v("'\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("pic.js:")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我们这里使用CommonJS的风格")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getImg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"img"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./demo.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getImg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pic "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./pic'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[this._v("如果不能显示，先使用"),t("code",[this._v("webpack")]),this._v("命令，然后使用"),t("code",[this._v("npm start")]),this._v("启动服务器，在"),t("code",[this._v("http://localhost:8080/")]),this._v("查看效果，打开浏览器控制台然后查看图片的url，发现为base64编码图片。\n"),t("img",{attrs:{src:"http://i.imgur.com/ZyID5NW.png",alt:""}})])},function(){var t=this._self._c;return t("blockquote",[t("p",[this._v("babel-loader babel-preset-es2015")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-npm extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm install babel-loader babel-preset-es2015 --save-dev\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.jsx?$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loader")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("query")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("presets")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es2015'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("sub.js:")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//我们这里使用CommonJS的风格")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello China,I am Chinese"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("index.js:")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("import")]),this._v(" sub "),t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("from")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'./sub'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);