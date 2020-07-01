<template>
  <div class="container-fluid boards">
    <div class="row mt-1">
      <div class="col-6 mx-auto text-center">
        <h1>Project Management Boards</h1>
        <form @submit.prevent="addBoard" class="text-center">
          <input
            class="form-control my-1 shadow"
            type="text"
            placeholder="Title..."
            v-model="newBoard.title"
            required
          />
          <input
            class="form-control my-1 shadow"
            type="text"
            placeholder="Description..."
            v-model="newBoard.description"
          />
          <button type="submit" class="btn btn-dark shadow">Create Board</button>
        </form>
      </div>
    </div>

    <div class=".row d-flex justify-content-center mt-3">
      <div class="col-3">
        <div class="py-1" v-for="board in boards" :key="board.id" :board="board">
          <div class="card shadow my-2 py-2 pb-4">
            <div class="row">
              <div class="col-2 offset-10">
                <i
                  class="fa fa-trash float-right text-danger pointer mr-2"
                  @click="removeBoard(board.id)"
                ></i>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-center">
                <router-link class="text-dark" :to="{name: 'board', params: {boardId: board.id}}">
                  <h5 class="mt-2 ml-2">{{board.title}}</h5>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import board from "@/pages/Board.vue";
export default {
  name: "boards",
  props: ["board"],
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    },
    removeBoard(boardId) {
      this.$store.dispatch("removeBoard", boardId);
    }
  }
};
</script>
<style scoped>
.pointer {
  cursor: pointer;
}
</style>
