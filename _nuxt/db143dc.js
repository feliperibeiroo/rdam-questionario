(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(t,e,n){var content=n(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(100).default)("3cacad82",content,!0,{sourceMap:!1})},226:function(t,e,n){t.exports=n.p+"img/logo-damasiomotopecas.db3bd69.png"},227:function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,n){"use strict";function r(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var a=n(2),o=n(0),i=n.n(o);e.a=function(t,e){var o=e.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:i.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var u=t.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);t=u[0]}t.oninput=function(e){if(e.isTrusted){var i=t.selectionEnd,u=t.value[i-1];for(t.value=n.i(a.a)(t.value,o.mask,!0,o.tokens);i<t.value.length&&t.value.charAt(i-1)!==u;)i++;t===document.activeElement&&(t.setSelectionRange(i,i),setTimeout((function(){t.setSelectionRange(i,i)}),0)),t.dispatchEvent(r("input"))}};var s=n.i(a.a)(t.value,o.mask,!0,o.tokens);s!==t.value&&(t.value=s,t.dispatchEvent(r("input")))}},function(t,e,n){"use strict";var r=n(6),a=n(5);e.a=function(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(e)?n.i(a.a)(r.a,e,i)(t,e,o,i):n.i(r.a)(t,e,o,i)}},function(t,e,n){"use strict";function r(t){t.component(s.a.name,s.a),t.directive("mask",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),o=n.n(a),i=n(1),u=n(7),s=n.n(u);n.d(e,"TheMask",(function(){return s.a})),n.d(e,"mask",(function(){return i.a})),n.d(e,"tokens",(function(){return o.a})),n.d(e,"version",(function(){return l}));var l="0.11.1";e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n(0),o=n.n(a),i=n(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t,(t=n.i(i.a)(t,this.mask,this.masked,this.tokens))!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,n){"use strict";function r(t,e,n){return e=e.sort((function(t,e){return t.length-e.length})),function(r,a){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<e.length;){var u=e[i];i++;var s=e[i];if(!(s&&t(r,s,!0,n).length>u.length))return t(r,u,o,n)}return""}}e.a=r},function(t,e,n){"use strict";function r(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];t=t||"",e=e||"";for(var a=0,o=0,i="";a<e.length&&o<t.length;){var s=r[u=e[a]],l=t[o];s&&!s.escape?(s.pattern.test(l)&&(i+=s.transform?s.transform(l):l,a++),o++):(s&&s.escape&&(u=e[++a]),n&&(i+=u),l===u&&o++,a++)}for(var d="";a<e.length&&n;){var u;if(r[u=e[a]]){d="";break}d+=u,a++}return i+d}e.a=r},function(t,e,n){var r=n(8)(n(4),n(9),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var a,o=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,o=t.default);var u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach((function(t){var e=r[t];s[t]=function(){return e}}))}return{esModule:a,exports:o,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}])},228:function(t,e,n){"use strict";n(225)},229:function(t,e,n){var r=n(99)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.topo{\n  display:flex;\n  flex-direction:row;\n  align-items:center;\n  margin-bottom:20px\n}\n.title{\n  margin-left:20px\n}\n.corpo{\n  margin-top:10px;\n  display:flex;\n  flex-direction:column\n}\n.item-corpo{\n  margin:.5em 0\n}\nbutton{\n  margin-top:10px\n}\n.datetime-container{\n  display:flex\n}\n.space{\n  width:20px\n}\n.datetime-container .item-corpo{\n  flex-grow:1\n}\n.radio-group{\n  display:flex!important;\n  flex-direction:row!important\n}\n.form-check{\n  margin-right:20px;\n  display:flex;\n  align-items:center;\n  justify-content:center\n}\n.label-faturamento{\n  margin-top:10px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},230:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"topo"},[r("div",{staticClass:"logo"},[r("img",{staticStyle:{height:"4em"},attrs:{src:n(226)}})]),t._v(" "),r("div",{staticClass:"title"},[r("h2",{staticClass:"\n          inline-block\n          mb-2\n          text-3xl\n          font-extrabold\n          tracking-tight\n          text-gray-900\n          dark:text-white\n        ",attrs:{id:"content"}},[t._v("\n        LEAD TIME DE ENTREGA\n      ")])])])}],o=(n(98),n(26),n(172),n(16),n(33),{directives:{mask:n(227).mask},data:function(){return{tipo:"entrega",tipoMotoboy:"",numeronf:"",datafaturamento:null,dataSaida:"",dataEntrega:"",horarioSaida:"",horarioEntrega:"",empresa:"",distancia:"",nfs:[{nf:"353535",data:new Date("January 17, 2022")},{nf:"363636",data:new Date("January 13, 2022")}]}},computed:{dataEntregaValida:function(){return 10==this.dataEntrega.length&&(null==this.datafaturamento||this.dataEntregaObj>=this.datafaturamento)},dataEntregaObj:function(){return new Date("".concat(this.dataEntrega.split("/")[1],"/").concat(this.dataEntrega.split("/")[0],"/").concat(this.dataEntrega.split("/")[2]))},classButton:function(){return this.submit?"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800":"bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"},submit:function(){return"entrega"==this.tipo?this.empresa&&this.numeronf&&this.tipoMotoboy&&10==this.dataSaida.length&&5==this.horarioSaida.length&&10==this.dataEntrega.length&&5==this.horarioEntrega.length&&this.distancia:"transportadora"==this.tipo&&(this.empresa&&this.numeronf&&10==this.dataEntrega.length&&this.dataEntregaValida)}},watch:{numeronf:function(){var t=this;return this.datafaturamento=null,this.nfs.forEach((function(element){element.nf==t.numeronf&&(t.datafaturamento=element.data)})),null!=this.datafaturamento&&console.log(this.datafaturamento),this.numeronf}}}),l=(n(228),n(51)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto px-6 pt-6",attrs:{id:"app"}},[t._m(0),t._v(" "),n("div",{staticClass:"corpo"},[n("div",{staticClass:"item-corpo"},[n("label",{staticClass:"\n          block\n          mb-2\n          text-sm\n          font-medium\n          text-gray-900\n          dark:text-gray-400\n        ",attrs:{for:"tipo-leadtime"}},[t._v("Tipo")]),t._v(" "),n("div",{staticClass:"radio-group",attrs:{id:"tipo-leadtime"}},[n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tipo,expression:"tipo"}],staticClass:"\n              form-check-input\n              appearance-none\n              rounded-full\n              h-4\n              w-4\n              border border-gray-300\n              bg-white\n              checked:bg-blue-600 checked:border-blue-600\n              focus:outline-none\n              transition\n              duration-200\n              mt-1\n              align-top\n              bg-no-repeat bg-center bg-contain\n              float-left\n              mr-2\n              cursor-pointer\n            ",attrs:{value:"entrega",type:"radio",name:"tipoleadtime",id:"flexRadioDefault1"},domProps:{checked:t._q(t.tipo,"entrega")},on:{change:function(e){t.tipo="entrega"}}}),t._v(" "),n("label",{staticClass:"form-check-label inline-block text-gray-800",attrs:{for:"flexRadioDefault1"}},[t._v("\n            ENTREGA\n          ")])]),t._v(" "),n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tipo,expression:"tipo"}],staticClass:"\n              form-check-input\n              appearance-none\n              rounded-full\n              h-4\n              w-4\n              border border-gray-300\n              bg-white\n              checked:bg-blue-600 checked:border-blue-600\n              focus:outline-none\n              transition\n              duration-200\n              mt-1\n              align-top\n              bg-no-repeat bg-center bg-contain\n              float-left\n              mr-2\n              cursor-pointer\n            ",attrs:{value:"transportadora",type:"radio",name:"tipoleadtime",id:"flexRadioDefault2",checked:""},domProps:{checked:t._q(t.tipo,"transportadora")},on:{change:function(e){t.tipo="transportadora"}}}),t._v(" "),n("label",{staticClass:"form-check-label inline-block text-gray-800",attrs:{for:"flexRadioDefault2"}},[t._v("\n            TRANSPORTADORA\n          ")])])])]),t._v(" "),n("div",{staticClass:"item-corpo"},[n("label",{staticClass:"\n          block\n          mb-2\n          text-sm\n          font-medium\n          text-gray-900\n          dark:text-gray-400\n        ",attrs:{for:"countries"}},[t._v("Empresa")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.empresa,expression:"empresa"}],staticClass:"\n          bg-gray-50\n          border border-gray-300\n          text-gray-900 text-sm\n          rounded-lg\n          focus:ring-blue-500 focus:border-blue-500\n          block\n          w-full\n          p-2.5\n          dark:bg-gray-700\n          dark:border-gray-600\n          dark:placeholder-gray-400\n          dark:text-white\n          dark:focus:ring-blue-500\n          dark:focus:border-blue-500\n        ",attrs:{id:"countries"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.empresa=e.target.multiple?n:n[0]}}},[n("option",[t._v("Empresa 1")]),t._v(" "),n("option",[t._v("Empresa 2")]),t._v(" "),n("option",[t._v("Empresa 3")]),t._v(" "),n("option",[t._v("Empresa 4")])])]),t._v(" "),n("div",{staticClass:"item-corpo"},[n("label",{staticClass:"\n          block\n          mb-2\n          text-sm\n          font-medium\n          text-gray-900\n          dark:text-gray-300\n        ",attrs:{for:"base-input"}},[t._v("Número NF")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.numeronf,expression:"numeronf"},{name:"mask",rawName:"v-mask",value:["########"],expression:"['########']"}],staticClass:"\n          bg-gray-50\n          border border-gray-300\n          text-gray-900 text-sm\n          rounded-lg\n          focus:ring-blue-500 focus:border-blue-500\n          block\n          w-full\n          p-2.5\n          dark:bg-gray-700\n          dark:border-gray-600\n          dark:placeholder-gray-400\n          dark:text-white\n          dark:focus:ring-blue-500\n          dark:focus:border-blue-500\n        ",attrs:{type:"text",id:"base-input"},domProps:{value:t.numeronf},on:{input:function(e){e.target.composing||(t.numeronf=e.target.value)}}}),t._v(" "),t.datafaturamento?n("p",{staticClass:"label-faturamento"},[t._v("\n        Data de faturamento:\n        "+t._s(t.datafaturamento.getDate()+"/"+t.datafaturamento.getMonth()+"1/"+t.datafaturamento.getFullYear())+"\n      ")]):t._e()]),t._v(" "),"entrega"==t.tipo?n("div",[n("label",{staticClass:"\n          block\n          mb-2\n          text-sm\n          font-medium\n          text-gray-900\n          dark:text-gray-400\n        ",attrs:{for:"tipo-motoboy"}},[t._v("Tipo Motoboy")]),t._v(" "),n("div",{staticClass:"radio-group",attrs:{id:"tipo-motoboy"}},[n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tipoMotoboy,expression:"tipoMotoboy"}],staticClass:"\n              form-check-input\n              appearance-none\n              rounded-full\n              h-4\n              w-4\n              border border-gray-300\n              bg-white\n              checked:bg-blue-600 checked:border-blue-600\n              focus:outline-none\n              transition\n              duration-200\n              mt-1\n              align-top\n              bg-no-repeat bg-center bg-contain\n              float-left\n              mr-2\n              cursor-pointer\n            ",attrs:{value:"fixo",type:"radio",name:"tipomotoboy",id:"flexRadioDefault3"},domProps:{checked:t._q(t.tipoMotoboy,"fixo")},on:{change:function(e){t.tipoMotoboy="fixo"}}}),t._v(" "),n("label",{staticClass:"form-check-label inline-block text-gray-800",attrs:{for:"flexRadioDefault3"}},[t._v("\n            FIXO\n          ")])]),t._v(" "),n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tipoMotoboy,expression:"tipoMotoboy"}],staticClass:"\n              form-check-input\n              appearance-none\n              rounded-full\n              h-4\n              w-4\n              border border-gray-300\n              bg-white\n              checked:bg-blue-600 checked:border-blue-600\n              focus:outline-none\n              transition\n              duration-200\n              mt-1\n              align-top\n              bg-no-repeat bg-center bg-contain\n              float-left\n              mr-2\n              cursor-pointer\n            ",attrs:{value:"aplicativo",type:"radio",name:"tipomotoboy",id:"flexRadioDefault4",checked:""},domProps:{checked:t._q(t.tipoMotoboy,"aplicativo")},on:{change:function(e){t.tipoMotoboy="aplicativo"}}}),t._v(" "),n("label",{staticClass:"form-check-label inline-block text-gray-800",attrs:{for:"flexRadioDefault4"}},[t._v("\n            APLICATIVO\n          ")])])]),t._v(" "),n("div",{staticClass:"datetime-container"},[n("div",{staticClass:"item-corpo"},[n("label",{staticClass:"\n              block\n              mb-2\n              text-sm\n              font-medium\n              text-gray-900\n              dark:text-gray-300\n            ",attrs:{for:"data-saida-input"}},[t._v("Data de Saída")]),t._v(" "),n("div",{staticClass:"relative"},[n("div",{staticClass:"\n                flex\n                absolute\n                inset-y-0\n                left-0\n                items-center\n                pl-3\n                pointer-events-none\n              "},[n("svg",{staticClass:"w-5 h-5 text-gray-500 dark:text-gray-400",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule":"evenodd"}})])]),t._v(" "),n("input",{directives:[{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"},{name:"model",rawName:"v-model",value:t.dataSaida,expression:"dataSaida"}],staticClass:"\n                data-input\n                bg-gray-50\n                border border-gray-300\n                text-gray-900\n                sm:text-sm\n                rounded-lg\n                focus:ring-blue-500 focus:border-blue-500\n                block\n                w-full\n                pl-10\n                p-2.5\n                dark:bg-gray-700\n                dark:border-gray-600\n                dark:placeholder-gray-400\n                dark:text-white\n                dark:focus:ring-blue-500\n                dark:focus:border-blue-500\n              ",attrs:{datepicker:"",type:"text",id:"data-saida-input",placeholder:"Data de Entrega"},domProps:{value:t.dataSaida},on:{input:function(e){e.target.composing||(t.dataSaida=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"space"}),t._v(" "),n("div",{staticClass:"item-corpo"},[n("label",{staticClass:"\n              block\n              mb-2\n              text-sm\n              font-medium\n              text-gray-900\n              dark:text-gray-300\n            ",attrs:{for:"horario-saida-input"}},[t._v("Horário de Saída")]),t._v(" "),n("input",{directives:[{name:"mask",rawName:"v-mask",value:"##:##",expression:"'##:##'"},{name:"model",rawName:"v-model",value:t.horarioSaida,expression:"horarioSaida"}],staticClass:"\n              horario-input\n              bg-gray-50\n              border border-gray-300\n              text-gray-900 text-sm\n              rounded-lg\n              focus:ring-blue-500 focus:border-blue-500\n              block\n              w-full\n              p-2.5\n              dark:bg-gray-700\n              dark:border-gray-600\n              dark:placeholder-gray-400\n              dark:text-white\n              dark:focus:ring-blue-500\n              dark:focus:border-blue-500\n            ",attrs:{type:"text",id:"horario-saida-input"},domProps:{value:t.horarioSaida},on:{input:function(e){e.target.composing||(t.horarioSaida=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"datetime-container"},[n("div",{staticClass:"item-corpo"},[n("label",{staticClass:"\n              block\n              mb-2\n              text-sm\n              font-medium\n              text-gray-900\n              dark:text-gray-300\n            ",attrs:{for:"data-entrega-input"}},[t._v("Data de Entrega")]),t._v(" "),n("div",{staticClass:"relative"},[n("div",{staticClass:"\n                flex\n                absolute\n                inset-y-0\n                left-0\n                items-center\n                pl-3\n                pointer-events-none\n              "},[n("svg",{staticClass:"w-5 h-5 text-gray-500 dark:text-gray-400",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule":"evenodd"}})])]),t._v(" "),n("input",{directives:[{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"},{name:"model",rawName:"v-model",value:t.dataEntrega,expression:"dataEntrega"}],staticClass:"\n                data-input\n                bg-gray-50\n                border border-gray-300\n                text-gray-900\n                sm:text-sm\n                rounded-lg\n                focus:ring-blue-500 focus:border-blue-500\n                block\n                w-full\n                pl-10\n                p-2.5\n                dark:bg-gray-700\n                dark:border-gray-600\n                dark:placeholder-gray-400\n                dark:text-white\n                dark:focus:ring-blue-500\n                dark:focus:border-blue-500\n              ",attrs:{datepicker:"",type:"text",id:"data-entrega-input",placeholder:"Data de Entrega"},domProps:{value:t.dataEntrega},on:{input:function(e){e.target.composing||(t.dataEntrega=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"space"}),t._v(" "),n("div",{staticClass:"item-corpo"},[n("label",{staticClass:"\n              block\n              mb-2\n              text-sm\n              font-medium\n              text-gray-900\n              dark:text-gray-300\n            ",attrs:{for:"horario-saida-input"}},[t._v("Horário de Entrega")]),t._v(" "),n("input",{directives:[{name:"mask",rawName:"v-mask",value:"##:##",expression:"'##:##'"},{name:"model",rawName:"v-model",value:t.horarioEntrega,expression:"horarioEntrega"}],staticClass:"\n              horario-input\n              bg-gray-50\n              border border-gray-300\n              text-gray-900 text-sm\n              rounded-lg\n              focus:ring-blue-500 focus:border-blue-500\n              block\n              w-full\n              p-2.5\n              dark:bg-gray-700\n              dark:border-gray-600\n              dark:placeholder-gray-400\n              dark:text-white\n              dark:focus:ring-blue-500\n              dark:focus:border-blue-500\n            ",attrs:{type:"text",id:"horario-entrega-input"},domProps:{value:t.horarioEntrega},on:{input:function(e){e.target.composing||(t.horarioEntrega=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"item-corpo"},[n("div",[n("label",{staticClass:"\n              block\n              mb-2\n              text-sm\n              font-medium\n              text-gray-900\n              dark:text-gray-300\n            ",attrs:{for:"distancia-input"}},[t._v("Distância (Km)")]),t._v(" "),n("input",{directives:[{name:"mask",rawName:"v-mask",value:["########"],expression:"['########']"},{name:"model",rawName:"v-model",value:t.distancia,expression:"distancia"}],staticClass:"\n              bg-gray-50\n              border border-gray-300\n              text-gray-900 text-sm\n              rounded-lg\n              focus:ring-blue-500 focus:border-blue-500\n              block\n              w-full\n              p-2.5\n              dark:bg-gray-700\n              dark:border-gray-600\n              dark:placeholder-gray-400\n              dark:text-white\n              dark:focus:ring-blue-500\n              dark:focus:border-blue-500\n            ",attrs:{type:"text",id:"distancia-input"},domProps:{value:t.distancia},on:{input:function(e){e.target.composing||(t.distancia=e.target.value)}}})])])]):t._e(),t._v(" "),"transportadora"==t.tipo?n("div",[n("div",{staticClass:"item-corpo"},[n("label",{staticClass:"\n            block\n            mb-2\n            text-sm\n            font-medium\n            text-gray-900\n            dark:text-gray-300\n          ",attrs:{for:"data-entrega-input"}},[t._v("Data de Entrega")]),t._v(" "),n("div",{staticClass:"relative"},[n("div",{staticClass:"\n              flex\n              absolute\n              inset-y-0\n              left-0\n              items-center\n              pl-3\n              pointer-events-none\n            "},[n("svg",{staticClass:"w-5 h-5 text-gray-500 dark:text-gray-400",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule":"evenodd"}})])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataEntrega,expression:"dataEntrega"},{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"}],staticClass:"\n              data-input\n              bg-gray-50\n              border border-gray-300\n              text-gray-900\n              sm:text-sm\n              rounded-lg\n              focus:ring-blue-500 focus:border-blue-500\n              block\n              w-full\n              pl-10\n              p-2.5\n              dark:bg-gray-700\n              dark:border-gray-600\n              dark:placeholder-gray-400\n              dark:text-white\n              dark:focus:ring-blue-500\n              dark:focus:border-blue-500\n            ",attrs:{datepicker:"",type:"text",id:"data-entrega-input",placeholder:"Data de Entrega"},domProps:{value:t.dataEntrega},on:{input:function(e){e.target.composing||(t.dataEntrega=e.target.value)}}})])]),t._v(" "),10==this.dataEntrega.length&&0==this.dataEntregaValida&&null!=this.datafaturamento?n("p",{staticStyle:{color:"red"}},[t._v("\n        Data de Entrega digitada é menor que a data de faturamento do pedido!\n      ")]):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"item-corpo"},[n("button",{class:t.classButton,attrs:{type:"submit"}},[t._v("Enviar")])])])])}),r,!1,null,null,null);e.default=component.exports}}]);