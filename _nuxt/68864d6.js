(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{392:function(t,e,n){var content=n(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("c4fae05a",content,!0,{sourceMap:!1})},414:function(t,e,n){t.exports=n.p+"img/success.3fe5db1.png"},416:function(t,e,n){"use strict";n(392)},417:function(t,e,n){var o=n(78)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),o.push([t.i,".store-payment-page__details .v-text-field__suffix[data-v-7baa15fe]{color:rgba(0,0,0,.24)}.store-payment-page[data-v-7baa15fe]{background-color:rgba(0,0,0,.02);padding:16px;position:relative;min-height:480px}.store-payment-page__invalid[data-v-7baa15fe],.store-payment-page__loading[data-v-7baa15fe],.store-payment-page__result[data-v-7baa15fe]{height:100%;display:flex;align-items:center;justify-content:center}.store-payment-page__result[data-v-7baa15fe]{align-items:flex-start}.store-payment-page__result .store-payment-page__content[data-v-7baa15fe]{width:100%;max-width:400px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 auto 8px;padding:42px 18px 24px}.store-payment-page__result .store-payment-page__content>*[data-v-7baa15fe]{display:block;width:100%;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}.store-payment-page__container[data-v-7baa15fe]{position:relative;width:100%;max-width:480px;margin:auto}.store-payment-page__container>*+*[data-v-7baa15fe]{margin-top:16px}.store-payment-page__wallet[data-v-7baa15fe]{border:thin solid rgba(0,0,0,.12);border-radius:4px;padding:16px;background-color:#fff}.store-payment-page__wallet .store-payment-page__name[data-v-7baa15fe]{font-size:.8rem}.store-payment-page__wallet .store-payment-page__balance[data-v-7baa15fe]{font-size:1.6rem;margin-top:0;margin-bottom:8px}.store-payment-page__wallet .store-payment-page__ref[data-v-7baa15fe]{font-size:.6rem;color:rgba(0,0,0,.24)}.store-payment-page__wallet .store-payment-page__currency[data-v-7baa15fe]{font-size:.8rem;margin-left:4px}.store-payment-page__details[data-v-7baa15fe]{border:thin solid rgba(0,0,0,.12);border-radius:4px;padding:16px;background-color:#fff}.store-payment-page__details .store-payment-page__currency[data-v-7baa15fe]{border-left:1px solid rgba(0,0,0,.24);position:absolute;right:8px;top:0;bottom:0;padding-left:8px;display:flex;align-items:center}",""]),t.exports=o},447:function(t,e,n){"use strict";n.r(e);n(26),n(24),n(25),n(7),n(42),n(27),n(43);var o=n(11),r=(n(72),n(415)),l=n.n(r);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"StorePaymentPage",data:function(){return{loading:!1,paying:!1,valid:!1,transactionSuccess:!1,paymentResultDialog:!1,contentHeight:100,invalidUid:!1,storeName:"Argobarleno",walletAddress:"",walletName:"",walletBalance:0,transactionRef:"",paymentAmount:null,paymentNote:"",transaction:{no:"",amount:null,note:"",number:"",timestamp:""}}},watch:{walletAddress:function(t){this.onGetWalletBalance(t)}},mounted:function(){this.invalidUid=!("uid"in this.$route.query),this.walletAddress=this.$route.query.uid;var t=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.$route.query);delete t.uid,this.$router.push({query:t})},methods:{onResize:function(){var t=window.innerHeight;this.contentHeight=t},onGetWalletBalance:function(address){var t=this;address&&(this.loading=!0,setTimeout((function(){t.loading=!1,t.walletName="Decimo Di Vongola",t.walletBalance=1e3,t.transactionRef=Date.now()}),1e3))},onReceivePay:function(){var t=this;this.$refs.form.validate()&&(this.paying=!0,setTimeout((function(){t.walletBalance=t.walletBalance-t.paymentAmount,t.transactionRef=Date.now(),t.transaction.no=Date.now(),t.transaction.amount=t.paymentAmount,t.transaction.note=t.paymentNote,t.transactionAmount=null,t.transactionNote=null,t.$refs.form.resetValidation(),t.paying=!1,t.paymentResultDialog=!0,t.transaction.timestamp=l()().format("YYYY-MM-DD HH:mm:ss")}),3e3))},onClose:function(){var t=window.open("","_self");t.document.write(""),setTimeout((function(){return t.close()}),1e3)}}},m=d,v=(n(416),n(63)),_=n(82),f=n.n(_),y=n(404),x=n(449),h=n(440),w=n(441),C=n(442),O=n(378),A=n(450),N=n(405),D=n(389),R=n(359),z=n(443),P=n(391),j=n.n(P),k=n(383),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],class:["store-payment-page",{white:t.paymentResultDialog}],style:{height:t.contentHeight+"px"}},[t.invalidUid?o("div",{staticClass:"store-payment-page__invalid"},[o("div",{staticClass:"text-center",staticStyle:{width:"80%"}},[o("v-avatar",{attrs:{color:"grey lighten-4",size:"94"}},[o("v-icon",{attrs:{color:"grey lighten-2",size:"80"}},[t._v("mdi-wallet-outline")])],1),t._v(" "),o("div",{staticClass:"text-subtitle-2 mt-3"},[t._v("No Wallet Address")]),t._v(" "),o("div",{staticClass:"text-body-2 font-weight-light"},[t._v("\n        Sorry, there are not found for customer wallet.\n      ")])],1)]):t.loading?o("div",{staticClass:"store-payment-page__loading"},[o("div",{staticClass:"text-center",staticStyle:{width:"80%"}},[o("v-progress-circular",{attrs:{color:"primary",size:"32",width:"3",indeterminate:""}})],1)]):t.paymentResultDialog?o("div",{staticClass:"store-payment-page__result"},[o("div",{staticClass:"store-payment-page__content"},[o("div",{style:{minHeight:"200px"}},[o("v-img",{attrs:{src:n(414),"min-height":"200",contain:""}}),t._v(" "),o("div",{staticClass:"text-subtitle-2 mt-3",staticStyle:{color:"#20be79"}},[t._v("Payment Successful")]),t._v(" "),o("div",{staticClass:"text-body-2 font-weight-light"},[t._v("\n          You payment has been successfully processed.\n        ")])],1),t._v(" "),o("v-divider",{staticClass:"my-4"}),t._v(" "),o("div",{staticClass:"primary--text text-center",style:{fontSize:"0.8rem"}},[t._v("\n        Transaction Number: "+t._s(t.transaction.no)+"\n      ")]),t._v(" "),o("div",{style:{fontSize:"0.8rem",margin:"16px"}},[o("v-row",{staticStyle:{width:"100%"},attrs:{"no-gutters":""}},[o("v-col",{staticClass:"text-left pb-2 grey--text text--darken-2",attrs:{cols:"6"}},[t._v("AMOUNT PAID (THB)")]),t._v(" "),o("v-col",{staticClass:"text-right pb-2",attrs:{cols:"6"}},[t._v(t._s(t.transaction.amount))]),t._v(" "),o("v-col",{staticClass:"text-left pb-2",attrs:{cols:"6"}},[t._v("PAYED BY")]),t._v(" "),o("v-col",{staticClass:"text-right pb-2",attrs:{cols:"6"}},[t._v(t._s(t.walletName))]),t._v(" "),o("v-col",{staticClass:"text-left pb-2",attrs:{cols:"6"}},[t._v("TRANSACTION DATE")]),t._v(" "),o("v-col",{staticClass:"text-right pb-2",attrs:{cols:"6"}},[t._v(t._s(t.transaction.timestamp))])],1)],1),t._v(" "),o("div",{staticClass:"text-center mt-6"})],1)]):t.transactionRef?o("div",{staticClass:"store-payment-page__container"},[o("div",{staticClass:"store-payment-page__wallet"},[o("div",{staticClass:"store-payment-page__name"},[t._v(t._s(t.walletName))]),t._v(" "),o("div",{staticClass:"store-payment-page__balance"},[t._v("\n        "+t._s(t._f("number_format")(t.walletBalance))+"\n        "),o("span",{staticClass:"store-payment-page__currency"},[t._v("THB")])]),t._v(" "),t.transactionRef?o("div",{staticClass:"store-payment-page__ref"},[t._v("Ref. "+t._s(t.transactionRef))]):t._e()]),t._v(" "),o("div",{staticClass:"store-payment-page__details"},[o("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("div",{staticClass:"text-caption grey--text"},[t._v("Store Name")]),t._v(" "),o("v-text-field",{attrs:{value:t.storeName,color:"grey",dense:"",outlined:"",disabled:""}}),t._v(" "),o("div",{staticClass:"text-caption grey--text"},[t._v("Amount")]),t._v(" "),o("v-text-field",{attrs:{type:"number",rules:[function(e){return!e||Number(e)<t.walletBalance||"Insufficient balance"}],placeholder:"00.00",suffix:"THB",dense:"",outlined:""},model:{value:t.paymentAmount,callback:function(e){t.paymentAmount=e},expression:"paymentAmount"}}),t._v(" "),o("div",{staticClass:"text-caption grey--text"},[t._v("Note")]),t._v(" "),o("v-text-field",{attrs:{placeholder:"Pay for e.g. mango sticky rice",dense:"",outlined:""},model:{value:t.paymentNote,callback:function(e){t.paymentNote=e},expression:"paymentNote"}}),t._v(" "),o("v-btn",{attrs:{disabled:!t.valid||!t.paymentAmount,color:"orange white--text",block:""},on:{click:t.onReceivePay}},[t._v("charge")])],1)],1)]):t._e(),t._v(" "),o("v-overlay",{attrs:{value:t.paying}},[o("div",[o("v-progress-circular",{attrs:{color:"white",size:"32",width:"3",indeterminate:""}})],1)])],1)}),[],!1,null,"7baa15fe",null);e.default=component.exports;f()(component,{VAvatar:y.a,VBtn:x.a,VCol:h.a,VDivider:w.a,VForm:C.a,VIcon:O.a,VImg:A.a,VOverlay:N.a,VProgressCircular:D.a,VRow:R.a,VTextField:z.a}),j()(component,{Resize:k.a})}}]);