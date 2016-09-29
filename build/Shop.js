(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './extractIdFromSelfLink', './Link', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./extractIdFromSelfLink'), require('./Link'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.extractIdFromSelfLink, global.Link, global.immutable);
    global.Shop = mod.exports;
  }
})(this, function (exports, _extractIdFromSelfLink, _Link, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ShopAddress = undefined;

  var _extractIdFromSelfLink2 = _interopRequireDefault(_extractIdFromSelfLink);

  var _Link2 = _interopRequireDefault(_Link);

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
    _id: '',
    name: '',
    address: new ShopAddress(),
    defaultCurrency: null,
    currencies: new _immutable.List(),
    defaultShippingCountry: null,
    shippingCountries: new _immutable.List(),
    defaultServiceableCountry: null,
    serviceableCountries: new _immutable.List(),
    defaultLocale: null,
    locales: new _immutable.List(),
    taxModel: null,
    vatExempted: null,
    closedByMerchant: false,
    closedShopMessage: null,
    // TODO
    // minimumOrderValue: ???
    _links: new _immutable.Map()
  });

  var Shop = function (_ShopRecord) {
    _inherits(Shop, _ShopRecord);

    function Shop() {
      var shop = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, Shop);

      var immutable = _immutable2.default.fromJS(shop);
      var parsed = immutable.set('_id', (0, _extractIdFromSelfLink2.default)(immutable)).update('address', function (a) {
        return new ShopAddress(a);
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