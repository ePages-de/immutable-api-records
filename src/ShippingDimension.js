import {Record} from 'immutable'

const ShippingDimensionRecord = new Record({
  length: null,
  width: null,
  height: null
})
export default class ShippingDimension extends ShippingDimensionRecord {
}
