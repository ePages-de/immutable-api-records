import extractIdFromSelfLink from './extractIdFromSelfLink'
import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const ShopAddressRecord = new Record({
  company: null,
  lastName: null,
  firstName: null,
  street: null,
  street2: null,
  city: null,
  postalCode: null,
  country: null,
  state: null,
  phone: null,
  fax: null,
  email: null,
  vatId: null,
  commercialRegister: null
})
export class ShopAddress extends ShopAddressRecord {
}

const ShopRecord = new Record({
  _id: null,
  name: null,
  address: null,
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
  // TODO
  // minimumOrderValue: ???
  _links: null,
  _embedded: new Map()
})
export default class Shop extends ShopRecord {
  constructor (shop) {
    const immutable = Immutable.fromJS(shop || {})
    const parsed = immutable
      .update('_id', (id) => id || extractIdFromSelfLink(immutable))
      .update('address', (a) => a && new ShopAddress(a))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
