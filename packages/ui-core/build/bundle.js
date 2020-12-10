(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*********************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!**********************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**************************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*******************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/createClass.js":
/*!****************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/createClass.js ***!
  \****************************************************************/
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/createSuper.js":
/*!****************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/createSuper.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "../../node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

var possibleConstructorReturn = __webpack_require__(/*! ./possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*******************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*******************************************************************/
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/extends.js":
/*!************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/extends.js ***!
  \************************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*******************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/inherits.js":
/*!*************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/inherits.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*****************************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ ((module) => {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!********************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \********************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!**********************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!******************************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*******************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!**********************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "../../node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "../../node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!***********************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/typeof.js ***!
  \***********************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!*******************************************************************************!*
  !*** ../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "../../node_modules/antd/es/calendar/locale/en_US.js":
/*!***********************************************************!*
  !*** ../../node_modules/antd/es/calendar/locale/en_US.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../date-picker/locale/en_US */ "../../node_modules/antd/es/date-picker/locale/en_US.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "../../node_modules/antd/es/config-provider/context.js":
/*!*************************************************************!*
  !*** ../../node_modules/antd/es/config-provider/context.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigContext": () => /* binding */ ConfigContext,
/* harmony export */   "ConfigConsumer": () => /* binding */ ConfigConsumer,
/* harmony export */   "withConfigConsumer": () => /* binding */ withConfigConsumer
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _renderEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderEmpty */ "../../node_modules/antd/es/config-provider/renderEmpty.js");



var ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? "ant-".concat(suffixCls) : 'ant';
  },
  renderEmpty: _renderEmpty__WEBPACK_IMPORTED_MODULE_2__.default
});
var ConfigConsumer = ConfigContext.Consumer;
/** @deprecated Use hooks instead. This is a legacy function */

function withConfigConsumer(config) {
  return function withConfigConsumerFunc(Component) {
    // Wrap with ConfigConsumer. Since we need compatible with react 15, be care when using ref methods
    var SFC = function SFC(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ConfigConsumer, null, function (configProps) {
        var basicPrefixCls = config.prefixCls;
        var getPrefixCls = configProps.getPrefixCls;
        var customizePrefixCls = props.prefixCls;
        var prefixCls = getPrefixCls(basicPrefixCls, customizePrefixCls);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, configProps, props, {
          prefixCls: prefixCls
        }));
      });
    };

    var cons = Component.constructor;
    var name = cons && cons.displayName || Component.name || 'Component';
    SFC.displayName = "withConfigConsumer(".concat(name, ")");
    return SFC;
  };
}

/***/ }),

/***/ "../../node_modules/antd/es/config-provider/renderEmpty.js":
/*!*****************************************************************!*
  !*** ../../node_modules/antd/es/config-provider/renderEmpty.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../empty */ "../../node_modules/antd/es/empty/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "../../node_modules/antd/es/config-provider/context.js");




var renderEmpty = function renderEmpty(componentName) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_empty__WEBPACK_IMPORTED_MODULE_2__.default, {
          image: _empty__WEBPACK_IMPORTED_MODULE_2__.default.PRESENTED_IMAGE_SIMPLE
        });

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_empty__WEBPACK_IMPORTED_MODULE_2__.default, {
          image: _empty__WEBPACK_IMPORTED_MODULE_2__.default.PRESENTED_IMAGE_SIMPLE,
          className: "".concat(prefix, "-small")
        });

      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_empty__WEBPACK_IMPORTED_MODULE_2__.default, null);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderEmpty);

/***/ }),

/***/ "../../node_modules/antd/es/date-picker/locale/en_US.js":
/*!**************************************************************!*
  !*** ../../node_modules/antd/es/date-picker/locale/en_US.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_picker_es_locale_en_US__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-picker/es/locale/en_US */ "../../node_modules/rc-picker/es/locale/en_US.js");
/* harmony import */ var _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../time-picker/locale/en_US */ "../../node_modules/antd/es/time-picker/locale/en_US.js");


 // Merge into a locale object

var locale = {
  lang: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, rc_picker_es_locale_en_US__WEBPACK_IMPORTED_MODULE_1__.default),
  timePickerLocale: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__.default)
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "../../node_modules/antd/es/empty/empty.js":
/*!*************************************************!*
  !*** ../../node_modules/antd/es/empty/empty.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/es/config-provider/context.js");



var Empty = function Empty() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_1__.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-default');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: prefixCls,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "".concat(prefixCls, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "".concat(prefixCls, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "".concat(prefixCls, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "".concat(prefixCls, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "".concat(prefixCls, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    transform: "translate(149.65 15.383)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Empty);

/***/ }),

/***/ "../../node_modules/antd/es/empty/index.js":
/*!*************************************************!*
  !*** ../../node_modules/antd/es/empty/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "../../node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./empty */ "../../node_modules/antd/es/empty/empty.js");
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simple */ "../../node_modules/antd/es/empty/simple.js");



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







var defaultEmptyImg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_empty__WEBPACK_IMPORTED_MODULE_4__.default, null);
var simpleEmptyImg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_simple__WEBPACK_IMPORTED_MODULE_5__.default, null);

var Empty = function Empty(_a) {
  var className = _a.className,
      customizePrefixCls = _a.prefixCls,
      _a$image = _a.image,
      image = _a$image === void 0 ? defaultEmptyImg : _a$image,
      description = _a.description,
      children = _a.children,
      imageStyle = _a.imageStyle,
      restProps = __rest(_a, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_6__.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_7__.default, {
    componentName: "Empty"
  }, function (locale) {
    var _classNames;

    var prefixCls = getPrefixCls('empty', customizePrefixCls);
    var des = typeof description !== 'undefined' ? description : locale.description;
    var alt = typeof des === 'string' ? des : 'empty';
    var imageNode = null;

    if (typeof image === 'string') {
      imageNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {
        alt: alt,
        src: image
      });
    } else {
      imageNode = image;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, (_classNames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className)
    }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "".concat(prefixCls, "-image"),
      style: imageStyle
    }, imageNode), des && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
      className: "".concat(prefixCls, "-description")
    }, des), children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, children));
  });
};

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Empty);

/***/ }),

/***/ "../../node_modules/antd/es/empty/simple.js":
/*!**************************************************!*
  !*** ../../node_modules/antd/es/empty/simple.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/es/config-provider/context.js");



var Simple = function Simple() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_1__.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-simple');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: prefixCls,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    fillRule: "nonzero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: "".concat(prefixCls, "-path")
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Simple);

/***/ }),

/***/ "../../node_modules/antd/es/locale-provider/LocaleReceiver.js":
/*!********************************************************************!*
  !*** ../../node_modules/antd/es/locale-provider/LocaleReceiver.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ LocaleReceiver,
/* harmony export */   "useLocaleReceiver": () => /* binding */ useLocaleReceiver
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ "../../node_modules/@babel/runtime/helpers/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default */ "../../node_modules/antd/es/locale-provider/default.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context */ "../../node_modules/antd/es/locale-provider/context.js");









var LocaleReceiver = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(LocaleReceiver, _React$Component);

  var _super = _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4___default()(LocaleReceiver);

  function LocaleReceiver() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LocaleReceiver);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale = _this$props.defaultLocale;
      var locale = defaultLocale || _default__WEBPACK_IMPORTED_MODULE_6__.default[componentName || 'global'];
      var antLocale = this.context;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return _default__WEBPACK_IMPORTED_MODULE_6__.default.locale;
      }

      return localeCode;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
    }
  }]);

  return LocaleReceiver;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);


LocaleReceiver.defaultProps = {
  componentName: 'global'
};
LocaleReceiver.contextType = _context__WEBPACK_IMPORTED_MODULE_7__.default;
function useLocaleReceiver(componentName, defaultLocale) {
  var antLocale = react__WEBPACK_IMPORTED_MODULE_5__.useContext(_context__WEBPACK_IMPORTED_MODULE_7__.default);
  var componentLocale = react__WEBPACK_IMPORTED_MODULE_5__.useMemo(function () {
    var locale = defaultLocale || _default__WEBPACK_IMPORTED_MODULE_6__.default[componentName || 'global'];
    var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  return [componentLocale];
}

/***/ }),

/***/ "../../node_modules/antd/es/locale-provider/context.js":
/*!*************************************************************!*
  !*** ../../node_modules/antd/es/locale-provider/context.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var LocaleContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocaleContext);

/***/ }),

/***/ "../../node_modules/antd/es/locale-provider/default.js":
/*!*************************************************************!*
  !*** ../../node_modules/antd/es/locale-provider/default.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _locale_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/default */ "../../node_modules/antd/es/locale/default.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_default__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "../../node_modules/antd/es/locale/default.js":
/*!****************************************************!*
  !*** ../../node_modules/antd/es/locale/default.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var rc_pagination_es_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-pagination/es/locale/en_US */ "../../node_modules/rc-pagination/es/locale/en_US.js");
/* harmony import */ var _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-picker/locale/en_US */ "../../node_modules/antd/es/date-picker/locale/en_US.js");
/* harmony import */ var _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-picker/locale/en_US */ "../../node_modules/antd/es/time-picker/locale/en_US.js");
/* harmony import */ var _calendar_locale_en_US__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/locale/en_US */ "../../node_modules/antd/es/calendar/locale/en_US.js");
/* eslint-disable no-template-curly-in-string */




var typeTemplate = '${label} is not a valid ${type}';
var localeValues = {
  locale: 'en',
  Pagination: rc_pagination_es_locale_en_US__WEBPACK_IMPORTED_MODULE_0__.default,
  DatePicker: _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_1__.default,
  TimePicker: _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__.default,
  Calendar: _calendar_locale_en_US__WEBPACK_IMPORTED_MODULE_3__.default,
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      "default": 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      "enum": '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localeValues);

/***/ }),

/***/ "../../node_modules/antd/es/skeleton/Avatar.js":
/*!*****************************************************!*
  !*** ../../node_modules/antd/es/skeleton/Avatar.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! omit.js */ "../../node_modules/omit.js/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Element */ "../../node_modules/antd/es/skeleton/Element.js");








var SkeletonAvatar = function SkeletonAvatar(props) {
  var renderSkeletonAvatar = function renderSkeletonAvatar(_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
        className = props.className,
        active = props.active;
    var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    var otherProps = (0,omit_js__WEBPACK_IMPORTED_MODULE_3__.default)(props, ['prefixCls']);
    var cls = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, "".concat(prefixCls, "-element"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(prefixCls, "-active"), active), className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: cls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Element__WEBPACK_IMPORTED_MODULE_5__.default, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      prefixCls: "".concat(prefixCls, "-avatar")
    }, otherProps)));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_config_provider__WEBPACK_IMPORTED_MODULE_6__.ConfigConsumer, null, renderSkeletonAvatar);
};

SkeletonAvatar.defaultProps = {
  size: 'default',
  shape: 'circle'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonAvatar);

/***/ }),

/***/ "../../node_modules/antd/es/skeleton/Button.js":
/*!*****************************************************!*
  !*** ../../node_modules/antd/es/skeleton/Button.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! omit.js */ "../../node_modules/omit.js/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Element */ "../../node_modules/antd/es/skeleton/Element.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/es/config-provider/context.js");








var SkeletonButton = function SkeletonButton(props) {
  var renderSkeletonButton = function renderSkeletonButton(_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
        className = props.className,
        active = props.active;
    var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    var otherProps = (0,omit_js__WEBPACK_IMPORTED_MODULE_3__.default)(props, ['prefixCls']);
    var cls = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, "".concat(prefixCls, "-element"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(prefixCls, "-active"), active), className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: cls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Element__WEBPACK_IMPORTED_MODULE_5__.default, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      prefixCls: "".concat(prefixCls, "-button")
    }, otherProps)));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_config_provider__WEBPACK_IMPORTED_MODULE_6__.ConfigConsumer, null, renderSkeletonButton);
};

SkeletonButton.defaultProps = {
  size: 'default'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonButton);

/***/ }),

/***/ "../../node_modules/antd/es/skeleton/Element.js":
/*!******************************************************!*
  !*** ../../node_modules/antd/es/skeleton/Element.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





var Element = function Element(props) {
  var _classNames, _classNames2;

  var prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      size = props.size,
      shape = props.shape;
  var sizeCls = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
  var shapeCls = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames2, "".concat(prefixCls, "-circle"), shape === 'circle'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames2, "".concat(prefixCls, "-square"), shape === 'square'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames2, "".concat(prefixCls, "-round"), shape === 'round'), _classNames2));
  var sizeStyle = typeof size === 'number' ? {
    width: size,
    height: size,
    lineHeight: "".concat(size, "px")
  } : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, sizeCls, shapeCls, className),
    style: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, sizeStyle), style)
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);

/***/ }),

/***/ "../../node_modules/antd/es/skeleton/Image.js":
/*!****************************************************!*
  !*** ../../node_modules/antd/es/skeleton/Image.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/es/config-provider/context.js");



var path = 'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z';

var SkeletonImage = function SkeletonImage(props) {
  var renderSkeletonImage = function renderSkeletonImage(_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
        className = props.className,
        style = props.style;
    var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    var cls = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, "".concat(prefixCls, "-element"), className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: cls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-image"), className),
      style: style
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      viewBox: "0 0 1098 1024",
      xmlns: "http://www.w3.org/2000/svg",
      className: "".concat(prefixCls, "-image-svg")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: path,
      className: "".concat(prefixCls, "-image-path")
    }))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_config_provider__WEBPACK_IMPORTED_MODULE_2__.ConfigConsumer, null, renderSkeletonImage);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonImage);

/***/ }),

/***/ "../../node_modules/antd/es/skeleton/Input.js":
/*!****************************************************!*
  !*** ../../node_modules/antd/es/skeleton/Input.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! omit.js */ "../../node_modules/omit.js/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Element */ "../../node_modules/antd/es/skeleton/Element.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/es/config-provider/context.js");








var SkeletonInput = function SkeletonInput(props) {
  var renderSkeletonInput = function renderSkeletonInput(_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
        className = props.className,
        active = props.active;
    var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    var otherProps = (0,omit_js__WEBPACK_IMPORTED_MODULE_3__.default)(props, ['prefixCls']);
    var cls = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, "".concat(prefixCls, "-element"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(prefixCls, "-active"), active), className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: cls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Element__WEBPACK_IMPORTED_MODULE_5__.default, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      prefixCls: "".concat(prefixCls, "-input")
    }, otherProps)));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_config_provider__WEBPACK_IMPORTED_MODULE_6__.ConfigConsumer, null, renderSkeletonInput);
};

SkeletonInput.defaultProps = {
  size: 'default'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonInput);

/***/ }),

/***/ "../../node_modules/antd/es/skeleton/Paragraph.js":
/*!********************************************************!*
  !*** ../../node_modules/antd/es/skeleton/Paragraph.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




var Paragraph = function Paragraph(props) {
  var getWidth = function getWidth(index) {
    var width = props.width,
        _props$rows = props.rows,
        rows = _props$rows === void 0 ? 2 : _props$rows;

    if (Array.isArray(width)) {
      return width[index];
    } // last paragraph


    if (rows - 1 === index) {
      return width;
    }

    return undefined;
  };

  var prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      rows = props.rows;

  var rowList = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Array(rows)).map(function (_, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
        key: index,
        style: {
          width: getWidth(index)
        }
      })
    );
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, className),
    style: style
  }, rowList);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paragraph);

/***/ }),

/***/ "../../node_modules/antd/es/skeleton/Skeleton.js":
/*!*******************************************************!*
  !*** ../../node_modules/antd/es/skeleton/Skeleton.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Title */ "../../node_modules/antd/es/skeleton/Title.js");
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Paragraph */ "../../node_modules/antd/es/skeleton/Paragraph.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config-provider */ "../../node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Element */ "../../node_modules/antd/es/skeleton/Element.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Avatar */ "../../node_modules/antd/es/skeleton/Avatar.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Button */ "../../node_modules/antd/es/skeleton/Button.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Input */ "../../node_modules/antd/es/skeleton/Input.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Image */ "../../node_modules/antd/es/skeleton/Image.js");














function getComponentProps(prop) {
  if (prop && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(prop) === 'object') {
    return prop;
  }

  return {};
}

function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return {
      size: 'large',
      shape: 'square'
    };
  }

  return {
    size: 'large',
    shape: 'circle'
  };
}

function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }

  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }

  return {};
}

function getParagraphBasicProps(hasAvatar, hasTitle) {
  var basicProps = {}; // Width

  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  } // Rows


  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }

  return basicProps;
}

var Skeleton = function Skeleton(props) {
  var renderSkeleton = function renderSkeleton(_ref) {
    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;
    var customizePrefixCls = props.prefixCls,
        loading = props.loading,
        className = props.className,
        children = props.children,
        avatar = props.avatar,
        title = props.title,
        paragraph = props.paragraph,
        active = props.active,
        round = props.round;
    var prefixCls = getPrefixCls('skeleton', customizePrefixCls);

    if (loading || !('loading' in props)) {
      var _classNames;

      var hasAvatar = !!avatar;
      var hasTitle = !!title;
      var hasParagraph = !!paragraph; // Avatar

      var avatarNode;

      if (hasAvatar) {
        var avatarProps = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
          prefixCls: "".concat(prefixCls, "-avatar")
        }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar)); // We direct use SkeletonElement as avatar in skeleton internal.


        avatarNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
          className: "".concat(prefixCls, "-header")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Element__WEBPACK_IMPORTED_MODULE_5__.default, avatarProps));
      }

      var contentNode;

      if (hasTitle || hasParagraph) {
        // Title
        var $title;

        if (hasTitle) {
          var titleProps = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
            prefixCls: "".concat(prefixCls, "-title")
          }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));

          $title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Title__WEBPACK_IMPORTED_MODULE_6__.default, titleProps);
        } // Paragraph


        var paragraphNode;

        if (hasParagraph) {
          var paragraphProps = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
            prefixCls: "".concat(prefixCls, "-paragraph")
          }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));

          paragraphNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Paragraph__WEBPACK_IMPORTED_MODULE_7__.default, paragraphProps);
        }

        contentNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
          className: "".concat(prefixCls, "-content")
        }, $title, paragraphNode);
      }

      var cls = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, (_classNames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, "".concat(prefixCls, "-with-avatar"), hasAvatar), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, "".concat(prefixCls, "-active"), active), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, "".concat(prefixCls, "-round"), round), _classNames), className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: cls
      }, avatarNode, contentNode);
    }

    return children;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_config_provider__WEBPACK_IMPORTED_MODULE_8__.ConfigConsumer, null, renderSkeleton);
};

Skeleton.defaultProps = {
  avatar: false,
  title: true,
  paragraph: true
};
Skeleton.Button = _Button__WEBPACK_IMPORTED_MODULE_9__.default;
Skeleton.Avatar = _Avatar__WEBPACK_IMPORTED_MODULE_10__.default;
Skeleton.Input = _Input__WEBPACK_IMPORTED_MODULE_11__.default;
Skeleton.Image = _Image__WEBPACK_IMPORTED_MODULE_12__.default;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skeleton);

/***/ }),

/***/ "../../node_modules/antd/es/skeleton/Title.js":
/*!****************************************************!*
  !*** ../../node_modules/antd/es/skeleton/Title.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable jsx-a11y/heading-has-content */




var Title = function Title(_ref) {
  var prefixCls = _ref.prefixCls,
      className = _ref.className,
      width = _ref.width,
      style = _ref.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, className),
    style: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      width: width
    }, style)
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "../../node_modules/antd/es/skeleton/index.js":
/*!****************************************************!*
  !*** ../../node_modules/antd/es/skeleton/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Skeleton */ "../../node_modules/antd/es/skeleton/Skeleton.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Skeleton__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "../../node_modules/antd/es/time-picker/locale/en_US.js":
/*!**************************************************************!*
  !*** ../../node_modules/antd/es/time-picker/locale/en_US.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "../../node_modules/classnames/index.js":
/*!**********************************************!*
  !*** ../../node_modules/classnames/index.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;

      var argType = _typeof(arg);

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames["default"] = classNames;
    module.exports = classNames;
  } else if ( true && _typeof(__webpack_require__.amdO) === 'object' && __webpack_require__.amdO) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),

/***/ "../../node_modules/object-assign/index.js":
/*!*************************************************!*
  !*** ../../node_modules/object-assign/index.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "../../node_modules/omit.js/es/index.js":
/*!**********************************************!*
  !*** ../../node_modules/omit.js/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function omit(obj, fields) {
  // eslint-disable-next-line prefer-object-spread
  var shallowCopy = Object.assign({}, obj);

  for (var i = 0; i < fields.length; i += 1) {
    var key = fields[i];
    delete shallowCopy[key];
  }

  return shallowCopy;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (omit);

/***/ }),

/***/ "../../node_modules/rc-pagination/es/locale/en_US.js":
/*!***********************************************************!*
  !*** ../../node_modules/rc-pagination/es/locale/en_US.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
});

/***/ }),

/***/ "../../node_modules/rc-picker/es/locale/en_US.js":
/*!*******************************************************!*
  !*** ../../node_modules/rc-picker/es/locale/en_US.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "../../node_modules/react/cjs/react.development.js":
/*!*********************************************************!*
  !*** ../../node_modules/react/cjs/react.development.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (true) {
  (function () {
    'use strict';

    var _assign = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js"); // TODO: this is special because it gets imported during build.


    var ReactVersion = '17.0.1'; // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    exports.Fragment = 0xeacb;
    exports.StrictMode = 0xeacc;
    exports.Profiler = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    exports.Suspense = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_SCOPE_TYPE = 0xead7;
    var REACT_OPAQUE_ID_TYPE = 0xeae0;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_OFFSCREEN_TYPE = 0xeae2;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

    if (typeof Symbol === 'function' && Symbol["for"]) {
      var symbolFor = Symbol["for"];
      REACT_ELEMENT_TYPE = symbolFor('react.element');
      REACT_PORTAL_TYPE = symbolFor('react.portal');
      exports.Fragment = symbolFor('react.fragment');
      exports.StrictMode = symbolFor('react.strict_mode');
      exports.Profiler = symbolFor('react.profiler');
      REACT_PROVIDER_TYPE = symbolFor('react.provider');
      REACT_CONTEXT_TYPE = symbolFor('react.context');
      REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
      exports.Suspense = symbolFor('react.suspense');
      REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
      REACT_MEMO_TYPE = symbolFor('react.memo');
      REACT_LAZY_TYPE = symbolFor('react.lazy');
      REACT_BLOCK_TYPE = symbolFor('react.block');
      REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
      REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
      REACT_SCOPE_TYPE = symbolFor('react.scope');
      REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
      REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
      REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
      REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }

    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';

    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || _typeof(maybeIterable) !== 'object') {
        return null;
      }

      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }

      return null;
    }
    /**
     * Keeps track of the current dispatcher.
     */


    var ReactCurrentDispatcher = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    /**
     * Keeps track of the current batch's configuration such as how long an update
     * should suspend for if it needs to.
     */

    var ReactCurrentBatchConfig = {
      transition: 0
    };
    /**
     * Keeps track of the current owner.
     *
     * The current owner is the component who should own any components that are
     * currently being constructed.
     */

    var ReactCurrentOwner = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    var ReactDebugCurrentFrame = {};
    var currentExtraStackFrame = null;

    function setExtraStackFrame(stack) {
      {
        currentExtraStackFrame = stack;
      }
    }

    {
      ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
        {
          currentExtraStackFrame = stack;
        }
      }; // Stack implementation injected by the current renderer.


      ReactDebugCurrentFrame.getCurrentStack = null;

      ReactDebugCurrentFrame.getStackAddendum = function () {
        var stack = ''; // Add an extra top frame while an element is being validated

        if (currentExtraStackFrame) {
          stack += currentExtraStackFrame;
        } // Delegate to the injected renderer-specific implementation


        var impl = ReactDebugCurrentFrame.getCurrentStack;

        if (impl) {
          stack += impl() || '';
        }

        return stack;
      };
    }
    /**
     * Used by act() to track whether you're inside an act() scope.
     */

    var IsSomeRendererActing = {
      current: false
    };
    var ReactSharedInternals = {
      ReactCurrentDispatcher: ReactCurrentDispatcher,
      ReactCurrentBatchConfig: ReactCurrentBatchConfig,
      ReactCurrentOwner: ReactCurrentOwner,
      IsSomeRendererActing: IsSomeRendererActing,
      // Used by renderers to avoid bundling object-assign twice in UMD bundles:
      assign: _assign
    };
    {
      ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
    } // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.

    function warn(format) {
      {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        printWarning('warn', format, args);
      }
    }

    function error(format) {
      {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        printWarning('error', format, args);
      }
    }

    function printWarning(level, format, args) {
      // When changing this logic, you might want to also
      // update consoleWithStackDev.www.js as well.
      {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();

        if (stack !== '') {
          format += '%s';
          args = args.concat([stack]);
        }

        var argsWithFormat = args.map(function (item) {
          return '' + item;
        }); // Careful: RN currently depends on this prefix

        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging

        Function.prototype.apply.call(console[level], console, argsWithFormat);
      }
    }

    var didWarnStateUpdateForUnmountedComponent = {};

    function warnNoop(publicInstance, callerName) {
      {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
        var warningKey = componentName + "." + callerName;

        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
          return;
        }

        error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
      }
    }
    /**
     * This is the abstract API for an update queue.
     */


    var ReactNoopUpdateQueue = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function isMounted(publicInstance) {
        return false;
      },

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
        warnNoop(publicInstance, 'forceUpdate');
      },

      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
        warnNoop(publicInstance, 'replaceState');
      },

      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
        warnNoop(publicInstance, 'setState');
      }
    };
    var emptyObject = {};
    {
      Object.freeze(emptyObject);
    }
    /**
     * Base class helpers for the updating state of a component.
     */

    function Component(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
      // renderer.

      this.updater = updater || ReactNoopUpdateQueue;
    }

    Component.prototype.isReactComponent = {};
    /**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * There is no guarantee that calls to `setState` will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */

    Component.prototype.setState = function (partialState, callback) {
      if (!(_typeof(partialState) === 'object' || typeof partialState === 'function' || partialState == null)) {
        {
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        }
      }

      this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };
    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */


    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };
    /**
     * Deprecated APIs. These APIs used to exist on classic React classes but since
     * we would like to deprecate them, we're not going to move them over to this
     * modern base class. Instead, we define a getter that warns if it's accessed.
     */


    {
      var deprecatedAPIs = {
        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
      };

      var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function get() {
            warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
            return undefined;
          }
        });
      };

      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }

    function ComponentDummy() {}

    ComponentDummy.prototype = Component.prototype;
    /**
     * Convenience component with default shallow equality check for sCU.
     */

    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }

    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

    _assign(pureComponentPrototype, Component.prototype);

    pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

    function createRef() {
      var refObject = {
        current: null
      };
      {
        Object.seal(refObject);
      }
      return refObject;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || '';
      return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
    }

    function getContextName(type) {
      return type.displayName || 'Context';
    }

    function getComponentName(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }

      {
        if (typeof type.tag === 'number') {
          error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }

      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }

      if (typeof type === 'string') {
        return type;
      }

      switch (type) {
        case exports.Fragment:
          return 'Fragment';

        case REACT_PORTAL_TYPE:
          return 'Portal';

        case exports.Profiler:
          return 'Profiler';

        case exports.StrictMode:
          return 'StrictMode';

        case exports.Suspense:
          return 'Suspense';

        case REACT_SUSPENSE_LIST_TYPE:
          return 'SuspenseList';
      }

      if (_typeof(type) === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            var context = type;
            return getContextName(context) + '.Consumer';

          case REACT_PROVIDER_TYPE:
            var provider = type;
            return getContextName(provider._context) + '.Provider';

          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');

          case REACT_MEMO_TYPE:
            return getComponentName(type.type);

          case REACT_BLOCK_TYPE:
            return getComponentName(type._render);

          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                return getComponentName(init(payload));
              } catch (x) {
                return null;
              }
            }
        }
      }

      return null;
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    {
      didWarnAboutStringRefs = {};
    }

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }

    function defineKeyPropWarningGetter(props, displayName) {
      var warnAboutAccessingKey = function warnAboutAccessingKey() {
        {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        }
      };

      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, 'key', {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }

    function defineRefPropWarningGetter(props, displayName) {
      var warnAboutAccessingRef = function warnAboutAccessingRef() {
        {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        }
      };

      warnAboutAccessingRef.isReactWarning = true;
      Object.defineProperty(props, 'ref', {
        get: warnAboutAccessingRef,
        configurable: true
      });
    }

    function warnIfStringRefCannotBeAutoConverted(config) {
      {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
          var componentName = getComponentName(ReactCurrentOwner.current.type);

          if (!didWarnAboutStringRefs[componentName]) {
            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
            didWarnAboutStringRefs[componentName] = true;
          }
        }
      }
    }
    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, instanceof check
     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */


    var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner
      };
      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.

        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        }); // self and source are DEV only properties.

        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.

        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });

        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
      return element;
    };
    /**
     * Create and return a new ReactElement of the given type.
     * See https://reactjs.org/docs/react-api.html#createelement
     */


    function createElement(type, config, children) {
      var propName; // Reserved names are extracted

      var props = {};
      var key = null;
      var ref = null;
      var self = null;
      var source = null;

      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;
          {
            warnIfStringRefCannotBeAutoConverted(config);
          }
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        {
          if (Object.freeze) {
            Object.freeze(childArray);
          }
        }
        props.children = childArray;
      } // Resolve default props


      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;

        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }

      {
        if (key || ref) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }

          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
      }
      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }

    function cloneAndReplaceKey(oldElement, newKey) {
      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
      return newElement;
    }
    /**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://reactjs.org/docs/react-api.html#cloneelement
     */


    function cloneElement(element, config, children) {
      if (!!(element === null || element === undefined)) {
        {
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        }
      }

      var propName; // Original props are copied

      var props = _assign({}, element.props); // Reserved names are extracted


      var key = element.key;
      var ref = element.ref; // Self is preserved since the owner is preserved.

      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
      // transpiler, and the original source is probably a better indicator of the
      // true owner.

      var source = element._source; // Owner will be preserved, unless ref is overridden

      var owner = element._owner;

      if (config != null) {
        if (hasValidRef(config)) {
          // Silently steal the ref from the parent.
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        } // Remaining properties override existing props


        var defaultProps;

        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              // Resolve default props
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        props.children = childArray;
      }

      return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */


    function isValidElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    /**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */

    function escape(key) {
      var escapeRegex = /[=:]/g;
      var escaperLookup = {
        '=': '=0',
        ':': '=2'
      };
      var escapedString = key.replace(escapeRegex, function (match) {
        return escaperLookup[match];
      });
      return '$' + escapedString;
    }
    /**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */


    var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;

    function escapeUserProvidedKey(text) {
      return text.replace(userProvidedKeyEscapeRegex, '$&/');
    }
    /**
     * Generate a key string that identifies a element within a set.
     *
     * @param {*} element A element that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */


    function getElementKey(element, index) {
      // Do some typechecking here since we call this blindly. We want to ensure
      // that we don't block potential future ES APIs.
      if (_typeof(element) === 'object' && element !== null && element.key != null) {
        // Explicit key
        return escape('' + element.key);
      } // Implicit key determined by the index in the set


      return index.toString(36);
    }

    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = _typeof(children);

      if (type === 'undefined' || type === 'boolean') {
        // All of the above are perceived as null.
        children = null;
      }

      var invokeCallback = false;

      if (children === null) {
        invokeCallback = true;
      } else {
        switch (type) {
          case 'string':
          case 'number':
            invokeCallback = true;
            break;

          case 'object':
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
            }

        }
      }

      if (invokeCallback) {
        var _child = children;
        var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows:

        var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

        if (Array.isArray(mappedChild)) {
          var escapedChildKey = '';

          if (childKey != null) {
            escapedChildKey = escapeUserProvidedKey(childKey) + '/';
          }

          mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
            return c;
          });
        } else if (mappedChild != null) {
          if (isValidElement(mappedChild)) {
            mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
            escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
          }

          array.push(mappedChild);
        }

        return 1;
      }

      var child;
      var nextName;
      var subtreeCount = 0; // Count of children found in the current subtree.

      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getElementKey(child, i);
          subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        }
      } else {
        var iteratorFn = getIteratorFn(children);

        if (typeof iteratorFn === 'function') {
          var iterableChildren = children;
          {
            // Warn about using Maps as children
            if (iteratorFn === iterableChildren.entries) {
              if (!didWarnAboutMaps) {
                warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
              }

              didWarnAboutMaps = true;
            }
          }
          var iterator = iteratorFn.call(iterableChildren);
          var step;
          var ii = 0;

          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getElementKey(child, ii++);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
          }
        } else if (type === 'object') {
          var childrenString = '' + children;
          {
            {
              throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
        }
      }

      return subtreeCount;
    }
    /**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
     *
     * The provided mapFunction(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */


    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }

      var result = [];
      var count = 0;
      mapIntoArray(children, result, '', '', function (child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    /**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrencount
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */


    function countChildren(children) {
      var n = 0;
      mapChildren(children, function () {
        n++; // Don't return anything
      });
      return n;
    }
    /**
     * Iterates through children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */


    function forEachChildren(children, forEachFunc, forEachContext) {
      mapChildren(children, function () {
        forEachFunc.apply(this, arguments); // Don't return anything.
      }, forEachContext);
    }
    /**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
     */


    function toArray(children) {
      return mapChildren(children, function (child) {
        return child;
      }) || [];
    }
    /**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only `ReactElement` contained in the
     * structure.
     */


    function onlyChild(children) {
      if (!isValidElement(children)) {
        {
          throw Error("React.Children.only expected to receive a single React element child.");
        }
      }

      return children;
    }

    function createContext(defaultValue, calculateChangedBits) {
      if (calculateChangedBits === undefined) {
        calculateChangedBits = null;
      } else {
        {
          if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
            error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
          }
        }
      }

      var context = {
        $$typeof: REACT_CONTEXT_TYPE,
        _calculateChangedBits: calculateChangedBits,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null
      };
      context.Provider = {
        $$typeof: REACT_PROVIDER_TYPE,
        _context: context
      };
      var hasWarnedAboutUsingNestedContextConsumers = false;
      var hasWarnedAboutUsingConsumerProvider = false;
      var hasWarnedAboutDisplayNameOnConsumer = false;
      {
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
          $$typeof: REACT_CONTEXT_TYPE,
          _context: context,
          _calculateChangedBits: context._calculateChangedBits
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

        Object.defineProperties(Consumer, {
          Provider: {
            get: function get() {
              if (!hasWarnedAboutUsingConsumerProvider) {
                hasWarnedAboutUsingConsumerProvider = true;
                error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
              }

              return context.Provider;
            },
            set: function set(_Provider) {
              context.Provider = _Provider;
            }
          },
          _currentValue: {
            get: function get() {
              return context._currentValue;
            },
            set: function set(_currentValue) {
              context._currentValue = _currentValue;
            }
          },
          _currentValue2: {
            get: function get() {
              return context._currentValue2;
            },
            set: function set(_currentValue2) {
              context._currentValue2 = _currentValue2;
            }
          },
          _threadCount: {
            get: function get() {
              return context._threadCount;
            },
            set: function set(_threadCount) {
              context._threadCount = _threadCount;
            }
          },
          Consumer: {
            get: function get() {
              if (!hasWarnedAboutUsingNestedContextConsumers) {
                hasWarnedAboutUsingNestedContextConsumers = true;
                error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
              }

              return context.Consumer;
            }
          },
          displayName: {
            get: function get() {
              return context.displayName;
            },
            set: function set(displayName) {
              if (!hasWarnedAboutDisplayNameOnConsumer) {
                warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
                hasWarnedAboutDisplayNameOnConsumer = true;
              }
            }
          }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

        context.Consumer = Consumer;
      }
      {
        context._currentRenderer = null;
        context._currentRenderer2 = null;
      }
      return context;
    }

    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;

    function lazyInitializer(payload) {
      if (payload._status === Uninitialized) {
        var ctor = payload._result;
        var thenable = ctor(); // Transition to the next state.

        var pending = payload;
        pending._status = Pending;
        pending._result = thenable;
        thenable.then(function (moduleObject) {
          if (payload._status === Pending) {
            var defaultExport = moduleObject["default"];
            {
              if (defaultExport === undefined) {
                error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
                'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
              }
            } // Transition to the next state.

            var resolved = payload;
            resolved._status = Resolved;
            resolved._result = defaultExport;
          }
        }, function (error) {
          if (payload._status === Pending) {
            // Transition to the next state.
            var rejected = payload;
            rejected._status = Rejected;
            rejected._result = error;
          }
        });
      }

      if (payload._status === Resolved) {
        return payload._result;
      } else {
        throw payload._result;
      }
    }

    function lazy(ctor) {
      var payload = {
        // We use these fields to store the result.
        _status: -1,
        _result: ctor
      };
      var lazyType = {
        $$typeof: REACT_LAZY_TYPE,
        _payload: payload,
        _init: lazyInitializer
      };
      {
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes; // $FlowFixMe

        Object.defineProperties(lazyType, {
          defaultProps: {
            configurable: true,
            get: function get() {
              return defaultProps;
            },
            set: function set(newDefaultProps) {
              error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              defaultProps = newDefaultProps; // Match production behavior more closely:
              // $FlowFixMe

              Object.defineProperty(lazyType, 'defaultProps', {
                enumerable: true
              });
            }
          },
          propTypes: {
            configurable: true,
            get: function get() {
              return propTypes;
            },
            set: function set(newPropTypes) {
              error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              propTypes = newPropTypes; // Match production behavior more closely:
              // $FlowFixMe

              Object.defineProperty(lazyType, 'propTypes', {
                enumerable: true
              });
            }
          }
        });
      }
      return lazyType;
    }

    function forwardRef(render) {
      {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
          error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
        } else if (typeof render !== 'function') {
          error('forwardRef requires a render function but was given %s.', render === null ? 'null' : _typeof(render));
        } else {
          if (render.length !== 0 && render.length !== 2) {
            error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
          }
        }

        if (render != null) {
          if (render.defaultProps != null || render.propTypes != null) {
            error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
          }
        }
      }
      var elementType = {
        $$typeof: REACT_FORWARD_REF_TYPE,
        render: render
      };
      {
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
          enumerable: false,
          configurable: true,
          get: function get() {
            return ownName;
          },
          set: function set(name) {
            ownName = name;

            if (render.displayName == null) {
              render.displayName = name;
            }
          }
        });
      }
      return elementType;
    } // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.


    var enableScopeAPI = false; // Experimental Create Event Handle API.

    function isValidElementType(type) {
      if (typeof type === 'string' || typeof type === 'function') {
        return true;
      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


      if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
        return true;
      }

      if (_typeof(type) === 'object' && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
          return true;
        }
      }

      return false;
    }

    function memo(type, compare) {
      {
        if (!isValidElementType(type)) {
          error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : _typeof(type));
        }
      }
      var elementType = {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: compare === undefined ? null : compare
      };
      {
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
          enumerable: false,
          configurable: true,
          get: function get() {
            return ownName;
          },
          set: function set(name) {
            ownName = name;

            if (type.displayName == null) {
              type.displayName = name;
            }
          }
        });
      }
      return elementType;
    }

    function resolveDispatcher() {
      var dispatcher = ReactCurrentDispatcher.current;

      if (!(dispatcher !== null)) {
        {
          throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        }
      }

      return dispatcher;
    }

    function useContext(Context, unstable_observedBits) {
      var dispatcher = resolveDispatcher();
      {
        if (unstable_observedBits !== undefined) {
          error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
        } // TODO: add a more generic warning for invalid values.


        if (Context._context !== undefined) {
          var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
          // and nobody should be using this in existing code.

          if (realContext.Consumer === Context) {
            error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
          } else if (realContext.Provider === Context) {
            error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
          }
        }
      }
      return dispatcher.useContext(Context, unstable_observedBits);
    }

    function useState(initialState) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useState(initialState);
    }

    function useReducer(reducer, initialArg, init) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useReducer(reducer, initialArg, init);
    }

    function useRef(initialValue) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useRef(initialValue);
    }

    function useEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useEffect(create, deps);
    }

    function useLayoutEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useLayoutEffect(create, deps);
    }

    function useCallback(callback, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useCallback(callback, deps);
    }

    function useMemo(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useMemo(create, deps);
    }

    function useImperativeHandle(ref, create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useImperativeHandle(ref, create, deps);
    }

    function useDebugValue(value, formatterFn) {
      {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
      }
    } // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.


    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;

    function disabledLog() {}

    disabledLog.__reactDisabledLog = true;

    function disableLogs() {
      {
        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        disabledDepth++;
      }
    }

    function reenableLogs() {
      {
        disabledDepth--;

        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          var props = {
            configurable: true,
            enumerable: true,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            log: _assign({}, props, {
              value: prevLog
            }),
            info: _assign({}, props, {
              value: prevInfo
            }),
            warn: _assign({}, props, {
              value: prevWarn
            }),
            error: _assign({}, props, {
              value: prevError
            }),
            group: _assign({}, props, {
              value: prevGroup
            }),
            groupCollapsed: _assign({}, props, {
              value: prevGroupCollapsed
            }),
            groupEnd: _assign({}, props, {
              value: prevGroupEnd
            })
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        if (disabledDepth < 0) {
          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
        }
      }
    }

    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;

    function describeBuiltInComponentFrame(name, source, ownerFn) {
      {
        if (prefix === undefined) {
          // Extract the VM specific prefix used by each line.
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
          }
        } // We use the prefix to ensure our stacks line up with native stack frames.


        return '\n' + prefix + name;
      }
    }

    var reentry = false;
    var componentFrameCache;
    {
      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
      componentFrameCache = new PossiblyWeakMap();
    }

    function describeNativeComponentFrame(fn, construct) {
      // If something asked for a stack inside a fake render, it should get ignored.
      if (!fn || reentry) {
        return '';
      }

      {
        var frame = componentFrameCache.get(fn);

        if (frame !== undefined) {
          return frame;
        }
      }
      var control;
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

      Error.prepareStackTrace = undefined;
      var previousDispatcher;
      {
        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.

        ReactCurrentDispatcher$1.current = null;
        disableLogs();
      }

      try {
        // This should throw.
        if (construct) {
          // Something should be setting the props in the constructor.
          var Fake = function Fake() {
            throw Error();
          }; // $FlowFixMe


          Object.defineProperty(Fake.prototype, 'props', {
            set: function set() {
              // We use a throwing setter instead of frozen or non-writable props
              // because that won't throw in a non-strict mode function.
              throw Error();
            }
          });

          if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' && Reflect.construct) {
            // We construct a different control for this case to include any extra
            // frames added by the construct call.
            try {
              Reflect.construct(Fake, []);
            } catch (x) {
              control = x;
            }

            Reflect.construct(fn, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (x) {
              control = x;
            }

            fn.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            control = x;
          }

          fn();
        }
      } catch (sample) {
        // This is inlined manually because closure doesn't do it for us.
        if (sample && control && typeof sample.stack === 'string') {
          // This extracts the first frame from the sample that isn't also in the control.
          // Skipping one frame that we assume is the frame that calls the two.
          var sampleLines = sample.stack.split('\n');
          var controlLines = control.stack.split('\n');
          var s = sampleLines.length - 1;
          var c = controlLines.length - 1;

          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
            // We expect at least one stack frame to be shared.
            // Typically this will be the root most one. However, stack frames may be
            // cut off due to maximum stack limits. In this case, one maybe cut off
            // earlier than the other. We assume that the sample is longer or the same
            // and there for cut off earlier. So we should find the root most frame in
            // the sample somewhere in the control.
            c--;
          }

          for (; s >= 1 && c >= 0; s--, c--) {
            // Next we find the first one that isn't the same which should be the
            // frame that called our sample function and the control.
            if (sampleLines[s] !== controlLines[c]) {
              // In V8, the first line is describing the message but other VMs don't.
              // If we're about to return the first line, and the control is also on the same
              // line, that's a pretty good indicator that our sample threw at same line as
              // the control. I.e. before we entered the sample frame. So we ignore this result.
              // This can happen if you passed a class to function component, or non-function.
              if (s !== 1 || c !== 1) {
                do {
                  s--;
                  c--; // We may still have similar intermediate frames from the construct call.
                  // The next one that isn't the same should be our match though.

                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                    {
                      if (typeof fn === 'function') {
                        componentFrameCache.set(fn, _frame);
                      }
                    } // Return the line we found.

                    return _frame;
                  }
                } while (s >= 1 && c >= 0);
              }

              break;
            }
          }
        }
      } finally {
        reentry = false;
        {
          ReactCurrentDispatcher$1.current = previousDispatcher;
          reenableLogs();
        }
        Error.prepareStackTrace = previousPrepareStackTrace;
      } // Fallback to just using the name if we couldn't make it throw.


      var name = fn ? fn.displayName || fn.name : '';
      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
      {
        if (typeof fn === 'function') {
          componentFrameCache.set(fn, syntheticFrame);
        }
      }
      return syntheticFrame;
    }

    function describeFunctionComponentFrame(fn, source, ownerFn) {
      {
        return describeNativeComponentFrame(fn, false);
      }
    }

    function shouldConstruct(Component) {
      var prototype = Component.prototype;
      return !!(prototype && prototype.isReactComponent);
    }

    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
      if (type == null) {
        return '';
      }

      if (typeof type === 'function') {
        {
          return describeNativeComponentFrame(type, shouldConstruct(type));
        }
      }

      if (typeof type === 'string') {
        return describeBuiltInComponentFrame(type);
      }

      switch (type) {
        case exports.Suspense:
          return describeBuiltInComponentFrame('Suspense');

        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame('SuspenseList');
      }

      if (_typeof(type) === 'object') {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeFunctionComponentFrame(type.render);

          case REACT_MEMO_TYPE:
            // Memo may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

          case REACT_BLOCK_TYPE:
            return describeFunctionComponentFrame(type._render);

          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                // Lazy may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {}
            }
        }
      }

      return '';
    }

    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

    function setCurrentlyValidatingElement(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
        }
      }
    }

    function checkPropTypes(typeSpecs, values, location, componentName, element) {
      {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(Object.prototype.hasOwnProperty);

        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.

            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                err.name = 'Invariant Violation';
                throw err;
              }

              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
              error$1 = ex;
            }

            if (error$1 && !(error$1 instanceof Error)) {
              setCurrentlyValidatingElement(element);
              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, _typeof(error$1));
              setCurrentlyValidatingElement(null);
            }

            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error$1.message] = true;
              setCurrentlyValidatingElement(element);
              error('Failed %s type: %s', location, error$1.message);
              setCurrentlyValidatingElement(null);
            }
          }
        }
      }
    }

    function setCurrentlyValidatingElement$1(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          setExtraStackFrame(stack);
        } else {
          setExtraStackFrame(null);
        }
      }
    }

    var propTypesMisspellWarningShown;
    {
      propTypesMisspellWarningShown = false;
    }

    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = getComponentName(ReactCurrentOwner.current.type);

        if (name) {
          return '\n\nCheck the render method of `' + name + '`.';
        }
      }

      return '';
    }

    function getSourceInfoErrorAddendum(source) {
      if (source !== undefined) {
        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
        var lineNumber = source.lineNumber;
        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
      }

      return '';
    }

    function getSourceInfoErrorAddendumForProps(elementProps) {
      if (elementProps !== null && elementProps !== undefined) {
        return getSourceInfoErrorAddendum(elementProps.__source);
      }

      return '';
    }
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */


    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      var info = getDeclarationErrorAddendum();

      if (!info) {
        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

        if (parentName) {
          info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
      }

      return info;
    }
    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */


    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }

      element._store.validated = true;
      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
        return;
      }

      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
      // property, it may be the creator of the child that's responsible for
      // assigning it a key.

      var childOwner = '';

      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
      }

      {
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
      }
    }
    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */


    function validateChildKeys(node, parentType) {
      if (_typeof(node) !== 'object') {
        return;
      }

      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];

          if (isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (isValidElement(node)) {
        // This element was passed in a valid location.
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = getIteratorFn(node);

        if (typeof iteratorFn === 'function') {
          // Entry iterators used to provide implicit keys,
          // but now we print a separate warning for them later.
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;

            while (!(step = iterator.next()).done) {
              if (isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }
    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */


    function validatePropTypes(element) {
      {
        var type = element.type;

        if (type === null || type === undefined || typeof type === 'string') {
          return;
        }

        var propTypes;

        if (typeof type === 'function') {
          propTypes = type.propTypes;
        } else if (_typeof(type) === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) {
          propTypes = type.propTypes;
        } else {
          return;
        }

        if (propTypes) {
          // Intentionally inside to avoid triggering lazy initializers:
          var name = getComponentName(type);
          checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

          var _name = getComponentName(type);

          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }

        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
        }
      }
    }
    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */


    function validateFragmentProps(fragment) {
      {
        var keys = Object.keys(fragment.props);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];

          if (key !== 'children' && key !== 'key') {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
            setCurrentlyValidatingElement$1(null);
            break;
          }
        }

        if (fragment.ref !== null) {
          setCurrentlyValidatingElement$1(fragment);
          error('Invalid attribute `ref` supplied to `React.Fragment`.');
          setCurrentlyValidatingElement$1(null);
        }
      }
    }

    function createElementWithValidation(type, props, children) {
      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
      // succeed and there will likely be errors in render.

      if (!validType) {
        var info = '';

        if (type === undefined || _typeof(type) === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
        }

        var sourceInfo = getSourceInfoErrorAddendumForProps(props);

        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        var typeString;

        if (type === null) {
          typeString = 'null';
        } else if (Array.isArray(type)) {
          typeString = 'array';
        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
          typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
          info = ' Did you accidentally export a JSX literal instead of a component?';
        } else {
          typeString = _typeof(type);
        }

        {
          error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
        }
      }

      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
      // TODO: Drop this when these are no longer allowed as the type argument.

      if (element == null) {
        return element;
      } // Skip key warning if the type isn't valid since our key validation logic
      // doesn't expect a non-string/function type and can throw confusing errors.
      // We don't want exception behavior to differ between dev and prod.
      // (Rendering will throw with a helpful message and as soon as the type is
      // fixed, the key warnings will appear.)


      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }

      if (type === exports.Fragment) {
        validateFragmentProps(element);
      } else {
        validatePropTypes(element);
      }

      return element;
    }

    var didWarnAboutDeprecatedCreateFactory = false;

    function createFactoryWithValidation(type) {
      var validatedFactory = createElementWithValidation.bind(null, type);
      validatedFactory.type = type;
      {
        if (!didWarnAboutDeprecatedCreateFactory) {
          didWarnAboutDeprecatedCreateFactory = true;
          warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
        } // Legacy hook: remove it


        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function get() {
            warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
      return validatedFactory;
    }

    function cloneElementWithValidation(element, props, children) {
      var newElement = cloneElement.apply(this, arguments);

      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }

      validatePropTypes(newElement);
      return newElement;
    }

    {
      try {
        var frozenObject = Object.freeze({});
        /* eslint-disable no-new */

        new Map([[frozenObject, null]]);
        new Set([frozenObject]);
        /* eslint-enable no-new */
      } catch (e) {}
    }
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
      map: mapChildren,
      forEach: forEachChildren,
      count: countChildren,
      toArray: toArray,
      only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component;
    exports.PureComponent = PureComponent;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useEffect = useEffect;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.version = ReactVersion;
  })();
}

/***/ }),

/***/ "../../node_modules/react/index.js":
/*!*****************************************!*
  !*** ../../node_modules/react/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "../../node_modules/react/cjs/react.development.js");
}

/***/ }),

/***/ "./src/Components/Lookup/LookupLabel.tsx":
/*!***********************************************!*
  !*** ./src/Components/Lookup/LookupLabel.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LookupLabel": () => /* binding */ LookupLabel
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service */ "./src/Components/Lookup/Service.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "../../node_modules/antd/es/skeleton/index.js");



var LookupLabel = function LookupLabel(_a) {
  var id = _a.id,
      onResolve = _a.onResolve,
      url = _a.url;

  var _b = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    isLoading: true
  }),
      state = _b[0],
      setState = _b[1];

  var isLoading = state.isLoading,
      rs = state.rs;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    (0,_Service__WEBPACK_IMPORTED_MODULE_1__.lookup)(url)(id).then(function (rs) {
      setState({
        isLoading: false,
        rs: rs
      });
    })["catch"](function () {
      setState({
        isLoading: false
      });
    });
  }, [id]);
  return isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default.Button, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, onResolve(rs));
};

/***/ }),

/***/ "./src/Components/Lookup/Service.ts":
/*!******************************************!*
  !*** ./src/Components/Lookup/Service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lookup": () => /* binding */ lookup
/* harmony export */ });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Service */ "./src/Service.ts");

var lookup = function lookup(url) {
  return function (id) {
    return _Service__WEBPACK_IMPORTED_MODULE_0__.API.get(url + "/" + id);
  };
};

/***/ }),

/***/ "./src/Service.ts":
/*!************************!*
  !*** ./src/Service.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API": () => /* binding */ API
/* harmony export */ });
var API = {
  get: function get(url) {
    return fetch(url).then(function (response) {
      return response.json();
    });
  }
};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API": () => /* reexport safe */ _Service__WEBPACK_IMPORTED_MODULE_0__.API,
/* harmony export */   "LookupLabel": () => /* reexport safe */ _Components_Lookup_LookupLabel__WEBPACK_IMPORTED_MODULE_1__.LookupLabel
/* harmony export */ });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./src/Service.ts");
/* harmony import */ var _Components_Lookup_LookupLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Lookup/LookupLabel */ "./src/Components/Lookup/LookupLabel.tsx");




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()

));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlci5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2NhbGVuZGFyL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvY29uZmlnLXByb3ZpZGVyL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2NvbmZpZy1wcm92aWRlci9yZW5kZXJFbXB0eS5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZGF0ZS1waWNrZXIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9lbXB0eS9lbXB0eS5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZW1wdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2VtcHR5L3NpbXBsZS5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyLmpzIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9sb2NhbGUtcHJvdmlkZXIvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbG9jYWxlLXByb3ZpZGVyL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2xvY2FsZS9kZWZhdWx0LmpzIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9za2VsZXRvbi9BdmF0YXIuanMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3NrZWxldG9uL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc2tlbGV0b24vRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc2tlbGV0b24vSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3NrZWxldG9uL0lucHV0LmpzIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9za2VsZXRvbi9QYXJhZ3JhcGguanMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3NrZWxldG9uL1NrZWxldG9uLmpzIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9za2VsZXRvbi9UaXRsZS5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc2tlbGV0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RpbWUtcGlja2VyL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS8uLi9ub2RlX21vZHVsZXMvb21pdC5qcy9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL3JjLXBhZ2luYXRpb24vZXMvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS8uLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS8uL3NyYy9Db21wb25lbnRzL0xvb2t1cC9Mb29rdXBMYWJlbC50c3giLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4vc3JjL0NvbXBvbmVudHMvTG9va3VwL1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4vc3JjL1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vQHByYWdtYXRpYy91aS1jb3JlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvd2VicGFjay9ydW50aW1lL2FtZCBvcHRpb25zIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AcHJhZ21hdGljL3VpLWNvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BwcmFnbWF0aWMvdWktY29yZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiX2FycmF5TGlrZVRvQXJyYXkiLCJhcnIiLCJsZW4iLCJsZW5ndGgiLCJpIiwiYXJyMiIsIkFycmF5IiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5TGlrZVRvQXJyYXkiLCJyZXF1aXJlIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiaXNBcnJheSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwiaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwicG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9jcmVhdGVTdXBlciIsIkRlcml2ZWQiLCJoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2NyZWF0ZVN1cGVySW50ZXJuYWwiLCJTdXBlciIsInJlc3VsdCIsIk5ld1RhcmdldCIsImNvbnN0cnVjdG9yIiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImFyZ3VtZW50cyIsImFwcGx5IiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwidmFsdWUiLCJfZXh0ZW5kcyIsImFzc2lnbiIsInNvdXJjZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9nZXRQcm90b3R5cGVPZiIsIm8iLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJzaGFtIiwiUHJveHkiLCJEYXRlIiwidG9TdHJpbmciLCJlIiwiX2l0ZXJhYmxlVG9BcnJheSIsIml0ZXIiLCJTeW1ib2wiLCJpdGVyYXRvciIsImZyb20iLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfdHlwZW9mIiwiYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfc2V0UHJvdG90eXBlT2YiLCJwIiwiYXJyYXlXaXRob3V0SG9sZXMiLCJpdGVyYWJsZVRvQXJyYXkiLCJ1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm5vbkl0ZXJhYmxlU3ByZWFkIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwibWluTGVuIiwibiIsInNsaWNlIiwibmFtZSIsInRlc3QiLCJlblVTIiwiQ29uZmlnQ29udGV4dCIsIlJlYWN0IiwiZ2V0UHJlZml4Q2xzIiwic3VmZml4Q2xzIiwiY3VzdG9taXplUHJlZml4Q2xzIiwiY29uY2F0IiwicmVuZGVyRW1wdHkiLCJkZWZhdWx0UmVuZGVyRW1wdHkiLCJDb25maWdDb25zdW1lciIsIkNvbnN1bWVyIiwid2l0aENvbmZpZ0NvbnN1bWVyIiwiY29uZmlnIiwid2l0aENvbmZpZ0NvbnN1bWVyRnVuYyIsIkNvbXBvbmVudCIsIlNGQyIsImNvbmZpZ1Byb3BzIiwiYmFzaWNQcmVmaXhDbHMiLCJwcmVmaXhDbHMiLCJjb25zIiwiZGlzcGxheU5hbWUiLCJjb21wb25lbnROYW1lIiwiX3JlZiIsInByZWZpeCIsIkVtcHR5IiwiaW1hZ2UiLCJQUkVTRU5URURfSU1BR0VfU0lNUExFIiwiY2xhc3NOYW1lIiwibG9jYWxlIiwibGFuZyIsInBsYWNlaG9sZGVyIiwieWVhclBsYWNlaG9sZGVyIiwicXVhcnRlclBsYWNlaG9sZGVyIiwibW9udGhQbGFjZWhvbGRlciIsIndlZWtQbGFjZWhvbGRlciIsInJhbmdlUGxhY2Vob2xkZXIiLCJyYW5nZVllYXJQbGFjZWhvbGRlciIsInJhbmdlTW9udGhQbGFjZWhvbGRlciIsInJhbmdlV2Vla1BsYWNlaG9sZGVyIiwiQ2FsZW5kYXJMb2NhbGUiLCJ0aW1lUGlja2VyTG9jYWxlIiwiVGltZVBpY2tlckxvY2FsZSIsIl9SZWFjdCR1c2VDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwieG1sbnMiLCJmaWxsIiwiZmlsbFJ1bGUiLCJ0cmFuc2Zvcm0iLCJjeCIsImN5IiwicngiLCJyeSIsImQiLCJfX3Jlc3QiLCJzIiwidCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImRlZmF1bHRFbXB0eUltZyIsIkRlZmF1bHRFbXB0eUltZyIsInNpbXBsZUVtcHR5SW1nIiwiU2ltcGxlRW1wdHlJbWciLCJfYSIsIl9hJGltYWdlIiwiZGVzY3JpcHRpb24iLCJjaGlsZHJlbiIsImltYWdlU3R5bGUiLCJyZXN0UHJvcHMiLCJkaXJlY3Rpb24iLCJMb2NhbGVSZWNlaXZlciIsIl9jbGFzc05hbWVzIiwiZGVzIiwiYWx0IiwiaW1hZ2VOb2RlIiwic3JjIiwiY2xhc3NOYW1lcyIsInN0eWxlIiwiUFJFU0VOVEVEX0lNQUdFX0RFRkFVTFQiLCJTaW1wbGUiLCJfUmVhY3QkQ29tcG9uZW50IiwiX3N1cGVyIiwiZ2V0TG9jYWxlIiwiX3RoaXMkcHJvcHMiLCJkZWZhdWx0TG9jYWxlIiwiZGVmYXVsdExvY2FsZURhdGEiLCJhbnRMb2NhbGUiLCJjb250ZXh0IiwibG9jYWxlRnJvbUNvbnRleHQiLCJnZXRMb2NhbGVDb2RlIiwibG9jYWxlQ29kZSIsImV4aXN0IiwicmVuZGVyIiwiZGVmYXVsdFByb3BzIiwiY29udGV4dFR5cGUiLCJMb2NhbGVDb250ZXh0IiwidXNlTG9jYWxlUmVjZWl2ZXIiLCJjb21wb25lbnRMb2NhbGUiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwidHlwZVRlbXBsYXRlIiwibG9jYWxlVmFsdWVzIiwiUGFnaW5hdGlvbiIsIkRhdGVQaWNrZXIiLCJUaW1lUGlja2VyIiwiQ2FsZW5kYXIiLCJnbG9iYWwiLCJUYWJsZSIsImZpbHRlclRpdGxlIiwiZmlsdGVyQ29uZmlybSIsImZpbHRlclJlc2V0IiwiZmlsdGVyRW1wdHlUZXh0IiwiZW1wdHlUZXh0Iiwic2VsZWN0QWxsIiwic2VsZWN0SW52ZXJ0Iiwic2VsZWN0aW9uQWxsIiwic29ydFRpdGxlIiwiZXhwYW5kIiwiY29sbGFwc2UiLCJ0cmlnZ2VyRGVzYyIsInRyaWdnZXJBc2MiLCJjYW5jZWxTb3J0IiwiTW9kYWwiLCJva1RleHQiLCJjYW5jZWxUZXh0IiwianVzdE9rVGV4dCIsIlBvcGNvbmZpcm0iLCJUcmFuc2ZlciIsInRpdGxlcyIsInNlYXJjaFBsYWNlaG9sZGVyIiwiaXRlbVVuaXQiLCJpdGVtc1VuaXQiLCJyZW1vdmUiLCJzZWxlY3RDdXJyZW50IiwicmVtb3ZlQ3VycmVudCIsInJlbW92ZUFsbCIsIlVwbG9hZCIsInVwbG9hZGluZyIsInJlbW92ZUZpbGUiLCJ1cGxvYWRFcnJvciIsInByZXZpZXdGaWxlIiwiZG93bmxvYWRGaWxlIiwiSWNvbiIsImljb24iLCJUZXh0IiwiZWRpdCIsImNvcHkiLCJjb3BpZWQiLCJQYWdlSGVhZGVyIiwiYmFjayIsIkZvcm0iLCJvcHRpb25hbCIsImRlZmF1bHRWYWxpZGF0ZU1lc3NhZ2VzIiwicmVxdWlyZWQiLCJ3aGl0ZXNwYWNlIiwiZGF0ZSIsImZvcm1hdCIsInBhcnNlIiwiaW52YWxpZCIsInR5cGVzIiwic3RyaW5nIiwibWV0aG9kIiwiYXJyYXkiLCJvYmplY3QiLCJudW1iZXIiLCJpbnRlZ2VyIiwicmVnZXhwIiwiZW1haWwiLCJ1cmwiLCJoZXgiLCJtaW4iLCJtYXgiLCJyYW5nZSIsInBhdHRlcm4iLCJtaXNtYXRjaCIsIlNrZWxldG9uQXZhdGFyIiwicmVuZGVyU2tlbGV0b25BdmF0YXIiLCJhY3RpdmUiLCJvdGhlclByb3BzIiwib21pdCIsImNscyIsIkVsZW1lbnQiLCJzaXplIiwic2hhcGUiLCJTa2VsZXRvbkJ1dHRvbiIsInJlbmRlclNrZWxldG9uQnV0dG9uIiwiX2NsYXNzTmFtZXMyIiwic2l6ZUNscyIsInNoYXBlQ2xzIiwic2l6ZVN0eWxlIiwibGluZUhlaWdodCIsInBhdGgiLCJTa2VsZXRvbkltYWdlIiwicmVuZGVyU2tlbGV0b25JbWFnZSIsIlNrZWxldG9uSW5wdXQiLCJyZW5kZXJTa2VsZXRvbklucHV0IiwiUGFyYWdyYXBoIiwiZ2V0V2lkdGgiLCJpbmRleCIsIl9wcm9wcyRyb3dzIiwicm93cyIsInJvd0xpc3QiLCJtYXAiLCJfIiwiZ2V0Q29tcG9uZW50UHJvcHMiLCJwcm9wIiwiZ2V0QXZhdGFyQmFzaWNQcm9wcyIsImhhc1RpdGxlIiwiaGFzUGFyYWdyYXBoIiwiZ2V0VGl0bGVCYXNpY1Byb3BzIiwiaGFzQXZhdGFyIiwiZ2V0UGFyYWdyYXBoQmFzaWNQcm9wcyIsImJhc2ljUHJvcHMiLCJTa2VsZXRvbiIsInJlbmRlclNrZWxldG9uIiwibG9hZGluZyIsImF2YXRhciIsInRpdGxlIiwicGFyYWdyYXBoIiwicm91bmQiLCJhdmF0YXJOb2RlIiwiYXZhdGFyUHJvcHMiLCJjb250ZW50Tm9kZSIsIiR0aXRsZSIsInRpdGxlUHJvcHMiLCJUaXRsZSIsInBhcmFncmFwaE5vZGUiLCJwYXJhZ3JhcGhQcm9wcyIsIkJ1dHRvbiIsIkF2YXRhciIsIklucHV0IiwiSW1hZ2UiLCJoYXNPd24iLCJjbGFzc2VzIiwiYXJnIiwiYXJnVHlwZSIsInB1c2giLCJpbm5lciIsImpvaW4iLCJkZWZpbmUiLCJ3aW5kb3ciLCJwcm9wSXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJzaG91bGRVc2VOYXRpdmUiLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsInRlc3QzIiwic3BsaXQiLCJmb3JFYWNoIiwibGV0dGVyIiwia2V5cyIsImVyciIsInRvIiwic3ltYm9scyIsImZpZWxkcyIsInNoYWxsb3dDb3B5IiwiaXRlbXNfcGVyX3BhZ2UiLCJqdW1wX3RvIiwianVtcF90b19jb25maXJtIiwicGFnZSIsInByZXZfcGFnZSIsIm5leHRfcGFnZSIsInByZXZfNSIsIm5leHRfNSIsInByZXZfMyIsIm5leHRfMyIsInRvZGF5Iiwibm93IiwiYmFja1RvVG9kYXkiLCJvayIsImNsZWFyIiwibW9udGgiLCJ5ZWFyIiwidGltZVNlbGVjdCIsImRhdGVTZWxlY3QiLCJ3ZWVrU2VsZWN0IiwibW9udGhTZWxlY3QiLCJ5ZWFyU2VsZWN0IiwiZGVjYWRlU2VsZWN0IiwieWVhckZvcm1hdCIsImRhdGVGb3JtYXQiLCJkYXlGb3JtYXQiLCJkYXRlVGltZUZvcm1hdCIsIm1vbnRoQmVmb3JlWWVhciIsInByZXZpb3VzTW9udGgiLCJuZXh0TW9udGgiLCJwcmV2aW91c1llYXIiLCJuZXh0WWVhciIsInByZXZpb3VzRGVjYWRlIiwibmV4dERlY2FkZSIsInByZXZpb3VzQ2VudHVyeSIsIm5leHRDZW50dXJ5IiwicHJvY2VzcyIsIl9hc3NpZ24iLCJSZWFjdFZlcnNpb24iLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJSRUFDVF9QT1JUQUxfVFlQRSIsIlJFQUNUX1BST1ZJREVSX1RZUEUiLCJSRUFDVF9DT05URVhUX1RZUEUiLCJSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIiwiUkVBQ1RfTUVNT19UWVBFIiwiUkVBQ1RfTEFaWV9UWVBFIiwiUkVBQ1RfQkxPQ0tfVFlQRSIsIlJFQUNUX1NFUlZFUl9CTE9DS19UWVBFIiwiUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSIsIlJFQUNUX1NDT1BFX1RZUEUiLCJSRUFDVF9PUEFRVUVfSURfVFlQRSIsIlJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIiwiUkVBQ1RfT0ZGU0NSRUVOX1RZUEUiLCJSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUiLCJzeW1ib2xGb3IiLCJNQVlCRV9JVEVSQVRPUl9TWU1CT0wiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwibWF5YmVJdGVyYXRvciIsIlJlYWN0Q3VycmVudERpc3BhdGNoZXIiLCJjdXJyZW50IiwiUmVhY3RDdXJyZW50QmF0Y2hDb25maWciLCJ0cmFuc2l0aW9uIiwiUmVhY3RDdXJyZW50T3duZXIiLCJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwiY3VycmVudEV4dHJhU3RhY2tGcmFtZSIsInNldEV4dHJhU3RhY2tGcmFtZSIsInN0YWNrIiwiZ2V0Q3VycmVudFN0YWNrIiwiZ2V0U3RhY2tBZGRlbmR1bSIsImltcGwiLCJJc1NvbWVSZW5kZXJlckFjdGluZyIsIlJlYWN0U2hhcmVkSW50ZXJuYWxzIiwid2FybiIsIl9sZW4iLCJhcmdzIiwiX2tleSIsInByaW50V2FybmluZyIsImVycm9yIiwiX2xlbjIiLCJfa2V5MiIsImxldmVsIiwiYXJnc1dpdGhGb3JtYXQiLCJpdGVtIiwidW5zaGlmdCIsIkZ1bmN0aW9uIiwiY29uc29sZSIsImRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCIsIndhcm5Ob29wIiwicHVibGljSW5zdGFuY2UiLCJjYWxsZXJOYW1lIiwiX2NvbnN0cnVjdG9yIiwid2FybmluZ0tleSIsIlJlYWN0Tm9vcFVwZGF0ZVF1ZXVlIiwiaXNNb3VudGVkIiwiZW5xdWV1ZUZvcmNlVXBkYXRlIiwiY2FsbGJhY2siLCJlbnF1ZXVlUmVwbGFjZVN0YXRlIiwiY29tcGxldGVTdGF0ZSIsImVucXVldWVTZXRTdGF0ZSIsInBhcnRpYWxTdGF0ZSIsImVtcHR5T2JqZWN0IiwiZnJlZXplIiwidXBkYXRlciIsInJlZnMiLCJpc1JlYWN0Q29tcG9uZW50Iiwic2V0U3RhdGUiLCJFcnJvciIsImZvcmNlVXBkYXRlIiwiZGVwcmVjYXRlZEFQSXMiLCJyZXBsYWNlU3RhdGUiLCJkZWZpbmVEZXByZWNhdGlvbldhcm5pbmciLCJtZXRob2ROYW1lIiwiaW5mbyIsImdldCIsImZuTmFtZSIsIkNvbXBvbmVudER1bW15IiwiUHVyZUNvbXBvbmVudCIsInB1cmVDb21wb25lbnRQcm90b3R5cGUiLCJpc1B1cmVSZWFjdENvbXBvbmVudCIsImNyZWF0ZVJlZiIsInJlZk9iamVjdCIsInNlYWwiLCJnZXRXcmFwcGVkTmFtZSIsIm91dGVyVHlwZSIsImlubmVyVHlwZSIsIndyYXBwZXJOYW1lIiwiZnVuY3Rpb25OYW1lIiwiZ2V0Q29udGV4dE5hbWUiLCJ0eXBlIiwiZ2V0Q29tcG9uZW50TmFtZSIsInRhZyIsIkZyYWdtZW50IiwiUHJvZmlsZXIiLCJTdHJpY3RNb2RlIiwiU3VzcGVuc2UiLCIkJHR5cGVvZiIsInByb3ZpZGVyIiwiX2NvbnRleHQiLCJfcmVuZGVyIiwibGF6eUNvbXBvbmVudCIsInBheWxvYWQiLCJfcGF5bG9hZCIsImluaXQiLCJfaW5pdCIsIngiLCJSRVNFUlZFRF9QUk9QUyIsInJlZiIsIl9fc2VsZiIsIl9fc291cmNlIiwic3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24iLCJzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biIsImRpZFdhcm5BYm91dFN0cmluZ1JlZnMiLCJoYXNWYWxpZFJlZiIsImdldHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImlzUmVhY3RXYXJuaW5nIiwiaGFzVmFsaWRLZXkiLCJkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlciIsIndhcm5BYm91dEFjY2Vzc2luZ0tleSIsImRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyIiwid2FybkFib3V0QWNjZXNzaW5nUmVmIiwid2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkIiwic3RhdGVOb2RlIiwiUmVhY3RFbGVtZW50Iiwib3duZXIiLCJlbGVtZW50IiwiX293bmVyIiwiX3N0b3JlIiwiY3JlYXRlRWxlbWVudCIsInByb3BOYW1lIiwiY2hpbGRyZW5MZW5ndGgiLCJjaGlsZEFycmF5IiwiY2xvbmVBbmRSZXBsYWNlS2V5Iiwib2xkRWxlbWVudCIsIm5ld0tleSIsIm5ld0VsZW1lbnQiLCJfc2VsZiIsIl9zb3VyY2UiLCJjbG9uZUVsZW1lbnQiLCJpc1ZhbGlkRWxlbWVudCIsIlNFUEFSQVRPUiIsIlNVQlNFUEFSQVRPUiIsImVzY2FwZSIsImVzY2FwZVJlZ2V4IiwiZXNjYXBlckxvb2t1cCIsImVzY2FwZWRTdHJpbmciLCJyZXBsYWNlIiwibWF0Y2giLCJkaWRXYXJuQWJvdXRNYXBzIiwidXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgiLCJlc2NhcGVVc2VyUHJvdmlkZWRLZXkiLCJ0ZXh0IiwiZ2V0RWxlbWVudEtleSIsIm1hcEludG9BcnJheSIsImVzY2FwZWRQcmVmaXgiLCJuYW1lU29GYXIiLCJpbnZva2VDYWxsYmFjayIsIl9jaGlsZCIsIm1hcHBlZENoaWxkIiwiY2hpbGRLZXkiLCJlc2NhcGVkQ2hpbGRLZXkiLCJjIiwiY2hpbGQiLCJuZXh0TmFtZSIsInN1YnRyZWVDb3VudCIsIm5leHROYW1lUHJlZml4IiwiaXRlcmF0b3JGbiIsIml0ZXJhYmxlQ2hpbGRyZW4iLCJlbnRyaWVzIiwic3RlcCIsImlpIiwibmV4dCIsImRvbmUiLCJjaGlsZHJlblN0cmluZyIsIm1hcENoaWxkcmVuIiwiZnVuYyIsImNvdW50IiwiY291bnRDaGlsZHJlbiIsImZvckVhY2hDaGlsZHJlbiIsImZvckVhY2hGdW5jIiwiZm9yRWFjaENvbnRleHQiLCJ0b0FycmF5Iiwib25seUNoaWxkIiwiZGVmYXVsdFZhbHVlIiwiY2FsY3VsYXRlQ2hhbmdlZEJpdHMiLCJfY2FsY3VsYXRlQ2hhbmdlZEJpdHMiLCJfY3VycmVudFZhbHVlIiwiX2N1cnJlbnRWYWx1ZTIiLCJfdGhyZWFkQ291bnQiLCJQcm92aWRlciIsImhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzIiwiaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIiLCJoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciIsImRlZmluZVByb3BlcnRpZXMiLCJzZXQiLCJfUHJvdmlkZXIiLCJfY3VycmVudFJlbmRlcmVyIiwiX2N1cnJlbnRSZW5kZXJlcjIiLCJVbmluaXRpYWxpemVkIiwiUGVuZGluZyIsIlJlc29sdmVkIiwiUmVqZWN0ZWQiLCJsYXp5SW5pdGlhbGl6ZXIiLCJfc3RhdHVzIiwiY3RvciIsIl9yZXN1bHQiLCJ0aGVuYWJsZSIsInBlbmRpbmciLCJ0aGVuIiwibW9kdWxlT2JqZWN0IiwiZGVmYXVsdEV4cG9ydCIsInJlc29sdmVkIiwicmVqZWN0ZWQiLCJsYXp5IiwibGF6eVR5cGUiLCJwcm9wVHlwZXMiLCJuZXdEZWZhdWx0UHJvcHMiLCJuZXdQcm9wVHlwZXMiLCJmb3J3YXJkUmVmIiwiZWxlbWVudFR5cGUiLCJvd25OYW1lIiwiZW5hYmxlU2NvcGVBUEkiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJtZW1vIiwiY29tcGFyZSIsInJlc29sdmVEaXNwYXRjaGVyIiwiZGlzcGF0Y2hlciIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwidW5zdGFibGVfb2JzZXJ2ZWRCaXRzIiwicmVhbENvbnRleHQiLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwiaW5pdGlhbEFyZyIsInVzZVJlZiIsImluaXRpYWxWYWx1ZSIsInVzZUVmZmVjdCIsImRlcHMiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlRGVidWdWYWx1ZSIsImZvcm1hdHRlckZuIiwiZGlzYWJsZWREZXB0aCIsInByZXZMb2ciLCJwcmV2SW5mbyIsInByZXZXYXJuIiwicHJldkVycm9yIiwicHJldkdyb3VwIiwicHJldkdyb3VwQ29sbGFwc2VkIiwicHJldkdyb3VwRW5kIiwiZGlzYWJsZWRMb2ciLCJfX3JlYWN0RGlzYWJsZWRMb2ciLCJkaXNhYmxlTG9ncyIsImxvZyIsImdyb3VwIiwiZ3JvdXBDb2xsYXBzZWQiLCJncm91cEVuZCIsInJlZW5hYmxlTG9ncyIsIlJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSIsImRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lIiwib3duZXJGbiIsInRyaW0iLCJyZWVudHJ5IiwiY29tcG9uZW50RnJhbWVDYWNoZSIsIlBvc3NpYmx5V2Vha01hcCIsIldlYWtNYXAiLCJNYXAiLCJkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lIiwiZm4iLCJmcmFtZSIsImNvbnRyb2wiLCJwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlIiwicHJlcGFyZVN0YWNrVHJhY2UiLCJwcmV2aW91c0Rpc3BhdGNoZXIiLCJGYWtlIiwic2FtcGxlIiwic2FtcGxlTGluZXMiLCJjb250cm9sTGluZXMiLCJfZnJhbWUiLCJzeW50aGV0aWNGcmFtZSIsImRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSIsInNob3VsZENvbnN0cnVjdCIsImRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFViIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsIlJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSIsInNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50IiwiY2hlY2tQcm9wVHlwZXMiLCJ0eXBlU3BlY3MiLCJ2YWx1ZXMiLCJsb2NhdGlvbiIsImhhcyIsImJpbmQiLCJ0eXBlU3BlY05hbWUiLCJlcnJvciQxIiwiZXgiLCJtZXNzYWdlIiwic2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMSIsInByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duIiwiZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtIiwiZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0iLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzIiwiZWxlbWVudFByb3BzIiwib3duZXJIYXNLZXlVc2VXYXJuaW5nIiwiZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyIsInBhcmVudFR5cGUiLCJwYXJlbnROYW1lIiwidmFsaWRhdGVFeHBsaWNpdEtleSIsInZhbGlkYXRlZCIsImN1cnJlbnRDb21wb25lbnRFcnJvckluZm8iLCJjaGlsZE93bmVyIiwidmFsaWRhdGVDaGlsZEtleXMiLCJub2RlIiwidmFsaWRhdGVQcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJfbmFtZSIsImdldERlZmF1bHRQcm9wcyIsImlzUmVhY3RDbGFzc0FwcHJvdmVkIiwidmFsaWRhdGVGcmFnbWVudFByb3BzIiwiZnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24iLCJ2YWxpZFR5cGUiLCJzb3VyY2VJbmZvIiwidHlwZVN0cmluZyIsImRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5IiwiY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIiwidmFsaWRhdGVkRmFjdG9yeSIsImNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIiwiZnJvemVuT2JqZWN0IiwiU2V0IiwiY3JlYXRlRWxlbWVudCQxIiwiY2xvbmVFbGVtZW50JDEiLCJjcmVhdGVGYWN0b3J5IiwiQ2hpbGRyZW4iLCJvbmx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsU0FBU0EsaUJBQVQsQ0FBMkJDLEdBQTNCLEVBQWdDQyxHQUFoQyxFQUFxQztBQUNuQyxNQUFJQSxHQUFHLElBQUksSUFBUCxJQUFlQSxHQUFHLEdBQUdELEdBQUcsQ0FBQ0UsTUFBN0IsRUFBcUNELEdBQUcsR0FBR0QsR0FBRyxDQUFDRSxNQUFWOztBQUVyQyxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFSLEVBQVdDLElBQUksR0FBRyxJQUFJQyxLQUFKLENBQVVKLEdBQVYsQ0FBdkIsRUFBdUNFLENBQUMsR0FBR0YsR0FBM0MsRUFBZ0RFLENBQUMsRUFBakQsRUFBcUQ7QUFDbkRDLFFBQUksQ0FBQ0QsQ0FBRCxDQUFKLEdBQVVILEdBQUcsQ0FBQ0csQ0FBRCxDQUFiO0FBQ0Q7O0FBRUQsU0FBT0MsSUFBUDtBQUNEOztBQUVERSxNQUFNLENBQUNDLE9BQVAsR0FBaUJSLGlCQUFqQixDOzs7Ozs7Ozs7O0FDVkEsSUFBSVMsZ0JBQWdCLEdBQUdDLG1CQUFPLENBQUMseUZBQUQsQ0FBOUI7O0FBRUEsU0FBU0Msa0JBQVQsQ0FBNEJWLEdBQTVCLEVBQWlDO0FBQy9CLE1BQUlLLEtBQUssQ0FBQ00sT0FBTixDQUFjWCxHQUFkLENBQUosRUFBd0IsT0FBT1EsZ0JBQWdCLENBQUNSLEdBQUQsQ0FBdkI7QUFDekI7O0FBRURNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFp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VUFBQyxRQUFELEVBQVM7QUFBSyxxQkFBUSxDQUFSO0FBQTlCO0FBQThDO0FBRHBGLENBQVosQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTs7Ozs7OztVQ0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQSw4Qjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3RcIik7XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gcmVxdWlyZShcIi4vcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHtcbiAgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkge1xuICAgIHZhciBTdXBlciA9IGdldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IGdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVTdXBlcjsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdDsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiaW1wb3J0IGVuVVMgZnJvbSAnLi4vLi4vZGF0ZS1waWNrZXIvbG9jYWxlL2VuX1VTJztcbmV4cG9ydCBkZWZhdWx0IGVuVVM7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWZhdWx0UmVuZGVyRW1wdHkgZnJvbSAnLi9yZW5kZXJFbXB0eSc7XG5leHBvcnQgdmFyIENvbmZpZ0NvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIC8vIFdlIHByb3ZpZGUgYSBkZWZhdWx0IGZ1bmN0aW9uIGZvciBDb250ZXh0IHdpdGhvdXQgcHJvdmlkZXJcbiAgZ2V0UHJlZml4Q2xzOiBmdW5jdGlvbiBnZXRQcmVmaXhDbHMoc3VmZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpIHtcbiAgICBpZiAoY3VzdG9taXplUHJlZml4Q2xzKSByZXR1cm4gY3VzdG9taXplUHJlZml4Q2xzO1xuICAgIHJldHVybiBzdWZmaXhDbHMgPyBcImFudC1cIi5jb25jYXQoc3VmZml4Q2xzKSA6ICdhbnQnO1xuICB9LFxuICByZW5kZXJFbXB0eTogZGVmYXVsdFJlbmRlckVtcHR5XG59KTtcbmV4cG9ydCB2YXIgQ29uZmlnQ29uc3VtZXIgPSBDb25maWdDb250ZXh0LkNvbnN1bWVyO1xuLyoqIEBkZXByZWNhdGVkIFVzZSBob29rcyBpbnN0ZWFkLiBUaGlzIGlzIGEgbGVnYWN5IGZ1bmN0aW9uICovXG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoQ29uZmlnQ29uc3VtZXIoY29uZmlnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3aXRoQ29uZmlnQ29uc3VtZXJGdW5jKENvbXBvbmVudCkge1xuICAgIC8vIFdyYXAgd2l0aCBDb25maWdDb25zdW1lci4gU2luY2Ugd2UgbmVlZCBjb21wYXRpYmxlIHdpdGggcmVhY3QgMTUsIGJlIGNhcmUgd2hlbiB1c2luZyByZWYgbWV0aG9kc1xuICAgIHZhciBTRkMgPSBmdW5jdGlvbiBTRkMocHJvcHMpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbmZpZ1Byb3BzKSB7XG4gICAgICAgIHZhciBiYXNpY1ByZWZpeENscyA9IGNvbmZpZy5wcmVmaXhDbHM7XG4gICAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBjb25maWdQcm9wcy5nZXRQcmVmaXhDbHM7XG4gICAgICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHM7XG4gICAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoYmFzaWNQcmVmaXhDbHMsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBjb25maWdQcm9wcywgcHJvcHMsIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENsc1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGNvbnMgPSBDb21wb25lbnQuY29uc3RydWN0b3I7XG4gICAgdmFyIG5hbWUgPSBjb25zICYmIGNvbnMuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gICAgU0ZDLmRpc3BsYXlOYW1lID0gXCJ3aXRoQ29uZmlnQ29uc3VtZXIoXCIuY29uY2F0KG5hbWUsIFwiKVwiKTtcbiAgICByZXR1cm4gU0ZDO1xuICB9O1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFbXB0eSBmcm9tICcuLi9lbXB0eSc7XG5pbXBvcnQgeyBDb25maWdDb25zdW1lciB9IGZyb20gJy4nO1xuXG52YXIgcmVuZGVyRW1wdHkgPSBmdW5jdGlvbiByZW5kZXJFbXB0eShjb21wb25lbnROYW1lKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG4gICAgdmFyIHByZWZpeCA9IGdldFByZWZpeENscygnZW1wdHknKTtcblxuICAgIHN3aXRjaCAoY29tcG9uZW50TmFtZSkge1xuICAgICAgY2FzZSAnVGFibGUnOlxuICAgICAgY2FzZSAnTGlzdCc6XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbXB0eSwge1xuICAgICAgICAgIGltYWdlOiBFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdTZWxlY3QnOlxuICAgICAgY2FzZSAnVHJlZVNlbGVjdCc6XG4gICAgICBjYXNlICdDYXNjYWRlcic6XG4gICAgICBjYXNlICdUcmFuc2Zlcic6XG4gICAgICBjYXNlICdNZW50aW9ucyc6XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbXB0eSwge1xuICAgICAgICAgIGltYWdlOiBFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4LCBcIi1zbWFsbFwiKVxuICAgICAgICB9KTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVtcHR5LCBudWxsKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRW1wdHk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBDYWxlbmRhckxvY2FsZSBmcm9tIFwicmMtcGlja2VyL2VzL2xvY2FsZS9lbl9VU1wiO1xuaW1wb3J0IFRpbWVQaWNrZXJMb2NhbGUgZnJvbSAnLi4vLi4vdGltZS1waWNrZXIvbG9jYWxlL2VuX1VTJzsgLy8gTWVyZ2UgaW50byBhIGxvY2FsZSBvYmplY3RcblxudmFyIGxvY2FsZSA9IHtcbiAgbGFuZzogX2V4dGVuZHMoe1xuICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IGRhdGUnLFxuICAgIHllYXJQbGFjZWhvbGRlcjogJ1NlbGVjdCB5ZWFyJyxcbiAgICBxdWFydGVyUGxhY2Vob2xkZXI6ICdTZWxlY3QgcXVhcnRlcicsXG4gICAgbW9udGhQbGFjZWhvbGRlcjogJ1NlbGVjdCBtb250aCcsXG4gICAgd2Vla1BsYWNlaG9sZGVyOiAnU2VsZWN0IHdlZWsnLFxuICAgIHJhbmdlUGxhY2Vob2xkZXI6IFsnU3RhcnQgZGF0ZScsICdFbmQgZGF0ZSddLFxuICAgIHJhbmdlWWVhclBsYWNlaG9sZGVyOiBbJ1N0YXJ0IHllYXInLCAnRW5kIHllYXInXSxcbiAgICByYW5nZU1vbnRoUGxhY2Vob2xkZXI6IFsnU3RhcnQgbW9udGgnLCAnRW5kIG1vbnRoJ10sXG4gICAgcmFuZ2VXZWVrUGxhY2Vob2xkZXI6IFsnU3RhcnQgd2VlaycsICdFbmQgd2VlayddXG4gIH0sIENhbGVuZGFyTG9jYWxlKSxcbiAgdGltZVBpY2tlckxvY2FsZTogX2V4dGVuZHMoe30sIFRpbWVQaWNrZXJMb2NhbGUpXG59OyAvLyBBbGwgc2V0dGluZ3MgYXQ6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvbG9jYWxlL2V4YW1wbGUuanNvblxuXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5cbnZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KCkge1xuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2VtcHR5LWltZy1kZWZhdWx0Jyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMsXG4gICAgd2lkdGg6IFwiMTg0XCIsXG4gICAgaGVpZ2h0OiBcIjE1MlwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDE4NCAxNTJcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyNCAzMS42NylcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImVsbGlwc2VcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1lbGxpcHNlXCIpLFxuICAgIGN4OiBcIjY3Ljc5N1wiLFxuICAgIGN5OiBcIjEwNi44OVwiLFxuICAgIHJ4OiBcIjY3Ljc5N1wiLFxuICAgIHJ5OiBcIjEyLjY2OFwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTFcIiksXG4gICAgZDogXCJNMTIyLjAzNCA2OS42NzRMOTguMTA5IDQwLjIyOWMtMS4xNDgtMS4zODYtMi44MjYtMi4yMjUtNC41OTMtMi4yMjVoLTUxLjQ0Yy0xLjc2NiAwLTMuNDQ0LjgzOS00LjU5MiAyLjIyNUwxMy41NiA2OS42NzR2MTUuMzgzaDEwOC40NzVWNjkuNjc0elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTJcIiksXG4gICAgZDogXCJNMTAxLjUzNyA4Ni4yMTRMODAuNjMgNjEuMTAyYy0xLjAwMS0xLjIwNy0yLjUwNy0xLjg2Ny00LjA0OC0xLjg2N0gzMS43MjRjLTEuNTQgMC0zLjA0Ny42Ni00LjA0OCAxLjg2N0w2Ljc2OSA4Ni4yMTR2MTMuNzkyaDk0Ljc2OFY4Ni4yMTR6XCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxMy41NilcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC0zXCIpLFxuICAgIGQ6IFwiTTMzLjgzIDBoNjcuOTMzYTQgNCAwIDAgMSA0IDR2OTMuMzQ0YTQgNCAwIDAgMS00IDRIMzMuODNhNCA0IDAgMCAxLTQtNFY0YTQgNCAwIDAgMSA0LTR6XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGgtNFwiKSxcbiAgICBkOiBcIk00Mi42NzggOS45NTNoNTAuMjM3YTIgMiAwIDAgMSAyIDJWMzYuOTFhMiAyIDAgMCAxLTIgMkg0Mi42NzhhMiAyIDAgMCAxLTItMlYxMS45NTNhMiAyIDAgMCAxIDItMnpNNDIuOTQgNDkuNzY3aDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI0SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjR6TTQyLjk0IDYxLjUzaDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI1SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjV6TTEyMS44MTMgMTA1LjAzMmMtLjc3NSAzLjA3MS0zLjQ5NyA1LjM2LTYuNzM1IDUuMzZIMjAuNTE1Yy0zLjIzOCAwLTUuOTYtMi4yOS02LjczNC01LjM2YTcuMzA5IDcuMzA5IDAgMCAxLS4yMjItMS43OVY2OS42NzVoMjYuMzE4YzIuOTA3IDAgNS4yNSAyLjQ0OCA1LjI1IDUuNDJ2LjA0YzAgMi45NzEgMi4zNyA1LjM3IDUuMjc3IDUuMzdoMzQuNzg1YzIuOTA3IDAgNS4yNzctMi40MjEgNS4yNzctNS4zOTNWNzUuMWMwLTIuOTcyIDIuMzQzLTUuNDI2IDUuMjUtNS40MjZoMjYuMzE4djMzLjU2OWMwIC42MTctLjA3NyAxLjIxNi0uMjIxIDEuNzg5elwiXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC01XCIpLFxuICAgIGQ6IFwiTTE0OS4xMjEgMzMuMjkybC02LjgzIDIuNjVhMSAxIDAgMCAxLTEuMzE3LTEuMjNsMS45MzctNi4yMDdjLTIuNTg5LTIuOTQ0LTQuMTA5LTYuNTM0LTQuMTA5LTEwLjQwOEMxMzguODAyIDguMTAyIDE0OC45MiAwIDE2MS40MDIgMCAxNzMuODgxIDAgMTg0IDguMTAyIDE4NCAxOC4wOTdjMCA5Ljk5NS0xMC4xMTggMTguMDk3LTIyLjU5OSAxOC4wOTctNC41MjggMC04Ljc0NC0xLjA2Ni0xMi4yOC0yLjkwMnpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ1wiKSxcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDE0OS42NSAxNS4zODMpXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbGxpcHNlXCIsIHtcbiAgICBjeDogXCIyMC42NTRcIixcbiAgICBjeTogXCIzLjE2N1wiLFxuICAgIHJ4OiBcIjIuODQ5XCIsXG4gICAgcnk6IFwiMi44MTVcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk01LjY5OCA1LjYzSDBMMi44OTguNzA0ek05LjI1OS43MDRoNC45ODVWNS42M0g5LjI1OXpcIlxuICB9KSkpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVtcHR5OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCI7XG5cbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IExvY2FsZVJlY2VpdmVyIGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlcic7XG5pbXBvcnQgRGVmYXVsdEVtcHR5SW1nIGZyb20gJy4vZW1wdHknO1xuaW1wb3J0IFNpbXBsZUVtcHR5SW1nIGZyb20gJy4vc2ltcGxlJztcbnZhciBkZWZhdWx0RW1wdHlJbWcgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEZWZhdWx0RW1wdHlJbWcsIG51bGwpO1xudmFyIHNpbXBsZUVtcHR5SW1nID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2ltcGxlRW1wdHlJbWcsIG51bGwpO1xuXG52YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eShfYSkge1xuICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgX2EkaW1hZ2UgPSBfYS5pbWFnZSxcbiAgICAgIGltYWdlID0gX2EkaW1hZ2UgPT09IHZvaWQgMCA/IGRlZmF1bHRFbXB0eUltZyA6IF9hJGltYWdlLFxuICAgICAgZGVzY3JpcHRpb24gPSBfYS5kZXNjcmlwdGlvbixcbiAgICAgIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICBpbWFnZVN0eWxlID0gX2EuaW1hZ2VTdHlsZSxcbiAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCIsIFwicHJlZml4Q2xzXCIsIFwiaW1hZ2VcIiwgXCJkZXNjcmlwdGlvblwiLCBcImNoaWxkcmVuXCIsIFwiaW1hZ2VTdHlsZVwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDb25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9jYWxlUmVjZWl2ZXIsIHtcbiAgICBjb21wb25lbnROYW1lOiBcIkVtcHR5XCJcbiAgfSwgZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2VtcHR5JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICB2YXIgZGVzID0gdHlwZW9mIGRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJyA/IGRlc2NyaXB0aW9uIDogbG9jYWxlLmRlc2NyaXB0aW9uO1xuICAgIHZhciBhbHQgPSB0eXBlb2YgZGVzID09PSAnc3RyaW5nJyA/IGRlcyA6ICdlbXB0eSc7XG4gICAgdmFyIGltYWdlTm9kZSA9IG51bGw7XG5cbiAgICBpZiAodHlwZW9mIGltYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgaW1hZ2VOb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBhbHQ6IGFsdCxcbiAgICAgICAgc3JjOiBpbWFnZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltYWdlTm9kZSA9IGltYWdlO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW5vcm1hbFwiKSwgaW1hZ2UgPT09IHNpbXBsZUVtcHR5SW1nKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKVxuICAgIH0sIHJlc3RQcm9wcyksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbWFnZVwiKSxcbiAgICAgIHN0eWxlOiBpbWFnZVN0eWxlXG4gICAgfSwgaW1hZ2VOb2RlKSwgZGVzICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGVzY3JpcHRpb25cIilcbiAgICB9LCBkZXMpLCBjaGlsZHJlbiAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZm9vdGVyXCIpXG4gICAgfSwgY2hpbGRyZW4pKTtcbiAgfSk7XG59O1xuXG5FbXB0eS5QUkVTRU5URURfSU1BR0VfREVGQVVMVCA9IGRlZmF1bHRFbXB0eUltZztcbkVtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEUgPSBzaW1wbGVFbXB0eUltZztcbmV4cG9ydCBkZWZhdWx0IEVtcHR5OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuXG52YXIgU2ltcGxlID0gZnVuY3Rpb24gU2ltcGxlKCkge1xuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2VtcHR5LWltZy1zaW1wbGUnKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICBjbGFzc05hbWU6IHByZWZpeENscyxcbiAgICB3aWR0aDogXCI2NFwiLFxuICAgIGhlaWdodDogXCI0MVwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDY0IDQxXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMCAxKVwiLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIGZpbGxSdWxlOiBcImV2ZW5vZGRcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImVsbGlwc2VcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1lbGxpcHNlXCIpLFxuICAgIGN4OiBcIjMyXCIsXG4gICAgY3k6IFwiMzNcIixcbiAgICByeDogXCIzMlwiLFxuICAgIHJ5OiBcIjdcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ1wiKSxcbiAgICBmaWxsUnVsZTogXCJub256ZXJvXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk01NSAxMi43Nkw0NC44NTQgMS4yNThDNDQuMzY3LjQ3NCA0My42NTYgMCA0Mi45MDcgMEgyMS4wOTNjLS43NDkgMC0xLjQ2LjQ3NC0xLjk0NyAxLjI1N0w5IDEyLjc2MVYyMmg0NnYtOS4yNHpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00MS42MTMgMTUuOTMxYzAtMS42MDUuOTk0LTIuOTMgMi4yMjctMi45MzFINTV2MTguMTM3QzU1IDMzLjI2IDUzLjY4IDM1IDUyLjA1IDM1aC00MC4xQzEwLjMyIDM1IDkgMzMuMjU5IDkgMzEuMTM3VjEzaDExLjE2YzEuMjMzIDAgMi4yMjcgMS4zMjMgMi4yMjcgMi45Mjh2LjAyMmMwIDEuNjA1IDEuMDA1IDIuOTAxIDIuMjM3IDIuOTAxaDE0Ljc1MmMxLjIzMiAwIDIuMjM3LTEuMzA4IDIuMjM3LTIuOTEzdi0uMDA3elwiLFxuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoXCIpXG4gIH0pKSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdExvY2FsZURhdGEgZnJvbSAnLi9kZWZhdWx0JztcbmltcG9ydCBMb2NhbGVDb250ZXh0IGZyb20gJy4vY29udGV4dCc7XG5cbnZhciBMb2NhbGVSZWNlaXZlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTG9jYWxlUmVjZWl2ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTG9jYWxlUmVjZWl2ZXIpO1xuXG4gIGZ1bmN0aW9uIExvY2FsZVJlY2VpdmVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhbGVSZWNlaXZlcik7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTG9jYWxlUmVjZWl2ZXIsIFt7XG4gICAga2V5OiBcImdldExvY2FsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb2NhbGUoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbXBvbmVudE5hbWUgPSBfdGhpcyRwcm9wcy5jb21wb25lbnROYW1lLFxuICAgICAgICAgIGRlZmF1bHRMb2NhbGUgPSBfdGhpcyRwcm9wcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgdmFyIGxvY2FsZSA9IGRlZmF1bHRMb2NhbGUgfHwgZGVmYXVsdExvY2FsZURhdGFbY29tcG9uZW50TmFtZSB8fCAnZ2xvYmFsJ107XG4gICAgICB2YXIgYW50TG9jYWxlID0gdGhpcy5jb250ZXh0O1xuICAgICAgdmFyIGxvY2FsZUZyb21Db250ZXh0ID0gY29tcG9uZW50TmFtZSAmJiBhbnRMb2NhbGUgPyBhbnRMb2NhbGVbY29tcG9uZW50TmFtZV0gOiB7fTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyhfZXh0ZW5kcyh7fSwgdHlwZW9mIGxvY2FsZSA9PT0gJ2Z1bmN0aW9uJyA/IGxvY2FsZSgpIDogbG9jYWxlKSwgbG9jYWxlRnJvbUNvbnRleHQgfHwge30pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRMb2NhbGVDb2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvY2FsZUNvZGUoKSB7XG4gICAgICB2YXIgYW50TG9jYWxlID0gdGhpcy5jb250ZXh0O1xuICAgICAgdmFyIGxvY2FsZUNvZGUgPSBhbnRMb2NhbGUgJiYgYW50TG9jYWxlLmxvY2FsZTsgLy8gSGFkIHVzZSBMb2NhbGVQcm92aWRlIGJ1dCBkaWRuJ3Qgc2V0IGxvY2FsZVxuXG4gICAgICBpZiAoYW50TG9jYWxlICYmIGFudExvY2FsZS5leGlzdCAmJiAhbG9jYWxlQ29kZSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdExvY2FsZURhdGEubG9jYWxlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbG9jYWxlQ29kZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuZ2V0TG9jYWxlKCksIHRoaXMuZ2V0TG9jYWxlQ29kZSgpLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2NhbGVSZWNlaXZlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgTG9jYWxlUmVjZWl2ZXIgYXMgZGVmYXVsdCB9O1xuTG9jYWxlUmVjZWl2ZXIuZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnROYW1lOiAnZ2xvYmFsJ1xufTtcbkxvY2FsZVJlY2VpdmVyLmNvbnRleHRUeXBlID0gTG9jYWxlQ29udGV4dDtcbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2NhbGVSZWNlaXZlcihjb21wb25lbnROYW1lLCBkZWZhdWx0TG9jYWxlKSB7XG4gIHZhciBhbnRMb2NhbGUgPSBSZWFjdC51c2VDb250ZXh0KExvY2FsZUNvbnRleHQpO1xuICB2YXIgY29tcG9uZW50TG9jYWxlID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxvY2FsZSA9IGRlZmF1bHRMb2NhbGUgfHwgZGVmYXVsdExvY2FsZURhdGFbY29tcG9uZW50TmFtZSB8fCAnZ2xvYmFsJ107XG4gICAgdmFyIGxvY2FsZUZyb21Db250ZXh0ID0gY29tcG9uZW50TmFtZSAmJiBhbnRMb2NhbGUgPyBhbnRMb2NhbGVbY29tcG9uZW50TmFtZV0gOiB7fTtcbiAgICByZXR1cm4gX2V4dGVuZHMoX2V4dGVuZHMoe30sIHR5cGVvZiBsb2NhbGUgPT09ICdmdW5jdGlvbicgPyBsb2NhbGUoKSA6IGxvY2FsZSksIGxvY2FsZUZyb21Db250ZXh0IHx8IHt9KTtcbiAgfSwgW2NvbXBvbmVudE5hbWUsIGRlZmF1bHRMb2NhbGUsIGFudExvY2FsZV0pO1xuICByZXR1cm4gW2NvbXBvbmVudExvY2FsZV07XG59IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbnZhciBMb2NhbGVDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcbmV4cG9ydCBkZWZhdWx0IExvY2FsZUNvbnRleHQ7IiwiaW1wb3J0IGxvY2FsZSBmcm9tICcuLi9sb2NhbGUvZGVmYXVsdCc7XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nICovXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwicmMtcGFnaW5hdGlvbi9lcy9sb2NhbGUvZW5fVVNcIjtcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4uL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VUyc7XG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuLi90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVMnO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4uL2NhbGVuZGFyL2xvY2FsZS9lbl9VUyc7XG52YXIgdHlwZVRlbXBsYXRlID0gJyR7bGFiZWx9IGlzIG5vdCBhIHZhbGlkICR7dHlwZX0nO1xudmFyIGxvY2FsZVZhbHVlcyA9IHtcbiAgbG9jYWxlOiAnZW4nLFxuICBQYWdpbmF0aW9uOiBQYWdpbmF0aW9uLFxuICBEYXRlUGlja2VyOiBEYXRlUGlja2VyLFxuICBUaW1lUGlja2VyOiBUaW1lUGlja2VyLFxuICBDYWxlbmRhcjogQ2FsZW5kYXIsXG4gIGdsb2JhbDoge1xuICAgIHBsYWNlaG9sZGVyOiAnUGxlYXNlIHNlbGVjdCdcbiAgfSxcbiAgVGFibGU6IHtcbiAgICBmaWx0ZXJUaXRsZTogJ0ZpbHRlciBtZW51JyxcbiAgICBmaWx0ZXJDb25maXJtOiAnT0snLFxuICAgIGZpbHRlclJlc2V0OiAnUmVzZXQnLFxuICAgIGZpbHRlckVtcHR5VGV4dDogJ05vIGZpbHRlcnMnLFxuICAgIGVtcHR5VGV4dDogJ05vIGRhdGEnLFxuICAgIHNlbGVjdEFsbDogJ1NlbGVjdCBjdXJyZW50IHBhZ2UnLFxuICAgIHNlbGVjdEludmVydDogJ0ludmVydCBjdXJyZW50IHBhZ2UnLFxuICAgIHNlbGVjdGlvbkFsbDogJ1NlbGVjdCBhbGwgZGF0YScsXG4gICAgc29ydFRpdGxlOiAnU29ydCcsXG4gICAgZXhwYW5kOiAnRXhwYW5kIHJvdycsXG4gICAgY29sbGFwc2U6ICdDb2xsYXBzZSByb3cnLFxuICAgIHRyaWdnZXJEZXNjOiAnQ2xpY2sgdG8gc29ydCBkZXNjZW5kaW5nJyxcbiAgICB0cmlnZ2VyQXNjOiAnQ2xpY2sgdG8gc29ydCBhc2NlbmRpbmcnLFxuICAgIGNhbmNlbFNvcnQ6ICdDbGljayB0byBjYW5jZWwgc29ydGluZydcbiAgfSxcbiAgTW9kYWw6IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCcsXG4gICAganVzdE9rVGV4dDogJ09LJ1xuICB9LFxuICBQb3Bjb25maXJtOiB7XG4gICAgb2tUZXh0OiAnT0snLFxuICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnXG4gIH0sXG4gIFRyYW5zZmVyOiB7XG4gICAgdGl0bGVzOiBbJycsICcnXSxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaCBoZXJlJyxcbiAgICBpdGVtVW5pdDogJ2l0ZW0nLFxuICAgIGl0ZW1zVW5pdDogJ2l0ZW1zJyxcbiAgICByZW1vdmU6ICdSZW1vdmUnLFxuICAgIHNlbGVjdEN1cnJlbnQ6ICdTZWxlY3QgY3VycmVudCBwYWdlJyxcbiAgICByZW1vdmVDdXJyZW50OiAnUmVtb3ZlIGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGFsbCBkYXRhJyxcbiAgICByZW1vdmVBbGw6ICdSZW1vdmUgYWxsIGRhdGEnLFxuICAgIHNlbGVjdEludmVydDogJ0ludmVydCBjdXJyZW50IHBhZ2UnXG4gIH0sXG4gIFVwbG9hZDoge1xuICAgIHVwbG9hZGluZzogJ1VwbG9hZGluZy4uLicsXG4gICAgcmVtb3ZlRmlsZTogJ1JlbW92ZSBmaWxlJyxcbiAgICB1cGxvYWRFcnJvcjogJ1VwbG9hZCBlcnJvcicsXG4gICAgcHJldmlld0ZpbGU6ICdQcmV2aWV3IGZpbGUnLFxuICAgIGRvd25sb2FkRmlsZTogJ0Rvd25sb2FkIGZpbGUnXG4gIH0sXG4gIEVtcHR5OiB7XG4gICAgZGVzY3JpcHRpb246ICdObyBEYXRhJ1xuICB9LFxuICBJY29uOiB7XG4gICAgaWNvbjogJ2ljb24nXG4gIH0sXG4gIFRleHQ6IHtcbiAgICBlZGl0OiAnRWRpdCcsXG4gICAgY29weTogJ0NvcHknLFxuICAgIGNvcGllZDogJ0NvcGllZCcsXG4gICAgZXhwYW5kOiAnRXhwYW5kJ1xuICB9LFxuICBQYWdlSGVhZGVyOiB7XG4gICAgYmFjazogJ0JhY2snXG4gIH0sXG4gIEZvcm06IHtcbiAgICBvcHRpb25hbDogJyhvcHRpb25hbCknLFxuICAgIGRlZmF1bHRWYWxpZGF0ZU1lc3NhZ2VzOiB7XG4gICAgICBcImRlZmF1bHRcIjogJ0ZpZWxkIHZhbGlkYXRpb24gZXJyb3IgZm9yICR7bGFiZWx9JyxcbiAgICAgIHJlcXVpcmVkOiAnUGxlYXNlIGVudGVyICR7bGFiZWx9JyxcbiAgICAgIFwiZW51bVwiOiAnJHtsYWJlbH0gbXVzdCBiZSBvbmUgb2YgWyR7ZW51bX1dJyxcbiAgICAgIHdoaXRlc3BhY2U6ICcke2xhYmVsfSBjYW5ub3QgYmUgYSBibGFuayBjaGFyYWN0ZXInLFxuICAgICAgZGF0ZToge1xuICAgICAgICBmb3JtYXQ6ICcke2xhYmVsfSBkYXRlIGZvcm1hdCBpcyBpbnZhbGlkJyxcbiAgICAgICAgcGFyc2U6ICcke2xhYmVsfSBjYW5ub3QgYmUgY29udmVydGVkIHRvIGEgZGF0ZScsXG4gICAgICAgIGludmFsaWQ6ICcke2xhYmVsfSBpcyBhbiBpbnZhbGlkIGRhdGUnXG4gICAgICB9LFxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgc3RyaW5nOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIG1ldGhvZDogdHlwZVRlbXBsYXRlLFxuICAgICAgICBhcnJheTogdHlwZVRlbXBsYXRlLFxuICAgICAgICBvYmplY3Q6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgbnVtYmVyOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGRhdGU6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgXCJib29sZWFuXCI6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgaW50ZWdlcjogdHlwZVRlbXBsYXRlLFxuICAgICAgICBcImZsb2F0XCI6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgcmVnZXhwOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGVtYWlsOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIHVybDogdHlwZVRlbXBsYXRlLFxuICAgICAgICBoZXg6IHR5cGVUZW1wbGF0ZVxuICAgICAgfSxcbiAgICAgIHN0cmluZzoge1xuICAgICAgICBsZW46ICcke2xhYmVsfSBtdXN0IGJlICR7bGVufSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgbWluOiAnJHtsYWJlbH0gbXVzdCBiZSBhdCBsZWFzdCAke21pbn0gY2hhcmFjdGVycycsXG4gICAgICAgIG1heDogJyR7bGFiZWx9IG11c3QgYmUgdXAgdG8gJHttYXh9IGNoYXJhY3RlcnMnLFxuICAgICAgICByYW5nZTogJyR7bGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke21pbn0tJHttYXh9IGNoYXJhY3RlcnMnXG4gICAgICB9LFxuICAgICAgbnVtYmVyOiB7XG4gICAgICAgIGxlbjogJyR7bGFiZWx9IG11c3QgYmUgZXF1YWwgdG8gJHtsZW59JyxcbiAgICAgICAgbWluOiAnJHtsYWJlbH0gbXVzdCBiZSBtaW5pbXVtICR7bWlufScsXG4gICAgICAgIG1heDogJyR7bGFiZWx9IG11c3QgYmUgbWF4aW11bSAke21heH0nLFxuICAgICAgICByYW5nZTogJyR7bGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke21pbn0tJHttYXh9J1xuICAgICAgfSxcbiAgICAgIGFycmF5OiB7XG4gICAgICAgIGxlbjogJ011c3QgYmUgJHtsZW59ICR7bGFiZWx9JyxcbiAgICAgICAgbWluOiAnQXQgbGVhc3QgJHttaW59ICR7bGFiZWx9JyxcbiAgICAgICAgbWF4OiAnQXQgbW9zdCAke21heH0gJHtsYWJlbH0nLFxuICAgICAgICByYW5nZTogJ1RoZSBhbW91bnQgb2YgJHtsYWJlbH0gbXVzdCBiZSBiZXR3ZWVuICR7bWlufS0ke21heH0nXG4gICAgICB9LFxuICAgICAgcGF0dGVybjoge1xuICAgICAgICBtaXNtYXRjaDogJyR7bGFiZWx9IGRvZXMgbm90IG1hdGNoIHRoZSBwYXR0ZXJuICR7cGF0dGVybn0nXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlVmFsdWVzOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgb21pdCBmcm9tICdvbWl0LmpzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQ29uZmlnQ29uc3VtZXIgfSBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9FbGVtZW50JztcblxudmFyIFNrZWxldG9uQXZhdGFyID0gZnVuY3Rpb24gU2tlbGV0b25BdmF0YXIocHJvcHMpIHtcbiAgdmFyIHJlbmRlclNrZWxldG9uQXZhdGFyID0gZnVuY3Rpb24gcmVuZGVyU2tlbGV0b25BdmF0YXIoX3JlZikge1xuICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcbiAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGFjdGl2ZSA9IHByb3BzLmFjdGl2ZTtcbiAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdza2VsZXRvbicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgdmFyIG90aGVyUHJvcHMgPSBvbWl0KHByb3BzLCBbJ3ByZWZpeENscyddKTtcbiAgICB2YXIgY2xzID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZWxlbWVudFwiKSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFjdGl2ZVwiKSwgYWN0aXZlKSwgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbHNcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbGVtZW50LCBfZXh0ZW5kcyh7XG4gICAgICBwcmVmaXhDbHM6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYXZhdGFyXCIpXG4gICAgfSwgb3RoZXJQcm9wcykpKTtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlnQ29uc3VtZXIsIG51bGwsIHJlbmRlclNrZWxldG9uQXZhdGFyKTtcbn07XG5cblNrZWxldG9uQXZhdGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogJ2RlZmF1bHQnLFxuICBzaGFwZTogJ2NpcmNsZSdcbn07XG5leHBvcnQgZGVmYXVsdCBTa2VsZXRvbkF2YXRhcjsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG9taXQgZnJvbSAnb21pdC5qcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vRWxlbWVudCc7XG5pbXBvcnQgeyBDb25maWdDb25zdW1lciB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5cbnZhciBTa2VsZXRvbkJ1dHRvbiA9IGZ1bmN0aW9uIFNrZWxldG9uQnV0dG9uKHByb3BzKSB7XG4gIHZhciByZW5kZXJTa2VsZXRvbkJ1dHRvbiA9IGZ1bmN0aW9uIHJlbmRlclNrZWxldG9uQnV0dG9uKF9yZWYpIHtcbiAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG4gICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBhY3RpdmUgPSBwcm9wcy5hY3RpdmU7XG4gICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnc2tlbGV0b24nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgIHZhciBvdGhlclByb3BzID0gb21pdChwcm9wcywgWydwcmVmaXhDbHMnXSk7XG4gICAgdmFyIGNscyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWVsZW1lbnRcIiksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hY3RpdmVcIiksIGFjdGl2ZSksIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xzXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRWxlbWVudCwgX2V4dGVuZHMoe1xuICAgICAgcHJlZml4Q2xzOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWJ1dHRvblwiKVxuICAgIH0sIG90aGVyUHJvcHMpKSk7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbmZpZ0NvbnN1bWVyLCBudWxsLCByZW5kZXJTa2VsZXRvbkJ1dHRvbik7XG59O1xuXG5Ta2VsZXRvbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6ICdkZWZhdWx0J1xufTtcbmV4cG9ydCBkZWZhdWx0IFNrZWxldG9uQnV0dG9uOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxudmFyIEVsZW1lbnQgPSBmdW5jdGlvbiBFbGVtZW50KHByb3BzKSB7XG4gIHZhciBfY2xhc3NOYW1lcywgX2NsYXNzTmFtZXMyO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBzaGFwZSA9IHByb3BzLnNoYXBlO1xuICB2YXIgc2l6ZUNscyA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sZ1wiKSwgc2l6ZSA9PT0gJ2xhcmdlJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zbVwiKSwgc2l6ZSA9PT0gJ3NtYWxsJyksIF9jbGFzc05hbWVzKSk7XG4gIHZhciBzaGFwZUNscyA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzMiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNpcmNsZVwiKSwgc2hhcGUgPT09ICdjaXJjbGUnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zcXVhcmVcIiksIHNoYXBlID09PSAnc3F1YXJlJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcm91bmRcIiksIHNoYXBlID09PSAncm91bmQnKSwgX2NsYXNzTmFtZXMyKSk7XG4gIHZhciBzaXplU3R5bGUgPSB0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicgPyB7XG4gICAgd2lkdGg6IHNpemUsXG4gICAgaGVpZ2h0OiBzaXplLFxuICAgIGxpbmVIZWlnaHQ6IFwiXCIuY29uY2F0KHNpemUsIFwicHhcIilcbiAgfSA6IHt9O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBzaXplQ2xzLCBzaGFwZUNscywgY2xhc3NOYW1lKSxcbiAgICBzdHlsZTogX2V4dGVuZHMoX2V4dGVuZHMoe30sIHNpemVTdHlsZSksIHN0eWxlKVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDb25maWdDb25zdW1lciB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG52YXIgcGF0aCA9ICdNMzY1LjcxNDI4NiAzMjkuMTQyODU3cTAgNDUuNzE0Mjg2LTMyLjAzNjU3MSA3Ny42Nzc3MTR0LTc3LjY3NzcxNCAzMi4wMzY1NzEtNzcuNjc3NzE0LTMyLjAzNjU3MS0zMi4wMzY1NzEtNzcuNjc3NzE0IDMyLjAzNjU3MS03Ny42Nzc3MTQgNzcuNjc3NzE0LTMyLjAzNjU3MSA3Ny42Nzc3MTQgMzIuMDM2NTcxIDMyLjAzNjU3MSA3Ny42Nzc3MTR6TTk1MC44NTcxNDMgNTQ4LjU3MTQyOWwwIDI1Ni04MDQuNTcxNDI5IDAgMC0xMDkuNzE0Mjg2IDE4Mi44NTcxNDMtMTgyLjg1NzE0MyA5MS40Mjg1NzEgOTEuNDI4NTcxIDI5Mi41NzE0MjktMjkyLjU3MTQyOXpNMTAwNS43MTQyODYgMTQ2LjI4NTcxNGwtOTE0LjI4NTcxNCAwcS03LjQ2MDU3MSAwLTEyLjg3MzE0MyA1LjQxMjU3MXQtNS40MTI1NzEgMTIuODczMTQzbDAgNjk0Ljg1NzE0M3EwIDcuNDYwNTcxIDUuNDEyNTcxIDEyLjg3MzE0M3QxMi44NzMxNDMgNS40MTI1NzFsOTE0LjI4NTcxNCAwcTcuNDYwNTcxIDAgMTIuODczMTQzLTUuNDEyNTcxdDUuNDEyNTcxLTEyLjg3MzE0M2wwLTY5NC44NTcxNDNxMC03LjQ2MDU3MS01LjQxMjU3MS0xMi44NzMxNDN0LTEyLjg3MzE0My01LjQxMjU3MXpNMTA5Ny4xNDI4NTcgMTY0LjU3MTQyOWwwIDY5NC44NTcxNDNxMCAzNy43NDE3MTQtMjYuODQzNDI5IDY0LjU4NTE0M3QtNjQuNTg1MTQzIDI2Ljg0MzQyOWwtOTE0LjI4NTcxNCAwcS0zNy43NDE3MTQgMC02NC41ODUxNDMtMjYuODQzNDI5dC0yNi44NDM0MjktNjQuNTg1MTQzbDAtNjk0Ljg1NzE0M3EwLTM3Ljc0MTcxNCAyNi44NDM0MjktNjQuNTg1MTQzdDY0LjU4NTE0My0yNi44NDM0MjlsOTE0LjI4NTcxNCAwcTM3Ljc0MTcxNCAwIDY0LjU4NTE0MyAyNi44NDM0Mjl0MjYuODQzNDI5IDY0LjU4NTE0M3onO1xuXG52YXIgU2tlbGV0b25JbWFnZSA9IGZ1bmN0aW9uIFNrZWxldG9uSW1hZ2UocHJvcHMpIHtcbiAgdmFyIHJlbmRlclNrZWxldG9uSW1hZ2UgPSBmdW5jdGlvbiByZW5kZXJTa2VsZXRvbkltYWdlKF9yZWYpIHtcbiAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG4gICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZSA9IHByb3BzLnN0eWxlO1xuICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3NrZWxldG9uJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICB2YXIgY2xzID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZWxlbWVudFwiKSwgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbHNcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbWFnZVwiKSwgY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiBzdHlsZVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDEwOTggMTAyNFwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbWFnZS1zdmdcIilcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgZDogcGF0aCxcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbWFnZS1wYXRoXCIpXG4gICAgfSkpKSk7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbmZpZ0NvbnN1bWVyLCBudWxsLCByZW5kZXJTa2VsZXRvbkltYWdlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNrZWxldG9uSW1hZ2U7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBvbWl0IGZyb20gJ29taXQuanMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRWxlbWVudCBmcm9tICcuL0VsZW1lbnQnO1xuaW1wb3J0IHsgQ29uZmlnQ29uc3VtZXIgfSBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuXG52YXIgU2tlbGV0b25JbnB1dCA9IGZ1bmN0aW9uIFNrZWxldG9uSW5wdXQocHJvcHMpIHtcbiAgdmFyIHJlbmRlclNrZWxldG9uSW5wdXQgPSBmdW5jdGlvbiByZW5kZXJTa2VsZXRvbklucHV0KF9yZWYpIHtcbiAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG4gICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBhY3RpdmUgPSBwcm9wcy5hY3RpdmU7XG4gICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnc2tlbGV0b24nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgIHZhciBvdGhlclByb3BzID0gb21pdChwcm9wcywgWydwcmVmaXhDbHMnXSk7XG4gICAgdmFyIGNscyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWVsZW1lbnRcIiksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hY3RpdmVcIiksIGFjdGl2ZSksIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xzXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRWxlbWVudCwgX2V4dGVuZHMoe1xuICAgICAgcHJlZml4Q2xzOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWlucHV0XCIpXG4gICAgfSwgb3RoZXJQcm9wcykpKTtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlnQ29uc3VtZXIsIG51bGwsIHJlbmRlclNrZWxldG9uSW5wdXQpO1xufTtcblxuU2tlbGV0b25JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6ICdkZWZhdWx0J1xufTtcbmV4cG9ydCBkZWZhdWx0IFNrZWxldG9uSW5wdXQ7IiwiaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbnZhciBQYXJhZ3JhcGggPSBmdW5jdGlvbiBQYXJhZ3JhcGgocHJvcHMpIHtcbiAgdmFyIGdldFdpZHRoID0gZnVuY3Rpb24gZ2V0V2lkdGgoaW5kZXgpIHtcbiAgICB2YXIgd2lkdGggPSBwcm9wcy53aWR0aCxcbiAgICAgICAgX3Byb3BzJHJvd3MgPSBwcm9wcy5yb3dzLFxuICAgICAgICByb3dzID0gX3Byb3BzJHJvd3MgPT09IHZvaWQgMCA/IDIgOiBfcHJvcHMkcm93cztcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHdpZHRoKSkge1xuICAgICAgcmV0dXJuIHdpZHRoW2luZGV4XTtcbiAgICB9IC8vIGxhc3QgcGFyYWdyYXBoXG5cblxuICAgIGlmIChyb3dzIC0gMSA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9O1xuXG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgcm93cyA9IHByb3BzLnJvd3M7XG5cbiAgdmFyIHJvd0xpc3QgPSBfdG9Db25zdW1hYmxlQXJyYXkoQXJyYXkocm93cykpLm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgLyojX19QVVJFX18qL1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogZ2V0V2lkdGgoaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGNsYXNzTmFtZSksXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIHJvd0xpc3QpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYWdyYXBoOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGUnO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICcuL1BhcmFncmFwaCc7XG5pbXBvcnQgeyBDb25maWdDb25zdW1lciB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgRWxlbWVudCBmcm9tICcuL0VsZW1lbnQnO1xuaW1wb3J0IFNrZWxldG9uQXZhdGFyIGZyb20gJy4vQXZhdGFyJztcbmltcG9ydCBTa2VsZXRvbkJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgU2tlbGV0b25JbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBTa2VsZXRvbkltYWdlIGZyb20gJy4vSW1hZ2UnO1xuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRQcm9wcyhwcm9wKSB7XG4gIGlmIChwcm9wICYmIF90eXBlb2YocHJvcCkgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHByb3A7XG4gIH1cblxuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIGdldEF2YXRhckJhc2ljUHJvcHMoaGFzVGl0bGUsIGhhc1BhcmFncmFwaCkge1xuICBpZiAoaGFzVGl0bGUgJiYgIWhhc1BhcmFncmFwaCkge1xuICAgIC8vIFNxdWFyZSBhdmF0YXJcbiAgICByZXR1cm4ge1xuICAgICAgc2l6ZTogJ2xhcmdlJyxcbiAgICAgIHNoYXBlOiAnc3F1YXJlJ1xuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNpemU6ICdsYXJnZScsXG4gICAgc2hhcGU6ICdjaXJjbGUnXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFRpdGxlQmFzaWNQcm9wcyhoYXNBdmF0YXIsIGhhc1BhcmFncmFwaCkge1xuICBpZiAoIWhhc0F2YXRhciAmJiBoYXNQYXJhZ3JhcGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6ICczOCUnXG4gICAgfTtcbiAgfVxuXG4gIGlmIChoYXNBdmF0YXIgJiYgaGFzUGFyYWdyYXBoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiAnNTAlJ1xuICAgIH07XG4gIH1cblxuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIGdldFBhcmFncmFwaEJhc2ljUHJvcHMoaGFzQXZhdGFyLCBoYXNUaXRsZSkge1xuICB2YXIgYmFzaWNQcm9wcyA9IHt9OyAvLyBXaWR0aFxuXG4gIGlmICghaGFzQXZhdGFyIHx8ICFoYXNUaXRsZSkge1xuICAgIGJhc2ljUHJvcHMud2lkdGggPSAnNjElJztcbiAgfSAvLyBSb3dzXG5cblxuICBpZiAoIWhhc0F2YXRhciAmJiBoYXNUaXRsZSkge1xuICAgIGJhc2ljUHJvcHMucm93cyA9IDM7XG4gIH0gZWxzZSB7XG4gICAgYmFzaWNQcm9wcy5yb3dzID0gMjtcbiAgfVxuXG4gIHJldHVybiBiYXNpY1Byb3BzO1xufVxuXG52YXIgU2tlbGV0b24gPSBmdW5jdGlvbiBTa2VsZXRvbihwcm9wcykge1xuICB2YXIgcmVuZGVyU2tlbGV0b24gPSBmdW5jdGlvbiByZW5kZXJTa2VsZXRvbihfcmVmKSB7XG4gICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzLFxuICAgICAgICBkaXJlY3Rpb24gPSBfcmVmLmRpcmVjdGlvbjtcbiAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBsb2FkaW5nID0gcHJvcHMubG9hZGluZyxcbiAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBhdmF0YXIgPSBwcm9wcy5hdmF0YXIsXG4gICAgICAgIHRpdGxlID0gcHJvcHMudGl0bGUsXG4gICAgICAgIHBhcmFncmFwaCA9IHByb3BzLnBhcmFncmFwaCxcbiAgICAgICAgYWN0aXZlID0gcHJvcHMuYWN0aXZlLFxuICAgICAgICByb3VuZCA9IHByb3BzLnJvdW5kO1xuICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3NrZWxldG9uJywgY3VzdG9taXplUHJlZml4Q2xzKTtcblxuICAgIGlmIChsb2FkaW5nIHx8ICEoJ2xvYWRpbmcnIGluIHByb3BzKSkge1xuICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICB2YXIgaGFzQXZhdGFyID0gISFhdmF0YXI7XG4gICAgICB2YXIgaGFzVGl0bGUgPSAhIXRpdGxlO1xuICAgICAgdmFyIGhhc1BhcmFncmFwaCA9ICEhcGFyYWdyYXBoOyAvLyBBdmF0YXJcblxuICAgICAgdmFyIGF2YXRhck5vZGU7XG5cbiAgICAgIGlmIChoYXNBdmF0YXIpIHtcbiAgICAgICAgdmFyIGF2YXRhclByb3BzID0gX2V4dGVuZHMoX2V4dGVuZHMoe1xuICAgICAgICAgIHByZWZpeENsczogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hdmF0YXJcIilcbiAgICAgICAgfSwgZ2V0QXZhdGFyQmFzaWNQcm9wcyhoYXNUaXRsZSwgaGFzUGFyYWdyYXBoKSksIGdldENvbXBvbmVudFByb3BzKGF2YXRhcikpOyAvLyBXZSBkaXJlY3QgdXNlIFNrZWxldG9uRWxlbWVudCBhcyBhdmF0YXIgaW4gc2tlbGV0b24gaW50ZXJuYWwuXG5cblxuICAgICAgICBhdmF0YXJOb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oZWFkZXJcIilcbiAgICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRWxlbWVudCwgYXZhdGFyUHJvcHMpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRlbnROb2RlO1xuXG4gICAgICBpZiAoaGFzVGl0bGUgfHwgaGFzUGFyYWdyYXBoKSB7XG4gICAgICAgIC8vIFRpdGxlXG4gICAgICAgIHZhciAkdGl0bGU7XG5cbiAgICAgICAgaWYgKGhhc1RpdGxlKSB7XG4gICAgICAgICAgdmFyIHRpdGxlUHJvcHMgPSBfZXh0ZW5kcyhfZXh0ZW5kcyh7XG4gICAgICAgICAgICBwcmVmaXhDbHM6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdGl0bGVcIilcbiAgICAgICAgICB9LCBnZXRUaXRsZUJhc2ljUHJvcHMoaGFzQXZhdGFyLCBoYXNQYXJhZ3JhcGgpKSwgZ2V0Q29tcG9uZW50UHJvcHModGl0bGUpKTtcblxuICAgICAgICAgICR0aXRsZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRpdGxlLCB0aXRsZVByb3BzKTtcbiAgICAgICAgfSAvLyBQYXJhZ3JhcGhcblxuXG4gICAgICAgIHZhciBwYXJhZ3JhcGhOb2RlO1xuXG4gICAgICAgIGlmIChoYXNQYXJhZ3JhcGgpIHtcbiAgICAgICAgICB2YXIgcGFyYWdyYXBoUHJvcHMgPSBfZXh0ZW5kcyhfZXh0ZW5kcyh7XG4gICAgICAgICAgICBwcmVmaXhDbHM6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGFyYWdyYXBoXCIpXG4gICAgICAgICAgfSwgZ2V0UGFyYWdyYXBoQmFzaWNQcm9wcyhoYXNBdmF0YXIsIGhhc1RpdGxlKSksIGdldENvbXBvbmVudFByb3BzKHBhcmFncmFwaCkpO1xuXG4gICAgICAgICAgcGFyYWdyYXBoTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhcmFncmFwaCwgcGFyYWdyYXBoUHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGVudE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNvbnRlbnRcIilcbiAgICAgICAgfSwgJHRpdGxlLCBwYXJhZ3JhcGhOb2RlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNscyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXdpdGgtYXZhdGFyXCIpLCBoYXNBdmF0YXIpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYWN0aXZlXCIpLCBhY3RpdmUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJvdW5kXCIpLCByb3VuZCksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xzXG4gICAgICB9LCBhdmF0YXJOb2RlLCBjb250ZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb25maWdDb25zdW1lciwgbnVsbCwgcmVuZGVyU2tlbGV0b24pO1xufTtcblxuU2tlbGV0b24uZGVmYXVsdFByb3BzID0ge1xuICBhdmF0YXI6IGZhbHNlLFxuICB0aXRsZTogdHJ1ZSxcbiAgcGFyYWdyYXBoOiB0cnVlXG59O1xuU2tlbGV0b24uQnV0dG9uID0gU2tlbGV0b25CdXR0b247XG5Ta2VsZXRvbi5BdmF0YXIgPSBTa2VsZXRvbkF2YXRhcjtcblNrZWxldG9uLklucHV0ID0gU2tlbGV0b25JbnB1dDtcblNrZWxldG9uLkltYWdlID0gU2tlbGV0b25JbWFnZTtcbmV4cG9ydCBkZWZhdWx0IFNrZWxldG9uOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2hlYWRpbmctaGFzLWNvbnRlbnQgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG52YXIgVGl0bGUgPSBmdW5jdGlvbiBUaXRsZShfcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHByZWZpeENscywgY2xhc3NOYW1lKSxcbiAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgd2lkdGg6IHdpZHRoXG4gICAgfSwgc3R5bGUpXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7IiwiaW1wb3J0IFNrZWxldG9uIGZyb20gJy4vU2tlbGV0b24nO1xuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b247IiwidmFyIGxvY2FsZSA9IHtcbiAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgdGltZScsXG4gIHJhbmdlUGxhY2Vob2xkZXI6IFsnU3RhcnQgdGltZScsICdFbmQgdGltZSddXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJmdW5jdGlvbiBvbWl0KG9iaiwgZmllbGRzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItb2JqZWN0LXNwcmVhZFxuICB2YXIgc2hhbGxvd0NvcHkgPSBPYmplY3QuYXNzaWduKHt9LCBvYmopO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGtleSA9IGZpZWxkc1tpXTtcbiAgICBkZWxldGUgc2hhbGxvd0NvcHlba2V5XTtcbiAgfVxuXG4gIHJldHVybiBzaGFsbG93Q29weTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb21pdDsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIC8vIE9wdGlvbnMuanN4XG4gIGl0ZW1zX3Blcl9wYWdlOiAnLyBwYWdlJyxcbiAganVtcF90bzogJ0dvIHRvJyxcbiAganVtcF90b19jb25maXJtOiAnY29uZmlybScsXG4gIHBhZ2U6ICcnLFxuICAvLyBQYWdpbmF0aW9uLmpzeFxuICBwcmV2X3BhZ2U6ICdQcmV2aW91cyBQYWdlJyxcbiAgbmV4dF9wYWdlOiAnTmV4dCBQYWdlJyxcbiAgcHJldl81OiAnUHJldmlvdXMgNSBQYWdlcycsXG4gIG5leHRfNTogJ05leHQgNSBQYWdlcycsXG4gIHByZXZfMzogJ1ByZXZpb3VzIDMgUGFnZXMnLFxuICBuZXh0XzM6ICdOZXh0IDMgUGFnZXMnXG59OyIsInZhciBsb2NhbGUgPSB7XG4gIGxvY2FsZTogJ2VuX1VTJyxcbiAgdG9kYXk6ICdUb2RheScsXG4gIG5vdzogJ05vdycsXG4gIGJhY2tUb1RvZGF5OiAnQmFjayB0byB0b2RheScsXG4gIG9rOiAnT2snLFxuICBjbGVhcjogJ0NsZWFyJyxcbiAgbW9udGg6ICdNb250aCcsXG4gIHllYXI6ICdZZWFyJyxcbiAgdGltZVNlbGVjdDogJ3NlbGVjdCB0aW1lJyxcbiAgZGF0ZVNlbGVjdDogJ3NlbGVjdCBkYXRlJyxcbiAgd2Vla1NlbGVjdDogJ0Nob29zZSBhIHdlZWsnLFxuICBtb250aFNlbGVjdDogJ0Nob29zZSBhIG1vbnRoJyxcbiAgeWVhclNlbGVjdDogJ0Nob29zZSBhIHllYXInLFxuICBkZWNhZGVTZWxlY3Q6ICdDaG9vc2UgYSBkZWNhZGUnLFxuICB5ZWFyRm9ybWF0OiAnWVlZWScsXG4gIGRhdGVGb3JtYXQ6ICdNL0QvWVlZWScsXG4gIGRheUZvcm1hdDogJ0QnLFxuICBkYXRlVGltZUZvcm1hdDogJ00vRC9ZWVlZIEhIOm1tOnNzJyxcbiAgbW9udGhCZWZvcmVZZWFyOiB0cnVlLFxuICBwcmV2aW91c01vbnRoOiAnUHJldmlvdXMgbW9udGggKFBhZ2VVcCknLFxuICBuZXh0TW9udGg6ICdOZXh0IG1vbnRoIChQYWdlRG93biknLFxuICBwcmV2aW91c1llYXI6ICdMYXN0IHllYXIgKENvbnRyb2wgKyBsZWZ0KScsXG4gIG5leHRZZWFyOiAnTmV4dCB5ZWFyIChDb250cm9sICsgcmlnaHQpJyxcbiAgcHJldmlvdXNEZWNhZGU6ICdMYXN0IGRlY2FkZScsXG4gIG5leHREZWNhZGU6ICdOZXh0IGRlY2FkZScsXG4gIHByZXZpb3VzQ2VudHVyeTogJ0xhc3QgY2VudHVyeScsXG4gIG5leHRDZW50dXJ5OiAnTmV4dCBjZW50dXJ5J1xufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMVxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gVE9ETzogdGhpcyBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgZ2V0cyBpbXBvcnRlZCBkdXJpbmcgYnVpbGQuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE3LjAuMSc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gMHhlYWNjO1xuZXhwb3J0cy5Qcm9maWxlciA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xuZXhwb3J0cy5TdXNwZW5zZSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIGV4cG9ydHMuU3RyaWN0TW9kZSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgZXhwb3J0cy5Qcm9maWxlciA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIGV4cG9ydHMuU3VzcGVuc2UgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IDBcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gbnVsbDtcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xuICB7XG4gICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICB9XG59XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICB7XG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gICAgfVxuICB9OyAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cblxuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XG4gICAgICBzdGFjayArPSBjdXJyZW50RXh0cmFTdGFja0ZyYW1lO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGFjdCgpIHRvIHRyYWNrIHdoZXRoZXIgeW91J3JlIGluc2lkZSBhbiBhY3QoKSBzY29wZS5cbiAqL1xudmFyIElzU29tZVJlbmRlcmVyQWN0aW5nID0ge1xuICBjdXJyZW50OiBmYWxzZVxufTtcblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgSXNTb21lUmVuZGVyZXJBY3Rpbmc6IElzU29tZVJlbmRlcmVyQWN0aW5nLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBleHBvcnRzLlByb2ZpbGVyOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3RyaWN0TW9kZTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGNvbXBvbmVudE5hbWUsIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG5cbiAgICAgIHtcbiAgICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKCEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSBrZXkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBlbGVtZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xuICAgIHZhciBtYXBwZWRDaGlsZCA9IGNhbGxiYWNrKF9jaGlsZCk7IC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcblxuICAgIHZhciBjaGlsZEtleSA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRFbGVtZW50S2V5KF9jaGlsZCwgMCkgOiBuYW1lU29GYXI7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgIHZhciBlc2NhcGVkQ2hpbGRLZXkgPSAnJztcblxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcbiAgICAgICAgZXNjYXBlZENoaWxkS2V5ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KGNoaWxkS2V5KSArICcvJztcbiAgICAgIH1cblxuICAgICAgbWFwSW50b0FycmF5KG1hcHBlZENoaWxkLCBhcnJheSwgZXNjYXBlZENoaWxkS2V5LCAnJywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAgICBlc2NhcGVkUHJlZml4ICsgKCAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgbWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIGV4aXN0aW5nIGVsZW1lbnQncyBrZXkgY2FuIGJlIGEgbnVtYmVyXG4gICAgICAgIGVzY2FwZVVzZXJQcm92aWRlZEtleSgnJyArIG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgICB9XG5cbiAgICAgIGFycmF5LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSBpbnN0ZWFkLlwiICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gbnVsbCAmJiB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXJyb3IoJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlOYW1lOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LmRpc3BsYXlOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXNwbGF5TmFtZSkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIpIHtcbiAgICAgICAgICAgIHdhcm4oJ1NldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiBDb250ZXh0LkNvbnN1bWVyIGhhcyBubyBlZmZlY3QuICcgKyBcIllvdSBzaG91bGQgc2V0IGl0IGRpcmVjdGx5IG9uIHRoZSBjb250ZXh0IHdpdGggQ29udGV4dC5kaXNwbGF5TmFtZSA9ICclcycuXCIsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbnZhciBVbmluaXRpYWxpemVkID0gLTE7XG52YXIgUGVuZGluZyA9IDA7XG52YXIgUmVzb2x2ZWQgPSAxO1xudmFyIFJlamVjdGVkID0gMjtcblxuZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTsgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcbiAgICBwZW5kaW5nLl9zdGF0dXMgPSBQZW5kaW5nO1xuICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xuICAgICAgICB2YXIgZGVmYXVsdEV4cG9ydCA9IG1vZHVsZU9iamVjdC5kZWZhdWx0O1xuXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZGVmYXVsdEV4cG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgcmVzb2x2ZWQuX3Jlc3VsdCA9IGRlZmF1bHRFeHBvcnQ7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlamVjdGVkLl9zdGF0dXMgPSBSZWplY3RlZDtcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZC5fcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIHBheWxvYWQgPSB7XG4gICAgLy8gV2UgdXNlIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IGN0b3JcbiAgfTtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX3BheWxvYWQ6IHBheWxvYWQsXG4gICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW5kZXIubGVuZ3RoICE9PSAwICYmIHJlbmRlci5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgIGlmIChyZW5kZXIuZGVmYXVsdFByb3BzICE9IG51bGwgfHwgcmVuZGVyLnByb3BUeXBlcyAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHJlbmRlci5kaXNwbGF5TmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBleHBvcnRzLlByb2ZpbGVyIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IGV4cG9ydHMuU3RyaWN0TW9kZSB8fCB0eXBlID09PSBleHBvcnRzLlN1c3BlbnNlIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGlmICh0eXBlLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICB0eXBlLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAgaWYgKCEoZGlzcGF0Y2hlciAhPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuXG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIGlmICh1bnN0YWJsZV9vYnNlcnZlZEJpdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IoJ3VzZUNvbnRleHQoKSBzZWNvbmQgYXJndW1lbnQgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSAnICsgJ3VzZSBpbiBSZWFjdC4gUGFzc2luZyBpdCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1lvdSBwYXNzZWQ6ICVzLiVzJywgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzLCB0eXBlb2YgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSAnbnVtYmVyJyAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPyAnXFxuXFxuRGlkIHlvdSBjYWxsIGFycmF5Lm1hcCh1c2VDb250ZXh0KT8gJyArICdDYWxsaW5nIEhvb2tzIGluc2lkZSBhIGxvb3AgaXMgbm90IHN1cHBvcnRlZC4gJyArICdMZWFybiBtb3JlIGF0IGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cblxuICAgIG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgbmV3IFNldChbZnJvemVuT2JqZWN0XSk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXcgKi9cbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBsb29rdXAgfSBmcm9tICcuL1NlcnZpY2UnO1xuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tICdhbnRkJztcblxuaW50ZXJmYWNlIElPd25Qcm9wcyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBvblJlc29sdmU6IChyczogYW55KSA9PiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgICBycz86IHVua25vd247XG59XG5cbmV4cG9ydCBjb25zdCBMb29rdXBMYWJlbDogUmVhY3QuRkM8SU93blByb3BzPiA9ICh7aWQsIG9uUmVzb2x2ZSwgdXJsfSkgPT4ge1xuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGU8SVN0YXRlPih7aXNMb2FkaW5nOiB0cnVlfSk7XG4gICAgY29uc3Qge2lzTG9hZGluZywgcnN9ID0gc3RhdGU7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsb29rdXAodXJsKShpZCkudGhlbigocnMpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXRlKHtpc0xvYWRpbmc6IGZhbHNlLCByc30pO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7aXNMb2FkaW5nOiBmYWxzZX0pO1xuICAgICAgICB9KTtcbiAgICB9LCBbaWRdKTtcblxuICAgIHJldHVybiBpc0xvYWRpbmcgPyA8U2tlbGV0b24uQnV0dG9uIC8+IDogPHNwYW4+e29uUmVzb2x2ZShycyl9PC9zcGFuPjtcbn07XG4iLCJpbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi9TZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IGxvb2t1cCA9ICh1cmw6IHN0cmluZykgPT4gKGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4gPT4gQVBJLmdldChgJHt1cmx9LyR7aWR9YCk7XG4iLCJleHBvcnQgY29uc3QgQVBJID0ge1xuICAgIGdldDogPFRSZXNwb25zZT4odXJsOiBzdHJpbmcpOiBQcm9taXNlPFRSZXNwb25zZT4gPT4gZmV0Y2godXJsKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKSxcbn07XG4iLCJpbXBvcnQgeyBBUEkgfSBmcm9tICcuL1NlcnZpY2UnO1xuaW1wb3J0IHsgTG9va3VwTGFiZWwgfSBmcm9tICcuL0NvbXBvbmVudHMvTG9va3VwL0xvb2t1cExhYmVsJztcblxuZXhwb3J0IHtBUEksIExvb2t1cExhYmVsfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWRPID0ge307IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=