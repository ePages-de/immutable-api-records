import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const GoogleShoppingAccessDataRecord = new Record({
  _id: null,
  merchantId: null,
  hasAccessToken: null,
  hasRefreshToken: null,
  tokenExpirationDate: null,
  _links: null,
  _embedded: new Map()
})
export default class GoogleShoppingAccessData extends GoogleShoppingAccessDataRecord {
  constructor (category) {
    const immutable = Immutable.fromJS(category || {})
    const parsed = immutable
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
