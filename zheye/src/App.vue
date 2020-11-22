<template>
  <div class="container">
    <global-header :user="currentUser" />
    <column-list :list="list" ></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
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
    ColumnList,
    GlobalHeader
  },
  setup (props) {
    console.log(props)
    return {
      list: testData,
      currentUser
    }
  }
})
</script>

<style>
</style>
