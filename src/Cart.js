import Link from './Link'
import PaymentMethod from './PaymentMethod'
import Price from './Price'
import Product from './Product'
import Quantity from './Quantity'
import ShippingMethod from './ShippingMethod'
import Immutable, {List, Map, Record} from 'immutable'

// Currently there are only products in the line items
const ProductLineItemRecord = new Record({
  _type: null,
  _id: null,
  _ref: null,
  name: '',
  description: '',
  details: new Product(),
  quantity: new Quantity(),
  singleItemPrice: new Price(),
  lineItemPrice: new Price(),
  _links: new Map()
})
export class ProductLineItem extends ProductLineItemRecord {
  constructor (cart = {}) {
    const immutable = Immutable.fromJS(cart)
    const parsed = immutable
      .update('details', (d) => new Product(d))
      .update('quantity', (q) => new Quantity(q))
      .update('singleItemPrice', (sip) => new Price(sip))
      .update('lineItemPrice', (lip) => new Price(lip))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new List())

    super(parsed)
  }
}

const ShippingLineItemRecord = new Record({
  shippingMethod: new ShippingMethod(),
  lineItemPrice: new Price()
})
export class ShippingLineItem extends ShippingLineItemRecord {
  constructor (shippingLineItem = {}) {
    const immutable = Immutable.fromJS(shippingLineItem)
    const parsed = immutable
      .update('shippingMethod', (sm) => new ShippingMethod(sm))
      .update('lineItemPrice', (lip) => new Price(lip))

    super(parsed)
  }
}

const PaymentLineItemRecord = new Record({
  paymentMethod: new PaymentMethod({}),
  lineItemPrice: new Price()
})
export class PaymentLineItem extends PaymentLineItemRecord {
  constructor (paymentLineItem = {}) {
    const immutable = Immutable.fromJS(paymentLineItem)
    const parsed = immutable
      .update('paymentMethod', (pm) => new PaymentMethod(pm))
      .update('lineItemPrice', (lip) => new Price(lip))

    super(parsed)
  }
}

const CartRecord = new Record({
  _id: null,
  lineItems: new List(),
  shippingLineItem: new ShippingLineItem(),
  paymentLineItem: new PaymentLineItem(),
  total: new Price(),
  _links: new Map()
})
export default class Cart extends CartRecord {
  constructor (cart = {}) {
    const immutable = Immutable.fromJS(cart)
    const parsed = immutable
      .update('lineItems', (lis) => lis ? lis.map((li) => new ProductLineItem(li)) : new List())
      .update('shippingLineItem', (sli) => new ShippingLineItem(sli))
      .update('paymentLineItem', (pli) => new PaymentLineItem(pli))
      .update('total', (t) => new Price(t))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new List())

    super(parsed)
  }
}
