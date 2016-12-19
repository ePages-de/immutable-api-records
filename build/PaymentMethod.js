(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './DiscountOrFee', './Link', './Price', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./DiscountOrFee'), require('./Link'), require('./Price'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.DiscountOrFee, global.Link, global.Price, global.immutable);
    global.PaymentMethod = mod.exports;
  }
})(this, function (exports, _DiscountOrFee, _Link, _Price, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _DiscountOrFee2 = _interopRequireDefault(_DiscountOrFee);

  var _Link2 = _interopRequireDefault(_Link);

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

  var PaymentMethodRecord = new _immutable.Record({
    _id: null,
    position: null,
    name: null,
    description: null,
    discountOrFee: null,
    serviceableCountries: null,
    minimumOrderValue: null,
    activated: null,
    taxClass: null,
    selectable: false,
    _links: null,
    _embedded: new _immutable.Map()
  });

  var PaymentMethod = function (_PaymentMethodRecord) {
    _inherits(PaymentMethod, _PaymentMethodRecord);

    function PaymentMethod(paymentMethod) {
      _classCallCheck(this, PaymentMethod);

      var immutable = _immutable2.default.fromJS(paymentMethod || {});
      var parsed = immutable.update('discountOrFee', function (dof) {
        return dof ? new _DiscountOrFee2.default(dof) : null;
      }).update('minimumOrderValue', function (mov) {
        return mov ? new _Price2.default(mov) : null;
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.Map();
      });

      return _possibleConstructorReturn(this, (PaymentMethod.__proto__ || Object.getPrototypeOf(PaymentMethod)).call(this, parsed));
    }

    return PaymentMethod;
  }(PaymentMethodRecord);

  exports.default = PaymentMethod;
});