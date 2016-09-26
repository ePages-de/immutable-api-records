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
  listPrice: new Price(),
  taxClass: 'REGULAR',
  manufacturer: '',
  essentialFeatures: '',
  gtins: new List(),
  tags: new List(),
  attributes: new List(),
  stockManaged: false,
  visible: false,
  _links: new Map()
})
export default class Product extends ProductRecord {
  constructor (product = {}) {
    const immutable = Immutable.fromJS(product)
    const parsed = immutable
      .set('_id', extractIdFromSelfLink(immutable))
      .update('salesPrice', (sp) => new Price(sp))
      .update('listPrice', (lp) => new Price(lp))
      .update('attributes', (pas) => pas ? pas.map((pa) => new ProductAttribute(pa)) : new List())
      .update('gtins', (gs) => gs ? gs.map((g) => new Gtin(g)) : new List())
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
