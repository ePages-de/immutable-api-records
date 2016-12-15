import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const ProductAttributeRecord = new Record({
  namespace: null,
  name: null,
  type: null,
  locale: null,
  value: null,
  _links: null,
  _embedded: new Map()
})
export default class ProductAttribute extends ProductAttributeRecord {
  constructor (productAttribute) {
    const immutable = Immutable.fromJS(productAttribute || {})
    const parsed = immutable
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }

  get fullName () {
    return `${this.namespace}:${this.name}`
  }
}
