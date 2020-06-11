import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import Boards from '../pages/Boards.vue'
// @ts-ignore
import Board from '../pages/Board.vue'
// @ts-ignore
import Lists from '../components/ListComponent.vue'
import { authGuard } from "@bcwdev/auth0-vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/boards',
      name: 'boards',
      component: Boards,
      beforeEnter: authGuard
    },
    {
      path: '/boards/:boardId',
      name: 'board',
      component: Board,
      beforeEnter: authGuard
    },
    // {
    //   path: '/list/:listId/items',
    //   name: 'lists',
    //   component: Lists,
    //   beforeEnter: authGuard
    // },
    {
      path: "*",
      redirect: '/'
    }
  ]
})