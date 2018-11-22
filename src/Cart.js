import BillingAddress from './BillingAddress'
import Link from './Link'
import PaymentLineItem from './PaymentLineItem'
import Price from './Price'
import Product from './Product'
import ShippingAddress from './ShippingAddress'
import ShippingLineItem from './ShippingLineItem'
import Immutable, {List, Map, Record} from 'immutable'

const CheckoutStateRecord = new Record({
  billingAddressSet: null,
  paymentMethodSelectable: null,
  paymentMethodValid: null,
  priceValidToOrder: null,
  readyToOrder: null,
  shippingMethodSelectable: null,
  shippingMethodValid: null
})
export class CheckoutState extends CheckoutStateRecord {
}

// Currently there are only products in the line items
const ProductLineItemRecord = new Record({
  _type: null,
  _id: null,
  _ref: null,
  name: null,
  description: null,
  quantityInt: null,
  singleItemPrice: null,
  lineItemPrice: null,
  _links: null,
  _embedded: new Map()
})
export class ProductLineItem extends ProductLineItemRecord {
  constructor (cart) {
    const immutable = Immutable.fromJS(cart || {})
    const parsed = immutable
      .update('singleItemPrice', (sip) => sip && new Price(sip))
      .update('lineItemPrice', (lip) => lip && new Price(lip))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())
      .updateIn(['_embedded', 'product'], (p) => p && new Product(p))

    super(parsed)
  }
}

const CartRecord = new Record({
  _id: null,
  lineItems: null,
  shippingLineItem: null,
  paymentLineItem: null,
  billingAddress: null,
  shippingAddress: null,
  grandTotal: null,
  netTotal: null,
  taxTotal: null,
  taxable: null,
  checkoutState: null,
  _links: null,
  _embedded: new Map()
})
export default class Cart extends CartRecord {
  constructor (cart) {
    const immutable = Immutable.fromJS(cart || {})
    const parsed = immutable
      .update('lineItems', (lis) => lis ? lis.map((li) => new ProductLineItem(li)) : new List())
      .update('shippingLineItem', (sli) => sli && new ShippingLineItem(sli))
      .update('paymentLineItem', (pli) => pli && new PaymentLineItem(pli))
      .update('billingAddress', (ba) => ba && new BillingAddress(ba))
      .update('shippingAddress', (sa) => sa && new ShippingAddress(sa))
      .update('grandTotal', (gt) => gt && new Price(gt))
      .update('netTotal', (nt) => nt && new Price(nt))
      .update('taxTotal', (tt) => tt && new Price(tt))
      .update('checkoutState', (cs) => cs && new CheckoutState(cs))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
