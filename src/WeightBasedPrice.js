import Price from './Price'
import Immutable, {Record, List} from 'immutable'

const WeightPriceThresholdRecord = new Record({
  maxWeight: 0,
  price: new Price()
})
export class WeightPriceThreshold extends WeightPriceThresholdRecord {
  constructor (weightPriceThreshold = {}) {
    const immutable = Immutable.fromJS(weightPriceThreshold)
    const parsed = immutable
      .update('price', (p) => p ? new Price(p) : null)

    super(parsed)
  }
}

const WeightBasedPriceRecord = new Record({
  weightPriceThresholds: new List(),
  unlimitedWeightPrice: null
})
export default class WeightBasedPrice extends WeightBasedPriceRecord {
  constructor (weightBasedPrice = {}) {
    const immutable = Immutable.fromJS(weightBasedPrice)
    const parsed = immutable
      .update('weightPriceThresholds', (wbts) => wbts ? wbts.map((wbt) => new WeightPriceThreshold(wbt)) : new List())
      .update('unlimitedWeightPrice', (uwp) => uwp ? new Price(uwp) : null)

    super(parsed)
  }
}
