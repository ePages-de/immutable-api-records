import Link from './Link'
import Immutable, {List, Map, Record} from 'immutable'

const CategoryRecord = new Record({
  _id: '',
  name: '',
  type: null,
  query: null, // new Map()
  _links: new Map()
})
export default class Category extends CategoryRecord {
  constructor (category = {}) {
    const immutable = Immutable.fromJS(category)
    const parsed = immutable
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new List())

    super(parsed)
  }
}
