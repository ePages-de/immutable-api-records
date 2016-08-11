(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './DeliveryOption', './Link', './PaymentMethod', './Price', './Product', './Quantity', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./DeliveryOption'), require('./Link'), require('./PaymentMethod'), require('./Price'), require('./Product'), require('./Quantity'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.DeliveryOption, global.Link, global.PaymentMethod, global.Price, global.Product, global.Quantity, global.immutable);
    global.Cart = mod.exports;
  }
})(this, function (exports, _DeliveryOption, _Link, _PaymentMethod, _Price, _Product, _Quantity, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PaymentLineItem = exports.DeliveryLineItem = exports.ProductLineItem = undefined;

  var _DeliveryOption2 = _interopRequireDefault(_DeliveryOption);

  var _Link2 = _interopRequireDefault(_Link);

  var _PaymentMethod2 = _interopRequireDefault(_PaymentMethod);

  var _Price2 = _interopRequireDefault(_Price);

  var _Product2 = _interopRequireDefault(_Product);

  var _Quantity2 = _interopRequireDefault(_Quantity);

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

  // Currently there are only products in the line items
  var ProductLineItemRecord = new _immutable.Record({
    _type: null,
    _id: null,
    _ref: null,
    name: '',
    description: '',
    details: new _Product2.default(),
    quantity: new _Quantity2.default(),
    singleItemPrice: new _Price2.default(),
    lineItemPrice: new _Price2.default(),
    _links: new _immutable.Map()
  });

  var ProductLineItem = exports.ProductLineItem = function (_ProductLineItemRecor) {
    _inherits(ProductLineItem, _ProductLineItemRecor);

    function ProductLineItem() {
      var cart = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, ProductLineItem);

      var immutable = _immutable2.default.fromJS(cart);
      var parsed = immutable.update('details', function (d) {
        return new _Product2.default(d);
      }).update('quantity', function (q) {
        return new _Quantity2.default(q);
      }).update('singleItemPrice', function (sip) {
        return new _Price2.default(sip);
      }).update('lineItemPrice', function (lip) {
        return new _Price2.default(lip);
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.List();
      });

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ProductLineItem).call(this, parsed));
    }

    return ProductLineItem;
  }(ProductLineItemRecord);

  var DeliveryLineItemRecord = new _immutable.Record({
    deliveryOption: new _DeliveryOption2.default({}),
    lineItemPrice: new _Price2.default()
  });

  var DeliveryLineItem = exports.DeliveryLineItem = function (_DeliveryLineItemReco) {
    _inherits(DeliveryLineItem, _DeliveryLineItemReco);

    function DeliveryLineItem() {
      var deliveryLineItem = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, DeliveryLineItem);

      var immutable = _immutable2.default.fromJS(deliveryLineItem);
      var parsed = immutable.update('deliveryOption', function (pm) {
        return new _DeliveryOption2.default(pm);
      }).update('lineItemPrice', function (lip) {
        return new _Price2.default(lip);
      });

      return _possibleConstructorReturn(this, Object.getPrototypeOf(DeliveryLineItem).call(this, parsed));
    }

    return DeliveryLineItem;
  }(DeliveryLineItemRecord);

  var PaymentLineItemRecord = new _immutable.Record({
    paymentMethod: new _PaymentMethod2.default({}),
    lineItemPrice: new _Price2.default()
  });

  var PaymentLineItem = exports.PaymentLineItem = function (_PaymentLineItemRecor) {
    _inherits(PaymentLineItem, _PaymentLineItemRecor);

    function PaymentLineItem() {
      var paymentLineItem = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, PaymentLineItem);

      var immutable = _immutable2.default.fromJS(paymentLineItem);
      var parsed = immutable.update('paymentMethod', function (pm) {
        return new _PaymentMethod2.default(pm);
      }).update('lineItemPrice', function (lip) {
        return new _Price2.default(lip);
      });

      return _possibleConstructorReturn(this, Object.getPrototypeOf(PaymentLineItem).call(this, parsed));
    }

    return PaymentLineItem;
  }(PaymentLineItemRecord);

  var CartRecord = new _immutable.Record({
    _id: null,
    lineItems: new _immutable.List(),
    deliveryLineItem: new DeliveryLineItem(),
    paymentLineItem: new PaymentLineItem(),
    total: new _Price2.default(),
    _links: new _immutable.Map()
  });

  var Cart = function (_CartRecord) {
    _inherits(Cart, _CartRecord);

    function Cart() {
      var cart = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, Cart);

      var immutable = _immutable2.default.fromJS(cart);
      var parsed = immutable.update('lineItems', function (lis) {
        return lis ? lis.map(function (li) {
          return new ProductLineItem(li);
        }) : new _immutable.List();
      }).update('deliveryLineItem', function (dli) {
        return new DeliveryLineItem(dli);
      }).update('paymentLineItem', function (pli) {
        return new PaymentLineItem(pli);
      }).update('total', function (t) {
        return new _Price2.default(t);
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.List();
      });

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Cart).call(this, parsed));
    }

    return Cart;
  }(CartRecord);

  exports.default = Cart;
});