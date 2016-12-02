import extractIdFromSelfLink from './extractIdFromSelfLink'
import Link from './Link'
import Price from './Price'
import ProductAttribute from './ProductAttribute'
import ProductIdentifier from './ProductIdentifier'
import ReferencePrice from './ReferencePrice'
import ShippingDimension from './ShippingDimension'
import Immutable, {List, Map, Record} from 'immutable'

const ProductRecord = new Record({
  _id: null,
  sku: null,
  name: null,
  description: null,
  salesPrice: null,
  listPrice: null,
  onSale: null,
  refPrice: null,
  taxClass: null,
  manufacturer: null,
  essentialFeatures: null,
  productIdentifiers: null,
  tags: null,
  attributes: null,
  visible: null,
  maxOrderQuantity: null,
  shippingPeriod: null,
  shippingWeight: null,
  shippingDimension: null,
  _links: null
})
export default class Product extends ProductRecord {
  constructor (product) {
    const immutable = Immutable.fromJS(product || {})
    const parsed = immutable
      .set('_id', extractIdFromSelfLink(immutable))
      .update('salesPrice', (sp) => sp && new Price(sp))
      .update('listPrice', (lp) => lp && new Price(lp))
      .update('refPrice', (rp) => rp && new ReferencePrice(rp))
      .update('shippingDimension', (sd) => sd && new ShippingDimension(sd))
      .update('attributes', (pas) => pas ? pas.map((pa) => new ProductAttribute(pa)) : new List())
      .update('productIdentifiers', (pis) => pis ? pis.map((pi) => new ProductIdentifier(pi)) : new List())
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
