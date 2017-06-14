import axios from 'axios'
import { BASE_URL } from './config'
import querystring from 'querystring'

export function saveStudentCourse (studentId, courseId) {
  const url = BASE_URL + 'studentcourses'

  console.log(studentId)
  console.log(courseId)
  return axios.post(url, querystring.stringify({
    student: studentId,
    course: courseId
  }))
    .then(res => {
      console.log(res.data)
      return Promise.resolve(res.data)
    })
}
