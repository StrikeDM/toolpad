"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ReactRouterAppProvider = require("./ReactRouterAppProvider");
Object.keys(_ReactRouterAppProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ReactRouterAppProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ReactRouterAppProvider[key];
    }
  });
});