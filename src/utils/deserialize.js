import { getJSON } from 'redux-api-middleware'
import normalize from 'jsonapi-normalizer'
import humps from 'humps'

export default function (json) {
  return getJSON(json).then((data) => {
    var humped = humps.camelizeKeys(data)
    const meta = humped.meta

    const normalized = normalize(humped)

    return { ...normalized, meta }
  })
}
