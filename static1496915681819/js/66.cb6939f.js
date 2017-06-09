webpackJsonp([66],{1331:function(t,v,_){t.exports={render:function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"doc"},[_("h2",[t._v("DateTimePicker 日期时间控件")]),t._v(" "),_("h3",[t._v("普通选择日期时间控件")]),t._v(" "),_("div",[_("example",{attrs:{demo:"dataplugins/datetimepicker1"}})],1),t._v(" "),_("h3",[t._v("日期时间控件禁用")]),t._v(" "),_("div",[_("example",{attrs:{demo:"dataplugins/datetimepicker2"}})],1),t._v(" "),_("h3",[t._v("日期格式化自定义")]),t._v(" "),_("div",[_("example",{attrs:{demo:"dataplugins/datetimepicker9"}})],1),t._v(" "),_("h3",[t._v("选择到小时")]),t._v(" "),_("div",[_("example",{attrs:{demo:"dataplugins/datetimepicker3"}})],1),t._v(" "),_("h3",[t._v("日期时间控件,可以到秒")]),t._v(" "),t._m(0),t._v(" "),_("div",[_("example",{attrs:{demo:"dataplugins/datetimepicker4"}})],1),t._v(" "),_("h3",[t._v("分钟列表Step自定义")]),t._v(" "),_("div",[_("example",{attrs:{demo:"dataplugins/datetimepicker5"}})],1),t._v(" "),_("h3",[t._v("时间分钟列表展示自定义")]),t._v(" "),_("div",[_("example",{attrs:{demo:"dataplugins/datetimepicker6"}})],1),t._v(" "),_("h3",[t._v("快捷方式")]),t._v(" "),_("p",[t._v("可以通过全局定义配置好快捷方式，这里只做key的调用，或者自己定义函数返回。全局配置详情请参考"),_("router-link",{attrs:{to:"/guide/config"}},[t._v("全局配置")])],1),t._v(" "),_("div",[_("example",{attrs:{demo:"dataplugins/datetimepicker7"}})],1),t._v(" "),_("h3",[t._v("控件开始结束范围以及可选范围控制")]),t._v(" "),_("div",[_("example",{attrs:{demo:"dataplugins/datetimepicker8"}})],1),t._v(" "),_("h3",[t._v("DatePicker 参数")]),t._v(" "),t._m(1),t._v(" "),_("h3",[t._v("option 配置")]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("p",[t._v("这里的秒只是选择到分钟，手动修改秒数。如果有更合适的方案，希望在github上为我们"),_("a",{attrs:{href:"https://github.com/heyui/heyui/issues/new",target:"_blank"}},[t._v("提建议")]),t._v("。")])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("table",{staticClass:"table"},[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选值")]),t._v(" "),_("th",[t._v("默认值")])]),t._v(" "),_("tr",[_("td",[t._v("disabled")]),t._v(" "),_("td",[t._v("是否禁用")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("type")]),t._v(" "),_("td",[t._v("类型")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("date")]),t._v(" "),_("td",[t._v("year, month, week, datetime, datehour")])]),t._v(" "),_("tr",[_("td",[t._v("option")]),t._v(" "),_("td",[t._v("配置项，详细参见下面的option说明")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("format")]),t._v(" "),_("td",[t._v("自定义数据的格式")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("hasSeconds")]),t._v(" "),_("td",[t._v("当选择日期时间时，是否自动格式化到秒")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("noBorder")]),t._v(" "),_("td",[t._v("是否有边框，适用于文字的下拉选择")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("placeholder")]),t._v(" "),_("td",[t._v("展示默认提示语")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("请选择")])])])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("table",{staticClass:"table"},[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选值")]),t._v(" "),_("th",[t._v("默认值")])]),t._v(" "),_("tr",[_("td",[t._v("start")]),t._v(" "),_("td",[t._v("开始时间")]),t._v(" "),_("td",[t._v("Function, Object, String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("end")]),t._v(" "),_("td",[t._v("结束时间")]),t._v(" "),_("td",[t._v("Function, Object, String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("disabled")]),t._v(" "),_("td",[t._v("不可选日期配置")]),t._v(" "),_("td",[t._v("Function")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("shortcuts")]),t._v(" "),_("td",[t._v("自定义快捷方式")]),t._v(" "),_("td",[t._v("[String, Object]")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("minuteStep")]),t._v(" "),_("td",[t._v("分钟的间隔")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("5")])]),t._v(" "),_("tr",[_("td",[t._v("hours")]),t._v(" "),_("td",[t._v("自定义可选的小时")]),t._v(" "),_("td",[t._v("Function")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("minutes")]),t._v(" "),_("td",[t._v("自定义可选的分钟")]),t._v(" "),_("td",[t._v("Function")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])])])}]},t.exports.render._withStripped=!0},832:function(t,v,_){var e=_(1)(null,_(1331),null,null);e.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/data/plugin/datetime.vue",e.esModule&&Object.keys(e.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] datetime.vue: functional components are not supported with templates, they should use render functions."),t.exports=e.exports}});