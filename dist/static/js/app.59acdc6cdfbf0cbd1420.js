webpackJsonp([1],{"9Oc5":function(o,t){},NHnr:function(o,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("div",{attrs:{id:"app"}},[a("img",{staticClass:"log",attrs:{src:n("st18")},on:{click:function(t){o.searcFn(o.val)}}}),o._v(" "),a("h1",[o._v(o._s(o.msg))]),o._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:o.val,expression:"val"}],attrs:{type:"text",name:"bookIndex",placeholder:"  书名、作者、ISBN"},domProps:{value:o.val},on:{input:function(t){t.target.composing||(o.val=t.target.value)}}}),o._v(" "),a("button",{attrs:{disabled:!o.val},on:{click:function(t){o.searcFn(o.val)}}},[o._v(" 搜索 ")]),o._v(" "),a("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App",data:function(){return{msg:"《*\\ 豆瓣书城 /*》",val:""}},methods:{searcFn:function(o){o=o||"南极",this.$router.push({path:"/bookinfo/"+o})}},created:function(){this.$router.push({path:"/booklist/南极"})}},s,!1,function(o){n("n/+9")},null,null).exports,e=n("/ocq"),r=n("qJdI"),c=n.n(r);a.a.use(c.a);var l={name:"BookInfo",data:function(){return{bookd:{},param:""}},beforeCreate:function(){var o=this;setInterval(function(){o.param=o.$route.params.id},20)},methods:{booklist:function(o){this.$router.push({path:"/booklist/"+o})}},watch:{param:function(){var o=this;o.param=o.$route.params.id,a.a.jsonp("https://api.douban.com/v2/book/"+o.param).then(function(t){o.bookd=t}).catch(function(t){a.a.jsonp("https://api.douban.com/v2/book/isbn/"+o.param).then(function(t){o.bookd=t}).catch(function(t){o.$router.push({path:"/booklist/"+o.param})})})}}},u={render:function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"hello"},["{}"!=JSON.stringify(o.bookd)?n("div",{staticClass:"box"},[n("div",[n("h2",{staticClass:"color_yg"},[o._v(o._s(o.bookd.title))]),o._v(" "),n("ul",[n("li",[n("img",{attrs:{id:"bookPic",src:o.bookd.image}})]),o._v(" "),n("li",[n("p",[o._v("作者：\n            "),o._l(o.bookd.author,function(t){return n("a",{on:{click:function(n){o.booklist(t)}}},[o._v(" "+o._s(t)+" \n            ")])})],2),o._v(" "),n("p",[o._v("出版社："+o._s(o.bookd.publisher))]),o._v(" "),n("p",[o._v("译者：\n            "),o._l(o.bookd.translator,function(t){return n("span",[o._v(" "+o._s(t))])})],2),o._v(" "),n("p",[o._v("出版年："+o._s(o.bookd.pubdate))]),o._v(" "),n("p",[o._v("页数："+o._s(o.bookd.pages))]),o._v(" "),n("p",[o._v("定价："+o._s(o.bookd.price))]),o._v(" "),n("p",[o._v("装帧："+o._s(o.bookd.binding))]),o._v(" "),n("p",[o._v("丛书ISBN："+o._s(o.bookd.isbn13))])])]),o._v(" "),n("h3",{staticClass:"color_yg"},[o._v("内容简介-----")]),o._v(" "),n("div",[n("pre",[o._v(o._s(o.bookd.summary))])]),o._v(" "),n("h3",{staticClass:"color_yg"},[o._v("作者简介-----")]),o._v(" "),n("div",[n("pre",[o._v(o._s(o.bookd.author_intro))])]),o._v(" "),n("h3",{staticClass:"color_yg"},[o._v("目录-----")]),o._v(" "),n("div",[n("pre",[o._v(o._s(o.bookd.catalog))])]),o._v(" "),n("h3",{staticClass:"color_yg"},[o._v("豆瓣成员常用的标签(共22个) -----")]),o._v(" "),n("div",[n("ul",o._l(o.bookd.tags,function(t){return n("li",{staticClass:"paddin_3"},[n("a",{staticClass:"backColor",on:{click:function(n){o.booklist(t.title)}}},[o._v(o._s(t.title))])])}))])])]):o._e()])},staticRenderFns:[]};var v=n("VU/8")(l,u,!1,function(o){n("9Oc5")},"data-v-75667a1b",null).exports;a.a.use(c.a);var p={name:"BookList",data:function(){return{bookd:[],param:""}},beforeCreate:function(){var o=this;o.param=o.$route.params.key,a.a.jsonp("https://api.douban.com/v2/book/search?q="+o.param).then(function(t){console.log(t,"*-*-*-*-"),o.bookd=t.books}).catch(function(o){console.log("error...",o)})},methods:{bookinfo:function(o){this.$router.push({path:"/bookinfo/"+o})}}},_={render:function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"hello"},[n("div",{staticClass:"box"},[n("ul",o._l(o.bookd,function(t){return n("li",[n("div",{staticClass:"bookPic"},[n("img",{attrs:{src:t.image},on:{click:function(n){o.bookinfo(t.id)}}})]),o._v(" "),n("p",{staticClass:"p_width"},[n("a",{on:{click:function(n){o.bookinfo(t.id)}}},[o._v(o._s(t.title))])]),o._v(" "),n("p",{staticClass:"p_width"},o._l(t.author,function(t){return n("span",{on:{click:function(n){o.booklist(t)}}},[o._v(" "+o._s(t)+" \n          ")])}))])}))])])},staticRenderFns:[]};var d=n("VU/8")(p,_,!1,function(o){n("osGe")},"data-v-53bf447c",null).exports;a.a.use(e.a);var b=new e.a({routes:[{path:"/bookinfo/:id",name:"bookinfo",component:v},{path:"/booklist/:key",name:"booklist",component:d}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:b,components:{App:i},template:"<App/>"})},"n/+9":function(o,t){},osGe:function(o,t){},st18:function(o,t,n){o.exports=n.p+"static/img/book.67737f2.jpg"}},["NHnr"]);
//# sourceMappingURL=app.59acdc6cdfbf0cbd1420.js.map