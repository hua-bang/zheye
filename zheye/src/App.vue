<template>
  <div class="container">
    <global-header :user="currentUser" />
    <loader v-if="isLoading" text="拼命加载中" background="rgba(0,0,0,0.8)" />
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-line mb-0">
          <li class="list-inline-item">@ 2020 者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, computed, watch } from 'vue'
import { ColumnProps, UserProps } from './store'
import GlobalHeader from './components/GlobalHeader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from 'vuex'
import Loader from './components/Loader.vue'
import createMessage from './components/createMessage'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Loader
  },
  setup (props) {
    console.log(props)
    const store = useStore()
    const currentUser = computed(() => store.state.user)
    const isLoading = computed(() => store.state.loading)
    const error = computed(() => store.state.error)
    watch(() => error.value.status, () => {
      const { status, message } = error.value
      if (status && message) {
        createMessage(message, 'error')
      }
    })
    return {
      currentUser,
      isLoading,
      error
    }
  }
})
</script>

<style>
</style>
