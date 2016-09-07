import extractIdFromSelfLink from './extractIdFromSelfLink'
import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const ShopRecord = new Record({
  _id: '',
  name: '',
  defaultCurrency: null,
  defaultServiceableCountry: null,
  defaultShippingCountry: null,
  taxModel: null,
  vatExempted: null,
  defaultLocale: null,
  closedByMerchant: false,
  _links: new Map()
})

export default class Shop extends ShopRecord {
  constructor (shop = {}) {
    const immutable = Immutable.fromJS(shop)
    const parsed = immutable
      .set('_id', extractIdFromSelfLink(immutable))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
