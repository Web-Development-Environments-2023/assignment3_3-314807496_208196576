"use strict";(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[644],{9644:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{title:"Favorite Recipes"}}),e.$root.store.username?e._e():t("router-link",{attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to vue this")])],1)},n=[],i=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),t("ul",e._l(e.recipes,(function(e){return t("li",{key:e.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),0)])},o=[],a=r(6835),c=r(5957),u=r(8534),l=(r(7658),r(7668));const p={name:"RecipePreviewList",components:{RecipePreview:l.Z},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return(0,u.Z)((0,a.Z)().mark((function t(){var r,s,n;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("server_domain "+e.$root.store.server_domain),t.next=4,e.axios.get(e.$root.store.server_domain+"/users/favorites",{withCredentials:!0});case 4:s=t.sent,n=s.data,(r=e.recipes).push.apply(r,(0,c.Z)(n)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},v=p;var d=r(1001),_=(0,d.Z)(v,i,o,!1,null,"21052d34",null);const f=_.exports,h={components:{RecipePreviewList:f}},m=h;var w=(0,d.Z)(m,s,n,!1,null,"14e98150",null);const R=w.exports}}]);
//# sourceMappingURL=644.66113659.js.map