import {Record} from 'immutable'

const BillingAddressRecord = new Record({
  salutation: null,
  gender: null,
  company: null,
  title: null,
  firstName: null,
  middleName: null,
  lastName: null,
  street: null,
  houseNumber: null,
  street2: null,
  addressExtension: null,
  postalCode: null,
  city: null,
  country: null,
  state: null,
  email: null,
  phone: null,
  mobile: null,
  vatId: null,
  taxNumber: null,
  birthDate: null,
  displayAddressLines: null
})
export default class BillingAddress extends BillingAddressRecord {
}
