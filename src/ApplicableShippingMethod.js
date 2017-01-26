import Link from './Link'
import Price from './Price'
import ShippingMethod from './ShippingMethod'
import Immutable, {Map, Record} from 'immutable'

const ApplicableShippingMethodRecord = new Record({
  lineItemPrice: null,
  selectable: null,
  _links: null,
  _embedded: new Map()
})
export default class ApplicableShippingMethod extends ApplicableShippingMethodRecord {
  constructor (applicableShippingMethod) {
    const immutable = Immutable.fromJS(applicableShippingMethod || {})
    const parsed = immutable
      .update('lineItemPrice', (lip) => lip && new Price(lip))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())
      .updateIn(['_embedded', 'shipping-method'], (sm) => new ShippingMethod(sm))

    super(parsed)
  }
}
