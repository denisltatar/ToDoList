"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AddTask.js":
/*!*******************************!*\
  !*** ./components/AddTask.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserContext */ \"./components/UserContext.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// Being able to manage and reach our needed data!\n\n\n// Material UI Stuff \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// import CheckCircleIcon from '@material-ui/icons/CheckCircle';\n\n\n// import ArticleSharpIcon from '@material-ui/icons-material/ArticleSharp';\n// import AutoAwesomeSharpIcon from '@material-ui/icons/AutoAwesomeSharp';\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)({\n    container: {\n        padding: 16\n    }\n});\nvar AddTask = function() {\n    _s();\n    var classes = useStyles();\n    // Accessing our UserContext Global data! In other words, being able to access my array of items!!\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_UserContext__WEBPACK_IMPORTED_MODULE_2__.UserContext), toDoList = ref.toDoList, setToDoList = ref.setToDoList;\n    // Creating our variable for user input\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), userInput = ref1[0], setUserInput = ref1[1];\n    // Dealing with input text change    \n    var handleChange = function(e) {\n        e.preventDefault();\n        setUserInput(e.target.value);\n    // console.log(userInput);\n    };\n    // Adding a task once \"Add\" button is clicked\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        setToDoList([\n            // Making each new task appear at the top of the list\n            userInput\n        ].concat(// Throwing the rest of our list below\n        _toConsumableArray(toDoList)));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        maxWidth: \"sm\",\n        className: classes.root,\n        __source: {\n            fileName: \"/Users/denisltatar/Documents/ToDoList/components/AddTask.js\",\n            lineNumber: 65\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            container: true,\n            alignItems: \"center\",\n            __source: {\n                fileName: \"/Users/denisltatar/Documents/ToDoList/components/AddTask.js\",\n                lineNumber: 67\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    item: true,\n                    md: 12,\n                    __source: {\n                        fileName: \"/Users/denisltatar/Documents/ToDoList/components/AddTask.js\",\n                        lineNumber: 68\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        id: \"outlined-basic\",\n                        onChange: handleChange,\n                        label: \"Add task(s)\",\n                        placeholder: \"Task Name\",\n                        fullWidth: true,\n                        multiline: true,\n                        variant: \"outlined\",\n                        __source: {\n                            fileName: \"/Users/denisltatar/Documents/ToDoList/components/AddTask.js\",\n                            lineNumber: 69\n                        },\n                        __self: _this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    item: true,\n                    md: 12,\n                    __source: {\n                        fileName: \"/Users/denisltatar/Documents/ToDoList/components/AddTask.js\",\n                        lineNumber: 74\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        variant: \"contained\",\n                        type: \"submit\",\n                        color: \"primary\",\n                        onClick: handleSubmit,\n                        __source: {\n                            fileName: \"/Users/denisltatar/Documents/ToDoList/components/AddTask.js\",\n                            lineNumber: 76\n                        },\n                        __self: _this,\n                        children: \"Add\"\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s(AddTask, \"AQsWFK9jOkNYuL5orMOqeHylzfo=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = AddTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTask);\nvar _c;\n$RefreshReg$(_c, \"AddTask\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZFRhc2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLEVBQWtEO0FBQ047QUFDRDtBQUUzQyxFQUFxQjtBQUNvQjtBQUNJO0FBQ007QUFDRTtBQUNGO0FBQ1Y7QUFDUTtBQUNRO0FBQ1A7QUFDSjtBQUNpQztBQUN0QjtBQUNKO0FBQ0E7QUFDckQsRUFBZ0U7QUFDVTtBQUNkO0FBQzVELEVBQTJFO0FBQzNFLEVBQTBFO0FBQ0E7QUFDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzlDLEdBQUssQ0FBQ3FCLFNBQVMsR0FBR2Ysb0VBQVUsQ0FBQyxDQUFDO0lBQzFCZ0IsU0FBUyxFQUFFLENBQUM7UUFDUkMsT0FBTyxFQUFFLEVBQUU7SUFDZixDQUFDO0FBQ0wsQ0FBQztBQUVELEdBQUssQ0FBQ0MsT0FBTyxHQUFHLFFBQ2hCLEdBRHNCLENBQUM7O0lBQ25CLEdBQUssQ0FBQ0MsT0FBTyxHQUFHSixTQUFTO0lBRXpCLEVBQWtHO0lBQ2xHLEdBQUssQ0FBMkJwQixHQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0MscURBQVcsR0FBL0N3QixRQUFRLEdBQWlCekIsR0FBdUIsQ0FBaER5QixRQUFRLEVBQUVDLFdBQVcsR0FBSTFCLEdBQXVCLENBQXRDMEIsV0FBVztJQUU1QixFQUF1QztJQUN2QyxHQUFLLENBQTZCM0IsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBdEM0QixTQUFTLEdBQWtCNUIsSUFBWSxLQUE1QjZCLFlBQVksR0FBSTdCLElBQVk7SUFFOUMsRUFBcUM7SUFDckMsR0FBSyxDQUFDOEIsWUFBWSxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDekJBLENBQUMsQ0FBQ0MsY0FBYztRQUVoQkgsWUFBWSxDQUFDRSxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztJQUMzQixFQUEwQjtJQUM5QixDQUFDO0lBRUQsRUFBNkM7SUFDN0MsR0FBSyxDQUFDQyxZQUFZLEdBQUcsUUFBUSxDQUFQSixDQUFDLEVBQUssQ0FBQztRQUN6QkEsQ0FBQyxDQUFDQyxjQUFjO1FBRWhCTCxXQUFXLENBQUMsQ0FBQztZQUNULEVBQXFEO1lBQ3JEQyxTQUFTO1FBR2IsQ0FBQyxDQUxXLE1BS1gsQ0FGRyxFQUFzQzsyQkFDbkNGLFFBQVE7SUFFbkIsQ0FBQztJQUVELE1BQU0sc0VBQ0RuQixtRUFBUztRQUFDNkIsUUFBUSxFQUFDLENBQUk7UUFBQ0MsU0FBUyxFQUFFWixPQUFPLENBQUNhLElBQUk7Ozs7Ozt3RkFFM0NuQyw4REFBSTtZQUFDbUIsU0FBUztZQUFDaUIsVUFBVSxFQUFDLENBQVE7Ozs7Ozs7cUZBQzlCcEMsOERBQUk7b0JBQUNxQyxJQUFJO29CQUFDQyxFQUFFLEVBQUUsRUFBRTs7Ozs7O21HQUNacEMsbUVBQVM7d0JBQUNxQyxFQUFFLEVBQUMsQ0FBZ0I7d0JBQUNDLFFBQVEsRUFBRWIsWUFBWTt3QkFBRWMsS0FBSyxFQUFDLENBQWE7d0JBQUNDLFdBQVcsRUFBQyxDQUFXO3dCQUFDQyxTQUFTO3dCQUFDQyxTQUFTO3dCQUFDQyxPQUFPLEVBQUMsQ0FBVTs7Ozs7Ozs7cUZBSzVJN0MsOERBQUk7b0JBQUNxQyxJQUFJO29CQUFDQyxFQUFFLEVBQUUsRUFBRTs7Ozs7O21HQUVackMsZ0VBQU07d0JBQUM0QyxPQUFPLEVBQUMsQ0FBVzt3QkFBQ0MsSUFBSSxFQUFDLENBQVE7d0JBQUNDLEtBQUssRUFBQyxDQUFTO3dCQUFDQyxPQUFPLEVBQUVoQixZQUFZOzs7Ozs7a0NBQUUsQ0FBRzs7Ozs7O0FBT3hHLENBQUM7R0FoREtYLE9BQU87O1FBQ09ILFNBQVM7OztLQUR2QkcsT0FBTztBQWtEYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWRkVGFzay5qcz8yYjE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEJlaW5nIGFibGUgdG8gbWFuYWdlIGFuZCByZWFjaCBvdXIgbmVlZGVkIGRhdGEhXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi9Vc2VyQ29udGV4dCc7XG5cbi8vIE1hdGVyaWFsIFVJIFN0dWZmIFxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGUnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FZGl0JztcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuLy8gaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tDaXJjbGUnO1xuaW1wb3J0IENoZWNrQ2lyY2xlT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlT3V0bGluZSc7XG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZSc7XG4vLyBpbXBvcnQgQXJ0aWNsZVNoYXJwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMtbWF0ZXJpYWwvQXJ0aWNsZVNoYXJwJztcbi8vIGltcG9ydCBBdXRvQXdlc29tZVNoYXJwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXV0b0F3ZXNvbWVTaGFycCc7XG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1JpZ2h0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1JpZ2h0JztcbmltcG9ydCBMaXN0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdCc7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIHBhZGRpbmc6IDE2XG4gICAgfVxufSk7XG5cbmNvbnN0IEFkZFRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgLy8gQWNjZXNzaW5nIG91ciBVc2VyQ29udGV4dCBHbG9iYWwgZGF0YSEgSW4gb3RoZXIgd29yZHMsIGJlaW5nIGFibGUgdG8gYWNjZXNzIG15IGFycmF5IG9mIGl0ZW1zISFcbiAgICBjb25zdCB7dG9Eb0xpc3QsIHNldFRvRG9MaXN0fSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gICAgLy8gQ3JlYXRpbmcgb3VyIHZhcmlhYmxlIGZvciB1c2VyIGlucHV0XG4gICAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIC8vIERlYWxpbmcgd2l0aCBpbnB1dCB0ZXh0IGNoYW5nZSAgICBcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VySW5wdXQpO1xuICAgIH1cblxuICAgIC8vIEFkZGluZyBhIHRhc2sgb25jZSBcIkFkZFwiIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgc2V0VG9Eb0xpc3QoW1xuICAgICAgICAgICAgLy8gTWFraW5nIGVhY2ggbmV3IHRhc2sgYXBwZWFyIGF0IHRoZSB0b3Agb2YgdGhlIGxpc3RcbiAgICAgICAgICAgIHVzZXJJbnB1dCxcbiAgICAgICAgICAgIC8vIFRocm93aW5nIHRoZSByZXN0IG9mIG91ciBsaXN0IGJlbG93XG4gICAgICAgICAgICAuLi50b0RvTGlzdFxuICAgICAgICBdKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBpZD1cIm91dGxpbmVkLWJhc2ljXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbGFiZWw9XCJBZGQgdGFzayhzKVwiIHBsYWNlaG9sZGVyPVwiVGFzayBOYW1lXCIgZnVsbFdpZHRoIG11bHRpbGluZSB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7LyogPFRleHRGaWVsZCB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17ISFlcnJvcn0gaGVscGVyVGV4dD17ZXJyb3J9IGlkPVwib3V0bGluZWQtYmFzaWNcIiBmdWxsV2lkdGggbGFiZWw9XCJFbnRlciBBIFRhc2sgVG8gR2V0IERvbmVcIiBtdWx0aWxpbmUgdmFyaWFudD1cIm91dGxpbmVkXCIgLz4gKi99XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICB7LyogT3VyIGJ1dHRvbiBoZXJlIHdpbGwgY2FsbCBoYW5kbGVDbGljaygpIHdoZW4gb3VyIGJ1dHRvbiBpcyBjbGlja2VkISAqL31cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+QWRkPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5BZGQ8L0J1dHRvbj4gKi99XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICBcbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufSBcblxuZXhwb3J0IGRlZmF1bHQgQWRkVGFzaztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsIkdyaWQiLCJCdXR0b24iLCJUZXh0RmllbGQiLCJtYWtlU3R5bGVzIiwiQ29udGFpbmVyIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1JY29uIiwiRGVsZXRlSWNvbiIsIkVkaXRJY29uIiwiTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24iLCJMaXN0SXRlbVRleHQiLCJJY29uQnV0dG9uIiwiVHlwb2dyYXBoeSIsIkNoZWNrQ2lyY2xlT3V0bGluZUljb24iLCJDaGVja0NpcmNsZUljb24iLCJLZXlib2FyZEFycm93UmlnaHRJY29uIiwiTGlzdEljb24iLCJ1c2VTdHlsZXMiLCJjb250YWluZXIiLCJwYWRkaW5nIiwiQWRkVGFzayIsImNsYXNzZXMiLCJ0b0RvTGlzdCIsInNldFRvRG9MaXN0IiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJtYXhXaWR0aCIsImNsYXNzTmFtZSIsInJvb3QiLCJhbGlnbkl0ZW1zIiwiaXRlbSIsIm1kIiwiaWQiLCJvbkNoYW5nZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJmdWxsV2lkdGgiLCJtdWx0aWxpbmUiLCJ2YXJpYW50IiwidHlwZSIsImNvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AddTask.js\n");

/***/ })

});