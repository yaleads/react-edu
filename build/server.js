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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./initializers/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./initializers/server/index.js":
/*!**************************************!*\
  !*** ./initializers/server/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./initializers/server/render.js");




var manifest = __webpack_require__(/*! ../../public/manifest.json */ "./public/manifest.json");

var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var PORT = process.env.PORT || 3001;
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a["static"](path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(process.cwd(), 'public')));
app.set('views', path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(process.cwd(), 'public'));
app.set('view engine', 'ejs');
app.get('*', function (req, res) {
  Object(_render__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res).then(function (result) {
    res.status(200);
    res.render('index', {
      content: result.content,
      manifest: manifest,
      initialState: JSON.stringify(result.initialState)
    });
  });
});
app.listen(PORT, function () {
  return console.log("Server is running on ".concat(PORT, " port."));
});

/***/ }),

/***/ "./initializers/server/render.js":
/*!***************************************!*\
  !*** ./initializers/server/render.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! App */ "./src/App.js");
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! routes */ "./src/routes/index.js");
/* harmony import */ var helpers_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/store */ "./src/helpers/store.js");
/* harmony import */ var helpers_historyCallBack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helpers/historyCallBack */ "./src/helpers/historyCallBack.js");






/* harmony default export */ __webpack_exports__["default"] = (function (req, res) {
  var store = Object(helpers_store__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return Object(helpers_historyCallBack__WEBPACK_IMPORTED_MODULE_5__["default"])(store, routes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pathname: req.url,
    query: req.query
  }).then(function () {
    var context = {};
    return {
      content: Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App__WEBPACK_IMPORTED_MODULE_2__["default"], {
        store: store,
        location: req.url,
        context: context
      })),
      initialState: store.getState()
    };
  });
});

/***/ }),

/***/ "./public/manifest.json":
/*!******************************!*\
  !*** ./public/manifest.json ***!
  \******************************/
/*! exports provided: main.css, main.js, main.css.map, main.js.map, ./index.html, default */
/***/ (function(module) {

module.exports = {"main.css":"/assets/main.a8d95571880bd05a4df5.css","main.js":"/assets/main.a8d95571880bd05a4df5.js","main.css.map":"/assets/main.a8d95571880bd05a4df5.css.map","main.js.map":"/assets/main.a8d95571880bd05a4df5.js.map","./index.html":"/./index.html"};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/routes */ "./src/helpers/routes.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Header */ "./src/components/Header/index.js");
/* harmony import */ var components_Gallery_FullScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Gallery/FullScreen */ "./src/components/Gallery/FullScreen.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ "./src/routes/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* globals __CLIENT__, __SERVER__*/








var RouteWithSubroutes = function RouteWithSubroutes(route, key) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({
    key: key
  }, route));
};

var AppRouter = function AppRouter(_ref) {
  var history = _ref.history,
      children = _ref.children,
      location = _ref.location,
      context = _ref.context;
  if (false) {}
  if (true) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["StaticRouter"], {
    location: location,
    context: context
  }, children);
};

var App = function App(_ref2) {
  var history = _ref2.history,
      store = _ref2.store,
      location = _ref2.location,
      context = _ref2.context;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppRouter, {
    history: history,
    location: location,
    context: context
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (route, key) {
    return RouteWithSubroutes(route, key);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: Object(helpers_routes__WEBPACK_IMPORTED_MODULE_2__["productImagePath"])(),
    component: components_Gallery_FullScreen__WEBPACK_IMPORTED_MODULE_5__["default"]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/actions/Cart.js":
/*!*****************************!*\
  !*** ./src/actions/Cart.js ***!
  \*****************************/
/*! exports provided: addProductToCart, loadCart, resetCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductToCart", function() { return addProductToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCart", function() { return loadCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCart", function() { return resetCart; });
/* harmony import */ var _constants_actionTypes_Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes/Cart */ "./src/constants/actionTypes/Cart.js");

var addProductToCart = function addProductToCart(product, count) {
  return {
    type: _constants_actionTypes_Cart__WEBPACK_IMPORTED_MODULE_0__["ADD_PRODUCT_TO_CART"],
    product: product,
    count: count
  };
};
var loadCart = function loadCart() {
  return {
    type: _constants_actionTypes_Cart__WEBPACK_IMPORTED_MODULE_0__["LOAD_CART"]
  };
};
var resetCart = function resetCart() {
  return {
    type: _constants_actionTypes_Cart__WEBPACK_IMPORTED_MODULE_0__["RESET_CART"]
  };
};

/***/ }),

/***/ "./src/actions/Product.js":
/*!********************************!*\
  !*** ./src/actions/Product.js ***!
  \********************************/
/*! exports provided: fetchProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProduct", function() { return fetchProduct; });
/* harmony import */ var _constants_actionTypes_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes/Product */ "./src/constants/actionTypes/Product.js");
/* harmony import */ var middleware_API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! middleware/API */ "./src/middleware/API.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function fetchProduct(id) {
  return _defineProperty({}, middleware_API__WEBPACK_IMPORTED_MODULE_1__["API_CALL"], {
    method: 'GET',
    query: {
      'content_type': 'product',
      'fields.id': id
    },
    types: [_constants_actionTypes_Product__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCT_REQUEST"], _constants_actionTypes_Product__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCT_SUCCESS"], _constants_actionTypes_Product__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCT_ERROR"]]
  });
}

/***/ }),

/***/ "./src/actions/Products.js":
/*!*********************************!*\
  !*** ./src/actions/Products.js ***!
  \*********************************/
/*! exports provided: fetchProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony import */ var _constants_actionTypes_Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes/Products */ "./src/constants/actionTypes/Products.js");
/* harmony import */ var middleware_API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! middleware/API */ "./src/middleware/API.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function fetchProducts() {
  return _defineProperty({}, middleware_API__WEBPACK_IMPORTED_MODULE_1__["API_CALL"], {
    method: 'GET',
    query: {
      'content_type': 'product'
    },
    types: [_constants_actionTypes_Products__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS_REQUEST"], _constants_actionTypes_Products__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS_SUCCESS"], _constants_actionTypes_Products__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS_ERROR"]]
  });
}

/***/ }),

/***/ "./src/components/CartPage/CartForm.js":
/*!*********************************************!*\
  !*** ./src/components/CartPage/CartForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Forms_FormikTextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Forms/FormikTextInput */ "./src/components/Forms/FormikTextInput.js");
/* harmony import */ var components_Forms_FormikCheckbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Forms/FormikCheckbox */ "./src/components/Forms/FormikCheckbox.js");







var CartForm = function CartForm(_ref) {
  var values = _ref.values,
      errors = _ref.errors,
      touched = _ref.touched,
      isSubmitting = _ref.isSubmitting;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, touched && errors.cart && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "danger"
  }, errors.cart), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_FormikTextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "fullName",
    label: "Full Name",
    invalid: errors.fullName && touched.fullName,
    errorText: errors.fullName,
    size: "4"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_FormikTextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "email",
    label: "Email",
    invalid: errors.email && touched.email,
    errorText: errors.email,
    size: "4",
    type: "email"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_FormikTextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "phone",
    label: "Phone",
    invalid: errors.phone && touched.phone,
    errorText: errors.phone,
    size: "4"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_FormikTextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "address",
    label: "Address",
    invalid: errors.address && touched.address,
    errorText: errors.address,
    size: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_FormikCheckbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "newsletter",
    label: "Subscribe to our newsletter",
    checked: values.newsletter
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    disabled: isSubmitting
  }, "Submit"));
};

CartForm.propTypes = {
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  touched: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  isSubmitting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (CartForm);

/***/ }),

/***/ "./src/components/CartPage/CartFormContainer.js":
/*!******************************************************!*\
  !*** ./src/components/CartPage/CartFormContainer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CartForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartForm */ "./src/components/CartPage/CartForm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions/Cart */ "./src/actions/Cart.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);






var CartFormContainer = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  mapPropsToValues: function mapPropsToValues(_ref) {
    var cart = _ref.cart;
    return {
      cart: cart,
      fullName: '',
      phone: '',
      email: '',
      address: '',
      newsletter: false
    };
  },
  handleSubmit: function handleSubmit(values, _ref2) {
    var props = _ref2.props,
        resetForm = _ref2.resetForm,
        setErrors = _ref2.setErrors,
        setSubmitting = _ref2.setSubmitting;
    setTimeout(function () {
      if (values.email === 'test@test.com') setErrors({
        email: 'This email is blocked'
      });else {
        alert(JSON.stringify(values));
        props.resetCart();
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  },
  validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
    cart: yup__WEBPACK_IMPORTED_MODULE_3__["array"]().min(1, 'Your Cart is Empty'),
    fullName: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(3, 'Full Name should be at least 3 characters').required('Full Name field can\'t be empty'),
    phone: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(10, 'Phone should be at least 10 characters').required('Phone field can\'t be empty'),
    email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().email('Wrong email format').required('Email field can\'t be empty'),
    address: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Address field can\'t be empty')
  })
})(_CartForm__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(null, {
  resetCart: actions_Cart__WEBPACK_IMPORTED_MODULE_4__["resetCart"]
})(CartFormContainer));

/***/ }),

/***/ "./src/components/CartPage/CartItems.js":
/*!**********************************************!*\
  !*** ./src/components/CartPage/CartItems.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var CartItems = function CartItems(_ref) {
  var cart = _ref.cart;

  if (cart.length > 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Details:", cart.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: item.product.id
      }, counterPrefix(item.count), item.product.title);
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "No products in the Cart");
  }
};

var counterPrefix = function counterPrefix(count) {
  return count > 1 ? "".concat(count, " x ") : '';
};

/* harmony default export */ __webpack_exports__["default"] = (CartItems);

/***/ }),

/***/ "./src/components/CartPage/index.js":
/*!******************************************!*\
  !*** ./src/components/CartPage/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CartItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartItems */ "./src/components/CartPage/CartItems.js");
/* harmony import */ var _CartFormContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CartFormContainer */ "./src/components/CartPage/CartFormContainer.js");






var CartPage = function CartPage(_ref) {
  var cart = _ref.cart;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: 'mt-3'
  }, "Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartItems__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cart: cart
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartFormContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cart: cart
  }));
};

CartPage.propTypes = {
  cart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.cart.items
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(CartPage));

/***/ }),

/***/ "./src/components/Contacts/ContactUsForm.js":
/*!**************************************************!*\
  !*** ./src/components/Contacts/ContactUsForm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/object */ "lodash/object");
/* harmony import */ var lodash_object__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_object__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Forms_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Forms/TextInput */ "./src/components/Forms/TextInput.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ContactUsForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContactUsForm, _React$Component);

  function ContactUsForm(props) {
    var _this;

    _classCallCheck(this, ContactUsForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContactUsForm).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (e) {
      e.preventDefault();
      alert(JSON.stringify(_this.state.form.values));
    });

    _defineProperty(_assertThisInitialized(_this), "clearError", function (field) {
      _this.setState(Object(lodash_object__WEBPACK_IMPORTED_MODULE_2__["set"])(Object(lodash_object__WEBPACK_IMPORTED_MODULE_2__["assign"])({}, _this.state), ['form', 'errors', field], ''));
    });

    _defineProperty(_assertThisInitialized(_this), "validateLength", function (field, value, counter, errorText) {
      if (value.length < counter) _this.setState(Object(lodash_object__WEBPACK_IMPORTED_MODULE_2__["set"])(Object(lodash_object__WEBPACK_IMPORTED_MODULE_2__["assign"])({}, _this.state), ['form', 'errors', field], errorText));
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (field) {
      return function (e) {
        var value = e.target.value;

        switch (field) {
          case 'name':
            _this.clearError('name');

            _this.validateLength('name', value, 3, 'Name is too short');

            break;

          case 'email':
            _this.clearError('email');

            _this.validateLength('email', value, 3, 'Email is too short');

            break;
        }

        _this.setState(Object(lodash_object__WEBPACK_IMPORTED_MODULE_2__["set"])(Object(lodash_object__WEBPACK_IMPORTED_MODULE_2__["assign"])({}, _this.state), ['form', 'values', field], value));
      };
    });

    _this.state = {
      form: {
        values: {
          name: '',
          email: '',
          comment: ''
        },
        errors: {}
      }
    };
    return _this;
  }

  _createClass(ContactUsForm, [{
    key: "render",
    value: function render() {
      var _this$state$form$valu = this.state.form.values,
          name = _this$state$form$valu.name,
          email = _this$state$form$valu.email,
          comment = _this$state$form$valu.comment;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        onSubmit: this.onSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        row: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 5
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "name",
        label: "Name",
        placeholder: "Enter your name",
        value: name,
        error: this.state.form.errors.name,
        onChange: this.handleChange('name')
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        row: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 5
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "email",
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        value: email,
        error: this.state.form.errors.email,
        onChange: this.handleChange('email')
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "textarea",
        rows: 4,
        name: "comment",
        label: "Comment",
        placeholder: "Enter your comment",
        value: comment,
        error: this.state.form.errors.comment,
        onChange: this.handleChange('comment')
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Submit"));
    }
  }]);

  return ContactUsForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ContactUsForm);

/***/ }),

/***/ "./src/components/Contacts/index.js":
/*!******************************************!*\
  !*** ./src/components/Contacts/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactUsForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactUsForm */ "./src/components/Contacts/ContactUsForm.js");



var Contacts = function Contacts() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: 'mt-3'
  }, "Contact us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactUsForm__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Contacts);

/***/ }),

/***/ "./src/components/Forms/FormikCheckbox.js":
/*!************************************************!*\
  !*** ./src/components/Forms/FormikCheckbox.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);





var FormikCheckbox = function FormikCheckbox(_ref) {
  var name = _ref.name,
      label = _ref.label,
      checked = _ref.checked;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    check: true,
    row: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    check: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
    type: "checkbox",
    name: name,
    checked: checked
  }), ' ', label));
};

FormikCheckbox.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FormikCheckbox);

/***/ }),

/***/ "./src/components/Forms/FormikTextInput.js":
/*!*************************************************!*\
  !*** ./src/components/Forms/FormikTextInput.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);





var FormikTextInput = function FormikTextInput(_ref) {
  var type = _ref.type,
      name = _ref.name,
      label = _ref.label,
      invalid = _ref.invalid,
      errorText = _ref.errorText,
      size = _ref.size;
  if (size) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    row: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: size
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": name
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: type || 'text',
    name: name,
    tag: formik__WEBPACK_IMPORTED_MODULE_3__["Field"],
    invalid: invalid
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormFeedback"], null, errorText)));else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": name
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: type || 'text',
    name: name,
    tag: formik__WEBPACK_IMPORTED_MODULE_3__["Field"],
    invalid: invalid
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormFeedback"], null, errorText));
};

FormikTextInput.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  invalid: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  errorText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (FormikTextInput);

/***/ }),

/***/ "./src/components/Forms/TextInput.js":
/*!*******************************************!*\
  !*** ./src/components/Forms/TextInput.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var TextInput = function TextInput(_ref) {
  var type = _ref.type,
      name = _ref.name,
      label = _ref.label,
      placeholder = _ref.placeholder,
      value = _ref.value,
      rows = _ref.rows,
      error = _ref.error,
      onChange = _ref.onChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": name
  }, label || name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: type || 'text',
    name: name,
    id: name,
    placeholder: placeholder,
    value: value,
    rows: rows,
    onChange: onChange,
    invalid: !!error
  }), !!error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormFeedback"], null, error));
};

TextInput.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  rows: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./src/components/Gallery/FullScreen.js":
/*!**********************************************!*\
  !*** ./src/components/Gallery/FullScreen.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Image */ "./src/components/shared/Image.js");





var FullScreen = function FullScreen(_ref) {
  var state = _ref.location.state,
      history = _ref.history;

  if (state) {
    var image = state.image;

    var goBack = function goBack(e) {
      e.stopPropagation();
      history.goBack();
    };

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      isOpen: true,
      toggle: goBack,
      className: 'modal-lg'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
      src: image.url,
      width: '100%',
      alt: image.title
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, image.title)))), document.getElementById('fullScreenGalleryContainer')));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (FullScreen);

/***/ }),

/***/ "./src/components/Gallery/GoToFullScreenButton.js":
/*!********************************************************!*\
  !*** ./src/components/Gallery/GoToFullScreenButton.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/routes */ "./src/helpers/routes.js");




var GoToFullScreenButton = function GoToFullScreenButton(_ref) {
  var productId = _ref.productId,
      currentImageIndex = _ref.currentImageIndex,
      currentImage = _ref.currentImage;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: 'btn btn-primary mb-2',
    to: {
      pathname: Object(helpers_routes__WEBPACK_IMPORTED_MODULE_2__["productImagePath"])(productId, currentImageIndex),
      state: {
        modal: true,
        image: currentImage
      }
    }
  }, "Show full screen");
};

/* harmony default export */ __webpack_exports__["default"] = (GoToFullScreenButton);

/***/ }),

/***/ "./src/components/Gallery/SwipeAbleImage.js":
/*!**************************************************!*\
  !*** ./src/components/Gallery/SwipeAbleImage.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var SwipeAbleImage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SwipeAbleImage, _React$Component);

  function SwipeAbleImage(props) {
    var _this;

    _classCallCheck(this, SwipeAbleImage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SwipeAbleImage).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (e) {
      _this.setState({
        touchStartX: e.touches[0].clientX
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchMove", function (e) {
      _this.setState({
        touchMoveX: e.touches[0].clientX
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function () {
      if (_this.state.touchMoveX > _this.state.touchStartX) {
        _this.props.onSwipe('right');
      }

      if (_this.state.touchMoveX < _this.state.touchStartX) {
        _this.props.onSwipe('left');
      }
    });

    _this.state = {
      touchStartX: undefined,
      touchMoveX: undefined
    };
    return _this;
  }

  _createClass(SwipeAbleImage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentImage = _this$props.currentImage,
          width = _this$props.width,
          height = _this$props.height,
          className = _this$props.className;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: currentImage.url,
        width: width,
        height: height,
        alt: currentImage.title,
        className: className,
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd
      });
    }
  }]);

  return SwipeAbleImage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SwipeAbleImage);

/***/ }),

/***/ "./src/components/Gallery/index.js":
/*!*****************************************!*\
  !*** ./src/components/Gallery/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Image */ "./src/components/shared/Image.js");
/* harmony import */ var _GoToFullScreenButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoToFullScreenButton */ "./src/components/Gallery/GoToFullScreenButton.js");
/* harmony import */ var _SwipeAbleImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwipeAbleImage */ "./src/components/Gallery/SwipeAbleImage.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Gallery =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Gallery, _React$Component);

  function Gallery(props) {
    var _this;

    _classCallCheck(this, Gallery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gallery).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "prevImage", function () {
      _this.setState(function (prevState) {
        return {
          currentImageIndex: (prevState.currentImageIndex - 1 + _this.props.images.length) % _this.props.images.length
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "nextImage", function () {
      _this.setState(function (prevState) {
        return {
          currentImageIndex: (prevState.currentImageIndex + 1) % _this.props.images.length
        };
      });
    });

    _this.state = {
      currentImageIndex: 0
    };
    return _this;
  }

  _createClass(Gallery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var images = this.props.images;

      if (images) {
        var productId = this.props.productId;
        var currentImage = this.props.images[this.state.currentImageIndex];
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: 'mb-5'
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "mt-5"
        }, "Product Galery:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: this.prevImage
        }, "<"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SwipeAbleImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
          currentImage: currentImage,
          width: 600,
          height: 400,
          className: 'mb-2',
          onSwipe: function onSwipe(direction) {
            return direction === 'right' ? _this2.prevImage() : _this2.nextImage();
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: this.nextImage
        }, ">"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GoToFullScreenButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          productId: productId,
          currentImageIndex: this.state.currentImageIndex,
          currentImage: currentImage
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), images.map(function (image, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
            key: index,
            src: image.url,
            width: 120,
            height: 80,
            alt: image.title,
            onClickEvent: function onClickEvent() {
              return _this2.setState({
                currentImageIndex: index
              });
            }
          });
        }));
      } else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "mt-5"
      }, "No images in Gallery");
    }
  }]);

  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./src/components/Header/CartButton.js":
/*!*********************************************!*\
  !*** ./src/components/Header/CartButton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/routes */ "./src/helpers/routes.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pluralize */ "pluralize");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! actions/Cart */ "./src/actions/Cart.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var CartButton =
/*#__PURE__*/
function (_Component) {
  _inherits(CartButton, _Component);

  function CartButton() {
    _classCallCheck(this, CartButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(CartButton).apply(this, arguments));
  }

  _createClass(CartButton, [{
    key: "catchDrop",
    value: function catchDrop(e) {
      var draggableProduct = JSON.parse(e.dataTransfer.getData('productDraggableObject'));
      var draggableCount = parseInt(e.dataTransfer.getData('productDraggableCount')); // проверяем, что перетаскивается именно Товар

      draggableProduct && draggableCount && this.props.addProductToCart(draggableProduct, draggableCount);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onDrop: function onDrop(e) {
          return _this.catchDrop(e);
        },
        onDragOver: function onDragOver(e) {
          return e.preventDefault();
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        to: Object(helpers_routes__WEBPACK_IMPORTED_MODULE_3__["cartPath"])(),
        className: "btn btn-outline-success my-2 my-sm-0"
      }, "Cart: ", pluralize__WEBPACK_IMPORTED_MODULE_4___default()('item', this.props.cartItemsCounter, true)));
    }
  }]);

  return CartButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

CartButton.propTypes = {
  addProductToCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  cartItemsCounter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  var cartItemsCounter = state.cart.items.reduce(function (partialSum, i) {
    return partialSum + i.count;
  }, 0);
  return {
    cartItemsCounter: cartItemsCounter
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  addProductToCart: actions_Cart__WEBPACK_IMPORTED_MODULE_6__["addProductToCart"]
})(CartButton));

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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/routes */ "./src/helpers/routes.js");
/* harmony import */ var _CartButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CartButton */ "./src/components/Header/CartButton.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
        color: "light",
        light: true,
        expand: "md"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
        href: Object(helpers_routes__WEBPACK_IMPORTED_MODULE_3__["productsPath"])()
      }, "React App"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
        onClick: this.toggle
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
        navbar: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        tag: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"],
        exact: true,
        to: Object(helpers_routes__WEBPACK_IMPORTED_MODULE_3__["productsPath"])(),
        activeClassName: "active"
      }, "Catalog")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        tag: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"],
        to: Object(helpers_routes__WEBPACK_IMPORTED_MODULE_3__["contactsPath"])(),
        activeClassName: "active"
      }, "Contacts")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        tag: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"],
        to: Object(helpers_routes__WEBPACK_IMPORTED_MODULE_3__["cartPath"])(),
        activeClassName: "active"
      }, "Cart")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartButton__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

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


var NotFound = function NotFound() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: 'mt-3'
  }, "404"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Can't find such page"));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/components/ProductCard/AddToCart.js":
/*!*************************************************!*\
  !*** ./src/components/ProductCard/AddToCart.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions/Cart */ "./src/actions/Cart.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var AddToCart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddToCart, _React$Component);

  function AddToCart(props) {
    var _this;

    _classCallCheck(this, AddToCart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddToCart).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "addCount", function () {
      _this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeCount", function () {
      _this.setState(function (prevState) {
        return {
          count: prevState.count === 1 ? 1 : prevState.count - 1
        };
      });
    });

    _this.state = {
      count: 1
    };
    return _this;
  }

  _createClass(AddToCart, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          product = _this$props.product,
          addProductToCart = _this$props.addProductToCart;
      var count = this.state.count;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.removeCount
      }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "add_product_".concat(product.id, "_to_cart_counter"),
        value: count,
        readOnly: true,
        style: {
          width: '40px',
          textAlign: 'center'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.addCount
      }, "+"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return addProductToCart(product, count);
        }
      }, "Add to Cart")));
    }
  }]);

  return AddToCart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AddToCart.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, {
  addProductToCart: actions_Cart__WEBPACK_IMPORTED_MODULE_3__["addProductToCart"]
})(AddToCart));

/***/ }),

/***/ "./src/components/ProductCard/index.js":
/*!*********************************************!*\
  !*** ./src/components/ProductCard/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_shared_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/shared/Image */ "./src/components/shared/Image.js");
/* harmony import */ var components_shared_TextBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/shared/TextBox */ "./src/components/shared/TextBox.js");
/* harmony import */ var components_shared_Price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/shared/Price */ "./src/components/shared/Price.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddToCart */ "./src/components/ProductCard/AddToCart.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var helpers_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helpers/routes */ "./src/helpers/routes.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var ProductCard =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductCard, _Component);

  function ProductCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProductCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProductCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (e, product) {
      e.dataTransfer.setData('productDraggableObject', JSON.stringify(product));
      e.dataTransfer.setData('productDraggableCount', document.getElementById("add_product_".concat(product.id, "_to_cart_counter")).value);
    });

    return _this;
  }

  _createClass(ProductCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$product = this.props.product,
          id = _this$props$product.id,
          title = _this$props$product.title,
          price = _this$props$product.price,
          imageUrl = _this$props$product.imageUrl;
      var product = this.props.product;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: id,
        id: id,
        draggable: true,
        onDragStart: function onDragStart(e) {
          return _this2.onDragStart(e, product);
        },
        className: "row mb-3 mt-3 border pt-3 pb-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_shared_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
        src: imageUrl,
        width: "180",
        height: "250",
        alt: title
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
        to: Object(helpers_routes__WEBPACK_IMPORTED_MODULE_6__["productPath"])(id)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_shared_TextBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: title
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_shared_Price__WEBPACK_IMPORTED_MODULE_3__["default"], {
        price: price
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddToCart__WEBPACK_IMPORTED_MODULE_4__["default"], {
        product: product
      })));
    }
  }]);

  return ProductCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ }),

/***/ "./src/components/ProductPage/ProductPageView.js":
/*!*******************************************************!*\
  !*** ./src/components/ProductPage/ProductPageView.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ProductCard */ "./src/components/ProductCard/index.js");
/* harmony import */ var components_Gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Gallery */ "./src/components/Gallery/index.js");




var ProductPageView = function ProductPageView(_ref) {
  var isLoading = _ref.isLoading,
      product = _ref.product;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: 'mt-3'
  }, "Product Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading product Info...") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ProductCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    product: product
  }), !isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Gallery__WEBPACK_IMPORTED_MODULE_2__["default"], {
    images: product.images,
    productId: product.id
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductPageView);

/***/ }),

/***/ "./src/components/ProductPage/index.js":
/*!*********************************************!*\
  !*** ./src/components/ProductPage/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductPageView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductPageView */ "./src/components/ProductPage/ProductPageView.js");
/* harmony import */ var helpers_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/routes */ "./src/helpers/routes.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ProductPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductPage, _React$Component);

  function ProductPage() {
    _classCallCheck(this, ProductPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductPage).apply(this, arguments));
  }

  _createClass(ProductPage, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.isError) {
        this.props.history.push({
          pathname: Object(helpers_routes__WEBPACK_IMPORTED_MODULE_4__["productsPath"])(),
          state: {
            errorMessage: 'ProductPage not found'
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          product = _this$props.product,
          isFetching = _this$props.isFetching,
          isError = _this$props.isError;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductPageView__WEBPACK_IMPORTED_MODULE_3__["default"], {
        product: product,
        isFetching: isFetching,
        isError: isError
      });
    }
  }]);

  return ProductPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ProductPage.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  isFetching: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    product: state.product.item,
    isFetching: state.product.isFetching,
    isError: state.product.isError
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(ProductPage));

/***/ }),

/***/ "./src/components/ProductsPage/ProductsList.js":
/*!*****************************************************!*\
  !*** ./src/components/ProductsPage/ProductsList.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ProductCard */ "./src/components/ProductCard/index.js");



var ProductsList = function ProductsList(_ref) {
  var products = _ref.products;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, products.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ProductCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      product: product,
      key: product.id
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductsList);

/***/ }),

/***/ "./src/components/ProductsPage/ProductsPageView.js":
/*!*********************************************************!*\
  !*** ./src/components/ProductsPage/ProductsPageView.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsList */ "./src/components/ProductsPage/ProductsList.js");
/* harmony import */ var components_shared_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/shared/Alert */ "./src/components/shared/Alert.js");
/* harmony import */ var components_ProductsSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ProductsSlider */ "./src/components/ProductsSlider/index.js");





var ProductsPageView = function ProductsPageView(_ref) {
  var products = _ref.products,
      sliderProducts = _ref.sliderProducts,
      alertText = _ref.alertText,
      isFetching = _ref.isFetching,
      isError = _ref.isError;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_shared_Alert__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: alertText
  }), sliderProducts.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ProductsSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    products: sliderProducts
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: 'mt-3'
  }, "Products Catalog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), isFetching && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432..."), isError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u044B"), products && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductsList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    products: products
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductsPageView);

/***/ }),

/***/ "./src/components/ProductsPage/index.js":
/*!**********************************************!*\
  !*** ./src/components/ProductsPage/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions/Products */ "./src/actions/Products.js");
/* harmony import */ var _ProductsPageView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductsPageView */ "./src/components/ProductsPage/ProductsPageView.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ProductsPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductsPage, _React$Component);

  function ProductsPage() {
    _classCallCheck(this, ProductsPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductsPage).apply(this, arguments));
  }

  _createClass(ProductsPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchProducts();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          products = _this$props.products,
          isFetching = _this$props.isFetching,
          isError = _this$props.isError;
      var alertText = this.props.location.state && this.props.location.state.errorMessage;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductsPageView__WEBPACK_IMPORTED_MODULE_4__["default"], {
        products: products,
        sliderProducts: products,
        alertText: alertText,
        isFetching: isFetching,
        isError: isError
      });
    }
  }]);

  return ProductsPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ProductsPage.propTypes = {
  fetchProducts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  products: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  isFetching: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products.items,
    isFetching: state.products.isFetching,
    isError: state.products.isError
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  fetchProducts: actions_Products__WEBPACK_IMPORTED_MODULE_3__["fetchProducts"]
})(ProductsPage));

/***/ }),

/***/ "./src/components/ProductsSlider/index.js":
/*!************************************************!*\
  !*** ./src/components/ProductsSlider/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ProductCard */ "./src/components/ProductCard/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ProductsSlider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductsSlider, _React$Component);

  function ProductsSlider(props) {
    var _this;

    _classCallCheck(this, ProductsSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductsSlider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "prevSlide", function () {
      _this.setState(function (prevState) {
        return {
          currentIndex: (prevState.currentIndex - 1 + _this.props.products.length) % _this.props.products.length
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "nextSlide", function () {
      _this.setState(function (prevState) {
        return {
          currentIndex: (prevState.currentIndex + 1) % _this.props.products.length
        };
      });
    });

    _this.state = {
      currentIndex: 0
    };
    return _this;
  }

  _createClass(ProductsSlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        return _this2.nextSlide();
      }, 5000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var products = this.props.products;
      var currentIndex = this.state.currentIndex;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'row my-5'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'col-10 col-sm-10 col-md-6'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ProductCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        product: products[currentIndex]
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'col-2 col-sm-2 col-md-2 pt-5'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.prevSlide,
        className: 'mb-2'
      }, "Prev"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.nextSlide
      }, "Next")));
    }
  }]);

  return ProductsSlider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductsSlider);

/***/ }),

/***/ "./src/components/shared/Alert.js":
/*!****************************************!*\
  !*** ./src/components/shared/Alert.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);



var Alert = function Alert(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'danger' : _ref$type,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? undefined : _ref$text;

  if (text !== undefined) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledAlert"], {
      color: type
    }, text);
  } else return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "./src/components/shared/Image.js":
/*!****************************************!*\
  !*** ./src/components/shared/Image.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Image(_ref) {
  var src = _ref.src,
      width = _ref.width,
      height = _ref.height,
      alt = _ref.alt,
      className = _ref.className,
      onClickEvent = _ref.onClickEvent;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: src,
    width: width,
    height: height,
    alt: alt,
    className: className,
    onClick: onClickEvent
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/shared/Price.js":
/*!****************************************!*\
  !*** ./src/components/shared/Price.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Price(_ref) {
  var price = _ref.price;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      textDecoration: 'underline'
    }
  }, "$", price);
}

/* harmony default export */ __webpack_exports__["default"] = (Price);

/***/ }),

/***/ "./src/components/shared/TextBox.js":
/*!******************************************!*\
  !*** ./src/components/shared/TextBox.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TextBox(_ref) {
  var text = _ref.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, text);
}

/* harmony default export */ __webpack_exports__["default"] = (TextBox);

/***/ }),

/***/ "./src/constants/API.js":
/*!******************************!*\
  !*** ./src/constants/API.js ***!
  \******************************/
/*! exports provided: API_ROOT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ROOT", function() { return API_ROOT; });
var space = 'g7q8snx9jra2';
var environment = 'master';
var accessToken = 'pVBy5AYglq6O9vq_Otzu-uiWcbigl5nu9O85qdTlfVQ';
var API_ROOT = "https://cdn.contentful.com/spaces/".concat(space, "/environments/").concat(environment, "/entries?access_token=").concat(accessToken);

/***/ }),

/***/ "./src/constants/actionTypes/Cart.js":
/*!*******************************************!*\
  !*** ./src/constants/actionTypes/Cart.js ***!
  \*******************************************/
/*! exports provided: ADD_PRODUCT_TO_CART, LOAD_CART, RESET_CART */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT_TO_CART", function() { return ADD_PRODUCT_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CART", function() { return LOAD_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CART", function() { return RESET_CART; });
var ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
var LOAD_CART = 'LOAD_CART';
var RESET_CART = 'RESET_CART';

/***/ }),

/***/ "./src/constants/actionTypes/Product.js":
/*!**********************************************!*\
  !*** ./src/constants/actionTypes/Product.js ***!
  \**********************************************/
/*! exports provided: FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCT_REQUEST", function() { return FETCH_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCT_SUCCESS", function() { return FETCH_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCT_ERROR", function() { return FETCH_PRODUCT_ERROR; });
var FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
var FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
var FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';

/***/ }),

/***/ "./src/constants/actionTypes/Products.js":
/*!***********************************************!*\
  !*** ./src/constants/actionTypes/Products.js ***!
  \***********************************************/
/*! exports provided: FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_REQUEST", function() { return FETCH_PRODUCTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_SUCCESS", function() { return FETCH_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_ERROR", function() { return FETCH_PRODUCTS_ERROR; });
var FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
var FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
var FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

/***/ }),

/***/ "./src/helpers/historyCallBack.js":
/*!****************************************!*\
  !*** ./src/helpers/historyCallBack.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return historyCallBack; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_prepareData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/prepareData */ "./src/helpers/prepareData.js");
/* globals __CLIENT__, __SERVER__ */



function historyCallBack(store, routes, location) {
  var state = {
    params: {},
    query: {},
    routes: []
  };
  console.log('historyCallBack START');
  console.log(store);
  console.log(routes);
  console.log(location);
  console.log('historyCallBack END');
  routes.some(function (route) {
    var match = Object(react_router__WEBPACK_IMPORTED_MODULE_0__["matchPath"])(location.pathname, route);

    if (match) {
      state.routes.push(route);
      Object.assign(state.params, match.params);
      if (false) {}
      if (true) state.query = location.query;
    }

    return match;
  });
  return Object(helpers_prepareData__WEBPACK_IMPORTED_MODULE_2__["default"])(store, state);
}

/***/ }),

/***/ "./src/helpers/prepareData.js":
/*!************************************!*\
  !*** ./src/helpers/prepareData.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/compact */ "lodash/compact");
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_compact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (store, state) {
  var location = state.location,
      query = state.query,
      params = state.params,
      routes = state.routes;
  var prepareDataFns = lodash_compact__WEBPACK_IMPORTED_MODULE_0___default()(lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(routes, function (route) {
    return route.prepareData;
  }));
  return Promise.all(lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(prepareDataFns, function (prepareData) {
    return prepareData(store, query, params, location);
  }));
});

/***/ }),

/***/ "./src/helpers/routes.js":
/*!*******************************!*\
  !*** ./src/helpers/routes.js ***!
  \*******************************/
/*! exports provided: productsPath, cartPath, contactsPath, productPath, productImagePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsPath", function() { return productsPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartPath", function() { return cartPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactsPath", function() { return contactsPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productPath", function() { return productPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productImagePath", function() { return productImagePath; });
var productsPath = function productsPath() {
  return '/';
};
var cartPath = function cartPath() {
  return '/cart';
};
var contactsPath = function contactsPath() {
  return '/contacts';
};
var productPath = function productPath() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':id';
  return "/products/".concat(id);
};
var productImagePath = function productImagePath() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':id';
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ':index';
  return "/products/".concat(id, "/img/").concat(index);
};

/***/ }),

/***/ "./src/helpers/store.js":
/*!******************************!*\
  !*** ./src/helpers/store.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");
/* harmony import */ var middleware_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! middleware/API */ "./src/middleware/API.js");
/* harmony import */ var middleware_cartLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! middleware/cartLocalStorage */ "./src/middleware/cartLocalStorage.js");
/* globals __CLIENT__, __SERVER__  */




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var INITIAL_STATE = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (false) {}
  if (true) return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], INITIAL_STATE, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(middleware_API__WEBPACK_IMPORTED_MODULE_2__["default"], middleware_cartLocalStorage__WEBPACK_IMPORTED_MODULE_3__["default"]));
});
;

/***/ }),

/***/ "./src/middleware/API.js":
/*!*******************************!*\
  !*** ./src/middleware/API.js ***!
  \*******************************/
/*! exports provided: API_CALL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CALL", function() { return API_CALL; });
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superagent */ "superagent");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/object */ "lodash/object");
/* harmony import */ var lodash_object__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_object__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var constants_API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/API */ "./src/constants/API.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function APICall(_ref) {
  var method = _ref.method,
      query = _ref.query;
  return new Promise(function (resolve, reject) {
    var r = superagent__WEBPACK_IMPORTED_MODULE_0___default.a[method.toLowerCase()]("".concat(constants_API__WEBPACK_IMPORTED_MODULE_3__["API_ROOT"]));
    if (query) r.query(Object(qs__WEBPACK_IMPORTED_MODULE_1__["stringify"])(query));
    r.end(function (error, data) {
      return error ? reject(error) : resolve(data.body);
    });
  });
}

var API_CALL = 'API_CALL';

var nextAction = function nextAction(action, data) {
  return Object(lodash_object__WEBPACK_IMPORTED_MODULE_2__["assign"])({}, action, data, _defineProperty({}, API_CALL, undefined));
};

/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return function (next) {
    return function (action) {
      if (!action[API_CALL]) return next(action);

      var _action$API_CALL$type = _slicedToArray(action[API_CALL].types, 3),
          requestType = _action$API_CALL$type[0],
          successType = _action$API_CALL$type[1],
          errorType = _action$API_CALL$type[2];

      next(nextAction(action, {
        type: requestType
      }));
      var promise = APICall(Object(lodash_object__WEBPACK_IMPORTED_MODULE_2__["pick"])(action[API_CALL], ['method', 'query']));
      promise.then(function (response) {
        return next(nextAction(action, {
          response: response,
          type: successType
        }));
      }, function (error) {
        return next(nextAction(action, {
          error: error,
          type: errorType
        }));
      });
      return promise;
    };
  };
});

/***/ }),

/***/ "./src/middleware/cartLocalStorage.js":
/*!********************************************!*\
  !*** ./src/middleware/cartLocalStorage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_actionTypes_Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes/Cart */ "./src/constants/actionTypes/Cart.js");
/* harmony import */ var lodash_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/object */ "lodash/object");
/* harmony import */ var lodash_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_object__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return function (next) {
    return function (action) {
      switch (action.type) {
        case _constants_actionTypes_Cart__WEBPACK_IMPORTED_MODULE_0__["ADD_PRODUCT_TO_CART"]:
          next(action);

          try {
            var serializedCart = JSON.stringify(store.getState().cart.items);
            localStorage.setItem('cart', serializedCart);
          } catch (e) {}

          return null;

        case _constants_actionTypes_Cart__WEBPACK_IMPORTED_MODULE_0__["LOAD_CART"]:
          var loadedCart = [];

          try {
            var _serializedCart = localStorage.getItem('cart');

            if (_serializedCart) loadedCart = JSON.parse(_serializedCart);
          } catch (e) {}

          return next(Object(lodash_object__WEBPACK_IMPORTED_MODULE_1__["assign"])({}, action, {
            cart: loadedCart
          }));

        case _constants_actionTypes_Cart__WEBPACK_IMPORTED_MODULE_0__["RESET_CART"]:
          next(action);

          try {
            localStorage.setItem('cart', {});
          } catch (e) {}

          return null;

        default:
          return next(action);
      }
    };
  };
});

/***/ }),

/***/ "./src/reducers/Cart.js":
/*!******************************!*\
  !*** ./src/reducers/Cart.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/object */ "lodash/object");
/* harmony import */ var lodash_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_object__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var constants_actionTypes_Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/actionTypes/Cart */ "./src/constants/actionTypes/Cart.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



var initialState = {
  items: []
};

var addNewProductToCart = function addNewProductToCart(currentItems, product, count) {
  var item = currentItems.find(function (item) {
    return item.product.id === product.id;
  });

  if (item === undefined) {
    // значит такого товара в корзине еще нет
    return [].concat(_toConsumableArray(currentItems), [{
      product: product,
      count: count
    }]);
  } else {
    // такой товар в корзине уже есть
    return currentItems.map(function (item) {
      return {
        product: item.product,
        count: item.count + (item.product.id === product.id ? count : 0)
      };
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants_actionTypes_Cart__WEBPACK_IMPORTED_MODULE_1__["ADD_PRODUCT_TO_CART"]:
      return Object(lodash_object__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, initialState, {
        items: addNewProductToCart(state.items, action.product, action.count)
      });

    case constants_actionTypes_Cart__WEBPACK_IMPORTED_MODULE_1__["LOAD_CART"]:
      return Object(lodash_object__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, initialState, {
        items: action.cart
      });

    case constants_actionTypes_Cart__WEBPACK_IMPORTED_MODULE_1__["RESET_CART"]:
      return Object(lodash_object__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, initialState, {
        items: []
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/Product.js":
/*!*********************************!*\
  !*** ./src/reducers/Product.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/object */ "lodash/object");
/* harmony import */ var lodash_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_object__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var constants_actionTypes_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/actionTypes/Product */ "./src/constants/actionTypes/Product.js");


var initialState = {
  isFetching: false,
  isError: false,
  item: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants_actionTypes_Product__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCT_REQUEST"]:
      return Object(lodash_object__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, initialState, {
        isFetching: true
      });

    case constants_actionTypes_Product__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCT_ERROR"]:
      return Object(lodash_object__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, initialState, {
        isError: true
      });

    case constants_actionTypes_Product__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCT_SUCCESS"]:
      if (action.response.items.length > 0) return Object(lodash_object__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, initialState, {
        item: action.response.items[0].fields
      });else return Object(lodash_object__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, initialState, {
        isError: true
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/Products.js":
/*!**********************************!*\
  !*** ./src/reducers/Products.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/object */ "lodash/object");
/* harmony import */ var lodash_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_object__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var constants_actionTypes_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/actionTypes/Products */ "./src/constants/actionTypes/Products.js");


var initialState = {
  isFetching: false,
  isError: false,
  items: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants_actionTypes_Products__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS_REQUEST"]:
      return Object(lodash_object__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, initialState, {
        isFetching: true
      });

    case constants_actionTypes_Products__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS_ERROR"]:
      return Object(lodash_object__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, initialState, {
        isError: true
      });

    case constants_actionTypes_Products__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS_SUCCESS"]:
      var products = [];
      action.response.items.forEach(function (item) {
        return products.push(item.fields);
      });
      return Object(lodash_object__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, initialState, {
        items: products
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart */ "./src/reducers/Cart.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ "./src/reducers/Product.js");
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Products */ "./src/reducers/Products.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  products: _Products__WEBPACK_IMPORTED_MODULE_3__["default"],
  product: _Product__WEBPACK_IMPORTED_MODULE_2__["default"],
  cart: _Cart__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/routes/Cart.js":
/*!****************************!*\
  !*** ./src/routes/Cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_CartPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/CartPage */ "./src/components/CartPage/index.js");
/* harmony import */ var helpers_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/routes */ "./src/helpers/routes.js");
/* harmony import */ var actions_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions/Cart */ "./src/actions/Cart.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  path: Object(helpers_routes__WEBPACK_IMPORTED_MODULE_1__["cartPath"])(),
  component: components_CartPage__WEBPACK_IMPORTED_MODULE_0__["default"],
  prepareData: function prepareData(store) {
    return store.dispatch(Object(actions_Cart__WEBPACK_IMPORTED_MODULE_2__["loadCart"])());
  }
});

/***/ }),

/***/ "./src/routes/Contacts.js":
/*!********************************!*\
  !*** ./src/routes/Contacts.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Contacts */ "./src/components/Contacts/index.js");
/* harmony import */ var helpers_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/routes */ "./src/helpers/routes.js");
/* harmony import */ var actions_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions/Cart */ "./src/actions/Cart.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  path: Object(helpers_routes__WEBPACK_IMPORTED_MODULE_1__["contactsPath"])(),
  component: components_Contacts__WEBPACK_IMPORTED_MODULE_0__["default"],
  prepareData: function prepareData(store) {
    return store.dispatch(Object(actions_Cart__WEBPACK_IMPORTED_MODULE_2__["loadCart"])());
  }
});

/***/ }),

/***/ "./src/routes/NotFound.js":
/*!********************************!*\
  !*** ./src/routes/NotFound.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_NotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/NotFound */ "./src/components/NotFound/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  component: components_NotFound__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/routes/Product.js":
/*!*******************************!*\
  !*** ./src/routes/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ProductPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ProductPage */ "./src/components/ProductPage/index.js");
/* harmony import */ var helpers_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/routes */ "./src/helpers/routes.js");
/* harmony import */ var actions_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions/Product */ "./src/actions/Product.js");
/* harmony import */ var actions_Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions/Cart */ "./src/actions/Cart.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  path: Object(helpers_routes__WEBPACK_IMPORTED_MODULE_2__["productPath"])(),
  render: function render(_ref) {
    var match = _ref.match,
        history = _ref.history;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ProductPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: match.params.id,
      history: history
    });
  },
  prepareData: function prepareData(store, query, params) {
    var fetchProductPromise = store.dispatch(Object(actions_Product__WEBPACK_IMPORTED_MODULE_3__["fetchProduct"])(params.id));
    var loadCartPromise = store.dispatch(Object(actions_Cart__WEBPACK_IMPORTED_MODULE_4__["loadCart"])());
    return Promise.all([fetchProductPromise, loadCartPromise]);
  }
});

/***/ }),

/***/ "./src/routes/Products.js":
/*!********************************!*\
  !*** ./src/routes/Products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_ProductsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/ProductsPage */ "./src/components/ProductsPage/index.js");
/* harmony import */ var helpers_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/routes */ "./src/helpers/routes.js");
/* harmony import */ var actions_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions/Products */ "./src/actions/Products.js");
/* harmony import */ var actions_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions/Cart */ "./src/actions/Cart.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  path: Object(helpers_routes__WEBPACK_IMPORTED_MODULE_1__["productsPath"])(),
  component: components_ProductsPage__WEBPACK_IMPORTED_MODULE_0__["default"],
  exact: true,
  strict: true,
  prepareData: function prepareData(store) {
    var fetchProductsPromise = store.dispatch(Object(actions_Products__WEBPACK_IMPORTED_MODULE_2__["fetchProducts"])());
    var loadCartPromise = store.dispatch(Object(actions_Cart__WEBPACK_IMPORTED_MODULE_3__["loadCart"])());
    return Promise.all([fetchProductsPromise, loadCartPromise]);
  }
});

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products */ "./src/routes/Products.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ "./src/routes/Product.js");
/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contacts */ "./src/routes/Contacts.js");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cart */ "./src/routes/Cart.js");
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotFound */ "./src/routes/NotFound.js");





/* harmony default export */ __webpack_exports__["default"] = ([_Products__WEBPACK_IMPORTED_MODULE_0__["default"], _Product__WEBPACK_IMPORTED_MODULE_1__["default"], _Contacts__WEBPACK_IMPORTED_MODULE_2__["default"], _Cart__WEBPACK_IMPORTED_MODULE_3__["default"], _NotFound__WEBPACK_IMPORTED_MODULE_4__["default"]]);

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "lodash/compact":
/*!*********************************!*\
  !*** external "lodash/compact" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/compact");

/***/ }),

/***/ "lodash/map":
/*!*****************************!*\
  !*** external "lodash/map" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/map");

/***/ }),

/***/ "lodash/object":
/*!********************************!*\
  !*** external "lodash/object" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/object");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "pluralize":
/*!****************************!*\
  !*** external "pluralize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pluralize");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "superagent":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map