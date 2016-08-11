import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const ProductAttributeRecord = new Record({
  namespace: '',
  name: '',
  type: 'STRING',
  locale: 'en_US',
  value: '',
  _links: new Map()
})
export default class ProductAttribute extends ProductAttributeRecord {
  constructor (productAttribute = {}) {
    const immutable = Immutable.fromJS(productAttribute)
    const parsed = immutable
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }

  get fullName () {
    return `${this.namespace}:${this.name}`
  }
}
