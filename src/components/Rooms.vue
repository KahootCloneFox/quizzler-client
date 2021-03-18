<template>
  <!-- rooms -->
  <section id="rooms">
    <div class="container">
      <div class="row justify-content-center mb-3">
        <div class="">
          <div>
            <button
              type="button"
              class="col-md-4 btn btn-primary mb-3"
              data-bs-toggle="modal"
              data-bs-target="#modalCreateRoom"
            >
              Launch demo modal
            </button>
          </div>
          <div>
            <button
              @click="logout"
              class="btn btn-primary"
            >Logout</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-6 col-12"
          v-for="(room, i) in rooms"
          :key="i"
        >
          <RoomsCard :room='room' />
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
    RoomsCard
  },
  methods: {
    logout() {
      delete localStorage.name
      delete localStorage.userId
      this.$router.push('/')
    }
  },
  computed: {
    rooms (){
      return this.$store.state.rooms
    }
  },
  created () {
    this.$socket.emit('fetchRooms')
  }
}
</script>

<style>
</style>