(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Attachment', './Cart', './DeliveryOption', './Gtin', './Image', './Link', './PageableContainer', './PaymentMethod', './Price', './Product', './ProductAttribute', './ProductAttributeDefinition', './Quantity'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Attachment'), require('./Cart'), require('./DeliveryOption'), require('./Gtin'), require('./Image'), require('./Link'), require('./PageableContainer'), require('./PaymentMethod'), require('./Price'), require('./Product'), require('./ProductAttribute'), require('./ProductAttributeDefinition'), require('./Quantity'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Attachment, global.Cart, global.DeliveryOption, global.Gtin, global.Image, global.Link, global.PageableContainer, global.PaymentMethod, global.Price, global.Product, global.ProductAttribute, global.ProductAttributeDefinition, global.Quantity);
    global.index = mod.exports;
  }
})(this, function (exports, _Attachment, _Cart, _DeliveryOption, _Gtin, _Image, _Link, _PageableContainer, _PaymentMethod, _Price, _Product, _ProductAttribute, _ProductAttributeDefinition, _Quantity) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'Attachment', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Attachment).default;
    }
  });
  Object.defineProperty(exports, 'Cart', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Cart).default;
    }
  });
  Object.defineProperty(exports, 'DeliveryLineItem', {
    enumerable: true,
    get: function () {
      return _Cart.DeliveryLineItem;
    }
  });
  Object.defineProperty(exports, 'PaymentLineItem', {
    enumerable: true,
    get: function () {
      return _Cart.PaymentLineItem;
    }
  });
  Object.defineProperty(exports, 'ProductLineItem', {
    enumerable: true,
    get: function () {
      return _Cart.ProductLineItem;
    }
  });
  Object.defineProperty(exports, 'DeliveryOption', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_DeliveryOption).default;
    }
  });
  Object.defineProperty(exports, 'Gtin', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Gtin).default;
    }
  });
  Object.defineProperty(exports, 'Image', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Image).default;
    }
  });
  Object.defineProperty(exports, 'Link', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Link).default;
    }
  });
  Object.defineProperty(exports, 'PageableContainer', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_PageableContainer).default;
    }
  });
  Object.defineProperty(exports, 'PageablePage', {
    enumerable: true,
    get: function () {
      return _PageableContainer.PageablePage;
    }
  });
  Object.defineProperty(exports, 'PaymentMethod', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_PaymentMethod).default;
    }
  });
  Object.defineProperty(exports, 'Price', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Price).default;
    }
  });
  Object.defineProperty(exports, 'Product', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Product).default;
    }
  });
  Object.defineProperty(exports, 'ProductAttribute', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ProductAttribute).default;
    }
  });
  Object.defineProperty(exports, 'ProductAttributeDefinition', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ProductAttributeDefinition).default;
    }
  });
  Object.defineProperty(exports, 'Quantity', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Quantity).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});