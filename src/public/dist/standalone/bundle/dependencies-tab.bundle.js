(window.webpackJsonpcodecrumbs=window.webpackJsonpcodecrumbs||[]).push([[12,11],{1160:function(e,n){e.exports={config:{sourceType:"module",plugins:["jsx","asyncGenerators","classProperties","classPrivateProperties","classPrivateMethods","doExpressions","dynamicImport","exportDefaultFrom","exportNamespaceFrom","functionBind","functionSent","importMeta","logicalAssignment","nullishCoalescingOperator","numericSeparator","objectRestSpread","optionalCatchBinding","optionalChaining","throwExpressions"]},getNodeLines:function(e){return[e.loc.start.line,e.loc.end.line]}}},1161:function(e,n,t){var o=t(1162);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(97)(o,r);o.locals&&(e.exports=o.locals)},1162:function(e,n,t){(e.exports=t(96)(!1)).push([e.i,".DependenciesTab {\n  height: 100%; }\n  .DependenciesTab .ant-collapse {\n    margin-left: -16px;\n    margin-right: -16px;\n    max-height: 100%;\n    overflow: auto; }\n",""])},1181:function(e,n,t){"use strict";t.r(n);t(473);var o=t(479),r=(t(510),t(529)),i=t(1),c=t.n(i),a=t(139),s=t(22),u=t(144),l=t(513),d=t(457),f=t(1160),p=f.config,m=f.getNodeLines,h=(t(1161),r.a.Panel);n.default=Object(a.b)(function(e,n){var t=Object(s.c)(e,n),o=t.filesMap,r=t.foldersMap;return{selectedNode:Object(s.e)(e,n).selectedNode,selectedDependencyEdgeNodes:Object(s.b)(e,n).selectedDependencyEdgeNodes,filesMap:o,foldersMap:r}})(function(e){var n=e.selectedNode,t=e.filesMap,i=e.foldersMap,a=e.selectedDependencyEdgeNodes,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return n?e.filter(function(e){return n.sources.find(function(n){var t=/\w/.exec(e.sourceFile),o=e.sourceFile.substr(t&&t.index);return-1!==n.indexOf(o)})}):[]}(n.importedDependencies,a);return c.a.createElement("div",{className:"DependenciesTab"},s.length?c.a.createElement(r.a,{bordered:!1,defaultActiveKey:["0","1"]},c.a.createElement(h,{header:n.path,key:"0"},c.a.createElement(u.default,{limitedHeight:!0,code:n.fileCode,dependenciesLines:s.map(function(e){return e.importNodeLines})})),s.map(function(e,n){var o=function(e,n,t){return t[e]&&(e+="/index"),n[e]?n[e]:n[Object.keys(n).find(function(n){return 0===n.indexOf(e)})]}(e.sourceFile,t,i);if(!o)return null;var r=function(e,n,t){var o={},r=[];try{o=l.parse(e,p);var i=!!n.find(function(e){return"ImportDefaultSpecifier"===e.type}),c=n.filter(function(e){return"ImportSpecifier"===e.type}).map(function(e){return e.name});return d.default(o,{enter:function(e){var n=e.node;i&&"ExportDefaultDeclaration"===n.type?r.push(n):"ExportNamedDeclaration"===n.type&&n.declaration&&n.declaration.declarations.find(function(e){return c.includes(e.id.name)})&&r.push(n)}}),r.map(m)}catch(e){return console.log(t,e),r}}(o.fileCode,e.specifiers,e.sourceFile);return c.a.createElement(h,{header:o.path,key:n+1},c.a.createElement(u.default,{limitedHeight:!0,code:o.fileCode||"",dependenciesLines:r}))})):c.a.createElement(o.a,{message:"C-mon, my dear friend, select dependency connection, what are you waiting for?",type:"info",showIcon:!0}))})},144:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var o=t(1),r=t.n(o),i=t(95),c=t.n(i),a=t(508),s=t.n(a),u=t(509);t(455);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,n){return!n||"object"!==l(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var h=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),f(this,p(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,r.a.Component),function(e,n,t){n&&d(e.prototype,n),t&&d(e,t)}(n,[{key:"fixScroll",value:function(){var e=this.props,n=e.dependenciesLines,t=void 0===n?[]:n,o=e.crumbedLines,r=void 0===o?[]:o;if(this.codeRef&&this.codeRef.scrollTo){var i=t.length?t:r.length?r:null;i&&this.codeRef.scrollTo(0,15*i[0][0]-5)}}},{key:"componentDidUpdate",value:function(e){this.fixScroll()}},{key:"componentDidMount",value:function(){this.fixScroll()}},{key:"render",value:function(){var e=this,n=this.props,t=n.code,o=n.crumbedLines,i=void 0===o?[]:o,a=n.dependenciesLines,l=void 0===a?[]:a,d=n.limitedHeight;return r.a.createElement("div",{className:c()("Code",{limitedHeight:d}),ref:function(n){return e.codeRef=n}},r.a.createElement(s.a,{language:"javascript",style:u.atomOneLight,showLineNumbers:!0,wrapLines:!0,customStyle:{fontSize:"12px"},lineProps:function(e){return y(i,e)?{className:"crumbedLine"}:y(l,e)?{className:"importedDependencyLine"}:{}}},t))}}]),n}(),y=function(e,n){return!!e.find(function(e){return e[0]===n&&e[1]===n||e[0]<=n&&e[1]>=n})}},455:function(e,n,t){var o=t(456);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(97)(o,r);o.locals&&(e.exports=o.locals)},456:function(e,n,t){(e.exports=t(96)(!1)).push([e.i,".Code {\n  height: 100%;\n  position: relative;\n  overflow: auto; }\n  .Code .crumbedLine {\n    display: block;\n    background-color: rgba(255, 225, 244, 0.8); }\n  .Code .importedDependencyLine {\n    display: block;\n    background-color: rgba(0, 148, 249, 0.1); }\n  .Code.limitedHeight {\n    max-height: 200px; }\n",""])}}]);