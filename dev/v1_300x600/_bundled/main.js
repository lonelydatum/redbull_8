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

	tl.from(".logo", .6, { scale: 2, ease: Power4.easeIn, opacity: 0 });

	tl.add(rumble);

	tl.from(".t1", .3, { x: "-=100", opacity: 0 }, "+=.25");

	tl.add("end", "+=1.2");
	tl.to(".t1", .3, { x: "+=100", opacity: 0 }, "end");
	tl.to(".logo", .6, { x: "-" + size.w / 2, y: -("" + size.h / 2), scale: .5 }, "end");
	tl.add(characters, "end");

	tl.from(".t2_a", .3, { x: "-=100", opacity: 0 }, "+=.6");
	tl.from(".t2_b", .5, { opacity: 0 }, "+=.2");
	tl.from(".t2_c", .5, { opacity: 0 });

	return tl;
}

function rumble() {
	var TIME = .05;
	var tl = new TimelineMax();
	tl.from(".logo", TIME, { x: "+=6", y: "+=6", ease: Power4.easeInOut });
	tl.from(".logo", TIME, { x: "-=6", y: "-=6", ease: Power4.easeInOut });
	tl.from(".logo", TIME, { x: "+=3", y: "+=3", ease: Power4.easeInOut });
	tl.from(".logo", TIME, { x: "-=3", y: "-=3", ease: Power4.easeInOut });
}

function characters() {
	var TIME = .5;

	var tl = new TimelineMax();
	tl.set(".frame2", { opacity: 1 });
	var list = [".char_m", ".char_gamer_w", ".char_gamer_m", ".char_w", ".char_desk"];
	list.map(function (item) {
		tl.from(item, TIME, { opacity: 0, ease: Power2.easeIn }, "-=.35");
	});

	tl.from(".swirl", TIME, { opacity: 0, ease: Power2.easeIn });
}

exports.size = size;
exports.init = init;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

var tl = (0, _commonJsCommonJs.init)();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
