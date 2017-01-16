(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Link', './PaymentMethod', './Price', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Link'), require('./PaymentMethod'), require('./Price'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Link, global.PaymentMethod, global.Price, global.immutable);
    global.PaymentLineItem = mod.exports;
  }
})(this, function (exports, _Link, _PaymentMethod, _Price, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Link2 = _interopRequireDefault(_Link);

  var _PaymentMethod2 = _interopRequireDefault(_PaymentMethod);

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

  var PaymentLineItemRecord = new _immutable.Record({
    paymentMethod: null,
    lineItemPrice: null,
    _links: null,
    _embedded: new _immutable.Map()
  });

  var PaymentLineItem = function (_PaymentLineItemRecor) {
    _inherits(PaymentLineItem, _PaymentLineItemRecor);

    function PaymentLineItem(paymentLineItem) {
      _classCallCheck(this, PaymentLineItem);

      var immutable = _immutable2.default.fromJS(paymentLineItem || {});
      var parsed = immutable.update('lineItemPrice', function (lip) {
        return lip && new _Price2.default(lip);
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.Map();
      }).updateIn(['_embedded', 'payment-method'], function (pm) {
        return pm && new _PaymentMethod2.default(pm);
      });

      return _possibleConstructorReturn(this, (PaymentLineItem.__proto__ || Object.getPrototypeOf(PaymentLineItem)).call(this, parsed));
    }

    return PaymentLineItem;
  }(PaymentLineItemRecord);

  exports.default = PaymentLineItem;
});