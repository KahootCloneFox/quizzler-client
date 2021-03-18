<template>
  <div class="container">
    <router-link to="/Rooms">Rooms</router-link>
    <LeaderboardTable :users="room.participants"></LeaderboardTable>
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