import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const ImageRecord = new Record({
  _id: null,
  label: null,
  _links: null
})
export default class Image extends ImageRecord {
  constructor (image) {
    const immutable = Immutable.fromJS(image || {})
    const parsed = immutable
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
