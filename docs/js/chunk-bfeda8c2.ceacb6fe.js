(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bfeda8c2"],{1859:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error",class:{"txt-center":t.isCenter},style:{visibility:t.msg?"visible":"hidden"}},[t._v(" "+t._s(t.msg)+" ")])},i=[],s={props:{isCenter:{default:!1,type:Boolean},msg:{default:"",type:String}}},o=s,a=(n("c14c"),n("2877")),u=Object(a["a"])(o,r,i,!1,null,"6c50bbbc",null);e["a"]=u.exports},"1a36":function(t,e,n){"use strict";var r=n("bef7"),i=n.n(r);i.a},4181:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center"},[t._t("default",[t._v("默认值")])],2)},i=[],s=(n("e389"),n("2877")),o={},a=Object(s["a"])(o,r,i,!1,null,"29cbeb18",null);e["a"]=a.exports},a55b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Center",[n("form",{staticClass:"login-container",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("div",{staticClass:"form-item"},[n("div",{staticClass:"input"},[n("label",[t._v("账号：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.loginId,expression:"userInfo.loginId"}],attrs:{type:"text"},domProps:{value:t.userInfo.loginId},on:{input:[function(e){e.target.composing||t.$set(t.userInfo,"loginId",e.target.value)},function(e){return t.validateEmpty("loginId","账号不能为空")}]}})]),n("FormError",{attrs:{msg:t.error.loginId}})],1),n("div",{staticClass:"form-item"},[n("div",{staticClass:"input"},[n("label",[t._v("密码：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.loginPwd,expression:"userInfo.loginPwd"}],attrs:{type:"password",autocomplete:"new-password"},domProps:{value:t.userInfo.loginPwd},on:{input:[function(e){e.target.composing||t.$set(t.userInfo,"loginPwd",e.target.value)},function(e){return t.validateEmpty("loginPwd","密码不能为空")}]}})]),n("FormError",{attrs:{msg:t.error.loginPwd}})],1),n("div",{staticClass:"form-item"},[n("div",{staticClass:"input"},[n("label"),n("button",[t._v(" "+t._s(t.$store.state.loginUser.isLoading?"isLoading...":"登录")+" ")])])])])])},i=[],s=(n("96cf"),n("1da1")),o=n("4181"),a=n("1859"),u=(n("fef9"),{components:{Center:o["a"],FormError:a["a"]},data:function(){return{userInfo:{loginId:"",loginPwd:""},error:{loginId:"",loginPwd:""}}},methods:{validateEmpty:function(t,e){return this.userInfo[t]?(this.error[t]="",!0):(this.error[t]=e,!1)},handleSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$store.state.loginUser.isLoading){e.next=2;break}return e.abrupt("return");case 2:if(n=t.validateEmpty("loginId","账号不能为空"),r=t.validateEmpty("loginPwd","密码不能为空"),!n||!r){e.next=9;break}return e.next=7,t.$store.dispatch("loginUser/login",t.userInfo);case 7:i=e.sent,i?t.$router.push({name:"Home"}):t.error.loginId="账号/密码不正确";case 9:case"end":return e.stop()}}),e)})))()}}}),l=u,c=(n("1a36"),n("2877")),d=Object(c["a"])(l,r,i,!1,null,"2e504d30",null);e["default"]=d.exports},ad79:function(t,e,n){},b015:function(t,e,n){},bef7:function(t,e,n){},c14c:function(t,e,n){"use strict";var r=n("b015"),i=n.n(r);i.a},e389:function(t,e,n){"use strict";var r=n("ad79"),i=n.n(r);i.a}}]);
//# sourceMappingURL=chunk-bfeda8c2.ceacb6fe.js.map