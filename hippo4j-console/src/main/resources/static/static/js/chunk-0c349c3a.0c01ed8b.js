(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c349c3a"],{"266a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"220px"},attrs:{placeholder:"租户ID"},model:{value:e.listQuery.tenantId,callback:function(t){e.$set(e.listQuery,"tenantId",t)},expression:"listQuery.tenantId"}},e._l(e.tenantOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"220px"},attrs:{placeholder:"项目ID"},model:{value:e.listQuery.itemId,callback:function(t){e.$set(e.listQuery,"itemId",t)},expression:"listQuery.itemId"}},e._l(e.itemOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"220px"},attrs:{placeholder:"线程池ID"},model:{value:e.listQuery.tpId,callback:function(t){e.$set(e.listQuery,"tpId",t)},expression:"listQuery.tpId"}},e._l(e.threadPoolOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v("\n        搜索\n      ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n        添加\n      ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.$index+1))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"租户ID",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.tenantId))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"项目ID",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.itemId))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"线程池ID",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.tpId))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"通知平台",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.platform))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"通知类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.type))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"报警间隔",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.interval))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"接收者",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("ellipsis")(t.row.receives)))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"是否启用",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#00A854","active-text":"启用","active-value":0,"inactive-color":"#F04134","inactive-text":"停用","inactive-value":1},on:{change:function(a){return e.changeEnable(t.row)}},model:{value:t.row.enable,callback:function(a){e.$set(t.row,"enable",a)},expression:"scope.row.enable"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(n)}}},[e._v("\n            编辑\n          ")]),e._v(" "),"deleted"!==n.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(n)}}},[e._v("\n            删除\n          ")]):e._e()]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}}),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"1000px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"110px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"基本信息"}})],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"租户ID",prop:"tenantId"}},[a("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"请选择租户",disabled:"create"!==e.dialogStatus},model:{value:e.temp.tenantId,callback:function(t){e.$set(e.temp,"tenantId",t)},expression:"temp.tenantId"}},e._l(e.tenantOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"通知平台",prop:"platform"}},[a("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"通知平台"},model:{value:e.temp.platform,callback:function(t){e.$set(e.temp,"platform",t)},expression:"temp.platform"}},e._l(e.platformTypes,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"项目ID",prop:"itemId"}},[a("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"请选择项目",disabled:"create"!==e.dialogStatus},model:{value:e.temp.itemId,callback:function(t){e.$set(e.temp,"itemId",t)},expression:"temp.itemId"}},e._l(e.itemOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"通知类型",prop:"type"}},[a("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"通知类型"},on:{change:e.selectType},model:{value:e.temp.type,callback:function(t){e.$set(e.temp,"type",t)},expression:"temp.type"}},e._l(e.typeTypes,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"线程池ID",prop:"tpId"}},[a("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"线程池ID",disabled:"create"!==e.dialogStatus},model:{value:e.temp.tpId,callback:function(t){e.$set(e.temp,"tpId",t)},expression:"temp.tpId"}},e._l(e.threadPoolOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"是否启用",prop:"enable"}},[a("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"是否启用"},model:{value:e.temp.enable,callback:function(t){e.$set(e.temp,"enable",t)},expression:"temp.enable"}},e._l(e.enableTypes,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"扩展信息"}})],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"Token",prop:"secretKey"}},[a("el-input",{attrs:{size:"medium",placeholder:"请输入Token"},model:{value:e.temp.secretKey,callback:function(t){e.$set(e.temp,"secretKey",t)},expression:"temp.secretKey"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"报警间隔",prop:"interval"}},[a("el-input-number",{attrs:{placeholder:"报警间隔/Min",min:0,disabled:"CONFIG"===e.temp.type},model:{value:e.temp.interval,callback:function(t){e.$set(e.temp,"interval",t)},expression:"temp.interval"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"接收者",prop:"receives"}},[a("el-input",{staticStyle:{width:"83%"},attrs:{autosize:{minRows:6,maxRows:10},type:"textarea",placeholder:"多个接收者使用英文逗号 , 分割 (注意不要有空格)\n钉钉：填写手机号\n企微：填写user_id会以@的消息发给用户，否则填写姓名，如：龙台\n飞书：填写ou_开头用户唯一标识会以@的消息发给用户，填写手机号则是普通的@"},model:{value:e.temp.receives,callback:function(t){e.$set(e.temp,"receives",t)},expression:"temp.receives"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n          取消\n        ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n          确认\n        ")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogPluginVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPluginVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pluginData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v("Confirm")])],1)],1)],1)},l=[],i=a("3737"),r=a("dd71"),s=a("b775");function o(e){return Object(s["a"])({url:"/v1/cs/notify/query/page",method:"post",data:e})}function c(e){return Object(s["a"])({url:"/v1/cs/notify/update",method:"post",data:e})}function u(e){return Object(s["a"])({url:"/v1/cs/notify/save",method:"post",data:e})}function d(e){return Object(s["a"])({url:"/v1/cs/notify/remove",method:"delete",data:e})}function p(e){return Object(s["a"])({url:"/v1/cs/notify/enable/"+e.id+"/"+e.enable,method:"post"})}var m=a("4d856"),f=a("6724"),v=a("333d"),y={name:"JobProject",components:{Pagination:v["a"]},directives:{waves:f["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]},ellipsis:function(e){return e?e.length>22?e.slice(0,22)+"...":e:""}},data:function(){return{list:null,listLoading:!0,total:0,listQuery:{current:1,size:10,itemId:""},pluginTypeOptions:["reader","writer"],dialogPluginVisible:!1,pluginData:[],dialogFormVisible:!1,tenantOptions:[],itemOptions:[],threadPoolOptions:[],platformTypes:[{key:"DING",display_name:"DING"},{key:"LARK",display_name:"LARK"},{key:"WECHAT",display_name:"WECHAT"}],typeTypes:[{key:"CONFIG",display_name:"CONFIG"},{key:"ALARM",display_name:"ALARM"}],enableTypes:[{key:0,display_name:"启用"},{key:1,display_name:"停用"}],dialogStatus:"",textMap:{update:"Edit",create:"Create"},rules:{tenantId:[{required:!0,message:"this is required",trigger:"blur"}],itemId:[{required:!0,message:"this is required",trigger:"blur"}],tpId:[{required:!0,message:"this is required",trigger:"blur"}],receives:[{required:!0,message:"this is required",trigger:"blur"}],secretKey:[{required:!0,message:"this is required",trigger:"blur"}],platform:[{required:!0,message:"this is required",trigger:"blur"}],type:[{required:!0,message:"this is required",trigger:"blur"}],enable:[{required:!0,message:"this is required",trigger:"blur"}]},temp:{id:void 0,tenantId:"",interval:void 0},visible:!0}},created:function(){this.fetchData(),this.initSelect()},methods:{fetchData:function(){var e=this;this.listLoading=!0,o(this.listQuery).then((function(t){var a=t.records,n=t.total;e.total=n,e.list=a,e.listLoading=!1}))},initSelect:function(){var e=this;r["c"]({}).then((function(t){for(var a=t.records,n=0;n<a.length;n++)e.tenantOptions.push({key:a[n].tenantId,display_name:a[n].tenantId+" "+a[n].tenantName})})),i["c"]({}).then((function(t){for(var a=t.records,n=0;n<a.length;n++)e.itemOptions.push({key:a[n].itemId,display_name:a[n].itemId+" "+a[n].itemName})})),m["d"]({}).then((function(t){for(var a=t.records,n=0;n<a.length;n++)e.threadPoolOptions.push({key:a[n].tpId,display_name:a[n].tpId})}))},resetTemp:function(){this.temp={id:void 0,tenantName:"",tenantDesc:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&u(e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})}))}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),null==this.temp.interval&&(this.temp.interval=void 0),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var a=Object.assign({},e.temp);c(a).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},handleDelete:function(e){var t=this;d(e).then((function(e){t.fetchData(),t.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})}))},changeEnable:function(e){var t=this;p(e).then((function(e){t.fetchData(),t.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})}))},selectType:function(e){"CONFIG"===e&&(this.temp.interval=void 0)}}},h=y,b=a("2877"),g=Object(b["a"])(h,n,l,!1,null,null,null);t["default"]=g.exports},"333d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},l=[];a("c5f6");Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function r(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(e,t,a){var n=s(),l=e-n,o=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=o;var s=Math.easeInOutQuad(c,n,l,t);r(s),c<t?i(e):a&&"function"===typeof a&&a()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&o(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&o(0,800)}}},u=c,d=(a("e498"),a("2877")),p=Object(d["a"])(u,n,l,!1,null,"6af373ef",null);t["a"]=p.exports},3737:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var n=a("b775");function l(e){return Object(n["a"])({url:"/v1/cs/item/query/page",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/v1/cs/item/update",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/v1/cs/item/save",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/v1/cs/item/delete/"+e[0]+"/"+e[1],method:"delete"})}},"4d856":function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return o}));var n=a("b775");function l(e){return Object(n["a"])({url:"/v1/cs/thread/pool/query/page",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/v1/cs/thread/pool/save_or_update",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/v1/cs/thread/pool/save_or_update",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/v1/cs/thread/pool/delete",method:"delete",data:e})}function o(e){return Object(n["a"])({url:"/v1/cs/thread/pool/alarm/enable/"+e.id+"/"+e.isAlarm,method:"post"})}},6724:function(e,t,a){"use strict";a("8d41");var n="@@wavesContext";function l(e,t){function a(a){var n=Object.assign({},t.value),l=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),i=l.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var r=i.getBoundingClientRect(),s=i.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(r.width,r.height)+"px",i.appendChild(s)),l.type){case"center":s.style.top=r.height/2-s.offsetHeight/2+"px",s.style.left=r.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(a.pageY-r.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(a.pageX-r.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=l.color,s.className="waves-ripple z-active",!1}}return e[n]?e[n].removeHandle=a:e[n]={removeHandle:a},a}var i={bind:function(e,t){e.addEventListener("click",l(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[n].removeHandle,!1),e.addEventListener("click",l(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[n].removeHandle,!1),e[n]=null,delete e[n]}},r=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(r)),i.install=r;t["a"]=i},7456:function(e,t,a){},"8d41":function(e,t,a){},dd71:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var n=a("b775");function l(e){return Object(n["a"])({url:"/v1/cs/tenant/query/page",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/v1/cs/tenant/update",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/v1/cs/tenant/save",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/v1/cs/tenant/delete/"+e,method:"delete"})}},e498:function(e,t,a){"use strict";a("7456")}}]);