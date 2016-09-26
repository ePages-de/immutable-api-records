(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './extractIdFromSelfLink', './Gtin', './Link', './Price', './ProductAttribute', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./extractIdFromSelfLink'), require('./Gtin'), require('./Link'), require('./Price'), require('./ProductAttribute'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.extractIdFromSelfLink, global.Gtin, global.Link, global.Price, global.ProductAttribute, global.immutable);
    global.Product = mod.exports;
  }
})(this, function (exports, _extractIdFromSelfLink, _Gtin, _Link, _Price, _ProductAttribute, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extractIdFromSelfLink2 = _interopRequireDefault(_extractIdFromSelfLink);

  var _Gtin2 = _interopRequireDefault(_Gtin);

  var _Link2 = _interopRequireDefault(_Link);

  var _Price2 = _interopRequireDefault(_Price);

  var _ProductAttribute2 = _interopRequireDefault(_ProductAttribute);

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

  var ProductRecord = new _immutable.Record({
    _id: '',
    sku: '',
    name: '',
    description: '',
    salesPrice: new _Price2.default(),
    listPrice: new _Price2.default(),
    taxClass: 'REGULAR',
    manufacturer: '',
    essentialFeatures: '',
    gtins: new _immutable.List(),
    tags: new _immutable.List(),
    attributes: new _immutable.List(),
    stockManaged: false,
    visible: false,
    _links: new _immutable.Map()
  });

  var Product = function (_ProductRecord) {
    _inherits(Product, _ProductRecord);

    function Product() {
      var product = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, Product);

      var immutable = _immutable2.default.fromJS(product);
      var parsed = immutable.set('_id', (0, _extractIdFromSelfLink2.default)(immutable)).update('salesPrice', function (sp) {
        return new _Price2.default(sp);
      }).update('listPrice', function (lp) {
        return new _Price2.default(lp);
      }).update('attributes', function (pas) {
        return pas ? pas.map(function (pa) {
          return new _ProductAttribute2.default(pa);
        }) : new _immutable.List();
      }).update('gtins', function (gs) {
        return gs ? gs.map(function (g) {
          return new _Gtin2.default(g);
        }) : new _immutable.List();
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.Map();
      });

      return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this, parsed));
    }

    return Product;
  }(ProductRecord);

  exports.default = Product;
});