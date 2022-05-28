"use strict";(self.webpackChunkms_ui=self.webpackChunkms_ui||[]).push([[895,178,634,740,441,155,868,423,118,633,819,551],{2178:function(e,t,n){n.r(t),n.d(t,{downProtocol:function(){return i},upProtocol:function(){return a}});var a={mqtt:[{name:"host",default:"",isAdvance:!1},{name:"port",default:"",isAdvance:!1},{name:"qos",default:2,isAdvance:!1},{name:"protocol",default:"",isAdvance:!0},{name:"wsOption",default:"",isAdvance:!0},{name:"keepalive",default:"",isAdvance:!0},{name:"reschedulePings",default:"",isAdvance:!0},{name:"reconnectPeriod",default:"",isAdvance:!0},{name:"connectTimeout",default:"",isAdvance:!0},{name:"username",default:"",isAdvance:!0},{name:"password",default:"",isAdvance:!0},{name:"queueQoZero",default:"",isAdvance:!0}]},i={modbusRTU:[{name:"path",default:"",isAdvance:!1},{name:"unitId",default:"",isAdvance:!1},{name:"baudRate",default:"",isAdvance:!1},{name:"parity",default:"",isAdvance:!1},{name:"stopBits",default:"",isAdvance:!0},{name:"dataBits",default:"",isAdvance:!0}],modbusTCP:[{name:"host",default:"",isAdvance:!1},{name:"port",default:"",isAdvance:!1},{name:"unitId",default:"",isAdvance:!1}]}},5898:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(1413),i=n(885),s=n(2803),l=n(3449),u=n(3504),d=n(3740),r=n(4717),c=n(2791),o=n(184);function f(e){var t=e.setIndex,n=e.submitData,f=e.setSubmitData,m=(0,c.useState)([]),v=(0,i.Z)(m,2),x=v[0],p=v[1],h=(0,c.useState)(!1),j=(0,i.Z)(h,2),_=j[0],b=j[1],N=(0,c.useState)(null),y=(0,i.Z)(N,2),C=y[0],g=y[1],P=(0,r.useModelsInfo)().data,S=(void 0===P?[]:P).map((function(e){return function(e){return{name:{value:(0,o.jsx)("div",{onClick:function(){b(!0),g(e.id)},children:e.name}),key:e.name},manufacture:{value:(0,o.jsx)("div",{onClick:function(){b(!0),g(e.id)},children:e.manufacture}),key:e.manufacture},type:{value:(0,o.jsx)("div",{onClick:function(){b(!0),g(e.id)},children:e.type}),key:e.type},select:{value:(0,o.jsx)("input",{type:"radio",name:"id",value:e.id}),key:e.id}}}(e)}));var k=(0,r.useToast)("error");return(0,o.jsxs)("div",{className:d.default.firstPage,children:[(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===e.target.id.value?k("Please select model first"):""===e.target.name.value?k("Please enter device name"):""===e.target.interval.value?k("Please enter device inverval"):(f((0,a.Z)((0,a.Z)({},n),{},{modelId:e.target.id.value,name:e.target.name.value,interval:e.target.interval.value})),t(1))},children:[(0,o.jsxs)("div",{className:d.default.inputFields,children:[(0,o.jsxs)("div",{className:d.default.inputField,children:[(0,o.jsx)("div",{children:"Name:"}),(0,o.jsx)("input",{name:"name",type:"text",id:"name"})]}),(0,o.jsxs)("div",{className:d.default.inputField,children:[(0,o.jsx)("div",{children:"Interval:"}),(0,o.jsx)("input",{name:"interval",type:"number",id:"interval"})]})]}),(0,o.jsx)("div",{className:d.default.tableContainer,children:(0,o.jsx)(l.default,{head:[{id:"name",numberic:!1,label:"Name"},{id:"manufacture",numberic:!0,label:"Manufacture"},{id:"type",numberic:!1,label:"Type"},{id:"select",numberic:!1,label:"",isSort:!1}],select:[x,p],data:S,classes:{head:{name:d.default.head,default:!0}}})}),(0,o.jsx)("div",{className:d.default.note,children:"Note: You can click on a row to see model channels"}),(0,o.jsx)(u.rU,{to:"../models/new",children:(0,o.jsx)("div",{children:"If there is no model you need, click here to create one"})}),(0,o.jsx)("input",{type:"submit",value:"Next",className:d.default.submit})]}),null!==C&&(0,o.jsx)(s.default,{modelId:C,open:_,onClose:function(){return b(!1)}})]})}},6441:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(885),i=n(2178),s=n(1155),l=n(2791),u=n(184);function d(e){var t=e.setIndex,n=(e.submitData,e.setSubmitData,(0,l.useState)(Object.keys(i.upProtocol)[0])),d=(0,a.Z)(n,2),r=d[0],c=d[1];return(0,u.jsxs)("div",{className:s.default.container,children:[(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(2)},children:[(0,u.jsxs)("div",{className:s.default.select,children:[(0,u.jsx)("div",{children:"Chose protocol to upload data"}),(0,u.jsx)("select",{name:"upProtocol",onChange:function(e){c(e.target.value)},value:r,children:Object.keys(i.upProtocol).map((function(e){return(0,u.jsx)("option",{value:e,children:e})}))})]}),(0,u.jsxs)("div",{className:s.default.select,children:[(0,u.jsx)("div",{children:"Protocol config method"}),(0,u.jsx)("select",{name:"config",children:(0,u.jsx)("option",{children:" use default config"})})]}),(0,u.jsx)("input",{type:"submit",value:"Next",className:s.default.submit})]}),(0,u.jsx)("button",{className:s.default.back,onClick:function(){return t(0)},children:"Back"})]})}},3868:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(885),i=n(2178),s=n(3423),l=n(2791),u=n(184);function d(e){var t=e.setIndex,n=(e.submitData,e.setSubmitData,(0,l.useState)(Object.keys(i.downProtocol)[0])),d=(0,a.Z)(n,2),r=d[0],c=d[1];return(0,u.jsx)("div",{className:s.default.container,children:(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(2)},children:[(0,u.jsxs)("div",{className:s.default.select,children:[(0,u.jsx)("div",{children:"Chose protocol to upload data"}),(0,u.jsx)("select",{name:"downProtocol",onChange:function(e){c(e.target.value)},value:r,children:Object.keys(i.downProtocol).map((function(e){return(0,u.jsx)("option",{value:e,children:e})}))})]}),i.downProtocol[r].map((function(e,t){return(0,u.jsxs)("div",{className:s.default.select,children:[(0,u.jsx)("div",{children:e.name}),(0,u.jsx)("input",{name:e.name,type:"text"})]})})),(0,u.jsx)("input",{type:"submit",value:"Create",className:s.default.submit})]})})}},3694:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(885),i=n(9468),s=n(2791),l=n(8118),u=n(5898),d=n(6441),r=n(3868),c=n(184);function o(){var e=(0,s.useState)(0),t=(0,a.Z)(e,2),n=t[0],o=t[1],f=(0,s.useState)({}),m=(0,a.Z)(f,2),v=m[0],x=m[1];return(0,c.jsx)("div",{className:l.default.container,children:(0,c.jsx)("div",{className:l.default.Carousel,children:(0,c.jsxs)(i.Carousel,{toolbars:!1,Index:n%3,children:[(0,c.jsx)(u.default,{setIndex:o,submitData:v,setSubmitData:x}),(0,c.jsx)(d.default,{setIndex:o}),(0,c.jsx)(r.default,{}),(0,c.jsx)("div",{})]})})})}},2288:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(4942),i=n(1413),s=n(2982),l=n(885),u=n(1633),d=n(2791),r=n(4717),c=n(8182),o=n(6871),f=n(184);function m(){var e=(0,o.s0)(),t=(0,d.useState)("modbusChannels"),n=(0,l.Z)(t,2),m=n[0],p=n[1],h=(0,d.useState)([]),j=(0,l.Z)(h,2),_=j[0],b=j[1],N=(0,d.useState)(!1),y=(0,l.Z)(N,2),C=y[0],g=y[1],P=(0,r.useMutationModel)({onSuccess:function(){return e(-1)}}).mutate,S={modbusChannels:["channel_name","fc","addr","quantity","parse","scale","precision"]},k=(0,d.useRef)();function F(e){e.preventDefault(),b([].concat((0,s.Z)(_),[S[m].map((function(t,n){return"number"===e.target[t].dataset.type?parseFloat(e.target[t].value):e.target[t].value}))])),console.log("reset"),e.target.reset(),e.target.blur()}function A(e,t){e.preventDefault(),_[t]=S[m].map((function(t,n){return"number"===e.target[t].dataset.type?parseFloat(e.target[t].value):e.target[t].value})),b(_)}return(0,f.jsxs)("div",{className:u.default.container,children:[(0,f.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},ref:k,children:[(0,f.jsxs)("div",{className:u.default.inputFields,children:[(0,f.jsxs)("div",{className:u.default.inputField,children:[(0,f.jsx)("div",{children:"Name:"}),(0,f.jsx)("input",{name:"name",type:"text",id:"name"})]}),(0,f.jsxs)("div",{className:u.default.inputField,children:[(0,f.jsx)("div",{children:"Manufacture:"}),(0,f.jsx)("input",{name:"manufacture",type:"text",id:"manufacture"})]})]}),(0,f.jsx)("div",{className:u.default.inputFields,children:(0,f.jsxs)("div",{className:u.default.inputField,children:[(0,f.jsx)("div",{children:"Type: "}),(0,f.jsx)("select",{className:u.default.field,onChange:function(e){return p(e.target.value)},children:(0,f.jsx)("option",{value:"modbusChannels",children:"Modbus"})})]})}),(0,f.jsx)("input",{type:"submit",style:{display:"none"}})]}),(0,f.jsx)("div",{className:u.default.tableContainer,children:(0,f.jsxs)("div",{className:u.default.table,children:[(0,f.jsx)("div",{className:u.default.tr,children:{modbusChannels:["Channel Name","Function","Address","Quantity","Parse","Scale","Precision"]}[m].map((function(e,t){return(0,f.jsx)("div",{className:u.default.td,children:(0,f.jsx)("div",{children:e})},"tableHead"+t)}))}),_.map((function(e,t){return(0,f.jsxs)("form",{className:u.default.tr,onSubmit:function(e){A(e,t)},onBlur:function(e){A(e,t)},children:[(0,f.jsx)(x,{channel:e}),(0,f.jsx)("input",{type:"submit",hidden:!0})]},"channels"+t)})),(0,f.jsxs)("form",{className:(0,c.Z)([u.default.tr,u.default.addRow,C&&u.default.addRowactive]),onSubmit:F,onFocus:function(e){F(e),g(!0)},onBlur:function(e){F(e),g(!1)},children:[(0,f.jsx)(v,{}),(0,f.jsx)("input",{type:"submit",hidden:!0})]}),(0,f.jsx)("button",{className:u.default.next,onClick:function(){var e={name:k.current.name.value,manufacture:k.current.manufacture.value,type:m,channels:_.map((function(e){return e.reduce((function(e,t,n){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},S[m][n],t))}),{})}))};P(e)},children:"Create"})]})})]})}function v(e){e.type;return(0,f.jsx)(x,{})}function x(e){var t=e.channel,n=void 0===t?["","03","","1","Int16BE",1,1]:t,a=(0,d.useState)("1"),i=(0,l.Z)(a,2),s=i[0],r=i[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:u.default.td,children:(0,f.jsx)("input",{type:"text",name:"channel_name",defaultValue:n[0],required:!0})}),(0,f.jsx)("div",{className:u.default.td,children:(0,f.jsx)("select",{name:"fc",defaultValue:n[1],children:(0,f.jsx)("option",{value:"03",children:"03"})})}),(0,f.jsx)("div",{className:u.default.td,children:(0,f.jsx)("input",{type:"text",name:"addr",defaultValue:n[2],required:!0})}),(0,f.jsx)("div",{className:u.default.td,children:(0,f.jsxs)("select",{name:"quantity",onChange:function(e){return r(e.target.value)},"data-type":"number",defaultValue:n[3],children:[(0,f.jsx)("option",{value:"1",children:"1"}),(0,f.jsx)("option",{value:"2",children:"2"}),(0,f.jsx)("option",{value:"4",children:"4"})]})}),(0,f.jsx)("div",{className:u.default.td,children:(0,f.jsxs)("select",{name:"parse",defaultValue:n[4],children:["1"===s&&["Int16BE","Int16LE","UInt16BE","UInt16LE"].map((function(e){return(0,f.jsx)("option",{value:e,children:e},e)})),"2"===s&&["Int32BE","Int32LE","UInt32BE","UInt32LE","FloatBE","FloatLE"].map((function(e){return(0,f.jsx)("option",{value:e,children:e},e)})),"4"===s&&["BigInt64BE","BigInt64LE","BigUInt64BE","BigUInt64LE","DoubleBE","DoubleLE"].map((function(e){return(0,f.jsx)("option",{value:e,children:e},e)}))]})}),(0,f.jsx)("div",{className:u.default.td,children:(0,f.jsx)("input",{type:"number",name:"scale",step:"any",defaultValue:n[5]||1,"data-type":"number"})}),(0,f.jsx)("div",{className:u.default.td,children:(0,f.jsx)("input",{type:"number",name:"precision",defaultValue:n[6]||1,"data-type":"number"})})]})}},73:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(885),i=n(3449),s=n(2791),l=n(2819),u=n(4717),d=n(2803),r=n(3504),c=n(184);function o(){var e=(0,u.useModelsInfo)().data,t=void 0===e?[]:e,n=(0,s.useState)([]),o=(0,a.Z)(n,2),f=o[0],m=o[1],v=(0,s.useState)(!1),x=(0,a.Z)(v,2),p=x[0],h=x[1],j=(0,s.useState)(null),_=(0,a.Z)(j,2),b=_[0],N=_[1],y=t.map((function(e){return function(e){return{name:{value:(0,c.jsx)("div",{onClick:function(){h(!0),N(e.id)},children:e.name}),key:e.name},manufacture:{value:(0,c.jsx)("div",{onClick:function(){h(!0),N(e.id)},children:e.manufacture}),key:e.manufacture},type:{value:(0,c.jsx)("div",{onClick:function(){h(!0),N(e.id)},children:e.type}),key:e.type}}}(e)}));return(0,c.jsxs)("div",{className:l.default.container,children:[(0,c.jsx)("div",{className:l.default.buttonHolder,children:(0,c.jsx)(r.rU,{to:"new",children:(0,c.jsx)("div",{className:l.default.createButton,children:"+ Create"})})}),(0,c.jsxs)("div",{className:l.default.tableContainer,children:[(0,c.jsx)(i.default,{head:[{id:"name",numberic:!1,label:"Name"},{id:"manufacture",numberic:!0,label:"Manufacture"},{id:"type",numberic:!1,label:"Type"}],select:[f,m],data:y,classes:{head:{name:l.default.head,default:!0}}}),null!==b&&(0,c.jsx)(d.default,{modelId:b,open:p,onClose:function(){return h(!1)}})]})]})}},9591:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(6871),i=n(3504),s=n(7250),l=n(73),u=n(3694),d=n(2288),r=n(3551),c=n(184);function o(){var e=(0,a.TH)(),t=function(e){switch(e.pathname.split("/")[2]){case"Devices":case"devices":return"Devices";case"models":case"Models":return"Models";default:return""}};return(0,c.jsxs)("div",{className:r.default.container,children:[(0,c.jsx)("h1",{children:"Devices Management"}),(0,c.jsxs)("div",{className:r.default.tabsName,children:[(0,c.jsx)(i.rU,{to:"devices",style:{color:"Devices"===t(e)?"#8139ff":"#707683",borderBottom:"Devices"===t(e)?"3px solid #8139ff":"none"},children:"Devices"}),(0,c.jsx)(i.rU,{to:"models",style:{color:"Models"===t(e)?"#8139ff":"#707683",borderBottom:"Models"===t(e)?"3px solid #8139ff":"none"},children:"Models"})]}),(0,c.jsxs)(a.Z5,{children:[(0,c.jsx)(a.AW,{index:!0,element:(0,c.jsx)(a.Fg,{to:"devices"})}),(0,c.jsx)(a.AW,{element:(0,c.jsx)(s.default,{}),path:"/devices"}),(0,c.jsx)(a.AW,{element:(0,c.jsx)(u.default,{}),path:"/devices/new"}),(0,c.jsx)(a.AW,{element:(0,c.jsx)(l.default,{}),path:"/models"}),(0,c.jsx)(a.AW,{element:(0,c.jsx)(d.default,{}),path:"/models/new"})]})]})}},3740:function(e,t,n){n.r(t),t.default={firstPage:"FirstPage_firstPage__B4+J4",tableContainer:"FirstPage_tableContainer__w1s02",note:"FirstPage_note__gsMgN",inputFields:"FirstPage_inputFields__f3mlk",inputField:"FirstPage_inputField__z-xTz",submit:"FirstPage_submit__6KYHV"}},1155:function(e,t,n){n.r(t),t.default={container:"SecondPage_container__OW8nm",select:"SecondPage_select__FDTkS",submit:"SecondPage_submit__0pB19",back:"SecondPage_back__P8Qfl"}},3423:function(e,t,n){n.r(t),t.default={container:"ThirdPage_container__Mn+Ia",select:"ThirdPage_select__RFKCv",submit:"ThirdPage_submit__63Acn"}},8118:function(e,t,n){n.r(t),t.default={container:"Create_container__-eLbu",Carousel:"Create_Carousel__4XdDj"}},1633:function(e,t,n){n.r(t),t.default={container:"Create_container__slGu8",inputFields:"Create_inputFields__dXLeu",inputField:"Create_inputField__O0i+y",field:"Create_field__as6i3",tableContainer:"Create_tableContainer__ZuNta",table:"Create_table__a7c0y",tr:"Create_tr__Bunrt",td:"Create_td__AjYTY",addRow:"Create_addRow__Sgari",addRowactive:"Create_addRowactive__uLzEv",next:"Create_next__NzRsY"}},2819:function(e,t,n){n.r(t),t.default={container:"Models_container__U5MAK",tableContainer:"Models_tableContainer__yLtlf",buttonHolder:"Models_buttonHolder__nkvOh",createButton:"Models_createButton__i+tMi"}},3551:function(e,t,n){n.r(t),t.default={container:"DevicesManagement_container__tQPBm",tabsName:"DevicesManagement_tabsName__r1QSf",tabsContainer:"DevicesManagement_tabsContainer__5C1p6"}}}]);
//# sourceMappingURL=895.e0b462f5.chunk.js.map