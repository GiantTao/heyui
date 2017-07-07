webpackJsonp([17],{1104:function(e,s,t){var r=t(1)(t(1312),t(1347),null,null,null);r.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/guide/quickstart.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] quickstart.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},1312:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}},methods:{},components:{}}},1347:function(e,s,t){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"doc"},[t("h2",[e._v("快速上手")]),e._v(" "),t("p",[e._v("我们建议使用webpack进行系统构建。")]),e._v(" "),e._m(0),e._v(" "),t("p",[e._v("Hey-Cli 是我们开源的脚手架，支持单纯的ES6项目开发，也支持Vue, React项目开发。集成了开发与打包等一系列功能。")]),e._v(" "),e._m(1),e._v(" "),t("h4",[e._v("全局样式引用")]),e._v(" "),t("p",[e._v("在自己定义的 var.less 文件中引用 heyui 的 var.less 文件，并按照自己的需求重新定义更换主题，然后在hey.js脚手架配置文件中设定全局引用文件。")]),e._v(" "),e._m(2),e._v(" "),t("codes",{attrs:{type:"less"}},[e._v('@import (less) "~/heyui/themes/var.less";\n//重新定义主题\n@primary-color: #FDA729;\n@red-color: #D64244;\n@green-color: #3cb357;\n@yellow-color: #EAC12C;\n@blue-color: #77A2DC;')]),e._v(" "),t("p",{directives:[{name:"height",rawName:"v-height",value:10,expression:"10"}]}),e._v(" "),e._m(3),e._v(" "),t("codes",{attrs:{type:"javascript"}},[e._v("globalVars: './src/css/var.less',")]),e._v(" "),t("p",{directives:[{name:"height",rawName:"v-height",value:10,expression:"10"}]}),e._v(" "),e._m(4),e._v(" "),t("codes",{attrs:{type:"less"}},[e._v('@import (less) "~heyui/themes/common.less";')]),e._v(" "),t("h4",[e._v("引入 HeyUI")]),e._v(" "),t("p",[e._v("一般，我们在webpack 入口页面引用。")]),e._v(" "),e._m(5),e._v(" "),t("codes",{attrs:{type:"less"}},[e._v("import Vue from 'vue';\nimport HeyUI from 'heyui';\nVue.use(HeyUI);\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n});")]),e._v(" "),t("h3",[e._v("使用 Vue-Cli / 自己搭建webpack")]),e._v(" "),t("p",[e._v("这里的引用有一些差别，主要在于样式的引用上。")]),e._v(" "),t("p",[e._v("对于 less 变量的定义，我们并没有写入common.less文件，所以需要自己定义一个less文件做引用。")]),e._v(" "),t("codes",{attrs:{type:"less"}},[e._v('@import (less) "~heyui/themes/var.less";\n//重新定义主题\n@primary-color: #FDA729;\n@red-color: #D64244;\n@green-color: #3cb357;\n@yellow-color: #EAC12C;\n@blue-color: #77A2DC;\n@import (less) "~heyui/themes/common.less";\n\n//使用这种方式引用，可以在自己的less文件中使用var.less定义的变量。\n@import (less) "自己的less文件";\n')]),e._v(" "),t("p",[e._v("注意：使用这种引用方式，在 Vue 文件中将无法使用 var.less 文件中的变量。")])],1)},staticRenderFns:[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("h3",[e._v("使用 "),t("a",{attrs:{href:"https://github.com/heyui/hey-cli",target:"_blank"}},[e._v("Hey-Cli")]),e._v(" 脚手架(推荐)")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v("使用 Hey-Cli 可以设定全局的 "),t("code",[e._v("var.less")]),e._v(" 文件，文件中定义的变量可以使用在任意"),t("code",[e._v("less")]),e._v("文件中，以及"),t("code",[e._v("vue")]),e._v("文件的less样式中。")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v("var.less，"),t("a",{attrs:{href:"https://github.com/heyui/heyui-demo/blob/master/src/css/var.less",target:"_blank"}},[e._v("示例")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v("Hey-Cli 配置文件 hey.js ，"),t("a",{attrs:{href:"https://github.com/heyui/heyui-demo/blob/master/hey.js",target:"_blank"}},[e._v("示例")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v("对于样式引用，您可以在入口js文件中import，也可以直接在app.less中引用。 "),t("a",{attrs:{href:"https://github.com/heyui/heyui-demo/blob/master/src/css/app.less",target:"_blank"}},[e._v("示例")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v("同时，HeyUI 也可以设置为全局引用，因为 HeyUI 拥有Message, Loadding等全局可以调用的方法。"),t("a",{attrs:{href:"https://github.com/heyui/heyui-demo/blob/master/src/app.js",target:"_blank"}},[e._v("示例")])])}]},e.exports.render._withStripped=!0}});