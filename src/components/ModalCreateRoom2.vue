<template>
  <div>
    <!-- Button trigger modal -->

    <!-- Modal -->
    <div
      class="modal"
      id="modalCreateRoom2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >Create Room</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            class="progress mt-3"
            style="width: 80%; margin: auto"
          >
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              style="width: 62%"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <hr />
          <div class="modal-body">
            <div class="row g-3 mb-2">
              <div class="col-4">
                <label
                  for="inputPassword6"
                  class="col-form-label"
                >Max Player</label>
              </div>
              <div class="col-6">
                <label
                  for="customRange3"
                  class="form-label"
                >{{
                  $store.state.roomForm.max_participant
                }}</label>
                <input
                  v-model="$store.state.roomForm.max_participant"
                  type="range"
                  class="form-range"
                  min="2"
                  max="5"
                  step="1"
                  id="customRange3"
                />
              </div>
              <div class="col-auto">
                <!-- <span id="passwordHelpInline" class="form-text">
                  Must be 8-20 characters long.
                </span> -->
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="createRoom"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Create!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCreateRoom2',
  methods: {
    createRoom() {
      const payload = {
        name: this.$store.state.roomForm.name,
        max_participant: this.$store.state.roomForm.max_participant,
        user: this.$store.state.user,
      }
      this.$socket.emit('createRoom', payload)
      this.$store.commit('resetRoomForm')
    },
  },
}
</script>

<style>
</style>
