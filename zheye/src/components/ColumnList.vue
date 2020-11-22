<template>
    <ul>
        <li v-for="column in list" :key="column.id">
            <img :src="column.avatar" :alt="column.title">
            <h5>{{column.title}}</h5>
            <p>{{column.description}}</p>
            <a href="#">进入专栏</a>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface ColumnProps {
    id: number;
    avatar: string;
    title: string;
    description: string;
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>, // 断言,使用过程中能获取到类型
      // type: Array as ColumnProps[] 此时不会生效 Array不属于类，而是属于构造方法
      required: true
    }
  },
  setup (props) {
    console.log(props)
  }
})
</script>
