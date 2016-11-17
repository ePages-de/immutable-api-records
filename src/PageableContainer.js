import Link from './Link'
import Immutable, {List, Map, Record} from 'immutable'

const PageablePageRecord = new Record({
  number: 0,
  // TODO Size cannot be used, because this throws an invariant error on Immutable.Record.
  // Here it is not really a problem, since this information is redundant in this particular case.
  // (For immutable records size is a read only property indicating, how many fields there are in the record.)
  // size: 0,
  totalPages: 0,
  totalElements: 0
})
export class PageablePage extends PageablePageRecord {
}

const PageableContainerRecord = new Record({
  page: new PageablePage(),
  _embedded: new Map(),
  _links: new Map()
})
export default class PageableContainer extends PageableContainerRecord {
  constructor (pageableContainer, castEmbedded) {
    const immutable = Immutable.fromJS(pageableContainer || {})

    const parsed1 = immutable
      .update('page', (p) => new PageablePage(p))
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new List())

    // for every key in embeddedKey map over the list of embedded items with the provided casting function
    const parsed2 = Object.keys(castEmbedded || {}).reduce((acc, embeddedKey) => {
      return acc.updateIn(['_embedded', embeddedKey], (items) => {
        return items
          ? items.map((item) => castEmbedded[embeddedKey](item))
          : new List()
      })
    }, parsed1)

    super(parsed2)
  }
}
