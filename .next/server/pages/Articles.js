/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/Articles";
exports.ids = ["pages/Articles"];
exports.modules = {

/***/ "./pages/Articles/index.js":
/*!*********************************!*\
  !*** ./pages/Articles/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflexbox */ \"reflexbox\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/sandeep/next-app-react/pages/Articles/index.js\";\n\n\n\n\nconst PayedArticles = ({\n  articles\n}) => {\n  const token = localStorage.getItem(\"jwt\");\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (token === undefined || token === null || token === \"\") {\n      router.push(\"/login\");\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: token && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reflexbox__WEBPACK_IMPORTED_MODULE_2__.Box, {\n      variant: \"container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reflexbox__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        as: \"h2\",\n        my: 40,\n        children: articles.map((x, i) => {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n              children: x.payed_article_1\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 19\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              dangerouslySetInnerHTML: {\n                __html: x.Content\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 19\n            }, undefined)]\n          }, void 0, true);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: () => {\n          localStorage.removeItem(\"jwt\");\n          router.push(\"/login\");\n        },\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false);\n};\n\nconst getServerSideProps = async () => {\n  const res = await fetch(`https://stapi-next-app.herokuapp.com/payed-articles`);\n  const data = await res.json();\n  return {\n    props: {\n      articles: data\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PayedArticles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXR5cGVzY3JpcHQtZXhhbXBsZS8uL3BhZ2VzL0FydGljbGVzL2luZGV4LmpzPzg3ODgiXSwibmFtZXMiOlsiUGF5ZWRBcnRpY2xlcyIsImFydGljbGVzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwicHVzaCIsIm1hcCIsIngiLCJpIiwicGF5ZWRfYXJ0aWNsZV8xIiwiX19odG1sIiwiQ29udGVudCIsInJlbW92ZUl0ZW0iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDdEMsUUFBTUMsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsS0FBckIsQ0FBZDtBQUNBLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUwsS0FBSyxLQUFLTSxTQUFWLElBQXVCTixLQUFLLEtBQUssSUFBakMsSUFBeUNBLEtBQUssS0FBSyxFQUF2RCxFQUEyRDtBQUN6REcsWUFBTSxDQUFDSSxJQUFQLENBQVksUUFBWjtBQUNEO0FBQ0YsR0FKUSxDQUFUO0FBS0Esc0JBQ0U7QUFBQSxjQUNHUCxLQUFLLGlCQUNKLDhEQUFDLDBDQUFEO0FBQUssYUFBTyxFQUFDLFdBQWI7QUFBQSw4QkFDRSw4REFBQywwQ0FBRDtBQUFLLFVBQUUsRUFBQyxJQUFSO0FBQWEsVUFBRSxFQUFFLEVBQWpCO0FBQUEsa0JBQ0dELFFBQVEsQ0FBQ1MsR0FBVCxDQUFhLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQ3RCLDhCQUNFO0FBQUEsb0NBQ0U7QUFBQSx3QkFBS0QsQ0FBQyxDQUFDRTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFHLHFDQUF1QixFQUFFO0FBQUVDLHNCQUFNLEVBQUVILENBQUMsQ0FBQ0k7QUFBWjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUEsMEJBREY7QUFNRCxTQVBBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVdFO0FBQ0UsZUFBTyxFQUFFLE1BQU07QUFDYlosc0JBQVksQ0FBQ2EsVUFBYixDQUF3QixLQUF4QjtBQUNBWCxnQkFBTSxDQUFDSSxJQUFQLENBQVksUUFBWjtBQUNELFNBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosbUJBREY7QUEwQkQsQ0FsQ0Q7O0FBbUNPLE1BQU1RLGtCQUFrQixHQUFHLFlBQVk7QUFDNUMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDcEIscURBRG9CLENBQXZCO0FBR0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFuQjtBQUNBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xyQixjQUFRLEVBQUVtQjtBQURMO0FBREYsR0FBUDtBQUtELENBVk07QUFXUCwrREFBZXBCLGFBQWYiLCJmaWxlIjoiLi9wYWdlcy9BcnRpY2xlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcInJlZmxleGJveFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5jb25zdCBQYXllZEFydGljbGVzID0gKHsgYXJ0aWNsZXMgfSkgPT4ge1xuICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodG9rZW4gPT09IHVuZGVmaW5lZCB8fCB0b2tlbiA9PT0gbnVsbCB8fCB0b2tlbiA9PT0gXCJcIikge1xuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Rva2VuICYmIChcbiAgICAgICAgPEJveCB2YXJpYW50PVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPEJveCBhcz1cImgyXCIgbXk9ezQwfT5cbiAgICAgICAgICAgIHthcnRpY2xlcy5tYXAoKHgsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGgzPnt4LnBheWVkX2FydGljbGVfMX08L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB4LkNvbnRlbnQgfX0+PC9wPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImp3dFwiKTtcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vc3RhcGktbmV4dC1hcHAuaGVyb2t1YXBwLmNvbS9wYXllZC1hcnRpY2xlc2BcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFydGljbGVzOiBkYXRhLFxuICAgIH0sXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgUGF5ZWRBcnRpY2xlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Articles/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "reflexbox":
/*!****************************!*\
  !*** external "reflexbox" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("reflexbox");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/Articles/index.js"));
module.exports = __webpack_exports__;

})();