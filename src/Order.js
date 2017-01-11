import BillingAddress from './BillingAddress'
import extractIdFromSelfLink from './extractIdFromSelfLink'
import Link from './Link'
import Price from './Price'
import ShippingAddress from './ShippingAddress'
import Immutable, {List, Map, Record} from 'immutable'
import {PaymentLineItem, ProductLineItem, ShippingLineItem} from './Cart'

const OrderRecord = new Record({
  _id: null,
  cartId: null,
  currency: null,
  taxModel: null,
  taxable: null,
  orderNumber: null,
  orderReceiptPdfUri: null,
  productLineItems: null,
  shippingLineItem: null,
  paymentLineItem: null,
  grandTotal: null,
  netTotal: null,
  taxTotal: null,
  balanceDue: null,
  // taxes
  billingAddress: null,
  shippingAddress: null,
  orderStatus: null,
  paymentStatus: null,
  fulfillmentStatus: null,
  // legalContent
  _links: null,
  _embedded: new Map()
})
export default class Order extends OrderRecord {
  constructor (order) {
    const immutable = Immutable.fromJS(order || {})
    const parsed = immutable
      .set('_id', extractIdFromSelfLink(immutable))
      .update('productLineItems', (lis) => lis ? lis.map((li) => new ProductLineItem(li)) : new List())
      .update('shippingLineItem', (sli) => sli && new ShippingLineItem(sli))
      .update('paymentLineItem', (pli) => pli && new PaymentLineItem(pli))
      .update('billingAddress', (ba) => ba && new BillingAddress(ba))
      .update('shippingAddress', (sa) => sa && new ShippingAddress(sa))
      .update('grandTotal', (gt) => gt && new Price(gt))
      .update('netTotal', (nt) => nt && new Price(nt))
      .update('taxTotal', (tt) => tt && new Price(tt))
      .update('balanceDue', (bd) => bd && new Price(bd))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
