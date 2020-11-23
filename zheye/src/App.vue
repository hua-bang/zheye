<template>
  <div class="container">
    <global-header :user="currentUser" />
    <form action="">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
          <input
          type="email" class="form-control" id="exampleInputEmail1"
          v-model="emailRef.val"
          @blur="validateEmail"
          />
          <div class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">密码</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
const currentUser: UserProps = {
  isLogin: true,
  name: 'hug'
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'vue专栏',
    description: '这是vue专栏的描述信息'
  },
  {
    id: 2,
    title: 'react专栏',
    description: '这是react专栏的描述信息',
    avatar: 'https://cn.vuejs.org/images/logo.png'
  },
  {
    id: 3,
    title: 'react专栏',
    description: '这是react专栏的描述信息',
    avatar: 'https://cn.vuejs.org/images/logo.png'
  },
  {
    id: 4,
    title: 'react专栏',
    description: '这是react专栏的描述信息',
    avatar: 'https://cn.vuejs.org/images/logo.png'
  }
]
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup (props) {
    console.log(props)
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })

    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not be empty'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = 'shoule be valid message'
      }
    }
    return {
      list: testData,
      currentUser,
      emailRef,
      validateEmail
    }
  }
})
</script>

<style>
</style>
