"use strict";(self.webpackChunkms_ui=self.webpackChunkms_ui||[]).push([[6992,8641],{8641:function(e,n,r){r.r(n),r.d(n,{default:function(){return o}});var t=r(6960);function o(e){return e?function(n){t.Am[e](n,{position:"bottom-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}:function(e){(0,t.Am)(e,{position:"bottom-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}}},5139:function(e,n,r){r.r(n),r.d(n,{useProvision:function(){return v},useServiceInfo:function(){return f}});var t=r(5861),o=r(7757),u=r.n(o),i=r(4569),s=r.n(i),c=r(1933),a=r(8641);function f(){return(0,c.useQuery)("service-info",(0,t.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/microservices").then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),{staleTime:6e4})}function v(e){var n=e.onSuccess,r=void 0===n?function(){}:n,t=(0,c.useQueryClient)(),o=(0,a.default)("error");return(0,c.useMutation)((function(e){return s().get("/devies/provision",{params:{id:e}})}),{onSuccess:function(){r(),t.invalidateQueries("devices-info")},onError:function(e,n,r){var t;o(null===(t=e.response)||void 0===t?void 0:t.data)}})}}}]);
//# sourceMappingURL=6992.e39f94b7.chunk.js.map