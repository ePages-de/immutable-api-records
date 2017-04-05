(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './ApplicablePaymentMethod', './ApplicableShippingMethod', './Attachment', './BillingAddress', './Cart', './Category', './DiscountOrFee', './Image', './LegalContent', './Order', './OrderStatusLogEntry', './Link', './PageableContainer', './PaymentLineItem', './PaymentMethod', './Price', './Product', './ProductAttribute', './ProductAttributeDefinition', './ProductAvailability', './ProductIdentifier', './Quantity', './ReferencePrice', './ShippingAddress', './ShippingDimension', './ShippingLineItem', './ShippingMethod', './ShippingPeriod', './ShippingZone', './Shop', './SimplePrice', './Tax', './WeightBasedPrice'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./ApplicablePaymentMethod'), require('./ApplicableShippingMethod'), require('./Attachment'), require('./BillingAddress'), require('./Cart'), require('./Category'), require('./DiscountOrFee'), require('./Image'), require('./LegalContent'), require('./Order'), require('./OrderStatusLogEntry'), require('./Link'), require('./PageableContainer'), require('./PaymentLineItem'), require('./PaymentMethod'), require('./Price'), require('./Product'), require('./ProductAttribute'), require('./ProductAttributeDefinition'), require('./ProductAvailability'), require('./ProductIdentifier'), require('./Quantity'), require('./ReferencePrice'), require('./ShippingAddress'), require('./ShippingDimension'), require('./ShippingLineItem'), require('./ShippingMethod'), require('./ShippingPeriod'), require('./ShippingZone'), require('./Shop'), require('./SimplePrice'), require('./Tax'), require('./WeightBasedPrice'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ApplicablePaymentMethod, global.ApplicableShippingMethod, global.Attachment, global.BillingAddress, global.Cart, global.Category, global.DiscountOrFee, global.Image, global.LegalContent, global.Order, global.OrderStatusLogEntry, global.Link, global.PageableContainer, global.PaymentLineItem, global.PaymentMethod, global.Price, global.Product, global.ProductAttribute, global.ProductAttributeDefinition, global.ProductAvailability, global.ProductIdentifier, global.Quantity, global.ReferencePrice, global.ShippingAddress, global.ShippingDimension, global.ShippingLineItem, global.ShippingMethod, global.ShippingPeriod, global.ShippingZone, global.Shop, global.SimplePrice, global.Tax, global.WeightBasedPrice);
    global.index = mod.exports;
  }
})(this, function (exports, _ApplicablePaymentMethod, _ApplicableShippingMethod, _Attachment, _BillingAddress, _Cart, _Category, _DiscountOrFee, _Image, _LegalContent, _Order, _OrderStatusLogEntry, _Link, _PageableContainer, _PaymentLineItem, _PaymentMethod, _Price, _Product, _ProductAttribute, _ProductAttributeDefinition, _ProductAvailability, _ProductIdentifier, _Quantity, _ReferencePrice, _ShippingAddress, _ShippingDimension, _ShippingLineItem, _ShippingMethod, _ShippingPeriod, _ShippingZone, _Shop, _SimplePrice, _Tax, _WeightBasedPrice) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'ApplicablePaymentMethod', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ApplicablePaymentMethod).default;
    }
  });
  Object.defineProperty(exports, 'ApplicableShippingMethod', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ApplicableShippingMethod).default;
    }
  });
  Object.defineProperty(exports, 'Attachment', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Attachment).default;
    }
  });
  Object.defineProperty(exports, 'BillingAddress', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_BillingAddress).default;
    }
  });
  Object.defineProperty(exports, 'Cart', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Cart).default;
    }
  });
  Object.defineProperty(exports, 'CartCheckoutState', {
    enumerable: true,
    get: function () {
      return _Cart.CheckoutState;
    }
  });
  Object.defineProperty(exports, 'CartProductLineItem', {
    enumerable: true,
    get: function () {
      return _Cart.ProductLineItem;
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
  Object.defineProperty(exports, 'Order', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Order).default;
    }
  });
  Object.defineProperty(exports, 'OrderProductLineItem', {
    enumerable: true,
    get: function () {
      return _Order.ProductLineItem;
    }
  });
  Object.defineProperty(exports, 'OrderStatusLogEntry', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_OrderStatusLogEntry).default;
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
  Object.defineProperty(exports, 'PaymentLineItem', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_PaymentLineItem).default;
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
  Object.defineProperty(exports, 'ShippingAddress', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ShippingAddress).default;
    }
  });
  Object.defineProperty(exports, 'ShippingDimension', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ShippingDimension).default;
    }
  });
  Object.defineProperty(exports, 'ShippingLineItem', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ShippingLineItem).default;
    }
  });
  Object.defineProperty(exports, 'ShippingMethod', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ShippingMethod).default;
    }
  });
  Object.defineProperty(exports, 'ShippingPeriod', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ShippingPeriod).default;
    }
  });
  Object.defineProperty(exports, 'ShippingZone', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ShippingZone).default;
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
  Object.defineProperty(exports, 'SimplePrice', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_SimplePrice).default;
    }
  });
  Object.defineProperty(exports, 'Tax', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Tax).default;
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