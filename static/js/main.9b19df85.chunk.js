(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('[{"id":1,"name":"Hire Me","image":"https://github.com/jessibewu/react-portfolio/blob/main/src/assets/images/hire-me.png?raw=true","github":"https://github.com/csarmiento17/hire-me","deploy":"https://enigmatic-headland-23847.herokuapp.com/"},{"id":2,"name":"Redux Store","image":"https://raw.githubusercontent.com/jessibewu/react-portfolio/main/src/assets/images/redux-store.png","github":"https://github.com/jessibewu/redux-store","deploy":"https://limitless-castle-02345.herokuapp.com/"},{"id":3,"name":"City Paws","image":"https://github.com/jessibewu/react-portfolio/blob/main/src/assets/images/city-paws.png?raw=true","github":"https://github.com/jessibewu/city-paws","deploy":"https://frozen-escarpment-88030.herokuapp.com/home"}]')},28:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s.n(c),n=s(16),a=s.n(n),o=(s(28),s(9)),r=s(17),l=s(23),j=s(22),b=s(7),d=s(2),m=s(1);var h=function(){return Object(m.jsx)("div",{className:"navigation",id:"navigation",children:Object(m.jsxs)("h5",{children:[Object(m.jsx)(b.b,{activeStyle:{color:"#5b942d"},to:"/about",children:"About"}),Object(m.jsx)(b.b,{activeStyle:{color:"#5b942d"},to:"/portfolio",children:"Portfolio"}),Object(m.jsx)(b.b,{activeStyle:{color:"#5b942d"},to:"/resume",children:"Resume"}),Object(m.jsx)(b.b,{activeStyle:{color:"#5b942d"},to:"/contact",children:"Contact "})]})})};var u=function(){return Object(m.jsxs)("section",{className:"my-5",id:"about",children:[Object(m.jsx)("h1",{id:"about",children:"About Me:"}),Object(m.jsx)("hr",{}),Object(m.jsx)("img",{src:"https://github.com/jessibewu/react-portfolio/blob/main/src/assets/images/myphoto.jpg?raw=true",className:"my-2",style:{width:"18%"},alt:""}),Object(m.jsx)("div",{className:"my-2",children:Object(m.jsx)("p",{children:"Passionate Web Developer leveraging my background in procurement and product to build intuitive user experiences on the web. Recently earned a certificate in Full Stack Development from the University of Toronto and developed skills in JavaScript, CSS, React.js, Node.js and responsive web design. Excited to leverage my skills in the future as part of a fast-paced, quality-driven team to build better experiences on the web."})})]})},p=s(10),f=s(21);var g=s(40);var x=function(){var e=Object(c.useRef)(),t=Object(c.useState)(!1),s=Object(p.a)(t,2),i=(s[0],s[1]),n=Object(c.useState)({name:"",email:"",message:""}),a=Object(p.a)(n,2),o=a[0],r=(a[1],Object(c.useState)("")),l=Object(p.a)(r,2),j=l[0],b=l[1],d=o.name,h=o.email,u=o.message,x=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);b(t?"":"Your email is invalid.")}else e.target.value.length?b(""):b("".concat(e.target.name," is required."))};return Object(m.jsxs)("section",{class:"justify-content-center",id:"contact-section",children:[Object(m.jsx)("h1",{"data-testid":"h1tag",children:"Contact Me:"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("form",{id:"contact-form",ref:e,onSubmit:function(t){f.a.sendForm("service_rz85z57","template_ui8n8ls",e.current,"user_kdFMxJAT7wxrbnJ5wuIMB").then((function(e){console.log(e),i(e)}),(function(e){console.log(e),i(e)})),e.current.reset()},children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",name:"name",defaultValue:d,onBlur:x})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"email",name:"email",defaultValue:h,onBlur:x})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(m.jsx)("br",{}),Object(m.jsx)("textarea",{name:"message",rows:"5",defaultValue:u,onBlur:x})]}),Object(m.jsx)("div",{children:j&&Object(m.jsx)("div",{children:Object(m.jsx)("p",{className:"error-text",children:j})})}),Object(m.jsx)(g.a.div,{className:"btn",initial:{x:-50},animate:{x:0},children:Object(m.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})})]}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:"jess.wu@outlook.com"})]})};var O=function(e){return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("p",{className:"project-title",id:"card-title",children:e.name}),Object(m.jsxs)("p",{children:[Object(m.jsx)("a",{href:e.github,children:Object(m.jsx)(g.a.img,{whileHover:{scale:1.1},src:"https://img.icons8.com/ios-glyphs/50/ffffff/github.png",alt:"Repository",id:"project-icon"})}),Object(m.jsx)("a",{href:e.deploy,children:Object(m.jsx)(g.a.img,{whileHover:{scale:1.1},src:"https://img.icons8.com/ios-glyphs/50/ffffff/open-in-browser.png",alt:"Deployed Site",id:"project-icon"})})]})]}),Object(m.jsxs)("div",{className:"img-container",children:[Object(m.jsx)("a",{href:e.image,children:Object(m.jsx)("img",{alt:e.name,src:e.image,style:{width:"50%"}})})," ",Object(m.jsx)("hr",{})]})]})},v=s(20);function w(e){return Object(m.jsx)("div",{className:"wrapper",children:e.children})}var y=function(){return Object(m.jsxs)("section",{children:[Object(m.jsxs)("div",{className:"project",children:[Object(m.jsx)("h1",{className:"title",children:"My Portfolio:"}),Object(m.jsx)("hr",{})]}),Object(m.jsx)(w,{id:"card-data",children:v.map((function(e){return Object(m.jsx)(O,{image:e.image,name:e.name,github:e.github,deploy:e.deploy},e.id)}))})]})};var k=function(){return Object(m.jsxs)("section",{class:"mb-5",children:[Object(m.jsx)("h1",{className:"resume",children:"My Resume:"}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{class:"row justify-content-center",id:"resume",children:Object(m.jsxs)("div",{class:"resume-p",children:[Object(m.jsx)("p",{children:"Full stack developer with experience of the MERN stack. Experienced in product management and software development. "}),Object(m.jsxs)(g.a.p,{initial:{x:-50},animate:{x:0},children:["Download my ",Object(m.jsx)("a",{href:"https://github.com/jessibewu/react-portfolio/raw/main/src/assets/Jessica%20Wu_software.pdf",class:"link",children:"resume"}),Object(m.jsx)("br",{})]})]})}),Object(m.jsx)("div",{class:"justify-content-center mt-5",children:Object(m.jsxs)("div",{id:"skills",children:[Object(m.jsx)("h2",{children:"Frontend/Backend Skills:"}),Object(m.jsx)("hr",{}),Object(m.jsx)("img",{src:"https://img.icons8.com/material-outlined/54/ffffff/html.png",alt:"html logo"}),Object(m.jsx)("img",{src:"https://img.icons8.com/material-outlined/48/ffffff/css-filetype.png",alt:"css logo"}),Object(m.jsx)("img",{src:"https://img.icons8.com/ios-filled/45/ffffff/javascript-logo.png",alt:"js logo"}),Object(m.jsx)("img",{src:"https://img.icons8.com/ios-filled/47/ffffff/jquery.png",alt:"jquery logo"}),Object(m.jsx)("img",{src:"https://img.icons8.com/ios-glyphs/50/ffffff/react.png",alt:"react.js logo"}),Object(m.jsx)("img",{src:"https://img.icons8.com/windows/56/ffffff/nodejs.png",alt:"nodejs logo"}),Object(m.jsx)("img",{src:"https://img.icons8.com/windows/52/ffffff/mysql.png",alt:"mysql logo"}),Object(m.jsx)("img",{src:"https://img.icons8.com/fluency-systems-filled/48/ffffff/api-settings.png",alt:"api logo"})]})})]})},N={hidden:{rotate:-180},visible:{rotate:0,transition:{duration:1}}},S=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(m.jsxs)(b.a,{children:[Object(m.jsxs)(g.a.div,{id:"header",drag:!0,dragConstraints:{left:0,top:0,right:0,bottom:0},dragElastic:.7,children:[Object(m.jsx)("h2",{children:Object(m.jsxs)("a",{href:"http://jessibewu.github.io/react-portfolio",children:[Object(m.jsx)("span",{role:"img",children:Object(m.jsx)(g.a.img,{src:"https://img.icons8.com/nolan/40/react-native.png",alt:"icon",class:"icon",id:"r-icon",variants:N,initial:"hidden",animate:"visible"})}),"JW"]})}),Object(m.jsx)(h,{})]}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(d.a,{to:"/about"})}}),Object(m.jsx)(d.b,{path:"/portfolio",component:y}),Object(m.jsx)(d.b,{path:"/about",component:u}),Object(m.jsx)(d.b,{path:"/resume",component:k}),Object(m.jsx)(d.b,{path:"/contact",component:x})]})]})}}]),s}(c.Component),M=S;var J=function(){return Object(m.jsxs)("div",{className:"footer",id:"footer",children:[Object(m.jsxs)("div",{id:"footer-icons",children:[Object(m.jsx)("a",{href:"https://github.com/jessibewu",children:Object(m.jsx)("img",{src:"https://img.icons8.com/nolan/44/github.png",alt:"Github",class:"icon"})}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/jessica-ying-en-wu-830859b7/",children:Object(m.jsx)("img",{src:"https://img.icons8.com/nolan/44/linkedin.png",alt:"LinkedIn",class:"icon"})}),Object(m.jsx)("a",{href:"mailto:jess.wu@outlook.com",children:Object(m.jsx)("img",{src:"https://img.icons8.com/nolan/44/email-open.png",alt:"email",class:"icon"})})]}),Object(m.jsx)("h5",{children:"\xa9 2021 Jessica Wu"})]})};var F=function(){return Object(m.jsxs)("main",{children:[Object(m.jsx)(M,{}),Object(m.jsx)("div",{children:Object(m.jsx)(J,{})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.9b19df85.chunk.js.map