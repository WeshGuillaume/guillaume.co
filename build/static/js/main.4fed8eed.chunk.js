(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(n,t,e){n.exports=e.p+"static/media/noise.4d1a464e.png"},19:function(n,t,e){n.exports=e(36)},25:function(n,t,e){},27:function(n,t,e){},36:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(9),i=e.n(o),u=(e(25),e(3)),c=e(4),l=e(7),s=e(5),m=e(6),f=e(1),d=e(2),p=(e(27),e(14)),h=e.n(p);function g(n){var t=n.title,e=n.url,r=n.handle;return a.a.createElement("p",null,t,": ",a.a.createElement("a",{href:e,target:"_blank"},r||e))}function v(){return a.a.createElement(g,{url:"https://github.com/GuillaumeBadi",handle:"@GuillaumeBadi",title:"Github"})}function b(){return a.a.createElement(g,{url:"https://instagram.com/weshguillaume",title:"Instagram",handle:"@weshguillaume"})}function w(){return a.a.createElement(g,{url:"https://twitter.com/weshguillaume",title:"Twitter",handle:"@weshguillaume"})}function y(){return a.a.createElement(g,{url:"https://www.linkedin.com/in/guillaume-badi-a06008b9/",title:"LinkedIn"})}var k={whoami:function(){return"My name is Guillaume, I am a web developper and Product guy based in Paris, for now. I\u2019m available for all kind of stuff. Find out more by using the terminal \ud83d\ude43"},education:function(){return"\nAfter getting a Baccalaur\xe9at in Economics and Management, I attended University (Economics) in Marseille, France, before attending a school named 42 in Paris in computer science where I learned unix, javascript, C and A LOT MORE.\n    ".trim()},experience:function(){return"to be implemented..."},skills:function(){return"\nAfter a few experiences, and some time learning on my own, I managed to master a few skills:\n  - React\n  - GraphQL\n  - Apollo\n  - Haskell\n  - Node.js\n  - Product Management\n  - Basic intuition in machine learning main algorithms\n  - An ok-level in UI Design\n    ".trim()},notFound:function(){return null},clear:function(n,t){return t.clear},social:function(){return a.a.createElement(r.Fragment,null,"Make sure to follow me \ud83d\ude09:",a.a.createElement(v,null),a.a.createElement(b,null),a.a.createElement(y,null),a.a.createElement(w,null))},github:function(){return a.a.createElement(r.Fragment,null,"Github: ",a.a.createElement("a",{target:"_blank",href:"https://github.com/GuillaumeBadi"},"@GuillaumeBadi"))},hello:function(){return"I am ... not a chatbot, but hey !"},hi:function(){return k.hello()},hey:function(){return k.hello()},twitter:function(){return"Twitter: https://twitter.com/weshguillaume"},instagram:function(){return"Instagram: https://instagram.com/weshguillaume"},linkedin:function(){return"LinkedIn: https://www.linkedin.com/in/guillaume-badi-a06008b9/"},location:function(){return"\ud83d\udccc Paris, France"},contact:function(){return"\n".concat(k.email(),"\n").concat(k.location(),"\n    ").trim()},email:function(){return"Email: hello@guillaume.co"},top:function(){return"Alway up for a drink, 100%"},uname:function(){return"GuillaumeOS v1.0.0"},ps:function(){return"You're the only one, I Promise"},ls:function(){return"/"},cd:function(){return"You're not going anywhere \ud83d\ude09"},school:function(){return k.education()},help:function(){return"\nTo get to know me better, you can type a few of the following commands:\n\nhelp: access to this help message\nwhoami: my basic introduction\neducation: list where I went to school\nskills: Get a non-exhautive list of what I can do\ncontact: the <strong>privilege</strong> to get my contact info\nsocial: All my social links right in the terminal\n\nclear: Clean up that terminal\n    ".trim()}};var x=e(8);function E(){var n=Object(f.a)(["\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  opacity: 1;\n  left: ","px;\n  width: 9px;\n  height: 19px;\n  background: rgba(255, 255, 255, 0.31);\n  animation: blinker 1s linear infinite;\n\n  @keyframes blinker {\n    25% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0;\n    }\n    75% {\n      opacity: 1;\n    }\n  }\n"]);return E=function(){return n},n}function j(){var n=Object(f.a)(["\n  outline: none;\n  font-size: 16px;\n  border: 0;\n  font-family: 'Fira Code';\n  font-weight: 500;\n  color: transparent;\n  background: none;\n  text-shadow: 0 0 0 ",";\n"]);return j=function(){return n},n}function O(){var n=Object(f.a)(["\n  position: relative;\n  display: inline;\n"]);return O=function(){return n},n}var I=d.a.div(O()),C=d.a.input(j(),function(n){return n.error?"#BE3B5D":"#50d299"}),S=d.a.div(E(),function(n){return 9.7*n.offset});function B(n){var t=n.history,e=n.cursor,r=n.value;return t[e]||r}var M=function(n){function t(n){var e;return Object(u.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this,n))).state={value:"",history:[],error:!1},e.updateInput=function(n){var t=n.target.value;return t.length>=21?e.setState({error:!0,value:e.state.value,cursor:-1}):e.setState({value:t,error:!1,cursor:-1})},e.submit=function(){var n=B(e.state);e.setState({value:"",error:!1,history:(n.trim()?[n]:[]).concat(e.state.history),cursor:-1},function(){return e.props.onSubmit(n.trim())})},e.keyDown=function(n){var t=n.key,r=n.keyCode,a=n.ctrlKey;if("Enter"===t&&e.submit(),38===r&&e.state.cursor<e.state.history.length-1&&(n.preventDefault(),n.stopPropagation(),e.setState({cursor:e.state.cursor+1},function(){return e.moveCaretToTheEnd(e.input)})),40===r&&e.state.cursor>-1&&(n.preventDefault(),n.stopPropagation(),e.setState({cursor:e.state.cursor-1},function(){return e.moveCaretToTheEnd(e.input)})),67===r&&a)return e.setState({value:"",error:!1,cursor:-1},e.submit)},e.moveCaretToTheEnd=function(){B(e.state).length;e.input.selectionStart=e.input.value.length,e.input.selectionEnd=e.input.value.length},window.focus=e.focus.bind(Object(x.a)(Object(x.a)(e))),e}return Object(m.a)(t,n),Object(c.a)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"render",value:function(){var n=this,t=this.state,e=t.cursor,r=t.value,o=t.history;return a.a.createElement(I,null,a.a.createElement(S,{offset:(o[e]||r).length}),a.a.createElement(C,{ref:function(t){return n.input=t},error:this.state.error,onKeyDown:this.keyDown,autoFocus:!0,value:o[e]||r,onChange:this.updateInput,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"}))}}]),t}(r.Component);function T(){var n=Object(f.a)(["\n  color: white;\n  max-width: 600px;\n  font-weight: 300;\n  line-height: 23px;\n  white-space: pre-wrap;\n"]);return T=function(){return n},n}function F(){var n=Object(f.a)(["\n  color: #ff93f2;\n  margin-right: 16px;\n"]);return F=function(){return n},n}function P(){var n=Object(f.a)(["\n  color: ",";\n"]);return P=function(){return n},n}function D(){var n=Object(f.a)(["\n  font-size: 16px;\n  font-family: 'Fira Code';\n  font-weight: 500;\n  margin-top: 32px;\n"]);return D=function(){return n},n}var G=d.a.div(D()),A=d.a.span(P(),function(n){return n.error?"#BE3B5D":"#50d299"}),L=d.a.span(F()),Y=d.a.p(T()),z=function(n){function t(){var n,e;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=Object(l.a)(this,(n=Object(s.a)(t)).call.apply(n,[this].concat(o)))).submit=function(n){var t=n?function(n,t){var e=k[n.split(" ")[0]];return e?(window.analytics.track("Terminal > Input",{command:n,unknown:!k[n]}),a.a.createElement(e,{context:t})):null}(n,{clear:e.props.clear}):"";if("function"===typeof t)return t();var r=null===t;e.props.onSubmit({error:!t,output:r?"guillaume.co: Command not found: ".concat(n):t,command:n})},e}return Object(m.a)(t,n),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(n){return n.command!==this.props.command}},{key:"render",value:function(){var n=this.props,t=n.command,e=n.output,r=n.error;return a.a.createElement(G,null,a.a.createElement(L,null,"\u25b6"),null!==t?a.a.createElement(A,{error:r},t):a.a.createElement(M,{onSubmit:this.submit}),e&&a.a.createElement(Y,null,e))}}]),t}(r.Component),N=e(17),R=e.n(N);function W(){var n=Object(f.a)(["\n  color: white;\n  max-width: 600px;\n  font-weight: 500;\n  line-height: 23px;\n  white-space: pre-wrap;\n"]);return W=function(){return n},n}var U=localStorage.getItem("lastLogin");localStorage.setItem("lastLogin",R()().format("MMMM Do YYYY, h:mm a"));var _=d.a.span(W()),H=["(/\u2022-\u2022)/","\\(\u2022-\u2022\\)"],J=function(n){function t(){var n,e;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(l.a)(this,(n=Object(s.a)(t)).call.apply(n,[this].concat(a)))).state={index:0},e.update=function(){e.setState({index:e.state.index?0:1})},e}return Object(m.a)(t,n),Object(c.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.update,500)}},{key:"render",value:function(){var n,t=this.state.index;return a.a.createElement(_,null,(n=H[t],"\nWelcome".concat(U?" back":""," on my portfolio ").concat(n,"\n").concat(U?"Last login: ".concat(U):"","\n")))}}]),t}(r.Component);function Q(){var n=Object(f.a)(["\n  position: absolute;\n  width: 100%;\n  height: ","px;\n  background-color: white;\n  background: linear-gradient(\n    to bottom,\n    rgba(255, 255, 255, 0) 0%,\n    rgba(255, 255, 255, 1) 100%\n  );\n  opacity: 0.025;\n  top: ","px;\n  left: 0;\n  right: 0;\n  animation: slider 5s linear infinite;\n\n  @keyframes slider {\n    0% {\n      top: ","px;\n    }\n    100% {\n      top: ","px;\n    }\n  }\n"]);return Q=function(){return n},n}function K(){var n=Object(f.a)(["\n  width: 990px;\n  height: ","px;\n  background-color: #2d313e;\n  background: url(",");\n  overflow: hidden;\n  padding: 64px;\n  padding-top: 32px;\n  overflow-y: scroll;\n\n  @media (max-width: 700px) {\n    width: 100vw;\n    height: 100vh;\n    padding: 32px;\n    padding-top: 0;\n  }\n"]);return K=function(){return n},n}function q(){var n=Object(f.a)(["\n  position: relative;\n  overflow: hidden;\n  box-shadow: 32px 32px 64px 0 rgba(45, 49, 62, 0.88);\n  border-radius: 16px;\n  @media (max-width: 700px) {\n    border-radius: 0;\n    box-shadow: none;\n  }\n"]);return q=function(){return n},n}var V=128,X=d.a.div(q()),$=d.a.div(K(),600,h.a),Z=d.a.div(Q(),V,function(n){return n.offset},-V,600),nn=function(n){function t(n){var e;return Object(u.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this,n))).state={glitchOffset:-V,entries:[{command:"whoami",error:!1,output:'My name is Guillaume, I am a web developper and Product guy based in Paris, for now. I\u2019m available for all kind of stuff. Find out more by using the terminal \ud83d\ude43 (type "help" to get an overview of the available commands)'}]},e.clear=function(){e.setState({entries:[]})},e.scrollBottom=function(){e.terminal.current.scrollTop=e.terminal.current.scrollHeight},e.submit=function(n){e.setState({entries:e.state.entries.concat([n])},e.scrollBottom)},e.focus=function(){window.focus()},e.terminal=Object(r.createRef)(),e}return Object(m.a)(t,n),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(X,{onClick:this.focus},a.a.createElement(Z,{offset:this.state.glitchOffset}),a.a.createElement($,{ref:this.terminal},a.a.createElement(J,null),this.state.entries.map(function(n,t){var e=n.command,r=n.error,o=n.output;return a.a.createElement(z,{key:t,command:e,error:r,output:o})}),a.a.createElement(z,{clear:this.clear,onSubmit:this.submit,command:null})))}}]),t}(r.Component);function tn(){var n=Object(f.a)(["\n  max-width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #efefef;\n  flex-direction: column;\n  border: 16px solid #2d313e;\n\n  @media (max-width: 700px) {\n    border: 0;\n  }\n"]);return tn=function(){return n},n}var en=d.a.div(tn()),rn=function(n){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(c.a)(t,[{key:"componentDidMount",value:function(){var n=window.analytics=window.analytics||[];if(!n.initialize)if(n.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{n.invoked=!0,n.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],n.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);return e.unshift(t),n.push(e),n}};for(var t=0;t<n.methods.length;t++){var e=n.methods[t];n[e]=n.factory(e)}n.load=function(t,e){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a),n._loadOptions=e},n.SNIPPET_VERSION="4.1.0",n.load("vWEjzF0MaJ2k3UqIRWCxQlkQkrX9xHue"),n.page()}}},{key:"render",value:function(){return a.a.createElement(en,null,a.a.createElement(nn,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(rn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.4fed8eed.chunk.js.map