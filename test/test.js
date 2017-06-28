import * as Models from '../src/index'
import expect from 'unexpected'

function testConstruction (Model) {
  it('constructs', () => {
    const m1 = new Model()
    expect(m1.constructor, 'to equal', Model)

    const m2 = new Model({})
    expect(m2.constructor, 'to equal', Model)
  })
}

function testLinkCasting (Model) {
  it('casts links', () => {
    const m = new Model({
      _links: {
        foo: {
          href: '/bar'
        }
      }
    })

    expect(m._links.get('foo').constructor, 'to equal', Models.Link)
  })
}

describe('ApplicablePaymentMethod', () => {
  testConstruction(Models.ApplicablePaymentMethod)
  testLinkCasting(Models.ApplicablePaymentMethod)

  it('casts line item price', () => {
    const c = new Models.ApplicablePaymentMethod({
      lineItemPrice: {}
    })

    expect(c.lineItemPrice.constructor, 'to equal', Models.Price)
  })

  it('casts embedded payment method', () => {
    const pli = new Models.ApplicablePaymentMethod({
      _embedded: {
        'payment-method': {}
      }
    })

    expect(pli._embedded.get('payment-method').constructor, 'to equal', Models.PaymentMethod)
  })
})

describe('ApplicableShippingMethod', () => {
  testConstruction(Models.ApplicableShippingMethod)
  testLinkCasting(Models.ApplicableShippingMethod)

  it('casts line item price', () => {
    const c = new Models.ApplicableShippingMethod({
      lineItemPrice: {}
    })

    expect(c.lineItemPrice.constructor, 'to equal', Models.Price)
  })

  it('casts embedded shipping method', () => {
    const pli = new Models.ApplicableShippingMethod({
      _embedded: {
        'shipping-method': {}
      }
    })

    expect(pli._embedded.get('shipping-method').constructor, 'to equal', Models.ShippingMethod)
  })
})

describe('Attachment', () => {
  testConstruction(Models.Attachment)
  testLinkCasting(Models.Attachment)
})

describe('BillingAddress', () => {
  testConstruction(Models.BillingAddress)
})

describe('Cart', () => {
  testConstruction(Models.Cart)
  testLinkCasting(Models.Cart)

  describe('CheckoutState', () => {
    testConstruction(Models.CartCheckoutState)
  })

  describe('ProductLineItem', () => {
    testConstruction(Models.CartProductLineItem)
    testLinkCasting(Models.CartProductLineItem)

    it('casts quantity', () => {
      const pli = new Models.CartProductLineItem({
        quantity: {}
      })

      expect(pli.quantity.constructor, 'to equal', Models.Quantity)
    })

    it('casts single item price', () => {
      const pli = new Models.CartProductLineItem({
        singleItemPrice: {}
      })

      expect(pli.singleItemPrice.constructor, 'to equal', Models.Price)
    })

    it('casts line item price', () => {
      const pli = new Models.CartProductLineItem({
        lineItemPrice: {}
      })

      expect(pli.lineItemPrice.constructor, 'to equal', Models.Price)
    })

    it('casts embedded product', () => {
      const pli = new Models.CartProductLineItem({
        _embedded: {
          product: {}
        }
      })

      expect(pli._embedded.get('product').constructor, 'to equal', Models.Product)
    })
  })

  it('casts line items', () => {
    const c = new Models.Cart({
      lineItems: [
        {
        }
      ]
    })

    expect(c.lineItems.get(0).constructor, 'to equal', Models.CartProductLineItem)
  })

  it('casts shipping line item', () => {
    const c = new Models.Cart({
      shippingLineItem: {}
    })

    expect(c.shippingLineItem.constructor, 'to equal', Models.ShippingLineItem)
  })

  it('casts payment line item', () => {
    const c = new Models.Cart({
      paymentLineItem: {}
    })

    expect(c.paymentLineItem.constructor, 'to equal', Models.PaymentLineItem)
  })

  it('casts billing address', () => {
    const c = new Models.Cart({
      billingAddress: {}
    })

    expect(c.billingAddress.constructor, 'to equal', Models.BillingAddress)
  })

  it('casts shipping address item', () => {
    const c = new Models.Cart({
      shippingAddress: {}
    })

    expect(c.shippingAddress.constructor, 'to equal', Models.ShippingAddress)
  })

  it('casts grand total', () => {
    const c = new Models.Cart({
      grandTotal: {}
    })

    expect(c.grandTotal.constructor, 'to equal', Models.Price)
  })

  it('casts net total', () => {
    const c = new Models.Cart({
      netTotal: {}
    })

    expect(c.netTotal.constructor, 'to equal', Models.Price)
  })

  it('casts tax total', () => {
    const c = new Models.Cart({
      taxTotal: {}
    })

    expect(c.taxTotal.constructor, 'to equal', Models.Price)
  })

  it('casts checkout state', () => {
    const c = new Models.Cart({
      checkoutState: {}
    })

    expect(c.checkoutState.constructor, 'to equal', Models.CartCheckoutState)
  })
})

describe('Category', () => {
  testConstruction(Models.Category)
  testLinkCasting(Models.Category)
})

describe('DiscountOrFee', () => {
  testConstruction(Models.DiscountOrFee)

  it('casts absolute value', () => {
    const dof = new Models.DiscountOrFee({
      absoluteValue: {
        amount: 'EUR 1.00'
      }
    })

    expect(dof.absoluteValue.constructor, 'to equal', Models.Price)
  })
})

describe('Image', () => {
  testConstruction(Models.Image)
  testLinkCasting(Models.Image)
})

describe('LegalContent', () => {
  testConstruction(Models.LegalContent)
  testLinkCasting(Models.LegalContent)
})

describe('OfficialApp', () => {
  testConstruction(Models.OfficialApp)
  testLinkCasting(Models.OfficialApp)
})

describe('Order', () => {
  testConstruction(Models.Order)
  testLinkCasting(Models.Order)

  describe('ProductLineItem', () => {
    testConstruction(Models.OrderProductLineItem)
    testLinkCasting(Models.OrderProductLineItem)

    it('casts product', () => {
      const pli = new Models.OrderProductLineItem({
        product: {}
      })

      expect(pli.product.constructor, 'to equal', Models.Product)
    })

    it('casts quantity', () => {
      const pli = new Models.OrderProductLineItem({
        quantity: {}
      })

      expect(pli.quantity.constructor, 'to equal', Models.Quantity)
    })

    it('casts line item price', () => {
      const pli = new Models.OrderProductLineItem({
        lineItemPrice: {}
      })

      expect(pli.lineItemPrice.constructor, 'to equal', Models.Price)
    })

    it('casts line item tax', () => {
      const pli = new Models.OrderProductLineItem({
        lineItemTax: {}
      })

      expect(pli.lineItemTax.constructor, 'to equal', Models.Tax)
    })

    it('casts unit price', () => {
      const pli = new Models.OrderProductLineItem({
        unitPrice: {}
      })

      expect(pli.unitPrice.constructor, 'to equal', Models.Price)
    })
  })

  it('casts line items', () => {
    const o = new Models.Order({
      productLineItems: [
        {
        }
      ]
    })

    expect(o.productLineItems.get(0).constructor, 'to equal', Models.OrderProductLineItem)
  })

  it('casts shipping line item', () => {
    const o = new Models.Order({
      shippingLineItem: {}
    })

    expect(o.shippingLineItem.constructor, 'to equal', Models.ShippingLineItem)
  })

  it('casts payment line item', () => {
    const o = new Models.Order({
      paymentLineItem: {}
    })

    expect(o.paymentLineItem.constructor, 'to equal', Models.PaymentLineItem)
  })

  it('casts billing address', () => {
    const o = new Models.Order({
      billingAddress: {}
    })

    expect(o.billingAddress.constructor, 'to equal', Models.BillingAddress)
  })

  it('casts shipping address item', () => {
    const p = new Models.Order({
      shippingAddress: {}
    })

    expect(p.shippingAddress.constructor, 'to equal', Models.ShippingAddress)
  })

  it('casts grand total', () => {
    const o = new Models.Order({
      grandTotal: {}
    })

    expect(o.grandTotal.constructor, 'to equal', Models.Price)
  })

  it('casts net total', () => {
    const o = new Models.Order({
      netTotal: {}
    })

    expect(o.netTotal.constructor, 'to equal', Models.Price)
  })

  it('casts tax total', () => {
    const o = new Models.Order({
      taxTotal: {}
    })

    expect(o.taxTotal.constructor, 'to equal', Models.Price)
  })

  it('casts balance due', () => {
    const o = new Models.Order({
      balanceDue: {}
    })

    expect(o.balanceDue.constructor, 'to equal', Models.Price)
  })

  it('casts taxes', () => {
    const o = new Models.Order({
      taxes: [
        {}
      ]
    })

    expect(o.taxes.get(0).constructor, 'to equal', Models.Tax)
  })
})

describe('OrderEvent', () => {
  testConstruction(Models.OrderEvent)
  testLinkCasting(Models.OrderEvent)

  it('casts details to order-created', () => {
    const oe = new Models.OrderEvent({
      details: {
        type: 'order-created'
      }
    })

    expect(oe.details.constructor, 'to equal', Models.OrderEventCreatedDetails)
  })

  it('casts details to payment-created', () => {
    const oe = new Models.OrderEvent({
      details: {
        type: 'payment-created'
      }
    })

    expect(oe.details.constructor, 'to equal', Models.OrderEventPaymentCreatedDetails)
  })

  it('casts details to payment-paid', () => {
    const oe = new Models.OrderEvent({
      details: {
        type: 'payment-paid'
      }
    })

    expect(oe.details.constructor, 'to equal', Models.OrderEventPaymentPaidDetails)
  })

  it('casts details to payment-voided', () => {
    const oe = new Models.OrderEvent({
      details: {
        type: 'payment-voided'
      }
    })

    expect(oe.details.constructor, 'to equal', Models.OrderEventPaymentVoidedDetails)
  })

  it('casts details to unknown', () => {
    const oe = new Models.OrderEvent({
      details: {
        type: 'unknown'
      }
    })

    expect(oe.details.constructor, 'to equal', Models.OrderEventUnknownDetails)
  })
})

describe('OrderEventCreatedDetails', () => {
  testConstruction(Models.OrderEventCreatedDetails)
})

describe('OrderEventPaymentCreatedDetails', () => {
  testConstruction(Models.OrderEventPaymentCreatedDetails)

  it('casts amount', () => {
    const oepcd = new Models.OrderEventPaymentCreatedDetails({
      amount: {}
    })

    expect(oepcd.amount.constructor, 'to equal', Models.SimplePrice)
  })
})

describe('OrderEventPaymentPaidDetails', () => {
  testConstruction(Models.OrderEventPaymentPaidDetails)

  it('casts amount', () => {
    const oeppd = new Models.OrderEventPaymentPaidDetails({
      amount: {}
    })

    expect(oeppd.amount.constructor, 'to equal', Models.SimplePrice)
  })
})

describe('OrderEventPaymentVoidedDetails', () => {
  testConstruction(Models.OrderEventPaymentVoidedDetails)
})

describe('OrderEventUnknownDetails', () => {
  testConstruction(Models.OrderEventUnknownDetails)
})

describe('OrderStatusLogEntry', () => {
  testConstruction(Models.OrderStatusLogEntry)
})

describe('Link', () => {
  testConstruction(Models.Link)

  it('formats templated links', () => {
    const l1 = new Models.Link({
      href: '/{a}{?b}',
      templated: true
    })

    expect(l1.format({a: 'AAA', b: 'BBB'}), 'to equal', '/AAA?b=BBB')

    const l2 = new Models.Link({
      href: '/{a}',
      templated: false
    })

    expect(l2.format({a: 'AAA'}), 'to equal', '/{a}')
  })
})

describe('PageableContainer', () => {
  testConstruction(Models.PageableContainer)
  testLinkCasting(Models.PageableContainer)

  it('casts embedded rels', () => {
    const pc = new Models.PageableContainer({
      page: {},
      _embedded: {
        products: [
          {}
        ],
        prices: [
          {}
        ]
      }
    }, {
      products: (p) => new Models.Product(p),
      prices: (p) => new Models.Price(p),
      unknown: (u) => {}
    })

    expect(pc.page.constructor, 'to equal', Models.PageablePage)
    expect(pc._embedded.get('products').get(0).constructor, 'to equal', Models.Product)
    expect(pc._embedded.get('prices').get(0).constructor, 'to equal', Models.Price)
  })

  describe('PageablePage', () => {
    testConstruction(Models.PageablePage)
  })
})

describe('PaymentLineItem', () => {
  testConstruction(Models.PaymentLineItem)
  testLinkCasting(Models.PaymentLineItem)

  it('casts line item price', () => {
    const pli = new Models.PaymentLineItem({
      lineItemPrice: {}
    })

    expect(pli.lineItemPrice.constructor, 'to equal', Models.Price)
  })

  it('casts embedded payment method', () => {
    const pli = new Models.PaymentLineItem({
      _embedded: {
        'payment-method': {}
      }
    })

    expect(pli._embedded.get('payment-method').constructor, 'to equal', Models.PaymentMethod)
  })
})

describe('PaymentProcess', () => {
  testConstruction(Models.PaymentProcess)
  testLinkCasting(Models.PaymentProcess)

  it('casts amount', () => {
    const pp = new Models.PaymentProcess({
      amount: {}
    })

    expect(pp.amount.constructor, 'to equal', Models.SimplePrice)
  })
})

describe('PaymentMethod', () => {
  testConstruction(Models.PaymentMethod)
  testLinkCasting(Models.PaymentMethod)

  it('has optional discount or fee', () => {
    const pm = new Models.PaymentMethod()

    expect(pm.discountOrFee, 'to equal', null)
  })

  it('casts discount or fee', () => {
    const pm = new Models.PaymentMethod({
      discountOrFee: {
        absoluteValue: {
          amount: 'EUR 1.00'
        }
      }
    })

    expect(pm.discountOrFee.constructor, 'to equal', Models.DiscountOrFee)
  })

  it('has optional minimum order value', () => {
    const pm = new Models.PaymentMethod()

    expect(pm.discountOrFee, 'to equal', null)
  })

  it('casts minimum order value', () => {
    const pm = new Models.PaymentMethod({
      minimumOrderValue: {
        amount: 'EUR 1.00'
      }
    })

    expect(pm.minimumOrderValue.constructor, 'to equal', Models.SimplePrice)
  })
})

describe('Price', () => {
  testConstruction(Models.Price)

  it('renders formatted', () => {
    const p1 = new Models.Price({
      amount: 'EUR 1'
    })

    expect(p1.formatted, 'to equal', 'EUR 1')

    const p2 = new Models.Price({
      amount: 1.5,
      currency: 'USD'
    })

    expect(p2.formatted, 'to equal', 'USD 1.50')
  })
})

describe('PrivateApp', () => {
  testConstruction(Models.PrivateApp)
  testLinkCasting(Models.PrivateApp)
})

describe('Product', () => {
  testConstruction(Models.Product)
  testLinkCasting(Models.Product)

  it('extracts id from self link', () => {
    const p = new Models.Product({
      _links: {
        self: {
          href: '/products/00000000-0000-0000-0000-000000000000'
        }
      }
    })

    expect(p._id, 'to equal', '00000000-0000-0000-0000-000000000000')
  })

  it('casts sales price', () => {
    const p = new Models.Product({
      salesPrice: {
        amount: 'EUR 1.00'
      }
    })

    expect(p.salesPrice.constructor, 'to equal', Models.Price)
  })

  it('casts list price', () => {
    const p = new Models.Product({
      listPrice: {
        amount: 'EUR 1.00'
      }
    })

    expect(p.listPrice.constructor, 'to equal', Models.Price)
  })

  it('casts attributes', () => {
    const p = new Models.Product({
      attributes: [
        {
          ns: 'ns',
          n: 'n'
        }
      ]
    })

    expect(p.attributes.get(0).constructor, 'to equal', Models.ProductAttribute)
  })

  it('casts reference price', () => {
    const p = new Models.Product({
      refPrice: {
        unit: 'GRAM',
        refQuantity: 100,
        quantity: 250
      }
    })

    expect(p.refPrice.constructor, 'to equal', Models.ReferencePrice)
  })

  it('casts product identifiers', () => {
    const p = new Models.Product({
      productIdentifiers: [{
        type: 'ISBN',
        value: '12345'
      }]
    })

    expect(p.productIdentifiers.count(), 'to equal', 1)
    expect(p.productIdentifiers.get(0).constructor, 'to equal', Models.ProductIdentifier)
  })

  it('casts shipping period', () => {
    const p = new Models.Product({
      shippingPeriod: {
      }
    })

    expect(p.shippingPeriod.constructor, 'to equal', Models.ShippingPeriod)
  })

  it('casts shipping dimension', () => {
    const p = new Models.Product({
      shippingDimension: {
        length: 10
      }
    })

    expect(p.shippingDimension.constructor, 'to equal', Models.ShippingDimension)
  })

  it('casts embedded availability', () => {
    const p = new Models.Product({
      _embedded: {
        availability: {}
      }
    })

    expect(p._embedded.get('availability').constructor, 'to equal', Models.ProductAvailability)
  })
})

describe('ProductAttribute', () => {
  testConstruction(Models.ProductAttribute)
  testLinkCasting(Models.ProductAttribute)

  it('renders full name', () => {
    const pa = new Models.ProductAttribute({
      namespace: 'ns',
      name: 'n'
    })

    expect(pa.fullName, 'to equal', 'ns:n')
  })
})

describe('ProductAttributeDefinition', () => {
  testConstruction(Models.ProductAttributeDefinition)
  testLinkCasting(Models.ProductAttributeDefinition)

  it('renders full name', () => {
    const pad = new Models.ProductAttributeDefinition({
      namespace: 'ns',
      name: 'n'
    })

    expect(pad.fullName, 'to equal', 'ns:n')
  })
})

describe('ProductAvailability', () => {
  testConstruction(Models.ProductAvailability)
})

describe('ProductIdentifier', () => {
  testConstruction(Models.ProductIdentifier)
})

describe('Quantity', () => {
  testConstruction(Models.Quantity)
})

describe('ReferencePrice', () => {
  testConstruction(Models.ReferencePrice)

  it('casts price', () => {
    const p = new Models.ReferencePrice({
      price: {
        amount: 'EUR 1.00'
      }
    })

    expect(p.price.constructor, 'to equal', Models.Price)
  })
})

describe('Scope', () => {
  testConstruction(Models.Scope)
  testLinkCasting(Models.Scope)
})

describe('ShippingAddress', () => {
  testConstruction(Models.ShippingAddress)
})

describe('ShippingDimension', () => {
  testConstruction(Models.ShippingDimension)
})

describe('ShippingLineItem', () => {
  testConstruction(Models.ShippingLineItem)
  testLinkCasting(Models.ShippingLineItem)

  it('casts line item price', () => {
    const sli = new Models.ShippingLineItem({
      lineItemPrice: {}
    })

    expect(sli.lineItemPrice.constructor, 'to equal', Models.Price)
  })

  it('casts embedded shipping method', () => {
    const sli = new Models.ShippingLineItem({
      _embedded: {
        'shipping-method': {}
      }
    })

    expect(sli._embedded.get('shipping-method').constructor, 'to equal', Models.ShippingMethod)
  })
})

describe('ShippingMethod', () => {
  testConstruction(Models.ShippingMethod)
  testLinkCasting(Models.ShippingMethod)

  it('has optional fixed price', () => {
    const sm = new Models.ShippingMethod()

    expect(sm.fixedPrice, 'to equal', null)
  })

  it('casts fixed price', () => {
    const sm = new Models.ShippingMethod({
      fixedPrice: {
        amount: 'EUR 1.00'
      }
    })

    expect(sm.fixedPrice.constructor, 'to equal', Models.Price)
  })

  it('casts weight based price', () => {
    const sm = new Models.ShippingMethod({
      weightBasedPrice: {
        weightPriceThresholds: [
          {
            maxWeight: 10,
            price: {
              amoung: 'EUR 1.00'
            }
          }
        ]
      }
    })

    expect(sm.weightBasedPrice.constructor, 'to equal', Models.WeightBasedPrice)
  })

  it('has optional free shipping value', () => {
    const sm = new Models.ShippingMethod()

    expect(sm.freeShippingValue, 'to equal', null)
  })

  it('casts free shipping value', () => {
    const sm = new Models.ShippingMethod({
      freeShippingValue: {
        amount: 'EUR 1.00'
      }
    })

    expect(sm.freeShippingValue.constructor, 'to equal', Models.SimplePrice)
  })
})

describe('ShippingPeriod', () => {
  testConstruction(Models.ShippingPeriod)
})

describe('ShippingZone', () => {
  testConstruction(Models.ShippingZone)
  testLinkCasting(Models.ShippingZone)

  it('casts shipping methods', () => {
    const s = new Models.ShippingZone({
      shippingMethods: [
        {
          name: 'Shipping zone'
        }
      ]
    })

    expect(s.shippingMethods.get(0).constructor, 'to equal', Models.ShippingMethod)
    expect(s.shippingMethods.get(0).name, 'to equal', 'Shipping zone')
  })
})

describe('Shop', () => {
  testConstruction(Models.Shop)
  testLinkCasting(Models.Shop)

  it('casts address', () => {
    const s = new Models.Shop({
      address: {
        company: 'My Company'
      }
    })

    expect(s.address.constructor, 'to equal', Models.ShopAddress)
    expect(s.address.company, 'to equal', 'My Company')
  })

  it('casts minimum order value', () => {
    const s = new Models.Shop({
      minimumOrderValue: {
      }
    })

    expect(s.minimumOrderValue.constructor, 'to equal', Models.SimplePrice)
  })

  describe('ShopAddress', () => {
    testConstruction(Models.ShopAddress)
  })
})

describe('SimplePrice', () => {
  testConstruction(Models.SimplePrice)

  it('renders formatted', () => {
    const sp1 = new Models.SimplePrice({
      amount: 'EUR 1'
    })

    expect(sp1.formatted, 'to equal', 'EUR 1')

    const sp2 = new Models.SimplePrice({
      amount: 1.5,
      currency: 'USD'
    })

    expect(sp2.formatted, 'to equal', 'USD 1.50')
  })
})

describe('Tax', () => {
  testConstruction(Models.Tax)

  it('renders formatted', () => {
    const p1 = new Models.Tax({
      amount: 'EUR 1'
    })

    expect(p1.formatted, 'to equal', 'EUR 1')

    const p2 = new Models.Tax({
      amount: 1.5,
      currency: 'USD',
      taxClass: 'REGULAR',
      taxRate: 0.19
    })

    expect(p2.formatted, 'to equal', 'USD 1.50')
  })
})

describe('WeightBasedPrice', () => {
  testConstruction(Models.WeightBasedPrice)

  it('casts weight price thresholds', () => {
    const wbp = new Models.WeightBasedPrice({
      weightPriceThresholds: [
        {
          maxWeight: 10,
          price: {
            amoung: 'EUR 1.00'
          }
        },
        {
          maxWeight: 20,
          price: {
            amoung: 'EUR 2.00'
          }
        }
      ]
    })

    expect(wbp.weightPriceThresholds.get(0).constructor, 'to equal', Models.WeightPriceThreshold)
  })

  it('casts unlimited weight price', () => {
    const wbp = new Models.WeightBasedPrice({
      unlimitedWeightPrice: {
        amount: 'EUR 1.00'
      }
    })

    expect(wbp.unlimitedWeightPrice.constructor, 'to equal', Models.Price)
  })

  describe('WeightPriceThreshold', () => {
    testConstruction(Models.WeightPriceThreshold)
  })
})
