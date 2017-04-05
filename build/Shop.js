(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './extractIdFromSelfLink', './Link', './SimplePrice', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./extractIdFromSelfLink'), require('./Link'), require('./SimplePrice'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.extractIdFromSelfLink, global.Link, global.SimplePrice, global.immutable);
    global.Shop = mod.exports;
  }
})(this, function (exports, _extractIdFromSelfLink, _Link, _SimplePrice, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ShopAddress = undefined;

  var _extractIdFromSelfLink2 = _interopRequireDefault(_extractIdFromSelfLink);

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

  var ShopAddressRecord = new _immutable.Record({
    company: null,
    lastName: null,
    firstName: null,
    street: null,
    street2: null,
    city: null,
    postalCode: null,
    country: null,
    state: null,
    phone: null,
    fax: null,
    email: null,
    vatId: null,
    commercialRegister: null
  });

  var ShopAddress = exports.ShopAddress = function (_ShopAddressRecord) {
    _inherits(ShopAddress, _ShopAddressRecord);

    function ShopAddress() {
      _classCallCheck(this, ShopAddress);

      return _possibleConstructorReturn(this, (ShopAddress.__proto__ || Object.getPrototypeOf(ShopAddress)).apply(this, arguments));
    }

    return ShopAddress;
  }(ShopAddressRecord);

  var ShopRecord = new _immutable.Record({
    _id: null,
    name: null,
    address: null,
    defaultCurrency: null,
    currencies: null,
    defaultShippingCountry: null,
    shippingCountries: null,
    defaultServiceableCountry: null,
    serviceableCountries: null,
    defaultLocale: null,
    locales: null,
    taxModel: null,
    vatExempted: null,
    closedByMerchant: false,
    closedShopMessage: null,
    listPriceText: null,
    minimumOrderValue: null,
    _links: null,
    _embedded: new _immutable.Map()
  });

  var Shop = function (_ShopRecord) {
    _inherits(Shop, _ShopRecord);

    function Shop(shop) {
      _classCallCheck(this, Shop);

      var immutable = _immutable2.default.fromJS(shop || {});
      var parsed = immutable.update('_id', function (id) {
        return id || (0, _extractIdFromSelfLink2.default)(immutable);
      }).update('address', function (a) {
        return a && new ShopAddress(a);
      }).update('minimumOrderValue', function (mov) {
        return mov && new _SimplePrice2.default(mov);
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.Map();
      });

      return _possibleConstructorReturn(this, (Shop.__proto__ || Object.getPrototypeOf(Shop)).call(this, parsed));
    }

    return Shop;
  }(ShopRecord);

  exports.default = Shop;
});