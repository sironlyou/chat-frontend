"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/graphql/apollo-client.ts":
/*!**************************************!*\
  !*** ./src/graphql/apollo-client.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": function() { return /* binding */ client; }\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _apollo_client_link_subscriptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/subscriptions */ \"./node_modules/@apollo/client/link/subscriptions/index.js\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client/utilities */ \"./node_modules/@apollo/client/utilities/index.js\");\n/* harmony import */ var graphql_ws__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-ws */ \"./node_modules/graphql-ws/lib/index.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\n\nconst httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({\n    uri: \"https://chat-backend-m3np.onrender.com/graphql\",\n    credentials: \"include\"\n});\nconst wsLink =  true ? new _apollo_client_link_subscriptions__WEBPACK_IMPORTED_MODULE_2__.GraphQLWsLink((0,graphql_ws__WEBPACK_IMPORTED_MODULE_3__.createClient)({\n    url: \"ws://https://chat-backend-m3np.onrender.com//graphql/subscriptions\",\n    connectionParams: async ()=>({\n            session: await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)()\n        })\n})) : 0;\nconst link =  true && wsLink != null ? (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.split)((param)=>{\n    let { query  } = param;\n    const definition = (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_4__.getMainDefinition)(query);\n    return definition.kind === \"OperationDefinition\" && definition.operation === \"subscription\";\n}, wsLink, httpLink) : httpLink;\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    link,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9hcG9sbG8tY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEU7QUFDWjtBQUNMO0FBQ25CO0FBQ0c7QUFDN0MsTUFBTVEsV0FBVyxJQUFJUCxvREFBUUEsQ0FBQztJQUM1QlEsS0FBTTtJQUVOQyxhQUFhO0FBQ2Y7QUFFQSxNQUFNQyxTQUNKLEtBQTZCLEdBQ3pCLElBQUlQLDRFQUFhQSxDQUNmRSx3REFBWUEsQ0FBQztJQUNYTSxLQUFNO0lBRU5DLGtCQUFrQixVQUFhO1lBQzdCQyxTQUFTLE1BQU1QLDJEQUFVQTtRQUMzQjtBQUNGLE1BRUYsQ0FBSTtBQUVWLE1BQU1RLE9BQ0osS0FBNkIsSUFBSUosVUFBVSxJQUFJLEdBQzNDUixxREFBS0EsQ0FDSCxTQUFlO1FBQWQsRUFBRWEsTUFBSyxFQUFFO0lBQ1IsTUFBTUMsYUFBYVosMkVBQWlCQSxDQUFDVztJQUNyQyxPQUNFQyxXQUFXQyxJQUFJLEtBQUsseUJBQ3BCRCxXQUFXRSxTQUFTLEtBQUs7QUFFN0IsR0FDQVIsUUFDQUgsWUFFRkEsUUFBUTtBQUNQLE1BQU1ZLFNBQVMsSUFBSXBCLHdEQUFZQSxDQUFDO0lBQ3JDZTtJQUNBTSxPQUFPLElBQUluQix5REFBYUE7QUFDMUIsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZ3JhcGhxbC9hcG9sbG8tY2xpZW50LnRzPzU2NTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSwgc3BsaXQgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IEdyYXBoUUxXc0xpbmsgfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvbGluay9zdWJzY3JpcHRpb25zXCI7XG5pbXBvcnQgeyBnZXRNYWluRGVmaW5pdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC91dGlsaXRpZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJncmFwaHFsLXdzXCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoe1xuICB1cmk6IGBodHRwczovL2NoYXQtYmFja2VuZC1tM25wLm9ucmVuZGVyLmNvbS9ncmFwaHFsYCxcblxuICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG59KTtcblxuY29uc3Qgd3NMaW5rID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxuICAgID8gbmV3IEdyYXBoUUxXc0xpbmsoXG4gICAgICAgIGNyZWF0ZUNsaWVudCh7XG4gICAgICAgICAgdXJsOiBgd3M6Ly9odHRwczovL2NoYXQtYmFja2VuZC1tM25wLm9ucmVuZGVyLmNvbS8vZ3JhcGhxbC9zdWJzY3JpcHRpb25zYCxcblxuICAgICAgICAgIGNvbm5lY3Rpb25QYXJhbXM6IGFzeW5jICgpID0+ICh7XG4gICAgICAgICAgICBzZXNzaW9uOiBhd2FpdCBnZXRTZXNzaW9uKCksXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgOiBudWxsO1xuXG5jb25zdCBsaW5rID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3c0xpbmsgIT0gbnVsbFxuICAgID8gc3BsaXQoXG4gICAgICAgICh7IHF1ZXJ5IH0pID0+IHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09IFwiT3BlcmF0aW9uRGVmaW5pdGlvblwiICYmXG4gICAgICAgICAgICBkZWZpbml0aW9uLm9wZXJhdGlvbiA9PT0gXCJzdWJzY3JpcHRpb25cIlxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIHdzTGluayxcbiAgICAgICAgaHR0cExpbmtcbiAgICAgIClcbiAgICA6IGh0dHBMaW5rO1xuZXhwb3J0IGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICBsaW5rLFxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbn0pO1xuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsInNwbGl0IiwiR3JhcGhRTFdzTGluayIsImdldE1haW5EZWZpbml0aW9uIiwiY3JlYXRlQ2xpZW50IiwiZ2V0U2Vzc2lvbiIsImh0dHBMaW5rIiwidXJpIiwiY3JlZGVudGlhbHMiLCJ3c0xpbmsiLCJ1cmwiLCJjb25uZWN0aW9uUGFyYW1zIiwic2Vzc2lvbiIsImxpbmsiLCJxdWVyeSIsImRlZmluaXRpb24iLCJraW5kIiwib3BlcmF0aW9uIiwiY2xpZW50IiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/graphql/apollo-client.ts\n"));

/***/ })

});