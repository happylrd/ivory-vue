<template>
  <div style="margin-top: 160px">
    <mu-row gutter>
      <mu-col width="100" tablet="50" desktop="33"></mu-col>

      <mu-col width="100" tablet="50" desktop="33">
        <mu-paper :zDepth="2" style="padding: 16px;">
          <mu-flexbox orient="vertical" :gutter="16">
            <mu-flexbox-item order="0">
              <mu-text-field v-model="username" label="用户名" labelFloat icon="account_circle" fullWidth/>
            </mu-flexbox-item>

            <mu-flexbox-item order="1">
              <mu-text-field v-model="password" label="密码" labelFloat icon="lock" fullWidth/>
            </mu-flexbox-item>

            <mu-flexbox-item order="2" style="margin-left: 32px">
              <mu-radio label="学生" name="group" nativeValue="student" v-model="roleType"/>
              <mu-radio label="教师" name="group" nativeValue="teacher" v-model="roleType"/>
              <mu-radio label="管理员" name="group" nativeValue="administrator" v-model="roleType"/>
            </mu-flexbox-item>

            <mu-flexbox-item order="3">
              <mu-raised-button @click="doLogin" label="登录" primary fullWidth/>
            </mu-flexbox-item>
          </mu-flexbox>
        </mu-paper>
      </mu-col>

      <mu-col width="100" tablet="50" desktop="33"></mu-col>
    </mu-row>
  </div>
</template>

<script>
  import { getStudent } from '../../api/student'
  import { ERR_OK } from '../../api/config'
  import { CURRENT_USER } from '../../common/js/constant'

  export default {
    data () {
      return {
        username: '',
        password: '',
        roleType: 'student',
        student: null
      }
    },
    methods: {
      doLogin () {
        if (this.roleType === 'student') {
          getStudent(this.username).then(res => {
            if (res.status === ERR_OK) {
              this.student = res.data
              console.log(this.student.password)
              if (this.password === this.student.password) {
                console.log('login success')

                // save to sessionStorage
                sessionStorage.setItem(CURRENT_USER, JSON.stringify(this.student))

                // jump to course view
                this.$router.push({path: '/'})
              } else {
                // password error
              }
            } else {
              // username error
            }
          })
        } else {
          // teacher and administrator logic
        }
      }
    }
  }
</script>

<style scoped>
</style>
