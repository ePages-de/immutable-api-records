(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.immutable);
    global.BillingAddress = mod.exports;
  }
})(this, function (exports, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var BillingAddressRecord = new _immutable.Record({
    salutation: null,
    gender: null,
    company: null,
    title: null,
    firstName: null,
    middleName: null,
    lastName: null,
    street: null,
    houseNumber: null,
    street2: null,
    addressExtension: null,
    postalCode: null,
    city: null,
    country: null,
    state: null,
    email: null,
    phone: null,
    mobile: null,
    vatId: null,
    taxNumber: null,
    birthDate: null,
    displayAddressLines: null
  });

  var BillingAddress = function (_BillingAddressRecord) {
    _inherits(BillingAddress, _BillingAddressRecord);

    function BillingAddress() {
      _classCallCheck(this, BillingAddress);

      return _possibleConstructorReturn(this, (BillingAddress.__proto__ || Object.getPrototypeOf(BillingAddress)).apply(this, arguments));
    }

    return BillingAddress;
  }(BillingAddressRecord);

  exports.default = BillingAddress;
});