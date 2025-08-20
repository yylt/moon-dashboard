import fetchJsonp from 'fetch-jsonp'
import { objToQuery } from '../request'

function target(wd: string) {
  return `https://www.yylt.gq/search?q=${encodeURIComponent(wd)}`
}

function complete(wd: string, callback: Function) {
  const query = objToQuery({ wd })
  fetchJsonp(`http://suggestion.baidu.com/su?${query}`, {
    jsonpCallback: 'cb',
  })
    .then(res => res.json())
    .then((data) => {
      callback({
        eng: 'xiaowa',
        wd: data.q,
        list: data.s || [],
      })
    })
    .catch(error => console.error(error))
}

export default {
  target,
  complete,
}
