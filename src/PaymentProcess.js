import Link from './Link'
import SimplePrice from './SimplePrice'
import Immutable, {Map, Record} from 'immutable'

const PaymentProcessRecord = new Record({
  _id: null,
  status: null,
  amount: null,
  _links: null,
  _embedded: new Map()
})
export default class PaymentProcess extends PaymentProcessRecord {
  constructor (paymentProcess) {
    const immutable = Immutable.fromJS(paymentProcess || {})
    const parsed = immutable
      .update('amount', (a) => a && new SimplePrice(a))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
