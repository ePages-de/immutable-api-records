import DiscountOrFee from './DiscountOrFee'
import Link from './Link'
import Price from './Price'
import Immutable, {List, Map, Record} from 'immutable'

const PaymentMethodRecord = new Record({
  _id: null,
  position: 0,
  name: '',
  description: '',
  discountOrFee: new DiscountOrFee(),
  serviceableCountries: new List(),
  minimumOrderValue: null,
  activated: false,
  taxClass: null,
  _links: new Map()
})
export default class PaymentMethod extends PaymentMethodRecord {
  constructor (paymentMethod = {}) {
    const immutable = Immutable.fromJS(paymentMethod)
    const parsed = immutable
      .update('discountOrFee', (dof) => dof ? new DiscountOrFee(dof) : null)
      .update('minimumOrderValue', (mov) => mov ? new Price(mov) : null)
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new List())

    super(parsed)
  }
}
