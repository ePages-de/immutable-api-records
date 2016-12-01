import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const AttachmentRecord = new Record({
  _id: null,
  label: null,
  length: null,
  mimeType: null,
  _links: null
})
export default class Attachment extends AttachmentRecord {
  constructor (attachment) {
    const immutable = Immutable.fromJS(attachment || {})
    const parsed = immutable
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
