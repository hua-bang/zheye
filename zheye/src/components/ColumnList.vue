<template>
    <div class="row">
        <div v-for="column in columuList" :key="column.id" class="col-4 mb-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                    <img :src="column.avatar" :alt="column.title" class="rounded-circle border border-light w-25 my-3">
                    <h5 class="card-title">{{column.title}}</h5>
                    <p class="card-text text-left">{{column.description}}</p>
                    <router-link :to="{ name: 'column', params: { id: column.id }}" class="btn btn-outline-primary">进入专栏</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
export interface ColumnProps {
    id: number;
    avatar?: string;
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
    const columuList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/column.jpg')
        }
        return column
      })
    })
    return {
      columuList
    }
  }
})
</script>
