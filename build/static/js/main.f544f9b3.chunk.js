(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{47:function(e,t,s){},51:function(e,t,s){},66:function(e,t,s){},74:function(e,t,s){"use strict";s.r(t),s.d(t,"Context",(function(){return S}));var a=s(14),c=s(54),l=s.n(c),n=s(17),o=(s(51),s(48)),i=s(22),d="/login",m="/chat",r=s(0),g=s.n(r),h=s(3),u=s(31),j=(s(66),s(13)),N=function(){var e=Object(a.useContext)(S).auth,t=function(){var t=Object(h.a)(g.a.mark((function t(){var s,a,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=new u.a.auth.GoogleAuthProvider,t.next=3,e.signInWithPopup(s);case 3:a=t.sent,c=a.user,console.log(c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return setTimeout((function(){document.getElementsByClassName("main")[0]&&(document.getElementsByClassName("main")[0].classList.add("".concat(localStorage.getItem("lightMode"),"LoginMain")),document.getElementsByClassName("container")[0].classList.add("".concat(localStorage.getItem("lightMode"),"LoginContainer")),document.getElementById("logBtn").classList.add("".concat(localStorage.getItem("lightMode"),"LoginBtn")),"true"===localStorage.getItem("darkMode")&&(document.getElementsByClassName("main")[0].classList.remove("".concat(localStorage.getItem("lightMode"),"LoginMain")),document.getElementsByClassName("container")[0].classList.remove("".concat(localStorage.getItem("lightMode"),"LoginContainer")),document.getElementById("logBtn").classList.remove("".concat(localStorage.getItem("lightMode"),"LoginBtn"))))}),10),Object(j.jsx)("div",{className:"main",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Welcome"}),Object(j.jsx)("p",{children:"For chatting authirize with google account"}),Object(j.jsx)("button",{id:"logBtn",onClick:t,children:" Sign with Google "})]})})},v=s(7),b=s(33),p=s(55),x=s(19),C=(s(47),function(e){var t=e.userName,s=e.photo,c=Object(a.useContext)(S).auth,l=Object(b.a)(c),o=(Object(n.a)(l,1)[0],"url(https://cdn-icons-png.flaticon.com/512/1680/1680154.png)"),i="url(https://cdn-icons-png.flaticon.com/512/1829/1829143.png)",d="false"===localStorage.getItem("darkMode")?i:o,m=Object(a.useState)(d),r=Object(n.a)(m,2),g=r[0],h=r[1];localStorage.getItem("darkMode")||localStorage.setItem("darkMode",!0),setTimeout((function(){var e;document.getElementById("chat")&&(e=Object(x.a)(document.getElementById("chat").childNodes),"true"===localStorage.getItem("darkMode")?(document.getElementsByClassName("cont")[0].classList.remove("".concat(localStorage.getItem("lightMode"),"Bg")),document.getElementsByClassName("nav")[0].classList.remove("".concat(localStorage.getItem("lightMode"),"Nav")),document.getElementById("chat").classList.remove("".concat(localStorage.getItem("lightMode"),"Chat")),document.getElementsByClassName("mess_input")[0].classList.remove("".concat(localStorage.getItem("lightMode"),"Input")),document.getElementsByClassName("mess_btn")[0].classList.remove("".concat(localStorage.getItem("lightMode"),"Btn")),document.getElementsByClassName("exit")[0].classList.remove("".concat(localStorage.getItem("lightMode"),"Exit")),document.getElementsByClassName("palette")[0].style.display="none",document.getElementsByClassName("modal")[0].classList.add("modalDark"),e.map((function(e){e.classList.remove("lightMess"),e.childNodes[1].classList.remove("lightText"),e.childNodes[0].childNodes[1].classList.remove("lightUsername"),e.childNodes[0].childNodes[0].childNodes[1].classList.remove("lightUsername"),e.childNodes[0].childNodes[1].classList.remove("timeLight")}))):(document.getElementsByClassName("cont")[0].classList.add("".concat(localStorage.getItem("lightMode"),"Bg")),document.getElementsByClassName("nav")[0].classList.add("".concat(localStorage.getItem("lightMode"),"Nav")),document.getElementById("chat").classList.add("".concat(localStorage.getItem("lightMode"),"Chat")),document.getElementsByClassName("mess_input")[0].classList.add("".concat(localStorage.getItem("lightMode"),"Input")),document.getElementsByClassName("mess_btn")[0].classList.add("".concat(localStorage.getItem("lightMode"),"Btn")),document.getElementsByClassName("exit")[0].classList.add("".concat(localStorage.getItem("lightMode"),"Exit")),document.getElementsByClassName("palette")[0].style.display="flex",document.getElementsByClassName("modal")[0].classList.remove("modalDark"),e.map((function(e){e.classList.add("lightMess"),e.childNodes[1].classList.add("lightText"),e.childNodes[0].childNodes[1].classList.add("lightUsername"),e.childNodes[0].childNodes[0].childNodes[1].classList.add("lightUsername"),e.childNodes[0].childNodes[1].classList.add("timeLight"),e.childNodes[0].childNodes[1].classList.remove("lightUsername")}))))}),1);localStorage.getItem("darkMode");return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)("p",{children:"ReactChat"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:s,width:"48px",height:"48px"}),Object(j.jsx)("h1",{children:t})]}),Object(j.jsxs)("div",{className:"nav_list",children:[Object(j.jsx)("button",{onClick:function(){var e;document.getElementById("chat")&&(e=Object(x.a)(document.getElementById("chat").childNodes),"false"===localStorage.getItem("darkMode")?(h(o),document.getElementsByClassName("cont")[0].classList.remove("lightBg"),document.getElementsByClassName("nav")[0].classList.remove("lightNav"),document.getElementById("chat").classList.remove("lightChat"),document.getElementsByClassName("mess_input")[0].classList.remove("lightInput"),document.getElementsByClassName("mess_btn")[0].classList.remove("lightBtn"),document.getElementsByClassName("exit")[0].classList.remove("lightExit"),document.getElementsByClassName("palette")[0].style.display="none",document.getElementsByClassName("modal")[0].classList.add("modalDark"),e.map((function(e){e.classList.remove("lightMess"),e.childNodes[1].classList.remove("lightText"),e.childNodes[0].childNodes[0].childNodes[1].classList.remove("lightUsername"),e.childNodes[0].childNodes[1].classList.remove("timeLight")})),localStorage.setItem("darkMode",!0)):(h(i),document.getElementsByClassName("cont")[0].classList.add("lightBg"),document.getElementsByClassName("nav")[0].classList.add("lightNav"),document.getElementById("chat").classList.add("lightChat"),document.getElementsByClassName("mess_input")[0].classList.add("lightInput"),document.getElementsByClassName("mess_btn")[0].classList.add("lightBtn"),document.getElementsByClassName("exit")[0].classList.add("lightExit"),document.getElementsByClassName("palette")[0].style.display="flex",document.getElementsByClassName("modal")[0].classList.remove("modalDark"),e.map((function(e){e.classList.add("lightMess"),e.childNodes[1].classList.add("lightText"),e.childNodes[0].childNodes[0].childNodes[1].classList.add("lightUsername"),e.childNodes[0].childNodes[1].classList.add("timeLight")})),localStorage.setItem("darkMode",!1)))},className:"modes",style:{backgroundImage:g}}),Object(j.jsx)("button",{className:"exit",onClick:function(){return c.signOut()},children:"Logout"})]})]})}),y=function(){return Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("div",{className:"lds-hourglass"})})},L=function(e){e.value;var t=e.setValue,s=function(e){t((function(t){return t+e.target.innerHTML}))};return Object(j.jsxs)("div",{className:"modal unActive",onClick:function(e){e.stopPropagation()},children:[Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\ude02"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83e\udd23"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83e\udd37\u200d\u2642\ufe0f"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83e\udd26\u200d\u2642\ufe0f"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\u2764\ufe0f"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\ude0d"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\ude18"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\udc4d"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\ude0e"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83c\udfb6"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\ude05"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83e\udd17"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\ude0a"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\ude22"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83e\udd29"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\ude44"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\ude21"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83e\udd21"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\ude08"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\ude12"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\ude42"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\ude2d"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\ude2e"}),Object(j.jsx)("div",{className:"emoji",onClick:s,children:"\ud83d\ude11"})]})},O=function(){var e=["light","red","blue","white","purple"];function t(t){var s;if(document.getElementById("chat")&&(s=Object(x.a)(document.getElementById("chat").childNodes),localStorage.getItem("lightMode")!==t.target.classList[1])){localStorage.setItem("lightMode",t.target.classList[1]),document.getElementsByClassName("cont")[0].classList.add("".concat(t.target.classList[1],"Bg")),document.getElementsByClassName("nav")[0].classList.add("".concat(t.target.classList[1],"Nav")),document.getElementById("chat").classList.add("".concat(t.target.classList[1],"Chat")),document.getElementsByClassName("mess_input")[0].classList.add("".concat(t.target.classList[1],"Input")),document.getElementsByClassName("mess_btn")[0].classList.add("".concat(t.target.classList[1],"Btn")),document.getElementsByClassName("exit")[0].classList.add("".concat(t.target.classList[1],"Exit")),document.getElementsByClassName("palette")[0].style.display="flex",s.map((function(e){e.classList.add("lightMess"),e.childNodes[1].classList.add("lightText"),e.childNodes[0].childNodes[0].childNodes[1].classList.add("lightUsername"),e.childNodes[0].childNodes[1].classList.add("timeLight")}));for(var a=0;a<5;a++)t.target.classList[1]!=e[a]&&(document.getElementsByClassName("cont")[0].classList.remove("".concat(e[a],"Bg")),document.getElementsByClassName("nav")[0].classList.remove("".concat(e[a],"Nav")),document.getElementById("chat").classList.remove("".concat(e[a],"Chat")),document.getElementsByClassName("mess_input")[0].classList.remove("".concat(e[a],"Input")),document.getElementsByClassName("mess_btn")[0].classList.remove("".concat(e[a],"Btn")),document.getElementsByClassName("exit")[0].classList.remove("".concat(e[a],"Exit")),document.getElementsByClassName("palette")[0].style.display="flex")}}return Object(j.jsxs)("div",{className:"palette",children:[Object(j.jsx)("div",{className:"el light",onClick:t}),Object(j.jsx)("div",{className:"el red",onClick:t}),Object(j.jsx)("div",{className:"el blue",onClick:t}),Object(j.jsx)("div",{className:"el white",onClick:t}),Object(j.jsx)("div",{className:"el purple",onClick:t})]})},B=s(56),f=s.n(B),E=[{path:d,Component:N}],I=[{path:m,Component:function(){var e,t,s=Object(a.useContext)(S),c=s.auth,l=s.firestore,o=Object(b.a)(c),i=Object(n.a)(o,1)[0],d=Object(a.useState)(""),m=Object(n.a)(d,2),r=m[0],N=m[1],x=Object(p.a)(l.collection("messages").orderBy("createdAt")),B=Object(n.a)(x,2),E=B[0],I=B[1],k=function(){var e=Object(h.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r.trim()){e.next=2;break}return e.abrupt("return");case 2:l.collection("messages").add({uid:i.uid,displayName:i.displayName,photoURL:i.photoURL,text:r,createdAt:u.a.firestore.FieldValue.serverTimestamp(),unique:Date.now(),time:f()().format("HH:mm")}),N("");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if((null===i||void 0===i?void 0:i.photoURL)&&(e=i.photoURL),(null===i||void 0===i?void 0:i.displayName)&&(t=i.displayName),I)return"false"===localStorage.getItem("darkMode")&&document.getElementsByClassName("loader")[0]&&document.getElementsByClassName("loader")[0].classList.add("".concat(localStorage.getItem("lightMode"),"Loader")),Object(j.jsx)(y,{});setTimeout((function(){document.getElementById("chat")&&0!==document.getElementById("chat").childNodes.length&&(I||document.getElementById("chat").childNodes[document.getElementById("chat").childNodes.length-1].scrollIntoView({behavior:"smooth"}))}),0);return window.onclick=function(){document.getElementsByClassName("modal")[0]&&(document.getElementsByClassName("modal")[0].classList.contains("unActive")||document.getElementsByClassName("modal")[0].classList.toggle("unActive"))},null===E&&(E=["<div></div>"]),Object(j.jsxs)("div",{children:[Object(j.jsx)(C,{userName:t,photo:e}),Object(j.jsxs)("div",{className:"cont",style:{display:"flex",flexDirection:"column"},children:[Object(j.jsx)(O,{}),Object(j.jsx)("div",{className:"chat",id:"chat",children:E.map((function(e){return Object(j.jsxs)("div",{className:"mess",style:{background:(null===i||void 0===i?void 0:i.uid)===e.uid?"#273250":"#1b2136",color:(null===i||void 0===i||i.uid,e.uid,"azure"),marginLeft:(null===i||void 0===i?void 0:i.uid)===e.uid?"auto":"10px"},children:[Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(j.jsxs)("div",{style:{display:"flex"},children:[Object(j.jsx)("img",{src:e.photoURL,height:"60px",className:"user_photo",alt:""}),Object(j.jsxs)("div",{className:"user_name",children:[" ",e.displayName," "]})]}),Object(j.jsx)("div",{className:"time",children:e.time})]}),Object(j.jsx)("div",{className:"mess_text",children:e.text})]},e.unique)}))}),Object(j.jsxs)("form",{action:"",className:"chat_mess",onSubmit:function(e){e.preventDefault();var t=document.getElementById("chat"),s=new MutationObserver((function(e,s){var a,c=Object(v.a)(e);try{for(c.s();!(a=c.n()).done;){"childList"===a.value.type&&t.childNodes[t.childNodes.length-1].scrollIntoView({behavior:"smooth"})}}catch(l){c.e(l)}finally{c.f()}}));s.observe(t,{childList:!0}),s.disconnect()},children:[Object(j.jsx)(L,{value:r,setValue:N}),Object(j.jsx)("div",{className:"smiles",onClick:function(e){e.stopPropagation(),document.getElementsByClassName("modal")[0].classList.toggle("unActive")}}),Object(j.jsx)("input",{className:"mess_input",placeholder:"Your message...",value:r,onChange:function(e){return N(e.target.value)}}),Object(j.jsx)("button",{className:"mess_btn",type:"submit",onClick:k,children:"Send"})]})]})]})}}],k=function(){var e=Object(a.useContext)(S).auth,t=Object(b.a)(e);return Object(n.a)(t,1)[0]?Object(j.jsxs)(i.d,{children:[I.map((function(e){var t=e.path,s=e.Component;return Object(j.jsx)(i.b,{path:t,component:s,exact:!0},t)})),Object(j.jsx)(i.a,{to:m})]}):Object(j.jsxs)(i.d,{children:[E.map((function(e){var t=e.path,s=e.Component;return Object(j.jsx)(i.b,{path:t,component:s,exact:!0},t)})),Object(j.jsx)(i.a,{to:d})]})};var M=function(){var e=Object(a.useContext)(S).auth,t=Object(b.a)(e),s=Object(n.a)(t,3),c=(s[0],s[1]);return s[2],c?Object(j.jsx)(y,{}):Object(j.jsx)(o.a,{children:Object(j.jsx)(k,{})})};s(73),s(75);u.a.initializeApp({apiKey:"AIzaSyAAatjNgXaPniJMqO3SvQ3CrpdLcKRMV9k",authDomain:"chatreact-f5669.firebaseapp.com",projectId:"chatreact-f5669",storageBucket:"chatreact-f5669.appspot.com",messagingSenderId:"655407384221",appId:"1:655407384221:web:5d3d8201f9072e8a217674",measurementId:"G-F6EJCZ467E"});var S=Object(a.createContext)(null),w=u.a.auth(),_=u.a.firestore();l.a.render(Object(j.jsx)(S.Provider,{value:{firebase:u.a,auth:w,firestore:_},children:Object(j.jsx)(M,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.f544f9b3.chunk.js.map