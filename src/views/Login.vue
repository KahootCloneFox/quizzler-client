<template>
  <div
    id="login-page"
    style="padding-top: 50px;"
  >
    <!-- This is Form login -->
    <div
      class=""
      id="form-login"
      style="height: 77vh;"
    >

      <!-- This is Welcoming Title -->
      <div
        class="container column"
        style="display: flex; text-align: center; justify-content: center; align-items: center; align-content: center; margin-bottom: 55px; margin-top: 20px; padding-left: 700px;"
      >

        <div
          class="box is-pulled-right"
          style="background-color: white;"
        >
          <img
            alt="Vue logo"
            src="../assets/logo.png"
          >
          <p class="subtitle is-white is-6">Are you <strong>ready</strong> ?
          </p>

        </div>
      </div>
      <!-- This is the end of Welcoming Title -->

      <div
        class=""
        style="display: flex; justify-content: center; align-items: center; align-content: center;"
      >
        <div style="display: flex; justify-content: center; align-items: center; align-content: center; padding-left: 700px;">
          <form
            class="box column"
            style="background-color: white; box-shadow: 0px 0px 20px rgb(211,211,211);"
          >
            <div>
              <p style="margin: 0px 0px 10px 0px;">
              </p>
            </div>
            <div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left">
                <input
                  v-model="name"
                  class="input"
                  id="email"
                  type="email"
                  placeholder="e.g. Zelda"
                >
                <span class="icon is-small is-left">
                  <i class="fas fa-gamepad"></i>
                </span>
              </div>
            </div>
            <button
              type="submit"
              id="login-btn"
              class="button is-black"
              @click.prevent="login"
            >Login</button>
            <br><br>
            <div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- This is the end of login page -->
  </div>
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

<style scoped>
#login-page {
  background-image: url('../assets/bg.jpeg');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: left;
  background-attachment: fixed;
}
</style>