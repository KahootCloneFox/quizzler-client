<template>
  <!-- rooms -->
  <section id="rooms">
    <div class="container ">
      <div class="row justify-content-center mb-3">
        <div class="col-md-8 d-flex">
          <h5 class="col-md-4 justify-content-between">list room
          </h5>
          <!-- <a
            data-bs-toggle="modal"
            data-bs-target="#createRoom"
            href=""
            class=" col-md-4 btn btn-primary"
            @click.prevent="modalCreateRoom"
          >Create Room</a> -->
          <button type="button" class="col-md-4 btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCreateRoom">
            Launch demo modal
          </button>
        </div>
      </div>
      <div class="row ">
        <div class="col-4 ">
          <div
            class="card mb-3 shadow p-3 mb-5 bg-body rounded"
            style="max-width: 540px; border-radius: 10px;"
          >
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="https://images.unsplash.com/photo-1521287329847-ec334c5517fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8eWVsbG93fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                  alt="..."
                  style="width: 100%; height: 100%; border-radius: 15px;"
                  class="p-2"
                >
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Room 1</h5>
                  <hr>
                  <!-- <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                  <div class="card mb-3">
                    <div class="card-body">
                      <h5 class="card-title">Host</h5>
                      <h6 class="card-subtitle mb-2 text-muted">asd</h6>
                    </div>
                  </div>
                  <div class="d-grid gap-2">
                    <a
                      @click="joinRoom"
                      href=""
                      class="btn btn-outline-warning"
                    >Join</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalCreateRoom />
    <ModalCreateRoom2 />
  </section>
  <!-- selesai rooms -->
</template>

<script>
import ModalCreateRoom from './ModalCreateRoom'
import ModalCreateRoom2 from './ModalCreateRoom2'
export default {
  name: 'rooms',
  components: {
    ModalCreateRoom,
    ModalCreateRoom2
  },
  methods: {
    joinRoom (){
      this.$router.push('/Quiz')
    },
    modalCreateRoom () {

    }
  }
}
</script>

<style>
</style>