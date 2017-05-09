(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Link', './Price', './SimplePrice', './WeightBasedPrice', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Link'), require('./Price'), require('./SimplePrice'), require('./WeightBasedPrice'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Link, global.Price, global.SimplePrice, global.WeightBasedPrice, global.immutable);
    global.ShippingMethod = mod.exports;
  }
})(this, function (exports, _Link, _Price, _SimplePrice, _WeightBasedPrice, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Link2 = _interopRequireDefault(_Link);

  var _Price2 = _interopRequireDefault(_Price);

  var _SimplePrice2 = _interopRequireDefault(_SimplePrice);

  var _WeightBasedPrice2 = _interopRequireDefault(_WeightBasedPrice);

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

  var ShippingMethodRecord = new _immutable.Record({
    _id: null,
    position: null,
    name: null,
    description: null,
    taxClass: null,
    fixedPrice: null,
    weightBasedPrice: null,
    serviceableCountries: null,
    freeShippingValue: null,
    _links: null,
    _embedded: new _immutable.Map()
  });

  var ShippingMethod = function (_ShippingMethodRecord) {
    _inherits(ShippingMethod, _ShippingMethodRecord);

    function ShippingMethod(shippingMethod) {
      _classCallCheck(this, ShippingMethod);

      var immutable = _immutable2.default.fromJS(shippingMethod || {});
      var parsed = immutable.update('fixedPrice', function (fp) {
        return fp ? new _Price2.default(fp) : null;
      }).update('weightBasedPrice', function (wbp) {
        return wbp ? new _WeightBasedPrice2.default(wbp) : null;
      }).update('freeShippingValue', function (fsv) {
        return fsv ? new _SimplePrice2.default(fsv) : null;
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.Map();
      });

      return _possibleConstructorReturn(this, (ShippingMethod.__proto__ || Object.getPrototypeOf(ShippingMethod)).call(this, parsed));
    }

    return ShippingMethod;
  }(ShippingMethodRecord);

  exports.default = ShippingMethod;
});