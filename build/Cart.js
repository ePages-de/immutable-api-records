(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Link', './PaymentMethod', './Price', './Product', './Quantity', './ShippingMethod', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Link'), require('./PaymentMethod'), require('./Price'), require('./Product'), require('./Quantity'), require('./ShippingMethod'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Link, global.PaymentMethod, global.Price, global.Product, global.Quantity, global.ShippingMethod, global.immutable);
    global.Cart = mod.exports;
  }
})(this, function (exports, _Link, _PaymentMethod, _Price, _Product, _Quantity, _ShippingMethod, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PaymentLineItem = exports.ShippingLineItem = exports.ProductLineItem = undefined;

  var _Link2 = _interopRequireDefault(_Link);

  var _PaymentMethod2 = _interopRequireDefault(_PaymentMethod);

  var _Price2 = _interopRequireDefault(_Price);

  var _Product2 = _interopRequireDefault(_Product);

  var _Quantity2 = _interopRequireDefault(_Quantity);

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

    function ProductLineItem(cart) {
      _classCallCheck(this, ProductLineItem);

      var immutable = _immutable2.default.fromJS(cart || {});
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

      return _possibleConstructorReturn(this, (ProductLineItem.__proto__ || Object.getPrototypeOf(ProductLineItem)).call(this, parsed));
    }

    return ProductLineItem;
  }(ProductLineItemRecord);

  var ShippingLineItemRecord = new _immutable.Record({
    shippingMethod: new _ShippingMethod2.default(),
    lineItemPrice: new _Price2.default()
  });

  var ShippingLineItem = exports.ShippingLineItem = function (_ShippingLineItemReco) {
    _inherits(ShippingLineItem, _ShippingLineItemReco);

    function ShippingLineItem(shippingLineItem) {
      _classCallCheck(this, ShippingLineItem);

      var immutable = _immutable2.default.fromJS(shippingLineItem || {});
      var parsed = immutable.update('shippingMethod', function (sm) {
        return new _ShippingMethod2.default(sm);
      }).update('lineItemPrice', function (lip) {
        return new _Price2.default(lip);
      });

      return _possibleConstructorReturn(this, (ShippingLineItem.__proto__ || Object.getPrototypeOf(ShippingLineItem)).call(this, parsed));
    }

    return ShippingLineItem;
  }(ShippingLineItemRecord);

  var PaymentLineItemRecord = new _immutable.Record({
    paymentMethod: new _PaymentMethod2.default({}),
    lineItemPrice: new _Price2.default()
  });

  var PaymentLineItem = exports.PaymentLineItem = function (_PaymentLineItemRecor) {
    _inherits(PaymentLineItem, _PaymentLineItemRecor);

    function PaymentLineItem(paymentLineItem) {
      _classCallCheck(this, PaymentLineItem);

      var immutable = _immutable2.default.fromJS(paymentLineItem || {});
      var parsed = immutable.update('paymentMethod', function (pm) {
        return new _PaymentMethod2.default(pm);
      }).update('lineItemPrice', function (lip) {
        return new _Price2.default(lip);
      });

      return _possibleConstructorReturn(this, (PaymentLineItem.__proto__ || Object.getPrototypeOf(PaymentLineItem)).call(this, parsed));
    }

    return PaymentLineItem;
  }(PaymentLineItemRecord);

  var CartRecord = new _immutable.Record({
    _id: null,
    lineItems: new _immutable.List(),
    shippingLineItem: new ShippingLineItem(),
    paymentLineItem: new PaymentLineItem(),
    total: new _Price2.default(),
    _links: new _immutable.Map()
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
        return new ShippingLineItem(sli);
      }).update('paymentLineItem', function (pli) {
        return new PaymentLineItem(pli);
      }).update('total', function (t) {
        return new _Price2.default(t);
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.List();
      });

      return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this, parsed));
    }

    return Cart;
  }(CartRecord);

  exports.default = Cart;
});