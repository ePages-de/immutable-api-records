export default function extractIdFromSelfLink (item) {
  const selfHref = item.getIn(['_links', 'self', 'href'])

  return selfHref ? selfHref.match(/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/)[1] : null
}
