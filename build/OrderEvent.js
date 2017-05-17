(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Link', './SimplePrice', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Link'), require('./SimplePrice'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Link, global.SimplePrice, global.immutable);
    global.OrderEvent = mod.exports;
  }
})(this, function (exports, _Link, _SimplePrice, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.OrderEventUnknownDetails = exports.OrderEventPaymentVoidedDetails = exports.OrderEventPaymentPaidDetails = exports.OrderEventPaymentCreatedDetails = exports.OrderEventCreatedDetails = undefined;

  var _Link2 = _interopRequireDefault(_Link);

  var _SimplePrice2 = _interopRequireDefault(_SimplePrice);

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

  var OrderEventCreatedDetailsRecord = new _immutable.Record({
    type: null
  });

  var OrderEventCreatedDetails = exports.OrderEventCreatedDetails = function (_OrderEventCreatedDet) {
    _inherits(OrderEventCreatedDetails, _OrderEventCreatedDet);

    function OrderEventCreatedDetails() {
      _classCallCheck(this, OrderEventCreatedDetails);

      return _possibleConstructorReturn(this, (OrderEventCreatedDetails.__proto__ || Object.getPrototypeOf(OrderEventCreatedDetails)).apply(this, arguments));
    }

    return OrderEventCreatedDetails;
  }(OrderEventCreatedDetailsRecord);

  var OrderEventPaymentCreatedDetailsRecord = new _immutable.Record({
    type: null,
    amount: null,
    paymentProcessId: null
  });

  var OrderEventPaymentCreatedDetails = exports.OrderEventPaymentCreatedDetails = function (_OrderEventPaymentCre) {
    _inherits(OrderEventPaymentCreatedDetails, _OrderEventPaymentCre);

    function OrderEventPaymentCreatedDetails(orderEventPaymentCreatedDetails) {
      _classCallCheck(this, OrderEventPaymentCreatedDetails);

      var immutable = _immutable2.default.fromJS(orderEventPaymentCreatedDetails || {});
      var parsed = immutable.update('amount', function (a) {
        return a && new _SimplePrice2.default(a);
      });

      return _possibleConstructorReturn(this, (OrderEventPaymentCreatedDetails.__proto__ || Object.getPrototypeOf(OrderEventPaymentCreatedDetails)).call(this, parsed));
    }

    return OrderEventPaymentCreatedDetails;
  }(OrderEventPaymentCreatedDetailsRecord);

  var OrderEventPaymentPaidDetailsRecord = new _immutable.Record({
    type: null,
    amount: null,
    paymentProcessId: null
  });

  var OrderEventPaymentPaidDetails = exports.OrderEventPaymentPaidDetails = function (_OrderEventPaymentPai) {
    _inherits(OrderEventPaymentPaidDetails, _OrderEventPaymentPai);

    function OrderEventPaymentPaidDetails(orderEventPaymentPaidDetails) {
      _classCallCheck(this, OrderEventPaymentPaidDetails);

      var immutable = _immutable2.default.fromJS(orderEventPaymentPaidDetails || {});
      var parsed = immutable.update('amount', function (a) {
        return a && new _SimplePrice2.default(a);
      });

      return _possibleConstructorReturn(this, (OrderEventPaymentPaidDetails.__proto__ || Object.getPrototypeOf(OrderEventPaymentPaidDetails)).call(this, parsed));
    }

    return OrderEventPaymentPaidDetails;
  }(OrderEventPaymentPaidDetailsRecord);

  var OrderEventPaymentVoidedDetailsRecord = new _immutable.Record({
    type: null,
    paymentProcessId: null
  });

  var OrderEventPaymentVoidedDetails = exports.OrderEventPaymentVoidedDetails = function (_OrderEventPaymentVoi) {
    _inherits(OrderEventPaymentVoidedDetails, _OrderEventPaymentVoi);

    function OrderEventPaymentVoidedDetails() {
      _classCallCheck(this, OrderEventPaymentVoidedDetails);

      return _possibleConstructorReturn(this, (OrderEventPaymentVoidedDetails.__proto__ || Object.getPrototypeOf(OrderEventPaymentVoidedDetails)).apply(this, arguments));
    }

    return OrderEventPaymentVoidedDetails;
  }(OrderEventPaymentVoidedDetailsRecord);

  var OrderEventUnknownDetailsRecord = new _immutable.Record({
    type: null
  });

  var OrderEventUnknownDetails = exports.OrderEventUnknownDetails = function (_OrderEventUnknownDet) {
    _inherits(OrderEventUnknownDetails, _OrderEventUnknownDet);

    function OrderEventUnknownDetails() {
      _classCallCheck(this, OrderEventUnknownDetails);

      return _possibleConstructorReturn(this, (OrderEventUnknownDetails.__proto__ || Object.getPrototypeOf(OrderEventUnknownDetails)).apply(this, arguments));
    }

    return OrderEventUnknownDetails;
  }(OrderEventUnknownDetailsRecord);

  var OrderEventRecord = new _immutable.Record({
    triggeredBy: null,
    comment: null,
    details: null,
    createdAt: null,
    _links: null,
    _embedded: new _immutable.Map()
  });

  var OrderEvent = function (_OrderEventRecord) {
    _inherits(OrderEvent, _OrderEventRecord);

    function OrderEvent(orderEvent) {
      _classCallCheck(this, OrderEvent);

      var immutable = _immutable2.default.fromJS(orderEvent || {});
      var parsed = immutable.update('details', function (d) {
        if (!d) return null;

        switch (d.get('type')) {
          case 'order-created':
            return new OrderEventCreatedDetails(d);
          case 'payment-created':
            return new OrderEventPaymentCreatedDetails(d);
          case 'payment-paid':
            return new OrderEventPaymentPaidDetails(d);
          case 'payment-voided':
            return new OrderEventPaymentVoidedDetails(d);
          default:
            return new OrderEventUnknownDetails(d);
        }
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.Map();
      });

      return _possibleConstructorReturn(this, (OrderEvent.__proto__ || Object.getPrototypeOf(OrderEvent)).call(this, parsed));
    }

    return OrderEvent;
  }(OrderEventRecord);

  exports.default = OrderEvent;
});