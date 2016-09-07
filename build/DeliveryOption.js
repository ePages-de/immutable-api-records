(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Price', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Price'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Price, global.immutable);
    global.DeliveryOption = mod.exports;
  }
})(this, function (exports, _Price, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Price2 = _interopRequireDefault(_Price);

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

  var DeliveryOptionRecord = new _immutable.Record({
    _id: null,
    name: '',
    description: '',
    taxClass: 'REGULAR',
    price: new _Price2.default(),
    serviceableCountries: new _immutable.List()
  });

  var DeliveryOption = function (_DeliveryOptionRecord) {
    _inherits(DeliveryOption, _DeliveryOptionRecord);

    function DeliveryOption() {
      var deliveryOption = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, DeliveryOption);

      var immutable = _immutable2.default.fromJS(deliveryOption);
      var parsed = immutable.update('price', function (p) {
        return new _Price2.default(p);
      });

      return _possibleConstructorReturn(this, (DeliveryOption.__proto__ || Object.getPrototypeOf(DeliveryOption)).call(this, parsed));
    }

    return DeliveryOption;
  }(DeliveryOptionRecord);

  exports.default = DeliveryOption;
});