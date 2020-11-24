<template>
  <form class="validate-form-container">
      <slot name="default"></slot>
      <div class="submit-area" @click.prevent="submitForm">
        <slot name="submit">
          <button type="sumbit" class="btn btn-primary">提交</button>
        </slot>
      </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
type ValidateFunc = () => boolean
export const emitter = mitt()
export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    let funcArr: ValidateFunc[] = []
    const submitForm = () => {
      const result = funcArr.map(func => func()).every(result => result) // 直接使用every遇到错就会停下哈

      context.emit('form-submit', result)
    }
    const callback = (func: ValidateFunc) => {
      funcArr.push(func)
    }
    emitter.on('form-item-created', (func) => {
      funcArr.push(func)
    })
    onUnmounted(() => {
      emitter.off('form-item-created', (func) => {
        funcArr.push(func)
      })
      funcArr = []
    })
    return {
      submitForm
    }
  }
})
</script>
