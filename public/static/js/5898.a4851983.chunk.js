"use strict";(self.webpackChunkms_ui=self.webpackChunkms_ui||[]).push([[5898,7862,4717,8641,6992,6875],{7862:function(e,n,t){t.r(n),t.d(n,{DownArrow:function(){return o},UpArrow:function(){return u}});var r=t(184),o=(0,r.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"})}),u=(0,r.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"})})},3449:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(4925),o=t(2982),u=t(1413),i=t(885),a=t(1357),c=t(7862),s=t(2791),l=t(8820),d=t(184),f=["isSort"],v=["onDoubleClick"];function h(e){var n=e.emptyBody,t=void 0===n?(0,d.jsx)("div",{style:{height:"50px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:"Nothing here"}):n,h=e.head,p=e.data,m=void 0===p?[]:p,x=e.classes,j=e.checkbox,k=e.select,g=e.rowPerPage,_=void 0===g?5:g,y=e.footer,b=void 0===y?[]:y,C=(0,s.useState)(1),w=(0,i.Z)(C,2),S=w[0],P=w[1],N=(0,s.useState)({id:null,state:null}),Z=(0,i.Z)(N,2),M=Z[0],D=Z[1],I=(0,s.useState)([]),T=(0,i.Z)(I,2),F=T[0],B=T[1],Q=k||[null,null],R=(0,i.Z)(Q,2),A=R[0],H=R[1];function E(e,n){return e&&e[n]?e[n].default?"".concat(a.default[n]," ").concat(e[n].name):"".concat(e[n].name):"".concat(a.default[n])}return(0,s.useEffect)((function(){m.length&&B(m.map((function(e,n){var t,r,o=(0,u.Z)({},e);return o.index=n,o.checked=void 0!==(null===(t=A[A.findIndex((function(e){return e.index===n}))])||void 0===t?void 0:t.checked)&&(null===(r=A[A.findIndex((function(e){return e.index===n}))])||void 0===r?void 0:r.checked),o})))}),[m,A]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("table",{className:E(x,"container"),children:[(0,d.jsxs)("tbody",{className:E(x,"body"),children:[(0,d.jsxs)("tr",{className:E(x,"head")+(h.classes?" "+h.classes:""),children:[j&&(0,d.jsx)("td",{className:a.default.checkbox,children:(0,d.jsx)("input",{type:"checkbox",onClick:function(e){return function(e){var n=F.map((function(n){return n.checked=e.target.checked,(0,u.Z)({},n)}));B(n);var t=n.filter((function(e){return e.checked})).map((function(e){return(0,u.Z)({},e)}));H(t)}(e)}})}),h.map((function(e){var n=e.isSort,t=void 0===n||n,o=(0,r.Z)(e,f);return(0,d.jsxs)("td",{onClick:function(){return function(e,n){n&&((null===M||void 0===M?void 0:M.id)!==e?D({id:e,state:"down"}):D({id:"up"===M.state?null:e,state:null===M.state?"down":"down"===M.state?"up":null}))}(o.id,t)},children:[o.label,(0,d.jsx)("span",{style:{visibility:o.id===M.id?"":"hidden"},children:"down"!==M.state?c.UpArrow:c.DownArrow})]},o.id)}))]}),0===m.length?(0,d.jsx)("tr",{children:(0,d.jsx)("td",{colSpan:h.length+1,children:t})}):function(e,n,t){var r=(0,o.Z)(e);return r?"down"===n.state?t.find((function(e){return e.id===n.id})).numberic?r.sort((function(e,t){return e[n.id].key-t[n.id].key})):r.sort((function(e,t){return e[n.id].key.toLowerCase().charCodeAt()-t[n.id].key.toLowerCase().charCodeAt()})):"up"===n.state?t.find((function(e){return e.id===n.id})).numberic?r.sort((function(e,t){return t[n.id].key-e[n.id].key})):r.sort((function(e,t){return t[n.id].key.toLowerCase().charCodeAt()-e[n.id].key.toLowerCase().charCodeAt()})):r:r}(F,M,h).filter((function(e,n){return Math.abs(n-(2*_*S-_-1)/2)<_/2})).map((function(e,n){e.onDoubleClick;var t=(0,r.Z)(e,v);return(0,d.jsxs)("tr",{className:E(x,"row")+(t.classes?" "+t.classes:"")+(t.checked?" "+E(x,"row-selected"):""),onClick:function(e){t.onClick&&t.onClick(e,t)},onDoubleClick:function(e){t.onDoubleClick&&t.onDoubleClick(e,t)},children:[j&&(0,d.jsx)("td",{className:a.default.checkbox,children:(0,d.jsx)("input",{type:"checkbox",checked:t.checked,onClick:function(e){return function(e,n){var t=F.map((function(e){return(0,u.Z)({},e)}));t[t.findIndex((function(e){return e.index===n.index}))].checked=e.target.checked,B(t);var r=t.filter((function(e){return e.checked})).map((function(e){return(0,u.Z)({},e)}));H(r)}(e,t)},onChange:function(){}})}),h.map((function(e){return(0,d.jsx)("td",{colSpan:t[e.id].colSpan||1,children:t[e.id].value},t.id+e.id+""+n)}))]},t.id+""+n)}))]}),(0,d.jsx)("tfoot",{children:(0,d.jsx)("tr",{children:b.map((function(e){return e}))})})]}),(0,d.jsxs)("div",{className:a.default.toolBox,children:[(0,d.jsxs)("div",{className:a.default.pageSelect,children:[(0,d.jsx)("div",{children:"Page: "}),(0,d.jsx)("select",{onChange:function(e){return P(parseInt(e.target.value))},name:"page",value:S,children:(0,o.Z)(Array(Math.ceil(m.length/_))).map((function(e,n){return(0,d.jsx)("option",{value:n+1,children:n+1},n+"option")}))})]}),(0,d.jsxs)("div",{className:a.default.pageNum,children:["of ",Math.ceil(m.length/_)]}),(0,d.jsxs)("div",{className:a.default.iconHolder,children:[(0,d.jsx)(l.kyg,{size:20,onClick:function(){S<=Math.ceil(m.length/_)&&S>1&&P((function(e){return e-1}))}}),(0,d.jsx)(l.mGl,{size:20,onClick:function(){S<Math.ceil(m.length/_)&&S>=1&&P((function(e){return e+1}))}})]})]})]})}},8641:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var r=t(6960);function o(e){return e?function(n){r.Am[e](n,{position:"bottom-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}:function(e){(0,r.Am)(e,{position:"bottom-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}}},5139:function(e,n,t){t.r(n),t.d(n,{useMutateDevice:function(){return p},useMutateProtocol:function(){return h},useMutateTask:function(){return m},useProtcolConfig:function(){return f},useProvision:function(){return d},useServiceInfo:function(){return l},useTask:function(){return v}});var r=t(5861),o=t(7757),u=t.n(o),i=t(4569),a=t.n(i),c=t(1933),s=t(8641);function l(){return(0,c.useQuery)("service-info",(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/microservices").then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),{staleTime:6e4})}function d(e){var n=e.onSuccess,t=void 0===n?function(){}:n,r=(0,c.useQueryClient)(),o=(0,s.default)("error");return(0,c.useMutation)((function(e){return a().get("/devies/provision",{params:{id:e}})}),{onSuccess:function(){t(),r.invalidateQueries("devices-info")},onError:function(e,n,t){var r;o(null===(r=e.response)||void 0===r?void 0:r.data)}})}function f(e){return(0,c.useQuery)("protocol?".concat(e),(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=5;break}return n.next=3,a().get("/protocol",{params:{id:e}}).then((function(e){return e.data}));case 3:return t=n.sent,n.abrupt("return",t);case 5:return n.abrupt("return",0);case 6:case"end":return n.stop()}}),n)}))),{staleTime:1e3})}function v(){return(0,c.useQuery)("task",(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/tasks").then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),{staleTime:6e4})}function h(e){var n=e.onSuccess,t=void 0===n?function(){}:n,r=(0,c.useQueryClient)(),o=(0,s.default)("error");return(0,c.useMutation)((function(e){return a().post("/protocol",e)}),{onSuccess:function(){t(),r.invalidateQueries("service-info")},onError:function(e,n,t){var r;o(null===(r=e.response)||void 0===r?void 0:r.data)}})}function p(e){var n=e.onSuccess,t=void 0===n?function(){}:n,r=(0,c.useQueryClient)(),o=(0,s.default)("error");return(0,c.useMutation)((function(e){return a().post("/devices",e)}),{onSuccess:function(){t(),r.invalidateQueries("devices-info")},onError:function(e,n,t){var r;o(null===(r=e.response)||void 0===r?void 0:r.data)}})}function m(e){var n=e.onSuccess,t=void 0===n?function(){}:n,r=(0,c.useQueryClient)(),o=(0,s.default)("error");return(0,c.useMutation)((function(e){return a().post("/tasks",e)}),{onSuccess:function(){t(),r.invalidateQueries("task")},onError:function(e,n,t){var r;o(null===(r=e.response)||void 0===r?void 0:r.data)}})}},4717:function(e,n,t){t.r(n),t.d(n,{useDevicesInfo:function(){return f},useModelsInfo:function(){return v},useMutateDevice:function(){return l.useMutateDevice},useMutateProtocol:function(){return l.useMutateProtocol},useMutateTask:function(){return l.useMutateTask},useMutationModel:function(){return h},useProtcolConfig:function(){return l.useProtcolConfig},useProvision:function(){return l.useProvision},useServiceInfo:function(){return l.useServiceInfo},useSocket:function(){return d.useSocket},useTask:function(){return l.useTask},useToast:function(){return p}});var r=t(5861),o=t(7757),u=t.n(o),i=t(1933),a=t(4569),c=t.n(a),s=t(8641),l=t(5139),d=t(6875);function f(){return(0,i.useQuery)("devices-info",(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/devices/info").then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),{staleTime:6e4})}function v(){return(0,i.useQuery)("models-info",(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/models/info").then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),{staleTime:6e4})}function h(e){var n=e.onSuccess,t=(0,i.useQueryClient)(),r=(0,s.default)("error");return(0,i.useMutation)((function(e){return c().post("/models",e)}),{onSuccess:function(){n(),t.invalidateQueries("models-info")},onError:function(e,n,t){var o;r(null===(o=e.response)||void 0===o?void 0:o.data)}})}function p(e){return(0,s.default)(e)}},6875:function(e,n,t){t.r(n),t.d(n,{useSocket:function(){return i}});var r=t(885),o=t(2791),u=t(6932);function i(e){var n=(0,o.useRef)((0,u.ZP)()),t=(0,o.useState)([]),i=(0,r.Z)(t,2),a=i[0],c=i[1];return(0,o.useEffect)((function(){return console.log(""),n.current.on("connect",(function(){n.current.emit(e,!0),n.current.on(e,(function(e){c(e)}))})),function(){}}),[n,e]),a}},5898:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(1413),o=t(885),u=t(2803),i=t(3449),a=t(6871),c=t(3504),s=t(3740),l=t(4717),d=t(2791),f=t(9975),v=t(9126),h=t(184);function p(e){var n=e.submitData,t=(e.setSubmitData,(0,d.useState)([])),p=(0,o.Z)(t,2),m=p[0],x=p[1],j=(0,d.useState)(!1),k=(0,o.Z)(j,2),g=k[0],_=k[1],y=(0,d.useState)(null),b=(0,o.Z)(y,2),C=b[0],w=b[1],S=(0,d.useRef)({value:null}),P=(0,d.useRef)({value:null}),N=(0,d.useState)(!1),Z=(0,o.Z)(N,2),M=Z[0],D=Z[1],I=(0,d.useState)(!1),T=(0,o.Z)(I,2),F=T[0],B=T[1],Q=(0,a.s0)(),R=(0,l.useModelsInfo)().data,A=void 0===R?[]:R,H=(0,l.useServiceInfo)(),E=(0,l.useProtcolConfig)(P.current.value),L=(0,l.useProtcolConfig)(S.current.value),O=A.map((function(e){return function(e){return{onClick:function(){_(!0),w(e)},name:{value:(0,h.jsx)("div",{children:e.name}),key:e.name},manufacture:{value:(0,h.jsx)("div",{children:e.manufacture}),key:e.manufacture},type:{value:(0,h.jsx)("div",{children:e.type}),key:e.type},select:{value:(0,h.jsx)("input",{type:"radio",name:"id",value:e.id,onClick:function(e){e.stopPropagation()}}),key:e.id}}}(e)})),U=(0,d.useState)([]),z=(0,o.Z)(U,2),G=z[0],V=z[1],K=(0,d.useState)([]),W=(0,o.Z)(K,2),q=W[0],J=W[1],X=(0,l.useMutateDevice)({onSuccess:function(){console.log("success"),Q(-1)}}).mutate;var Y=(0,l.useToast)("error");return(0,h.jsxs)("div",{className:s.default.firstPage,children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===e.target.id.value?Y("Please select model first"):""===e.target.name.value?Y("Please enter device name"):X((0,r.Z)((0,r.Z)({},n),{},{ModelID:e.target.id.value,name:e.target.name.value,downProtocolID:e.target.downProtocolID.value,upProtocolID:e.target.upProtocolID.value}))},children:[(0,h.jsxs)("div",{className:s.default.inputFields,children:[(0,h.jsx)("div",{className:s.default.inputRow,children:(0,h.jsxs)("div",{className:s.default.inputField,children:[(0,h.jsx)("div",{children:"Name:"}),(0,h.jsx)("input",{name:"name",type:"text",id:"name"})]})}),(0,h.jsxs)("div",{className:s.default.inputRow,children:[(0,h.jsxs)("div",{className:s.default.inputField,children:[(0,h.jsx)("div",{children:"Down Service:"}),(0,h.jsx)("select",{ref:P,children:H.data?H.data.filter((function(e){return"downService"===e.type})).map((function(e,n){return(0,h.jsx)("option",{value:e.id,children:e.name},n)})):null})]}),(0,h.jsxs)("div",{className:s.default.inputField,children:[(0,h.jsx)("div",{children:"Connection"}),(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)("select",{name:"downProtocolID",children:(E.data||[{key:"",value:"",name:""}]).map((function(e,n){return(0,h.jsx)("option",{value:e.ProtocolID,children:e.name},n)}))}),(0,h.jsx)("div",{style:{paddingLeft:"10px",cursor:"pointer"},onClick:function(){V(H.data.find((function(e){return e.id==P.current.value})).ServiceMetaDatas.filter((function(e){return"ProtocolConfig"===e.kind}))),D(!0)},children:(0,h.jsx)(v.Dwu,{})})]})]})]}),(0,h.jsxs)("div",{className:s.default.inputRow,children:[(0,h.jsxs)("div",{className:s.default.inputField,children:[(0,h.jsx)("div",{children:"Up Service:"}),(0,h.jsx)("select",{ref:S,name:"upProtocolID",children:H.data?H.data.filter((function(e){return"upService"===e.type})).map((function(e,n){return(0,h.jsx)("option",{value:e.id,children:e.name},n)})):null})]}),(0,h.jsxs)("div",{className:s.default.inputField,children:[(0,h.jsx)("div",{children:"Server"}),(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)("select",{children:(L.data||[]).map((function(e,n){return(0,h.jsx)("option",{value:e.ProtocolID,children:e.name},n)}))}),(0,h.jsx)("div",{style:{paddingLeft:"10px",cursor:"pointer"},onClick:function(){J(H.data.find((function(e){return e.id==S.current.value})).ServiceMetaDatas.filter((function(e){return"ProtocolConfig"===e.kind}))),B(!0)},children:(0,h.jsx)(v.Dwu,{})})]})]})]})]}),(0,h.jsx)("div",{className:s.default.tableContainer,children:(0,h.jsx)(i.default,{head:[{id:"name",numberic:!1,label:"Name"},{id:"manufacture",numberic:!0,label:"Manufacture"},{id:"type",numberic:!1,label:"Type"},{id:"select",numberic:!1,label:"",isSort:!1}],select:[m,x],data:O,classes:{head:{name:s.default.head,default:!0}}})}),(0,h.jsx)("div",{className:s.default.note,children:"Note: You can click on a row to see model channels"}),(0,h.jsx)(c.rU,{to:"../models/new",children:(0,h.jsx)("div",{children:"If there is no model you need, click here to create one"})}),(0,h.jsx)("input",{type:"submit",value:"Create",className:s.default.submit})]}),null!==C&&(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(u.default,{data:C,open:g,onClose:function(){return _(!1)}})}),(0,h.jsx)(f.default,{open:M,onClose:function(){return D(!1)},data:G}),(0,h.jsx)(f.default,{open:F,onClose:function(){return B(!1)},data:q})]})}},9975:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(1413),o=t(4942),u=t(2982),i=t(7467),a=t(2039),c=t(4717),s=t(184);function l(e){var n=e.trigger,t=e.data,l=e.open,d=void 0!==l&&l,f=e.onClose,v=(0,c.useMutateProtocol)({onSuccess:function(){console.log("success")}}).mutate;return(0,s.jsx)(i.Z,{trigger:n,modal:!0,contentStyle:{backgroundColor:"white"},open:d,onClose:f,children:function(e){return(0,s.jsx)("div",{className:a.default.container,children:(0,s.jsxs)("form",{onSubmit:function(n){var i;n.preventDefault(),[{type:"STRING",key:"name"}].concat((0,u.Z)(t)).map((function(e){return(0,o.Z)({},e.key,n.target[e.key].value)}));var a=[{type:"STRING",key:"name"}].concat((0,u.Z)(t)).map((function(e){return(0,o.Z)({},e.key,n.target[e.key].value)})).reduce((function(e,n){return(0,r.Z)((0,r.Z)({},e),n)}),{});a.MicroserviceID=null===(i=t[0])||void 0===i?void 0:i.MicroserviceID,v(a),e()},children:[(0,s.jsx)("div",{className:a.default.header,children:"Create new config"}),[{type:"STRING",key:"name"}].concat((0,u.Z)(t)).map((function(e){return"ENUM"===e.type?(0,s.jsxs)("div",{className:a.default.row,children:[(0,s.jsx)("span",{children:e.key}),(0,s.jsx)("select",{name:e.key,defaultValue:e.defaultValue,children:JSON.parse(e.values).map((function(e){return(0,s.jsx)("option",{value:e,children:e},e)}))})]},e.key):(0,s.jsxs)("div",{className:a.default.row,children:[(0,s.jsx)("span",{children:e.key}),(0,s.jsx)("input",{type:"text",name:e.key,defaultValue:e.defaultValue})]},e.key)})),(0,s.jsx)("div",{className:a.default.footer,children:(0,s.jsx)("input",{type:"submit",value:"Create",className:a.default.buttonHolder})})]})})}})}},2803:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(4942),o=t(1413),u=t(885),i=t(7467),a=t(2791),c=t(5490),s=t(3449),l=t(184);function d(e){var n=e.trigger,t=e.data,d=e.open,f=void 0!==d&&d,v=e.onClose,h=(0,a.useState)([]),p=(0,u.Z)(h,2),m=p[0],x=p[1];var j=t.ModelChannels,k=Object.keys(j[0]).map((function(e){return{id:e,numberic:(n=j[0][e],"number"===typeof n&&isFinite(n)),label:e};var n})),g=j.map((function(e){return Object.keys(e).reduce((function(n,t){return(0,o.Z)((0,o.Z)({},n),{},(0,r.Z)({},t,{value:e[t],key:e[t]}))}),{})}));return(0,l.jsx)(i.Z,{trigger:n,modal:!0,contentStyle:{backgroundColor:"white",borderRadius:"20px"},open:f,onClose:v,children:function(e){return(0,l.jsxs)("div",{className:c.default.container,children:[(0,l.jsxs)("div",{className:c.default.head,children:[(0,l.jsx)("h1",{className:c.default.header,children:t.name}),(0,l.jsxs)("div",{className:c.default.headContent,children:[(0,l.jsx)("span",{children:"Manufacture:"}),(0,l.jsx)("span",{children:t.manufacture})]}),(0,l.jsxs)("div",{className:c.default.headContent,children:[(0,l.jsx)("span",{children:"Type:"})," ",(0,l.jsx)("span",{children:t.type})]}),(0,l.jsx)("div",{className:c.default.headContent,children:(0,l.jsx)("span",{children:"Channels:"})})]}),(0,l.jsx)("div",{className:c.default.content,children:(0,l.jsx)(s.default,{head:k,select:[m,x],data:g,classes:{head:{name:c.default.head,default:!0}}})}),(0,l.jsx)("div",{onClick:function(){return e()},className:c.default.footer,children:"Close"})]})}})}},1357:function(e,n,t){t.r(n),n.default={container:"Tables_container__AOfyE",body:"Tables_body__pGlvb",head:"Tables_head__0f34Z",checkbox:"Tables_checkbox__p4P+5","row-selected":"Tables_row-selected__8pj6B",row:"Tables_row__uDWua",toolBox:"Tables_toolBox__grbu5",pageSelect:"Tables_pageSelect__+H-5E",pageNum:"Tables_pageNum__197R5",iconHolder:"Tables_iconHolder__UM3jR"}},3740:function(e,n,t){t.r(n),n.default={firstPage:"FirstPage_firstPage__gKphk",tableContainer:"FirstPage_tableContainer__HSC+y",note:"FirstPage_note__qimBP",inputFields:"FirstPage_inputFields__3pVMs",inputRow:"FirstPage_inputRow__Dh+hg",inputField:"FirstPage_inputField__PBc9l",submit:"FirstPage_submit__WtUZd"}},2039:function(e,n,t){t.r(n),n.default={container:"ProtocolBox_container__pPZPi",header:"ProtocolBox_header__oQoAd",row:"ProtocolBox_row__vbzHm",buttonHolder:"ProtocolBox_buttonHolder__InRRK",footer:"ProtocolBox_footer__OBrJP"}},5490:function(e,n,t){t.r(n),n.default={container:"ModelsDetail_container__fbSXl",head:"ModelsDetail_head__-w6yK",header:"ModelsDetail_header__pmtr9",headContent:"ModelsDetail_headContent__Uxov6",content:"ModelsDetail_content__8Nagq",footer:"ModelsDetail_footer__4XtK+"}}}]);
//# sourceMappingURL=5898.a4851983.chunk.js.map