"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js");
require("./static/promise-polyfill/index.js");
function helloWorld(name) {
    return new Promise(function (res) { return res("Hello " + name + "!"); });
}
exports.helloWorld = helloWorld;
