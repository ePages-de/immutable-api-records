import {Record} from 'immutable'

const SimplePriceRecord = new Record({
  amount: null,
  currency: null
})
export default class SimplePrice extends SimplePriceRecord {
  get formatted () {
    return typeof this.amount === 'number'
      ? `${this.currency} ${this.amount.toFixed(2)}`
      : this.amount
  }
}
