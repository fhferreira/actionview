webpackJsonp([32],{157:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){var l={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(l[a]=e[a]);return l}Object.defineProperty(t,"__esModule",{value:!0}),t.CheckboxGroup=t.Checkbox=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},o=l(2),u=a(o);t.Checkbox=u.default.createClass({displayName:"Checkbox",contextTypes:{checkboxGroup:u.default.PropTypes.object.isRequired},componentWillMount:function(){if(!this.context||!this.context.checkboxGroup)throw new Error("The `Checkbox` component must be used as a child of `CheckboxGroup`.")},render:function(){var e=this.context.checkboxGroup,t=e.name,l=e.checkedValues,a=e.onChange,n={};return l&&(n.checked=l.indexOf(this.props.value)>=0),"function"==typeof a&&(n.onChange=a.bind(null,this.props.value)),u.default.createElement("input",r({},this.props,{type:"checkbox",name:t},n))}}),t.CheckboxGroup=u.default.createClass({displayName:"CheckboxGroup",propTypes:{name:o.PropTypes.string,defaultValue:o.PropTypes.array,value:o.PropTypes.array,onChange:o.PropTypes.func,children:o.PropTypes.node.isRequired,Component:o.PropTypes.oneOfType([o.PropTypes.string,o.PropTypes.func,o.PropTypes.object])},getDefaultProps:function(){return{Component:"div"}},childContextTypes:{checkboxGroup:u.default.PropTypes.object},getChildContext:function(){return{checkboxGroup:{name:this.props.name,checkedValues:this.state.value,onChange:this._onCheckboxChange}}},getInitialState:function(){return{value:this.props.value||this.props.defaultValue||[]}},componentWillReceiveProps:function(e){e.value&&this.setState({value:e.value})},render:function(){var e=this.props,t=e.Component,l=(e.name,e.value,e.onChange,e.children),a=n(e,["Component","name","value","onChange","children"]);return u.default.createElement(t,a,l)},getValue:function(){return this.state.value},_isControlledComponent:function(){return!!this.props.value},_onCheckboxChange:function(e,t){var l;l=t.target.checked?this.state.value.concat(e):this.state.value.filter(function(t){return t!==e}),this._isControlledComponent()?this.setState({value:this.props.value}):this.setState({value:l}),"function"==typeof this.props.onChange&&this.props.onChange(l)}})},1992:function(e,t,l){try{(function(){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{actions:(0,m.bindActionCreators)(h,e)}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},i=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),d=function(e,t,l){for(var a=!0;a;){var n=e,r=t,o=l;a=!1,null===n&&(n=Function.prototype);var u=Object.getOwnPropertyDescriptor(n,r);if(void 0!==u){if("value"in u)return u.value;var s=u.get;if(void 0===s)return;return s.call(o)}var i=Object.getPrototypeOf(n);if(null===i)return;e=i,t=r,l=o,a=!0,u=i=void 0}},c=l(2),f=n(c),p=l(38),m=l(39),y=l(2074),h=a(y),E=l(1993),v=function(e){function t(e){r(this,l),d(Object.getPrototypeOf(l.prototype),"constructor",this).call(this,e),this.pid=""}o(t,e),i(t,[{key:"index",value:function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.props.actions.index(this.pid));case 2:return e.abrupt("return",this.props.summary.ecode);case 3:case"end":return e.stop()}},null,this)}},{key:"componentWillMount",value:function(){var e=this.props,t=e.actions,l=e.params.key;t.index(l),this.pid=l}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.actions,l=e.params.key;l!==this.pid&&(t.index(l),this.pid=l)}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(E,s({layout:this.props.layout,index:this.index.bind(this),project:this.props.project.item},this.props.summary)))}}],[{key:"propTypes",value:{actions:c.PropTypes.object.isRequired,location:c.PropTypes.object.isRequired,params:c.PropTypes.object.isRequired,layout:c.PropTypes.object.isRequired,project:c.PropTypes.object.isRequired,summary:c.PropTypes.object.isRequired},enumerable:!0}]);var l=t;return t=(0,p.connect)(function(e){var t=e.layout,l=e.project,a=e.summary;return{layout:t,project:l,summary:a}},u)(t)||t}(c.Component);t.default=v,e.exports=t.default}).call(this)}finally{}},1993:function(e,t,l){try{(function(){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),u=function(e,t,l){for(var a=!0;a;){var n=e,r=t,o=l;a=!1,null===n&&(n=Function.prototype);var u=Object.getOwnPropertyDescriptor(n,r);if(void 0!==u){if("value"in u)return u.value;var s=u.get;if(void 0===s)return;return s.call(o)}var i=Object.getPrototypeOf(n);if(null===i)return;e=i,t=r,l=o,a=!0,u=i=void 0}},s=l(2),i=a(s),d=l(37),c=l(3),f=l(157),p=l(356),m=(l(6),l(4)),y=a(m),h=l(185),E=l(5),v=function(e){function t(e){n(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={pulseShowModel:"charts",pulseStatItems:["new","resolve","close"],assigneeShowModel:"percentage",priorityShowModel:"percentage",moduleShowModel:"percentage"}}return r(t,e),o(t,[{key:"render",value:function(){var e=this,t=this.props,l=t.layout,a=t.project,n=t.data,r=t.options,o=t.loading,u={marginRight:"50px"},s=["#58ca9a","#ee706d","#f7da47","#447eff"];return o?i.default.createElement("div",{style:{marginTop:"50px",textAlign:"center"}},i.default.createElement("img",{src:E,className:"loading"})):i.default.createElement("div",{style:{marginTop:"20px",marginBottom:"30px"}},i.default.createElement("div",{style:{marginBottom:"15px"}},i.default.createElement("span",{style:{fontSize:"19px"}},a.name||"-"),i.default.createElement("span",{style:{marginLeft:"15px",fontSize:"14px"}},"键值：",a.key||"-"),i.default.createElement("span",{style:{marginLeft:"15px",fontSize:"14px"}},"负责人：",a.principal&&a.principal.name||"-"),i.default.createElement("span",{style:{marginLeft:"15px",fontSize:"14px",overflow:"hidden",textOverflow:"ellipsis"}},"备注：",a.description||"-")),n.filters&&n.filters.length>0?i.default.createElement("div",{style:{height:"120px",margin:"0px -15px 25px -15px"}},i.default.createElement(c.FormGroup,null,y.default.map(n.filters||[],function(e,t){return i.default.createElement(c.Col,{sm:3,key:t},i.default.createElement("div",{style:{padding:"30px 0px",textAlign:"center",backgroundColor:s[t],borderRadius:"4px"}},i.default.createElement("div",{style:{fontWeight:600,fontSize:"30px"}},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue"+(y.default.isEmpty(e.query)?"":"?"+h.stringify(e.query||{})),style:{color:"#fff"}},e.count)),i.default.createElement("div",{style:{fontSize:"14px",color:"#fff",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},title:e.name},e.name)))}))):i.default.createElement("div",{style:{paddingLeft:"5px",marginBottom:"20px"}},i.default.createElement("span",{style:u},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue"},"全部问题")),i.default.createElement("span",{style:u},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved"},"未解决的")),i.default.createElement("span",{style:u},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?assignee=me&resolution=Unresolved"},"分配给我的")),i.default.createElement("span",{style:u},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?reporter=me"},"我报告的")),i.default.createElement("span",{style:u},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?watcher=me"},"我关注的")),i.default.createElement("span",{style:u},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?created_at=2w"},"最近增加的")),i.default.createElement("span",{style:u},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?updated_at=2w"},"最近更新的")),i.default.createElement("span",{style:u},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolved_at=2w"},"最近解决的")),i.default.createElement("span",{style:u},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?closed_at=2w"},"最近关闭的"))),i.default.createElement(c.Panel,{style:{height:"320px"},header:i.default.createElement("div",null,i.default.createElement("span",null,"问题动态："+(r.twoWeeksAgo||"")+" ~ 现在"),i.default.createElement("span",{className:"exchange-icon",onClick:function(){return e.setState({pulseShowModel:"detail"==e.state.pulseShowModel?"charts":"detail"})},title:"切换"},i.default.createElement("i",{className:"fa fa-retweet"})))},"detail"==this.state.pulseShowModel&&i.default.createElement(c.Table,{responsive:!0,hover:!0},i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"日期"),y.default.map(n.trend||[],function(e,t){return i.default.createElement("th",{key:t},e.day.substr(5))}),i.default.createElement("th",null,"合计"))),i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("td",null,i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?created_at=2w"},"新建问题")),y.default.map(n.trend||[],function(e,t){return i.default.createElement("td",{key:t},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?created_at="+e.day+"~"+e.day},e.new))}),i.default.createElement("td",null,i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?created_at=2w"},y.default.reduce(n.trend||[],function(e,t){return e+t.new},0)))),i.default.createElement("tr",null,i.default.createElement("td",null,i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolved_at=2w"},"解决问题")),y.default.map(n.trend||[],function(e,t){return i.default.createElement("td",{key:t},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolved_at="+e.day+"~"+e.day},e.resolved))}),i.default.createElement("td",null,i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolved_at=2w"},y.default.reduce(n.trend||[],function(e,t){return e+t.resolved},0)))),i.default.createElement("tr",null,i.default.createElement("td",null,i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?closed_at=2w"},"关闭问题")),y.default.map(n.trend||[],function(e,t){return i.default.createElement("td",{key:t},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?closed_at="+e.day+"~"+e.day},e.closed))}),i.default.createElement("td",null,i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?closed_at=2w"},y.default.reduce(n.trend||[],function(e,t){return e+t.closed},0)))))),"charts"==this.state.pulseShowModel&&i.default.createElement("div",null,i.default.createElement(f.CheckboxGroup,{name:"statItems",value:this.state.pulseStatItems,onChange:function(t){e.setState({pulseStatItems:t})},style:{"float":"right",margin:"5px 10px 0px 0px",height:"30px"}},i.default.createElement("div",{style:{"float":"left"}},i.default.createElement("label",{style:{fontWeight:400}},i.default.createElement(f.Checkbox,{value:"new",style:{"float":"left"}}),i.default.createElement("span",{style:{marginLeft:"2px"}},"新建的"))),i.default.createElement("div",{style:{"float":"left",marginLeft:"8px"}},i.default.createElement("label",{style:{fontWeight:400}},i.default.createElement(f.Checkbox,{value:"resolve"}),i.default.createElement("span",{style:{marginLeft:"2px"}},"已解决的"))),i.default.createElement("div",{style:{"float":"left",marginLeft:"8px"}},i.default.createElement("label",{style:{fontWeight:400}},i.default.createElement(f.Checkbox,{value:"close"}),i.default.createElement("span",{style:{marginLeft:"2px"}},"已关闭的"))))),"charts"==this.state.pulseShowModel&&i.default.createElement("div",{className:"report-shape-container"},i.default.createElement(p.LineChart,{width:.95*l.containerWidth,height:200,data:n.trend||[],style:{margin:"35px auto"}},i.default.createElement(p.XAxis,{dataKey:"day"}),i.default.createElement(p.YAxis,null),i.default.createElement(p.CartesianGrid,{strokeDasharray:"3 3"}),i.default.createElement(p.Tooltip,null),i.default.createElement(p.Legend,null),this.state.pulseStatItems.indexOf("new")!==-1&&i.default.createElement(p.Line,{type:"monotone",dataKey:"new",name:"新建的",stroke:"#4572A7",fill:"#4572A7"}),this.state.pulseStatItems.indexOf("resolve")!==-1&&i.default.createElement(p.Line,{type:"monotone",dataKey:"resolved",name:"已解决的",stroke:"#89A54E",fill:"#89A54E"}),this.state.pulseStatItems.indexOf("close")!==-1&&i.default.createElement(p.Line,{type:"monotone",dataKey:"closed",name:"已关闭的",stroke:"#AA4643",fill:"#AA4643"})))),i.default.createElement(c.Panel,{header:i.default.createElement("div",null,i.default.createElement("span",null,"未解决问题：按经办人"),i.default.createElement("span",{className:"exchange-icon",onClick:function(){return e.setState({assigneeShowModel:"detail"==e.state.assigneeShowModel?"percentage":"detail"})},title:"切换"},i.default.createElement("i",{className:"fa fa-retweet"})))},n.assignee_unresolved_issues&&!y.default.isEmpty(n.assignee_unresolved_issues)?i.default.createElement(c.Table,{responsive:!0,hover:!0},"detail"==this.state.assigneeShowModel&&i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"经办人"),i.default.createElement("th",null,"问题"),y.default.map(r.types||[],function(e){return i.default.createElement("th",{key:e.id},e.name)}))),"percentage"==this.state.assigneeShowModel&&i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"经办人"),i.default.createElement("th",null,"问题"),i.default.createElement("th",null,"百分比"))),"detail"==this.state.assigneeShowModel&&i.default.createElement("tbody",null,y.default.map(n.assignee_unresolved_issues,function(e,t){return i.default.createElement("tr",{key:t},i.default.createElement("td",{style:{width:"20%"}},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&assignee="+t},r.users&&r.users[t]||"")),i.default.createElement("td",{style:{width:"10%"}},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&assignee="+t},e.total||0)),y.default.map(r.types||[],function(l){return i.default.createElement("td",{key:l.id},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&type="+l.id+"&assignee="+t},e[l.id]||0))}))})),"percentage"==this.state.assigneeShowModel&&i.default.createElement("tbody",null,y.default.map(n.assignee_unresolved_issues,function(e,t){return i.default.createElement("tr",{key:t},i.default.createElement("td",{style:{width:"20%"}},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&assignee="+t},r.users&&r.users[t]||"")),i.default.createElement("td",{style:{width:"10%"}},i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&assignee="+t},e.total||0)),i.default.createElement("td",null,i.default.createElement("table",{style:{width:"100%"}},i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("td",{style:{width:e.percent+"%"}},i.default.createElement("div",{className:"color-bar"})),i.default.createElement("td",{style:{width:100-e.percent+"%",paddingLeft:"10px"}},e.percent+"%"))))))}))):i.default.createElement("div",null,"暂无信息")),i.default.createElement(c.Panel,{header:i.default.createElement("div",null,i.default.createElement("span",null,"未解决问题：按优先级"),i.default.createElement("span",{className:"exchange-icon",onClick:function(){return e.setState({priorityShowModel:"detail"==e.state.priorityShowModel?"percentage":"detail"})},title:"切换"},i.default.createElement("i",{className:"fa fa-retweet"})))},n.priority_unresolved_issues&&!y.default.isEmpty(n.priority_unresolved_issues)?i.default.createElement(c.Table,{responsive:!0,hover:!0},"detail"==this.state.priorityShowModel&&i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"优先级"),i.default.createElement("th",null,"问题"),y.default.map(r.types||[],function(e){return i.default.createElement("th",{key:e.id},e.name)}))),"percentage"==this.state.priorityShowModel&&i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"优先级"),i.default.createElement("th",null,"问题"),i.default.createElement("th",null,"百分比"))),"detail"==this.state.priorityShowModel&&i.default.createElement("tbody",null,y.default.map(n.priority_unresolved_issues,function(e,t){return i.default.createElement("tr",{key:t},i.default.createElement("td",{style:{width:"20%"}},r.priorities&&r.priorities[t]?i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&priority="+t},r.priorities[t]):"其他"),i.default.createElement("td",{style:{width:"10%"}},r.priorities&&r.priorities[t]?i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&priority="+t},e.total||0):e.total||0),y.default.map(r.types||[],function(l){return i.default.createElement("td",{key:l.id},r.priorities&&r.priorities[t]?i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&type="+l.id+"&priority="+t},e[l.id]||0):e[l.id]||0)}))})),"percentage"==this.state.priorityShowModel&&i.default.createElement("tbody",null,y.default.map(n.priority_unresolved_issues,function(e,t){return i.default.createElement("tr",{key:t},i.default.createElement("td",{style:{width:"20%"}},r.priorities&&r.priorities[t]?i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&priority="+t},r.priorities[t]):"其他"),i.default.createElement("td",{style:{width:"10%"}},r.priorities&&r.priorities[t]?i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&priority="+t},e.total||0):e.total||0),i.default.createElement("td",null,i.default.createElement("table",{style:{width:"100%"}},i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("td",{style:{width:e.percent+"%"}},i.default.createElement("div",{className:"color-bar"})),i.default.createElement("td",{style:{width:100-e.percent+"%",paddingLeft:"10px"}},e.percent+"%"))))))}))):i.default.createElement("div",null,"暂无信息")),i.default.createElement(c.Panel,{header:i.default.createElement("div",null,i.default.createElement("span",null,"未解决问题：按模块"),i.default.createElement("span",{className:"exchange-icon",onClick:function(){return e.setState({moduleShowModel:"detail"==e.state.moduleShowModel?"percentage":"detail"})},title:"切换"},i.default.createElement("i",{className:"fa fa-retweet"})))},n.module_unresolved_issues&&!y.default.isEmpty(n.module_unresolved_issues)?i.default.createElement(c.Table,{responsive:!0,hover:!0},"detail"==this.state.moduleShowModel&&i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"模块"),i.default.createElement("th",null,"问题"),y.default.map(r.types||[],function(e){return i.default.createElement("th",{key:e.id},e.name)}))),"percentage"==this.state.moduleShowModel&&i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"模块"),i.default.createElement("th",null,"问题"),i.default.createElement("th",null,"百分比"))),"detail"==this.state.moduleShowModel&&i.default.createElement("tbody",null,y.default.map(n.module_unresolved_issues,function(e,t){return i.default.createElement("tr",{key:t},i.default.createElement("td",{style:{width:"20%"}},r.modules&&r.modules[t]?i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&module="+t},r.modules[t]):"其他"),i.default.createElement("td",{style:{width:"10%"}},r.modules&&r.modules[t]?i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&module="+t},e.total||0):e.total||0),y.default.map(r.types||[],function(l){return i.default.createElement("td",{key:l.id},r.modules&&r.modules[t]?i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&type="+l.id+"&module="+t},e[l.id]||0):e[l.id]||0)}))})),"percentage"==this.state.moduleShowModel&&i.default.createElement("tbody",null,y.default.map(n.module_unresolved_issues,function(e,t){return i.default.createElement("tr",{key:t},i.default.createElement("td",{style:{width:"20%"}},r.modules&&r.modules[t]?i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&module="+t},r.modules[t]):"其他"),i.default.createElement("td",{style:{width:"10%"}},r.modules&&r.modules[t]?i.default.createElement(d.Link,{to:"/project/"+a.key+"/issue?resolution=Unresolved&module="+t},e.total||0):e.total||0),i.default.createElement("td",null,i.default.createElement("table",{style:{width:"100%"}},i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("td",{style:{width:e.percent+"%"}},i.default.createElement("div",{className:"color-bar"})),i.default.createElement("td",{style:{width:100-e.percent+"%",paddingLeft:"10px"}},e.percent+"%"))))))}))):i.default.createElement("div",null,"暂无信息")))}}],[{key:"propTypes",value:{layout:s.PropTypes.object.isRequired,project:s.PropTypes.object.isRequired,data:s.PropTypes.object.isRequired,options:s.PropTypes.object.isRequired,loading:s.PropTypes.bool.isRequired,index:s.PropTypes.func.isRequired},enumerable:!0}]),t}(s.Component);t.default=v,e.exports=t.default}).call(this)}finally{}},2074:function(e,t,l){try{(function(){"use strict";function e(e){return(0,a.asyncFuncCreator)({constant:"PROJECT_SUMMARY",promise:function(t){return t.request({url:"/project/"+e+"/summary"})}})}Object.defineProperty(t,"__esModule",{value:!0}),t.index=e;var a=l(41)}).call(this)}finally{}}});
//# sourceMappingURL=summary-77d12d87b63b3337ee8e.js.map