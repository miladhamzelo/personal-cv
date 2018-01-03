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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _resumeContainer = __webpack_require__(18);

var _resumeContainer2 = _interopRequireDefault(_resumeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _resumeContainer2.default, {
    path: '/',
    exact: true
}), _extends({}, _resumeContainer2.default)];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Subheader");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/flight-takeoff");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mapComponent = __webpack_require__(48);

var _mapComponent2 = _interopRequireDefault(_mapComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapContainer = function (_Component) {
    _inherits(MapContainer, _Component);

    function MapContainer() {
        _classCallCheck(this, MapContainer);

        return _possibleConstructorReturn(this, (MapContainer.__proto__ || Object.getPrototypeOf(MapContainer)).apply(this, arguments));
    }

    _createClass(MapContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_mapComponent2.default, { newZoom: this.props.newZoom, center: this.props.center, location: this.props.location, company: this.props.company });
        }
    }]);

    return MapContainer;
}(_react.Component);

exports.default = MapContainer;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/info");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var badgeClassMappings = exports.badgeClassMappings = {
    linkedIn: 'linked-in-badge',
    github: 'github-badge',
    email: 'email-badge'
};

var badgeItemInfo = exports.badgeItemInfo = [{
    iconKey: 'linkedIn', type: 'Linked In Profile', action: 'Go', url: 'https://www.linkedin.com/in/shane-arthur-8b902071/'
}, {
    iconKey: 'github', type: 'Github Profile', action: 'Go', url: 'http://github.com/shane-arthur'
}, {
    iconKey: 'email', type: 'Contact Me', action: 'Email', url: ''
}];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCategory = setCategory;
exports.clearCategories = clearCategories;
exports.goToNextSlide = goToNextSlide;
exports.goToPrevSlide = goToPrevSlide;
exports.showExperiencePaper = showExperiencePaper;

var _actionTypes = __webpack_require__(13);

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function setCategory(displayKey) {
  return {
    type: types.SET_SELECTED_CATEGORY, displayKey: displayKey
  };
}

function clearCategories() {
  return {
    type: types.CLEAR_CATEGORIES
  };
}

function goToNextSlide() {
  return {
    type: types.NEXT_SLIDE
  };
}

function goToPrevSlide() {
  return {
    type: types.PREV_SLIDE
  };
}

function showExperiencePaper() {
  return {
    type: types.SHOW_HIDE_PAPER
  };
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_SELECTED_CATEGORY = exports.SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

var CLEAR_CATEGORIES = exports.CLEAR_CATEGORIES = 'CLEAR_CATEGORIES';

var NEXT_SLIDE = exports.NEXT_SLIDE = 'NEXT_SLIDE';

var PREV_SLIDE = exports.PREV_SLIDE = 'PREV_SLIDE';

var SHOW_HIDE_PAPER = exports.SHOW_HIDE_PAPER = 'SHOW_HIDE_PAPER';

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(15);

var _express = __webpack_require__(16);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(4);

var _expressHttpProxy = __webpack_require__(17);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

var _ssrHandler = __webpack_require__(67);

var _ssrHandler2 = _interopRequireDefault(_ssrHandler);

var _createStore = __webpack_require__(73);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));
app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _ssrHandler2.default)(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _resumeComponent = __webpack_require__(19);

var _resumeComponent2 = _interopRequireDefault(_resumeComponent);

var _redux = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(12);

var ViewActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResumeContainer = function (_Component) {
    _inherits(ResumeContainer, _Component);

    function ResumeContainer() {
        _classCallCheck(this, ResumeContainer);

        return _possibleConstructorReturn(this, (ResumeContainer.__proto__ || Object.getPrototypeOf(ResumeContainer)).apply(this, arguments));
    }

    _createClass(ResumeContainer, [{
        key: '_getDisplayKey',
        value: function _getDisplayKey() {
            var categories = this.props.resumeCategories;
            var selectedItem = categories.find(function (item) {
                return item.selected;
            });

            return selectedItem ? selectedItem.key : null;
        }
    }, {
        key: 'render',
        value: function render() {
            var displayKey = this._getDisplayKey();
            return _react2.default.createElement(_resumeComponent2.default, {
                experience: this.props.experience,
                categories: this.props.resumeCategories,
                actions: this.props.actions,
                selectedKey: displayKey,
                selectedSlide: this.props.selectedSlide,
                showExperience: this.props.showExperience
            });
        }
    }]);

    return ResumeContainer;
}(_react.Component);

function mapStateToProps(state) {
    return {
        resumeCategories: state.reducer.categories,
        experience: state.reducer.experience,
        selectedSlide: state.reducer.selectedTile,
        showExperience: state.reducer.showExperience
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(ViewActions, dispatch)
    };
}

exports.default = { component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ResumeContainer)
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _categorySelectorContainer = __webpack_require__(20);

var _categorySelectorContainer2 = _interopRequireDefault(_categorySelectorContainer);

var _contentContainer = __webpack_require__(28);

var _contentContainer2 = _interopRequireDefault(_contentContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResumeComponent = function ResumeComponent(props) {

    var content = function () {
        return !props.selectedKey ? _react2.default.createElement(_categorySelectorContainer2.default, { categories: props.categories, actions: props.actions }) : _react2.default.createElement(_contentContainer2.default, { actions: props.actions, displayKey: props.selectedKey, experience: props.experience, showExperience: props.showExperience, selectedSlide: props.selectedSlide });
    }();

    return _react2.default.createElement(
        'div',
        { className: 'city-backdrop position-vertical-centered' },
        content
    );
};

exports.default = ResumeComponent;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _categorySelectorComponent = __webpack_require__(21);

var _categorySelectorComponent2 = _interopRequireDefault(_categorySelectorComponent);

var _index = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategorySelectorContainer = function (_Component) {
    _inherits(CategorySelectorContainer, _Component);

    function CategorySelectorContainer() {
        _classCallCheck(this, CategorySelectorContainer);

        return _possibleConstructorReturn(this, (CategorySelectorContainer.__proto__ || Object.getPrototypeOf(CategorySelectorContainer)).apply(this, arguments));
    }

    _createClass(CategorySelectorContainer, [{
        key: '_getSelectedCategory',
        value: function _getSelectedCategory() {
            var selectedItem = this.props.categories.find(function (item) {
                return item.selected === true;
            });
            return selectedItem ? selectedItem.displayKey : selectedItem;
        }
    }, {
        key: 'render',
        value: function render() {
            var selectedItemKey = this._getSelectedCategory();

            return _react2.default.createElement(_categorySelectorComponent2.default, { actions: this.props.actions, categories: this.props.categories, itemCount: _index.icons.length, displayIcons: _index.icons, selectedKey: selectedItemKey });
        }
    }]);

    return CategorySelectorContainer;
}(_react.Component);

exports.default = CategorySelectorContainer;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _categoryItem = __webpack_require__(22);

var _categoryItem2 = _interopRequireDefault(_categoryItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategorySelectorComponent = function CategorySelectorComponent(props) {

    var renderItems = function renderItems() {
        var items = [];
        for (var i = 0; i < props.itemCount; i++) {
            var num = i + 1;
            var className = 'circle-quarter-' + props.categories[i].iconIndex;
            var item = _react2.default.createElement(
                'div',
                { onClick: props.actions.setCategory.bind(undefined, props.categories[i].key), key: i, className: className },
                ' ',
                _react2.default.createElement(_categoryItem2.default, { title: props.categories[i].title, displayKey: props.categories[i].key, actions: props.actions, index: num, icon: props.displayIcons[i] })
            );
            items.push(item);
        }
        return items;
    };

    var items = renderItems();

    return _react2.default.createElement(
        'div',
        { className: 'category-selector-wrapper position-horizontal-centered' },
        _react2.default.createElement(
            'div',
            { className: 'category-selector-widget-wrapper position-horizontal-centered' },
            items
        )
    );
};

exports.default = CategorySelectorComponent;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categoryItem = function categoryItem(props) {

    var style = {
        width: '48px',
        height: '48px'
    };

    var _getContent = function _getContent() {
        return props.index > 2 ? _react2.default.createElement(
            'div',
            { className: 'category-item-wrapper gap-top' },
            _react2.default.createElement(
                'p',
                null,
                ' ',
                props.title
            ),
            ' ',
            _react2.default.createElement(props.icon, { style: style })
        ) : _react2.default.createElement(
            'div',
            { className: 'category-item-wrapper' },
            _react2.default.createElement('div', { className: 'filler' }),
            _react2.default.createElement(props.icon, { style: style }),
            _react2.default.createElement(
                'p',
                null,
                props.title
            )
        );
    };

    return _react2.default.createElement(
        'div',
        { onClick: props.actions.setCategory.bind(undefined, props.displayKey) },
        _getContent()
    );
};

exports.default = categoryItem;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icons = undefined;

var _smokingRooms = __webpack_require__(24);

var _smokingRooms2 = _interopRequireDefault(_smokingRooms);

var _whatshot = __webpack_require__(25);

var _whatshot2 = _interopRequireDefault(_whatshot);

var _fitnessCenter = __webpack_require__(26);

var _fitnessCenter2 = _interopRequireDefault(_fitnessCenter);

var _adb = __webpack_require__(27);

var _adb2 = _interopRequireDefault(_adb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = exports.icons = [_smokingRooms2.default, _whatshot2.default, _fitnessCenter2.default, _adb2.default];

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/places/smoking-rooms");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/social/whatshot");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/places/fitness-center");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/notification/adb");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contentComponent = __webpack_require__(29);

var _contentComponent2 = _interopRequireDefault(_contentComponent);

var _redux = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(12);

var ViewActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentContainer = function (_Component) {
    _inherits(ContentContainer, _Component);

    function ContentContainer() {
        _classCallCheck(this, ContentContainer);

        return _possibleConstructorReturn(this, (ContentContainer.__proto__ || Object.getPrototypeOf(ContentContainer)).apply(this, arguments));
    }

    _createClass(ContentContainer, [{
        key: '_showContentSwitcher',
        value: function _showContentSwitcher() {
            var key = 'experience';
            return this.props.displayKey === key && !this.props.showExperience;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_contentComponent2.default, {
                actions: this.props.actions,
                displayKey: this.props.displayKey,
                experience: this.props.experience,
                selectedSlide: this.props.selectedSlide,
                showExperience: this.props.showExperience,
                showContentSwitcher: this._showContentSwitcher()
            });
        }
    }]);

    return ContentContainer;
}(_react.Component);

exports.default = ContentContainer;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _exitToApp = __webpack_require__(30);

var _exitToApp2 = _interopRequireDefault(_exitToApp);

var _IconButton = __webpack_require__(1);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _contentSelectorContainer = __webpack_require__(31);

var _contentSelectorContainer2 = _interopRequireDefault(_contentSelectorContainer);

var _contentSwitcher = __webpack_require__(64);

var _contentSwitcher2 = _interopRequireDefault(_contentSwitcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentComponent = function ContentComponent(props) {

    var exitButton = function () {

        return !props.showExperience ? _react2.default.createElement(
            'div',
            { className: 'exit-to-main-container' },
            _react2.default.createElement(
                _IconButton2.default,
                { onClick: props.actions.clearCategories },
                _react2.default.createElement(_exitToApp2.default, null)
            )
        ) : _react2.default.createElement(
            'div',
            { className: 'exit-to-main-container' },
            _react2.default.createElement(
                _IconButton2.default,
                { onClick: props.actions.showExperiencePaper },
                _react2.default.createElement(_exitToApp2.default, null)
            )
        );
    }();

    return _react2.default.createElement(
        'div',
        { className: 'content-component-wrapper' },
        exitButton,
        _react2.default.createElement(_contentSwitcher2.default, { showSwitcher: props.showContentSwitcher, next: props.actions.goToNextSlide, prev: props.actions.goToPrevSlide }),
        _react2.default.createElement(_contentSelectorContainer2.default, {
            showExperience: props.showExperience,
            experience: props.experience,
            displayKey: props.displayKey,
            selectedSlide: props.selectedSlide,
            actions: props.actions
        })
    );
};

exports.default = ContentComponent;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/exit-to-app");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentSelectorContainer = function (_Component) {
    _inherits(ContentSelectorContainer, _Component);

    function ContentSelectorContainer() {
        _classCallCheck(this, ContentSelectorContainer);

        return _possibleConstructorReturn(this, (ContentSelectorContainer.__proto__ || Object.getPrototypeOf(ContentSelectorContainer)).apply(this, arguments));
    }

    _createClass(ContentSelectorContainer, [{
        key: '_getSelectedComponent',
        value: function _getSelectedComponent() {
            return _index.config[this.props.displayKey];
        }
    }, {
        key: 'render',
        value: function render() {
            var Component = this._getSelectedComponent();

            return _react2.default.createElement(Component, { props: this.props });
        }
    }]);

    return ContentSelectorContainer;
}(_react.Component);

exports.default = ContentSelectorContainer;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _experienceContainer = __webpack_require__(33);

var _experienceContainer2 = _interopRequireDefault(_experienceContainer);

var _contactMeContainer = __webpack_require__(57);

var _contactMeContainer2 = _interopRequireDefault(_contactMeContainer);

var _educationComponent = __webpack_require__(61);

var _educationComponent2 = _interopRequireDefault(_educationComponent);

var _skillsListComponent = __webpack_require__(62);

var _skillsListComponent2 = _interopRequireDefault(_skillsListComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = exports.config = {
  skills: _skillsListComponent2.default,
  experience: _experienceContainer2.default,
  contactMe: _contactMeContainer2.default,
  education: _educationComponent2.default
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _experienceComponent = __webpack_require__(34);

var _experienceComponent2 = _interopRequireDefault(_experienceComponent);

var _workDetailsComponent = __webpack_require__(54);

var _workDetailsComponent2 = _interopRequireDefault(_workDetailsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExperienceContainer = function (_Component) {
    _inherits(ExperienceContainer, _Component);

    function ExperienceContainer() {
        _classCallCheck(this, ExperienceContainer);

        return _possibleConstructorReturn(this, (ExperienceContainer.__proto__ || Object.getPrototypeOf(ExperienceContainer)).apply(this, arguments));
    }

    _createClass(ExperienceContainer, [{
        key: '_renderComponent',
        value: function _renderComponent() {
            var selectedJob = this.props.props.experience[this.props.props.selectedSlide];
            return this.props.props.showExperience ? _react2.default.createElement(_workDetailsComponent2.default, { jobKey: selectedJob.key, jobTitle: selectedJob.company }) : _react2.default.createElement(_experienceComponent2.default, { actions: this.props.props.actions, experience: this.props.props.experience, selectedSlide: this.props.props.selectedSlide });
        }
    }, {
        key: 'render',
        value: function render() {
            var comp = this._renderComponent();
            return comp;
        }
    }]);

    return ExperienceContainer;
}(_react.Component);

exports.default = ExperienceContainer;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _techListComponent = __webpack_require__(35);

var _techListComponent2 = _interopRequireDefault(_techListComponent);

var _Subheader = __webpack_require__(7);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _mapContainer = __webpack_require__(9);

var _mapContainer2 = _interopRequireDefault(_mapContainer);

var _info = __webpack_require__(10);

var _info2 = _interopRequireDefault(_info);

var _index = __webpack_require__(53);

var _IconButton = __webpack_require__(1);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExperienceComponent = function ExperienceComponent(props) {

    var _getItems = function _getItems(key) {
        return _index.skills[key];
    };

    var job = function (key) {
        return props.experience[props.selectedSlide];
    }();

    var pictureClassNames = function () {
        var classNames = ['association-header'];
        classNames.push(_index.classMappings[job.key]);
        return classNames;
    }();

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h2',
            null,
            ' Experience '
        ),
        _react2.default.createElement(
            'div',
            { className: 'experience-component-container position-horizontal-centered' },
            _react2.default.createElement(
                'div',
                { className: 'header-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'association-header-container' },
                    _react2.default.createElement('div', { className: pictureClassNames.join(', ') })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'association-info-container' },
                    _react2.default.createElement(
                        'span',
                        { className: 'org-name' },
                        ' ',
                        job.company
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'date-worked' },
                        ' ',
                        job.date.start,
                        ' - ',
                        job.date.end
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'role-container' },
                        ' ',
                        job.title,
                        '  '
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'job-info-container' },
                        ' ',
                        _react2.default.createElement(
                            _IconButton2.default,
                            { onClick: props.actions.showExperiencePaper },
                            _react2.default.createElement(_info2.default, null),
                            ' '
                        ),
                        ' '
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'work-history-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'form-tech-list' },
                    _react2.default.createElement(
                        'div',
                        { className: 'subheader-container' },
                        _react2.default.createElement(
                            _Subheader2.default,
                            null,
                            ' Relevent Skills '
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'tech-list-container' },
                        _react2.default.createElement(_techListComponent2.default, { items: _getItems(job.key) })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'work-information-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'subheader-container' },
                        _react2.default.createElement(
                            _Subheader2.default,
                            null,
                            'Position Information'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'map-container' },
                        _react2.default.createElement(_mapContainer2.default, { center: job.center, location: job.location, company: job.company })
                    )
                )
            )
        )
    );
};

exports.default = ExperienceComponent;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(6);

var _Subheader = __webpack_require__(7);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _chatBubble = __webpack_require__(36);

var _chatBubble2 = _interopRequireDefault(_chatBubble);

var _index = __webpack_require__(37);

var _flightTakeoff = __webpack_require__(8);

var _flightTakeoff2 = _interopRequireDefault(_flightTakeoff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TechListComponent = function TechListComponent(props) {

    var getAvatar = function getAvatar(key) {
        return _index.PictureMappings[key];
    };

    var items = function () {
        return props.items.map(function (item) {
            return _react2.default.createElement(_List.ListItem, {
                key: item.title,
                primaryText: item.title,
                leftAvatar: getAvatar(item.avatarKey),
                rightIcon: null
            });
        });
    }();

    return _react2.default.createElement(
        _List.List,
        null,
        items
    );
};

exports.default = TechListComponent;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/communication/chat-bubble");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PictureMappings = undefined;

var _accessibility = __webpack_require__(38);

var _accessibility2 = _interopRequireDefault(_accessibility);

var _build = __webpack_require__(39);

var _build2 = _interopRequireDefault(_build);

var _grade = __webpack_require__(40);

var _grade2 = _interopRequireDefault(_grade);

var _pets = __webpack_require__(41);

var _pets2 = _interopRequireDefault(_pets);

var _beenhere = __webpack_require__(42);

var _beenhere2 = _interopRequireDefault(_beenhere);

var _flightTakeoff = __webpack_require__(8);

var _flightTakeoff2 = _interopRequireDefault(_flightTakeoff);

var _hourglassFull = __webpack_require__(43);

var _hourglassFull2 = _interopRequireDefault(_hourglassFull);

var _motorcycle = __webpack_require__(44);

var _motorcycle2 = _interopRequireDefault(_motorcycle);

var _fingerprint = __webpack_require__(45);

var _fingerprint2 = _interopRequireDefault(_fingerprint);

var _gavel = __webpack_require__(46);

var _gavel2 = _interopRequireDefault(_gavel);

var _rowing = __webpack_require__(47);

var _rowing2 = _interopRequireDefault(_rowing);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PictureMappings = exports.PictureMappings = {
    takeoff: _react2.default.createElement(_accessibility2.default, null),
    beenhere: _react2.default.createElement(_beenhere2.default, null),
    accessibiity: _react2.default.createElement(_flightTakeoff2.default, null),
    build: _react2.default.createElement(_build2.default, null),
    grade: _react2.default.createElement(_grade2.default, null),
    pet: _react2.default.createElement(_pets2.default, null),
    hourglass: _react2.default.createElement(_hourglassFull2.default, null),
    motorcycle: _react2.default.createElement(_motorcycle2.default, null),
    fingerprint: _react2.default.createElement(_fingerprint2.default, null),
    gavel: _react2.default.createElement(_gavel2.default, null),
    rowing: _react2.default.createElement(_rowing2.default, null)
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/accessibility");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/build");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/grade");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/pets");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/maps/beenhere");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/hourglass-full");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/motorcycle");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/fingerprint");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/gavel");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/rowing");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(49);

var _reactGoogleMaps = __webpack_require__(50);

var _mapMarker = __webpack_require__(51);

var _mapMarker2 = _interopRequireDefault(_mapMarker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var markers = function markers(locations, company) {
    return locations.map(function (location) {
        return _react2.default.createElement(_mapMarker2.default, { key: company, company: company, location: location });
    });
};

var zoom = function zoom(newZoom) {
    return newZoom ? newZoom : 10;
};

var MapComponent = (0, _recompose.compose)((0, _recompose.withProps)({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDu-_YjVbz6XfRXKv0HT45AoCIXPTXctKo&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: _react2.default.createElement("div", { style: { height: "100%" } }),
    containerElement: _react2.default.createElement("div", { style: { height: "inherit" } }),
    mapElement: _react2.default.createElement("div", { style: { height: "100%" } })
}), _reactGoogleMaps.withScriptjs, _reactGoogleMaps.withGoogleMap)(function (props) {
    return _react2.default.createElement(
        _reactGoogleMaps.GoogleMap,
        {
            defaultZoom: zoom(props.newZoom),
            center: { lat: props.center.lat, lng: props.center.lng }
        },
        markers(props.location, props.company)
    );
});

exports.default = MapComponent;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MarkerWithLabel = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapMarker = function MapMarker(props) {

    return _react2.default.createElement(
        _MarkerWithLabel.MarkerWithLabel,
        {
            position: { lat: props.location.lat, lng: props.location.lng },
            labelAnchor: new google.maps.Point(0, 0),
            labelStyle: { color: "#ffffff", height: "25px", lineHeight: "25px", width: "75px", fontSize: "0.5rem", padding: "5px", backgroundColor: "#ff9999", borderRadius: "10px" }
        },
        _react2.default.createElement(
            "div",
            { className: "marker-content" },
            props.company
        )
    );
};

exports.default = MapMarker;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps/lib/components/addons/MarkerWithLabel");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var classMappings = exports.classMappings = {
    sfw: 'safeway-img',
    gnx: 'gnx-img',
    ntt: 'ntt-img',
    inf: 'inf-img',
    cap: 'cap-img',
    hdc: 'hdc-img'
};

var skills = exports.skills = {
    sfw: [{ title: 'ASP.NET MVC 5', avatarKey: 'motorcycle' }, { title: 'JQuery UI', avatarKey: 'beenhere' }, { title: 'LESS', avatarKey: 'hourglass' }, { title: 'C# 5.0', avatarKey: 'gavel' }, { title: 'Linq', avatarKey: 'rowing' }],
    gnx: [{ title: 'ASP.NET Webforms', avatarKey: 'takeoff' }, { title: 'ASP.NET MVC 4', avatarKey: 'beenhere' }, { title: 'JQuery Mobile', avatarKey: 'fingerprint' }, { title: 'Entity Framework', avatarKey: 'motorcycle' }, { title: 'MSSql - Azure', avatarKey: 'gavel' }],
    ntt: [{ title: 'Java 6 - Spring MVC', avatarKey: 'motorcycle' }, { title: 'Tomcat 7x', avatarKey: 'gavel' }, { title: 'NHibernate', avatarKey: 'rowing' }, { title: 'PostGres SQL', avatarKey: 'pet' }],
    inf: [{ title: 'React', avatarKey: 'beenhere' }, { title: 'Redux', avatarKey: 'accessibiity' }, { title: 'webpack', avatarKey: 'motorcycle' }, { title: 'SASS', avatarKey: 'gavel' }, { title: 'Angular 1x', avatarKey: 'rowing' }, { title: 'PostGres SQL', avatarKey: 'build' }, { title: 'Typescript & ES6', avatarKey: 'grade' }],
    cap: [{ title: 'Angular 4.x', avatarKey: 'pet' }, { title: '@ngrx', avatarKey: 'hourglass' }, { title: 'Webpack 2.x', avatarKey: 'motorcycle' }, { title: 'Rxjs', avatarKey: 'fingerprint' }, { title: 'SASS', avatarKey: 'gavel' }, { title: 'Material Ui', avatarKey: 'rowing' }, { title: 'Typescript', avatarKey: 'takeoff' }],
    hdc: [{ title: 'Hybris SAP 6.5', avatarKey: 'fingerprint' }, { title: 'Angular 5', avatarKey: 'motorcycle' }, { title: 'Typescript', avatarKey: 'rowing' }, { title: '@ngrx 4.x', avatarKey: 'gavel' }, { title: 'SASS', avatarKey: 'pet' }, { title: 'Webpack 3.x', avatarKey: 'hourglass' }]
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Paper = __webpack_require__(55);

var _Paper2 = _interopRequireDefault(_Paper);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WorkDetailsComponent = function WorkDetailsComponent(props) {

    var style = {
        height: 'auto',
        width: 600,
        textAlign: 'center',
        display: 'block',
        borderRadius: 50,
        margin: '0 auto',
        backgroundColor: 'inherit'
    };

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'work-details-container' },
            _react2.default.createElement(
                _Paper2.default,
                { style: style, zDepth: 5, rounded: false },
                _react2.default.createElement(
                    'h1',
                    { className: 'work-details-header' },
                    _react2.default.createElement(
                        'span',
                        { className: 'job-title-container' },
                        props.jobTitle,
                        ' '
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'position-header-container' },
                        'Job Duties : '
                    ),
                    '  '
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'work-details' },
                    ' ',
                    '' + _index.jobDuties[props.jobKey]
                )
            )
        )
    );
};

exports.default = WorkDetailsComponent;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var gnx = "Greennexxus is a software as a service startup, \nallowing organizations to track their environmentally friendly initiatives.\n\nI was a Full stack ASP.net web developer responsible for delivering and maintaining the UI for users of the platform.\n\nInitially the platform was web-based only, but near the end of my tenure we started introducing mobile-first web views\nand toying around with native mobile-apps using Xamarin.";

var sfw = "Safeway     \n\nwas in the process of being bought out by Sobeys during my contract. \nOur teams duty was to rebrand an existing mobile-first view web application while upgrading from MVC 3 to 5. \nI was a Full stack ASP.net developer responbile for delivering the mobile and web UI for the web application.";

var ntt = "My team was the offshore core-services team for Fidelity Investments in Durham, NC. I was a backend Java 6: Spring\nMVC developer responsible for delivering and maintaining Fidelities RESTful api which was being consumed\nby the UI team onshore. Our offshore team was fully functioning as we saw the delivery of features through from inseption to delivery - \nTeam consisted of PM's, BA's, functional QA's, manual QA's and developers.";

var inf = "My tenure at Infusion had me working on two projects. The first was for a US-Based financial instituion. \nI was a fullstack Javascript Developer helping build the UI for a client-based web app. This was considered cutting edge\nat the time as we were one of the first teams around to leverage react in its infancy (react 0.12-0.13). The second project\nwas for a Canadian based financial institution. The app helped call center agents streamline their work flow when \ndealing with high volumes of calls. I was a full stack developer helping deliver the client facing UI as well as dealing\nwith service-layer API developement.";

var cap = "During my tenure at Capco I worked on project, an internal-facing web-application. The application\nwas the Admin Panel for BHOB Harris's customer facing mobile app.  The customer facing mobile app was \nwritten in Angular 4.x, using Ionic. The admin-desktop app was also written in Angular 4.x. I was responsible for everything\nfront-end/UI related on the Admin application.";

var hdc = "My latest role is with the Home Depot Canada.  Home Depot is leverging Hybris SAP 6.2 as a content\ndelivery system, among its other features. Hybris 6.5 has the ability to integrate with SPA's for view-slots. My role\nhere will be overseeing the integration and helping architect the new-front code, moving from ES5 and JSPS to \nmodern Typescript (ES6) and Angular 5.";

var jobDuties = exports.jobDuties = {
    gnx: gnx,
    sfw: sfw,
    ntt: ntt,
    inf: inf,
    cap: cap,
    hdc: hdc
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contactMeComponent = __webpack_require__(58);

var _contactMeComponent2 = _interopRequireDefault(_contactMeComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactMeContainer = function (_Component) {
    _inherits(ContactMeContainer, _Component);

    function ContactMeContainer() {
        _classCallCheck(this, ContactMeContainer);

        return _possibleConstructorReturn(this, (ContactMeContainer.__proto__ || Object.getPrototypeOf(ContactMeContainer)).apply(this, arguments));
    }

    _createClass(ContactMeContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_contactMeComponent2.default, null);
        }
    }]);

    return ContactMeContainer;
}(_react.Component);

exports.default = ContactMeContainer;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _phoneIphone = __webpack_require__(59);

var _phoneIphone2 = _interopRequireDefault(_phoneIphone);

var _contactMeBadgeItem = __webpack_require__(60);

var _contactMeBadgeItem2 = _interopRequireDefault(_contactMeBadgeItem);

var _index = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactMeComponent = function ContactMeComponent(props) {

    var badgeItems = function () {
        return _index.badgeItemInfo.map(function (item) {
            return _react2.default.createElement(
                'span',
                { key: item.iconKey },
                _react2.default.createElement(_contactMeBadgeItem2.default, { iconKey: item.iconKey, type: item.type, action: item.action, url: item.url }),
                _react2.default.createElement(_contactMeBadgeItem2.default, null)
            );
        });
    }();

    var iconStyle = {
        height: '100px',
        width: '100px'
    };

    return _react2.default.createElement(
        'div',
        { className: 'contact-me-page-container' },
        _react2.default.createElement(
            'h2',
            null,
            ' Contact Me '
        ),
        _react2.default.createElement(
            'div',
            { className: 'contact-me-container' },
            _react2.default.createElement(
                'div',
                { className: 'contact-icon-header' },
                ' ',
                _react2.default.createElement(_phoneIphone2.default, { style: iconStyle }),
                ' '
            ),
            _react2.default.createElement(
                'div',
                { className: 'contact-me-subheader-container' },
                'Check out my profile or send me a message'
            ),
            _react2.default.createElement(
                'div',
                { className: 'contact-method-container' },
                badgeItems
            )
        )
    );
};

exports.default = ContactMeComponent;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/hardware/phone-iphone");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactMeBadgeItem = function ContactMeBadgeItem(props) {
    var iconClassName = _index.badgeClassMappings[props.iconKey];

    return _react2.default.createElement(
        'div',
        { className: 'contact-me-badge-item-container' },
        _react2.default.createElement('span', { className: iconClassName }),
        _react2.default.createElement(
            'span',
            { className: 'contact-type-container' },
            props.type
        ),
        _react2.default.createElement(
            'span',
            { className: 'contact-info-container' },
            _react2.default.createElement(
                'a',
                { target: '_blank', href: props.url },
                props.action
            )
        )
    );
};

exports.default = ContactMeBadgeItem;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mapContainer = __webpack_require__(9);

var _mapContainer2 = _interopRequireDefault(_mapContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EducationComponent = function EducationComponent() {

    var munLocationMetaData = {
        center: {
            lat: 47.575,
            lng: -52.74
        },
        coords: [{
            lat: 47.5737975,
            lng: -52.732905
        }],
        name: 'Memeorial University of Newfoundland'
    };

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h2',
            null,
            ' Education '
        ),
        _react2.default.createElement(
            'div',
            { className: 'education-component-container' },
            _react2.default.createElement(
                'div',
                { className: 'school-info-container' },
                _react2.default.createElement('div', { className: 'school-image' }),
                _react2.default.createElement(
                    'div',
                    { className: 'school-info' },
                    _react2.default.createElement(
                        'span',
                        { className: 'mun-container' },
                        ' Memorial Unversity of Newfoundland '
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'focus-study' },
                        'B.Sc Computer Science '
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'degree-dates' },
                        '2008 - 2012 '
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'school-map-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'map-container' },
                    _react2.default.createElement(_mapContainer2.default, { newZoom: 12, center: munLocationMetaData.center, location: munLocationMetaData.coords,
                        company: munLocationMetaData.name })
                )
            )
        )
    );
};

exports.default = EducationComponent;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(63);

var _info = __webpack_require__(10);

var _info2 = _interopRequireDefault(_info);

var _List = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkillsListComponent = function SkillsListComponent() {

    var items = function () {
        return _index.skills.map(function (item) {
            return _react2.default.createElement(_List.ListItem, {
                key: item.name,
                primaryText: item.name,
                leftAvatar: _react2.default.createElement(
                    'a',
                    { href: item.url, target: '_blank' },
                    _react2.default.createElement(_info2.default, null)
                ),
                rightIcon: null
            });
        });
    }();

    return _react2.default.createElement(
        'div',
        { className: 'skills-header-container' },
        _react2.default.createElement(
            'h2',
            null,
            ' Relevent Skills '
        ),
        _react2.default.createElement(
            'div',
            { className: 'skills-list-component-container' },
            _react2.default.createElement(
                'div',
                { className: 'list-in-thirds' },
                _react2.default.createElement(
                    _List.List,
                    null,
                    items.slice(0, 7)
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'list-in-thirds' },
                _react2.default.createElement(
                    _List.List,
                    null,
                    items.slice(7, 14)
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'list-in-thirds hide-border' },
                _react2.default.createElement(
                    _List.List,
                    null,
                    items.slice(14, items.length - 1)
                )
            )
        )
    );
};

exports.default = SkillsListComponent;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var skills = exports.skills = [{ name: 'react', url: 'https://reactjs.org/' }, { name: 'redux', url: 'https://redux.js.org/docs/introduction/' }, { name: 'angular 1.x, 4.x & 5', url: 'https://angular.io/' }, { name: '@ngrx 2-4', url: 'https://github.com/ngrx/platform' }, { name: 'ES6', url: 'https://babeljs.io/learn-es2015/' }, { name: 'TypeScript', url: 'https://www.typescriptlang.org/' }, { name: 'Postgres Sql', url: 'https://www.postgresql.org/' }, { name: 'Mongo DB', url: 'https://www.mongodb.com/' }, { name: 'SASS', url: 'http://sass-lang.com/' }, { name: 'HTML5', url: 'https://www.w3schools.com/html/html5_intro.asp' }, { name: 'Responsive Web Design', url: 'https://www.w3schools.com/html/html_responsive.asp' }, { name: 'Node.js 8+', url: 'https://nodejs.org/en/' }, { name: 'TDD - Jest & Karma/Jasmine', url: 'https://github.com/dwyl/learn-tdd' }, { name: 'Webpack 1.x-3.x', url: 'https://webpack.js.org/' }, { name: 'Babel 6-7', url: 'https://babeljs.io/' }, { name: 'Java 6-8', url: 'http://www.oracle.com/technetwork/java/javase/downloads/index.html' }, { name: 'C# 4-6', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' }, { name: 'Spring MVC', url: 'https://spring.io/guides/gs/serving-web-content/' }, { name: 'ASP.net MVC 4,5', url: 'https://docs.microsoft.com/en-us/aspnet/mvc/mvc5' }, { name: 'ASP.net webforms', url: 'https://www.asp.net/web-forms' }, { name: 'Jquery Mobile', url: 'https://jquerymobile.com/' }, { name: 'MSSQL', url: 'https://www.microsoft.com/en-ca/sql-server/sql-server-2016x' }];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _IconButton = __webpack_require__(1);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _keyboardArrowLeft = __webpack_require__(65);

var _keyboardArrowLeft2 = _interopRequireDefault(_keyboardArrowLeft);

var _keyboardArrowRight = __webpack_require__(66);

var _keyboardArrowRight2 = _interopRequireDefault(_keyboardArrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentSwitcher = function ContentSwitcher(props) {

    var content = function () {
        var leftStyle = {
            float: 'left'
        };

        var rightStyle = {
            float: 'right'
        };
        return props.showSwitcher ? _react2.default.createElement(
            'div',
            { className: 'content-switcher-container' },
            _react2.default.createElement(
                _IconButton2.default,
                { style: leftStyle, onClick: props.prev.bind(undefined) },
                _react2.default.createElement(_keyboardArrowLeft2.default, { style: leftStyle })
            ),
            _react2.default.createElement(
                _IconButton2.default,
                { style: rightStyle, onClick: props.next.bind(undefined) },
                _react2.default.createElement(_keyboardArrowRight2.default, { style: rightStyle })
            )
        ) : null;
    }();

    return content;
};

exports.default = ContentSwitcher;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/hardware/keyboard-arrow-left");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/hardware/keyboard-arrow-right");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(68);

var _reactRouterDom = __webpack_require__(69);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

var _reactRedux = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(4);

var _serializeJavascript = __webpack_require__(70);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(71);

var _MuiThemeProvider = __webpack_require__(72);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (path, store, context) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(
                _reactRouterDom.StaticRouter,
                { location: path, context: context },
                _react2.default.createElement(
                    'div',
                    null,
                    (0, _reactRouterConfig.renderRoutes)(_routes2.default)
                )
            )
        )
    ));

    var helmet = _reactHelmet.Helmet.renderStatic();

    return '\n        <html>\n            <head>\n            ' + helmet.title.toString() + '\n            ' + helmet.meta.toString() + '\n            <link rel="stylesheet" type="text/css" href="./main.css">\n\n            </head>\n                <body>\n                    <div id="root">' + content + '</div>\n                    <script>\n                    window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n                  </script>\n                    <script src="bundle.js"></script>\n                </body>\n            </html>\n            ';
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(2);

var _reduxThunk = __webpack_require__(74);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(75);

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(79);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAxiosInstance = function getAxiosInstance(cookie) {
    cookie = cookie ? cookie : '';
    return _axios2.default.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: { cookie: cookie }
    });
};

exports.default = function (req) {
    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(getAxiosInstance(req.get('cookie')))));

    return store;
};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducer = __webpack_require__(76);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var combineReducers = function combineReducers(reducers) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    return Object.keys(reducers).reduce(function (nextState, key) {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

var rootReducer = combineReducers({
  reducer: _reducer2.default
});

exports.default = rootReducer;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _initialState = __webpack_require__(77);

var _stateUtils = __webpack_require__(78);

var _actionTypes = __webpack_require__(13);

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getSlide = function getSlide(itemLength, number, selectedIndex) {
  var newCount = selectedIndex + number;
  if (newCount >= itemLength) {
    newCount = 0;
  }
  if (newCount < 0) {
    newCount = itemLength - 1;
  }
  return newCount;
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState.initialState;
  var action = arguments[1];

  switch (action.type) {

    case actionTypes.SET_SELECTED_CATEGORY:
      {
        var stateWithSelectedCategoryClear = _stateUtils.stateUtils.clearSelectedCategories(state);
        return _stateUtils.stateUtils.setSelectedCategory(state, action.displayKey);
      }

    case actionTypes.CLEAR_CATEGORIES:
      {
        return _stateUtils.stateUtils.clearSelectedCategories(state);
      }

    case actionTypes.NEXT_SLIDE:
      {
        var newIndex = getSlide(state.experience.length, 1, state.selectedTile);
        return _extends({}, state, { selectedTile: newIndex });
      }

    case actionTypes.PREV_SLIDE:
      {
        var _newIndex = getSlide(state.experience.length, -1, state.selectedTile);
        return _extends({}, state, { selectedTile: _newIndex });
      }

    case actionTypes.SHOW_HIDE_PAPER:
      {
        return _extends({}, state, { showExperience: !state.showExperience });
      }

    default:
      return state;
  }
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = exports.initialState = {
  selectedTile: 0,
  categories: [{
    title: 'Contact Me',
    key: 'contactMe',
    selected: false,
    iconIndex: 1
  }, {
    title: 'Experience',
    key: 'experience',
    selected: false,
    iconIndex: 2
  }, {
    title: 'Education',
    key: 'education',
    selected: false,
    iconIndex: 3
  }, {
    title: 'skills',
    key: 'skills',
    selected: false,
    iconIndex: 4
  }],

  showExperience: false,
  experience: [{
    key: 'gnx',
    company: 'GreenNexxus',
    title: 'Fullstack ASP.NET developer',
    location: [{
      lat: 45.9607044,
      lng: -66.6415046
    }],
    center: {
      lat: 45.9636,
      lng: -66.6431
    },
    date: {
      start: '04/01/2013',
      end: '07/05/2014'
    }
  }, {
    key: 'sfw',
    company: 'Safeway',
    title: 'Fullstack ASP.NET developer',
    location: [{
      lat: 51.111412,
      lng: -114.039921
    }],
    center: {
      lat: 51.1,
      lng: -114.0
    },
    date: {
      start: '10/01/2014',
      end: '1/05/2015'
    }
  }, {
    key: 'ntt',
    company: 'NTT Data',
    title: 'Java Developer',
    location: [{
      lat: 44.6508,
      lng: -63.5771
    }],
    center: {
      lat: 44.6488,
      lng: -63.5752
    },
    date: {
      start: '01/01/2015',
      end: '12/31/2015'
    }
  }, {
    key: 'inf',
    company: 'Infusion',
    title: 'Front End Consultant',
    location: [{
      lat: 41.1729996,
      lng: -73.36395519999996
    }],
    center: {
      lat: 41.141472,
      lng: -73.3579049

    },
    date: {
      start: '01/01/2016',
      end: '05/30/2017'
    }
  }, {
    key: 'cap',
    company: 'Capco',
    title: 'Front End Consultant',
    location: [{
      lat: 43.649722,
      lng: -79.376207
    }],
    center: {
      lat: 43.6532,
      lng: -79.3832
    },
    date: {
      start: '06/01/2017',
      end: '10/31/2017'
    }
  }, {
    key: 'hdc',
    company: 'Home Depot Canada',
    title: 'Sr. Front End Developer',
    location: [{
      lat: 43.728811,
      lng: -79.329219
    }],
    center: {
      lat: 43.75,
      lng: -79.32
    },
    date: {
      start: '11/01/2017',
      end: 'Present'
    }
  }]
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var stateUtils = exports.stateUtils = {

    setSelectedCategory: function setSelectedCategory(state, displayKey) {
        state.categories.forEach(function (item) {
            if (item.key === displayKey) {
                item.selected = true;
            }
        });

        return _extends({}, state, { categories: [].concat(_toConsumableArray(state.categories)) });
    },

    clearSelectedCategories: function clearSelectedCategories(state) {
        var newState = _extends({}, state);
        newState.categories.forEach(function (category) {
            category.selected = false;
        });
        return _extends({}, state, { categories: [].concat(_toConsumableArray(newState.categories)) });
    }

};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);