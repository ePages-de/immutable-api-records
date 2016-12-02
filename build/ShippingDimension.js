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
    global.ShippingDimension = mod.exports;
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

  var ShippingDimensionRecord = new _immutable.Record({
    length: null,
    width: null,
    height: null
  });

  var ShippingDimension = function (_ShippingDimensionRec) {
    _inherits(ShippingDimension, _ShippingDimensionRec);

    function ShippingDimension() {
      _classCallCheck(this, ShippingDimension);

      return _possibleConstructorReturn(this, (ShippingDimension.__proto__ || Object.getPrototypeOf(ShippingDimension)).apply(this, arguments));
    }

    return ShippingDimension;
  }(ShippingDimensionRecord);

  exports.default = ShippingDimension;
});