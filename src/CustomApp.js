import Link from './Link'
import Immutable, {Map, Record, List} from 'immutable'

const CustomAppRecord = new Record({
  _id: null,
  name: null,
  clientId: null,
  clientSecret: null,
  callbackUrl: null,
  scopes: new List(),
  _links: null,
  _embedded: new Map()
})
export default class CustomApp extends CustomAppRecord {
  constructor (customApp) {
    const immutable = Immutable.fromJS(customApp || {})
    const parsed = immutable
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
