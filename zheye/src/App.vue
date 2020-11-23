<template>
  <div class="container">
    <global-header :user="currentUser" />
    <form action="">
        <div class="mb-3">
          <label class="form-label">邮箱地址</label>
          <validate-input :rules="emailRules" v-model="emailVal" placeholder="请输入邮箱地址" type="text"></validate-input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">密码</label>
          <validate-input :rules="passwordRules" v-model="passwordVal" placeholder="请输入密码" type="password"></validate-input>
        </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ColumnProps } from './components/ColumnList.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
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
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    ValidateInput
  },
  setup (props) {
    console.log(props)
    const emailVal = ref('hug')
    const passwordVal = ref('')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    return {
      list: testData,
      currentUser,
      emailRules,
      passwordRules,
      emailVal,
      passwordVal
    }
  }
})
</script>

<style>
</style>
