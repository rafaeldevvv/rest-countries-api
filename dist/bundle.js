(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var t=React,n=t.useState,r=t.useEffect;function a(t){var a,l,c=(a=n(null),l=2,function(e){if(Array.isArray(e))return e}(a)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,c,o=[],u=!0,i=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(o.push(r.value),o.length!==t);u=!0);}catch(e){i=!0,a=e}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(i)throw a}}return o}}(a,l)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(a,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=c[0],u=c[1];return r((function(){var e=!1;return fetch(t).then((function(e){return e.json()})).then((function(t){e||u(t)})),function(){e=!0}}),[t]),o}var l=React,c=l.createContext,o=l.useContext,u=c("dark");function i(e){var t=e.icon;return React.createElement("i",{className:t})}function s(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=React.useState,y=ReactDOM.createRoot;function d(){var e=("light"===o(u)?"Dark":"Light")+" Mode";return React.createElement("header",null,React.createElement("div",{className:"container"},React.createElement("h1",null,"Where in the world?"),React.createElement("button",{className:"theme-button"},React.createElement(i,{icon:"fa-regular fa-sun"}),e)))}function h(e){var t=e.regions;return React.createElement("div",{id:"search-bar"},React.createElement(p,null),React.createElement(R,{options:t}))}function p(){return React.createElement("label",{className:"field-container"},React.createElement(i,{icon:"fa-solid fa-magnifying-glass"}),React.createElement("input",{value:"Search",placeholder:"Search for a country...",className:"field",onChange:function(){}}))}function R(e){var t=e.options;return React.createElement("div",{className:"select-field"},React.createElement("span",{className:"select-value"},'"Filter by Region'),React.createElement(i,{icon:"fa-solid fa-chevron-down"}),React.createElement("ul",{className:"options-list"},t.map((function(e){return React.createElement("li",{key:e},e)}))))}function v(e){!function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e);var t=a("data.json");return t?React.createElement("section",null,React.createElement("h2",{className:"sr-only"},"List of Countries"),t.map((function(e){return React.createElement(E,{country:e,key:e.name})}))):null}function E(e){var t=e.country;return React.createElement("article",{className:"country"},React.createElement("img",{src:t.flag,alt:"Flag of "+t.name,style:{width:"75px"}}),React.createElement("div",{className:"country-description"},React.createElement("h3",null,t.name),React.createElement("p",null,React.createElement("strong",null,"Population: "),t.population),React.createElement("p",null,React.createElement("strong",null,"Region: "),t.region),React.createElement("p",null,React.createElement("strong",null,"Capital: "),t.capital)))}function g(e){var t,n,r=e.defaultTheme,l=(t=m(r),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,c,o=[],u=!0,i=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(o.push(r.value),o.length!==t);u=!0);}catch(e){i=!0,a=e}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(i)throw a}}return o}}(t,n)||s(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=l[0],o=(l[1],a("data.json")),i=null==o?void 0:o.reduce((function(e,t){return e.includes(t.region)?e:[].concat(function(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e),[t.region])}),[]);return React.createElement(u.Provider,{value:c},React.createElement(d,null),React.createElement("main",null,React.createElement(h,{regions:i||[]}),React.createElement(v,null)))}var b=localStorage.getItem("countries_theme")||"light";y(document.querySelector("#app-root")).render(React.createElement(g,{defaultTheme:b}))})();