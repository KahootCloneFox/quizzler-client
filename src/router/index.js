import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Rooms from '../components/Rooms.vue'
import Quiz from '../components/Quiz.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  }, 
  {
    path: '/Rooms',
    name: 'Rooms',
    component: Rooms,
  },
  {
    path: '/Quiz',
    name: 'Quiz',
    component: Quiz,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !localStorage.id && !localStorage.name) next({ name: 'Login' })
//   else if (to.name === 'Login' && localStorage.id && localStorage.name) next({ name: 'Rooms' })
//   else next()
// })

export default router
