'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GridTitle = require('./GridTitle');

var _GridTitle2 = _interopRequireDefault(_GridTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridTitles = function (_React$Component) {
  _inherits(GridTitles, _React$Component);

  function GridTitles() {
    _classCallCheck(this, GridTitles);

    return _possibleConstructorReturn(this, (GridTitles.__proto__ || Object.getPrototypeOf(GridTitles)).apply(this, arguments));
  }

  _createClass(GridTitles, [{
    key: 'onSort',
    value: function onSort() {
      this.props.onSort();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var titles = this.props.gridTitles.map(function (title, i) {
        return _react2.default.createElement(_GridTitle2.default, { key: i, title: title, ref: i, onSort: function onSort() {
            return _this2.onSort();
          } });
      });

      return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          titles
        )
      );
    }
  }]);

  return GridTitles;
}(_react2.default.Component);

exports.default = GridTitles;