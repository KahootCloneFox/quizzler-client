<template>
  <!-- input username -->
  <section id="username">
    <div class="container align-self-center">
      <div class="row justify-content-center">
        <div
          class="col-md-6 shadow p-3 mb-5 bg-body rounded"
          style="border-radius: 10px"
        >
          <div
            class="card mb-2"
            style="background-color: purple; border-radius: 10px"
          >
            <div class="card-body">
              <h1 class="text-center text-light fs-1">Kahoot!</h1>
              <div class="form-floating mb-3">
                <input
                  v-model="name"
                  type="text"
                  class="form-control mt-4"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Username</label>
                <div class="d-grid gap-2">
                  <button
                    @click="login"
                    class="btn btn-warning mt-3"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- selesai input username -->
</template>

<script>
export default {
  name: `Login`,
  data() {
    return {
      name: '',
    }
  },
  computed: {
    rooms() {
      return this.$store.state.rooms
    },
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    login() {
      this.$socket.emit('enterHome', this.name)
    },
  },
}
</script>

<style>
</style>