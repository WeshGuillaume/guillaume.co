(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(n,t,e){n.exports=e.p+"static/media/noise.4d1a464e.png"},19:function(n,t,e){n.exports=e(36)},25:function(n,t,e){},27:function(n,t,e){},36:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(9),i=e.n(o),c=(e(25),e(3)),u=e(4),l=e(6),s=e(5),f=e(7),m=e(1),p=e(2),d=(e(27),e(14)),h=e.n(d),v={whoami:function(){return"My name is Guillaume, I am a web developper and Product guy based in Paris, for now. I\u2019m available for all kind of stuff. Find out more by using the terminal \ud83d\ude43"},education:function(){return"\nAfter getting a Baccalaur\xe9at in Economics and Management, I attended University (Economics) in Marseille, France, before attending a school named 42 in Paris in computer science where I learned unix, javascript, C and A LOT MORE.\n    ".trim()},skills:function(){return"\nAfter a few experiences, and some time learning on my own, I managed to master a few skills:\n  - React\n  - GraphQL\n  - Apollo\n  - Haskell\n  - Node.js\n  - Product Management\n  - Basic intuition in machine learning main algorithms\n  - An ok-level in UI Design\n    ".trim()},notFound:function(){return null},clear:function(n,t){return t.clear},social:function(){return"\n".concat(v.linkedin(),"\n").concat(v.github(),"\n").concat(v.twitter(),"\n").concat(v.instagram(),"\n    ").trim()},github:function(){return"Github: https://github.com/GuillaumeBadi"},twitter:function(){return"Twitter: https://twitter.com/weshguillaume"},instagram:function(){return"Instagram: https://instagram.com/weshguillaume"},linkedin:function(){return"LinkedIn: https://www.linkedin.com/in/guillaume-badi-a06008b9/"},contact:function(){return"\nEmail: hello@guillaume.co\n\ud83d\udccc Paris, France\n    ".trim()},email:function(){return"Email: hello@guillaume.co"},top:function(){return"Alway up for a drink, 100%"},uname:function(){return"GuillaumeOS v1.0.0"},ps:function(){return"You're the only one, I Promise"},ls:function(){return"/"},cd:function(){return"You're not going anywhere \ud83d\ude09"},school:function(){return v.education()},help:function(){return"\nTo get to know me better, you can type a few of the following commands:\n\nhelp: access to this help message\nwhoami: my basic introduction\neducation: list where I went to school\nskills: Get a non-exhautive list of what I can do\n\nclear: Clean up that terminal\n    ".trim()}};var g=e(8);function b(){var n=Object(m.a)(["\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  opacity: 1;\n  left: ","px;\n  width: 9px;\n  height: 19px;\n  background: rgba(255, 255, 255, 0.31);\n  animation: blinker 1s linear infinite;\n\n  @keyframes blinker {\n    25% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0;\n    }\n    75% {\n      opacity: 1;\n    }\n  }\n"]);return b=function(){return n},n}function w(){var n=Object(m.a)(["\n  outline: none;\n  font-size: 16px;\n  border: 0;\n  font-family: 'Fira Code';\n  font-weight: 500;\n  color: transparent;\n  background: none;\n  text-shadow: 0 0 0 ",";\n"]);return w=function(){return n},n}function y(){var n=Object(m.a)(["\n  position: relative;\n  display: inline;\n"]);return y=function(){return n},n}var k=p.a.div(y()),x=p.a.input(w(),function(n){return n.error?"#BE3B5D":"#50d299"}),j=p.a.div(b(),function(n){return 9.7*n.offset});function O(n){var t=n.history,e=n.cursor,r=n.value;return t[e]||r}var E=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this,n))).state={value:"",history:[],error:!1},e.updateInput=function(n){var t=n.target.value;return t.length>=21?e.setState({error:!0,value:e.state.value,cursor:-1}):e.setState({value:t,error:!1,cursor:-1})},e.submit=function(){var n=O(e.state);e.setState({value:"",error:!1,history:(n.trim()?[n]:[]).concat(e.state.history),cursor:-1},function(){return e.props.onSubmit(n.trim())})},e.keyDown=function(n){var t=n.key,r=n.keyCode,a=n.ctrlKey;if("Enter"===t&&e.submit(),38===r&&e.state.cursor<e.state.history.length-1&&(n.preventDefault(),n.stopPropagation(),e.setState({cursor:e.state.cursor+1},function(){return e.moveCaretToTheEnd(e.input)})),40===r&&e.state.cursor>-1&&(n.preventDefault(),n.stopPropagation(),e.setState({cursor:e.state.cursor-1},function(){return e.moveCaretToTheEnd(e.input)})),67===r&&a)return e.setState({value:"",error:!1,cursor:-1},e.submit)},e.moveCaretToTheEnd=function(){O(e.state).length;e.input.selectionStart=e.input.value.length,e.input.selectionEnd=e.input.value.length},window.focus=e.focus.bind(Object(g.a)(Object(g.a)(e))),e}return Object(f.a)(t,n),Object(u.a)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"render",value:function(){var n=this,t=this.state,e=t.cursor,r=t.value,o=t.history;return a.a.createElement(k,null,a.a.createElement(j,{offset:(o[e]||r).length}),a.a.createElement(x,{ref:function(t){return n.input=t},error:this.state.error,onKeyDown:this.keyDown,autoFocus:!0,value:o[e]||r,onChange:this.updateInput,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"}))}}]),t}(r.Component);function C(){var n=Object(m.a)(["\n  color: white;\n  max-width: 600px;\n  font-weight: 300;\n  line-height: 23px;\n  white-space: pre-wrap;\n"]);return C=function(){return n},n}function I(){var n=Object(m.a)(["\n  color: #ff93f2;\n  margin-right: 16px;\n"]);return I=function(){return n},n}function S(){var n=Object(m.a)(["\n  color: ",";\n"]);return S=function(){return n},n}function B(){var n=Object(m.a)(["\n  font-size: 16px;\n  font-family: 'Fira Code';\n  font-weight: 500;\n  margin-top: 32px;\n"]);return B=function(){return n},n}var M=p.a.div(B()),T=p.a.span(S(),function(n){return n.error?"#BE3B5D":"#50d299"}),P=p.a.span(I()),D=p.a.p(C()),F=function(n){function t(){var n,e;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(l.a)(this,(n=Object(s.a)(t)).call.apply(n,[this].concat(a)))).submit=function(n){var t=n?function(n,t){var e=(v[n.split(" ")[0]]||v.notFound)(n,t);return window.analytics.track("Terminal > Input",{command:n,unknown:!v[n]}),e}(n,{clear:e.props.clear}):"";if("function"===typeof t)return t();var r=null===t;e.props.onSubmit({error:!t,output:r?"guillaume.co: Command not found: ".concat(n):t,command:n})},e}return Object(f.a)(t,n),Object(u.a)(t,[{key:"shouldComponentUpdate",value:function(n){return n.command!==this.props.command}},{key:"render",value:function(){var n=this.props,t=n.command,e=n.output,r=n.error;return a.a.createElement(M,null,a.a.createElement(P,null,"\u25b6"),null!==t?a.a.createElement(T,{error:r},t):a.a.createElement(E,{onSubmit:this.submit}),e&&a.a.createElement(D,null,e))}}]),t}(r.Component),A=e(17),G=e.n(A);function L(){var n=Object(m.a)(["\n  color: white;\n  max-width: 600px;\n  font-weight: 500;\n  line-height: 23px;\n  white-space: pre-wrap;\n"]);return L=function(){return n},n}var Y=localStorage.getItem("lastLogin");localStorage.setItem("lastLogin",G()().format("MMMM Do YYYY, h:mm a"));var z=p.a.span(L()),N=["(/\u2022-\u2022)/","\\(\u2022-\u2022\\)"],R=function(n){function t(){var n,e;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(l.a)(this,(n=Object(s.a)(t)).call.apply(n,[this].concat(a)))).state={index:0},e.update=function(){e.setState({index:e.state.index?0:1})},e}return Object(f.a)(t,n),Object(u.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.update,500)}},{key:"render",value:function(){var n,t=this.state.index;return a.a.createElement(z,null,(n=N[t],"\nWelcome".concat(Y?" back":""," on my portfolio ").concat(n,"\n").concat(Y?"Last login: ".concat(Y):"","\n")))}}]),t}(r.Component);function W(){var n=Object(m.a)(["\n  position: absolute;\n  width: 100%;\n  height: ","px;\n  background-color: white;\n  background: linear-gradient(\n    to bottom,\n    rgba(255, 255, 255, 0) 0%,\n    rgba(255, 255, 255, 1) 100%\n  );\n  opacity: 0.025;\n  top: ","px;\n  left: 0;\n  right: 0;\n  animation: slider 5s linear infinite;\n\n  @keyframes slider {\n    0% {\n      top: ","px;\n    }\n    100% {\n      top: ","px;\n    }\n  }\n"]);return W=function(){return n},n}function U(){var n=Object(m.a)(["\n  width: 990px;\n  height: ","px;\n  background-color: #2d313e;\n  background: url(",");\n  overflow: hidden;\n  padding: 64px;\n  padding-top: 32px;\n  overflow-y: scroll;\n\n  @media (max-width: 700px) {\n    width: 100vw;\n    height: 100vh;\n    padding: 32px;\n    padding-top: 0;\n  }\n"]);return U=function(){return n},n}function H(){var n=Object(m.a)(["\n  position: relative;\n  overflow: hidden;\n  box-shadow: 32px 32px 64px 0 rgba(45, 49, 62, 0.88);\n  border-radius: 16px;\n  @media (max-width: 700px) {\n    border-radius: 0;\n    box-shadow: none;\n  }\n"]);return H=function(){return n},n}var J=128,Q=p.a.div(H()),K=p.a.div(U(),600,h.a),_=p.a.div(W(),J,function(n){return n.offset},-J,600),q=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this,n))).state={glitchOffset:-J,entries:[{command:"whoami",error:!1,output:'My name is Guillaume, I am a web developper and Product guy based in Paris, for now. I\u2019m available for all kind of stuff. Find out more by using the terminal \ud83d\ude43 (type "help" to get an overview of the available commands)'}]},e.clear=function(){e.setState({entries:[]})},e.scrollBottom=function(){e.terminal.current.scrollTop=e.terminal.current.scrollHeight},e.submit=function(n){e.setState({entries:e.state.entries.concat([n])},e.scrollBottom)},e.focus=function(){window.focus()},e.terminal=Object(r.createRef)(),e}return Object(f.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(Q,{onClick:this.focus},a.a.createElement(_,{offset:this.state.glitchOffset}),a.a.createElement(K,{ref:this.terminal},a.a.createElement(R,null),this.state.entries.map(function(n,t){var e=n.command,r=n.error,o=n.output;return a.a.createElement(F,{key:t,command:e,error:r,output:o})}),a.a.createElement(F,{clear:this.clear,onSubmit:this.submit,command:null})))}}]),t}(r.Component);function V(){var n=Object(m.a)(["\n  max-width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #efefef;\n  border: 16px solid #2d313e;\n\n  @media (max-width: 700px) {\n    border: 0;\n  }\n"]);return V=function(){return n},n}var X=p.a.div(V()),$=function(n){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(u.a)(t,[{key:"componentDidMount",value:function(){var n=window.analytics=window.analytics||[];if(!n.initialize)if(n.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{n.invoked=!0,n.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],n.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);return e.unshift(t),n.push(e),n}};for(var t=0;t<n.methods.length;t++){var e=n.methods[t];n[e]=n.factory(e)}n.load=function(t,e){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a),n._loadOptions=e},n.SNIPPET_VERSION="4.1.0",n.load("vWEjzF0MaJ2k3UqIRWCxQlkQkrX9xHue"),n.page()}}},{key:"render",value:function(){return a.a.createElement(X,null,a.a.createElement(q,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.9761ac2e.chunk.js.map