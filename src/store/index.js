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
    room: {},
    question: {},
    timer: '',
    userAnswered: [],
  },
  mutations: {
    // Setters
    setRooms(state, rooms) {
      state.rooms = rooms
      if (!state.room.id) return
      const room = rooms.find(e => e.id === state.room.id)
      state.room = room
    },
    setUser(state, user) {
      state.user = user
      localStorage.name = user.name
      localStorage.userId = user.userId
    },
    setCurrentRoom(state, room) {
      state.room = room
    },
    setQuestion(state, question) {
      state.question = question
    },
    setTimer(state, second) {
      state.timer = `${second} second(s) left`
    },
    addAnswered(state, payload) {
      state.userAnswered.push(payload)
    },

    // Resetter
    resetRoomForm(state) {
      state.roomForm.name = ''
      state.roomForm.max_participant = 2
    },
    resetAnswer(state) {
      state.userAnswered = []
    },
    resetQuestionRoom(state) {
      state.question = {}
      state.timer = ''
      state.userAnswered = []
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
    SOCKET_sendMessageRoom(context, payload) {
      console.log(payload, 'helloooooo')
    },
    SOCKET_successJoinRoom(context, { roomId, rooms }) {
      console.log({ roomId, rooms }, 'helloooooo')
      const room = rooms.find(e => e.id === roomId)
      console.log(room)
      context.commit('setRooms', rooms)
      context.commit('setCurrentRoom', room)
      router.push('/quiz')
    },
    SOCKET_failedJoinRoom(context, payload) {
      console.log('ROOM SUDAH PENUH')
      Vue.swal('Room is Full !');
      context.commit('setRooms', payload)
    },
    SOCKET_sendQuestion(context, payload) {
      context.commit('setQuestion', payload)
    },
    SOCKET_sendTimer(context, payload) {
      context.commit('setTimer', payload)
    },
    SOCKET_hasAnswered(context, payload) {
      context.commit('addAnswered', payload)
    },
    SOCKET_resetAnswered(context) {
      context.commit('resetAnswer')
    },
    SOCKET_gameEnd(context, rooms) {
      context.commit('setRooms', rooms)
      router.push('/leaderboard')
    },
  },
  modules: {},
})
