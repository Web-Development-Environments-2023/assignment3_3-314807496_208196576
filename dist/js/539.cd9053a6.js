"use strict";(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[539],{7539:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[e._v("Main Page")]),t("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{title:"My Recipes"}}),e.$root.store.username?e._e():t("router-link",{attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to vue this")])],1)},a=[],i=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),t("b-row",e._l(e.recipes,(function(e){return t("b-col",{key:e.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},s=[],o=r(6835),c=r(6347),u=r(8534),l=(r(7658),r(291));const p={name:"RecipePreviewList",components:{RecipePreview:l.Z},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return(0,u.Z)((0,o.Z)().mark((function t(){var r,n,a,i,s,u,l,p,d,v,f,h,g,m,w,_;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("server_domain "+e.$root.store.server_domain),e.axios.defaults.withCredentials=!0,t.next=5,e.axios.get(e.$root.store.server_domain+"/users/myRecipes",{withCredentials:!0});case 5:n=t.sent,a=n.data,i=[],s=(0,c.Z)(a),t.prev=9,s.s();case 11:if((u=s.n()).done){t.next=20;break}return u.value,t.next=15,e.axios.get(e.$root.store.server_domain+"/recipes/"+e.$route.params.recipeId,{withCredentials:!0});case 15:l=t.sent,p=l.data,d=p.id,v=p.title,f=p.readyInMinutes,h=p.image,g=p.aggregateLikes,m=p.vegan,w=p.vegetarian,_=p.glutenFree,i.push({id:d,title:v,readyInMinutes:f,image:h,aggregateLikes:g,vegan:m,vegetarian:w,glutenFree:_});case 18:t.next=11;break;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](9),s.e(t.t0);case 25:return t.prev=25,s.f(),t.finish(25);case 28:e.recipes=[],(r=e.recipes).push.apply(r,i),t.next=35;break;case 32:t.prev=32,t.t1=t["catch"](0),console.log(t.t1);case 35:case"end":return t.stop()}}),t,null,[[0,32],[9,22,25,28]])})))()}}},d=p;var v=r(1001),f=(0,v.Z)(d,i,s,!1,null,"d90d56d6",null);const h=f.exports,g={components:{RecipePreviewList:h}},m=g;var w=(0,v.Z)(m,n,a,!1,null,"09895a3c",null);const _=w.exports},6347:(e,t,r)=>{r.d(t,{Z:()=>a});r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(9753),r(1703),r(6647);var n=r(2780);function a(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=(0,n.Z)(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){c=!0,s=e},f:function(){try{o||null==r["return"]||r["return"]()}finally{if(c)throw s}}}}}}]);
//# sourceMappingURL=539.cd9053a6.js.map