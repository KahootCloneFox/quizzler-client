<template>
  <div class="container">
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="#"
        >
          <i class="fas fa-chess-king"></i>
          Leaderboard
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
            <div class="buttons">
              <router-link
                to="/"
                class="button is-black"
              >Leave Room</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="card">
      <LeaderboardTable :users="room.participants"></LeaderboardTable>
    </div>

    <figure class="image">
      <div style="
        display: flex;
        justify-content: center;
        padding-top: 15px;
        ">
        <img
          src="../assets/bgDone.jpeg"
          alt=""
          srcset=""
          style="width:200px;height:265px;"
        >
      </div>
    </figure>
  </div>
</template>

<script>
import LeaderboardTable from '../components/LeaderboardTable.vue'
export default {
  name: 'Leaderboard',
  data: () => ({
    room: {},
  }),
  components: {
    LeaderboardTable,
  },
  created() {
    this.room = JSON.parse(JSON.stringify(this.$store.state.room))
    this.room.participants.forEach(e => (e.score = e.score || 0))
    this.room.participants = this.room.participants.sort(
      (a, b) => b.score - a.score,
    )
    this.$store.commit('resetQuestionRoom')
    this.$socket.emit('resetRoom', this.room.id)
  },
}
</script>

<style>
</style>