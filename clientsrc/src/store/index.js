import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import api from "./AxiosService"
import router from '../router/index'
import { BoardsStore } from './BoardsStore'
import { ListsStore } from './ListsStore'
import { ItemsStore } from './ItemsStore'
import { CommentsStore } from './CommentsStore'


Vue.use(Vuex)

//Allows axios to work locally or live
// let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

// let api = Axios.create({
//   baseURL: base + "api/",
//   timeout: 3000,
//   withCredentials: true
// })

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    items: {},
    comments: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveBoard(state, board) {
      state.activeBoard = board
    },
    setLists(state, list) {
      state.lists = list
    },
    setItems(state, data) {
      // state.items[data.listId] = data.items
      Vue.set(state.items, data.listId, data.items)
    },
    setComments(state, data) {
      Vue.set(state.comments, data.itemId, data.items)
    }

  },

  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },

  },
  modules: {
    BoardsStore,
    ListsStore,
    ItemsStore,
    CommentsStore,
  }
})
