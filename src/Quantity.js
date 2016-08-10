import {Record} from 'immutable'

const QuantityRecord = new Record({
  value: 0,
  unit: 'PIECE'
})
export default class Quantity extends QuantityRecord {
}
