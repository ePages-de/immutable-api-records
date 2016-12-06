import {Record} from 'immutable'

const PriceRecord = new Record({
  amount: null,
  currency: null,
  taxModel: null
})
export default class Price extends PriceRecord {
  get formatted () {
    return typeof this.amount === 'number'
      ? `${this.currency} ${this.amount.toFixed(2)}`
      : this.amount
  }
}
