import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const ImageRecord = new Record({
  _id: '',
  _links: new Map()
})
export default class Image extends ImageRecord {
  constructor (result) {
    const immutable = new ImageRecord(Immutable.fromJS(result))
    const parsed = immutable
      .update('_links', (ls) => ls.map((l) => new Link(l)))

    super(parsed)
  }
}
