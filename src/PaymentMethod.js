import DiscountOrFee from './DiscountOrFee'
import Link from './Link'
import SimplePrice from './SimplePrice'
import Immutable, {Map, Record} from 'immutable'

const PaymentMethodRecord = new Record({
  _id: null,
  position: null,
  name: null,
  description: null,
  discountOrFee: null,
  serviceableCountries: null,
  minimumOrderValue: null,
  activated: null,
  taxClass: null,
  selectable: false,
  _links: null,
  _embedded: new Map()
})
export default class PaymentMethod extends PaymentMethodRecord {
  constructor (paymentMethod) {
    const immutable = Immutable.fromJS(paymentMethod || {})
    const parsed = immutable
      .update('discountOrFee', (dof) => dof ? new DiscountOrFee(dof) : null)
      .update('minimumOrderValue', (mov) => mov ? new SimplePrice(mov) : null)
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
