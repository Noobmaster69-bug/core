"use strict";(self.webpackChunkms_ui=self.webpackChunkms_ui||[]).push([[3868,2178,3423],{2178:function(e,a,n){n.r(a),n.d(a,{downProtocol:function(){return d},upProtocol:function(){return t}});var t={mqtt:[{name:"host",default:"",isAdvance:!1},{name:"port",default:"",isAdvance:!1},{name:"qos",default:2,isAdvance:!1},{name:"protocol",default:"",isAdvance:!0},{name:"wsOption",default:"",isAdvance:!0},{name:"keepalive",default:"",isAdvance:!0},{name:"reschedulePings",default:"",isAdvance:!0},{name:"reconnectPeriod",default:"",isAdvance:!0},{name:"connectTimeout",default:"",isAdvance:!0},{name:"username",default:"",isAdvance:!0},{name:"password",default:"",isAdvance:!0},{name:"queueQoZero",default:"",isAdvance:!0}]},d={modbusRTU:[{name:"path",default:"",isAdvance:!1},{name:"unitId",default:"",isAdvance:!1},{name:"baudRate",default:"",isAdvance:!1},{name:"parity",default:"",isAdvance:!1},{name:"stopBits",default:"",isAdvance:!0},{name:"dataBits",default:"",isAdvance:!0}],modbusTCP:[{name:"host",default:"",isAdvance:!1},{name:"port",default:"",isAdvance:!1},{name:"unitId",default:"",isAdvance:!1}]}},3868:function(e,a,n){n.r(a),n.d(a,{default:function(){return c}});var t=n(885),d=n(2178),s=n(3423),u=n(2791),i=n(184);function c(e){var a=e.setIndex,n=(e.submitData,e.setSubmitData,(0,u.useState)(Object.keys(d.downProtocol)[0])),c=(0,t.Z)(n,2),o=c[0],l=c[1];return(0,i.jsx)("div",{className:s.default.container,children:(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(2)},children:[(0,i.jsxs)("div",{className:s.default.select,children:[(0,i.jsx)("div",{children:"Chose protocol to upload data"}),(0,i.jsx)("select",{name:"downProtocol",onChange:function(e){l(e.target.value)},value:o,children:Object.keys(d.downProtocol).map((function(e){return(0,i.jsx)("option",{value:e,children:e})}))})]}),d.downProtocol[o].map((function(e,a){return(0,i.jsxs)("div",{className:s.default.select,children:[(0,i.jsx)("div",{children:e.name}),(0,i.jsx)("input",{name:e.name,type:"text"})]})})),(0,i.jsx)("input",{type:"submit",value:"Create",className:s.default.submit})]})})}},3423:function(e,a,n){n.r(a),a.default={container:"ThirdPage_container__Mn+Ia",select:"ThirdPage_select__RFKCv",submit:"ThirdPage_submit__63Acn"}}}]);
//# sourceMappingURL=3868.0addfbe4.chunk.js.map