(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './extractIdFromSelfLink', './Link', './ShippingMethod', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./extractIdFromSelfLink'), require('./Link'), require('./ShippingMethod'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.extractIdFromSelfLink, global.Link, global.ShippingMethod, global.immutable);
    global.ShippingZone = mod.exports;
  }
})(this, function (exports, _extractIdFromSelfLink, _Link, _ShippingMethod, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extractIdFromSelfLink2 = _interopRequireDefault(_extractIdFromSelfLink);

  var _Link2 = _interopRequireDefault(_Link);

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

  var ShippingZoneRecord = new _immutable.Record({
    _id: null,
    name: null,
    serviceableCountries: null,
    shippingMethods: null,
    _links: null,
    _embedded: new _immutable.Map()
  });

  var ShippingZone = function (_ShippingZoneRecord) {
    _inherits(ShippingZone, _ShippingZoneRecord);

    function ShippingZone(shippingZone) {
      _classCallCheck(this, ShippingZone);

      var immutable = _immutable2.default.fromJS(shippingZone || {});
      var parsed = immutable.update('_id', function (id) {
        return id || (0, _extractIdFromSelfLink2.default)(immutable);
      }).update('shippingMethods', function (sms) {
        return sms ? sms.map(function (sm) {
          return new _ShippingMethod2.default(sm);
        }) : new _immutable.List();
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.Map();
      });

      return _possibleConstructorReturn(this, (ShippingZone.__proto__ || Object.getPrototypeOf(ShippingZone)).call(this, parsed));
    }

    return ShippingZone;
  }(ShippingZoneRecord);

  exports.default = ShippingZone;
});