import Price from './Price'
import Immutable, {List, Record} from 'immutable'

const PaymentMethodRecord = new Record({
  _id: null,
  name: '',
  description: '',
  taxClass: 'REGULAR',
  price: new Price(),
  serviceableCountries: new List()
})
export default class PaymentMethod extends PaymentMethodRecord {
  constructor (paymentMethod = {}) {
    const immutable = Immutable.fromJS(paymentMethod)
    const parsed = immutable
      .update('price', (p) => new Price(p))

    super(parsed)
  }
}
