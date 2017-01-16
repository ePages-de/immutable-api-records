import {Record} from 'immutable'

const OrderStatusLogEntryRecord = new Record({
  status: null,
  statusType: null,
  comment: null,
  user: null,
  createdAt: null
})
export default class OrderStatusLogEntry extends OrderStatusLogEntryRecord {
}
