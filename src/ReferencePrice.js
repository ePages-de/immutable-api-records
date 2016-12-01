import Price from './Price'
import Immutable, {Record} from 'immutable'

const ReferencePriceRecord = new Record({
  refQuantity: null,
  quantity: null,
  unit: null,
  price: null
})
export default class ReferencePrice extends ReferencePriceRecord {
  constructor (referencePrice) {
    const immutable = Immutable.fromJS(referencePrice || {})
    const parsed = immutable
      .update('price', (p) => p && new Price(p))

    super(parsed)
  }
}
