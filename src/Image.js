import Link from './Link'
import Immutable, {List, Map, Record} from 'immutable'

const ImageRecord = new Record({
  _id: '',
  label: '',
  _links: new Map()
})
export default class Image extends ImageRecord {
  constructor (image) {
    const immutable = Immutable.fromJS(image || {})
    const parsed = immutable
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new List())

    super(parsed)
  }
}
