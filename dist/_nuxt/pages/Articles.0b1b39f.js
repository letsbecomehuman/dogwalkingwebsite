(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{216:function(t,e,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("82c5670e",content,!0,{sourceMap:!1})},231:function(t,e,n){"use strict";var r=n(216);n.n(r).a},232:function(t,e,n){(e=n(34)(!1)).push([t.i,".container[data-v-236953ac]{margin-top:120px}.row[data-v-236953ac],.spinner-border[data-v-236953ac]{margin-top:40px}.card[data-v-236953ac]{text-align:left;color:#000}",""]),t.exports=e},243:function(t,e,n){"use strict";n.r(e);var r={name:"md-heart-icon",mixins:[n(65).a],data:function(){return{iconTitle:this.title?this.title:"Md Heart Icon"}}},o=n(26),l={components:{HeartIcon:Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ion",class:this.ionClass,attrs:{"data-title":this.iconTitle,"data-name":"md-heart-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:this.w,height:this.h}},[e("path",{attrs:{d:"M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"}})])])}),[],!1,null,null,null).exports},data:function(){return{showLoader:!0,showErrALert:!1,tagVariants:["primary","success","warning","info","dark","danger"],blogs:[]}},head:{title:"Recent Articles 📚 - Asaolu Elijah",meta:[{hid:"description",name:"description",content:"Read articles written by Asaolu Elijah, articles include topics under web development (html, css, javascript), mobile app development and many more."},{hid:"og:title",name:"og:title",content:"Recent Articles 📚 - Asaolu Elijah"},{property:"og:description",content:"Read articles written by Asaolu Elijah, articles include topics under web development (html, css, javascript), mobile app development and many more."}]},methods:{getArticles:function(t,e,n){var r,o=this;fetch("https://dev.to/api/articles?username="+t).then((function(t){return t.json()})).then((function(data){data.forEach((function(article){r=1==/(hcti.io)/.test(article.image)?"https://picsum.photos/600/400":article.social_image,o.blogs.push({id:article.id,title:article.title,desc:article.description,image:r,url:article.url,date:article.readable_publish_date,tags:article.tag_list,imgAlt:article.title+" - Asaolu Elijah"})})),e()})).catch((function(t){n(),console.log("Error fetching articles "+t)}))}},mounted:function(){var t=this;this.getArticles("asaoluelijah",(function(){t.showLoader=!1}),(function(){t.showErrALert=!0,t.showLoader=!1}))}},c=(n(231),Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"page  animate__animated animate__fadeIn"},[n("h2",[t._v("Recent Articles")]),t._v(" "),n("p",[t._v("\n    Hosted with\n    "),n("sub",[n("HeartIcon",{staticStyle:{color:"red","font-size":"24px"},attrs:{animate:"beat"}})],1),t._v("\n    on\n    "),n("em",[n("a",{attrs:{href:"https://dev.to/asaoluelijah",target:"_blank",rel:"noopener"}},[t._v("dev.to")])]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),t.showErrALert?n("b-alert",{staticStyle:{display:"inline-block"},attrs:{show:"",variant:"danger"}},[t._v("\n      Error loading articles, click\n      "),n("a",{attrs:{href:"https://dev.to/asaoluelijah",target:"_blank"}},[t._v("here")]),t._v(" to read\n      'em instaed.\n    ")]):t._e(),t._v(" "),t.showLoader?n("b-spinner",{attrs:{variant:"primary"}}):t._e()],1),t._v(" "),t.blogs.length>0?n("b-row",{staticClass:"articles"},t._l(t.blogs,(function(e){return n("div",{key:e.id,staticClass:"col-md-6"},[n("div",[n("b-card-group",{attrs:{deck:""}},[n("b-card",{staticClass:"mb-2",attrs:{"img-src":e.image,"img-alt":e.imgAlt,"img-top":"",tag:"article"}},[n("h4",[t._v(t._s(e.title))]),t._v(" "),t._l(e.tags,(function(e){return n("b-badge",{key:e,staticClass:"animate__animated animate__fadeInUp",staticStyle:{margin:"2px"},attrs:{pill:"",variant:t.tagVariants[Math.floor(Math.random()*t.tagVariants.length)]}},[t._v("#"+t._s(e))])})),t._v(" "),n("hr"),t._v(" "),n("b-card-text",[t._v(t._s(e.desc))]),t._v(" "),n("b-button",{attrs:{href:e.url,target:"_blank",rel:"noopener",variant:"default"}},[t._v("Read More..")])],2)],1)],1)])})),0):t._e()],1)}),[],!1,null,"236953ac",null));e.default=c.exports}}]);