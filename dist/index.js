'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElmComponent = function (_Component) {
  _inherits(ElmComponent, _Component);

  function ElmComponent(props) {
    _classCallCheck(this, ElmComponent);

    var _this = _possibleConstructorReturn(this, (ElmComponent.__proto__ || Object.getPrototypeOf(ElmComponent)).call(this, props));

    _this.initialize = _this.initialize.bind(_this);
    return _this;
  }

  _createClass(ElmComponent, [{
    key: 'initialize',
    value: function initialize(el) {
      var _props = this.props,
          src = _props.src,
          flags = _props.flags,
          ports = _props.ports;

      var app = src.embed(el, flags);
      if (typeof ports === 'function') {
        ports(app.ports);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { ref: this.initialize });
    }
  }]);

  return ElmComponent;
}(_react.Component);

exports.default = ElmComponent;
