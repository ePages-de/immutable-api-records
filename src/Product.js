import extractIdFromSelfLink from './extractIdFromSelfLink'
import Link from './Link'
import Price from './Price'
import ProductAttribute from './ProductAttribute'
import ProductIdentifier from './ProductIdentifier'
import ReferencePrice from './ReferencePrice'
import Immutable, {List, Map, Record} from 'immutable'

const ProductRecord = new Record({
  _id: '',
  sku: '',
  name: '',
  description: '',
  salesPrice: new Price(),
  listPrice: null, // new Price()
  onSale: false,
  refPrice: null, // new ReferencePrice()
  taxClass: 'REGULAR',
  manufacturer: '',
  essentialFeatures: '',
  productIdentifiers: new List(),
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
      .update('listPrice', (lp) => lp ? new Price(lp) : null)
      .update('refPrice', (rp) => rp ? new ReferencePrice(rp) : null)
      .update('attributes', (pas) => pas ? pas.map((pa) => new ProductAttribute(pa)) : new List())
      .update('productIdentifiers', (pis) => pis ? pis.map((pi) => new ProductIdentifier(pi)) : new List())
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
