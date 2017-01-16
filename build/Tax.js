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
    global.Tax = mod.exports;
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

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

  var TaxRecord = new _immutable.Record({
    amount: null,
    currency: null,
    taxClass: null,
    taxRate: null
  });

  var Tax = function (_TaxRecord) {
    _inherits(Tax, _TaxRecord);

    function Tax() {
      _classCallCheck(this, Tax);

      return _possibleConstructorReturn(this, (Tax.__proto__ || Object.getPrototypeOf(Tax)).apply(this, arguments));
    }

    _createClass(Tax, [{
      key: 'formatted',
      get: function get() {
        return typeof this.amount === 'number' ? this.currency + ' ' + this.amount.toFixed(2) : this.amount;
      }
    }]);

    return Tax;
  }(TaxRecord);

  exports.default = Tax;
});