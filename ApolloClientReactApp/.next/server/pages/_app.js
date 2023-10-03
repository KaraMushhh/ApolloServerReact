"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/logo.js":
/*!****************************!*\
  !*** ./components/logo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Logo = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"/images/US_Lecce.png\",\n        alt: \"Logo US Lecce\"\n    }, void 0, false, {\n        fileName: \"/Users/CARMAT/Desktop/ApolloClientReactApp/components/logo.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ28uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLE9BQU87SUFDWCxxQkFDRSw4REFBQ0M7UUFBSUMsS0FBSTtRQUF1QkMsS0FBSTs7Ozs7O0FBRXhDO0FBRUEsaUVBQWVILElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcG9sbG9jbGllbnRyZWFjdGFwcC8uL2NvbXBvbmVudHMvbG9nby5qcz9hNjY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IExvZ28gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGltZyBzcmM9XCIvaW1hZ2VzL1VTX0xlY2NlLnBuZ1wiIGFsdD1cIkxvZ28gVVMgTGVjY2VcIiAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nbzsiXSwibmFtZXMiOlsiUmVhY3QiLCJMb2dvIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/logo.js\n");

/***/ }),

/***/ "./graphql/apolloClient.js":
/*!*********************************!*\
  !*** ./graphql/apolloClient.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkBoxListVar: () => (/* binding */ checkBoxListVar),\n/* harmony export */   currentThemeVar: () => (/* binding */ currentThemeVar),\n/* harmony export */   initializeApollo: () => (/* binding */ initializeApollo),\n/* harmony export */   paginationDataVar: () => (/* binding */ paginationDataVar),\n/* harmony export */   useApollo: () => (/* binding */ useApollo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link */ \"apollo-link\");\n/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_link_persisted_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-persisted-queries */ \"apollo-link-persisted-queries\");\n/* harmony import */ var apollo_link_persisted_queries__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_persisted_queries__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-http */ \"apollo-link-http\");\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! deepmerge */ \"deepmerge\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagination */ \"./graphql/pagination.js\");\n\n\n\n\n\n\n\nconst currentThemeVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.makeVar)(\"light\");\nconst checkBoxListVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.makeVar)([]);\nconst paginationDataVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.makeVar)({\n    limit: 4,\n    offset: 0,\n    currentPage: 0,\n    totalItemCount: 0\n});\nconst link = apollo_link__WEBPACK_IMPORTED_MODULE_2__.ApolloLink.from([\n    (0,apollo_link_persisted_queries__WEBPACK_IMPORTED_MODULE_3__.createPersistedQueryLink)({\n        useGETForHashedQueries: true\n    }),\n    (0,apollo_link_http__WEBPACK_IMPORTED_MODULE_4__.createHttpLink)({\n        uri: \"http://localhost:4000/graphql\"\n    })\n]);\nconst options = {\n    typePolicies: {\n        Query: {\n            fields: {\n                speakersConcat: (0,_pagination__WEBPACK_IMPORTED_MODULE_6__.generalConcatPagination)(),\n                sessionsConcat: (0,_pagination__WEBPACK_IMPORTED_MODULE_6__.generalConcatPagination)()\n            }\n        },\n        Speaker: {\n            fields: {\n                fullName: {\n                    read: function(_, { readField }) {\n                        return `${readField(\"first\")} ${readField(\"last\")}`;\n                    }\n                },\n                checkBoxColumn: {\n                    read: function(_, { readField }) {\n                        const id = readField(\"id\");\n                        const selectedSpeakerIds = checkBoxListVar();\n                        return selectedSpeakerIds ? selectedSpeakerIds.includes(id) : false;\n                    }\n                }\n            }\n        }\n    }\n};\nlet apolloClient;\nfunction initializeApollo(initialState = null, pageProps) {\n    const isNodeServer = \"undefined\" === \"undefined\";\n    paginationDataVar({\n        ...paginationDataVar(),\n        currentPage: parseInt(pageProps.currentPage - 1)\n    });\n    const _apolloClient = apolloClient ?? new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache(options),\n        link,\n        ssrMode: isNodeServer\n    });\n    if (initialState) {\n        const existingCache = _apolloClient.extract();\n        const data = deepmerge__WEBPACK_IMPORTED_MODULE_5___default()(initialState, existingCache);\n        _apolloClient.cache.restore(data);\n    }\n    if (isNodeServer) return _apolloClient;\n    if (!apolloClient) apolloClient = _apolloClient;\n    return _apolloClient;\n}\nfunction useApollo(initialState, pageProps) {\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{\n        return initializeApollo(initialState, pageProps);\n    }, [\n        initialState\n    ]);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL2Fwb2xsb0NsaWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDc0M7QUFDN0I7QUFDZ0M7QUFDdkI7QUFDcEI7QUFDeUI7QUFFaEQsTUFBTVMsa0JBQWtCTix1REFBT0EsQ0FBQyxTQUFTO0FBQ3pDLE1BQU1PLGtCQUFrQlAsdURBQU9BLENBQUMsRUFBRSxFQUFFO0FBQ3BDLE1BQU1RLG9CQUFvQlIsdURBQU9BLENBQUM7SUFDdkNTLE9BQU87SUFDUEMsUUFBUTtJQUNSQyxhQUFhO0lBQ2JDLGdCQUFnQjtBQUNsQixHQUFHO0FBRUgsTUFBTUMsT0FBT1osbURBQVVBLENBQUNhLElBQUksQ0FBQztJQUMzQlosdUZBQXdCQSxDQUFDO1FBQUVhLHdCQUF3QjtJQUFLO0lBQ3hEWixnRUFBY0EsQ0FBQztRQUFFYSxLQUFLO0lBQWdDO0NBQ3ZEO0FBRUQsTUFBTUMsVUFBVTtJQUNkQyxjQUFjO1FBQ1pDLE9BQU87WUFDTEMsUUFBUTtnQkFDTkMsZ0JBQWdCaEIsb0VBQXVCQTtnQkFDdkNpQixnQkFBZ0JqQixvRUFBdUJBO1lBQ3pDO1FBQ0Y7UUFDQWtCLFNBQVM7WUFDUEgsUUFBUTtnQkFDTkksVUFBVTtvQkFDUkMsTUFBTSxTQUFVQyxDQUFDLEVBQUUsRUFBRUMsU0FBUyxFQUFFO3dCQUM5QixPQUFPLENBQUMsRUFBRUEsVUFBVSxTQUFTLENBQUMsRUFBRUEsVUFBVSxRQUFRLENBQUM7b0JBQ3JEO2dCQUNGO2dCQUNBQyxnQkFBZ0I7b0JBQ2RILE1BQU0sU0FBVUMsQ0FBQyxFQUFFLEVBQUVDLFNBQVMsRUFBRTt3QkFDOUIsTUFBTUUsS0FBS0YsVUFBVTt3QkFDckIsTUFBTUcscUJBQXFCdkI7d0JBQzNCLE9BQU91QixxQkFBcUJBLG1CQUFtQkMsUUFBUSxDQUFDRixNQUFNO29CQUNoRTtnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtBQUNGO0FBRUEsSUFBSUc7QUFFRyxTQUFTQyxpQkFBaUJDLGVBQWUsSUFBSSxFQUFFQyxTQUFTO0lBQzdELE1BQU1DLGVBQWUsZ0JBQWtCO0lBRXZDNUIsa0JBQWtCO1FBQ2hCLEdBQUdBLG1CQUFtQjtRQUN0QkcsYUFBYTBCLFNBQVNGLFVBQVV4QixXQUFXLEdBQUc7SUFDaEQ7SUFFQSxNQUFNMkIsZ0JBQ0pOLGdCQUNBLElBQUlsQyx3REFBWUEsQ0FBQztRQUNmeUMsT0FBTyxJQUFJeEMseURBQWFBLENBQUNrQjtRQUN6Qko7UUFDQTJCLFNBQVNKO0lBQ1g7SUFDRixJQUFJRixjQUFjO1FBQ2hCLE1BQU1PLGdCQUFnQkgsY0FBY0ksT0FBTztRQUMzQyxNQUFNQyxPQUFPdkMsZ0RBQUtBLENBQUM4QixjQUFjTztRQUNqQ0gsY0FBY0MsS0FBSyxDQUFDSyxPQUFPLENBQUNEO0lBQzlCO0lBQ0EsSUFBSVAsY0FBYyxPQUFPRTtJQUN6QixJQUFJLENBQUNOLGNBQWNBLGVBQWVNO0lBQ2xDLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTTyxVQUFVWCxZQUFZLEVBQUVDLFNBQVM7SUFDL0MsT0FBT3RDLDhDQUFPQSxDQUFDO1FBQ2IsT0FBT29DLGlCQUFpQkMsY0FBY0M7SUFDeEMsR0FBRztRQUFDRDtLQUFhO0FBQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBvbGxvY2xpZW50cmVhY3RhcHAvLi9ncmFwaHFsL2Fwb2xsb0NsaWVudC5qcz82MjVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIG1ha2VWYXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBBcG9sbG9MaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmsnO1xuaW1wb3J0IHsgY3JlYXRlUGVyc2lzdGVkUXVlcnlMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstcGVyc2lzdGVkLXF1ZXJpZXMnO1xuaW1wb3J0IHsgY3JlYXRlSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbmltcG9ydCBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuaW1wb3J0IHsgZ2VuZXJhbENvbmNhdFBhZ2luYXRpb24gfSBmcm9tICcuL3BhZ2luYXRpb24nO1xuXG5leHBvcnQgY29uc3QgY3VycmVudFRoZW1lVmFyID0gbWFrZVZhcignbGlnaHQnKTtcbmV4cG9ydCBjb25zdCBjaGVja0JveExpc3RWYXIgPSBtYWtlVmFyKFtdKTtcbmV4cG9ydCBjb25zdCBwYWdpbmF0aW9uRGF0YVZhciA9IG1ha2VWYXIoe1xuICBsaW1pdDogNCxcbiAgb2Zmc2V0OiAwLFxuICBjdXJyZW50UGFnZTogMCxcbiAgdG90YWxJdGVtQ291bnQ6IDAsXG59KTtcblxuY29uc3QgbGluayA9IEFwb2xsb0xpbmsuZnJvbShbXG4gIGNyZWF0ZVBlcnNpc3RlZFF1ZXJ5TGluayh7IHVzZUdFVEZvckhhc2hlZFF1ZXJpZXM6IHRydWUgfSksXG4gIGNyZWF0ZUh0dHBMaW5rKHsgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWwnIH0pLFxuXSk7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHR5cGVQb2xpY2llczoge1xuICAgIFF1ZXJ5OiB7XG4gICAgICBmaWVsZHM6IHtcbiAgICAgICAgc3BlYWtlcnNDb25jYXQ6IGdlbmVyYWxDb25jYXRQYWdpbmF0aW9uKCksXG4gICAgICAgIHNlc3Npb25zQ29uY2F0OiBnZW5lcmFsQ29uY2F0UGFnaW5hdGlvbigpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFNwZWFrZXI6IHtcbiAgICAgIGZpZWxkczoge1xuICAgICAgICBmdWxsTmFtZToge1xuICAgICAgICAgIHJlYWQ6IGZ1bmN0aW9uIChfLCB7IHJlYWRGaWVsZCB9KSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7cmVhZEZpZWxkKCdmaXJzdCcpfSAke3JlYWRGaWVsZCgnbGFzdCcpfWA7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tCb3hDb2x1bW46IHtcbiAgICAgICAgICByZWFkOiBmdW5jdGlvbiAoXywgeyByZWFkRmllbGQgfSkge1xuICAgICAgICAgICAgY29uc3QgaWQgPSByZWFkRmllbGQoJ2lkJyk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFNwZWFrZXJJZHMgPSBjaGVja0JveExpc3RWYXIoKTtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFNwZWFrZXJJZHMgPyBzZWxlY3RlZFNwZWFrZXJJZHMuaW5jbHVkZXMoaWQpIDogZmFsc2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG5cbmxldCBhcG9sbG9DbGllbnQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSA9IG51bGwsIHBhZ2VQcm9wcykge1xuICBjb25zdCBpc05vZGVTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcblxuICBwYWdpbmF0aW9uRGF0YVZhcih7XG4gICAgLi4ucGFnaW5hdGlvbkRhdGFWYXIoKSxcbiAgICBjdXJyZW50UGFnZTogcGFyc2VJbnQocGFnZVByb3BzLmN1cnJlbnRQYWdlIC0gMSksXG4gIH0pO1xuXG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPVxuICAgIGFwb2xsb0NsaWVudCA/P1xuICAgIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKG9wdGlvbnMpLFxuICAgICAgbGluayxcbiAgICAgIHNzck1vZGU6IGlzTm9kZVNlcnZlcixcbiAgICB9KTtcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xuICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGUgPSBfYXBvbGxvQ2xpZW50LmV4dHJhY3QoKTtcbiAgICBjb25zdCBkYXRhID0gbWVyZ2UoaW5pdGlhbFN0YXRlLCBleGlzdGluZ0NhY2hlKTtcbiAgICBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoZGF0YSk7XG4gIH1cbiAgaWYgKGlzTm9kZVNlcnZlcikgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50O1xuICByZXR1cm4gX2Fwb2xsb0NsaWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhpbml0aWFsU3RhdGUsIHBhZ2VQcm9wcykge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlLCBwYWdlUHJvcHMpO1xuICB9LCBbaW5pdGlhbFN0YXRlXSk7XG59Il0sIm5hbWVzIjpbInVzZU1lbW8iLCJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwibWFrZVZhciIsIkFwb2xsb0xpbmsiLCJjcmVhdGVQZXJzaXN0ZWRRdWVyeUxpbmsiLCJjcmVhdGVIdHRwTGluayIsIm1lcmdlIiwiZ2VuZXJhbENvbmNhdFBhZ2luYXRpb24iLCJjdXJyZW50VGhlbWVWYXIiLCJjaGVja0JveExpc3RWYXIiLCJwYWdpbmF0aW9uRGF0YVZhciIsImxpbWl0Iiwib2Zmc2V0IiwiY3VycmVudFBhZ2UiLCJ0b3RhbEl0ZW1Db3VudCIsImxpbmsiLCJmcm9tIiwidXNlR0VURm9ySGFzaGVkUXVlcmllcyIsInVyaSIsIm9wdGlvbnMiLCJ0eXBlUG9saWNpZXMiLCJRdWVyeSIsImZpZWxkcyIsInNwZWFrZXJzQ29uY2F0Iiwic2Vzc2lvbnNDb25jYXQiLCJTcGVha2VyIiwiZnVsbE5hbWUiLCJyZWFkIiwiXyIsInJlYWRGaWVsZCIsImNoZWNrQm94Q29sdW1uIiwiaWQiLCJzZWxlY3RlZFNwZWFrZXJJZHMiLCJpbmNsdWRlcyIsImFwb2xsb0NsaWVudCIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJwYWdlUHJvcHMiLCJpc05vZGVTZXJ2ZXIiLCJwYXJzZUludCIsIl9hcG9sbG9DbGllbnQiLCJjYWNoZSIsInNzck1vZGUiLCJleGlzdGluZ0NhY2hlIiwiZXh0cmFjdCIsImRhdGEiLCJyZXN0b3JlIiwidXNlQXBvbGxvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./graphql/apolloClient.js\n");

/***/ }),

/***/ "./graphql/pagination.js":
/*!*******************************!*\
  !*** ./graphql/pagination.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generalConcatPagination: () => (/* binding */ generalConcatPagination)\n/* harmony export */ });\nfunction generalConcatPagination() {\n    return {\n        read: function(existing) {\n            return existing;\n        },\n        merge: function(existing, incoming) {\n            return !existing ? {\n                __typename: incoming.__typename,\n                datalist: [\n                    ...incoming.datalist\n                ],\n                pageInfo: {\n                    ...incoming.pageInfo\n                }\n            } : {\n                __typename: incoming.__typename,\n                datalist: [\n                    ...existing.datalist,\n                    ...incoming.datalist\n                ],\n                pageInfo: {\n                    ...incoming.pageInfo\n                }\n            };\n        },\n        keyArgs: false\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL3BhZ2luYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBO0lBQ1osT0FBTztRQUNMQyxNQUFNLFNBQVVDLFFBQVE7WUFDdEIsT0FBT0E7UUFDVDtRQUNBQyxPQUFPLFNBQVVELFFBQVEsRUFBRUUsUUFBUTtZQUNqQyxPQUFPLENBQUNGLFdBQ0o7Z0JBQ0VHLFlBQVlELFNBQVNDLFVBQVU7Z0JBQy9CQyxVQUFVO3VCQUFJRixTQUFTRSxRQUFRO2lCQUFDO2dCQUNoQ0MsVUFBVTtvQkFBRSxHQUFHSCxTQUFTRyxRQUFRO2dCQUFDO1lBQ25DLElBQ0E7Z0JBQ0VGLFlBQVlELFNBQVNDLFVBQVU7Z0JBQy9CQyxVQUFVO3VCQUFJSixTQUFTSSxRQUFRO3VCQUFLRixTQUFTRSxRQUFRO2lCQUFDO2dCQUN0REMsVUFBVTtvQkFBRSxHQUFHSCxTQUFTRyxRQUFRO2dCQUFDO1lBQ25DO1FBQ047UUFDQUMsU0FBUztJQUNYO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcG9sbG9jbGllbnRyZWFjdGFwcC8uL2dyYXBocWwvcGFnaW5hdGlvbi5qcz85OWIwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZW5lcmFsQ29uY2F0UGFnaW5hdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVhZDogZnVuY3Rpb24gKGV4aXN0aW5nKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZztcbiAgICAgIH0sXG4gICAgICBtZXJnZTogZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZykge1xuICAgICAgICByZXR1cm4gIWV4aXN0aW5nXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIF9fdHlwZW5hbWU6IGluY29taW5nLl9fdHlwZW5hbWUsXG4gICAgICAgICAgICAgIGRhdGFsaXN0OiBbLi4uaW5jb21pbmcuZGF0YWxpc3RdLFxuICAgICAgICAgICAgICBwYWdlSW5mbzogeyAuLi5pbmNvbWluZy5wYWdlSW5mbyB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgICBfX3R5cGVuYW1lOiBpbmNvbWluZy5fX3R5cGVuYW1lLFxuICAgICAgICAgICAgICBkYXRhbGlzdDogWy4uLmV4aXN0aW5nLmRhdGFsaXN0LCAuLi5pbmNvbWluZy5kYXRhbGlzdF0sXG4gICAgICAgICAgICAgIHBhZ2VJbmZvOiB7IC4uLmluY29taW5nLnBhZ2VJbmZvIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGtleUFyZ3M6IGZhbHNlLFxuICAgIH07XG4gIH0iXSwibmFtZXMiOlsiZ2VuZXJhbENvbmNhdFBhZ2luYXRpb24iLCJyZWFkIiwiZXhpc3RpbmciLCJtZXJnZSIsImluY29taW5nIiwiX190eXBlbmFtZSIsImRhdGFsaXN0IiwicGFnZUluZm8iLCJrZXlBcmdzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./graphql/pagination.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphql_apolloClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/apolloClient */ \"./graphql/apolloClient.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/logo */ \"./components/logo.js\");\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const apolloClient = (0,_graphql_apolloClient__WEBPACK_IMPORTED_MODULE_1__.useApollo)(pageProps.initialApolloState, pageProps);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: apolloClient,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/CARMAT/Desktop/ApolloClientReactApp/pages/_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/CARMAT/Desktop/ApolloClientReactApp/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/CARMAT/Desktop/ApolloClientReactApp/pages/_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ0o7QUFDVjtBQUV2QixTQUFTRyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELE1BQU1DLGVBQWVOLGdFQUFTQSxDQUFDSyxVQUFVRSxrQkFBa0IsRUFBRUY7SUFFN0QscUJBQ0UsOERBQUNKLDBEQUFjQTtRQUFDTyxRQUFRRjs7MEJBQ3BCLDhEQUFDSix3REFBSUE7Ozs7OzBCQUNQLDhEQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcG9sbG9jbGllbnRyZWFjdGFwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tICcuLi9ncmFwaHFsL2Fwb2xsb0NsaWVudCc7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvbG9nbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcy5pbml0aWFsQXBvbGxvU3RhdGUsIHBhZ2VQcm9wcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxuICAgICAgICA8TG9nbyAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZUFwb2xsbyIsIkFwb2xsb1Byb3ZpZGVyIiwiTG9nbyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFwb2xsb0NsaWVudCIsImluaXRpYWxBcG9sbG9TdGF0ZSIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("apollo-link");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "apollo-link-persisted-queries":
/*!************************************************!*\
  !*** external "apollo-link-persisted-queries" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("apollo-link-persisted-queries");

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();