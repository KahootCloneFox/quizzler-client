import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomForm: {
      name: '',
      max_participant: 2,
    },
    user: {},
    rooms: [],
  },
  mutations: {
    // Setters
    setRooms(state, rooms) {
      state.rooms = rooms
    },
    setUser(state, user) {
      state.user = user
      localStorage.name = user.name
      localStorage.userId = user.userId
    },

    // Resetter
    resetRoomForm(state) {
      state.roomForm.name = ''
      state.roomForm.max_participant = 2
    },
  },
  actions: {
    SOCKET_sendRooms(context, payload) {
      context.commit('setRooms', payload)
    },
    SOCKET_sendUser(context, payload) {
      context.commit('setUser', payload)
      router.push('/rooms')
    },
  },
  modules: {},
})
