import extractIdFromSelfLink from './extractIdFromSelfLink'
import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const ProductAttributeDefinitionRecord = new Record({
  _id: null,
  namespace: null,
  name: null,
  type: null,
  displayName: null,
  _links: null,
  _embedded: new Map()
})
export default class ProductAttributeDefinition extends ProductAttributeDefinitionRecord {
  constructor (productAttributeDefinition) {
    const immutable = Immutable.fromJS(productAttributeDefinition || {})
    const parsed = immutable
      .update('_id', (id) => id || extractIdFromSelfLink(immutable))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }

  get fullName () {
    return `${this.namespace}:${this.name}`
  }
}
