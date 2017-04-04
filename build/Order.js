(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './BillingAddress', './extractIdFromSelfLink', './Link', './PaymentLineItem', './Price', './Product', './Quantity', './ShippingAddress', './ShippingLineItem', './Tax', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./BillingAddress'), require('./extractIdFromSelfLink'), require('./Link'), require('./PaymentLineItem'), require('./Price'), require('./Product'), require('./Quantity'), require('./ShippingAddress'), require('./ShippingLineItem'), require('./Tax'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BillingAddress, global.extractIdFromSelfLink, global.Link, global.PaymentLineItem, global.Price, global.Product, global.Quantity, global.ShippingAddress, global.ShippingLineItem, global.Tax, global.immutable);
    global.Order = mod.exports;
  }
})(this, function (exports, _BillingAddress, _extractIdFromSelfLink, _Link, _PaymentLineItem, _Price, _Product, _Quantity, _ShippingAddress, _ShippingLineItem, _Tax, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ProductLineItem = undefined;

  var _BillingAddress2 = _interopRequireDefault(_BillingAddress);

  var _extractIdFromSelfLink2 = _interopRequireDefault(_extractIdFromSelfLink);

  var _Link2 = _interopRequireDefault(_Link);

  var _PaymentLineItem2 = _interopRequireDefault(_PaymentLineItem);

  var _Price2 = _interopRequireDefault(_Price);

  var _Product2 = _interopRequireDefault(_Product);

  var _Quantity2 = _interopRequireDefault(_Quantity);

  var _ShippingAddress2 = _interopRequireDefault(_ShippingAddress);

  var _ShippingLineItem2 = _interopRequireDefault(_ShippingLineItem);

  var _Tax2 = _interopRequireDefault(_Tax);

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

  var ProductLineItemRecord = new _immutable.Record({
    product: null,
    quantity: null,
    lineItemPrice: null,
    lineItemTax: null,
    unitPrice: null,
    _links: null,
    _embedded: new _immutable.Map()
  });

  var ProductLineItem = exports.ProductLineItem = function (_ProductLineItemRecor) {
    _inherits(ProductLineItem, _ProductLineItemRecor);

    function ProductLineItem(cart) {
      _classCallCheck(this, ProductLineItem);

      var immutable = _immutable2.default.fromJS(cart || {});
      var parsed = immutable.update('product', function (p) {
        return p && new _Product2.default(p);
      }).update('quantity', function (q) {
        return q && new _Quantity2.default(q);
      }).update('lineItemPrice', function (lip) {
        return lip && new _Price2.default(lip);
      }).update('lineItemTax', function (lit) {
        return lit && new _Tax2.default(lit);
      }).update('unitPrice', function (up) {
        return up && new _Price2.default(up);
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.Map();
      });

      return _possibleConstructorReturn(this, (ProductLineItem.__proto__ || Object.getPrototypeOf(ProductLineItem)).call(this, parsed));
    }

    return ProductLineItem;
  }(ProductLineItemRecord);

  var OrderRecord = new _immutable.Record({
    _id: null,
    cartId: null,
    currency: null,
    taxModel: null,
    taxable: null,
    orderNumber: null,
    productLineItems: null,
    shippingLineItem: null,
    paymentLineItem: null,
    grandTotal: null,
    netTotal: null,
    taxTotal: null,
    balanceDue: null,
    taxes: null,
    billingAddress: null,
    shippingAddress: null,
    orderStatus: null,
    paymentStatus: null,
    fulfillmentStatus: null,
    customerComment: null,
    // legalContent
    _links: null,
    _embedded: new _immutable.Map()
  });

  var Order = function (_OrderRecord) {
    _inherits(Order, _OrderRecord);

    function Order(order) {
      _classCallCheck(this, Order);

      var immutable = _immutable2.default.fromJS(order || {});
      var parsed = immutable.update('_id', function (id) {
        return id || (0, _extractIdFromSelfLink2.default)(immutable);
      }).update('productLineItems', function (lis) {
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
      }).update('balanceDue', function (bd) {
        return bd && new _Price2.default(bd);
      }).update('taxes', function (ts) {
        return ts && ts.map(function (t) {
          return new _Tax2.default(t);
        });
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.Map();
      });

      return _possibleConstructorReturn(this, (Order.__proto__ || Object.getPrototypeOf(Order)).call(this, parsed));
    }

    return Order;
  }(OrderRecord);

  exports.default = Order;
});