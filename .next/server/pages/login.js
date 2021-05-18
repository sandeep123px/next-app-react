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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflexbox */ \"reflexbox\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/sandeep/next-app-react/pages/login.js\";\n\n\n\n\nconst Login = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const token = localStorage.getItem(\"jwt\");\n\n    if (token !== undefined && token !== null && token !== \"\") {\n      router.push(\"/Articles\");\n    }\n  });\n  const {\n    0: identifier,\n    1: setIdentifier\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    0: password,\n    1: setPassword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n\n  const callApi = async event => {\n    event.preventDefault();\n    const user = {\n      identifier: identifier,\n      password: password\n    };\n    const login = await fetch(`https://stapi-next-app.herokuapp.com/auth/local`, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(user)\n    });\n    const loginResponse = await login.json();\n    localStorage.setItem(\"jwt\", loginResponse.jwt);\n    router.push(\"/Articles\");\n    console.log(loginResponse);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reflexbox__WEBPACK_IMPORTED_MODULE_2__.Box, {\n      variant: \"container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reflexbox__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        as: \"h2\",\n        my: 40,\n        children: \"you need to login to access the articles\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"email\",\n          onChange: e => setIdentifier(e.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"password\",\n          onChange: e => setPassword(e.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: callApi,\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXR5cGVzY3JpcHQtZXhhbXBsZS8uL3BhZ2VzL2xvZ2luLmpzPzNiNjkiXSwibmFtZXMiOlsiTG9naW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJwdXNoIiwiaWRlbnRpZmllciIsInNldElkZW50aWZpZXIiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjYWxsQXBpIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJsb2dpbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9naW5SZXNwb25zZSIsImpzb24iLCJzZXRJdGVtIiwiand0IiwiY29uc29sZSIsImxvZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQ2xCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsS0FBckIsQ0FBZDs7QUFDQSxRQUFJRixLQUFLLEtBQUtHLFNBQVYsSUFBdUJILEtBQUssS0FBSyxJQUFqQyxJQUF5Q0EsS0FBSyxLQUFLLEVBQXZELEVBQTJEO0FBQ3pESCxZQUFNLENBQUNPLElBQVAsQ0FBWSxXQUFaO0FBQ0Q7QUFDRixHQUxRLENBQVQ7QUFNQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsK0NBQVEsQ0FBQyxFQUFELENBQXhDOztBQUNBLFFBQU1HLE9BQU8sR0FBRyxNQUFPQyxLQUFQLElBQWlCO0FBQy9CQSxTQUFLLENBQUNDLGNBQU47QUFDQSxVQUFNQyxJQUFJLEdBQUc7QUFDWFIsZ0JBQVUsRUFBRUEsVUFERDtBQUVYRyxjQUFRLEVBQUVBO0FBRkMsS0FBYjtBQUlBLFVBQU1NLEtBQUssR0FBRyxNQUFNQyxLQUFLLENBQ3RCLGlEQURzQixFQUV2QjtBQUNFQyxZQUFNLEVBQUUsTUFEVjtBQUVFQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUZYO0FBS0VDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWY7QUFMUixLQUZ1QixDQUF6QjtBQVVBLFVBQU1RLGFBQWEsR0FBRyxNQUFNUCxLQUFLLENBQUNRLElBQU4sRUFBNUI7QUFDQXJCLGdCQUFZLENBQUNzQixPQUFiLENBQXFCLEtBQXJCLEVBQTRCRixhQUFhLENBQUNHLEdBQTFDO0FBQ0EzQixVQUFNLENBQUNPLElBQVAsQ0FBWSxXQUFaO0FBQ0FxQixXQUFPLENBQUNDLEdBQVIsQ0FBWUwsYUFBWjtBQUNELEdBcEJEOztBQXFCQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDBDQUFEO0FBQUssYUFBTyxFQUFDLFdBQWI7QUFBQSw4QkFDRSw4REFBQywwQ0FBRDtBQUFLLFVBQUUsRUFBRSxJQUFUO0FBQWUsVUFBRSxFQUFFLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBQSxnQ0FDRTtBQUFPLGNBQUksRUFBQyxPQUFaO0FBQW9CLGtCQUFRLEVBQUdNLENBQUQsSUFBT3JCLGFBQWEsQ0FBQ3FCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGtCQUFRLEVBQUdGLENBQUQsSUFBT2xCLFdBQVcsQ0FBQ2tCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWO0FBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsZUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLGVBUUU7QUFBUSxpQkFBTyxFQUFFbkIsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBbUJELENBbEREOztBQW1EQSwrREFBZWQsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcInJlZmxleGJveFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKTtcbiAgICBpZiAodG9rZW4gIT09IHVuZGVmaW5lZCAmJiB0b2tlbiAhPT0gbnVsbCAmJiB0b2tlbiAhPT0gXCJcIikge1xuICAgICAgcm91dGVyLnB1c2goXCIvQXJ0aWNsZXNcIik7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgW2lkZW50aWZpZXIsIHNldElkZW50aWZpZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGNhbGxBcGkgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgIH07XG4gICAgY29uc3QgbG9naW4gPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3N0YXBpLW5leHQtYXBwLmhlcm9rdWFwcC5jb20vYXV0aC9sb2NhbGAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBsb2dpblJlc3BvbnNlID0gYXdhaXQgbG9naW4uanNvbigpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiand0XCIsIGxvZ2luUmVzcG9uc2Uuand0KTtcbiAgICByb3V0ZXIucHVzaChcIi9BcnRpY2xlc1wiKTtcbiAgICBjb25zb2xlLmxvZyhsb2dpblJlc3BvbnNlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCB2YXJpYW50PVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxCb3ggYXM9e1wiaDJcIn0gbXk9ezQwfT5cbiAgICAgICAgICB5b3UgbmVlZCB0byBsb2dpbiB0byBhY2Nlc3MgdGhlIGFydGljbGVzXG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRJZGVudGlmaWVyKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2FsbEFwaX0+TG9naW48L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();