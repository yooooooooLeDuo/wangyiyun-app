import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/musicitem',
    name: 'musicItem',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/musicItem')
  },
  {
    path:'/search',
    name:'search',
    component: ()=>import('../views/Search')
  },
  {
    path: '/myself',
    name:'myself',
    beforeEnter:(to,from,next)=>{
      console.log('beforeEnter')
      next();
    },
    component: ()=>import('../views/myself')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// console.log(router)

router.beforeEach((to,from,next)=>{
  console.log('router.beforeEach')
  next();
})

export default router
