<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50"/>
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list>
    <div class="button-area" style="width:100%;display:flex;">
      <button
            class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25"
          >
      加载更多
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '../components/ColumnList.vue'
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
  name: 'home',
  components: {
    ColumnList
  },
  setup (props) {
    console.log(props)
    return {
      list: testData
    }
  }
})
</script>
