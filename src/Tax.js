import {Record} from 'immutable'

const TaxRecord = new Record({
  amount: null,
  currency: null,
  taxClass: null,
  taxRate: null
})
export default class Tax extends TaxRecord {
  get formatted () {
    return typeof this.amount === 'number'
      ? `${this.currency} ${this.amount.toFixed(2)}`
      : this.amount
  }
}
