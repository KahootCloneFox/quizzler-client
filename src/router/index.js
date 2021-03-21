import Vue from 'vue'
import VueRouter from 'vue-router'
import Leaderboard from '../views/Leaderboard.vue'
import Login from '../views/Login.vue'
import Rooms from '../components/Rooms.vue'
import Quiz from '../components/Quiz.vue'
import CreateRoom from '../components/CreateRoom.vue'

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
    path: '/leaderboard',
    name: 'Leaderboard',
    component: Leaderboard,
  },
  {
    path: '/Quiz',
    name: 'Quiz',
    component: Quiz,
  },
  {
    path: '/createRoom',
    name: 'CreateRoom',
    component: CreateRoom,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.userId && !localStorage.name)
    next({ name: 'Login' })
  else if (to.name === 'Login' && localStorage.userId && localStorage.name)
    next({ name: 'Rooms' })
  else next()
})

// router.beforeEach((to, from, next) => {

//   // if (from.fullPath !== '/' && (!localStorage.userId || !localStorage.name))
//   //   next('/')
//   // else if (to.fullPath === '/' && localStorage.userId && localStorage.name)
//   //   next('/rooms')
//   // else next()
// })

export default router
