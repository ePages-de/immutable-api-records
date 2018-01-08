import Link from './Link'
import Immutable, {List, Map, Record} from 'immutable'

const LineItemShippingRecord = new Record({
  quantity: null,
  productLineItemId: null
})
export class LineItemShipping extends LineItemShippingRecord {
}

const ShippingProcessRecord = new Record({
  _id: null,
  status: null,
  trackingCode: null,
  trackingLink: null,
  lineItems: new List(),
  _links: null,
  _embedded: new Map()
})
export default class ShippingProcess extends ShippingProcessRecord {
  constructor (shippingProcess) {
    const immutable = Immutable.fromJS(shippingProcess || {})
    const parsed = immutable
      .update('lineItems', (li) => li ? li.map((l) => new LineItemShipping(l)) : new List())
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
