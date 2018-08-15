import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const PrivateAppRecord = new Record({
  _id: null,
  name: null,
  clientId: null,
  clientSecret: null,
  callbackUrl: null,
  _links: null,
  _embedded: new Map()
})
export default class PrivateApp extends PrivateAppRecord {
  constructor (privateApp) {
    const immutable = Immutable.fromJS(privateApp || {})
    const parsed = immutable
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
