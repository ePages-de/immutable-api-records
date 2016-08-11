import Price from './Price'
import Immutable, {List, Record} from 'immutable'

const DeliveryOptionRecord = new Record({
  _id: null,
  name: '',
  description: '',
  taxClass: 'REGULAR',
  price: new Price(),
  serviceableCountries: new List()
})
export default class DeliveryOption extends DeliveryOptionRecord {
  constructor (deliveryOption = {}) {
    const immutable = Immutable.fromJS(deliveryOption)
    const parsed = immutable
      .update('price', (p) => new Price(p))

    super(parsed)
  }
}
