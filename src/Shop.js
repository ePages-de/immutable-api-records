import extractIdFromSelfLink from './extractIdFromSelfLink'
import Link from './Link'
import SimplePrice from './SimplePrice'
import Immutable, {Map, Record} from 'immutable'

const ShopRecord = new Record({
  _id: null,
  name: null,
  defaultCurrency: null,
  currencies: null,
  defaultShippingCountry: null,
  shippingCountries: null,
  defaultServiceableCountry: null,
  serviceableCountries: null,
  defaultLocale: null,
  locales: null,
  taxModel: null,
  vatExempted: null,
  closedByMerchant: false,
  closedShopMessage: null,
  minimumOrderValue: null,
  resellerName: null,
  _links: null,
  _embedded: new Map()
})
export default class Shop extends ShopRecord {
  constructor (shop) {
    const immutable = Immutable.fromJS(shop || {})
    const parsed = immutable
      .update('_id', (id) => id || extractIdFromSelfLink(immutable))
      .update('minimumOrderValue', (mov) => mov && new SimplePrice(mov))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
