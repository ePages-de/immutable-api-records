import Link from './Link'
import Price from './Price'
import WeightBasedPrice from './WeightBasedPrice'
import Immutable, {Map, Record} from 'immutable'

const ShippingMethodRecord = new Record({
  _id: null,
  position: null,
  name: null,
  description: null,
  taxClass: null,
  fixedPrice: null,
  weightBasedPrice: null,
  serviceableCountries: null,
  freeShippingValue: null,
  selectable: false,
  _links: null,
  _embedded: new Map()
})
export default class ShippingMethod extends ShippingMethodRecord {
  constructor (shippingMethod) {
    const immutable = Immutable.fromJS(shippingMethod || {})
    const parsed = immutable
      .update('fixedPrice', (fp) => fp ? new Price(fp) : null)
      .update('weightBasedPrice', (wbp) => wbp ? new WeightBasedPrice(wbp) : null)
      .update('freeShippingValue', (fsv) => fsv ? new Price(fsv) : null)
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
