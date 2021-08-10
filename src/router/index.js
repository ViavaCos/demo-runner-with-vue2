import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import testRoute from './modules/test'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

routes.push(...testRoute)
console.log(routes);
const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// solve Error: Loading chunk failed.
router.onError(error => {
  const pattern = /Loading chunk (\w)+ failed/g
  const isError = error.message.match(pattern)
  const targetPath = router.history.pending.fullPath
  if (isError) {
    router.replace(targetPath)
  }
})

export default router
