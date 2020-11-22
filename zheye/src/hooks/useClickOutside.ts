import { ref, onMounted, onUnmounted, Ref } from 'vue'

// 判断点击是否在外边
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  // 默认为false
  const isClickOutSide = ref(false)
  // 处理的函数
  const handler = (e: MouseEvent) => {
    // 如果有这个元素
    if (elementRef.value) {
      // 并且这个元素包含我们正在点击的元素
      if (elementRef.value.contains(e.target as HTMLElement)) {
        // 不在外面
        isClickOutSide.value = false
      } else {
        // 在外面
        isClickOutSide.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutSide
}
export default useClickOutside
