(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{270:function(t,a,e){"use strict";e.r(a);var r=e(78),o={data:()=>({blogLists:[]}),mounted(){this.blogLists=r.data},methods:{openPage(t){location.href=t}}},l=(e(79),e(1)),i=Object(l.a)(o,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"app-list"},t._l(t.blogLists,(function(e){return a("div",{staticClass:"app-list-item"},[a("div",{staticClass:"app-card"},[a("div",{staticClass:"app-card-header"},[a("h3",{staticClass:"title",class:e.origin,on:{click:function(a){return t.openPage(e.url)}}},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"app-card-header-body"},[a("span",{staticClass:"category"},[t._v(t._s(e.category))]),t._v(" "),a("span",[t._v(t._s(e.createdAt))])])]),t._v(" "),a("div",{staticClass:"app-card-content"},[a("ul",{staticClass:"keyword"},t._l(e.tags,(function(e){return a("li",[t._v(t._s(e))])})),0),t._v(" "),a("p",[t._v(t._s(e.summary))])]),t._v(" "),a("div",{staticClass:"app-card-footer"},[a("a"),t._v(" "),a("a",{attrs:{href:e.url}},[t._v("阅读全文")])])])])})),0)}),[],!1,null,"4ffe9f19",null);a.default=i.exports},69:function(t,a,e){},78:function(t){t.exports=JSON.parse('{"data":[{"title":"NodeMCU ESP8266 GPIO 和 PWM 学习","url":"/blog/nodemcu-esp8266-gpio-pwm.html","createdAt":"2020.12.19","category":"IoT","tags":["IoT","NodeMCU","ESP8266","GPIO","PWM"],"summary":"入门任何一款 MCU，GPIO 是必须掌握的基础知识，虽然每款 MCU GPIO 的数量和能力各不一样，但是使用用法是基本一样的。本文将通过两个小实验去理解 GPIO 中的核心知识，通过 ESP8266 了解一下 GPIO 中的基本概念，从而更好的掌握 ESP8266 其他的功能。通用输入/输出 (GPIO) 是集成电路上的一个引脚功能，它既可以是输入引脚，也可以是输出引脚，这些功能均可以在编写程序时进行控制。"},{"title":"基于 PlatformIO 平台玩转 NodeMCU 入门篇","url":"/blog/platformio-nodemcu-getting-started.html","createdAt":"2020.12.6","category":"IoT","tags":["IoT","NodeMCU","ESP8266","PlatformIO"],"summary":"近期关注到《物联网开发实战》课程，买了一套极客商城的开发套件，打算把自己业余时间学习过程中的一些收获记录一下。之前学习 Gokit3 开发板的过程中是在 Windows 系统上从零开始搭建编译环境的，整体的开发体验上感觉还是比较麻烦琐碎，不过对 Flash 下载固件有了一些基本认知，这次打算在 MacOS 平台基于 PlatformIO IDE 进行尝试。"},{"title":"Chrome DevTools Frontend 运行原理浅析","url":"/blog/chrome-devtools-frontend-analysis-of-principle.html","createdAt":"2020.4.5","category":"IDE","tags":["Chrome DevTools Frontend","调试器"],"summary":"《深入理解 Chrome DevTools》一文中从整体上介绍了 Chrome DevTools 及 Electron 中集成 DevTools 实现调试器的基本原理，目前主流的小程序 IDE 调试器都是集成 Chrome DevTools Frontend 实现。"},{"title":"Eclipse Theia 框架技术架构揭秘","url":"/blog/theia-tech-architecture.html","createdAt":"2020.3.22","category":"IDE","tags":["Theia","VS Code"],"summary":"随着前端开发的发展更迭，前端日常开发工作变得愈发复杂愈发深入，同时前端工程中从项目初始化、编译、构建到发布、运维也变得细化而成熟。本地开发环境存在开发机性能要求高、开发环境配置复杂、依赖特定设备、复杂工程管理难等问题，Cloud IDE 很好的解决了这些问题。最近几年，Cloud IDE 在开发全流程领域扮演者越来越重的角色，国内外很多厂商都在做 Cloud IDE。"},{"title":"EMP — 基于 Vue.js 的小程序引擎底层框架实现","url":"/blog/what-is-emp.html","createdAt":"2020.1.28","category":"小程序","tags":["小程序"],"summary":"如果我们想从零开始做一个类似微信小程序的引擎，或者将微信小程序现有资源转换成 H5 容器、App 容器能够运行的资源，那么和一套 DSL 编译到各个平台的思路是恰好相反的。我们需要搞清楚小程序在小程序引擎是怎么跑起来的，各家小程序引擎实现机制不太一样，但是基本上都是参考微信小程序引擎做的实现，保留了小程序的双线程模型。各小程序平台的基础库是不一样的，微信小程序开发框架是 mina 框架，百度小程序小程序开发框架是 swan 框架，视图层都有一套自己实现的 mvvm 框架，逻辑层就相对比较一致，都是 JavaScript 引擎，无非是基于 V8 或 JavaScriptCore。"},{"title":"深入理解 Chrome DevTools","url":"/blog/chrome-devtools.html","createdAt":"2019.12.25","category":"Chrome DevTools","tags":["Chrome"],"summary":"在移动端开发过程中经常会使用 Chrome Devtools 工具和 Chrome Inspect 工具实现代码的调试开发，但是对于背后的原理一直理解的比较碎片化，只是大致知道和 Chrome 开发者工具有关，但是对其中的差异和原理理解很浅。很多人对很多概念例如 Chrome 调试协议、远程调试、Chrome 拓展等理解的也不清晰，本文尝试从零开始去讲解其中的差异，探索背后的本质。"},{"title":"保持好奇，保持饥饿","url":"/blog/stay-curious-and-stay-hungry.html","createdAt":"2019.12.15","category":"成长思考","tags":["成长"],"summary":"这不是结束, 这甚至不是结束的开始, 但这毕竟是开始的结束。正如丘吉尔所言，开始和结束是没有界限的，生命不止奋斗不息，人只有在不断追逐的过程中才能体会在路上的幸福。因为八月开启了新征程，这段时间我沉默了很久，个人项目和博客上一直没有输出，或者需要写点什么去思考一下过去、现在和未来。"},{"title":"北漂三年，我依然是一个非著名程序员","url":"/blog/road-of-growing-up.html","createdAt":"2019.7.13","category":"成长思考","tags":["成长"],"summary":"这篇文章应该是我博客的第一篇非技术文章，之所以写一篇这样的文章，一方面是前几个月看到 Phodal 写的《28 岁的我，一事无成》很有同感，一方面是因为最近开始思考比较多技术之外的东西。"},{"title":"JavaScript 函数劫持","url":"/blog/javascript-function-hijacking.html","createdAt":"2019.7.3","category":"JavaScript进阶","tags":["JavaScript","hijacking"],"summary":"最近研究微信小程序源码发现一件很有意思的事情，很多函数都被 surroundByTryCatchFactory 的方法包装了一下，函数调用错误的堆栈信息都会被统一格式化打印出来，这个在 JS SDK 的设计中很好用，决定研究一下背后的技术原理。"},{"title":"vscode 定制开发 —— Workbench 源码解读及实战","url":"/blog/vscode-workbench-source-code-interpretation.html","createdAt":"2019.6.10","category":"VS Code 开发","tags":["VS Code","workbench"],"summary":"VS Code 插件开发前前后后也看了一段时间，之前尝试对 ActivityBar 做过一些拓展，但是对于一些涉及 UI 改造的高级功能没有多少头绪，在研究了基于 VS Code 开发的类似产品如快应用开发工具、TaoBao Editor等，有一些思路，然后慢慢摸索出一些思路。目前关于界面二次改造的文章真的比较稀少，本文试着做一些讲解。"},{"title":"JS AST 原理揭秘","url":"/blog/js-ast-principle-reveals.html","createdAt":"2019.6.3","category":"JavaScript进阶","tags":["javascript","AST"],"summary":"抽象语法树 AST(abstract syntax tree) 一直都想系统性的学习整理一下，这篇文章将以实际的例子讲解一下 AST 的基本内容。之前在做基于 Flutter 的类似小程序语法的开发框架 flutter-mini-program时，通过 Dart 解析 HTML 标签和 CSS 标签实现了 HTML + CSS 对 Flutter 视图层的描述；对于逻辑层的设计，Flutter 不支持动态加载 Dart 文件，也不支持 JS 语法运行环境，当时就想过一种思路，基于 Dart 解析 JS 语法的方式是否行得通，Dart 官方具备 Dart2js 框架，Dart SDK 里面具备 JS 和 JS AST 相关的包，原则上这个思路可行，但是没时间就搁置了这个想法。后来看到闲鱼技术团队提出了一种基于 Flutter Dart AST 实现热更新 方式，目前看也是一种不错的方式。"},{"title":"npm 私有仓库工具 Verdaccio 搭建","url":"/blog/npm-private-repository-verdaccio.html","createdAt":"2019.5.28","category":"前端工程化","tags":["npm","Verdaccio"],"summary":"在构建小程序平台的过程中，核心包、开发脚手架、前端组件库等 JS SDK 依赖资源需要依托于 npm 去管理。对于企业开发来说，不能将核心代码上传到完全开放的公网环境，所以想尝试搭建 npm 私有仓库。"},{"title":"从零开始入门 Spring Boot 框架","url":"/blog/getting-started-from-scratch-spring-boot-framework.html","createdAt":"2019.5.19","category":"Spring Boot","tags":["Spring","Spring Boot"],"summary":"近期开始筹备小程序开发运营平台，之前使用 Egg.js 构建过后台管理系统，但是在市场推广过程中发现会使用 Node.js 服务的人员真的很少，前端人员不太懂数据库库表设计，传统后端对于 Node.js 服务又不太熟悉，所以实际场景中对于团队人员配置很尴尬。基于公司产品大多数是 Java 技术体系的考虑，所以决定在新项目中采用 Java 社区的框架去构建。JavaEE 常见的框架组合有 SSH(Structs + Spring + Hibernate)和 SSM(Spring + SpringMVC + MyBatis)，一般学习顺序是 Servlet -> JSP -> Spring -> 组合框架。"},{"title":"VS Code 定制开发 —— 基础准备","url":"/blog/vscode-custom-development-basic-preparation.html","createdAt":"2019.3.19","category":"VS Code 开发","tags":["VS Code","IDE"],"summary":"前端开发现在最流行的 IDE 莫过于 VS Code，对于一些特殊需求，例如移动端页面预览、自定义脚手架编译工程等等，如果能够通过 IDE 的插件拓展去完成，那定是一件美美的事情，后续相关工作有这块的需求，所以利用下班时间及周末做一下相关的技术储备，玩一下 VS Code 插件拓展及源码改造。"},{"title":"微信小程序技术原理分析","url":"/blog/wechat-miniprogram-principle-analysis.html","createdAt":"2019.3.11","category":"小程序","tags":["wechat-miniprogram"],"summary":"互联网生态演进：超级 APP + 小程序成为「轻应用时代」下的新生态。一方面微信、支付宝等各家小程序平台遍地开花，另一方面移动开发插件化技术逐渐没落，移动应用构建的方式在悄悄的发生变化。企业移动应用典型的方式是开发平台 + 移动统一门户，手机银行是银行典型的用户端移动门户，微信、支付宝其实是一个互联网生态下的移动统一门户。小程序方式构建应用是大趋势，被越来越多的企业用户看到其中的优势，构建一个跨多端平台的小程序平台是一个不错的想法。本文主要调研微信小程序运行时的基本原理，从而构建一个适合我们自己平台的小程序运行框架。"},{"title":"Android 插件化原理学习 —— 基于 ClassLoader 的插件加载机制","url":"/blog/android-plugin-framework-classloader.html","createdAt":"2018.12.2","category":"Android 插件化","tags":["Android","插件化","ClassLoader"],"summary":"前面《Android 插件化原理学习 —— Hook 机制之动态代理》一文中我们探索了一下动态代理 hook 实现了启动没有在 AndroidManifest.xml 中显式声明的 Activity的功能。我们加载的是应用内部的一个 Activity，但是通常 Android 插件化及沙箱机制都是加载外部的文件，这是我们就需要其他的方式去实现了，大部分插件化框架都是基于 ClassLoader 实现对插件的加载。"},{"title":"Android 文件阅读器调研","url":"/blog/android-office-reader.html","createdAt":"2018.9.24","category":"Office","tags":["Android","Office"],"summary":"移动端无纸化作为一种趋势，文件阅读器是一种基本需求，iOS 系统天然的对 Office 组件的支持，直接可以在应用内打开，Android 里面就比较头疼了，对于 PDF、Word、Excel、PPT、TXT 等多种格式的文件要支持预览，本身就没有一个特别好的统一的方式，本文是笔者搜索一些资料做的一个汇总。"},{"title":"基于沙盒技术的企业移动应用安全平台设计","url":"/blog/mobile-sandbox-technology.html","createdAt":"2018.8.6","category":"沙盒技术","tags":["沙盒技术","Android","VirtualApp"],"summary":"移动互联网的飞速发展, 改变了企业传统的业务模式, 提高了工作效率. 但同时也给企业的数据安全带来了巨大的挑战, 我们面对各种攻击的可能性会大 大增加, 面临潜在的风险: 移动设备中的不安全应用程序会危及到企业网络的安全；移动设备可能在不安全的网络(如公共 WiFi 热 点)中使用, 容易造成恶意软件感染和数据泄漏；越狱或获取 Root 权限移动设备会带更多风险；移动设备被盗, 在未经授权的情况下访问公司的网络或者泄漏敏感数据。"},{"title":"Android 插件化原理学习 —— Hook 机制之动态代理","url":"/blog/android-plugin-framework-proxy-hook.html","createdAt":"2018.7.18","category":"Android 插件化","tags":["Android","插件化","hook"],"summary":"为了实现 App 的快速迭代更新，基于 H5 Hybrid 的解决方案有很多，由于 webview 本身的性能问题，也随之出现了很多基于 JS 引擎实现的原生渲染的方案，例如 React Native、weex 等，而国内一线大厂基本上主要还是 Android 插件化解决大部分的更新问题，对于部分是采用 webview 或者 React Native 这种方案，而对于 Android 插件化采用的技术对于 Android Framewrok 的理解要求很高，真正实现落地的方案都还是有难度，对于非 Android Native 开发的人员更是有技术门槛。插件化可以很好的解决 Android 运行的一些问题，本文站在学习者的角度去尝试理解插件化到底解决了什么问题。"},{"title":"JavaScript进阶之基础问题","url":"/blog/javascript-review-notes.html","createdAt":"2018.6.10","category":"JavaScript进阶","tags":["JavaScript"],"summary":"JavaScript 是一门灵活的语法，对于很多人包括我而言在平时工作中可能会用到一些新特性，又或者用着老语法也能实现某个功能，但是一直没有系统性的梳理更新自己的知识体系，时间长了总觉得有些内容能够按照某种方式去实现，但是并没有去思考为什么是这样做，或者还有没有更好的办法去实现。本系列文章主要想通过对于前端开发过程中最经典的内容进行梳理总结。"},{"title":"基于 Docker 搭建 TensorFlow 开发环境","url":"/blog/install-docker-tensorflow-in-mac.html","createdAt":"2018.5.27","category":"深度学习","tags":["Docker","TensorFlow","深度学习"],"summary":"第一次听到 Docker 这个词，是两年前找实习工作的时候，参与了 DaoCloud 的前端电话面试，了解到这家专注于做容器技术的公司，当时对于容器这些完全没有概念，只是觉得 Docker 是一个很高大上的技术，后来选择了自己相对擅长的移动开发，去了 DCloud。转眼间已经过了两年，现在人工智能和云计算已经不仅仅是风口，而是很多技术实现的基础设施。"},{"title":"基于 Egg.js 框架的 Node 服务构建之用户管理设计","url":"/blog/nodejs-eggjs-usersytem.html","createdAt":"2018.5.20","category":"node学习之路","tags":["Node.js","Egg.js","Sequelize","JWT"],"summary":"去年在 gitchat JavaScript 进阶之 Vue.js + Node.js 入门实战开发 中安利过 Egg.js，那个时候是初接触 Egg.js，但是还是被它惊艳到了，Egg 继承于 Koa，奉行『约定优于配置』，按照一套统一的约定进行应用开发，插件机制也比较完善。虽然说 Egg 继承于 Koa，大家可能觉得完全可以自己基于 Koa 去实现一套，没必要基于这个框架去搞，但是其实自己去设计一套这样的框架，最终也是需要去借鉴各家所长，时间成本上短期是划不来的。Koa 是一个小而精的框架，而 Egg 正如文档说的为企业级框架和应用而生，对于我们快速搭建一个完备的企业级应用还是很方便的。Egg 功能已经比较完善，另外如果没有实现的功能，自己根据 Koa 社区提供的插件封装一下也是不难的。"},{"title":"Android JavaScript引擎学习之初探V8","url":"/blog/android-javascript-engine-v8.html","createdAt":"2018.5.7","category":"Hybrid App深入浅出研究","tags":["Android","V8"],"summary":"之前一直都只是听说 V8 执行效率高，了解 Node 是运行在 V8 引擎上的，weex 在 Android 上也是使用 V8 引擎来执行 JS 的，但是对于 V8 的认识还是比较肤浅的层次。开始学习一下 V8 相关的内容，学习过程记录一下，利人利己。本系列文章可能更关注 V8 在 Android 上的应用，以及那些使用 V8 的框架到底做了一些什么工作。"},{"title":"Node Cli 入门","url":"/blog/node-cli.html","createdAt":"2017.11.20","category":"JavaScript进阶学习","tags":["node.js","cli"],"summary":"命令行上简单的输入一行代码，然后马上就建立了一个模板工程，这种方式想想都会觉得很酷。例如使用vue-cli工具的vue命令可以创建一个高配的模板工程。作为第一行代码我们就先不玩那么高深的，就来个hello world。"},{"title":"JavaScript 进阶之 Vue.js + Node.js 入门实战开发","url":"/blog/javascript-advanced-vuejs-nodejs.html","createdAt":"2017.08.03","category":"JavaScript进阶学习","tags":["JavaScript","node.js","vue.js"],"summary":"随着前端技术的快速迭代，JavaScript 的关注度越来越高，相关的生态链和前后端分离的解决方案愈趋完善，JavaScript 发挥着越来越重要的作用。Vue.js 的火热程度丝毫不亚于曾经的 jQuery，相关的生态也发展得越来越好。Node.js 经过这么多年的发展也越来越强大，虽然 Node.js 在短期内不会取代基于 Java 、PHP 等传统的后端语言，然而 Node.js 已经被越来越多的人用于项目开发中。基于这种考虑，数月前我打算搞点事情，尝试做一个 Vue.js + Node.js 全栈开发社区，专注于探索和分享 Vue.js 和 Node.js 开发的相关技术。之前申请的 vuenode.com 域名备案上个月通过了，于是开始实施了，本次 Chat 作为一个入门级别的总结，将以构建一个简单的技术博客系统为例，说明 Vue.js 结合 Node.js 实战的例子帮助前端新人进阶学习，掌握后端必备的一些基础技能。"},{"title":"iOS 学习笔记之基于 UITabBarController 的主流 APP 底部导航栏实现","url":"/blog/learn-ios-uitabbarcontroller.html","createdAt":"2017.07.31","category":"iOS 开发笔记","tags":["iOS","Objective-C","UINavigationController","UItabbarController"],"summary":"当app中有多个控制器的时候，就需要对这些控制器进行管理，用一个控制器去管理其他多个控制器。IOS UIView 提供了两个特殊的控制器，UINavigationController和UITabBarController去管理其它控制器。本文以下面的一个简单例子加以说明基本用法："},{"title":"JavaScript 进阶之深入理解数据双向绑定","url":"/blog/javascript-mvvm-vue.html","createdAt":"2017.06.27","category":"JavaScript进阶学习","tags":["JavaScript","MVVM"],"summary":"谈起当前前端最热门的 js 框架，必少不了 Vue、React、Angular，对于大多数人来说，我们更多的是在使用框架，对于框架解决痛点背后使用的基本原理往往关注不多，近期在研读 Vue.js 源码，也在写源码解读的系列文章。和多数源码解读的文章不同的是，我会尝试从一个初级前端的角度入手，由浅入深去讲解源码实现思路和基本的语法知识，通过一些基础事例一步步去实现一些小功能。"},{"title":"从 0 到 1 搭建 webpack2 + vue2 自定义模板详细教程","url":"/blog/zero-to-one-webpack2-vue2-template.html","createdAt":"2017.05.17","category":"vue.js+node.js全栈开发","tags":["webpack","vue.js","vue-cli"],"summary":"webpack2和vue2已经不是新鲜东西了，满大街的文章在讲解webpack和vue，但是很多内容写的不是很详细，对于很多个性化配置还是需要自己过一遍文档。Vue官方提供了多个[vue-templates](https://github.com/vuejs-templates)，基于vue-cli用的最多，不过对于很多人来说，vue-cli 的配置还是过于复杂，对于我们了解细节实现不是很好，所以想自己从零开始搭建一个模板工程，也顺便重新认识一下webpack和vue工程化。"},{"title":"cordova研习笔记(二) —— cordova 6.X 源码解读","url":"/blog/learn-cordovajs-code.html","createdAt":"2017.05.04","category":"Hybrid App深入浅出研究","tags":["cordova","android","Hybrid App"],"summary":"cordova(PhoneGap) 是一个优秀的经典的中间件框架，网上对其源代码解读的文章确实不多，本系列文章试着解读一下，以便对 cordova 框架的原理理解得更深入。本文源码为 cordova android 版本`6.1.2`。"},{"title":"cordova研习笔记(一) —— 初试牛刀之cordova.js概要","url":"/blog/cordova-android-introduction.html","createdAt":"2017.04.26","category":"Hybrid App深入浅出研究","tags":["cordova","android","Hybrid App"],"summary":"来新公司的第一个任务，研究hybrid App中间层实现原理，做中间层插件开发。这个任务挺有意思，也很有挑战性，之前在DCloud虽然做过5+ App开发，但是中间层的东西确实涉及不多。本系列文章属于系列开篇cordova学习笔记，本文主要是从零开始搭建一个cordova工程，并了解cordova开发的基本内容。"},{"title":"Angular系列学习笔记（二）—— 基于gulp构建Angular单页面应用","url":"/blog/learn-angular-gulp-spa.html","createdAt":"2017.04.01","category":"Angular系列学习笔记","tags":["JavaScript","angular","gulp","angular-ui-router","angular-material"],"summary":"构建打包工具之前一直是使用 webpack（歪脖帕克，毕竟尤大推荐的工具），由于公司这边是使用gulp，为了和公司同步，私下还是要学习学习，毕竟懂点万一需要和老大交流也不至于说有啥问题，这篇文章将会以零基础的角度去写一下基于gulp搭建angular的工程，借这个机会顺便重构一下自己的博客。"},{"title":"Angular系列学习笔记（一）—— 聊聊angular的模块化","url":"/blog/learn-angular-module.html","createdAt":"2017.03.06","category":"Angular系列学习笔记","tags":["JavaScript","angular","vue.js","模块化","$scope","依赖注入","service"],"summary":"近来换工作了，由于团队技术需要，不得不从vue.js迁移到angular.js，不过这也是一个学习angular的机会，顺便也将这两个框架做一些对比，为了方便其他小伙伴，将学习过程中的内容记录下来。由开始的不太习惯到现在也能够习惯angular的写法，着实在思维上有很大的改变，所以这个系列的文章会记录一下自己的学习过程，本文会由浅及深一步步去解读vue.js和angular.js的区别。由于时间关系，这篇文章断断续续耗时几周，不求什么，只希望在这个过程中将angular相关的一些特性去梳理一下，由于是系列开篇，文章并没有深入探讨源码和原理，后续会写更多个人的思考和探索。"},{"title":"Linux CentOS7 搭建node服务详细教程","url":"/blog/linux-centos7-node-server.html","createdAt":"2017.05.12","category":"node学习之路","tags":["Linux","CentOS7","node.js"],"summary":"近期在准备搭建一个vue.js+node.js全栈开发的社区，之前由于没有云服务器搭建经验，这篇文章做一下相关的记录，后续再深入学习研究。本文不局限于只是流水账式的记录，会顺便说明一下Linux的相关内容。"},{"title":"node学习之路（二）—— Node.js 连接 MongoDB","url":"/blog/learn-node-mongodb.html","createdAt":"2017.04.12","category":"node学习之路","tags":["JavaScript","node.js","mongodb"],"summary":"之前对于node的学习，一直只是停留在一种帮前端打辅助的层面，没有深入去研究，是时候需要改变一下了，近来找工作诸多不顺心（找个两情相悦的真不容易啊~），多数对前端有后端语言经验和工作年限有要求，对于我这个应届生真心不是一般的尴尬，所以先继续深入学习一下node咯，本文主要记录一下学习MongoDB数据库相关的内容（属于比较流水账的文章），弥补一下自己的知识空白。这两天收到两个offer心情还是不错的，就是有点难抉择。"},{"title":"探秘JavaScript中的六个字符","url":"/blog/a-javascript-journey-with-only-six-characters.html","createdAt":"2016.10.12","category":"JavaScript进阶学习","tags":["JavaScript"],"origin":"translation","summary":"JavaScript 是一个奇怪而有趣的语言，我们可以写一些疯狂却仍然有效的代码。它试图帮助我们把事情转换到基于我们如何对待他们的特定类型。"},{"title":"node学习之路（一）—— 网络请求","url":"/blog/learn-node-server.html","createdAt":"2016.09.29","category":"node学习之路","tags":["JavaScript","node.js","http","url","Query String","爬虫"],"summary":"一直以来想深入学习一下node，一来是自己目前也没有什么时间去学习服务器端语言，但是有时候又想自己撸一下服务器端，本着爱折腾的精神开始写一写关于node的文章记录学习心得。本系列文章不会过多去讲解node安装、基本API等内容，而是通过一些实例去总结常用用法。本文主要讲解node网络操作的相关内容，node中的网络操作依赖于http模块，http模块提供了两种使用方式。"},{"title":"5+App开发——录音文件与Base64编码相互转换的方法","url":"/blog/conversion-recording-file-base64-code.html","createdAt":"2016.08.17","category":"MUI从入门到精通","tags":["mui","html5plus","base64","录音"],"summary":"最近有几个朋友一直在问语音文件怎么转base64字符串进行发送上传，base64字符串又如何转成文件，论坛中已经有多篇问题的帖子有介绍，这里只是稍微整理，方便大家可以更加方便的使用。"},{"title":"JavaScript进阶学习（三）—— 基于html5 File API文件操作","url":"/blog/javascript-advanced-html5-file-api.html","createdAt":"2016.08.16","category":"JavaScript进阶学习","tags":["JavaScript","blob","File","FileReader","DataURI","URL"],"summary":"这段时间一直有朋友在问文件上传下载的事，搜一下论坛发现相关的问题不少，但是不够系统，本着为人民服务的态度本文试着将一些问题整理一下，争取用初学者可以更明确的去处理相关的问题。文件上传是开发中绕不过的一个坎儿，对于很多没有经验的人来说，简直懵逼，目前我所知道的上传方式有下面这几种：- 传统flash上传 - 隐藏iframe框上传 - 表单数据提交 - HTML5的新工具——File API"},{"title":"5+App开发——mui组件通用CSS类","url":"/blog/mui-common-css.html","createdAt":"2016.08.05","category":"MUI从入门到精通","tags":["mui","css"],"summary":"本文主要结束 mui 文档中没有提及但是很常用的一些 CSS 类。"},{"title":"mui初级入门教程（七）— 基于native.js的文件系统管理功能实现","url":"/blog/5+app-native.js-filesystem.html","createdAt":"2016.08.01","category":"MUI从入门到精通","tags":["mui","nativejs","android"],"summary":"这段时间以来一直有人问5+ sdk怎么在原生中集成，每次给了文档和没给没啥大区别，这部分人之所以不能根据文档写出想要的结果，无非有两种情况，一种对于原生完全懵逼，毕竟基于mui做APP毕竟前端还是占多数，而前端中熟悉原生的人毕竟是少数，很多人声称会原生哪里还会用h5，这话只能呵呵？就大趋势而言，应用web化是现在的潮流所向，现在即使有资金和技术实力的大厂也在做混合式开发和H5的APP，不然dcloud官方也不会花大力气在流应用上。近来越来越多的原生开发者朋友和我交流h5，他们很多是被逼着转前端，这些人懂原生，但是不懂h5，所以这些朋友从原生转mui过程中可能还是不能够理解如果用5+ sdk，中间的交互怎么解决，这就是第二种人的困境？"},{"title":"5+App开发——HTML5+ APP页面传参详解","url":"/blog/5+app-page-reference.html","createdAt":"2016.07.28","category":"MUI从入门到精通","tags":["mui","html5plus","页面传参"],"summary":"页面传参数是一种比较常见的业务需求，在 html5+ app 中，根据实现原理及适用环境可以分为两大类。"},{"title":"mui初级入门教程（六）— 模板页面实现原理及多端适配指南","url":"/blog/5+app-template.html","createdAt":"2016.07.26","category":"MUI从入门到精通","tags":["mui","html5plus","webview","template","os","多端适配"],"summary":"自从来公司实习，每天都淹没在问题中，一直没有抽出空写写文章，今天轮到我完善文档和总结，就想着抽空把文档中的内容写写，但是文档限于篇幅，而且不能话唠，自然博客是最好的方式去分享。哈哈，废话不多说，将整理的内容贴出来，稍作解释，方便大家查阅。"},{"title":"JavaScript进阶学习（二）—— 基于原型链继承的js工具库的实现方法","url":"/blog/javascript-advanced-prototype-chain.html","createdAt":"2016.07.03","category":"JavaScript进阶学习","tags":["JavaScript","原型链","jQuery"],"summary":"写这篇文章的目的很简单，就是想把之前一些不太清晰的概念梳理一下，网上这类教程很多，但是本文尽可能还原问题本质，注意知识点之间的联系。相信看过我前面的博客的朋友一定知道我写文章的风格了，尽可能详尽，而且不是只是为了解决某一个小问题而写，方便大家知识点更体系，一篇内容其实相当于一章节的内容，容量有点大，我也不是一天完成的，一般是一周时间左右，所以大家阅读的话可能也需要一些时间才能有所收获。作为进阶教程，本文将简要讲述 JavaScript 面向对象编程的内容，但是不会介绍什么是接口，什么是对象，什么是对象属性，什么是对象方法，但是相信你看完了后自然理所当然的理解了这些基本概念。"},{"title":"JavaScript 进阶学习（一）—— 基于正则表达式的简单 js 模板引擎实现","url":"/blog/javascript-advanced-regular-template.html","createdAt":"2016.06.26","category":"JavaScript进阶学习","tags":["JavaScript","正则表达式","js模板引擎"],"summary":"这年头MVC、MVVM框架泛滥，很多时候我们只是用了这些框架，有时候想深入去了解这些框架背后的原理实现时，阅读源码时发现无从下手，js基本功简直渣渣，所以想利用业余时间还是要补补基础。以前看JavaScript的一些书籍时总是把正则表达式这一章跳过了，遇到一些需要写正则的时候然后都是各种copy，js要进阶感觉还是要系统学习一下正则，虽然看起来像乱码一样的匹配规则，但是如果熟练使用会很有用，那么今天就先从正则开始吧！和大部分书籍一样，本文前篇也会是讲解基础，本文的很多内容都是摘自网络进行整理，有些内容需要各位自己进行实践验证。"},{"title":"mui 初级入门教程（五）— 聊聊即时通讯（IM），基于环信 web im SDK","url":"/blog/5+app-web-im.html","createdAt":"2016.06.15","category":"MUI从入门到精通","tags":["mui","html5plus","环信","im","页面传值","缓存"],"summary":"感觉自从`qq`、微信这种`APP`用多了，现在都没啥人发短信了，现在什么`APP`都想加入`IM`的功能，曾经有段时间在折腾自己撸一个聊天的东西，也尝试过很多平台，今天这里给大家介绍一下从零开始自己做一个聊天的`app`功能。因为之前帮朋友做过一个基于环信的聊天功能，这里就以环信的平台为例举个例子说明。这篇文章注意想讲解一下集成这种第三方的一般实现方法，不会一下子就把所有的功能都集成，因为之前做环信主要是在微信上用，所以用的是环信的`Web IM`，遇到了蛮多坑，这次打算用`dcloud`这边的`mui`重新集成，所以在没有完全做完之前，所以也不知道有些坑具体能够在有限的时间内解决，本文仅供参考，欢迎大家去实践检验。在写这篇文章之前先贴一个`Dcloud`论坛中的资源帖，[【即时通信、im 问题汇总】](http://ask.dcloud.net.cn/article/649)"},{"title":"mui初级入门教程（四）—  再谈webview，从小白变“大神”！","url":"/blog/5+app-webview-deep-explore.html","createdAt":"2016.06.05","category":"MUI从入门到精通","tags":["mui","html5plus","webview"],"summary":"前段时间群里某网友的问题，弹出菜单被子页面挡住了这个老生常谈的问题，其实只要明白 webview 常见的层级问题，这个问题很容易解释，那么解决方案自然很容易想到，如果没有理解错，`html5+`里面`webview`的创建规则是后来居上原则，所以如果想解决那个问题，有两种解决办法："},{"title":"mui初级入门教程（三）— html5+ XMLHttpRequest 与mui ajax用法详解","url":"/blog/5+app-xmlhttprequest-ajax.html","createdAt":"2016.05.29","category":"MUI从入门到精通","tags":["mui","html5plus","XMLHttpRequest","ajax","懒加载"],"summary":"这是这个系列的的第三篇文章，前面的文章在多个地方（本人`github`博客、`dcloud ask`社区、`segmentfault`）发出来了，很多朋友收藏点赞，只是没有多少人反映内容的深浅，也没有人提出意见，所以实话说不知道符不符合大家胃口，不过我写博客一向以详细为标准，尽可能照顾到各种人群，特别是入门级的同学，力求还原我学习这个东西的一个思路和过程，在文章中也分享一些不错的干货，最近在折腾博客，用`webpack`和`vue-cli`打包了一下，目前还有些问题有待解决，自己尝试写一个markdown编辑器因为bug过多的问题，然后开始使用马克飞象写博客，毕竟生成的界面美观多了，这样可以方便大家阅读吧。废话不多说，开始我们今天的内容，今天主要是学习一下`html5+`的`XMLHttpRequest `以及`mui`的基本用法。"},{"title":"mui 初级入门教程（二）— html5+ webview 底部栏用法详解","url":"/blog/5+app-webview-tabbar.html","createdAt":"2016.05.19","category":"MUI从入门到精通","tags":["mui","html5plus","webview"],"summary":"本系列文章我们将利用 mui 基于网易云音乐 API 实现一个音乐播放器 APP，同时基于环形或者融云实现聊天功能。作为本系列文章的第一篇，本文会详细讲解 html5+中管理应用窗口界面的 Webview 模块的用法，因为是初级教程篇不过多讲解原理部分，初级用户只需要知道基本用法就可以，并使用 mui.js 中的组件进行页面效果展示。"},{"title":"mui初级入门教程（一）— 小白入手mui的学习路线","url":"/blog/5+app-mui-learning-route.html","createdAt":"2016.05.15","category":"MUI从入门到精通","tags":["mui","html5plus"],"summary":"相信很多朋友初次接触到`dcloud`这边的产品，一般都是`hbuilder`和`mui`，所以很多朋友对于`dcloud`这边的产品链的认识也是各不相同。我相信对于很多新手来说，初次使用`dcloud`这边的产品的第一感觉一定是觉得这个东西很好却无从下手，然后被一些新的概念转得云里雾里，然后就开始吐槽官方文档，其实真的是文档不好吗？"},{"title":"webpack入门详解","url":"/blog/webpack-introduction.html","createdAt":"2016.04.22","category":"JavaScript进阶学习","tags":["JavaScript","webpack"],"summary":"上一篇文章里面讲到前端模块化的基本概念，同时用webpack进行打包演示了一个基础的hello world实例，webpack的内容肯定不止那么多，在这篇文章里面我会详细介绍webpack的使用细节。同时，会结合vue.js完成一个更加实用的例子。如果你还没有看上一篇内容，建议你先阅读相关的内容，再看本篇文章效果会更好。"},{"title":"浅析前端模块化","url":"/blog/analysis-of-frontend-module.html","createdAt":"2016.04.15","category":"JavaScript进阶学习","tags":["JavaScript","前端模块化","webpack"],"summary":"近来学习了git，github，确实体验了一下开发效率这个问题，比如几条常用命令就可以把代码下载上传到github上，可以很快的去测试一下效果。去年就听说过前端模块化这个概念，但是一直没有深入去了解，所以准备继续学习一下相关的技术。虽然现在前端各种口水战，说什么前端目前浮躁，其实个人觉得不然，是因为人容易站在自己的立场去看问题，不管什么框架终究要适用于业务需求需要，各自有自己的适用环境，无从说哪种更好，自己觉得合适就好。"},{"title":"走近github王国，git入门教程","url":"/blog/git-github-introduction.html","createdAt":"2016.04.01","category":"node学习之路","tags":["git","github"],"summary":"一个稳定简单，空间大，关注度高的博客分享平台是提高博客浏览量的必要条件，当然内容充实才是关键，废话不多说，今天我们就来搞定git和github，相信程序猿们都懂。"},{"title":"基于JavaScript的桌面应用入门","url":"/blog/learn-electron-introduction.html","createdAt":"2016.03.28","category":"node学习之路","tags":["electron","markdown","vue.js"],"summary":"为了让自己的博客体验更好，也方便自己平时发布，打算从零开始打造一个自己的博客文章发布平台。当然在这个过程中肯定会用到一些很优秀的第三方插件，这样一方面可以减少自己的工作量，一方面可以学习一下其他优秀的工具。"}]}')},79:function(t,a,e){"use strict";e(69)}}]);