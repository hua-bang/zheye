<template>
  <div class="dropdown" ref="dropdownRef">
    <!-- click.prevent是为了防止默认事件 -->
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{title}}</a>
    <ul class="dropdown-menu" :style="{display:'block'}" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    // 这里是为了后面的ref能是HTMLElement类型
    const dropdownRef = ref<null | HTMLElement>(null)
    const isOpen = ref(false)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    // 根据点击时间改变之
    const isClickOutside = useClickOutside(dropdownRef)
    watch(isClickOutside, () => {
      // 打开着，同时在外的话 ，选择关闭
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })

    return {
      isOpen,
      toggleOpen,
      dropdownRef,
      isClickOutside
    }
  }
})
</script>
