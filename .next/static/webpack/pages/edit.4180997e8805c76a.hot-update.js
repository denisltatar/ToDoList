"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/edit",{

/***/ "./pages/edit.js":
/*!***********************!*\
  !*** ./pages/edit.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UserContext */ \"./components/UserContext.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_EditHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/EditHeader */ \"./components/EditHeader.js\");\n/* harmony import */ var _components_EditForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/EditForm */ \"./components/EditForm.js\");\n/* harmony import */ var _components_EditFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/EditFooter */ \"./components/EditFooter.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Edit() {\n    _s();\n    // Accessing our UserContect Global data!\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_UserContext__WEBPACK_IMPORTED_MODULE_2__.UserContext), toDoList = ref.toDoList, setToDoList = ref.setToDoList;\n    console.log(toDoList.length);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_UserContext__WEBPACK_IMPORTED_MODULE_2__.UserContext.Provider, {\n        value: {\n            toDoList: toDoList,\n            setToDoList: setToDoList\n        },\n        __source: {\n            fileName: \"/Users/denisltatar/Documents/ToDoList/pages/edit.js\",\n            lineNumber: 20\n        },\n        __self: this\n    }));\n}\n_s(Edit, \"70SyTtRr2iRfM8SqSm4N6c2iHxI=\");\n_c = Edit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lZGl0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDcUI7QUFDM0I7QUFDRTtBQUNnQjtBQUNEO0FBQ007QUFDVjtBQUNRO0FBQ0o7QUFDSTs7U0FFeENXLElBQUksR0FBRyxDQUFDOztJQUViLEVBQXlDO0lBQ3pDLEdBQUssQ0FBMkJYLEdBQXVCLEdBQXZCQSxpREFBVSxDQUFDQyxnRUFBVyxHQUEvQ1csUUFBUSxHQUFpQlosR0FBdUIsQ0FBaERZLFFBQVEsRUFBRUMsV0FBVyxHQUFJYixHQUF1QixDQUF0Q2EsV0FBVztJQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQ0ksTUFBTTtJQUUzQixNQUFNLHNFQUNIZix5RUFBb0I7UUFBQ2lCLEtBQUssRUFBRSxDQUFDTjtZQUFBQSxRQUFRLEVBQVJBLFFBQVE7WUFBRUMsV0FBVyxFQUFYQSxXQUFXO1FBQUEsQ0FBQzs7Ozs7OztBQWdDMUQsQ0FBQztHQXZDUUYsSUFBSTtLQUFKQSxJQUFJO0FBeUNiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdC5qcz8xYWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckNvbnRleHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBFZGl0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRWRpdEhlYWRlcic7XG5pbXBvcnQgRWRpdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9FZGl0Rm9ybSc7XG5pbXBvcnQgRWRpdEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0VkaXRGb290ZXInO1xuXG5mdW5jdGlvbiBFZGl0KCkge1xuXG4gICAgLy8gQWNjZXNzaW5nIG91ciBVc2VyQ29udGVjdCBHbG9iYWwgZGF0YSFcbiAgICBjb25zdCB7dG9Eb0xpc3QsIHNldFRvRG9MaXN0fSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICAgIGNvbnNvbGUubG9nKHRvRG9MaXN0Lmxlbmd0aCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7dG9Eb0xpc3QsIHNldFRvRG9MaXN0fX0+XG4gICAgICAgIHsvKiA8RWRpdEhlYWRlci8+ICovfVxuICAgICAgICBcbiAgICAgICAgey8qIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gbWF4V2lkdGg9XCJtZFwiPlxuICAgICAgICAgICAgeyF0b0RvTGlzdC5sZW5ndGhcbiAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJlcnJvclwiPk5vIEF2YWlsYWJsZSBEYXRhIHRvIERpc3BsYXkgOik8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICg8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAge3RvRG9MaXN0Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17aXRlbS5pZH0gYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlSWNvbiBjb2xvcj1cInByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGFyaWEtbGFiZWw9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoaXRlbSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9MaXN0PilcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9Db250YWluZXI+ICAgICAgKi99XG4gICAgICAgIFxuICAgICAgICB7LyogPEVkaXRGb290ZXIvPiAqL31cbiAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXQ7Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIkJ1dHRvbiIsIlRleHRGaWVsZCIsIkhlYWRlciIsIkVkaXRIZWFkZXIiLCJFZGl0Rm9ybSIsIkVkaXRGb290ZXIiLCJFZGl0IiwidG9Eb0xpc3QiLCJzZXRUb0RvTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/edit.js\n");

/***/ })

});