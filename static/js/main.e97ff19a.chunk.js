(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},18:function(e,t,n){e.exports=n(40)},24:function(e,t,n){},27:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),l=(n(24),n(1)),o=n(2),s=n(4),u=n(3),m=n(5),h=n(17),p=(n(10),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("text",{style:Object(h.a)({},this.props.style,{fontWeight:300,letterSpacing:-3,fontSize:64,textAlign:"center",marginLeft:20,marginRight:20})},this.props.text)}}]),t}(a.Component)),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:this.props.width,height:this.props.height}})}}]),t}(a.Component),g=(n(27),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={cursorIsVisible:!0},clearInterval(),n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.cursorBlinkingTimer=setInterval(function(){e.setState(function(e,t){return{cursorIsVisible:!e.cursorIsVisible}})},500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.cursorBlinkingTimer)}},{key:"render",value:function(){var e="blinking-cursor-"+(this.state.cursorIsVisible?"visible":"hidden");return r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("div",{className:"lusa-development"},r.a.createElement("text",{className:"lusadevelopment"},"Lusadevelopment"),r.a.createElement("view",{className:e})),r.a.createElement("img",{className:"logo",src:"/assets/logo_big.png",alt:"logo",draggable:!1,onSelect:function(){return!1},onMouseDown:function(){return!1},onContextMenu:function(){return!1}})))}}]),t}(a.Component)),d=(n(11),n(12),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"published-apps-croparking-container"},r.a.createElement("img",{src:"assets/croparkingapp.png"}),r.a.createElement("div",{className:"published-apps-croparking-description-container"},r.a.createElement("text",{className:"RecentWork-title"},"CroParking"),r.a.createElement(b,{height:30}),r.a.createElement("text",{className:"RecentWork-description"},"Simple & Fast parking SMS Generator built in React Native"),r.a.createElement(b,{height:220}),r.a.createElement("a",{className:"GooglePlayButton",href:"https://play.google.com/store/apps/details?id=com.lusa.croparking&hl=en"})))}}]),t}(a.Component)),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=function(){return r.a.createElement(b,{height:120})};return r.a.createElement("div",{className:"recent-work-container"},r.a.createElement(e,null),r.a.createElement(p,{text:"Published Apps"}),r.a.createElement(e,null),r.a.createElement(d,null),r.a.createElement(e,null))}}]),t}(a.Component),f=(n(8),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"white"}},r.a.createElement(b,{height:504}),r.a.createElement(p,{text:"Thanks for reaching out! I will get to you as soon as possible :)",style:{width:900,textAlign:"center"}}),r.a.createElement(b,{height:504}))}}]),t}(a.Component)),j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement(b,{height:120}),r.a.createElement(p,{text:"Hire Me"}),r.a.createElement(b,{height:110}),r.a.createElement("div",{className:"form-inputs"},r.a.createElement("input",{className:"Input-email",type:"email",name:"email",placeholder:"Email adress*"}),r.a.createElement("div",{style:{height:40}}),r.a.createElement("textarea",{className:"Input-message",type:"text",name:"message",placeholder:"Write about the project*"}),r.a.createElement("div",{style:{height:20}})),r.a.createElement("button",{className:"Attach-button"},"Attach any files that might be useful"),r.a.createElement("div",{style:{height:100}}),r.a.createElement("button",{onClick:this.props.onSubmit,className:"Submit-button"},"Send"),r.a.createElement(b,{height:300}))}}]),t}(a.Component),O=(n(28),a.Component,n(38),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement(b,{height:50}),r.a.createElement("div",{className:"footer-icon-container"},r.a.createElement("img",{src:"/assets/github.png"}),r.a.createElement(b,{width:20}),r.a.createElement("img",{src:"/assets/linkedin.png"}),r.a.createElement(b,{width:20}),r.a.createElement("img",{src:"/assets/email.png"})),r.a.createElement(b,{height:100}),r.a.createElement("img",{src:"/assets/logo_medium.png"}),r.a.createElement(b,{height:30}))}}]),t}(a.Component)),v=(n(39),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=function(){return r.a.createElement(b,{height:270})},t=function(){return r.a.createElement(b,{height:80})};return r.a.createElement("div",{className:"what-we-do-container"},r.a.createElement(e,null),r.a.createElement("img",{className:"image",src:"/assets/macbook.png"}),r.a.createElement(t,null),r.a.createElement("text",{className:"what-we-do-item-description"},"Web Frontend using HTML & CSS with Angular, React or Vue.js"),r.a.createElement(e,null),r.a.createElement("img",{className:"image",src:"/assets/phones.png"}),r.a.createElement(t,null),r.a.createElement("text",{className:"what-we-do-item-description"},"Cross-Platform Mobile development with React Native"),r.a.createElement(e,null))}}]),t}(a.Component)),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(g,null),r.a.createElement(v,null),r.a.createElement(E,null),r.a.createElement(O,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.e97ff19a.chunk.js.map