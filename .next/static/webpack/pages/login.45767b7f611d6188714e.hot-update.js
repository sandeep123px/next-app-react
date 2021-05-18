/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_sandeep_next_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_sandeep_next_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_sandeep_next_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_sandeep_next_app_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reflexbox */ \"./node_modules/reflexbox/dist/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/home/sandeep/next-app-react/pages/login.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Login = function Login() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var token = localStorage.getItem(\"jwt\");\n\n    if (token !== undefined || token !== \"\" || token !== null) {\n      router.push(\"/Articles\");\n    }\n  });\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      identifier = _useState[0],\n      setIdentifier = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var callApi = /*#__PURE__*/function () {\n    var _ref = (0,_home_sandeep_next_app_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_sandeep_next_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var user, login, loginResponse;\n      return _home_sandeep_next_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              user = {\n                identifier: identifier,\n                password: password\n              };\n              _context.next = 4;\n              return fetch(\"https://stapi-next-app.herokuapp.com/auth/local\", {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(user)\n              });\n\n            case 4:\n              login = _context.sent;\n              _context.next = 7;\n              return login.json();\n\n            case 7:\n              loginResponse = _context.sent;\n              localStorage.setItem(\"jwt\", loginResponse.jwt);\n              router.push(\"/Articles\");\n              console.log(loginResponse);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function callApi(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reflexbox__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      variant: \"container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reflexbox__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        as: \"h2\",\n        my: 40,\n        children: \"you need to login to access the articles\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"email\",\n          onChange: function onChange(e) {\n            return setIdentifier(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"password\",\n          onChange: function onChange(e) {\n            return setPassword(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: callApi,\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Login, \"ZHqZo75UkQW8mfhrknGOBeCyPAQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/M2I2OSJdLCJuYW1lcyI6WyJMb2dpbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsInB1c2giLCJ1c2VTdGF0ZSIsImlkZW50aWZpZXIiLCJzZXRJZGVudGlmaWVyIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNhbGxBcGkiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlciIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9naW4iLCJqc29uIiwibG9naW5SZXNwb25zZSIsInNldEl0ZW0iLCJqd3QiLCJjb25zb2xlIiwibG9nIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0FDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLEtBQXJCLENBQWQ7O0FBQ0EsUUFBSUYsS0FBSyxLQUFLRyxTQUFWLElBQXVCSCxLQUFLLEtBQUssRUFBakMsSUFBdUNBLEtBQUssS0FBSyxJQUFyRCxFQUEyRDtBQUN6REgsWUFBTSxDQUFDTyxJQUFQLENBQVksV0FBWjtBQUNEO0FBQ0YsR0FMUSxDQUFUOztBQUZrQixrQkFRa0JDLCtDQUFRLENBQUMsRUFBRCxDQVIxQjtBQUFBLE1BUVhDLFVBUlc7QUFBQSxNQVFDQyxhQVJEOztBQUFBLG1CQVNjRiwrQ0FBUSxDQUFDLEVBQUQsQ0FUdEI7QUFBQSxNQVNYRyxRQVRXO0FBQUEsTUFTREMsV0FUQzs7QUFVbEIsTUFBTUMsT0FBTztBQUFBLDJRQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQSxtQkFBSyxDQUFDQyxjQUFOO0FBQ01DLGtCQUZRLEdBRUQ7QUFDWFAsMEJBQVUsRUFBRUEsVUFERDtBQUVYRSx3QkFBUSxFQUFFQTtBQUZDLGVBRkM7QUFBQTtBQUFBLHFCQU1NTSxLQUFLLG9EQUV2QjtBQUNFQyxzQkFBTSxFQUFFLE1BRFY7QUFFRUMsdUJBQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURULGlCQUZYO0FBS0VDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixJQUFmO0FBTFIsZUFGdUIsQ0FOWDs7QUFBQTtBQU1STyxtQkFOUTtBQUFBO0FBQUEscUJBZ0JjQSxLQUFLLENBQUNDLElBQU4sRUFoQmQ7O0FBQUE7QUFnQlJDLDJCQWhCUTtBQWlCZHJCLDBCQUFZLENBQUNzQixPQUFiLENBQXFCLEtBQXJCLEVBQTRCRCxhQUFhLENBQUNFLEdBQTFDO0FBQ0EzQixvQkFBTSxDQUFDTyxJQUFQLENBQVksV0FBWjtBQUNBcUIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSixhQUFaOztBQW5CYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQWixPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBcUJBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsMENBQUQ7QUFBSyxhQUFPLEVBQUMsV0FBYjtBQUFBLDhCQUNFLDhEQUFDLDBDQUFEO0FBQUssVUFBRSxFQUFFLElBQVQ7QUFBZSxVQUFFLEVBQUUsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUEsZ0NBQ0U7QUFBTyxjQUFJLEVBQUMsT0FBWjtBQUFvQixrQkFBUSxFQUFFLGtCQUFDaUIsQ0FBRDtBQUFBLG1CQUFPcEIsYUFBYSxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBcEI7QUFBQTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxrQkFBUSxFQUFFLGtCQUFDRixDQUFEO0FBQUEsbUJBQU9sQixXQUFXLENBQUNrQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFRRTtBQUFRLGlCQUFPLEVBQUVuQixPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW1CRCxDQWxERDs7R0FBTWQsSztVQUNXRSxrRDs7O0tBRFhGLEs7QUFtRE4sK0RBQWVBLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCB9IGZyb20gXCJyZWZsZXhib3hcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuY29uc3QgTG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIik7XG4gICAgaWYgKHRva2VuICE9PSB1bmRlZmluZWQgfHwgdG9rZW4gIT09IFwiXCIgfHwgdG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL0FydGljbGVzXCIpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IFtpZGVudGlmaWVyLCBzZXRJZGVudGlmaWVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBjYWxsQXBpID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICB9O1xuICAgIGNvbnN0IGxvZ2luID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9zdGFwaS1uZXh0LWFwcC5oZXJva3VhcHAuY29tL2F1dGgvbG9jYWxgLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgbG9naW5SZXNwb25zZSA9IGF3YWl0IGxvZ2luLmpzb24oKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImp3dFwiLCBsb2dpblJlc3BvbnNlLmp3dCk7XG4gICAgcm91dGVyLnB1c2goXCIvQXJ0aWNsZXNcIik7XG4gICAgY29uc29sZS5sb2cobG9naW5SZXNwb25zZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggdmFyaWFudD1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Qm94IGFzPXtcImgyXCJ9IG15PXs0MH0+XG4gICAgICAgICAgeW91IG5lZWQgdG8gbG9naW4gdG8gYWNjZXNzIHRoZSBhcnRpY2xlc1xuICAgICAgICA8L0JveD5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SWRlbnRpZmllcihlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NhbGxBcGl9PkxvZ2luPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});