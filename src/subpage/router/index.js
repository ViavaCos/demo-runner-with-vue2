import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/subpage',
    name: 'SubpageHome',
    component: Home
  }
]

console.log(routes);
const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
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
