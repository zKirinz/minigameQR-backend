(this.webpackJsonpquizz=this.webpackJsonpquizz||[]).push([[0],{150:function(e,t,n){e.exports=n.p+"static/media/logo.5bac75e2.png"},153:function(e,t,n){e.exports=n.p+"static/media/error.b3d878e7.jpg"},156:function(e,t,n){e.exports=n(285)},161:function(e,t,n){},185:function(e,t,n){},281:function(e,t,n){},282:function(e,t,n){},283:function(e,t,n){},284:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(139),l=n.n(c),o=(n(161),n(31)),i=n(6),s=function(e){return null===localStorage.getItem("studentID")?r.a.createElement(i.b,e):r.a.createElement(i.a,{to:"/quiz-instruction"})},u=n(155),m=function(e){var t=e.component,n=Object(u.a)(e,["component"]);return null!==localStorage.getItem("studentID")?r.a.createElement(i.b,Object.assign({},n,{component:t})):r.a.createElement(i.a,{to:"/"})},d=n(4),p=n.n(d),g=n(12),f=n(35),h=n.n(f),v=(n(101),function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"header"},r.a.createElement("img",{className:"header-logo",src:"./transparance.png",alt:""})))}),E="https://evening-ridge-31382.herokuapp.com/api",b=function(){var e=Object(i.g)(),t=function(){var t=Object(g.a)(p.a.mark((function t(){var n,a,r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("token")),a=localStorage.getItem("name"),r=localStorage.getItem("studentID"),t.prev=3,t.next=6,h()({method:"GET",url:"".concat(E,"/user/start"),params:{token:n,studentID:r,name:a}});case 6:(c=t.sent).data.success&&(localStorage.setItem("questions",JSON.stringify(c.data.data.questions)),"/quiz",e.push("/quiz")),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),403===t.t0.response.status?(console.log("wrong"),"/quiz-summary",console.log(e),e.push("/quiz-summary")):400===t.t0.response.status&&(localStorage.removeItem("token"),localStorage.removeItem("studentID"),localStorage.removeItem("name"),"/invalid-token",e.push("/invalid-token"));case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"instructions"},r.a.createElement("h1",null,"C\xe1ch ch\u01a1i"),r.a.createElement("h3",null,"\u0110\u1ecdc k\u0129 h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc khi s\u1eed d\u1ee5ng."),r.a.createElement("ul",{className:"browser-default",id:"main-list"},r.a.createElement("li",null,"C\xe1c b\u1ea1n c\xf3 t\u1ed5ng c\u1ed9ng 10 c\xe2u h\u1ecfi, \u0111\u01b0\u1ee3c x\u1ebfp theo m\u1ee9c \u0111\u1ed9 t\u1eeb d\u1ec5 \u0111\u1ebfn kh\xf3."),r.a.createElement("li",null,"M\u1ed7i c\xe2u h\u1ecfi c\xf3 4 l\u1ef1a ch\u1ecdn, b\u1ea1n c\xf3 th\u1ec3 s\u1eeda c\xe2u tr\u1ea3 l\u1eddi b\u1eb1ng c\xe1ch quay tr\u1edf l\u1ea1i c\xe2u h\u1ecfi \u0111\xf3."),r.a.createElement("li",null,"Th\u1eddi gian l\xe0m b\xe0i \u0111\u01b0\u1ee3c t\xednh khi b\u1ea1n \u1ea5n n\xfat B\u1eaft \u0111\u1ea7u."),r.a.createElement("li",null,"M\u1ed7i b\u1ea1n ch\u1ec9 \u0111\u01b0\u1ee3c 1 l\u1ea7n l\xe0m quiz.")),r.a.createElement("div",null,r.a.createElement("button",{className:"start-button",onClick:t},"B\u1eaft \u0111\u1ea7u"))))},k=n(7),S=function(e){var t=e.content;return r.a.createElement("div",null,r.a.createElement("p",{className:"question-box"},t))},O=n(5),N=function(e){var t=e.answer,n=e.setArrOfAnswer,a=e.arrOfAnswer,c=e.index,l=e.indexOfQuestion;return r.a.createElement("div",{className:a[l-1]===c+1?"choosing-container container":"container",onClick:function(){var e=a;e[l-1]!==c+1&&(e[l-1]=c+1,n(Object(O.a)(e)))}},t)},I=function(e){var t=e.multipleChoice,n=e.indexOfQuestion,a=e.arrOfAnswer,c=e.setArrOfAnswer;return r.a.createElement("div",{className:"answer-container"},t.map((function(e,t){return r.a.createElement(N,{key:t,answer:e,arrOfAnswer:a,setArrOfAnswer:c,index:t,indexOfQuestion:n})})))},y=(n(185),n(141)),w=n.n(y),j=n(287),q=function(e){var t=e.indexOfQuestion;return r.a.createElement("nav",null,r.a.createElement("div",{className:"header"},r.a.createElement("img",{className:"header-logo",src:"./transparance.png",alt:""}),r.a.createElement("div",{className:"header-progress"},r.a.createElement("p",null,t,"/10"),r.a.createElement(j.a,{percent:10*t,showInfo:!1})),r.a.createElement("div",{className:"header-timer"},r.a.createElement("i",{className:"fa fa-clock"}),r.a.createElement(w.a,null))))},x=function(){var e=JSON.parse(localStorage.getItem("questions")),t=JSON.parse(localStorage.getItem("token")),n=localStorage.getItem("name"),c=localStorage.getItem("studentID"),l=Object(a.useState)(1),o=Object(k.a)(l,2),i=o[0],s=o[1],u=Object(a.useState)([0,0,0,0,0,0,0,0,0,0]),m=Object(k.a)(u,2),d=m[0],f=m[1],v=Object(a.useState)(!1),b=Object(k.a)(v,2),O=b[0],N=b[1],y=function(){i<10&&s(i+1)},w=function(){N(!1)},j=function(){var e=Object(g.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!1),e.prev=1,e.next=4,h()({method:"POST",url:"".concat(E,"/user/end"),data:{token:t,name:n,studentID:c,answer:d}});case 4:a=e.sent,console.log(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(q,{indexOfQuestion:i}),r.a.createElement(S,{content:e[i-1].question}),r.a.createElement(I,{indexOfQuestion:i,multipleChoice:e[i-1].multipleChoice,arrOfAnswer:d,setArrOfAnswer:f,nextQuestion:y}),r.a.createElement("div",{className:"navigation"},i>1&&r.a.createElement("button",{className:"btn btn-prev",onClick:function(){i>1&&s(i-1)}},r.a.createElement("i",{className:"fa fa-arrow-left"})),i<10&&r.a.createElement("button",{className:"btn btn-next",onClick:function(){return y()}},r.a.createElement("i",{className:"fa fa-arrow-right"}))),r.a.createElement("button",{className:"btn btn-submit",onClick:function(){N(!0)}},"Submit"),r.a.createElement("div",{className:O?"dialog-container":"dialog-container-none",onClick:w},r.a.createElement("div",{className:"dialog"},r.a.createElement("div",{className:"dialog-title"},"B\u1ea1n \u0111\xe3 ch\u1eafc ch\u1eafn n\u1ed9p b\xe0i?"),r.a.createElement("div",{className:"dialog-action"},r.a.createElement("button",{className:"btn btn-dialog",onClick:w},"Kh\xf4ng"),r.a.createElement("button",{className:"btn btn-dialog",onClick:j},"C\xf3")))))},z=n(154),C=(n(281),function(e){var t=e.register,n=e.name,c=e.label,l=e.type,o=e.errors,i=e.valid,s=e.icon,u=(e.isTaken,Object(a.useState)(!1)),m=Object(k.a)(u,2),d=m[0],p=m[1],g=Object(a.useState)(""),f=Object(k.a)(g,2),h=f[0],v=f[1];return r.a.createElement("div",{className:d?"input-container focus":"input-container"},r.a.createElement("div",{className:"input-icon"},s),r.a.createElement("div",{className:"input-field"},r.a.createElement("h5",null,c),r.a.createElement("input",{type:l,name:n,className:"input",ref:i||t({required:"".concat(c," is required")}),onChange:function(e){return v(e.target.value)},onFocus:function(){return p(!0)},onBlur:function(){!h&&p(!1)}}),o[n]&&r.a.createElement("span",null,o[n].message)))}),A=(n(282),n(150)),D=n.n(A),Q=n(43),J=n.n(Q),M=n(151),T=n(152),B=n(91),V=new(function(){function e(){Object(M.a)(this,e)}return Object(T.a)(e,[{key:"getItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:'""';if("undefined"!==typeof localStorage){var n=localStorage.getItem(e);return n&&"undefined"===n&&(n=t),JSON.parse(n)}}},{key:"setItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";"undefined"!==typeof localStorage&&localStorage.setItem(e,JSON.stringify(t))}},{key:"removeItem",value:function(e){"undefined"!==typeof localStorage&&localStorage.removeItem(e)}},{key:"clear",value:function(){"undefined"!==typeof localStorage&&localStorage.clear()}},{key:"deleteUser",value:function(){this.removeItem("token"),window.location.reload(!1)}},{key:"getUser",value:function(){if("undefined"!==typeof localStorage){var e=this.getItem("token");if(!e)return e;try{return Object(B.a)(e),Object(B.a)(e)}catch(t){t.response&&401===t.response.status&&this.deleteUser()}}}},{key:"getToken",value:function(){return this.getItem("token")}}]),e}()),R=function(){return{"Content-Type":"application/json",Authorization:"Bearer ".concat(V.getToken())}},U=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return h()({url:E+e,method:t,headers:J()(R(),n),params:J()(a),data:r})},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return U(e,"POST",a,n,t)},P=function(){var e=Object(z.a)(),t=e.register,n=e.handleSubmit,c=e.errors,l=Object(i.g)(),o=Object(a.useState)(!1),s=Object(k.a)(o,2),u=s[0],m=s[1],d=Object(a.useState)(!1),f=Object(k.a)(d,2),h=f[0],E=f[1],b=function(){var e=Object(g.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),E(!1),n=JSON.parse(localStorage.getItem("token")),e.next=6,F("/user/register",{token:n,name:t.name,studentID:t.studentID});case 6:e.sent.data.success&&(localStorage.setItem("name",t.name),localStorage.setItem("studentID",t.studentID),"/quiz-instruction",l.push("/quiz-instruction")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),e.t0.response&&403===e.t0.response.status?(m(!1),E(!0)):400===e.t0.response.status&&(localStorage.removeItem("token"),localStorage.removeItem("studentID"),localStorage.removeItem("name"),"/invalid-token",l.push("/invalid-token"));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("img",{className:"logoMiniGame",src:D.a,alt:""}),r.a.createElement("form",{className:"form-wrapper",onSubmit:n(b)},r.a.createElement(C,{register:t,icon:r.a.createElement("i",{className:"fa fas fa-user"}),name:"name",type:"text",label:"H\u1ecd v\xe0 t\xean",errors:c,valid:t({required:"H\u1ecd v\xe0 t\xean kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng"})}),r.a.createElement(C,{register:t,icon:r.a.createElement("i",{className:"fa fas fa-user"}),name:"studentID",type:"text",label:"MSSV",errors:c,valid:t({required:"MSSV kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng"})}),r.a.createElement("span",{className:"error",style:{display:!h&&"none"}},"Vui l\xf2ng nh\u1eadp \u0111\xfang MSSV v\xe0 t\xean \u0111\xe3 \u0111\u0103ng k\xed v\u1edbi m\xe3 QR n\xe0y."),r.a.createElement("button",{className:"login-button"},r.a.createElement("i",{className:"fa fa-refresh fa-spin",style:{display:!u&&"none"}})," ","Submit")))},G=n(153),H=n.n(G),K=(n(283),function(){return r.a.createElement("div",{className:"error-container"},r.a.createElement(v,null),r.a.createElement("img",{className:"error-pic",src:H.a,alt:"error",width:"30%"}),r.a.createElement("h1",{className:"alert-text"},"M\xe3 QR kh\xf4ng h\u1ee3p l\u1ec7. Vui l\xf2ng \u0111\u1ebfn qu\u1ea7y \u0111\u1ec3 nh\u1eadn m\xe3 QR kh\xe1c."))}),L=(n(284),[{path:"/",name:"welcome",component:P},{path:"/invalid-token",name:"invalid-token",component:K}]),W=[{path:"/quiz-instruction",name:"quiz-instruction",component:b},{path:"/quiz",name:"quiz",component:x},{path:"/quiz-summary",name:"quiz-summary",component:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"summary-container"},r.a.createElement("h1",null,"Ch\xfac m\u1eebng b\u1ea1n \u0111\xe3 ho\xe0n th\xe0nh b\xe0i Quiz."),r.a.createElement("h3",null,"Vui l\xf2ng theo d\xf5i Fanpage F-Code \u0111\u1ec3 \u0111\xf3n nh\u1eadn k\u1ebft qu\u1ea3 nh\xe9!!")))}}],X=r.a.createElement(i.d,null,L.map((function(e){return r.a.createElement(s,{key:e.name,exact:!0,path:e.path,component:e.component})})),W.map((function(e){return r.a.createElement(m,{key:e.name,path:e.path,component:e.component})}))),Y=function(){var e=window.location.search,t=new URLSearchParams(e).get("token");return null!==t&&localStorage.setItem("token",t),r.a.createElement(o.a,null,X)};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.5b09b889.chunk.js.map