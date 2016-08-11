import DeliveryOption from './DeliveryOption'
import Link from './Link'
import PaymentMethod from './PaymentMethod'
import Price from './Price'
import Product from './Product'
import Quantity from './Quantity'
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

const DeliveryLineItemRecord = new Record({
  deliveryOption: new DeliveryOption({}),
  lineItemPrice: new Price()
})
export class DeliveryLineItem extends DeliveryLineItemRecord {
  constructor (deliveryLineItem = {}) {
    const immutable = Immutable.fromJS(deliveryLineItem)
    const parsed = immutable
      .update('deliveryOption', (pm) => new DeliveryOption(pm))
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
  deliveryLineItem: new DeliveryLineItem(),
  paymentLineItem: new PaymentLineItem(),
  total: new Price(),
  _links: new Map()
})
export default class Cart extends CartRecord {
  constructor (cart = {}) {
    const immutable = Immutable.fromJS(cart)
    const parsed = immutable
      .update('lineItems', (lis) => lis ? lis.map((li) => new ProductLineItem(li)) : new List())
      .update('deliveryLineItem', (dli) => new DeliveryLineItem(dli))
      .update('paymentLineItem', (pli) => new PaymentLineItem(pli))
      .update('total', (t) => new Price(t))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new List())

    super(parsed)
  }
}
