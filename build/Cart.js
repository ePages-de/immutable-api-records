(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './BillingAddress', './Link', './PaymentLineItem', './Price', './Product', './Quantity', './ShippingAddress', './ShippingLineItem', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./BillingAddress'), require('./Link'), require('./PaymentLineItem'), require('./Price'), require('./Product'), require('./Quantity'), require('./ShippingAddress'), require('./ShippingLineItem'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BillingAddress, global.Link, global.PaymentLineItem, global.Price, global.Product, global.Quantity, global.ShippingAddress, global.ShippingLineItem, global.immutable);
    global.Cart = mod.exports;
  }
})(this, function (exports, _BillingAddress, _Link, _PaymentLineItem, _Price, _Product, _Quantity, _ShippingAddress, _ShippingLineItem, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ProductLineItem = exports.CheckoutState = undefined;

  var _BillingAddress2 = _interopRequireDefault(_BillingAddress);

  var _Link2 = _interopRequireDefault(_Link);

  var _PaymentLineItem2 = _interopRequireDefault(_PaymentLineItem);

  var _Price2 = _interopRequireDefault(_Price);

  var _Product2 = _interopRequireDefault(_Product);

  var _Quantity2 = _interopRequireDefault(_Quantity);

  var _ShippingAddress2 = _interopRequireDefault(_ShippingAddress);

  var _ShippingLineItem2 = _interopRequireDefault(_ShippingLineItem);

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
    quantity: null,
    singleItemPrice: null,
    lineItemPrice: null,
    _links: null,
    _embedded: new _immutable.Map()
  });

  var ProductLineItem = exports.ProductLineItem = function (_ProductLineItemRecor) {
    _inherits(ProductLineItem, _ProductLineItemRecor);

    function ProductLineItem(cart) {
      _classCallCheck(this, ProductLineItem);

      var immutable = _immutable2.default.fromJS(cart || {});
      var parsed = immutable.update('quantity', function (q) {
        return q && new _Quantity2.default(q);
      }).update('singleItemPrice', function (sip) {
        return sip && new _Price2.default(sip);
      }).update('lineItemPrice', function (lip) {
        return lip && new _Price2.default(lip);
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.Map();
      }).updateIn(['_embedded', 'product'], function (p) {
        return p && new _Product2.default(p);
      });

      return _possibleConstructorReturn(this, (ProductLineItem.__proto__ || Object.getPrototypeOf(ProductLineItem)).call(this, parsed));
    }

    return ProductLineItem;
  }(ProductLineItemRecord);

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
        return sli && new _ShippingLineItem2.default(sli);
      }).update('paymentLineItem', function (pli) {
        return pli && new _PaymentLineItem2.default(pli);
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