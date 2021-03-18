<template>
  <div class="container">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCreateRoom">
      Launch demo modal
    </button>
    <LeaderboardTable></LeaderboardTable>
    <ModalCreateRoom></ModalCreateRoom>
    <ModalCreateRoom2></ModalCreateRoom2>

  </div>
</template>

<script>
import LeaderboardTable from '../components/LeaderboardTable.vue'
import ModalCreateRoom from '../components/ModalCreateRoom.vue'
import ModalCreateRoom2 from '../components/ModalCreateRoom2.vue'
export default {
  name: 'Leaderboard',
  components: {
    LeaderboardTable,
    ModalCreateRoom,
    ModalCreateRoom2
  }
}
</script>

<style>

</style>