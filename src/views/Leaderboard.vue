<template>
  <div class="container">
    <div class="card p-4 my-3 shadow">
      <div class="row text-start align-items-center">
        <div class="col"><h1>Leaderboard</h1></div>
        <div class="col-auto">
          <router-link to="/" class="btn btn-primary">Leave Room</router-link>
        </div>
      </div>
    </div>
    <div class="card">
      <LeaderboardTable :users="room.participants"></LeaderboardTable>
    </div>
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