(window.blocksyNewsletterSubscribeExtJsonp=window.blocksyNewsletterSubscribeExtJsonp||[]).push([[2],{13:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(12),c=n(2),o=n(6),i=n.n(o);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t,n,r,a,c,o){try{var i=e[c](o),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=null;t.default=function(e){var t=e.value,n=e.onChange,o=l(Object(r.useState)(d||[]),2),f=o[0],p=o[1],b=l(Object(r.useState)(!d),2),m=b[0],v=b[1],y=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,n,r,a=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(!(a.length>0&&void 0!==a[0])||a[0])&&v(!0),(t=new FormData).append("action","blocksy_ext_newsletter_subscribe_get_actual_lists"),e.prev=4,e.next=7,fetch(ajaxurl,{method:"POST",body:t});case 7:if(200!==(n=e.sent).status){e.next=18;break}return e.next=11,n.json();case 11:if(!(r=e.sent).success){e.next=18;break}if("api_key_invalid"===r.data.result){e.next=18;break}return v(!1),p(r.data.result),d=r.data.result,e.abrupt("return");case 18:e.next=22;break;case 20:e.prev=20,e.t0=e.catch(4);case 22:v(!1);case 23:case"end":return e.stop()}}),e,null,[[4,20]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){s(c,r,a,o,i,"next",e)}function i(e){s(c,r,a,o,i,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){y(!d)}),[]),0===f.length?Object(r.createElement)("div",{className:"ct-select-input"},Object(r.createElement)("input",{disabled:!0,placeholder:m?Object(c.__)("Loading...","blocksy-companion"):Object(c.__)("Invalid API Key...","blocksy-companion")})):Object(r.createElement)(a.a,{selectedItem:t||f[0].id,onChange:function(e){return n(e)},itemToString:function(e){return e?(f.find((function(t){return t.id===e}))||{}).name:""}},(function(e){var t=e.getInputProps,n=e.getItemProps,a=(e.getLabelProps,e.getMenuProps),o=e.isOpen,s=(e.inputValue,e.highlightedIndex),l=e.selectedItem,d=e.openMenu;return Object(r.createElement)("div",{className:"ct-select-input"},Object(r.createElement)("input",u({},t({onFocus:function(){return d()},onClick:function(){return d()}}),{placeholder:Object(c.__)("Select list...","blocksy-companion"),readOnly:!0})),o&&Object(r.createElement)("div",a({className:"ct-select-dropdown"}),f.map((function(e,t){return Object(r.createElement)("div",n({key:e.id,index:t,item:e.id,className:i()("ct-select-dropdown-item",{active:s===t,selected:l===e.id})}),e.name)}))))}))}}}]);