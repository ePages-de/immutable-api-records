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

describe('Attachment', () => {
  testConstruction(Models.Attachment)
  testLinkCasting(Models.Attachment)
})

describe('Cart', () => {
  testConstruction(Models.Cart)
  testLinkCasting(Models.Cart)

  describe('PaymentLineItem', () => {
    testConstruction(Models.PaymentLineItem)
  })

  describe('ProductLineItem', () => {
    testConstruction(Models.ProductLineItem)
    testLinkCasting(Models.ProductLineItem)
  })

  describe('ShippingLineItem', () => {
    testConstruction(Models.ShippingLineItem)
  })

  it('casts line items', () => {
    const p = new Models.Cart({
      lineItems: [
        {
        }
      ]
    })

    expect(p.lineItems.get(0).constructor, 'to equal', Models.ProductLineItem)
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

    expect(pc._embedded.get('products').get(0).constructor, 'to equal', Models.Product)
    expect(pc._embedded.get('prices').get(0).constructor, 'to equal', Models.Price)
  })

  describe('PageablePage', () => {
    testConstruction(Models.PageablePage)
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

    expect(pm.minimumOrderValue.constructor, 'to equal', Models.Price)
  })
})

describe('Price', () => {
  testConstruction(Models.Price)

  it('renders formatted', () => {
    const p1 = new Models.Price({
      amount: 'EUR 1.00'
    })

    expect(p1.formatted, 'to equal', 'EUR 1.00')

    // TODO reenable as soon as changed in backend
    // const p2 = new Models.Price({
    //   amount: 1.5,
    //   currency: 'USD'
    // })
    //
    // expect(p2.formatted, 'to equal', 'USD 1.50')
  })
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

  it('has optional list price', () => {
    const p = new Models.Product({
      listPrice: null
    })

    expect(p.listPrice, 'to equal', null)
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

    expect(sm.freeShippingValue.constructor, 'to equal', Models.Price)
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

  describe('ShopAddress', () => {
    testConstruction(Models.ShopAddress)
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
