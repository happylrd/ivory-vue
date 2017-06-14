<template>
  <div>
    <mu-appbar title="教务管理系统">
      <mu-icon-button icon="lock" slot="left"/>

      <mu-list slot="right">
        <mu-list-item title="happylrd">
          <mu-avatar slot="right" src="https://happylrd.github.io/img/lrd-avatar.png"/>
        </mu-list-item>
      </mu-list>

      <mu-icon-button icon="menu" slot="right" @click="toggleDrawer()"/>
    </mu-appbar>

    <mu-drawer :open="isDrawerOpen" @close="toggleDrawer()">
      <mu-appbar title="教务管理系统">
      </mu-appbar>

      <mu-list @change="handleMenuChange" :value="menuVal">
        <mu-list-item title="个人管理">
          <mu-icon slot="left" value="drafts"/>
        </mu-list-item>

        <mu-list-item title="选课管理" toggleNested>
          <mu-icon slot="left" value="inbox"/>

          <mu-list-item slot="nested" title="选课公告">
          </mu-list-item>

          <mu-list-item slot="nested" title="选课方案" value="#/course/select">
          </mu-list-item>

          <mu-list-item slot="nested" title="已选课程">
          </mu-list-item>
        </mu-list-item>

        <mu-list-item title="教学评估">
          <mu-icon slot="left" value="grade"/>
        </mu-list-item>
      </mu-list>
    </mu-drawer>

    <mu-row gutter style="margin-top: 16px">
      <mu-col width="100" tablet="50" desktop="20"></mu-col>
      <mu-col width="100" tablet="50" desktop="60">
        <router-view></router-view>
      </mu-col>
      <mu-col width="100" tablet="50" desktop="20"></mu-col>
    </mu-row>
  </div>
</template>

<script>
  import { CURRENT_USER } from '../../common/js/constant'

  export default {
    data () {
      return {
        isDrawerOpen: true,
        menuVal: '#/'
      }
    },
    created () {
      this._checkLogin()
    },
    methods: {
      toggleDrawer () {
        this.isDrawerOpen = !this.isDrawerOpen
      },
      _checkLogin () {
        let user = sessionStorage.getItem(CURRENT_USER)
        if (user) {
          user = JSON.parse(user)
          console.log(user)
        }
      },
      handleMenuChange (val) {
        this.menuVal = val
        window.location.hash = this.menuVal
      }
    }
  }
</script>

<style scoped>
</style>
