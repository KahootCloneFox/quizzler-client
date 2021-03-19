<template>
  <div class="">
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th
            class="is-1"
            scope="col"
          >Rank</th>
          <th
            class="is-1"
            scope="col"
          >Name</th>
          <th
            class="is-1"
            scope="col"
          >Score</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user, index) in users"
          :key="index"
        >
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'LeaderboardTable',
  props: ['users'],
}
</script>

<style>
</style>