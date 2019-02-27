import extractIdFromSelfLink from './extractIdFromSelfLink'
import Link from './Link'
import Price from './Price'
import ProductAttribute from './ProductAttribute'
import ProductAvailability from './ProductAvailability'
import ProductIdentifier from './ProductIdentifier'
import ReferencePrice from './ReferencePrice'
import ShippingDimension from './ShippingDimension'
import ShippingPeriod from './ShippingPeriod'
import Immutable, { List, Map, Record } from 'immutable'

const ProductRecord = new Record({
  _id: null,
  sku: null,
  name: null,
  description: null,
  salesPrice: null,
  listPrice: null,
  onSale: null,
  manufacturerPrice: null,
  refPrice: null,
  taxClass: null,
  manufacturer: null,
  essentialFeatures: null,
  productIdentifiers: null,
  tags: null,
  attributes: null,
  variationAttributes: undefined,
  variationAttributeValues: undefined,
  variationMaster: undefined,
  visible: null,
  maxOrderQuantity: null,
  shippingPeriod: null,
  shippingWeight: null,
  shippingDimension: null,
  listPriceText: null,
  _links: null,
  _embedded: new Map()
})
export default class Product extends ProductRecord {
  constructor(product) {
    const immutable = Immutable.fromJS(product || {})
    const parsed = immutable
      .update('_id', (id) => id || extractIdFromSelfLink(immutable))
      .update('salesPrice', (sp) => sp && new Price(sp))
      .update('listPrice', (lp) => lp && new Price(lp))
      .update('manufacturerPrice', (mp) => mp && new Price(mp))
      .update('variationMaster', (vm) => vm && new Product(vm))
      .update('refPrice', (rp) => rp && new ReferencePrice(rp))
      .update('shippingPeriod', (sp) => sp && new ShippingPeriod(sp))
      .update('shippingDimension', (sd) => sd && new ShippingDimension(sd))
      .update('attributes', (pas) => pas ? pas.map((pa) => new ProductAttribute(pa)) : new List())
      .update('productIdentifiers', (pis) => pis ? pis.map((pi) => new ProductIdentifier(pi)) : new List())
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())
      .updateIn(['_embedded', 'availability'], (a) => a && new ProductAvailability(a))

    super(parsed)
  }
}
