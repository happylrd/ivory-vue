import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/Login'
import Home from '../views/home/Home'
import CourseSelect from '../views/course/CourseSelect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/course/select',
          component: CourseSelect
        }
      ]
    }
  ]
})
