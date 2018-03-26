(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var print = exports.print = function print() {
    return console.log((arguments.length <= 0 ? undefined : arguments[0]) + ": " + (arguments.length <= 1 ? undefined : arguments[1]));
};

var option = exports.option = {
    __intro: "You can type",
    __options: ["left", "right", "up", "down", "help"],
    outputOptions: function outputOptions() {
        var _this = this;

        this.__options.forEach(function (f) {
            return addToOutput(_this.__intro + " " + f);
        });
    }
};

},{}],2:[function(require,module,exports){
'use strict';

var _environment = require('./environment.js');

var _addition = require('./addition.js');

var defaultLine = "Start your journey now!";
var BR = "<br />";

var environment = new _environment.Environment("Forest --");
function main() {
    var element = document.querySelector("#enter");
    element.addEventListener("click", onClickEnter, false);
}

function addToOutput() {
    var newLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Start your journey now!";

    var output = document.querySelector("#output");

    output.innerHTML = output.innerHTML + "<br />" + newLine;
}

function onClickEnter() {
    var commands = document.querySelector("#commands");
    if (commands.value === "help") {
        _addition.option.outputOptions();
    } else if (commands.value === "left") {
        addToOutput(environment.stumbleUpon());
    } else if (commands.value === "right") {
        addToOutput(environment.stumbleUpon());
    } else if (commands.value === "up") {
        addToOutput(environment.stumbleUpon());
    } else if (commands.value === "down") {
        addToOutput(environment.stumbleUpon());
    } else {
        addToOutput(commands.value);
    }
}

main();

(0, _addition.print)("log", "hello");

},{"./addition.js":1,"./environment.js":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.generate = generate;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Encounter = exports.Encounter = function () {
    function Encounter() {
        var introText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        _classCallCheck(this, Encounter);

        this.introText = introText;
    }

    _createClass(Encounter, [{
        key: "whenEncounter",
        value: function whenEncounter() {
            return this.introText;
        }
    }]);

    return Encounter;
}();

var Bear = exports.Bear = function (_Encounter) {
    _inherits(Bear, _Encounter);

    function Bear() {
        _classCallCheck(this, Bear);

        return _possibleConstructorReturn(this, (Bear.__proto__ || Object.getPrototypeOf(Bear)).call(this, "grr brow, you encountered a beer!"));
    }

    return Bear;
}(Encounter);

var Angel = exports.Angel = function (_Encounter2) {
    _inherits(Angel, _Encounter2);

    function Angel() {
        _classCallCheck(this, Angel);

        return _possibleConstructorReturn(this, (Angel.__proto__ || Object.getPrototypeOf(Angel)).call(this, "Wow, you encountered an Angel! This will give you strength and healing possibility"));
    }

    return Angel;
}(Encounter);

var Ghost = exports.Ghost = function (_Encounter3) {
    _inherits(Ghost, _Encounter3);

    function Ghost() {
        _classCallCheck(this, Ghost);

        var _this3 = _possibleConstructorReturn(this, (Ghost.__proto__ || Object.getPrototypeOf(Ghost)).call(this));

        _this3.introText = "Booh, you encountered a Ghost";
        return _this3;
    }

    return Ghost;
}(Encounter);

function generate() {
    var number = Math.floor(Math.random() * (4 - 1)) + 1;

    if (number === 1) {
        return new Bear();
    } else if (number === 2) {
        return new Angel();
    } else if (number === 3) {
        return new Ghost();
    } else if (number === 4) {
        return new Encounter();
    }
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Environment = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encounter = require("./encounter.js");

var encounter = _interopRequireWildcard(_encounter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Environment = exports.Environment = function () {
    function Environment(name) {
        _classCallCheck(this, Environment);

        this.name = name;
    }

    _createClass(Environment, [{
        key: "stumbleUpon",
        value: function stumbleUpon() {
            this.encounter = encounter.generate();
            var interaction = this.name + "You Just a Stumbed upon ..." + this.encounter.whenEncounter();
            return interaction;
        }
    }]);

    return Environment;
}();

;

},{"./encounter.js":3}]},{},[2]);
