(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"id":1,"name":"tech blog","image":"https://github.com/jessibewu/react-portfolio/raw/master/src/assets/images/tech-blog.png","github":"https://github.com/jessibewu/tech-blog","deploy":"https://fierce-meadow-83766.herokuapp.com/","topics":"MVC: bootstrap, handlebars-js, bcrypt, express.js, mysql2, sequelize, node.js, nodemon, dotenv, jest"},{"id":2,"name":"budget tracker","image":"https://github.com/jessibewu/react-portfolio/raw/master/src/assets/images/budget-tracker.png","github":"https://github.com/jessibewu/budget-tracker","deploy":"https://lit-mesa-27218.herokuapp.com/","topics":"PWA: Javascript, indexedDB, mongoDB, mongoose, compression, morgan, express.js"},{"id":3,"name":"weather dashboard","image":"https://github.com/jessibewu/react-portfolio/raw/master/src/assets/images/weather-dashboard.png","github":"https://github.com/jessibewu/weather-dashboard","deploy":"https://jessibewu.github.io/weather-dashboard/","topics":"HTML, CSS, bootstrap, Javascript, Javascript, jQuery, moment, API"},{"id":4,"name":"work day scheduler","image":"https://github.com/jessibewu/react-portfolio/raw/master/src/assets/images/workday-scheduler.png","github":"https://github.com/jessibewu/work-day-scheduler","deploy":"https://jessibewu.github.io/work-day-scheduler/","topics":"HTML, CSS, bootstrap, Javascript, jQuery, moment"},{"id":5,"name":"taskmaster","image":"https://github.com/jessibewu/react-portfolio/raw/master/src/assets/images/taskmaster.png","github":"https://github.com/jessibewu/taskmaster-pro","deploy":"https://jessibewu.github.io/taskmaster-pro/","topics":"HTML, CSS, Javascript"},{"id":6,"name":"taskinator","image":"https://github.com/jessibewu/react-portfolio/raw/master/src/assets/images/taskinator.png","github":"https://github.com/jessibewu/taskinator","deploy":"https://jessibewu.github.io/taskinator/","topics":"HTML, CSS, Javascript"}]')},25:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),a=s(12),n=s.n(a),o=(s(25),s(13)),r=s(14),l=s(20),j=s(19),m=s(5),b=s(2),h=s(0);var d=function(e){return Object(h.jsx)("div",{className:"row navigation",id:"navigation",children:Object(h.jsxs)("h5",{children:[Object(h.jsx)(m.b,{to:"/about",children:"About "}),Object(h.jsx)(m.b,{to:"/portfolio",children:"Portfolio "}),Object(h.jsx)(m.b,{to:"/resume",children:"Resume"}),Object(h.jsx)(m.b,{to:"/contact",children:"Contact "})]})})};var u=function(){return Object(h.jsxs)("section",{className:"my-5",id:"about",children:[Object(h.jsx)("h1",{id:"about",children:"About Me:"}),Object(h.jsx)("hr",{}),Object(h.jsx)("img",{src:"https://github.com/jessibewu/react-portfolio/raw/master/src/assets/images/myphoto.png",className:"my-2",style:{width:"100%"},alt:""}),Object(h.jsx)("div",{className:"my-2",children:Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst."})})]})},p=s(17),g=s(11);var f=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(g.a)(e,2),s=t[0],c=t[1],a=Object(i.useState)(""),n=Object(g.a)(a,2),o=n[0],r=n[1],l=s.name,j=s.email,m=s.message,b=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);r(t?"":"Your email is invalid.")}else e.target.value.length?r(""):r("".concat(e.target.name," is required."))};return Object(h.jsxs)("section",{class:"justify-content-center",id:"contact-section",children:[Object(h.jsx)("h1",{"data-testid":"h1tag",children:"Contact Me:"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||(c(Object(p.a)({},e.target.name,e.target.value)),console.log("Form",s))},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"name",defaultValue:l,onBlur:b})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"email",name:"email",defaultValue:j,onBlur:b})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(h.jsx)("br",{}),Object(h.jsx)("textarea",{name:"message",rows:"5",defaultValue:m,onBlur:b})]}),Object(h.jsx)("div",{children:o&&Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"error-text",children:o})})}),Object(h.jsx)("div",{className:"btn",children:Object(h.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})})]})]})};var x=function(e){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)("img",{alt:e.name,src:e.image})}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("p",{className:"project-title",id:"card-title",children:e.name}),Object(h.jsxs)("p",{children:[Object(h.jsx)("a",{href:e.github,children:Object(h.jsx)("img",{src:"https://img.icons8.com/ios-glyphs/50/ffffff/github.png",alt:"Repository",id:"project-icon"})}),Object(h.jsx)("a",{href:e.deploy,children:Object(h.jsx)("img",{src:"https://img.icons8.com/ios-glyphs/50/ffffff/open-in-browser.png",alt:"Deployed Site",id:"project-icon"})})]}),Object(h.jsxs)("p",{id:"topics",children:["(",e.topics,")"]})]})]})},O=s(18);function w(e){return Object(h.jsx)("div",{className:"wrapper",children:e.children})}var v=function(){return Object(h.jsxs)("section",{children:[Object(h.jsxs)("div",{className:"project",children:[Object(h.jsx)("h1",{className:"title",children:"My Portfolio:"}),Object(h.jsx)("hr",{})]}),Object(h.jsx)(w,{id:"card-data",children:O.map((function(e){return Object(h.jsx)(x,{image:e.image,name:e.name,github:e.github,deploy:e.deploy,topics:e.topics},e.id)}))})]})};var y=function(){return Object(h.jsxs)("section",{class:"mb-5",children:[Object(h.jsx)("h1",{className:"resume",children:"My Resume:"}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{class:"row justify-content-center",id:"resume",children:Object(h.jsxs)("div",{class:"mt-5 pl-5 pr-5",children:[Object(h.jsx)("p",{children:"Full stack developer with experience of the MERN stack. Experienced in product management and software development. "}),Object(h.jsx)("p",{class:"mt-5",children:Object(h.jsx)("a",{href:"https://www.linkedin.com/in/jessica-ying-en-wu-830859b7/",children:Object(h.jsx)("img",{src:"https://img.icons8.com/ios-glyphs/50/ffffff/linkedin.png",alt:"Jessica Wu LinkedIn"})})}),Object(h.jsxs)("p",{children:["Download my full ",Object(h.jsx)("a",{href:"/",class:"link",children:"resume"}),Object(h.jsx)("br",{})]})]})}),Object(h.jsx)("div",{class:"justify-content-center mt-5",children:Object(h.jsxs)("div",{id:"skills",children:[Object(h.jsx)("h2",{children:"Frontend/Backend Skills:"}),Object(h.jsx)("hr",{}),Object(h.jsx)("img",{src:"https://img.icons8.com/material-outlined/54/ffffff/html.png",alt:"html logo"}),Object(h.jsx)("img",{src:"https://img.icons8.com/material-outlined/48/ffffff/css-filetype.png",alt:"css logo"}),Object(h.jsx)("img",{src:"https://img.icons8.com/ios-filled/45/ffffff/javascript-logo.png",alt:"js logo"}),Object(h.jsx)("img",{src:"https://img.icons8.com/ios-filled/47/ffffff/jquery.png",alt:"jquery logo"}),Object(h.jsx)("img",{src:"https://img.icons8.com/ios-glyphs/50/ffffff/react.png",alt:"react.js logo"}),Object(h.jsx)("img",{src:"https://img.icons8.com/windows/56/ffffff/nodejs.png",alt:"nodejs logo"}),Object(h.jsx)("img",{src:"https://img.icons8.com/windows/52/ffffff/mysql.png",alt:"mysql logo"}),Object(h.jsx)("img",{src:"https://img.icons8.com/fluency-systems-filled/48/ffffff/api-settings.png",alt:"api logo"})]})})]})},k=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(h.jsxs)(m.a,{children:[Object(h.jsxs)("div",{className:"row Header",id:"header",children:[Object(h.jsx)("h2",{children:Object(h.jsxs)("a",{href:"http://jessibewu.github.io/react-portfolio",children:[Object(h.jsx)("span",{role:"img",children:Object(h.jsx)("img",{src:"https://img.icons8.com/nolan/40/react-native.png",alt:"icon",class:"icon",id:"r-icon"})}),"JW"]})}),Object(h.jsx)(d,{})]}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(b.a,{to:"/portfolio"})}}),Object(h.jsx)(b.b,{path:"/portfolio",component:v}),Object(h.jsx)(b.b,{path:"/about",component:u}),Object(h.jsx)(b.b,{path:"/resume",component:y}),Object(h.jsx)(b.b,{path:"/contact",component:f})]})]})}}]),s}(i.Component),N=k;var S=function(){return Object(h.jsxs)("div",{className:"footer",id:"footer",children:[Object(h.jsxs)("div",{id:"footer-icons",children:[Object(h.jsx)("a",{href:"https://github.com/jessibewu",children:Object(h.jsx)("img",{src:"https://img.icons8.com/nolan/44/github.png",alt:"Github",class:"icon"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/jessica-ying-en-wu-830859b7/",children:Object(h.jsx)("img",{src:"https://img.icons8.com/nolan/44/linkedin.png",alt:"LinkedIn",class:"icon"})}),Object(h.jsx)("a",{href:"https://twitter.com/jessibewu",children:Object(h.jsx)("img",{src:"https://img.icons8.com/nolan/44/twitter-circled.png",alt:"Twitter",class:"icon"})})]}),Object(h.jsx)("h5",{children:"\xa9 2021 Jessica Wu"})]})};var M=function(){return Object(h.jsxs)("main",{children:[Object(h.jsx)(N,{}),Object(h.jsx)("div",{children:Object(h.jsx)(S,{})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.b4dae079.chunk.js.map