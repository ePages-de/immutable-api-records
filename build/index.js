(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Attachment', './Cart', './Category', './DiscountOrFee', './Image', './LegalContent', './Link', './PageableContainer', './PaymentMethod', './Price', './Product', './ProductAttribute', './ProductAttributeDefinition', './ProductAvailability', './ProductIdentifier', './Quantity', './ReferencePrice', './ShippingDimension', './ShippingMethod', './Shop', './WeightBasedPrice'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Attachment'), require('./Cart'), require('./Category'), require('./DiscountOrFee'), require('./Image'), require('./LegalContent'), require('./Link'), require('./PageableContainer'), require('./PaymentMethod'), require('./Price'), require('./Product'), require('./ProductAttribute'), require('./ProductAttributeDefinition'), require('./ProductAvailability'), require('./ProductIdentifier'), require('./Quantity'), require('./ReferencePrice'), require('./ShippingDimension'), require('./ShippingMethod'), require('./Shop'), require('./WeightBasedPrice'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Attachment, global.Cart, global.Category, global.DiscountOrFee, global.Image, global.LegalContent, global.Link, global.PageableContainer, global.PaymentMethod, global.Price, global.Product, global.ProductAttribute, global.ProductAttributeDefinition, global.ProductAvailability, global.ProductIdentifier, global.Quantity, global.ReferencePrice, global.ShippingDimension, global.ShippingMethod, global.Shop, global.WeightBasedPrice);
    global.index = mod.exports;
  }
})(this, function (exports, _Attachment, _Cart, _Category, _DiscountOrFee, _Image, _LegalContent, _Link, _PageableContainer, _PaymentMethod, _Price, _Product, _ProductAttribute, _ProductAttributeDefinition, _ProductAvailability, _ProductIdentifier, _Quantity, _ReferencePrice, _ShippingDimension, _ShippingMethod, _Shop, _WeightBasedPrice) {
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
  Object.defineProperty(exports, 'ShippingLineItem', {
    enumerable: true,
    get: function () {
      return _Cart.ShippingLineItem;
    }
  });
  Object.defineProperty(exports, 'Category', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Category).default;
    }
  });
  Object.defineProperty(exports, 'DiscountOrFee', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_DiscountOrFee).default;
    }
  });
  Object.defineProperty(exports, 'Image', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Image).default;
    }
  });
  Object.defineProperty(exports, 'LegalContent', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_LegalContent).default;
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
  Object.defineProperty(exports, 'ProductAvailability', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ProductAvailability).default;
    }
  });
  Object.defineProperty(exports, 'ProductIdentifier', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ProductIdentifier).default;
    }
  });
  Object.defineProperty(exports, 'Quantity', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Quantity).default;
    }
  });
  Object.defineProperty(exports, 'ReferencePrice', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ReferencePrice).default;
    }
  });
  Object.defineProperty(exports, 'ShippingDimension', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ShippingDimension).default;
    }
  });
  Object.defineProperty(exports, 'ShippingMethod', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ShippingMethod).default;
    }
  });
  Object.defineProperty(exports, 'Shop', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Shop).default;
    }
  });
  Object.defineProperty(exports, 'ShopAddress', {
    enumerable: true,
    get: function () {
      return _Shop.ShopAddress;
    }
  });
  Object.defineProperty(exports, 'WeightBasedPrice', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_WeightBasedPrice).default;
    }
  });
  Object.defineProperty(exports, 'WeightPriceThreshold', {
    enumerable: true,
    get: function () {
      return _WeightBasedPrice.WeightPriceThreshold;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});