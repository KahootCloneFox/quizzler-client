<template>
  <div
    class="card mb-3 shadow p-3 mb-5 bg-body rounded"
    style="max-width: 540px; border-radius: 10px"
  >
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1521287329847-ec334c5517fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8eWVsbG93fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          alt="..."
          style="width: 100%; height: 100%; border-radius: 15px"
          class="p-2"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ room.name }}</h5>
          <hr />
          <!-- <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Max Player</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                {{ room.max_participant }}
              </h6>
            </div>
          </div>
          <div class="d-grid gap-2">
            <a
              @click.prevent="joinRoom(room.id)"
              href="#"
              class="btn btn-outline-warning"
              >Join</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomsCard',
  props: ['room'],
  methods: {
    joinRoom(roomId) {
      this.$socket.emit('joinRoom', { roomId, user: this.$store.state.user })
    },
  },
}
</script>

<style>
</style>