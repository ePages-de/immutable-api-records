export default function extractIdFromSelfLink (item) {
  const selfHref = item.getIn(['_links', 'self', 'href'])

  const matchedGuid =
    selfHref &&
    selfHref.match(
      /([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/
    );

  return matchedGuid ? matchedGuid[1] : null;
}
