import {Record} from 'immutable'

const ShippingPeriodRecord = new Record({
  minDays: null,
  maxDays: null,
  displayUnit: null
})
export default class ShippingPeriod extends ShippingPeriodRecord {
}
