import Price from './Price'
import Immutable, {Record, List} from 'immutable'

const WeightPriceThresholdRecord = new Record({
  maxWeight: null,
  price: null
})
export class WeightPriceThreshold extends WeightPriceThresholdRecord {
  constructor (weightPriceThreshold) {
    const immutable = Immutable.fromJS(weightPriceThreshold || {})
    const parsed = immutable
      .update('price', (p) => p && new Price(p))

    super(parsed)
  }
}

const WeightBasedPriceRecord = new Record({
  weightPriceThresholds: new List(),
  unlimitedWeightPrice: null
})
export default class WeightBasedPrice extends WeightBasedPriceRecord {
  constructor (weightBasedPrice) {
    const immutable = Immutable.fromJS(weightBasedPrice || {})
    const parsed = immutable
      .update('weightPriceThresholds', (wbts) => wbts ? wbts.map((wbt) => new WeightPriceThreshold(wbt)) : new List())
      .update('unlimitedWeightPrice', (uwp) => uwp && new Price(uwp))

    super(parsed)
  }
}
