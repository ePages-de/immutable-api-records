import Link from './Link'
import PaymentMethod from './PaymentMethod'
import Price from './Price'
import Immutable, {Map, Record} from 'immutable'

const ApplicablePaymentMethodRecord = new Record({
  lineItemPrice: null,
  selectable: null,
  _links: null,
  _embedded: new Map()
})
export default class ApplicablePaymentMethod extends ApplicablePaymentMethodRecord {
  constructor (applicablePaymentMethod) {
    const immutable = Immutable.fromJS(applicablePaymentMethod || {})
    const parsed = immutable
      .update('lineItemPrice', (lip) => lip && new Price(lip))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())
      .updateIn(['_embedded', 'payment-method'], (pm) => new PaymentMethod(pm))

    super(parsed)
  }
}
