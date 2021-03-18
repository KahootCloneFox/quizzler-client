<template>
  <!-- quiz -->
  <div class="container">
    <!-- <div class="card"> -->
    <p>{{ currentRoom }}</p>
    <div class="card-body">
      <div
        class="row justify-content-center shadow p-3 mb-5 bg-body rounded"
        style="min-height: 400px"
      >
        <div
          class="col-3 justify-content-center d-flex"
          style="background-color: greenyellow; border-radius: 10px"
        >
          <h1 class="d-flex align-items-center">{{ timer }}</h1>
        </div>
        <div
          class="col-6 justify-content-center d-flex"
          style="background-color: yellow; border-radius: 10px"
        >
          <h1 class="d-flex align-items-center">{{ currentQuestion }}</h1>
        </div>
        <div
          class="col-3 justify-content-center d-flex"
          style="background-color: red; border-radius: 10px"
        >
          <h1 class="d-flex align-items-center">answer</h1>
        </div>
      </div>
    </div>
    <div>
      <!-- EDIT THIS LATER -->
      <p>{{ userAnswered }}</p>
      <div><button @click="leaveRoom">LEAVE ROOM</button></div>
      <br />
      <div v-for="(ans, index) in allAnswers" :key="index">
        <button @click="chooseAnswer(ans)">{{ ans }}</button>
      </div>

      <!-- EDIT THIS LATER -->
    </div>
    <div class="row">
      <div class="col-6 shadow p-1 mb-3 bg-body rounded">
        <div
          :class="[border, background[0]]"
          style="height: 70px; border-radius: 10px"
        >
          <a href="" class="btn m-2 text-light">A</a>
        </div>
      </div>
      <div class="col-6 shadow p-1 mb-3 bg-body rounded">
        <div
          class="p-1 border bg-primary"
          style="height: 70px; border-radius: 10px"
        >
          <a href="" class="btn m-2 text-light">A</a>
        </div>
      </div>
      <div class="col-6 shadow p-1 mb-3 bg-body rounded">
        <div
          class="p-1 border bg-warning"
          style="height: 70px; border-radius: 10px"
        >
          <a href="" class="btn m-2 text-light">A</a>
        </div>
      </div>
      <div class="col-6 shadow p-1 mb-3 bg-body rounded">
        <div
          class="p-1 border bg-info"
          style="height: 70px; border-radius: 10px"
        >
          <a href="" class="btn m-2 text-light">A</a>
        </div>
      </div>
    </div>
  </div>
  <!-- selesai quiz -->
</template>

<script>
export default {
  name: `Quiz`,
  data: () => ({
    border: 'p-1 border',
    background: ['bg-danger'],
  }),
  computed: {
    currentRoom() {
      return this.$store.state.room
    },
    user() {
      return this.$store.state.user
    },
    roomId() {
      return this.$store.state.room.id
    },
    currentQuestion() {
      if (!this.$store.state.question.question) return 'waiting'
      return this.$store.state.question.question
    },
    answer() {
      if (!this.$store.state.question.question) return 'waiting'
      return this.$store.state.question.correct_answer
    },
    wrongAnswers() {
      if (!this.$store.state.question.question)
        return ['waiting', 'waiting', 'waiting']
      return this.$store.state.question.incorrect_answer
    },
    timer() {
      return this.$store.state.timer
    },
    allAnswers() {
      return [this.answer, ...this.wrongAnswers].sort()
    },
    userAnswered() {
      return this.$store.state.userAnswered
    },
  },
  methods: {
    leaveRoom() {
      this.$socket.emit('leaveRoom', {
        user: this.user,
        roomId: this.roomId,
      })
    },
    calculateScore(ans) {
      if (ans !== this.answer) return 0
      return 10 - this.userAnswered.length
    },
    chooseAnswer(ans) {
      if (ans === 'waiting') return
      // jika id ada di array, maka langsung return
      for (let i = 0; i < this.userAnswered.length; i++) {
        if (this.user.userId === this.userAnswered[i].userId) return
      }
      this.$socket.emit('answerQuestion', {
        room: this.currentRoom,
        user: this.user,
        score: this.calculateScore(ans),
      })
    },
  },
}
</script>

<style>
</style>