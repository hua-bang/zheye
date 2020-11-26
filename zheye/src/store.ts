import { createStore } from 'vuex'
import axios from 'axios'
import { testData, testPosts } from './testData'
interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}
interface ImageProps {
  _id?: string;
  url?: string;
  createdA?: string;
}
export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}
export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}
const store = createStore({
  state: {
    columns: [],
    posts: testPosts,
    user: { isLogin: true, name: 'hug', id: 0, columnId: 1 }
  },
  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: 'hug', id: 1, columnId: 1 }
    },
    createPost (state, newPost) {
      state.posts.push(newPost)
    },
    fetchColumns (state, rawData) {
      state.columns = rawData.data.list
    }
  },
  actions: {
    fetchColumns (context) {
      axios.get('/columns?currentPage=1&pageSize=5').then(res => {
        context.commit('fetchColumns', res.data)
      })
    }
  },
  getters: {
    biggerColumnsLen (state) {
      return state.columns.filter(c => c).length
    },
    getColumnById: (state) => (id: string) => {
      return state.columns.find(c => c._id === id)
    },
    getPostsByCid: (state) => (cid: string) => {
      return state.posts.filter(post => post.columnId === Number(cid))
    }
  }
})
export default store
