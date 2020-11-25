import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps } from './testData'
interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}
const store = createStore({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false, name: '', id: 0 }
  },
  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: 'hug', id: 1 }
    }
  },
  getters: {
    biggerColumnsLen (state) {
      return state.columns.filter(c => c.id > 2).length
    },
    getColumnById: (state) => (id: string) => {
      return state.columns.find(c => c.id === Number(id))
    },
    getPostsByCid: (state) => (cid: string) => {
      return state.posts.filter(post => post.columnId === Number(cid))
    }
  }
})
export default store
