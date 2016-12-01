import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const CategoryRecord = new Record({
  _id: null,
  name: null,
  type: null,
  query: null,
  _links: null
})
export default class Category extends CategoryRecord {
  constructor (category) {
    const immutable = Immutable.fromJS(category || {})
    const parsed = immutable
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
