"use strict";(self["webpackChunkxiaomi"]=self["webpackChunkxiaomi"]||[]).push([[496],{4496:(t,s,a)=>{a.r(s),a.d(s,{default:()=>v});a(8309),a(7042);var n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"all-wrapper"},[s("div",{staticClass:"header"},[s("div",{staticClass:"top"},[s("router-link",{attrs:{to:"/profile"}},[s("i",{staticClass:"iconfont icon-back"})]),s("span",[t._v("商品订单")]),s("i",{staticClass:"iconfont icon-search"})],1),s("div",{staticClass:"tab"},[s("span",{class:{show:0===t.change},on:{click:t.allList}},[t._v("全部订单")]),s("span",{class:{show:1===t.change},on:{click:t.notPay}},[t._v("未支付")]),s("span",{class:{show:2===t.change},on:{click:t.hasPay}},[t._v("已支付")])])]),s("div",{staticClass:"content"},[0===t.change?s("ul",{staticClass:"list"},t._l(t.payList,(function(a,n){return s("li",[t._m(0,!0),t._l(t.payList[n].details,(function(a){return s("div",{staticClass:"wrapper"},[s("img",{attrs:{src:a.avatar,alt:""}}),s("span",{domProps:{textContent:t._s(a.name)}}),s("div",{staticClass:"price-count"},[s("div",{staticClass:"price"},[t._v("￥"),s("span",{domProps:{textContent:t._s(a.price)}})]),s("div",{staticClass:"count"},[t._v(" X"),s("span",{domProps:{textContent:t._s(a.count)}})])])])})),s("div",{staticClass:"title"},[s("span",{domProps:{textContent:t._s(a.orderTime.slice(0,19))}}),s("div",{staticClass:"sum-price"},[s("span",[t._v("应付金额：")]),s("p",{domProps:{textContent:t._s(a.account)}}),t._v("元 ")])]),s("div",{staticClass:"btn"},[s("button",{on:{click:function(s){return t.remove(a.orderId)}}},[t._v("取消订单")]),s("a",{attrs:{href:"javascript:void(0)"}},[(t.show=1!==a.pay)?s("button",{on:{click:function(s){return t.pay(a.orderId)}}},[t._v("立即付款")]):s("button",[t._v("再次购买")])])])],2)})),0):t._e(),1===t.change?s("ul",{staticClass:"list"},t._l(t.hasNotPayList,(function(a,n){return s("li",[t._m(1,!0),t._l(t.hasNotPayList[n].details,(function(a){return s("div",{staticClass:"wrapper"},[s("img",{attrs:{src:a.avatar,alt:""}}),s("span",{domProps:{textContent:t._s(a.name)}}),s("div",{staticClass:"price-count"},[s("div",{staticClass:"price"},[t._v("￥"),s("span",{domProps:{textContent:t._s(a.price)}})]),s("div",{staticClass:"count"},[t._v(" X"),s("span",{domProps:{textContent:t._s(a.count)}})])])])})),s("div",{staticClass:"title"},[s("span",{domProps:{textContent:t._s(a.orderTime.slice(0,19))}}),s("div",{staticClass:"sum-price"},[s("span",[t._v("应付金额：")]),s("p",{domProps:{textContent:t._s(a.account)}}),t._v("元 ")])]),s("div",{staticClass:"btn"},[s("button",{on:{click:function(s){return t.remove(a.orderId)}}},[t._v("取消订单")]),s("a",{attrs:{href:"javascript:void(0)"}},[s("button",{on:{click:function(s){return t.pay(a.orderId)}}},[t._v("立即付款")])])])],2)})),0):t._e(),2===t.change?s("ul",{staticClass:"list"},t._l(t.alreadyPayList,(function(a,n){return s("li",[t._m(2,!0),t._l(t.alreadyPayList[n].details,(function(a){return s("div",{staticClass:"wrapper"},[s("img",{attrs:{src:a.avatar,alt:""}}),s("span",{domProps:{textContent:t._s(a.name)}}),s("div",{staticClass:"price-count"},[s("div",{staticClass:"price"},[t._v("￥"),s("span",{domProps:{textContent:t._s(a.price)}})]),s("div",{staticClass:"count"},[t._v(" X"),s("span",{domProps:{textContent:t._s(a.count)}})])])])})),s("div",{staticClass:"title"},[s("span",{domProps:{textContent:t._s(a.orderTime.slice(0,19))}}),s("div",{staticClass:"sum-price"},[s("span",[t._v("总金额：")]),s("p",{domProps:{textContent:t._s(a.account)}}),t._v("元 ")])]),s("div",{staticClass:"btn"},[s("button",{on:{click:function(s){return t.remove(a.orderId)}}},[t._v("取消订单")]),t._m(3,!0)])],2)})),0):t._e()]),s("div",{staticClass:"footer"},[s("MiTabBar")],1)])},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"business"},[s("img",{attrs:{src:a(3172),alt:""}}),s("span",[t._v("小米商城")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"business"},[s("img",{attrs:{src:a(3172),alt:""}}),s("span",[t._v("小米商城")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"business"},[s("img",{attrs:{src:a(3172),alt:""}}),s("span",[t._v("小米商城")])])},function(){var t=this,s=t._self._c;return s("a",{attrs:{href:"javascript:void(0)"}},[s("button",[t._v("再次购买")])])}],r=a(6835),i=a(8534),c=(a(4553),a(561),a(9826),a(1539),a(5069),a(7877)),o=a(2433);const u={name:"Or4der",data:function(){return{payList:[],change:0,alreadyPayList:[],hasNotPayList:[],show:!0,list:[]}},methods:{allList:function(){var t=this;return(0,i.Z)((0,r.Z)().mark((function s(){return(0,r.Z)().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,c.DT.getPayList();case 2:t.payList=s.sent,t.change=0;case 4:case"end":return s.stop()}}),s)})))()},notPay:function(){var t=this;return(0,i.Z)((0,r.Z)().mark((function s(){return(0,r.Z)().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,c.DT.notPayList();case 2:t.hasNotPayList=s.sent,t.change=1;case 4:case"end":return s.stop()}}),s)})))()},hasPay:function(){var t=this;return(0,i.Z)((0,r.Z)().mark((function s(){return(0,r.Z)().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,c.DT.hasPayList();case 2:t.alreadyPayList=s.sent,t.change=2;case 4:case"end":return s.stop()}}),s)})))()},remove:function(t){var s=this;return(0,i.Z)((0,r.Z)().mark((function a(){var n;return(0,r.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,s.$miConfirm("确定要删除吗？");case 2:return a.next=4,c.DT.removeOrder(t);case 4:n=s.payList.findIndex((function(s){return s.orderId===t})),s.payList.splice(n,1),s.hasNotPayList.findIndex((function(s){return s.orderId===t})),s.hasNotPayList.splice(n,1),s.alreadyPayList.findIndex((function(s){return s.orderId===t})),s.alreadyPayList.splice(n,1);case 10:case"end":return a.stop()}}),a)})))()},pay:function(t){var s=this;return(0,i.Z)((0,r.Z)().mark((function a(){var n;return(0,r.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,c.DT.payOrder(t);case 2:n=s.payList.find((function(s){return s.orderId===t})),s.hasNotPayList.find((function(s){return s.orderId===t})),s.alreadyPayList.find((function(s){return s.orderId===t})),s.$miConfirm("去付款吗"),n.pay=1;case 7:case"end":return a.stop()}}),a)})))()}},created:function(){var t=this;return(0,i.Z)((0,r.Z)().mark((function s(){return(0,r.Z)().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,c.DT.getPayList();case 2:return t.list=s.sent,t.payList=t.list.reverse(),s.next=6,c.DT.hasPayList();case 6:return t.alreadyPayList=s.sent,s.next=9,c.DT.notPayList();case 9:t.hasNotPayList=s.sent;case 10:case"end":return s.stop()}}),s)})))()},components:{MiTabBar:o.Z}},l=u;var d=a(1001),p=(0,d.Z)(l,n,e,!1,null,"693556bc",null);const v=p.exports},3172:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAADUUlEQVRYCe2Zv2sUQRTHX8TCCGLQ0oBByLXRTgX1TGORwhS2hktr4xWWgilEbCQR/4Cc0T9AwUaLmEA0wco0CgYlgpbK2Zjy/M5b3uzM3u7s7GZ/IXksuZnZN28+9+bNzLvJyGAwoObJoeYhKaLDGbB21unHR/rbp5011QsFVB0yfpaOjqn3k21VQHXyikPdfDWSMol7fdp+Sdsv1FOITM2Seq7TKBMn2EzGAtDqY1pdIhQKFzBNd2n6dhJcAtaXNXo2T792C+exDJ6coJvL1GpbjVyJw9rq0cr8sGpZLXPLdL4TMT60EitmAg5cgEFtsb2FuVu6aitUVeu+NWfT8BZCG/FUl2BoY20ZWFh0Zce44ztjaACICFawHUhrPZ/Yj8RhgoXdUprqYcKoAJBNW7A2e7XRmAMLhmDhvGuCCAZjYV9ojjAMZxCORACH1/iUF/Pv7ykLGRmEFseIeNVqM5ZjX8CBOnNPW0svwBTSnq2nFJmBMxfpzruw+5Nr9PlNWDVLDMOT6GA3O/iUcfrigMOWPbPgox6jwzAS8jHv99cEH8elBp5GeRL3/nhqk6yUGH346cRpqx1ui0yl9TqhwjBpIR/pu9iONFhVcCBL0YIUNIcUP4nITxDsWpxpsdaKLeSNrSPHaOxU+GjbkdWTN7x4ErVR/8LlWzT7MFR/dIm+bqhqBCvUyFbK661so2TWPsDK4rIDb/0v3vJMXbJ83fy6DMOxtY/tOP/wST0Zpskhb+aNSV+isnaG4cMHOUmS4CdlcMkGBdyzafnwnD691rXwzEEmY14X6MTm23t6cC5GP2ySEsMwlsNb+O2mTUtH9dn/qZ5YidWHpudxyTAcW612rP16GhlGQt77VrNcVsEQLNxnNkEudAIKwUJ99HjNYAAQ7wgWNrGhm8KqKQEgG7txG4hFd3eC/H8FFUsNV93f1VjiLYwB0rlesWNlsIahxVXoZWChhqm9sZjBVlGqGFSiKjBpY6ENlw4Vk2E4DGqLEVvmC9zKrXRKjzPEE+bO9lNAkYCFl1gBrxbUjXkZiwBA6p8rXTOeTLckYwVawX3mZs91+2DaSy1jH8ceCQ8ZAT7cKQ3L7IEzGMct7p/0oeu4KUFHOUnUv+yQF+Cv9+H7D5xA/tr4wTFlAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=496.b930c8d4.js.map