(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(6),i=n.n(c),l=n(1),r=n(2),s=n(4),m=n(3),u=(n(12),n(13),function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={time:(new Date).toLocaleTimeString()},t.timer=function(){t.setState({time:(new Date).toLocaleTimeString()}),console.log((new Date).toLocaleTimeString())},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.timerInterval=setInterval(this.timer,1e3)}},{key:"componentDidUpdate",value:function(t){var e=this.props.name;t.name!==e&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(e))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerInterval)}},{key:"render",value:function(){return this.state.time}}]),n}(o.a.Component)),h=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:0},t.hideClock=function(){t.setState({isClockVisible:!1})},t.showClock=function(){t.setState({isClockVisible:!0})},t.randomName=function(){t.setState({clockName:Math.floor(100*Math.random())})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state.isClockVisible?o.a.createElement(u,{name:this.state.clockName}):"";return o.a.createElement("div",{className:"clock"},o.a.createElement("h1",{className:"clock__title"},"Current time:"," ",o.a.createElement("span",{className:"time"},t)),o.a.createElement("div",{className:"clock__buttons"},o.a.createElement("button",{type:"button",className:"button buttonHide",onClick:this.hideClock},"hide"),o.a.createElement("button",{type:"button",className:"button buttonShow",onClick:this.showClock},"show"),o.a.createElement("button",{type:"button",className:"button randomName",onClick:this.randomName},"random name")))}}]),n}(o.a.Component);i.a.render(o.a.createElement(h,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.0e0214c8.chunk.js.map