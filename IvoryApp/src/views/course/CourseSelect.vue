<template>
  <div>
    <mu-table @rowSelection="tableSelect" multiSelectable enableSelectAll ref="table">
      <mu-thead>
        <mu-tr>
          <mu-th>ID</mu-th>
          <mu-th>课程名</mu-th>
          <mu-th>教师</mu-th>
        </mu-tr>
      </mu-thead>

      <mu-tbody>

        <mu-tr v-for="(item, index) in courses" :key="item.id">
          <mu-td>{{item.id}}</mu-td>
          <mu-td>{{item.name}}</mu-td>
          <mu-td>王老五</mu-td>
        </mu-tr>

      </mu-tbody>
    </mu-table>

    <mu-raised-button @click="selectCourse" label="选择课程" secondary/>
  </div>
</template>

<script>
  import { listCourse } from '../../api/course'
  import { saveStudentCourse } from '../../api/studentcourse'
  import { ERR_OK } from '../../api/config'
  import { CURRENT_USER } from '../../common/js/constant'

  export default {
    data () {
      return {
        courses: [],
        studentcourse: null,
        selectedRows: [],
        user: null
      }
    },
    created () {
      // TODO: checkLogin will be removed later
      this._checkLogin()
      this._listCourse()
    },
    methods: {
      _checkLogin () {
        let user = sessionStorage.getItem(CURRENT_USER)
        if (user) {
          this.user = JSON.parse(user)
        }
      },
      _listCourse () {
        listCourse().then(res => {
          if (res.status === ERR_OK) {
            this.courses = res.data
          }
        })
      },
      selectCourse () {
//        console.log('UserId: ' + this.user.id)
        for (let i = 0; i < this.selectedRows.length; i++) {
          let courseId = this.courses[this.selectedRows[i]].id
          saveStudentCourse(this.user.id, courseId).then(res => {
            if (res.status === ERR_OK) {
              this.studentcourse = res.data
            }
          })
        }
      },
      tableSelect (selectedRows) {
        this.selectedRows = selectedRows
      }
    }
  }
</script>

<style scoped>
</style>
