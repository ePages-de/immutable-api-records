(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Link', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Link'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Link, global.immutable);
    global.PageableContainer = mod.exports;
  }
})(this, function (exports, _Link, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var PageablePageRecord = new _immutable.Record({
    number: 0,
    // TODO Size cannot be used, because this throws an invariant error on Immutable.Record.
    // Here it is not really a problem, since this information is redundant in this particular case.
    // (For immutable records size is a read only property indicating, how many fields there are in the record.)
    // size: 0,
    totalPages: 0,
    totalElements: 0
  });

  var PageablePage = function (_PageablePageRecord) {
    _inherits(PageablePage, _PageablePageRecord);

    function PageablePage() {
      _classCallCheck(this, PageablePage);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(PageablePage).apply(this, arguments));
    }

    return PageablePage;
  }(PageablePageRecord);

  var PageableContainerRecord = new _immutable.Record({
    page: new PageablePage(),
    _embedded: new _immutable.Map(),
    _links: new _immutable.Map()
  });

  var PageableContainer = function (_PageableContainerRec) {
    _inherits(PageableContainer, _PageableContainerRec);

    function PageableContainer(result) {
      var castEmbedded = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      _classCallCheck(this, PageableContainer);

      var immutable = new PageableContainerRecord(_immutable2.default.fromJS(result));

      var parsed1 = immutable.update('page', function (p) {
        return new PageablePage(p);
      }).update('_links', function (ls) {
        return ls.map(function (l) {
          return new _Link2.default(l);
        });
      });

      // for every key in embeddedKey map over the list of embedded items with the provided casting function
      var parsed2 = Object.keys(castEmbedded).reduce(function (acc, embeddedKey) {
        return acc.updateIn(['_embedded', embeddedKey], function (items) {
          return items ? items.map(function (item) {
            return castEmbedded[embeddedKey](item);
          }) : new _immutable.List();
        });
      }, parsed1);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(PageableContainer).call(this, parsed2));
    }

    return PageableContainer;
  }(PageableContainerRecord);

  exports.default = PageableContainer;
});