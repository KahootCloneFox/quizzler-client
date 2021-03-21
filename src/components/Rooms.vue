<template>
  <!-- rooms -->
  <div id="rooms">
    <nav
      class="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item">
          <img
            src="../assets/logo.png"
            alt="sglogo"
          >
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
      >
        <div class="navbar-start">
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <button
              type="button"
              class="button is-black"
              @click="CreateRoom"
            >
              Create Room
            </button>
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <a
                class="button is-grey"
                @click.prevent="logout"
              >
                <strong>Logout</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <!-- ROOM CARDS -->
      <div class="column is-main-content">
        <div class="container is-widescreen">
          <div
            id="main-columns"
            class="columns is-multiline"
          >
            <div
              id="child-columns"
              class="column"
              v-for="(room, i) in rooms"
              :key="i"
            >
              <div
                class="box"
                style="height: 42vh;width: 17vw;"
              >
                <img
                  src="../assets/bg2.jpeg"
                  style='overflow: hidden;'
                >
                <p style="text-align: center;">
                  <strong style="font-size: 21px;"> {{room.name}} </strong>
                </p>
                <p>
                  <span style="font-size: 14px;"> Max Player : {{room.max_participant}} </span>
                </p>
                <button>
                  <a
                    @click.prevent="joinRoom(room.id)"
                    href="#"
                  >Join Room</a>
                </button>
              </div>
            </div>
          </div>
          <!-- END ROOM CARDS -->
        </div>
      </div>
    </div>
  </div>
  <!-- selesai rooms -->
</template>

<script>

export default {
  name: 'rooms',
  components: {
  },
  methods: {
    logout() {
      delete localStorage.name
      delete localStorage.userId
      this.$router.push('/')
    },
    CreateRoom() {
      this.$router.push('/createRoom')
    },
    joinRoom(roomId) {
      this.$socket.emit('joinRoom', { roomId, user: this.$store.state.user })
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

<style scoped>
img {
  z-index: -1;
}
</style>