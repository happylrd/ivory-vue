import axios from 'axios'
import { BASE_URL } from './config'

export function getStudent (username) {
  const url = BASE_URL + 'students/' + username

  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}
