"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getPrototypeOf = _interopRequireDefault(require("babel-runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("babel-runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("babel-runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("babel-runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("babel-runtime/helpers/inherits"));

var _BaseModel2 = _interopRequireDefault(require("./BaseModel"));

var _Utils = require("../Utils");

var Jobs =
/*#__PURE__*/
function (_BaseModel) {
  (0, _inherits2.default)(Jobs, _BaseModel);

  function Jobs() {
    (0, _classCallCheck2.default)(this, Jobs);
    return (0, _possibleConstructorReturn2.default)(this, (Jobs.__proto__ || (0, _getPrototypeOf.default)(Jobs)).apply(this, arguments));
  }

  (0, _createClass2.default)(Jobs, [{
    key: "all",
    value: function all(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var pId = (0, _Utils.parse)(projectId);
      return this.get("projects/".concat(pId, "/jobs"), options);
    }
  }]);
  return Jobs;
}(_BaseModel2.default);

var _default = Jobs;
exports.default = _default;