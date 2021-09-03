(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power4.easeOut;

var w = size.w;
var h = size.h;

function init() {

	var tl = new TimelineMax({ onComplete: function onComplete() {} });

	tl.set(".frame1", { opacity: 1 });

	return tl;
}

exports.size = size;
exports.init = init;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

var tl = (0, _commonJsCommonJs.init)();
tl.from(".logo", .4, { scale: 2, ease: Power3.easeInOut, opacity: 0 });

tl.from(".logo", .05, { x: "+=1", y: "+=1", ease: Power4.easeInOut });
tl.from(".logo", .05, { x: "-=1", y: "-=1", ease: Power4.easeInOut });
tl.from(".logo", .05, { x: "+=1", y: "+=1", ease: Power4.easeInOut });
tl.from(".logo", .05, { x: "-=1", y: "-=1", ease: Power4.easeInOut });

tl.from(".t1", .3, { x: "-=300" }, .7);

tl.add("end", "+=1");
tl.to(".t1", .3, { x: "+=300" }, "end");
tl.to(".logo", .3, { x: -150, y: -300, scale: .5 }, "end");

tl.set(".frame2", { opacity: 1 });
tl.from(".char_m", .3, { opacity: 0 });
tl.from(".char_gamer_w", .3, { opacity: 0 });
tl.from(".char_gamer_m", .3, { opacity: 0 });
tl.from(".char_w", .3, { opacity: 0 });
tl.from(".char_desk", .3, { opacity: 0 });

tl.from(".t2_a", .3, { x: "-=300" });
tl.from(".t2_b", .3, { opacity: 0 });
tl.from(".t2_c", .3, { opacity: 0 });

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
