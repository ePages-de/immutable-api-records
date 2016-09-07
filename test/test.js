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

  describe('DeliveryLineItem', () => {
    testConstruction(Models.DeliveryLineItem)
  })

  describe('PaymentLineItem', () => {
    testConstruction(Models.PaymentLineItem)
  })

  describe('ProductLineItem', () => {
    testConstruction(Models.ProductLineItem)
    testLinkCasting(Models.ProductLineItem)
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

describe('DeliveryOption', () => {
  testConstruction(Models.DeliveryOption)
})

describe('Gtin', () => {
  testConstruction(Models.Gtin)
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
})

describe('Price', () => {
  testConstruction(Models.Price)

  it('renders formatted', () => {
    const p1 = new Models.Price({
      amount: 'EUR 1.00'
    })

    expect(p1.formatted, 'to equal', 'EUR 1.00')

    const p2 = new Models.Price({
      amount: 1.5,
      currency: 'USD'
    })

    expect(p2.formatted, 'to equal', 'USD 1.50')
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

  it('casts gtin', () => {
    const p = new Models.Product({
      gtin: {
        type: 'ISBN',
        value: '12345'
      }
    })

    expect(p.gtin.constructor, 'to equal', Models.Gtin)
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

describe('Quantity', () => {
  testConstruction(Models.Quantity)
})

describe('Shop', () => {
  testConstruction(Models.Shop)
  testLinkCasting(Models.Shop)
})
