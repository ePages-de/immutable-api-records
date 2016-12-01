import Price from './Price'
import Immutable, {Record} from 'immutable'

const DiscountOrFeeRecord = new Record({
  _id: null,
  type: null,
  absoluteValue: null,
  percentageValue: null
})
export default class DiscountOrFee extends DiscountOrFeeRecord {
  constructor (paymentMethod) {
    const immutable = Immutable.fromJS(paymentMethod || {})
    const parsed = immutable
      .update('absoluteValue', (p) => p && new Price(p))

    super(parsed)
  }
}
