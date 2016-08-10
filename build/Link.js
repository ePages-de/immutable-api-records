(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'immutable', 'url-template'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('immutable'), require('url-template'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.immutable, global.urlTemplate);
    global.Link = mod.exports;
  }
})(this, function (exports, _immutable, _urlTemplate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _urlTemplate2 = _interopRequireDefault(_urlTemplate);

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

  var LinkRecord = new _immutable.Record({
    href: '',
    rel: '',
    templated: false
  });

  var Link = function (_LinkRecord) {
    _inherits(Link, _LinkRecord);

    function Link() {
      _classCallCheck(this, Link);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Link).apply(this, arguments));
    }

    _createClass(Link, [{
      key: 'format',
      value: function format(options) {
        return this.templated ? _urlTemplate2.default.parse(this.href).expand(options) : this.href;
      }
    }]);

    return Link;
  }(LinkRecord);

  exports.default = Link;
});