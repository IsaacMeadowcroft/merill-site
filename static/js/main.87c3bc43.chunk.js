(this["webpackJsonpmerill-site"]=this["webpackJsonpmerill-site"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},111:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(21),a=n.n(c),r=n(9),l=(n(99),n(118)),d=n(119),o=n(80),j=n(120),b=(n(24),n.p+"static/media/LandingPage.ba31465c.jpg"),O=n(2);var u=function(e){return e.dimensions.width>=768?Object(O.jsx)(l.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px",paddingTop:"4vh"},id:"Home",children:Object(O.jsxs)(d.a,{md:3,style:{margin:"0px"},children:[Object(O.jsx)(o.a,{md:5,style:{padding:"0px"},children:Object(O.jsx)(j.a,{src:b,fluid:!0})}),Object(O.jsxs)(o.a,{md:4,style:{paddingTop:"4vw"},children:[Object(O.jsx)(d.a,{className:"name",children:"MERILL"}),Object(O.jsx)(d.a,{className:"name",children:"BOBOTIS"}),Object(O.jsx)(d.a,{className:"bar"}),Object(O.jsx)(d.a,{className:"profession",children:"Visual Artist"})]}),Object(O.jsx)(o.a,{md:3,style:{paddingLeft:"17vw",paddingTop:"2vw",paddingRight:"1vw"},id:"Home"})]})}):Object(O.jsxs)(l.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px",paddingTop:"4vh"},id:"Home",children:[Object(O.jsx)(j.a,{src:b,fluid:!0}),Object(O.jsx)(d.a,{className:"name name-mobile",style:{margin:"0px"},children:Object(O.jsx)("p",{className:"text-center",children:"MERILL BOBOTIS"})}),Object(O.jsx)(d.a,{className:"bar-wrapper",style:{margin:"0px"},children:Object(O.jsx)("div",{className:"bar-mobile"})}),Object(O.jsx)(d.a,{className:"name",style:{margin:"0px"},children:Object(O.jsx)("p",{className:"profession-mobile text-center",children:"Visual Artist"})})]})},x=n(66),h=n.n(x),m=n(81),p=(n(104),n(70),n(129)),g=n(3),f=n(124),v=n(127),w=n(125),y=n(121);var k=function(e){var t=Object(i.useState)(e.item.price),n=Object(r.a)(t,2),s=n[0],c=n[1];return Object(O.jsxs)(f.a,Object(g.a)(Object(g.a)({},e),{},{dialogClassName:"modal-90w","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(O.jsx)(f.a.Header,{closeButton:!0,children:Object(O.jsx)(f.a.Title,{id:"contained-modal-title-vcenter",children:e.item.title})}),Object(O.jsx)(f.a.Body,{children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(o.a,{sm:12,md:4,children:Object(O.jsxs)(v.a,{fade:!0,children:[Object(O.jsx)(v.a.Item,{children:Object(O.jsx)("img",{className:"d-block w-100",src:b,alt:"First slide"})}),Object(O.jsx)(v.a.Item,{children:Object(O.jsx)("img",{className:"d-block w-100",src:b,alt:"Second slide"})}),Object(O.jsx)(v.a.Item,{children:Object(O.jsx)("img",{className:"d-block w-100",src:b,alt:"Third slide"})})]})}),Object(O.jsxs)(o.a,{sm:12,md:8,children:[Object(O.jsx)(d.a,{children:Object(O.jsx)("p",{children:e.item.description})}),Object(O.jsx)(d.a,{children:Object(O.jsx)(w.a,{children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)(w.a.Check,{defaultChecked:!0,inline:!0,label:"Small",name:"group1",type:"radio",onChange:function(){c(e.item.price)}}),Object(O.jsx)(w.a.Check,{inline:!0,label:"Medium",name:"group1",type:"radio",onChange:function(){c(2*e.item.price)}}),Object(O.jsx)(w.a.Check,{inline:!0,label:"Large",name:"group1",type:"radio",onChange:function(){c(3*e.item.price)}})]})})}),Object(O.jsxs)("h6",{children:["$",s]}),Object(O.jsxs)(d.a,{children:[Object(O.jsx)(o.a,{sm:6,children:Object(O.jsx)(y.a,{variant:"warning",style:{width:"100%"},children:"Add to Cart"})}),Object(O.jsx)(o.a,{sm:6,children:Object(O.jsx)(y.a,{variant:"dark",style:{width:"100%"},children:"Buy Now"})})]})]})]})})]}))};var C=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),s=n[0],c=n[1],a=Object(i.useState)(!1),l=Object(r.a)(a,2),d=l[0],o=l[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(p.a,{className:"card-styles",onMouseOver:function(){return c(!0)},onMouseLeave:function(){return c(!1)},onClick:function(){return o(!0)},children:[Object(O.jsx)(p.a.Img,{variant:"top",src:b,style:s?{filter:"brightness(20%)"}:{filter:"brightness(100%)"}}),s?Object(O.jsxs)(p.a.ImgOverlay,{children:[Object(O.jsxs)(p.a.Title,{children:[e.item.title.substring(0,35),"..."]}),Object(O.jsxs)(p.a.Text,{children:[e.item.description.substring(0,100),"..."]}),Object(O.jsxs)("h6",{children:["$",e.item.price]})]}):Object(O.jsx)(O.Fragment,{})]}),Object(O.jsx)(k,{item:e.item,show:d,onHide:function(){return o(!1)},dimensions:e.dimensions,scrollPosition:e.scrollPosition})]})},P=n(122),N=n(50),L=function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var T=function(e){var t=Object(N.useQuery)("products",L),n=t.data,i=t.isLoading,s=t.error;return i?Object(O.jsx)(P.a,{animation:"border",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):s?Object(O.jsx)("div",{children:"Something went wrong... "}):Object(O.jsx)(l.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px"},id:"Prints",children:Object(O.jsx)(d.a,{style:{width:"100%",margin:"0px"},children:null===n||void 0===n?void 0:n.map((function(t){return Object(O.jsx)(o.a,{md:4,style:{padding:"0px"},children:Object(O.jsx)(C,{item:t,dimensions:e.dimensions,scrollPosition:e.scrollPosition})})}))})})};n(105);var I=function(e){return Object(O.jsx)(l.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px"},id:"Portfolio"})};n(106);var S=function(e){return Object(O.jsx)(l.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px"},id:"About"})};n(107);var B=function(e){return Object(O.jsx)(l.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px"},id:"Portfolio"})},H=(n(108),n(83)),F=n(128),A=n(126),E=n(123),M=n(0);var R=function(e){return Object(O.jsx)(F.a,{fixed:"top",variant:"dark",style:{padding:"0px"},children:Object(O.jsxs)(A.a,{navbar:!0,fill:!0,className:e.dimensions.width<=429?"nav-styles-sm":"nav-styles-md",style:e.scrollPosition>100?{backgroundColor:"rgb(39, 39, 39)"}:{backgroundColor:"transparent"},children:[Object(O.jsx)(A.a.Link,{href:"#Home",children:"HOME"}),Object(O.jsx)(A.a.Link,{href:"#Prints",children:"PRINTS"}),Object(O.jsx)(A.a.Link,{href:"#Portfolio",children:"PORTFOLIO"}),Object(O.jsx)(A.a.Link,{href:"#About",children:"ABOUT"}),Object(O.jsx)(A.a.Link,{href:"Cart",className:"nav-bag",style:{verticalAlign:"middle",position:"relative",padding:"0px",margin:"0px"},children:Object(O.jsxs)(M.b.Provider,{value:{style:{verticalAlign:"middle",height:"100%",overflow:"visible"}},children:[Object(O.jsx)(H.a,{}),Object(O.jsx)("h6",{children:Object(O.jsx)(E.a,{pill:!0,bg:"warning",text:"dark",style:{fontFamily:"Helvetica Neue",position:"absolute",top:"3px",left:"52%"},children:3})})]})})]})})};n(111);var Q=function(e){return Object(O.jsx)(l.a,{fluid:!0,style:{backgroundColor:"red"},id:"Cart"})},J=n(84),V=n(15),W=new N.QueryClient;var $=function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)({height:window.innerHeight,width:window.innerWidth}),a=Object(r.a)(c,2),l=a[0],d=a[1];function o(){s(window.pageYOffset)}function j(){d({height:window.innerHeight,width:window.innerWidth})}return Object(i.useEffect)((function(){window.addEventListener("scroll",o)}),[n]),Object(i.useEffect)((function(){window.addEventListener("resize",j)}),[l]),Object(O.jsx)(N.QueryClientProvider,{client:W,children:Object(O.jsx)(J.a,{children:Object(O.jsxs)(V.c,{children:[Object(O.jsxs)(V.a,{exact:!0,path:"/",children:[Object(O.jsx)(R,{dimensions:l,scrollPosition:n}),Object(O.jsx)(u,{dimensions:l,scrollPosition:n}),Object(O.jsx)(T,{dimensions:l,scrollPosition:n}),Object(O.jsx)(I,{dimensions:l,scrollPosition:n}),Object(O.jsx)(S,{dimensions:l,scrollPosition:n}),Object(O.jsx)(B,{dimensions:l,scrollPosition:n})]}),Object(O.jsx)(V.a,{path:"/Cart",children:Object(O.jsx)(Q,{dimensions:l,scrollPosition:n})})]})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};a.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)($,{})}),document.getElementById("root")),z()},70:function(e,t,n){},99:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.87c3bc43.chunk.js.map