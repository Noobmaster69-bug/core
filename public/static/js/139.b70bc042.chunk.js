"use strict";(self.webpackChunkms_ui=self.webpackChunkms_ui||[]).push([[139,449,862,357,717,641,992,875,582],{7862:function(e,n,t){t.r(n),t.d(n,{DownArrow:function(){return o},UpArrow:function(){return i}});var r=t(184),o=(0,r.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"})}),i=(0,r.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"})})},3449:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(4925),o=t(2982),i=t(1413),c=t(885),u=t(1357),a=t(7862),s=t(2791),l=t(8820),d=t(184),f=["isSort"],h=["onDoubleClick"];function m(e){var n=e.emptyBody,t=void 0===n?(0,d.jsx)("div",{style:{height:"50px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:"Nothing here"}):n,m=e.head,v=e.data,p=void 0===v?[]:v,x=e.classes,b=e.checkbox,k=e.select,y=e.rowPerPage,g=void 0===y?5:y,w=(0,s.useState)(1),j=(0,c.Z)(w,2),_=j[0],C=j[1],S=(0,s.useState)({id:null,state:null}),Z=(0,c.Z)(S,2),M=Z[0],I=Z[1],T=(0,s.useState)([]),A=(0,c.Z)(T,2),N=A[0],O=A[1],L=k||[null,null],P=(0,c.Z)(L,2),B=P[0],D=P[1];function H(e,n){return e&&e[n]?e[n].default?"".concat(u.default[n]," ").concat(e[n].name):"".concat(e[n].name):"".concat(u.default[n])}return(0,s.useEffect)((function(){p.length&&O(p.map((function(e,n){var t,r,o=(0,i.Z)({},e);return o.index=n,o.checked=void 0!==(null===(t=B[B.findIndex((function(e){return e.index===n}))])||void 0===t?void 0:t.checked)&&(null===(r=B[B.findIndex((function(e){return e.index===n}))])||void 0===r?void 0:r.checked),o})))}),[p,B]),(0,d.jsxs)("div",{children:[(0,d.jsx)("table",{className:H(x,"container"),children:(0,d.jsxs)("tbody",{className:H(x,"body"),children:[(0,d.jsxs)("tr",{className:H(x,"head")+(m.classes?" "+m.classes:""),children:[b&&(0,d.jsx)("td",{className:u.default.checkbox,children:(0,d.jsx)("input",{type:"checkbox",onClick:function(e){return function(e){var n=N.map((function(n){return n.checked=e.target.checked,(0,i.Z)({},n)}));O(n);var t=n.filter((function(e){return e.checked})).map((function(e){return(0,i.Z)({},e)}));D(t)}(e)}})}),m.map((function(e){var n=e.isSort,t=void 0===n||n,o=(0,r.Z)(e,f);return(0,d.jsxs)("td",{onClick:function(){return function(e,n){n&&((null===M||void 0===M?void 0:M.id)!==e?I({id:e,state:"down"}):I({id:"up"===M.state?null:e,state:null===M.state?"down":"down"===M.state?"up":null}))}(o.id,t)},children:[o.label,(0,d.jsx)("span",{style:{visibility:o.id===M.id?"":"hidden"},children:"down"!==M.state?a.UpArrow:a.DownArrow})]},o.id)}))]}),0===p.length?(0,d.jsx)("tr",{children:(0,d.jsx)("td",{colSpan:m.length+1,children:t})}):function(e,n,t){var r=(0,o.Z)(e);return r?"down"===n.state?t.find((function(e){return e.id===n.id})).numberic?r.sort((function(e,t){return e[n.id].key-t[n.id].key})):r.sort((function(e,t){return e[n.id].key.toLowerCase().charCodeAt()-t[n.id].key.toLowerCase().charCodeAt()})):"up"===n.state?t.find((function(e){return e.id===n.id})).numberic?r.sort((function(e,t){return t[n.id].key-e[n.id].key})):r.sort((function(e,t){return t[n.id].key.toLowerCase().charCodeAt()-e[n.id].key.toLowerCase().charCodeAt()})):r:r}(N,M,m).filter((function(e,n){return Math.abs(n-(2*g*_-g-1)/2)<g/2})).map((function(e,n){e.onDoubleClick;var t=(0,r.Z)(e,h);return(0,d.jsxs)("tr",{className:H(x,"row")+(t.classes?" "+t.classes:"")+(t.checked?" "+H(x,"row-selected"):""),onClick:function(e){t.onClick&&t.onClick(e,t)},onDoubleClick:function(e){return t.onDoubleClick(e,t)},children:[b&&(0,d.jsx)("td",{className:u.default.checkbox,children:(0,d.jsx)("input",{type:"checkbox",checked:t.checked,onClick:function(e){return function(e,n){var t=N.map((function(e){return(0,i.Z)({},e)}));t[t.findIndex((function(e){return e.index===n.index}))].checked=e.target.checked,O(t);var r=t.filter((function(e){return e.checked})).map((function(e){return(0,i.Z)({},e)}));D(r)}(e,t)},onChange:function(){}})}),m.map((function(e){return(0,d.jsx)("td",{colSpan:t[e.id].colSpan||1,children:t[e.id].value},t.id+e.id+""+n)}))]},t.id+""+n)}))]})}),(0,d.jsxs)("div",{className:u.default.toolBox,children:[(0,d.jsxs)("div",{className:u.default.pageSelect,children:[(0,d.jsx)("div",{children:"Page: "}),(0,d.jsx)("select",{onChange:function(e){return C(parseInt(e.target.value))},name:"page",value:_,children:(0,o.Z)(Array(Math.ceil(p.length/g))).map((function(e,n){return(0,d.jsx)("option",{value:n+1,children:n+1},n+"option")}))})]}),(0,d.jsxs)("div",{className:u.default.pageNum,children:["of ",Math.ceil(p.length/g)]}),(0,d.jsxs)("div",{className:u.default.iconHolder,children:[(0,d.jsx)(l.kyg,{size:20,onClick:function(){_<=Math.ceil(p.length/g)&&_>1&&C((function(e){return e-1}))}}),(0,d.jsx)(l.mGl,{size:20,onClick:function(){_<Math.ceil(p.length/g)&&_>=1&&C((function(e){return e+1}))}})]})]})]})}},8641:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var r=t(6960);function o(e){return e?function(n){r.Am[e](n,{position:"bottom-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}:function(e){(0,r.Am)(e,{position:"bottom-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}}},5139:function(e,n,t){t.r(n),t.d(n,{useServiceInfo:function(){return s}});var r=t(5861),o=t(7757),i=t.n(o),c=t(4569),u=t.n(c),a=t(1933);function s(){return(0,a.useQuery)("service-info",(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/microservices").then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),{staleTime:6e4})}},4717:function(e,n,t){t.r(n),t.d(n,{useDevicesInfo:function(){return f},useModelsInfo:function(){return h},useMutationModel:function(){return m},useServiceInfo:function(){return l.useServiceInfo},useSocket:function(){return d.useSocket},useToast:function(){return v}});var r=t(5861),o=t(7757),i=t.n(o),c=t(1933),u=t(4569),a=t.n(u),s=t(8641),l=t(5139),d=t(6875);function f(){return(0,c.useQuery)("devices-info",(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/devices/info").then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),{staleTime:6e4})}function h(){return(0,c.useQuery)("models-info",(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("/models/info").then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),{staleTime:6e4})}function m(e){var n=e.onSuccess,t=(0,c.useQueryClient)(),r=(0,s.default)("error");return(0,c.useMutation)((function(e){return a().post("/models",e)}),{onSuccess:function(){n(),t.invalidateQueries("models-info")},onError:function(e,n,t){var o;r(null===(o=e.response)||void 0===o?void 0:o.data)}})}function v(e){return(0,s.default)(e)}},6875:function(e,n,t){t.r(n),t.d(n,{useSocket:function(){return c}});var r=t(885),o=t(2791),i=t(6932);function c(e){var n=(0,o.useRef)((0,i.ZP)()),t=(0,o.useState)([]),c=(0,r.Z)(t,2),u=c[0],a=c[1];return(0,o.useEffect)((function(){return console.log(""),n.current.on("connect",(function(){n.current.emit(e,!0),n.current.on(e,(function(e){a(e)}))})),function(){}}),[n,e]),u}},7734:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(885),o=t(5582),i=t(3449),c=t(4717),u=t(2791),a=t(184);function s(){var e=(0,c.useServiceInfo)().data,n=void 0===e?[]:e,t=(0,u.useState)([]),s=(0,r.Z)(t,2),l=s[0],d=s[1],f=(0,c.useSocket)("MSPerformance"),h=n.map((function(e){var n,t,r,o;return e.memory=(((null===(n=f.find((function(n){return n.name===e.name})))||void 0===n||null===(t=n.monit)||void 0===t?void 0:t.memory)||0)/1048576).toFixed(2),e.cpu=(null===(r=f.find((function(n){return n.name===e.name})))||void 0===r||null===(o=r.monit)||void 0===o?void 0:o.cpu)||0,{name:{value:(0,a.jsx)("div",{children:e.name}),key:e.name},type:{value:(0,a.jsx)("div",{children:e.type}),key:e.type},status:{value:(0,a.jsx)("div",{children:e.status}),key:e.status},memory:{value:(0,a.jsx)("div",{children:e.memory}),key:e.memory},cpu:{value:(0,a.jsx)("div",{children:e.cpu}),key:e.cpu}}}));return(0,a.jsxs)("div",{className:o.default.container,children:[(0,a.jsx)("h1",{children:"Services Management"}),(0,a.jsx)(i.default,{head:[{id:"name",numberic:!1,label:"name"},{id:"type",numberic:!1,label:"type"},{id:"status",numberic:!1,label:"status"},{id:"memory",numberic:!0,label:"memory"},{id:"cpu",numberic:!0,label:"cpu"}],select:[l,d],data:h})]})}},1357:function(e,n,t){t.r(n),n.default={container:"Tables_container__s4wLV",body:"Tables_body__1Xl59",head:"Tables_head__lM+nj",checkbox:"Tables_checkbox__QVIms","row-selected":"Tables_row-selected__tIdJe",row:"Tables_row__Wr3L5",toolBox:"Tables_toolBox__ceO0D",pageSelect:"Tables_pageSelect__48Fvh",pageNum:"Tables_pageNum__ogwMy",iconHolder:"Tables_iconHolder__LYmhA"}},5582:function(e,n,t){t.r(n),n.default={container:"ServicesMGMT_container__U7zOV"}},4925:function(e,n,t){function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{Z:function(){return r}})},2982:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(907);var o=t(181);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=139.b70bc042.chunk.js.map