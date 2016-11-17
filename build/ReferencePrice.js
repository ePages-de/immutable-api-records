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
    global.ReferencePrice = mod.exports;
  }
})(this, function (exports, _Price, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var ReferencePriceRecord = new _immutable.Record({
    refQuantity: 0,
    quantity: 0,
    unit: null,
    price: null // new Price()
  });

  var ReferencePrice = function (_ReferencePriceRecord) {
    _inherits(ReferencePrice, _ReferencePriceRecord);

    function ReferencePrice(referencePrice) {
      _classCallCheck(this, ReferencePrice);

      var immutable = _immutable2.default.fromJS(referencePrice || {});
      var parsed = immutable.update('price', function (p) {
        return p ? new _Price2.default(p) : null;
      });

      return _possibleConstructorReturn(this, (ReferencePrice.__proto__ || Object.getPrototypeOf(ReferencePrice)).call(this, parsed));
    }

    return ReferencePrice;
  }(ReferencePriceRecord);

  exports.default = ReferencePrice;
});