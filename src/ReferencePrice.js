import Price from './Price'
import Immutable, {Record} from 'immutable'

const ReferencePriceRecord = new Record({
  refQuantity: 0,
  quantity: 0,
  unit: null,
  price: null // new Price()
})
export default class ReferencePrice extends ReferencePriceRecord {
  constructor (referencePrice = {}) {
    const immutable = Immutable.fromJS(referencePrice)
    const parsed = immutable
      .update('price', (p) => p ? new Price(p) : null)

    super(parsed)
  }
}
