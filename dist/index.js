"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var n=t(e),r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var a=function(e,t){return void 0===t&&(t=!1),t?function(e){return"undefined"!=typeof navigator?navigator.language.split("-")[0]:e}(e):e};function o(e,t,n){var r=e.locale,a=e.languages,o=e.defaultLanguage,u=a[r]?r:o,c=a[u],l=t;if(n&&Object.keys(n).includes("count")){var i=new Intl.PluralRules(u).select(n.count);l=0===n.count?"".concat(t,".zero"):"other"===i?"".concat(t,".many"):"".concat(t,".").concat(i)}return l.split(".").forEach((function(e){if(c[e])return c=c[e]})),"string"!=typeof c?(console.warn("Talkr: Missing translation for ".concat(t)),null):n?c.split("__").map((function(e){return n[e]||e})).join(""):c}var u=e.createContext({locale:"",setLocale:function(){return null},languages:{},defaultLanguage:""});exports.Talkr=function(t){var r=t.children,o=t.languages,c=t.defaultLanguage,l=t.detectBrowserLanguage,i=e.useState(a(c,l)),s=i[0],f=i[1];return n.createElement(u.Provider,{value:{locale:s,setLocale:f,languages:o,defaultLanguage:c}},r)},exports.TalkrContext=u,exports.tr=o,exports.useT=function(){var t=e.useContext(u),n=t.setLocale,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(t,["setLocale"]);return r(r({},a),{setLocale:n,T:function(e,t){return o(a,e,t)}})};
