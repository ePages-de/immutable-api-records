import {Record} from 'immutable'

const QuantityRecord = new Record({
  value: null,
  unit: null
})
export default class Quantity extends QuantityRecord {
}
