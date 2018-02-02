import {Record} from 'immutable'

const LineItemsCanceledRecord = new Record({
  quantity: null,
  productLineItemId: null
})
export class LineItemsCanceled extends LineItemsCanceledRecord {
}
