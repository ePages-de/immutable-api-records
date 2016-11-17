(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './extractIdFromSelfLink', './Link', './Price', './ProductAttribute', './ProductIdentifier', './ReferencePrice', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./extractIdFromSelfLink'), require('./Link'), require('./Price'), require('./ProductAttribute'), require('./ProductIdentifier'), require('./ReferencePrice'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.extractIdFromSelfLink, global.Link, global.Price, global.ProductAttribute, global.ProductIdentifier, global.ReferencePrice, global.immutable);
    global.Product = mod.exports;
  }
})(this, function (exports, _extractIdFromSelfLink, _Link, _Price, _ProductAttribute, _ProductIdentifier, _ReferencePrice, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extractIdFromSelfLink2 = _interopRequireDefault(_extractIdFromSelfLink);

  var _Link2 = _interopRequireDefault(_Link);

  var _Price2 = _interopRequireDefault(_Price);

  var _ProductAttribute2 = _interopRequireDefault(_ProductAttribute);

  var _ProductIdentifier2 = _interopRequireDefault(_ProductIdentifier);

  var _ReferencePrice2 = _interopRequireDefault(_ReferencePrice);

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
    listPrice: null, // new Price()
    onSale: false,
    refPrice: null, // new ReferencePrice()
    taxClass: 'REGULAR',
    manufacturer: '',
    essentialFeatures: '',
    productIdentifiers: new _immutable.List(),
    tags: new _immutable.List(),
    attributes: new _immutable.List(),
    stockManaged: false,
    visible: false,
    _links: new _immutable.Map()
  });

  var Product = function (_ProductRecord) {
    _inherits(Product, _ProductRecord);

    function Product(product) {
      _classCallCheck(this, Product);

      var immutable = _immutable2.default.fromJS(product || {});
      var parsed = immutable.set('_id', (0, _extractIdFromSelfLink2.default)(immutable)).update('salesPrice', function (sp) {
        return new _Price2.default(sp);
      }).update('listPrice', function (lp) {
        return lp ? new _Price2.default(lp) : null;
      }).update('refPrice', function (rp) {
        return rp ? new _ReferencePrice2.default(rp) : null;
      }).update('attributes', function (pas) {
        return pas ? pas.map(function (pa) {
          return new _ProductAttribute2.default(pa);
        }) : new _immutable.List();
      }).update('productIdentifiers', function (pis) {
        return pis ? pis.map(function (pi) {
          return new _ProductIdentifier2.default(pi);
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