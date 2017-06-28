import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const ScopeRecord = new Record({
  _id: null,
  name: null,
  _links: null,
  _embedded: new Map()
})
export default class Scope extends ScopeRecord {
  constructor (scope) {
    const immutable = Immutable.fromJS(scope || {})
    const parsed = immutable
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
