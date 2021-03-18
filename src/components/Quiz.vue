<template>
  <!-- quiz -->
  <div class="container">
      <div class="card p-4 my-3 shadow">
        <div class="row text-start align-items-center">
          <div class="col"><h1>{{ currentRoom.name }}</h1></div>
          <div class="col-auto">
            <button @click="leaveRoom" class="btn btn-primary">Leave Room</button>
          </div>
        </div>
      </div>

    <div class="card-body">
      <div
        class="row justify-content-center shadow p-3 mb-5 bg-body rounded"
        style="min-height: 400px"
      >
        <div
          class="col-3 justify-content-center d-flex"
          style="background-color: #ff80ab; border-radius: 10px"
        >
          <h1 class="d-flex align-items-center">{{ timer }}</h1>
        </div>
        <div
          class="col-6 justify-content-center d-flex"
          style="background-color: #ea80fc; border-radius: 10px"
        >
          <h1 class="d-flex align-items-center">{{ currentQuestion }}</h1>
        </div>
        <div
          class="col-3 text-center "
          style="background-color: #8c9eff; border-radius: 10px"
        >
          <div class="mt-5 row">
            <ul class="list-group col-12">
              <li class="list-group-item list-group-item-action list-group-item-primary" aria-current="true">Name</li>
              <li class="list-group-item" v-for="(ans, i) in userAnswered" :key="i">{{ ans.name }}</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <br />
      
    </div>
    <div class="row">
      <div 
        v-for="(ans, index) in allAnswers" :key="index"
        class="col-6 shadow p-1 mb-3 bg-body rounded">
        <div
          :class="[border, background[index]]"
          style="height: 70px; border-radius: 10px"
        >
          <a href="#" @click.prevent="chooseAnswer(ans)" class="btn m-2 text-light">{{ ans }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `Quiz`,
  data: () => ({
    border: 'p-1 border',
    background: ['bg-danger', 'bg-warning', 'bg-primary', 'bg-info'],
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
      this.$router.push('/')
    },
    calculateScore(ans) {
      if (ans !== this.answer) return 0
      return 10 - this.userAnswered.length
    },
    chooseAnswer(ans) {
      if (ans === 'waiting') return
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

<style scoped>
.list-group{
  padding: 0;
}
</style>
