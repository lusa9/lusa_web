(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},18:function(e,t,a){e.exports=a(40)},24:function(e,t,a){},27:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=(a(24),a(1)),o=a(2),s=a(4),u=a(3),m=a(5),h=a(17),p=a(9),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("text",{style:Object(h.a)({},this.props.style,{"font-family":["HelveticaNeue-Thin","Helvetica Neue Thin","Helvetica Neue"],"font-weight":"200","font-size":"58px",color:p.black})},this.props.text)}}]),t}(n.Component),d=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:this.props.width,height:this.props.height}})}}]),t}(n.Component),E=(a(27),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={cursorIsVisible:!0},clearInterval(),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.cursorBlinkingTimer=setInterval(function(){e.setState(function(e,t){return{cursorIsVisible:!e.cursorIsVisible}})},500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.cursorBlinkingTimer)}},{key:"render",value:function(){var e="blinking-cursor-"+(this.state.cursorIsVisible?"visible":"hidden");return r.a.createElement("div",{className:"header-container"},r.a.createElement(d,{height:80}),r.a.createElement("div",{className:"logo-container-underline"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("div",{className:"lusa-development"},r.a.createElement("text",{className:"lusadevelopment"},"Lusadevelopment"),r.a.createElement("view",{className:e})),r.a.createElement("img",{src:"/assets/logo_big.png",alt:"logo",className:"logo"}))))}}]),t}(n.Component)),g=(a(11),a(12),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"published-apps-croparking-container"},r.a.createElement(d,{width:247}),r.a.createElement("img",{src:"assets/croparkingapp.png"}),r.a.createElement(d,{width:70}),r.a.createElement("div",{className:"published-apps-croparking-description-container"},r.a.createElement(d,{height:180}),r.a.createElement("text",{className:"RecentWork-title"},"CroParking"),r.a.createElement(d,{height:30}),r.a.createElement("text",{className:"RecentWork-description"},"Simple & Fast parking SMS Generator built in React Native"),r.a.createElement(d,{height:220}),r.a.createElement("a",{className:"GooglePlayButton",href:"https://play.google.com/store/apps/details?id=com.lusa.croparking&hl=en"})))}}]),t}(n.Component)),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=function(){return r.a.createElement(d,{height:120})};return r.a.createElement("div",{className:"recent-work-container"},r.a.createElement(e,null),r.a.createElement(b,{text:"Published Apps"}),r.a.createElement(e,null),r.a.createElement(g,null),r.a.createElement(e,null))}}]),t}(n.Component),j=(a(8),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"white"}},r.a.createElement(d,{height:504}),r.a.createElement(b,{text:"Thanks for reaching out! I will get to you as soon as possible :)",style:{width:900,textAlign:"center"}}),r.a.createElement(d,{height:504}))}}]),t}(n.Component)),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"white"}},r.a.createElement(d,{height:120}),r.a.createElement(b,{text:"Hire Me"}),r.a.createElement(d,{height:110}),r.a.createElement("div",{className:"Contact-form"},r.a.createElement("input",{className:"Input-email",type:"email",name:"email",placeholder:"Email adress*"}),r.a.createElement("div",{style:{height:40}}),r.a.createElement("textarea",{className:"Input-message",type:"text",name:"message",placeholder:"Write about the project*"}),r.a.createElement("div",{style:{height:20}}),r.a.createElement("button",{className:"Attach-button"},"Attach any files that might be useful"),r.a.createElement("div",{style:{height:100}}),r.a.createElement("button",{onClick:this.props.onSubmit,className:"Submit-button"},"Send")),r.a.createElement(d,{height:300}))}}]),t}(n.Component),O=(a(28),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={formSubmitted:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.state.formSubmitted?r.a.createElement(j,null):r.a.createElement(v,{onSubmit:function(){return e.setState({formSubmitted:!0})}})}}]),t}(n.Component)),y=(a(38),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement(d,{height:50}),r.a.createElement("div",{className:"footer-icon-container"},r.a.createElement("img",{src:"/assets/github.png"}),r.a.createElement(d,{width:20}),r.a.createElement("img",{src:"/assets/linkedin.png"}),r.a.createElement(d,{width:20}),r.a.createElement("img",{src:"/assets/email.png"})),r.a.createElement(d,{height:100}),r.a.createElement("img",{src:"/assets/logo_medium.png"}),r.a.createElement(d,{height:30}))}}]),t}(n.Component)),k=(a(39),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=function(){return r.a.createElement(d,{height:270})},t=function(){return r.a.createElement(d,{height:80})};return r.a.createElement("div",{className:"what-we-do-container"},r.a.createElement(e,null),r.a.createElement("img",{src:"/assets/macbook.png"}),r.a.createElement(t,null),r.a.createElement("text",{className:"what-we-do-item-description"},"Web Frontend using HTML & CSS with Angular, React or Vue.js"),r.a.createElement(e,null),r.a.createElement("img",{src:"/assets/phones.png"}),r.a.createElement(t,null),r.a.createElement("text",{className:"what-we-do-item-description"},"Cross-Platform Mobile development with React Native"),r.a.createElement(e,null))}}]),t}(n.Component)),w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(E,null),r.a.createElement(k,null),r.a.createElement(f,null),r.a.createElement(O,null),r.a.createElement(y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.91025f87.chunk.js.map