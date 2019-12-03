/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/basicURL.js":
/*!*****************************!*\
  !*** ./src/api/basicURL.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const API_URL = 'https://reactjs-cdp.herokuapp.com';
/* harmony default export */ __webpack_exports__["default"] = (API_URL);

/***/ }),

/***/ "./src/api/getDetailedMovieURL.js":
/*!****************************************!*\
  !*** ./src/api/getDetailedMovieURL.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basicURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicURL */ "./src/api/basicURL.js");


const GET_DETAILED_URL = id => "".concat(_basicURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/movies/").concat(id);

/* harmony default export */ __webpack_exports__["default"] = (GET_DETAILED_URL);

/***/ }),

/***/ "./src/api/getURL.js":
/*!***************************!*\
  !*** ./src/api/getURL.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basicURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicURL */ "./src/api/basicURL.js");


const GET_URL = ({
  query,
  searchBy,
  sortBy,
  offset,
  limit
}) => {
  const SEARCH = query ? "&search=".concat(query) : '';
  const SEARCH_BY = searchBy ? "&searchBy=".concat(searchBy) : '';
  const SORT_BY = sortBy ? "&sortBy=".concat(sortBy) : ''; // 'release_date' or 'vote_average'

  const SORT_ORDER = 'desc'; // 'desc' descending or 'asc' ascending

  return "".concat(_basicURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/movies?sortOrder=").concat(SORT_ORDER, "&offset=").concat(offset, "&limit=").concat(limit).concat(SEARCH).concat(SEARCH_BY).concat(SORT_BY);
};

/* harmony default export */ __webpack_exports__["default"] = (GET_URL);

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: GET_URL, GET_DETAILED_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getURL */ "./src/api/getURL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_URL", function() { return _getURL__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _getDetailedMovieURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDetailedMovieURL */ "./src/api/getDetailedMovieURL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_DETAILED_URL", function() { return _getDetailedMovieURL__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js */ "core-js");
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header */ "./src/components/Header/index.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Search */ "./src/components/Search/index.js");
/* harmony import */ var _Sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sort */ "./src/components/Sort/index.js");
/* harmony import */ var _Movies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Movies */ "./src/components/Movies/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _MovieDetails__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MovieDetails */ "./src/components/MovieDetails/index.js");
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NotFound */ "./src/components/NotFound/index.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.scss */ "./src/components/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_13__);















const App = () => {
  const data = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(({
    moviesData
  }) => moviesData);
  const searchData = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(({
    searchData
  }) => searchData);
  const value = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(({
    inputValue
  }) => inputValue);
  const showSpiner = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(({
    showSpiner
  }) => showSpiner);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__["fetchData"])(searchData));
  }, []);

  const handleChangeSearchBy = tag => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__["changeSearchBy"])(tag));
  };

  const handleChangeSortBy = tag => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__["changeSortBy"])(tag));
  };

  const handleChangeValue = ({
    target: {
      value
    }
  }) => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__["setValue"])(value));
  };

  const handleSubmitQuery = e => {
    e.preventDefault();
    if (value) history.push("/search/".concat(value.trim()));
  };

  const handleSerachForQuery = value => {
    if (value) {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__["setValue"])(value.trim()));
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__["makeQuery"])(value.trim()));
    }
  };

  const handleLoadMore = () => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__["loadMore"])());
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "global_wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "content_wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    to: "/search"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/search"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Search__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: value,
    searchBy: searchData.searchBy,
    onClick: handleChangeSearchBy,
    onChange: handleChangeValue,
    onSubmit: handleSubmitQuery
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Sort__WEBPACK_IMPORTED_MODULE_8__["default"], {
    moviesFound: data.total,
    sortBy: searchData.sortBy,
    onClick: handleChangeSortBy
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, ["/search/:query", '/search'].map(route => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    key: route,
    path: route
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Movies__WEBPACK_IMPORTED_MODULE_9__["default"], {
    movies: data.data,
    handleLoadMore: handleLoadMore,
    showSpiner: showSpiner,
    handleSerachForQuery: handleSerachForQuery
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/film/:movieId"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MovieDetails__WEBPACK_IMPORTED_MODULE_11__["default"], {
    showSpiner: showSpiner
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: ""
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NotFound__WEBPACK_IMPORTED_MODULE_12__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/Footer/footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.scss */ "./src/components/Footer/footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_2__);




function Copyright() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    align: "center"
  }, 'Copyright © ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    color: "inherit",
    href: "#"
  }, "Developer"), " ".concat(new Date().getFullYear(), "."));
}

const Footer = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    position: "static",
    style: {
      padding: 0,
      margin: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "lg",
    style: {
      padding: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    className: "footer_container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copyright, null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/Header/header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.scss */ "./src/components/Header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_3__);





const Header = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    position: "static"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "lg",
    style: {
      padding: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    className: "header_toolbar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6"
  }, "Movie searcher"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Movie/index.js":
/*!***************************************!*\
  !*** ./src/components/Movie/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _movie_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie.scss */ "./src/components/Movie/movie.scss");
/* harmony import */ var _movie_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_movie_scss__WEBPACK_IMPORTED_MODULE_2__);




const Movie = ({
  movie: {
    title,
    tagline,
    poster_path
  }
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "movie_container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: "movie_media",
    image: poster_path || '#',
    title: title || 'Title of a movie'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    className: "card_content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, title || ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, tagline || ''))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary"
  }, "Share"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary"
  }, "Learn More")));
};

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ }),

/***/ "./src/components/Movie/movie.scss":
/*!*****************************************!*\
  !*** ./src/components/Movie/movie.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/MovieDetails/index.js":
/*!**********************************************!*\
  !*** ./src/components/MovieDetails/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions/index.js");
/* harmony import */ var _movieDetails_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movieDetails.scss */ "./src/components/MovieDetails/movieDetails.scss");
/* harmony import */ var _movieDetails_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_movieDetails_scss__WEBPACK_IMPORTED_MODULE_5__);







const MovieDetails = ({
  showSpiner
}) => {
  const movieData = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    movieData
  }) => movieData);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    movieId
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["fetchDetaledData"])(movieId));
  }, []);
  const {
    poster_path = '',
    title = '',
    release_date,
    overview
  } = movieData;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "movie-detail_container",
    maxWidth: "lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 3
  }, !movieData.id && !showSpiner ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6"
  }, "Nothing found") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, showSpiner && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    className: "spiner_container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    sm: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "image",
    src: poster_path || '',
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    sm: 8
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h5",
    gutterBottom: true
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "subtitle1",
    gutterBottom: true
  }, release_date && "Relese date: ".concat(release_date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2",
    gutterBottom: true
  }, overview)))));
};

/* harmony default export */ __webpack_exports__["default"] = (MovieDetails);

/***/ }),

/***/ "./src/components/MovieDetails/movieDetails.scss":
/*!*******************************************************!*\
  !*** ./src/components/MovieDetails/movieDetails.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Movies/index.js":
/*!****************************************!*\
  !*** ./src/components/Movies/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Movie */ "./src/components/Movie/index.js");
/* harmony import */ var _movies_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies.scss */ "./src/components/Movies/movies.scss");
/* harmony import */ var _movies_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_movies_scss__WEBPACK_IMPORTED_MODULE_4__);






const Movies = ({
  movies,
  handleLoadMore,
  showSpiner,
  handleSerachForQuery
}) => {
  const {
    query
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    handleSerachForQuery(query);
  }, [query]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "movies_container",
    maxWidth: "lg"
  }, !movies.length && !showSpiner ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6"
  }, "No movies found") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: "grid_container",
    container: true,
    spacing: 4
  }, movies.map(movie => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    key: movie.id,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/film/".concat(movie.id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Movie__WEBPACK_IMPORTED_MODULE_3__["default"], {
    movie: movie
  }))))), showSpiner && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spiner_container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "primary",
    className: "load-more_btn",
    onClick: handleLoadMore
  }, "Load more")));
};

/* harmony default export */ __webpack_exports__["default"] = (Movies);

/***/ }),

/***/ "./src/components/Movies/movies.scss":
/*!*******************************************!*\
  !*** ./src/components/Movies/movies.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/components/NotFound/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);




const NotFound = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  maxWidth: "lg"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
  variant: "h5"
}, "Error 404: Page not found"));

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/components/Search/index.js":
/*!****************************************!*\
  !*** ./src/components/Search/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.scss */ "./src/components/Search/search.scss");
/* harmony import */ var _search_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_search_scss__WEBPACK_IMPORTED_MODULE_2__);




const Search = ({
  value,
  searchBy,
  onClick: _onClick,
  onChange,
  onSubmit
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "serch_container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    noValidate: true,
    autoComplete: "off",
    className: "form_container",
    onSubmit: onSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Query...",
    margin: "normal",
    className: "input_box",
    value: value,
    onChange: onChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: "form_btn",
    onClick: onSubmit
  }, "Search")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter_container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: "filter_title",
    variant: "subtitle1"
  }, "Search by"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "filter_btn",
    variant: searchBy === 'title' ? 'contained' : 'outlined',
    color: "primary",
    onClick: () => _onClick('title')
  }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "filter_btn genre_btn",
    variant: searchBy === 'genres' ? 'contained' : 'outlined',
    color: "primary",
    onClick: () => _onClick('genres')
  }, "Genre")));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/components/Search/search.scss":
/*!*******************************************!*\
  !*** ./src/components/Search/search.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Sort/index.js":
/*!**************************************!*\
  !*** ./src/components/Sort/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sort_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort.scss */ "./src/components/Sort/sort.scss");
/* harmony import */ var _sort_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sort_scss__WEBPACK_IMPORTED_MODULE_2__);




const Sort = ({
  moviesFound,
  sortBy,
  onClick: _onClick
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "sort_container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: "results",
    variant: "body1",
    component: "h2"
  }, "".concat(moviesFound || 0, " movies found")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sort_controllers"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: "sort_title",
    variant: "subtitle1"
  }, "Sort by"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "sort_btn release_btn",
    variant: sortBy === 'release_date' ? 'contained' : 'outlined',
    color: "primary",
    onClick: () => _onClick('release_date')
  }, "Release date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "sort_btn",
    variant: sortBy === 'vote_average' ? 'contained' : 'outlined',
    color: "primary",
    onClick: () => _onClick('vote_average')
  }, "Rating")));
};

/* harmony default export */ __webpack_exports__["default"] = (Sort);

/***/ }),

/***/ "./src/components/Sort/sort.scss":
/*!***************************************!*\
  !*** ./src/components/Sort/sort.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/app.scss":
/*!*********************************!*\
  !*** ./src/components/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/redux/actions/index.js":
/*!************************************!*\
  !*** ./src/redux/actions/index.js ***!
  \************************************/
/*! exports provided: setValue, fetchData, fetchDetaledData, changeSearchBy, changeSortBy, makeQuery, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return setValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDetaledData", function() { return fetchDetaledData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSearchBy", function() { return changeSearchBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSortBy", function() { return changeSortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeQuery", function() { return makeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/redux/constants.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");



const addMoviesData = payload => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_MOVIES"],
  payload
});

const setSearchBy = payload => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_SEARCH_BY"],
  payload
});

const setSortBy = payload => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_SORT_BY"],
  payload
});

const setQuery = payload => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_QUERY"],
  payload
});

const riseLimit = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["RISE_LIMIT"]
});

const deleteValue = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["DELETE_VALUE"]
});

const spinerTurnOn = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SPINER_TURN_ON"]
});

const spinerTurnOff = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SPINER_TURN_OFF"]
});

const setValue = payload => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_VALUE"],
  payload
});

const addMovieData = payload => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_MOVIE_DATA"],
  payload
});

const setDefaultMovieData = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_DEFAULT_MOVIE_DATA"]
});

const fetchData = subreddit => (dispatch, getState) => {
  const {
    searchData
  } = getState();
  dispatch(spinerTurnOn());
  fetch(Object(_api__WEBPACK_IMPORTED_MODULE_1__["GET_URL"])(searchData)).then(res => res.json()).then(data => {
    dispatch(addMoviesData(data));
    dispatch(spinerTurnOff());
  }).catch(err => {
    dispatch(spinerTurnOff());
    console.log('Failed to get data:', err.message);
  });
};
const fetchDetaledData = subreddit => dispatch => {
  dispatch(setDefaultMovieData());
  dispatch(spinerTurnOn());
  fetch(Object(_api__WEBPACK_IMPORTED_MODULE_1__["GET_DETAILED_URL"])(subreddit)).then(res => res.json()).then(data => {
    dispatch(addMovieData(data));
    dispatch(spinerTurnOff());
  }).catch(err => {
    dispatch(spinerTurnOff());
    console.log('Failed to get detaild movie data:', err.message);
  });
};
const changeSearchBy = subreddit => dispatch => {
  dispatch(setSearchBy(subreddit));
  dispatch(fetchData());
};
const changeSortBy = subreddit => dispatch => {
  dispatch(setSortBy(subreddit));
  dispatch(fetchData());
};
const makeQuery = subreddit => dispatch => {
  dispatch(setQuery(subreddit));
  dispatch(fetchData());
  dispatch(deleteValue());
};
const loadMore = subreddit => dispatch => {
  dispatch(riseLimit());
  dispatch(fetchData());
};

/***/ }),

/***/ "./src/redux/constants.js":
/*!********************************!*\
  !*** ./src/redux/constants.js ***!
  \********************************/
/*! exports provided: ADD_MOVIES, ADD_MOVIE_DATA, SET_DEFAULT_MOVIE_DATA, SET_SEARCH_BY, SET_SORT_BY, SET_QUERY, RISE_LIMIT, SET_DEFAULT_LIMIT, SET_VALUE, DELETE_VALUE, SPINER_TURN_ON, SPINER_TURN_OFF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIES", function() { return ADD_MOVIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE_DATA", function() { return ADD_MOVIE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DEFAULT_MOVIE_DATA", function() { return SET_DEFAULT_MOVIE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH_BY", function() { return SET_SEARCH_BY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SORT_BY", function() { return SET_SORT_BY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_QUERY", function() { return SET_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RISE_LIMIT", function() { return RISE_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DEFAULT_LIMIT", function() { return SET_DEFAULT_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_VALUE", function() { return SET_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_VALUE", function() { return DELETE_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINER_TURN_ON", function() { return SPINER_TURN_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINER_TURN_OFF", function() { return SPINER_TURN_OFF; });
const ADD_MOVIES = 'ADD_MOVIES';
const ADD_MOVIE_DATA = 'ADD_MOVIE_DATA';
const SET_DEFAULT_MOVIE_DATA = 'SET_DEFAULT_MOVIE_DATA';
const SET_SEARCH_BY = 'SET_SEARCH_BY';
const SET_SORT_BY = 'SET_SORT_BY';
const SET_QUERY = 'SET_QUERY';
const RISE_LIMIT = 'RISE_LIMIT';
const SET_DEFAULT_LIMIT = 'SET_DEFAULT_LIMIT';
const SET_VALUE = 'SET_VALUE';
const DELETE_VALUE = 'DELETE_VALUE';
const SPINER_TURN_ON = 'SPINER_TURN_ON';
const SPINER_TURN_OFF = 'SPINER_TURN_OFF';

/***/ }),

/***/ "./src/redux/reducers/index.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _moviesData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moviesData */ "./src/redux/reducers/moviesData.js");
/* harmony import */ var _searchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchData */ "./src/redux/reducers/searchData.js");
/* harmony import */ var _inputValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputValue */ "./src/redux/reducers/inputValue.js");
/* harmony import */ var _showSpiner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showSpiner */ "./src/redux/reducers/showSpiner.js");
/* harmony import */ var _movieData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movieData */ "./src/redux/reducers/movieData.js");






/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  moviesData: _moviesData__WEBPACK_IMPORTED_MODULE_1__["default"],
  searchData: _searchData__WEBPACK_IMPORTED_MODULE_2__["default"],
  inputValue: _inputValue__WEBPACK_IMPORTED_MODULE_3__["default"],
  showSpiner: _showSpiner__WEBPACK_IMPORTED_MODULE_4__["default"],
  movieData: _movieData__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./src/redux/reducers/inputValue.js":
/*!******************************************!*\
  !*** ./src/redux/reducers/inputValue.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/redux/constants.js");


const inputValue = (state = '', {
  type,
  payload
}) => {
  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["SET_VALUE"]:
      return payload;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["DELETE_VALUE"]:
      return '';

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (inputValue);

/***/ }),

/***/ "./src/redux/reducers/movieData.js":
/*!*****************************************!*\
  !*** ./src/redux/reducers/movieData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/redux/constants.js");


const movieData = (state = {}, {
  type,
  payload
}) => {
  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_MOVIE_DATA"]:
      return payload;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["SET_DEFAULT_MOVIE_DATA"]:
      return {};

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (movieData);

/***/ }),

/***/ "./src/redux/reducers/moviesData.js":
/*!******************************************!*\
  !*** ./src/redux/reducers/moviesData.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/redux/constants.js");


const moviesData = (state = {
  data: []
}, {
  type,
  payload
}) => {
  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_MOVIES"]:
      return payload;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (moviesData);

/***/ }),

/***/ "./src/redux/reducers/searchData.js":
/*!******************************************!*\
  !*** ./src/redux/reducers/searchData.js ***!
  \******************************************/
/*! exports provided: preloadedState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preloadedState", function() { return preloadedState; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/redux/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const preloadedState = {
  query: '',
  searchBy: 'title',
  sortBy: 'release_date',
  offset: 0,
  limit: 8
};

const searchData = (state = preloadedState, {
  type,
  payload
}) => {
  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["SET_SEARCH_BY"]:
      return _objectSpread({}, state, {
        searchBy: payload
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__["SET_SORT_BY"]:
      return _objectSpread({}, state, {
        sortBy: payload
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__["SET_QUERY"]:
      return _objectSpread({}, state, {
        query: payload,
        limit: preloadedState.limit
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__["RISE_LIMIT"]:
      return _objectSpread({}, state, {
        limit: state.limit + preloadedState.limit
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (searchData);

/***/ }),

/***/ "./src/redux/reducers/showSpiner.js":
/*!******************************************!*\
  !*** ./src/redux/reducers/showSpiner.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/redux/constants.js");


const showSpiner = (state = true, {
  type
}) => {
  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["SPINER_TURN_ON"]:
      return true;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["SPINER_TURN_OFF"]:
      return false;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (showSpiner);

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/redux/reducers/index.js");




function configureStore(preloadedState) {
  const middlewareEnhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a);
  const composedEnhancers = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(middlewareEnhancer);
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, composedEnhancers);
  return store;
}

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reload */ "reload");
/* harmony import */ var reload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.js");










const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const port = 4000;
const dev = "development" === 'development';
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));

if (dev) {
  reload__WEBPACK_IMPORTED_MODULE_7___default()(app).then(reloadReturned => {
    server.listen(app.get('port'), function () {
      console.log("Web server listening on port ".concat(app.get('port')));
    });
  }).catch(err => {
    console.error('Reload could not start, could not start server/sample app', err);
  });
}

app.use((req, res) => {
  const context = {};
  const sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["ServerStyleSheets"]();
  const html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(sheets.collect(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jss__WEBPACK_IMPORTED_MODULE_3__["JssProvider"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: Object(_redux_store__WEBPACK_IMPORTED_MODULE_9__["default"])()
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], {
    location: req.url,
    context: context
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_8__["default"], null))))));
  const cssString = sheets.toString();
  res.send("\n    <!DOCTYPE html>\n    <html lang='en'>\n    <head>\n      <meta charset='UTF-8'>\n      <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n      <meta http-equiv='X-UA-Compatible' content='ie=edge'>\n      <title>Movie searcher</title>\n      <link rel='shortcut icon' type='image/png' href='https://cdn.auth0.com/blog/react-js/react.png'/>\n      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />\n      <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />\n      <link rel='stylesheet' href='/styles/main.css' />\n      <style id=\"ssr-material-ui-styles\">".concat(cssString, "</style>\n    </head>\n    <body>\n      <div id='root'>").concat(html, "</div>\n      <script type='text/javascript' src='bundle.js' async></script>\n      ").concat(dev ? '<script src="/reload/reload.js" async></script>' : '', "\n    </body>\n    </html>\n  "));
});
app.listen(port, () => console.log("Web server listening on port http://localhost:".concat(port)));

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "core-js":
/*!**************************!*\
  !*** external "core-js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-jss":
/*!****************************!*\
  !*** external "react-jss" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-jss");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "reload":
/*!*************************!*\
  !*** external "reload" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reload");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map