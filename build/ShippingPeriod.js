(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.immutable);
    global.ShippingPeriod = mod.exports;
  }
})(this, function (exports, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var ShippingPeriodRecord = new _immutable.Record({
    minDays: null,
    maxDays: null,
    displayUnit: null
  });

  var ShippingPeriod = function (_ShippingPeriodRecord) {
    _inherits(ShippingPeriod, _ShippingPeriodRecord);

    function ShippingPeriod() {
      _classCallCheck(this, ShippingPeriod);

      return _possibleConstructorReturn(this, (ShippingPeriod.__proto__ || Object.getPrototypeOf(ShippingPeriod)).apply(this, arguments));
    }

    return ShippingPeriod;
  }(ShippingPeriodRecord);

  exports.default = ShippingPeriod;
});