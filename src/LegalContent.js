import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const LegalContentRecord = new Record({
  type: null,
  content: null,
  mandatory: false,
  _links: null
})
export default class LegalContent extends LegalContentRecord {
  constructor (image) {
    const immutable = Immutable.fromJS(image || {})
    const parsed = immutable
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
