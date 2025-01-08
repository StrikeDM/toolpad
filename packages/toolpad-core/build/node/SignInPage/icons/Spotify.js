"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _svg;
/**
 * @ignore - internal component.
 */
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function SpotifyIcon() {
  return _svg || (_svg = /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2931 2931",
    width: "24",
    height: "24",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M1465.5 0C656.1 0 0 656.1 0 1465.5S656.1 2931 1465.5 2931 2931 2274.9 2931 1465.5C2931 656.2 2274.9.1 1465.5 0zm672.1 2113.6A91.3 91.3 0 0 1 2012 2144c-344.1-210.3-777.3-257.8-1287.4-141.3a91.3 91.3 0 1 1-40.7-178.1C1242.1 1697.1 1721 1752 2107.3 1988a91.4 91.4 0 0 1 30.3 125.6zm179.3-398.9a114.3 114.3 0 0 1-157.2 37.6c-393.8-242.1-994.4-312.2-1460.3-170.8a114.4 114.4 0 0 1-142.6-76.1 114.5 114.5 0 0 1 76.2-142.5c532.2-161.5 1193.9-83.3 1646.2 194.7a114.2 114.2 0 0 1 37.7 157.1zm15.4-415.6c-472.4-280.5-1251.6-306.3-1702.6-169.5a137 137 0 1 1-79.5-262.3c517.7-157.1 1378.2-126.8 1922 196a137.1 137.1 0 0 1-139.9 235.8z"
    })
  }));
}
var _default = exports.default = SpotifyIcon;