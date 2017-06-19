import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const OfficialAppRecord = new Record({
  _id: null,
  clientId: null,
  callbackURL: null,
  namesOfRequiredScopes: null,
  _links: null,
  _embedded: new Map()
})
export default class OfficialApp extends OfficialAppRecord {
  constructor (officialApp) {
    const immutable = Immutable.fromJS(officialApp || {})
    const parsed = immutable
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
