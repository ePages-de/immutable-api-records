(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Link', './Price', './ShippingMethod', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Link'), require('./Price'), require('./ShippingMethod'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Link, global.Price, global.ShippingMethod, global.immutable);
    global.ApplicableShippingMethod = mod.exports;
  }
})(this, function (exports, _Link, _Price, _ShippingMethod, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Link2 = _interopRequireDefault(_Link);

  var _Price2 = _interopRequireDefault(_Price);

  var _ShippingMethod2 = _interopRequireDefault(_ShippingMethod);

  var _immutable2 = _interopRequireDefault(_immutable);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ApplicableShippingMethodRecord = new _immutable.Record({
    lineItemPrice: null,
    selectable: null,
    _links: null,
    _embedded: new _immutable.Map()
  });

  var ApplicableShippingMethod = function (_ApplicableShippingMe) {
    _inherits(ApplicableShippingMethod, _ApplicableShippingMe);

    function ApplicableShippingMethod(applicableShippingMethod) {
      _classCallCheck(this, ApplicableShippingMethod);

      var immutable = _immutable2.default.fromJS(applicableShippingMethod || {});
      var parsed = immutable.update('lineItemPrice', function (lip) {
        return lip && new _Price2.default(lip);
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.Map();
      }).updateIn(['_embedded', 'shipping-method'], function (sm) {
        return new _ShippingMethod2.default(sm);
      });

      return _possibleConstructorReturn(this, (ApplicableShippingMethod.__proto__ || Object.getPrototypeOf(ApplicableShippingMethod)).call(this, parsed));
    }

    return ApplicableShippingMethod;
  }(ApplicableShippingMethodRecord);

  exports.default = ApplicableShippingMethod;
});