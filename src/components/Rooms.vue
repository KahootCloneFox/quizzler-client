<template>
  <!-- rooms -->
  <section id="rooms">
    <div class="container">
      <div class="card p-4 my-3 shadow">
        <div class="row text-start align-items-center">
          <div class="col"><h1>Quizzler!</h1></div>
          <div class="col-auto">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalCreateRoom"
            >
              Create Room
            </button>
          </div>
          <div class="col-auto">
            <button @click="logout" class="btn btn-primary">Logout</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12" v-for="(room, i) in rooms" :key="i">
          <RoomsCard :room="room" />
        </div>
      </div>
    </div>
    <ModalCreateRoom />
    <ModalCreateRoom2 />
  </section>
  <!-- selesai rooms -->
</template>

<script>
import ModalCreateRoom from './ModalCreateRoom'
import ModalCreateRoom2 from './ModalCreateRoom2'
import RoomsCard from './RoomsCard'

export default {
  name: 'rooms',
  components: {
    ModalCreateRoom,
    ModalCreateRoom2,
    RoomsCard,
  },
  methods: {
    logout() {
      delete localStorage.name
      delete localStorage.userId
      this.$router.push('/')
    },
  },
  computed: {
    rooms() {
      return this.$store.state.rooms
    },
  },
  created() {
    this.$socket.emit('fetchRooms')
    const user = { name: localStorage.name, userId: localStorage.userId }
    this.$store.commit('setUser', user)
  },
}
</script>

<style>
</style>