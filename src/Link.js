import {Record} from 'immutable'
import urlTemplate from 'url-template'

const LinkRecord = new Record({
  href: '',
  rel: '',
  templated: false
})
export default class Link extends LinkRecord {
  format (options) {
    return this.templated
      ? urlTemplate.parse(this.href).expand(options)
      : this.href
  }
}
