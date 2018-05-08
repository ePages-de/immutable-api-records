import {Record} from 'immutable'

const ProductAvailabilityRecord = new Record({
  availableStock: null,
  stockThreshold: null,
  availabilityState: null,
  purchasable: null
})
export default class ProductAvailability extends ProductAvailabilityRecord {
}
