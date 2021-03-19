<template>
  <div>
    <!-- Button trigger modal -->
    <div>
      <div
        class="column"
        style="display: flex; justify-content: center; align-items: center; align-content: center; margin-top: 10px;"
      >
        <div style="display: flex; justify-content: center; align-items: center; align-content: center; padding-top: 150px;">
          <form
            class="box"
            style="background-color: white; box-shadow: 0px 0px 20px rgb(211,211,211);"
          >
            <div>
              <p style="margin: 0px 0px 10px 0px;">
                Create Room
              </p>
            </div>

            <div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-left">
                <input
                  v-model="$store.state.roomForm.name"
                  class="input"
                  id="name"
                  type="text"
                  placeholder="e.g. Link"
                >
                <span class="icon is-small is-left">
                  <i class="fas fa-prescription-bottle"></i>
                </span>
              </div>
            </div>

            <div class="field">

              <div class="control has-icons-left">
                <label class="label">Max Players</label>
                <div class="select is-link">
                  <span class="icon is-small is-left">
                    <i class="fas fa-align-justify"></i>
                  </span>
                  <select v-model="$store.state.roomForm.max_participant">
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              class="button is-black"
              @click="createRoom"
            >Create!</button>
            <button
              id="link-register-reg"
              class="button is-white"
              style="border-color:grey;"
            >
              <router-link to="/Rooms">Cancel</router-link>
            </button>
            <br><br>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateRoom',
  methods: {
    createRoom() {
      const payload = {
        name: this.$store.state.roomForm.name,
        max_participant: this.$store.state.roomForm.max_participant,
        user: this.$store.state.user,
      }
      this.$socket.emit('createRoom', payload)
      this.$store.commit('resetRoomForm')
      this.$router.push('/rooms')
    },
  },
}
</script>

<style>
</style>