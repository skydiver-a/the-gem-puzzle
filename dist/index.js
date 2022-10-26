/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Game */ "./src/js/Game.js");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");


new _js_Game__WEBPACK_IMPORTED_MODULE_0__.Game().init();

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timer */ "./src/js/Timer.js");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stats */ "./src/js/Stats.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile */ "./src/js/Tile.js");
/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Score */ "./src/js/Score.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var Game = /*#__PURE__*/function () {
  function Game() {
    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
    _classCallCheck(this, Game);
    this.level = level; // level
    this.tiles = []; // cells

    this.timer = new _Timer__WEBPACK_IMPORTED_MODULE_0__.Timer();
    this.stats = new _Stats__WEBPACK_IMPORTED_MODULE_1__.Stats();
    this.moveCounter = 0;
    this.moves = [];
    this.firstClick = true;
    this.tileSize = 75;
  }
  _createClass(Game, [{
    key: "init",
    value: function init() {
      for (var i = 0; i < Math.pow(this.level, 2); ++i) {
        var x = i % this.level;
        var y = Math.trunc(i / this.level);
        this.tiles[i] = new _Tile__WEBPACK_IMPORTED_MODULE_2__.Tile(x, y, this.tileSize, i + 1, null);
        if (i === Math.pow(this.level, 2) - 1) {
          this.tiles[i].isEmpty = true;
        }
      }
      // set the background color
      this.setBackgroundColor();

      // create HTML structure
      this.createHTMLStructure();
      return;
    }
  }, {
    key: "getRandomColor",
    value: function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 14)];
      }
      return color;
    }
  }, {
    key: "setBackgroundColor",
    value: function setBackgroundColor() {
      var leftColor = this.getRandomColor();
      var rightColor = this.getRandomColor();
      var angle = 'to right';
      document.body.style.background = "linear-gradient(".concat(angle, ", ").concat(leftColor, ", ").concat(rightColor, ")");
    }
  }, {
    key: "createHTMLStructure",
    value: function createHTMLStructure() {
      var _this = this;
      var wrapper = this.buildHTMLElement('div', document.body, [{
        name: 'class',
        value: 'wrapper'
      }]);
      var container = this.buildHTMLElement('div', wrapper, [{
        name: 'class',
        value: 'container'
      }]);
      var infoPanel = this.buildHTMLElement('div', container, [{
        name: 'class',
        value: "panel"
      }]);
      this.createInfoPanel(infoPanel);
      var gameField = this.buildHTMLElement('div', container, [{
        name: 'class',
        value: "field"
      }]);
      gameField.style.width = "".concat(this.tileSize * this.level, "px");
      gameField.style.height = "".concat(this.tileSize * this.level, "px");
      var controlPanel = this.buildHTMLElement('div', container, [{
        name: 'class',
        value: "panel"
      }]);
      this.createButton(controlPanel, 'New Game', function () {
        _this.reset();
        _this.redraw();
      });
      this.createButton(controlPanel, 'Scores', function () {
        _this.showModal();
      });
      this.createButton(controlPanel, 'Solve', function () {
        _this.solve();
        _this.reset();
        document.body.classList.add('untouchable');
      });
      this.createLevels(controlPanel, 3, 8, function (e) {
        _this.setLevel(Number(e.target.value));
        _this.reset();
        _this.redraw();
      });
    }
  }, {
    key: "buildHTMLElement",
    value: function buildHTMLElement(tagName) {
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var attr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var element = document.createElement(tagName);
      if (attr) {
        var _iterator = _createForOfIteratorHelper(attr),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _step.value,
              name = _step$value.name,
              value = _step$value.value;
            element.setAttribute(name, value);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      if (parent) {
        parent.appendChild(element);
      }
      return element;
    }
  }, {
    key: "createInfoPanel",
    value: function createInfoPanel(parent) {
      var _this2 = this;
      var time = this.buildHTMLElement('div', parent, [{
        name: 'class',
        value: "time"
      }]);
      var moves = this.buildHTMLElement('div', parent, [{
        name: 'class',
        value: 'moves'
      }]);
      time.textContent = "Time: ".concat(this.timer.get());
      moves.textContent = "Moves: ".concat(this.moveCounter);
      setInterval(function () {
        time.textContent = "Time: ".concat(_this2.timer.get());
      }, 1000);
    }
  }, {
    key: "createButton",
    value: function createButton(parent, content, callback) {
      var btn = this.buildHTMLElement('button', parent, [{
        name: 'class',
        value: 'button'
      }, {
        name: 'class',
        value: 'btn'
      }]);
      btn.innerHTML = content;
      btn.addEventListener('click', callback);
    }
  }, {
    key: "createLevels",
    value: function createLevels() {
      return;
    }
  }, {
    key: "setLevel",
    value: function setLevel() {
      return;
    }
  }, {
    key: "reset",
    value: function reset() {
      return;
    }
  }, {
    key: "redraw",
    value: function redraw() {
      return;
    }
  }, {
    key: "showModal",
    value: function showModal() {
      return;
    }
  }, {
    key: "solve",
    value: function solve() {
      return;
    }
  }]);
  return Game;
}();

/***/ }),

/***/ "./src/js/Score.js":
/*!*************************!*\
  !*** ./src/js/Score.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Score": () => (/* binding */ Score)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Score = /*#__PURE__*/_createClass(function Score(time, moves, level) {
  _classCallCheck(this, Score);
  this.time = time;
  this.moves = moves;
  this.level = level;
  this.rating = Math.round(1000 / (this.time + this.moves) + Math.pow(3, this.level));
});

/***/ }),

/***/ "./src/js/Stats.js":
/*!*************************!*\
  !*** ./src/js/Stats.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stats": () => (/* binding */ Stats)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Stats = /*#__PURE__*/function () {
  function Stats() {
    _classCallCheck(this, Stats);
    this.stats = JSON.parse(localStorage.getItem('stats') || '[]');
  }
  _createClass(Stats, [{
    key: "set",
    value: function set(value) {
      this.stats.push(value);
      localStorage.setItem('stats', JSON.stringify(this.stats));
    }
  }, {
    key: "get",
    value: function get() {
      this.stats.sort(function (left, right) {
        return left.rating > right.rating ? -1 : left.rating < right.rating ? 1 : 0;
      });
      this.stats = this.stats.slice(0, 10);
      return this.stats;
    }
  }]);
  return Stats;
}();

/***/ }),

/***/ "./src/js/Tile.js":
/*!************************!*\
  !*** ./src/js/Tile.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tile": () => (/* binding */ Tile)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Tile = /*#__PURE__*/function () {
  function Tile(left, top, size, value, element) {
    _classCallCheck(this, Tile);
    this.left = left;
    this.top = top;
    this.size = size;
    this.value = value;
    this.element = element;
    this.isEmpty = false;
  }
  _createClass(Tile, [{
    key: "swap",
    value: function swap(other) {
      var dx = Math.abs(this.left - other.left);
      var dy = Math.abs(this.top - other.top);
      var x = this.left;
      var y = this.top;
      this.left = other.left;
      this.top = other.top;
      this.element.style.left = "".concat(this.left * this.size, "px");
      this.element.style.top = "".concat(this.top * this.size, "px");
      other.left = x;
      other.top = y;
      other.element.style.left = "".concat(other.left * other.size, "px");
      other.element.style.top = "".concat(other.top * other.size, "px");
      return dx + dy > 1 ? false : true;
    }
  }]);
  return Tile;
}();

/***/ }),

/***/ "./src/js/Timer.js":
/*!*************************!*\
  !*** ./src/js/Timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timer": () => (/* binding */ Timer)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Timer = /*#__PURE__*/function () {
  function Timer() {
    _classCallCheck(this, Timer);
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.interval = null;
  }
  _createClass(Timer, [{
    key: "start",
    value: function start() {
      var _this = this;
      this.interval = setInterval(function () {
        ++_this.seconds;
        if (_this.seconds > 59) {
          ++_this.minutes;
        }
        if (_this.minutes > 59) {
          ++_this.hours;
        }
        _this.seconds %= 60;
        _this.minutes %= 60;
        _this.hours %= 24;
      }, 1000);
    }
  }, {
    key: "pause",
    value: function pause() {
      clearInterval(this.interval);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.pause();
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }, {
    key: "get",
    value: function get() {
      var hh = "".concat(this.hours);
      var mm = this.minutes < 10 ? "0".concat(this.minutes) : "".concat(this.minutes);
      var ss = this.seconds < 10 ? "0".concat(this.seconds) : "".concat(this.seconds);
      return "".concat(hh, ":").concat(mm, ":").concat(ss);
    }
  }]);
  return Timer;
}();

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sass/style.scss");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map