import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/dashBoard.vue'
//import myProfile from '../views/myProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/myProfile',
    name: 'myProfile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/myProfile.vue')
  },
  {
    path: '/todoList',
    name: 'todoList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/todoList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
