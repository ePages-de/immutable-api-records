import {Record} from 'immutable'
import urlTemplate from 'url-template'

const LinkRecord = new Record({
  href: null,
  rel: null,
  templated: false
})
export default class Link extends LinkRecord {
  format (options) {
    return this.templated
      ? urlTemplate.parse(this.href).expand(options)
      : this.href
  }
}
