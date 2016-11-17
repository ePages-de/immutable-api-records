import extractIdFromSelfLink from './extractIdFromSelfLink'
import Link from './Link'
import Immutable, {Map, Record} from 'immutable'

const ProductAttributeDefinitionRecord = new Record({
  _id: '',
  namespace: '',
  name: '',
  type: 'STRING',
  displayName: '',
  _links: new Map()
})
export default class ProductAttributeDefinition extends ProductAttributeDefinitionRecord {
  constructor (productAttributeDefinition) {
    const immutable = Immutable.fromJS(productAttributeDefinition || {})
    const parsed = immutable
      .set('_id', extractIdFromSelfLink(immutable))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }

  get fullName () {
    return `${this.namespace}:${this.name}`
  }
}
