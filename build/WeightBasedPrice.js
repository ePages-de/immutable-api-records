(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Price', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Price'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Price, global.immutable);
    global.WeightBasedPrice = mod.exports;
  }
})(this, function (exports, _Price, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.WeightPriceThreshold = undefined;

  var _Price2 = _interopRequireDefault(_Price);

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

  var WeightPriceThresholdRecord = new _immutable.Record({
    maxWeight: null,
    price: null
  });

  var WeightPriceThreshold = exports.WeightPriceThreshold = function (_WeightPriceThreshold) {
    _inherits(WeightPriceThreshold, _WeightPriceThreshold);

    function WeightPriceThreshold(weightPriceThreshold) {
      _classCallCheck(this, WeightPriceThreshold);

      var immutable = _immutable2.default.fromJS(weightPriceThreshold || {});
      var parsed = immutable.update('price', function (p) {
        return p && new _Price2.default(p);
      });

      return _possibleConstructorReturn(this, (WeightPriceThreshold.__proto__ || Object.getPrototypeOf(WeightPriceThreshold)).call(this, parsed));
    }

    return WeightPriceThreshold;
  }(WeightPriceThresholdRecord);

  var WeightBasedPriceRecord = new _immutable.Record({
    weightPriceThresholds: new _immutable.List(),
    unlimitedWeightPrice: null
  });

  var WeightBasedPrice = function (_WeightBasedPriceReco) {
    _inherits(WeightBasedPrice, _WeightBasedPriceReco);

    function WeightBasedPrice(weightBasedPrice) {
      _classCallCheck(this, WeightBasedPrice);

      var immutable = _immutable2.default.fromJS(weightBasedPrice || {});
      var parsed = immutable.update('weightPriceThresholds', function (wbts) {
        return wbts ? wbts.map(function (wbt) {
          return new WeightPriceThreshold(wbt);
        }) : new _immutable.List();
      }).update('unlimitedWeightPrice', function (uwp) {
        return uwp && new _Price2.default(uwp);
      });

      return _possibleConstructorReturn(this, (WeightBasedPrice.__proto__ || Object.getPrototypeOf(WeightBasedPrice)).call(this, parsed));
    }

    return WeightBasedPrice;
  }(WeightBasedPriceRecord);

  exports.default = WeightBasedPrice;
});