import Link from './Link'
import Immutable, {List, Map, Record} from 'immutable'

const AttachmentRecord = new Record({
  _id: '',
  label: '',
  length: 0,
  mimeType: '',
  _links: new Map()
})
export default class Attachment extends AttachmentRecord {
  constructor (attachment = {}) {
    const immutable = Immutable.fromJS(attachment)
    const parsed = immutable
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new List())

    super(parsed)
  }
}
