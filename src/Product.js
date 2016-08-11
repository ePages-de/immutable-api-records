import extractIdFromSelfLink from './extractIdFromSelfLink'
import Gtin from './Gtin'
import Link from './Link'
import Price from './Price'
import ProductAttribute from './ProductAttribute'
import Immutable, {List, Map, Record} from 'immutable'

const ProductRecord = new Record({
  _id: '',
  sku: '',
  name: '',
  description: '',
  salesPrice: new Price(),
  taxClass: 'REGULAR',
  manufacturer: '',
  mpn: '',
  essentialFeatures: '',
  tags: new List(),
  attributes: new List(),
  gtin: null,
  stockManaged: false,
  visible: false,
  purchasable: false,
  _links: new Map()
})
export default class Product extends ProductRecord {
  constructor (product = {}) {
    const immutable = Immutable.fromJS(product)
    const parsed = immutable
      .set('_id', extractIdFromSelfLink(immutable))
      .update('salesPrice', (sp) => new Price(sp))
      .update('attributes', (pas) => pas ? pas.map((pa) => new ProductAttribute(pa)) : new List())
      .update('gtin', (g) => g ? new Gtin(g) : null)
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
