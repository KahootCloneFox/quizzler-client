<template>
  <div class="container">
    <router-link to="/Rooms" >Rooms</router-link>
    <LeaderboardTable></LeaderboardTable>
    
  </div>
</template>

<script>
import LeaderboardTable from '../components/LeaderboardTable.vue'
export default {
  name: 'Leaderboard',
  components: {
    LeaderboardTable,
  }
}
</script>

<style>

</style>