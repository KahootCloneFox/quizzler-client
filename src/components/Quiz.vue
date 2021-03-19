<template>
  <!-- quiz -->
  <div id="quiz-page">
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
            <i class="fas fa-chess-rook"></i>
            {{ currentRoom.name }}
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
                <a
                  class="button is-black"
                  @click="leaveRoom"
                >
                  Leave Room
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div class="card">

        <header class="card-header">
          <p class="card-header-title">
            The Quiz
          </p>
          <div class="">
            Time remaining : {{ timer }}
          </div>
        </header>

        <div class="card-content">

          <div class="column has-text-weight-semibold is-size-4">
            {{ currentQuestion }}
          </div>

          <div class="column">
            <ul class="list-group col-12">
              <li
                class="list-group-item"
                v-for="(ans, i) in userAnswered"
                :key="i"
              >{{ ans.name }} has Answered</li>
            </ul>
          </div>
        </div>

        <footer class="card-footer">
          <div
            :class="[border, background[index]]"
            style="height: 70px; border-radius: 10px"
            v-for="(ans, index) in allAnswers"
            :key="index"
          >
            <a
              href="#"
              @click.prevent="chooseAnswer(ans)"
              class="button is-light"
            >{{ ans }}</a>
          </div>
        </footer>
      </div>
      <figure class="image">
        <div style="
        display: flex;
        justify-content: center;
        padding-top: 15px;
        ">
          <img
            src="../assets/bgPlay.jpeg"
            alt=""
            srcset=""
            style="width:200px;height:265px;"
          >
        </div>
      </figure>
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
.list-group {
  padding: 0;
}
</style>
