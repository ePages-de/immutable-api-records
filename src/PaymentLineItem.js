import Link from './Link'
import PaymentMethod from './PaymentMethod'
import Price from './Price'
import Immutable, {Map, Record} from 'immutable'

const PaymentLineItemRecord = new Record({
  paymentMethod: null,
  lineItemPrice: null,
  _links: null,
  _embedded: new Map()
})
export default class PaymentLineItem extends PaymentLineItemRecord {
  constructor (paymentLineItem) {
    const immutable = Immutable.fromJS(paymentLineItem || {})
    const parsed = immutable
      .update('lineItemPrice', (lip) => lip && new Price(lip))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())
      .updateIn(['_embedded', 'payment-method'], (pm) => pm && new PaymentMethod(pm))

    super(parsed)
  }
}
