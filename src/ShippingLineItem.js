import Link from './Link'
import Price from './Price'
import ShippingMethod from './ShippingMethod'
import Immutable, {Map, Record} from 'immutable'

const ShippingLineItemRecord = new Record({
  shippingMethod: null,
  lineItemPrice: null,
  _links: null,
  _embedded: new Map()
})
export default class ShippingLineItem extends ShippingLineItemRecord {
  constructor (shippingLineItem) {
    const immutable = Immutable.fromJS(shippingLineItem || {})
    const parsed = immutable
      .update('lineItemPrice', (lip) => lip && new Price(lip))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())
      .updateIn(['_embedded', 'shipping-method'], (sm) => sm && new ShippingMethod(sm))

    super(parsed)
  }
}
