(function(t){function e(e){for(var i,s,l=e[0],o=e[1],c=e[2],p=0,d=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);v&&v(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},r=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/portfolio/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var v=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1182:function(t,e,a){},"34ba":function(t,e,a){"use strict";a("1182")},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("AppBar"),a("router-view",{key:t.$route.fullPath})],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar"},[a("v-app-bar",{style:{marginLeft:t.marginLeftRight+"%",marginRight:t.marginLeftRight+"%"},attrs:{absolute:"",flat:"",short:"",color:"#387c6d","clipped-left":""}},[a("div",{staticClass:"hidden-md-and-down"},[a("v-btn",{staticClass:"header-text",attrs:{text:"",large:"",href:"#main"}},[t._v("Main")]),a("v-btn",{staticClass:"header-text",attrs:{text:"",large:"",href:"#profile"}},[t._v("Profile")]),a("v-btn",{staticClass:"header-text",attrs:{text:"",large:"",href:"#exp"}},[t._v("Experiences")]),a("v-btn",{staticClass:"header-text",attrs:{text:"",large:"",href:"#act"}},[t._v("Activities")])],1),a("div",{staticClass:"hidden-lg-and-up"},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1)]),a("v-navigation-drawer",{attrs:{absolute:"",app:"",right:"",width:"500",dark:"",color:"#387c6d"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"black--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[a("v-col",[a("v-btn",{staticClass:"header-text",attrs:{text:"",large:"",href:"#main"}},[t._v("Main")])],1),a("v-col",[a("v-btn",{staticClass:"header-text",attrs:{text:"",large:"",href:"#profile"}},[t._v("Profile")])],1),a("v-col",[a("v-btn",{staticClass:"header-text",attrs:{text:"",large:"",href:"#exp"}},[t._v("Experiences")])],1),a("v-col",[a("v-btn",{staticClass:"header-text",attrs:{text:"",large:"",href:"#act"}},[t._v("Activities")])],1)],1)],1)],1)],1)},l=[],o={data:function(){return{drawer:!1}},computed:{marginLeftRight(){switch(this.$vuetify.breakpoint.name){case"xs":return 5;case"sm":return 5;case"md":case"lg":case"xl":return 10;default:return 5}}}},c=o,v=(a("34ba"),a("2877")),p=a("6544"),d=a.n(p),u=a("40dc"),m=a("5bc1"),f=a("8336"),h=a("62ad"),g=a("8860"),y=a("1baa"),_=a("f774"),x=Object(v["a"])(c,s,l,!1,null,null,null),b=x.exports;d()(x,{VAppBar:u["a"],VAppBarNavIcon:m["a"],VBtn:f["a"],VCol:h["a"],VList:g["a"],VListItemGroup:y["a"],VNavigationDrawer:_["a"]});var C={name:"App",components:{AppBar:b},data:()=>({})},w=C,k=a("7496"),S=Object(v["a"])(w,n,r,!1,null,null,null),A=S.exports;d()(S,{VApp:k["a"]});var M=a("8c4f"),P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("link",{attrs:{rel:"preconnect",href:"https://fonts.gstatic.com"}}),i("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap",rel:"stylesheet"}}),i("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300&display=swap",rel:"stylesheet"}}),i("div",{staticStyle:{"margin-top":"20px"}},[i("div",{staticStyle:{padding:"60px 0"},attrs:{id:"main"}},[i("v-lazy",{attrs:{"min-height":"200",transition:"scroll-x-transition"},model:{value:t.lazyMain,callback:function(e){t.lazyMain=e},expression:"lazyMain"}},[i("v-container",{staticClass:"container"},[i("v-sheet",{attrs:{elevation:12}},[i("v-row",{staticStyle:{padding:"70px 0"},attrs:{justify:"center"}},[i("v-col",{staticClass:"orange_container",attrs:{"align-self":"center",justify:"space-around",cols:"12",md:"12",lg:"6"}},[i("v-container",{staticClass:"container"},[i("h1",{staticClass:"main_title"},[t._v("Welcome to My Portfolio")]),i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-icon",[t._v(" mdi-account ")])],1),i("v-list-item-content",[i("h2",{staticClass:"main_item_text"},[t._v("Mok Wang Quan")])])],1),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",[t._v(" mdi-cake-variant ")])],1),i("v-list-item-content",[i("h2",{staticClass:"main_item_text"},[t._v("12 June 1996")])])],1),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",[t._v(" mdi-map-marker ")])],1),i("v-list-item-content",[i("h2",{staticClass:"main_item_text"},[t._v("Kuala Lumpur, Malaysia")])])],1),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",[t._v(" mdi-email ")])],1),i("v-list-item-content",[i("h2",{staticClass:"main_item_text"},[t._v("mokwangquan@gmail.com")])])],1)],1),i("v-spacer")],1)],1),i("v-col",{attrs:{cols:"12",lg:"4"}},[i("img",{attrs:{src:a("d139"),alt:"Main Image"}})])],1)],1)],1)],1)],1),i("div",{staticStyle:{padding:"60px 0"},attrs:{id:"profile"}},[i("v-container",{staticClass:"container"},[i("v-row",{staticClass:"container",attrs:{justify:"center"}},[i("v-col",{attrs:{"align-self":"start",justify:"space-around",cols:"12",md:"12",lg:"6"}},[i("v-lazy",{attrs:{"min-height":"200",transition:"scroll-x-transition"},model:{value:t.lazyProfile,callback:function(e){t.lazyProfile=e},expression:"lazyProfile"}},[i("v-sheet",{staticClass:"mx-auto",attrs:{elevation:12}},[i("v-row",[i("v-col",{staticClass:"orange_container"},[i("v-container",[i("h1",[t._v("Profile")]),i("v-list",{attrs:{subheader:"","two-line":""}},[i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-certificate ")])],1),i("v-list-item-content",[i("h3",[t._v("Educations")]),i("p",[t._v(" Bachelor of Engineering (Honours) Mechanical Engineering - CGPA 2.93 ")]),i("p",[t._v(" Malaysian University English Test (MUET) - Band 4 ")]),i("p",[t._v("in University of Tunku Abdel Rahman (UTAR)")])])],1),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-keyboard ")])],1),i("v-list-item-content",[i("h3",[t._v("Programming Language")]),i("p",[t._v("Java")]),i("p",[t._v("JavaScript")]),i("p",[t._v("CSS")]),i("p",[t._v("HTML")])])],1),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-keyboard ")])],1),i("v-list-item-content",[i("h3",[t._v("Framework")]),i("p",[t._v("Grails")]),i("p",[t._v("Vue JS")])])],1),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-laptop ")])],1),i("v-list-item-content",[i("h3",[t._v("Operating System")]),i("p",[t._v("Kali Linux")]),i("p",[t._v("Ubuntu")])])],1)],1)],1)],1)],1)],1)],1)],1),i("v-col",{attrs:{"align-self":"start",justify:"space-around",cols:"12",md:"12",lg:"6"}},[i("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"scroll-x-reverse-transition"},model:{value:t.lazyProfile,callback:function(e){t.lazyProfile=e},expression:"lazyProfile"}},[i("v-sheet",{staticClass:"mx-auto",attrs:{elevation:12}},[i("v-row",{attrs:{justify:"center","align-content":"end"}},[i("v-col",{staticClass:"orange_container",attrs:{justify:"center","align-self":"end"}},[i("v-container",{attrs:{justify:"space-around"}},[i("br"),i("br"),i("br"),i("v-list",{attrs:{subheader:"","two-line":""}},[i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-access-point ")])],1),i("v-list-item-content",[i("h3",[t._v("Networking")]),i("p",[t._v("CCNA")])])],1),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-web ")])],1),i("v-list-item-content",[i("h3",[t._v("Servers")]),i("p",[t._v("Apache WebServer")]),i("p",[t._v("IBM WebSphere")]),i("p",[t._v("Apache Tomcat")])])],1),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-database ")])],1),i("v-list-item-content",[i("h3",[t._v("Database")]),i("p",[t._v("Oracle Database")]),i("p",[t._v("IBM DB2 Database")]),i("p",[t._v("MySQL Database")])])],1),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-dots-horizontal ")])],1),i("v-list-item-content",[i("h3",[t._v("Miscellaneous Software")]),i("p",[t._v("Docker")]),i("p",[t._v("Apache Jmeter")]),i("p",[t._v("Apache Camel")]),i("p",[t._v("Microsoft Office")])])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),i("div",{staticStyle:{padding:"60px 0"},attrs:{id:"exp"}},[i("v-container",{staticClass:"container"},[i("v-lazy",{attrs:{"min-height":"200",transition:"scroll-x-reverse-transition"},model:{value:t.lazyExp,callback:function(e){t.lazyExp=e},expression:"lazyExp"}},[i("v-sheet",{staticClass:"mx-auto",attrs:{elevation:12}},[i("v-row",[i("v-col",[i("v-container",[i("h1",[t._v("Experiences")]),i("v-timeline",t._l(t.exps,(function(e,a){return i("v-timeline-item",{key:a,attrs:{color:e.color,large:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[i("p",[t._v(t._s(e.year))])]},proxy:!0}],null,!0)},[i("v-card",[i("h3",{staticClass:"orange_container",staticStyle:{"text-align":"center"}},[t._v(" "+t._s(e.title)+" ")]),i("v-card-text",{staticStyle:{"text-align":"center"}},[i("p",{staticStyle:{"margin-top":"10px"}},[t._v(" "+t._s(e.desc1)+" ")]),i("p",[t._v(" "+t._s(e.desc2)+" ")]),i("p",[t._v(" "+t._s(e.desc3)+" ")])])],1)],1)})),1)],1)],1)],1)],1)],1)],1)],1),i("div",{staticStyle:{padding:"60px 0"},attrs:{id:"act"}},[i("v-container",{staticClass:"container"},[i("v-lazy",{attrs:{"min-height":"200",transition:"scroll-x-transition"},model:{value:t.lazyAct,callback:function(e){t.lazyAct=e},expression:"lazyAct"}},[i("v-sheet",{staticClass:"mx-auto",attrs:{elevation:12}},[i("v-row",[i("v-col",[i("v-container",[i("h1",[t._v("Activities")]),i("v-timeline",t._l(t.activities,(function(e,a){return i("v-timeline-item",{key:a,attrs:{color:e.color},scopedSlots:t._u([{key:"opposite",fn:function(){return[i("v-card",[i("h2",{staticClass:"orange_container",staticStyle:{"text-align":"center"}},[t._v(" "+t._s(e.title)+" ")]),i("v-card-text",{staticStyle:{"text-align":"center"}},[i("v-icon",[t._v("mdi-account-circle-outline")]),i("h3",{staticStyle:{"text-decoration":"none"}},[t._v(" "+t._s(e.desc)+" ")])],1)],1)]},proxy:!0}],null,!0)})})),1)],1)],1)],1)],1)],1)],1)],1)])])},V=[],z={data:function(){return{lazyMain:!1,lazyProfile:!1,lazyExp:!1,lazyAct:!1,exps:[{color:"cyan",year:"Aug 2017 - Dec 2017",title:"Infineon Technologies (Internship)",desc1:"Machine Power Consumption monitoring",desc2:"Piping Distribution Drawing using AutoCAD"},{color:"green",year:"Jan 2019 - Jan 2020",title:"Lammannss Art Gallery",desc1:"Musical instrument teaching (GuZheng)",desc2:"Event planning assisting",desc3:"Competition (Silver Award)"},{color:"pink",year:"July 2020 - Sept 2020",title:"Web Developer (Part Time)",desc1:"Web Developing with",desc2:"VuetifyJS and VueJS",desc3:""},{color:"amber",year:"Sept 2020 - Present",title:"iMocha Sdn Bhd",desc1:"Software Engineer",desc2:"DevOps Team",desc3:"FinTech"}],activities:[{color:"cyan",title:"Engineering Fiesta",desc:"Editorial Assitant"},{color:"green",title:"Japan Concert Tour",desc:"Chairperson"},{color:"pink",title:"Kobe Male Choir Concert",desc:"Secretary"},{color:"amber",title:"UTAR - Doshisha Joint Concert",desc:"Secretary"}]}},methods:{},computed:{}},j=z,E=(a("89f1"),a("b0af")),O=a("99d9"),T=a("a523"),L=a("132d"),D=a("b687"),J=a("da13"),B=a("8270"),I=a("5d23"),R=a("f6c4"),U=a("0fd9"),W=a("8dd9"),$=a("2fa4"),G=a("8414"),N=a("1e06"),F=Object(v["a"])(j,P,V,!1,null,null,null),H=F.exports;d()(F,{VCard:E["a"],VCardText:O["a"],VCol:h["a"],VContainer:T["a"],VIcon:L["a"],VLazy:D["a"],VList:g["a"],VListItem:J["a"],VListItemAvatar:B["a"],VListItemContent:I["a"],VMain:R["a"],VRow:U["a"],VSheet:W["a"],VSpacer:$["a"],VTimeline:G["a"],VTimelineItem:N["a"]}),i["a"].use(M["a"]);const K=[{path:"/",name:"Home",component:H}],Q=new M["a"]({mode:"history",base:"/portfolio/",routes:K});var q=Q,Z=a("2f62");i["a"].use(Z["a"]);var X=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Y=a("f309");i["a"].use(Y["a"]);var tt=new Y["a"]({});i["a"].config.productionTip=!1,new i["a"]({router:q,store:X,vuetify:tt,render:function(t){return t(A)}}).$mount("#app")},"89f1":function(t,e,a){"use strict";a("fca2")},d139:function(t,e,a){t.exports=a.p+"img/profilePic.54e17ff1.jpeg"},fca2:function(t,e,a){}});
//# sourceMappingURL=app.96c33fea.js.map