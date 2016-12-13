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
  name: null,
  description: null,
  details: null,
  quantity: null,
  singleItemPrice: null,
  lineItemPrice: null,
  _links: null
})
export class ProductLineItem extends ProductLineItemRecord {
  constructor (cart) {
    const immutable = Immutable.fromJS(cart || {})
    const parsed = immutable
      .update('details', (d) => d && new Product(d))
      .update('quantity', (q) => q && new Quantity(q))
      .update('singleItemPrice', (sip) => sip && new Price(sip))
      .update('lineItemPrice', (lip) => lip && new Price(lip))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}

const ShippingLineItemRecord = new Record({
  shippingMethod: null,
  lineItemPrice: null
})
export class ShippingLineItem extends ShippingLineItemRecord {
  constructor (shippingLineItem) {
    const immutable = Immutable.fromJS(shippingLineItem || {})
    const parsed = immutable
      .update('shippingMethod', (sm) => sm && new ShippingMethod(sm))
      .update('lineItemPrice', (lip) => lip && new Price(lip))

    super(parsed)
  }
}

const PaymentLineItemRecord = new Record({
  paymentMethod: null,
  lineItemPrice: null
})
export class PaymentLineItem extends PaymentLineItemRecord {
  constructor (paymentLineItem) {
    const immutable = Immutable.fromJS(paymentLineItem || {})
    const parsed = immutable
      .update('paymentMethod', (pm) => pm && new PaymentMethod(pm))
      .update('lineItemPrice', (lip) => lip && new Price(lip))

    super(parsed)
  }
}

const CartRecord = new Record({
  _id: null,
  lineItems: null,
  shippingLineItem: null,
  paymentLineItem: null,
  grandTotal: null,
  netTotal: null,
  taxTotal: null,
  taxable: null,
  _links: null
})
export default class Cart extends CartRecord {
  constructor (cart) {
    const immutable = Immutable.fromJS(cart || {})
    const parsed = immutable
      .update('lineItems', (lis) => lis ? lis.map((li) => new ProductLineItem(li)) : new List())
      .update('shippingLineItem', (sli) => sli && new ShippingLineItem(sli))
      .update('paymentLineItem', (pli) => pli && new PaymentLineItem(pli))
      .update('grandTotal', (gt) => gt && new Price(gt))
      .update('netTotal', (nt) => nt && new Price(nt))
      .update('taxTotal', (tt) => tt && new Price(tt))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
