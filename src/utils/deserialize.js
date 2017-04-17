import { getJSON } from 'redux-api-middleware'
import normalize from 'jsonapi-normalizer'
import humps from 'humps'

export default function (json) {
  return getJSON(json).then((data) => {
    let normalized = null
    let meta = null

    if (data) {
      var humped = humps.camelizeKeys(data)
      meta = humped.meta

      normalized = normalize(humped)
    }

    return { ...normalized, meta }
  })
}
