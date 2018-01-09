import BillingAddress from './BillingAddress'
import extractIdFromSelfLink from './extractIdFromSelfLink'
import Link from './Link'
import PaymentLineItem from './PaymentLineItem'
import Price from './Price'
import Product from './Product'
import Quantity from './Quantity'
import ShippingAddress from './ShippingAddress'
import ShippingLineItem from './ShippingLineItem'
import Tax from './Tax'
import Immutable, {List, Map, Record} from 'immutable'
import SimplePrice from './SimplePrice';

const LineItemStatusRecord = new Record({
  amount: null,
  quantity: null
})
export class LineItemStatus extends LineItemStatusRecord {
}

const ProductLineItemRecord = new Record({
  _id: null,
  product: null,
  quantity: null,
  lineItemPrice: null,
  lineItemTax: null,
  unitPrice: null,
  unshipped: null,
  _links: null,
  _embedded: new Map()
})
export class ProductLineItem extends ProductLineItemRecord {
  constructor (cart) {
    const immutable = Immutable.fromJS(cart || {})
    const parsed = immutable
      .update('product', (p) => p && new Product(p))
      .update('quantity', (q) => q && new Quantity(q))
      .update('lineItemPrice', (lip) => lip && new Price(lip))
      .update('lineItemTax', (lit) => lit && new Tax(lit))
      .update('unitPrice', (up) => up && new Price(up))
      .update('unshipped', (u) => u && new LineItemStatus(u))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}

const OrderRecord = new Record({
  _id: null,
  cartId: null,
  currency: null,
  taxModel: null,
  taxable: null,
  orderNumber: null,
  productLineItems: null,
  shippingLineItem: null,
  paymentLineItem: null,
  grandTotal: null,
  netTotal: null,
  taxTotal: null,
  balanceDue: null,
  taxes: null,
  billingAddress: null,
  shippingAddress: null,
  orderStatus: null,
  paymentStatus: null,
  fulfillmentStatus: null,
  customerComment: null,
  createdAt: null,
  openAmount: null,
  // legalContent
  _links: null,
  _embedded: new Map()
})
export default class Order extends OrderRecord {
  constructor (order) {
    const immutable = Immutable.fromJS(order || {})
    const parsed = immutable
      .update('_id', (id) => id || extractIdFromSelfLink(immutable))
      .update('productLineItems', (lis) => lis ? lis.map((li) => new ProductLineItem(li)) : new List())
      .update('shippingLineItem', (sli) => sli && new ShippingLineItem(sli))
      .update('paymentLineItem', (pli) => pli && new PaymentLineItem(pli))
      .update('billingAddress', (ba) => ba && new BillingAddress(ba))
      .update('shippingAddress', (sa) => sa && new ShippingAddress(sa))
      .update('grandTotal', (gt) => gt && new Price(gt))
      .update('netTotal', (nt) => nt && new Price(nt))
      .update('taxTotal', (tt) => tt && new Price(tt))
      .update('balanceDue', (bd) => bd && new Price(bd))
      .update('openAmount', (oa) => oa && new SimplePrice(oa))
      .update('taxes', (ts) => ts && ts.map((t) => new Tax(t)))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
