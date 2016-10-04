import Link from './Link'
import Price from './Price'
import Immutable, {List, Record} from 'immutable'

const ShippingMethodRecord = new Record({
  _id: null,
  position: 0,
  name: '',
  description: '',
  taxClass: 'REGULAR',
  fixedPrice: null,
  // TODO not yet typed
  weightBasedPrice: null,
  serviceableCountries: new List(),
  freeShippingValue: null,
  _links: new Map()
})
export default class ShippingMethod extends ShippingMethodRecord {
  constructor (shippingMethod = {}) {
    const immutable = Immutable.fromJS(shippingMethod)
    const parsed = immutable
      .update('fixedPrice', (fp) => fp ? new Price(fp) : null)
      .update('freeShippingValue', (fsv) => fsv ? new Price(fsv) : null)
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new List())

    super(parsed)
  }
}
