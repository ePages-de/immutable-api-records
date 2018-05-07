import {Record} from 'immutable'

const ProductAvailabilityRecord = new Record({
  availableStock: null,
  stockThreshold: null,
  availabilityState: null,
  purchasability: null
})
export default class ProductAvailability extends ProductAvailabilityRecord {
}
