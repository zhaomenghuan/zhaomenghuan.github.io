(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{172:function(t,s,a){t.exports=a.p+"assets/img/private-npm.f27dab4e.jpg"},173:function(t,s,a){t.exports=a.p+"assets/img/verdaccio.1ea892c6.png"},174:function(t,s,a){t.exports=a.p+"assets/img/verdaccio-docker.4f5f3a9a.png"},175:function(t,s,a){t.exports=a.p+"assets/img/verdaccio-npm.f0b74cc9.png"},333:function(t,s,a){"use strict";a.r(s);var e=[function(){var t=this,s=t._self._c;return s("ul",[s("li",[s("ol",[s("li",[t._v("安全性角度考虑：如果我们想要一个公共组件库，那么把组件放到我们私有库中，只有内网可以访问，这样可以避免组件中业务的泄露；")])])]),t._v(" "),s("li",[t._v("2、模块复用性角度考虑：多个项目之间有重复的共有模块，当需要修改模块，通过简单的统一的配置就可以实现；提炼后的组件有专门的地址可以用来查看，方便使用，在后期项目的引用中也能节约开发成本")]),t._v(" "),s("li",[t._v("3、npm 包下载速度角度考虑：使用内部的地址，能够在开发下载 node 包的同时，将关联的依赖包缓存到 npm 私有仓库服务器中，下载速度更快；")]),t._v(" "),s("li",[t._v("4、项目开发中的路劲角度考虑：在项目开发中书写代码更整洁简练，不需书写更长的相对路径；")]),t._v(" "),s("li",[t._v("5、公司技术沉淀角度考虑：知识的沉淀，在公司业务相关的应用上尤佳；")]),t._v(" "),s("li",[t._v("6、版本角度的考虑：相当于一个容器，统一管理需要的包，保持版本的唯一；")]),t._v(" "),s("li",[t._v("7、开发效率角度考虑：使私有公共业务或组件模块能以共有包一样的管理组织方式，保持一致性，提高开发效率.")])])},function(){var t=this._self._c;return t("p",[t("img",{attrs:{src:a(172),alt:""}})])},function(){var t=this._self._c;return t("ul",[t("li",[this._v("付费购买 npm 企业私有仓库")]),this._v(" "),t("li",[this._v("使用 git + ssh 这种方式直接引用到 GitHub 项目地址")]),this._v(" "),t("li",[this._v("开源代码源代码方式或者 docker 化构建")])])},function(){var t=this,s=t._self._c;return s("ul",[s("li",[t._v("基于 Node.js 的网页应用程序")]),t._v(" "),s("li",[t._v("私有 npm registry")]),t._v(" "),s("li",[t._v("本地网络 proxy")]),t._v(" "),s("li",[t._v("可插入式应用程序")]),t._v(" "),s("li",[t._v("易安装和使用")]),t._v(" "),s("li",[t._v("提供 Docker 和 Kubernetes 支持")]),t._v(" "),s("li",[t._v("与 yarn, npm 和 pnpm 100% 兼容")]),t._v(" "),s("li",[t._v("forked 于 sinopia@1.4.0 并且 100% 向后兼容。")])])},function(){var t=this._self._c;return t("p",[t("img",{attrs:{src:a(173),alt:""}})])},function(){var t=this._self._c;return t("ol",[t("li",[this._v("拉取 Verdaccio 的 docker 镜像：")])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker pull verdaccio/verdaccio\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("在根目录下创建 docker 文件")])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("mkdir -p ~/docker/data\ncd ~/docker/data\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"3"}},[t("li",[this._v("从 git 拉取示例到 data 到目录下")])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("git clone https://github.com/verdaccio/docker-examples\ncd ~/docker/data/docker-examples\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"4"}},[t("li",[this._v("移动配置文件")])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("mv docker-local-storage-volume ~/docker/verdaccio\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"5"}},[t("li",[this._v("设置文件夹权限")])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("chown -R 100:101 ~/docker/verdaccio\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"6"}},[t("li",[this._v("启动镜像")])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("cd ~/docker/verdaccio\ndocker-compose build\ndocker-compose up\n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("V_PATH=~/docker/verdaccio; docker run -it --rm --name verdaccio \\\n  -p 4873:4873 \\\n  -v $V_PATH/conf:/verdaccio/conf \\\n  -v $V_PATH/storage:/verdaccio/storage \\\n  -v $V_PATH/plugins:/verdaccio/plugins \\\n  verdaccio/verdaccio\n")])])])},function(){var t=this._self._c;return t("p",[t("img",{attrs:{src:a(174),alt:""}})])},function(){var t=this._self._c;return t("ol",[t("li",[this._v("Nodejs 环境下全局安装 verdaccio")])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm install -g verdaccio --unsafe-perm\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("修改配置文件")])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("vim /root/.config/verdaccio/config.yaml\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("auth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("htpasswd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./htpasswd\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Maximum amount of users allowed to register, defaults to "+inf".')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You can set this to -1 to disable registration.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max_users")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("-1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uplinks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("npmjs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//registry.npmjs.org/\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cnpm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//registry.npm.taobao.org\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("packages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"@aemp/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("access")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $authenticated\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $authenticated\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("unpublish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $authenticated\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"@*/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("access")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $all\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $authenticated\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("unpublish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $authenticated\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cnpm\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"**"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("access")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $all\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $authenticated\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("unpublish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $authenticated\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cnpm\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"3"}},[t("li",[this._v("对外开放 4873 端口")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--state")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 先查看防火墙状态，")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" firewalld start              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启防火墙:")]),t._v("\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4873")]),t._v("/tcp –permanent  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开放4873端口")]),t._v("\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--reload")]),t._v("                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重新载入")]),t._v("\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --query-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4873")]),t._v("/tcp    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看是否添加成功")]),t._v("\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"4"}},[t("li",[this._v("启动 verdaccio")])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("verdaccio\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"5"}},[t("li",[this._v("pm2 守护 verdaccio 进程")])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm install -g pm2 --unsafe-perm\n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("pm2 start verdaccio\n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("pm2 show verdaccio\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"6"}},[t("li",[this._v("nginx 配置")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl http2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" registry.xxx.com")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ssl")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate")]),t._v(" cert.crt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate_key")]),t._v(" cert.key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_session_timeout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5m")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_protocols")]),t._v(" TLSv1.2 TLSv1.1 TLSv1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#SSL协议")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_ciphers")]),t._v(" ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#SSL加密算法")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_prefer_server_ciphers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("    Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("    X-Real-IP "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("    X-Forwarded-For "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("    X-Forwarded-Proto "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v("          http://127.0.0.1:4873/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_read_timeout")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_redirect")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("off")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" ~ ^/verdaccio/(.*)$")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Real-IP "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Forwarded-For "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-NginX-Proxy true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://127.0.0.1:4873/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_redirect")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("off")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("ol",[t("li",[this._v("设置仓库源")])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm set registry http://localhost:4873\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("添加用户")])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm adduser --registry http://localhost:4873\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"3"}},[t("li",[this._v("登录")])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm login --registry http://localhost:4873\n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"4"}},[t("li",[this._v("上传私有包")])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm publish --registry http://localhost:4873\n")])])])},function(){var t=this._self._c;return t("p",[t("img",{attrs:{src:a(175),alt:""}})])}],r=a(1),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"npm-私有仓库工具-verdaccio-搭建"}},[t._v("npm 私有仓库工具 Verdaccio 搭建")]),t._v(" "),s("h2",{attrs:{id:"前言"}},[t._v("前言")]),t._v(" "),s("p",[t._v("在构建小程序平台的过程中，核心包、开发脚手架、前端组件库等 JS SDK 依赖资源需要依托于 npm 去管理。对于企业开发来说，不能将核心代码上传到完全开放的公网环境，所以想尝试搭建企业内部 npm 私有仓库。")]),t._v(" "),s("h2",{attrs:{id:"npm-私有仓库"}},[t._v("npm 私有仓库")]),t._v(" "),s("h3",{attrs:{id:"npm-私有仓库的好处"}},[t._v("npm 私有仓库的好处")]),t._v(" "),t._m(0),t._v(" "),s("h3",{attrs:{id:"npm-私有仓库的原理"}},[t._v("npm 私有仓库的原理")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("用户 install 后向私有 npm 发起请求，服务器会先查询所请求的这个模块是否是我们自己的私有模块或已经缓存过的公共模块，如果是则直接返回给用户；如果请求的是一个还没有被缓存的公共模块，那么则会向上游源请求模块并进行缓存后返回给用户。上游的源可以是 npm 仓库，也可以是淘宝镜像。")]),t._v(" "),s("h3",{attrs:{id:"npm-私有仓库框架选型"}},[t._v("npm 私有仓库框架选型")]),t._v(" "),s("p",[t._v("npm 私有仓库搭建有以下几种方式：")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("常用的 npm 私有仓库框架：")]),t._v(" "),s("ul",[s("li",[t._v("Nexus: "),s("a",{attrs:{href:"https://www.sonatype.com/nexus-repository-oss",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.sonatype.com/nexus-repository-oss"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Sinopia: "),s("a",{attrs:{href:"https://github.com/rlidwka/sinopia",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/rlidwka/sinopia"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Verdaccio: "),s("a",{attrs:{href:"https://verdaccio.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://verdaccio.org"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("cnpm: "),s("a",{attrs:{href:"https://cnpmjs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cnpmjs.org"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("cpm: "),s("a",{attrs:{href:"https://github.com/cevio/cpm",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/cevio/cpm"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("npmfrog: "),s("a",{attrs:{href:"https://github.com/dmstern/npmfrog",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/dmstern/npmfrog"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Nexus 是 Java 社区的一个方案，可以用于 Maven、npm 多种类型的仓库，界面比较丑。Sinopia 是基于 Node.js 构建的，已经年久失修不维护了，Verdaccio 是 forked Sinopia 进行改造的；Sinopia 和 Verdaccio 比较偏向于一个零配置、轻量型的私有 npm 模块管理工具，不需要额外的数据库配置，它内部自带小型数据库，支持私有模块管理的同时也支持缓存使用过的公共模块，发布及缓存的模块以静态资源形式本地存储。cnpm 支持静态配置型用户管理机制，以及分层模块权限设置，可以实现公共模块镜像更新以及私有模块管理，支持拓展多种存储形式，相对的数据库的配置较多，部署过程略复杂，是淘宝及多家大型公司搭建内部私有 npm 仓库选择的方案。")]),t._v(" "),s("p",[t._v("基于团队内使用的考虑，使用 Verdaccio 构建成本比较低，后期也好维护，等后面如果需要做完整的 DevOps 流程再详细考虑 Verdaccio 和 cnpm 的优劣。")]),t._v(" "),s("h3",{attrs:{id:"常用的仓库地址"}},[t._v("常用的仓库地址")]),t._v(" "),s("ul",[s("li",[t._v("npm —— "),s("a",{attrs:{href:"https://registry.npmjs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://registry.npmjs.org"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("cnpm —— "),s("a",{attrs:{href:"http://r.cnpmjs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://r.cnpmjs.org"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("taobao —— "),s("a",{attrs:{href:"https://registry.npm.taobao.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://registry.npm.taobao.org"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("nj —— "),s("a",{attrs:{href:"https://registry.nodejitsu.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://registry.nodejitsu.com"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("rednpm —— "),s("a",{attrs:{href:"http://registry.mirror.cqupt.edu.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://registry.mirror.cqupt.edu.cn"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("npmMirror —— "),s("a",{attrs:{href:"https://skimdb.npmjs.com/registry",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://skimdb.npmjs.com/registry"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("edunpm —— "),s("a",{attrs:{href:"http://registry.enpmjs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://registry.enpmjs.org"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"verdaccio-框架"}},[t._v("Verdaccio 框架")]),t._v(" "),s("p",[t._v("Verdaccio 是一个 Node.js 创建的轻量的私有 npm proxy registry。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("h3",{attrs:{id:"docker-方式安装"}},[t._v("docker 方式安装")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),s("p",[t._v("使用 docker-compose 启动:")]),t._v(" "),t._m(16),s("p",[t._v("或者使用 docker run 命令启动:")]),t._v(" "),t._m(17),s("p",[t._v("打开 http://localhost:4873 就可以看到已经启动起来了")]),t._v(" "),t._m(18),t._v(" "),s("h3",{attrs:{id:"npm-方式安装"}},[t._v("npm 方式安装")]),t._v(" "),t._m(19),t._v(" "),t._m(20),s("p",[t._v("加上 -–unsafe-perm 的原因是防止报 grywarn 权限的错。")]),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("verdaccio 的特点是，你在哪个目录运行，它的就会在对应的目录下创建自己的文件。目录下默认有两个文件：config.yaml 和 storage，htpasswd 是添加用户之后自动创建的。")]),t._v(" "),s("p",[t._v("打开默认启动的 config.yaml 文件：")]),t._v(" "),t._m(22),t._m(23),s("p",[t._v("access 是访问权限控制，总共有三种身份：所有人($all)、匿名用户($anonymous)、认证(登陆)用户($authenticated)。")]),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("verdaccio 继承了 sinopia，端口号 4873 依然不变。")]),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),s("p",[t._v("安装 pm2：")]),t._v(" "),t._m(29),s("p",[t._v("使用 pm2 启动 verdaccio：")]),t._v(" "),t._m(30),s("p",[t._v("查看 pm2 守护下的进程 verdaccio 的实时日志：")]),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),s("h3",{attrs:{id:"用户管理-私有包管理"}},[t._v("用户管理/私有包管理")]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37),s("p",[t._v("输入 username、password 以及 Email 即可")]),t._v(" "),t._m(38),t._v(" "),t._m(39),t._m(40),t._v(" "),t._m(41),t._m(42),t._v(" "),s("h2",{attrs:{id:"参考"}},[t._v("参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://verdaccio.org/docs/zh-CN/docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("Verdaccio Docker 安装"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/huangenai/p/10006176.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 私有仓库 配置 verdaccio 在 docker 环境"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://blog.fens.me/nodejs-cnpm-npm",target:"_blank",rel:"noopener noreferrer"}},[t._v("CNPM 搭建私有的 NPM 服务"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/jaywcjlove/handbook/blob/master/CentOS/%E5%9C%A85%E5%88%86%E9%92%9F%E5%86%85%E6%90%AD%E5%BB%BA%E4%BC%81%E4%B8%9A%E5%86%85%E9%83%A8%E7%A7%81%E6%9C%89npm%E4%BB%93%E5%BA%93.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 5 分钟内搭建企业内部私有 npm 仓库"),s("OutboundLink")],1)])]),t._v(" "),s("site-footer")],1)}),e,!1,null,null,null);s.default=n.exports}}]);