import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const AttachmentRecord = new Record({
  _id: '',
  label: '',
  length: 0,
  mimeType: '',
  _links: new Map()
})
export default class Attachment extends AttachmentRecord {
  constructor (result) {
    const immutable = new AttachmentRecord(Immutable.fromJS(result))
    const parsed = immutable
      .update('_links', (ls) => ls.map((l) => new Link(l)))

    super(parsed)
  }
}
