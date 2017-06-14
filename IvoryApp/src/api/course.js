import axios from 'axios'
import { BASE_URL } from './config'

export function listCourse () {
  const url = BASE_URL + 'courses'

  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}
