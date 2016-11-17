import extractIdFromSelfLink from './extractIdFromSelfLink'
import Link from './Link'
import Immutable, {List, Map, Record} from 'immutable'

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
  _id: '',
  name: '',
  address: new ShopAddress(),
  defaultCurrency: null,
  currencies: new List(),
  defaultShippingCountry: null,
  shippingCountries: new List(),
  defaultServiceableCountry: null,
  serviceableCountries: new List(),
  defaultLocale: null,
  locales: new List(),
  taxModel: null,
  vatExempted: null,
  closedByMerchant: false,
  closedShopMessage: null,
  // TODO
  // minimumOrderValue: ???
  _links: new Map()
})
export default class Shop extends ShopRecord {
  constructor (shop) {
    const immutable = Immutable.fromJS(shop || {})
    const parsed = immutable
      .set('_id', extractIdFromSelfLink(immutable))
      .update('address', (a) => new ShopAddress(a))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
