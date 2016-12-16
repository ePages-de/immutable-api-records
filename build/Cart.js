(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './BillingAddress', './Link', './PaymentMethod', './Price', './Product', './Quantity', './ShippingAddress', './ShippingMethod', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./BillingAddress'), require('./Link'), require('./PaymentMethod'), require('./Price'), require('./Product'), require('./Quantity'), require('./ShippingAddress'), require('./ShippingMethod'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BillingAddress, global.Link, global.PaymentMethod, global.Price, global.Product, global.Quantity, global.ShippingAddress, global.ShippingMethod, global.immutable);
    global.Cart = mod.exports;
  }
})(this, function (exports, _BillingAddress, _Link, _PaymentMethod, _Price, _Product, _Quantity, _ShippingAddress, _ShippingMethod, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PaymentLineItem = exports.ShippingLineItem = exports.ProductLineItem = exports.CheckoutState = undefined;

  var _BillingAddress2 = _interopRequireDefault(_BillingAddress);

  var _Link2 = _interopRequireDefault(_Link);

  var _PaymentMethod2 = _interopRequireDefault(_PaymentMethod);

  var _Price2 = _interopRequireDefault(_Price);

  var _Product2 = _interopRequireDefault(_Product);

  var _Quantity2 = _interopRequireDefault(_Quantity);

  var _ShippingAddress2 = _interopRequireDefault(_ShippingAddress);

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

  var CheckoutStateRecord = new _immutable.Record({
    billingAddressSet: null,
    paymentMethodSelectable: null,
    paymentMethodValid: null,
    priceValidToOrder: null,
    readyToOrder: null,
    shippingMethodSelectable: null,
    shippingMethodValid: null
  });

  var CheckoutState = exports.CheckoutState = function (_CheckoutStateRecord) {
    _inherits(CheckoutState, _CheckoutStateRecord);

    function CheckoutState() {
      _classCallCheck(this, CheckoutState);

      return _possibleConstructorReturn(this, (CheckoutState.__proto__ || Object.getPrototypeOf(CheckoutState)).apply(this, arguments));
    }

    return CheckoutState;
  }(CheckoutStateRecord);

  // Currently there are only products in the line items
  var ProductLineItemRecord = new _immutable.Record({
    _type: null,
    _id: null,
    _ref: null,
    name: null,
    description: null,
    details: null,
    quantity: null,
    singleItemPrice: null,
    lineItemPrice: null,
    _links: null
  });

  var ProductLineItem = exports.ProductLineItem = function (_ProductLineItemRecor) {
    _inherits(ProductLineItem, _ProductLineItemRecor);

    function ProductLineItem(cart) {
      _classCallCheck(this, ProductLineItem);

      var immutable = _immutable2.default.fromJS(cart || {});
      var parsed = immutable.update('details', function (d) {
        return d && new _Product2.default(d);
      }).update('quantity', function (q) {
        return q && new _Quantity2.default(q);
      }).update('singleItemPrice', function (sip) {
        return sip && new _Price2.default(sip);
      }).update('lineItemPrice', function (lip) {
        return lip && new _Price2.default(lip);
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.Map();
      });

      return _possibleConstructorReturn(this, (ProductLineItem.__proto__ || Object.getPrototypeOf(ProductLineItem)).call(this, parsed));
    }

    return ProductLineItem;
  }(ProductLineItemRecord);

  var ShippingLineItemRecord = new _immutable.Record({
    shippingMethod: null,
    lineItemPrice: null
  });

  var ShippingLineItem = exports.ShippingLineItem = function (_ShippingLineItemReco) {
    _inherits(ShippingLineItem, _ShippingLineItemReco);

    function ShippingLineItem(shippingLineItem) {
      _classCallCheck(this, ShippingLineItem);

      var immutable = _immutable2.default.fromJS(shippingLineItem || {});
      var parsed = immutable.update('shippingMethod', function (sm) {
        return sm && new _ShippingMethod2.default(sm);
      }).update('lineItemPrice', function (lip) {
        return lip && new _Price2.default(lip);
      });

      return _possibleConstructorReturn(this, (ShippingLineItem.__proto__ || Object.getPrototypeOf(ShippingLineItem)).call(this, parsed));
    }

    return ShippingLineItem;
  }(ShippingLineItemRecord);

  var PaymentLineItemRecord = new _immutable.Record({
    paymentMethod: null,
    lineItemPrice: null
  });

  var PaymentLineItem = exports.PaymentLineItem = function (_PaymentLineItemRecor) {
    _inherits(PaymentLineItem, _PaymentLineItemRecor);

    function PaymentLineItem(paymentLineItem) {
      _classCallCheck(this, PaymentLineItem);

      var immutable = _immutable2.default.fromJS(paymentLineItem || {});
      var parsed = immutable.update('paymentMethod', function (pm) {
        return pm && new _PaymentMethod2.default(pm);
      }).update('lineItemPrice', function (lip) {
        return lip && new _Price2.default(lip);
      });

      return _possibleConstructorReturn(this, (PaymentLineItem.__proto__ || Object.getPrototypeOf(PaymentLineItem)).call(this, parsed));
    }

    return PaymentLineItem;
  }(PaymentLineItemRecord);

  var CartRecord = new _immutable.Record({
    _id: null,
    lineItems: null,
    shippingLineItem: null,
    paymentLineItem: null,
    billingAddress: null,
    shippingAddress: null,
    grandTotal: null,
    netTotal: null,
    taxTotal: null,
    taxable: null,
    checkoutState: null,
    _links: null,
    _embedded: new _immutable.Map()
  });

  var Cart = function (_CartRecord) {
    _inherits(Cart, _CartRecord);

    function Cart(cart) {
      _classCallCheck(this, Cart);

      var immutable = _immutable2.default.fromJS(cart || {});
      var parsed = immutable.update('lineItems', function (lis) {
        return lis ? lis.map(function (li) {
          return new ProductLineItem(li);
        }) : new _immutable.List();
      }).update('shippingLineItem', function (sli) {
        return sli && new ShippingLineItem(sli);
      }).update('paymentLineItem', function (pli) {
        return pli && new PaymentLineItem(pli);
      }).update('billingAddress', function (ba) {
        return ba && new _BillingAddress2.default(ba);
      }).update('shippingAddress', function (sa) {
        return sa && new _ShippingAddress2.default(sa);
      }).update('grandTotal', function (gt) {
        return gt && new _Price2.default(gt);
      }).update('netTotal', function (nt) {
        return nt && new _Price2.default(nt);
      }).update('taxTotal', function (tt) {
        return tt && new _Price2.default(tt);
      }).update('checkoutState', function (cs) {
        return cs && new CheckoutState(cs);
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.Map();
      });

      return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this, parsed));
    }

    return Cart;
  }(CartRecord);

  exports.default = Cart;
});