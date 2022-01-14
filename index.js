"use strict";

Liferay.Loader.define("my-project@1.0.0/index", ['module', 'exports', 'require', 'my-project$react', 'my-project$react-dom', './App', 'my-project$react-router-dom'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = main;

    var _react = _interopRequireDefault(require("my-project$react"));

    var _reactDom = _interopRequireDefault(require("my-project$react-dom"));

    var _App = _interopRequireDefault(require("./App"));

    var _reactRouterDom = require("my-project$react-router-dom");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }

    function main(_ref) {
      var portletNamespace = _ref.portletNamespace,
          contextPath = _ref.contextPath,
          portletElementId = _ref.portletElementId;

      _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_reactRouterDom.HashRouter, null, /*#__PURE__*/_react["default"].createElement(_App["default"], null)), document.getElementById(portletElementId));
    }
    //# sourceMappingURL=index.js.map
  }
});
//# sourceMappingURL=index.js.map