import extractIdFromSelfLink from './extractIdFromSelfLink'
import Link from './Link'
import ShippingMethod from './ShippingMethod'
import Immutable, {List, Record} from 'immutable'

const ShippingZoneRecord = new Record({
  _id: null,
  name: null,
  description: null,
  shippingMethods: null,
  _links: null,
  _embedded: new Map()
})
export default class ShippingZone extends ShippingZoneRecord {
  constructor (shippingZone) {
    const immutable = Immutable.fromJS(shippingZone || {})
    const parsed = immutable
      .update('_id', (id) => id || extractIdFromSelfLink(immutable))
      .update('shippingMethods', (sms) => sms ? sms.map((sm) => new ShippingMethod(sm)) : new List())
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new List())

    super(parsed)
  }
}
