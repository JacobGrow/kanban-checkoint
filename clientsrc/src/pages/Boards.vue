<template>
  <div class="container-fluid boards">
    <div class="row">
<div class="col">

    WELCOME TO THE BOARDS!!!
    <form @submit.prevent="addBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />
      <button type="submit">Create Board</button>
    </form>
    </div>
    </div>


    <div class=".row d-flex justify-content-center mt-5">
      <div class="col-3">

    <div class="py-1" v-for="board in boards" :key="board.id" :board="board">
    <div class="card shadow my-2 py-2">
      <router-link :to="{name: 'board', params: {boardId: board.id}}">
       <h5>
         {{board.title}}
         </h5> 
        </router-link>
      <i class="fa fa-trash float-right text-danger pointer ml-1" @click="removeBoard(board.id)"></i>
    </div>
    </div>
      </div>
  </div>
    </div>
</template>

<script>
  import board from '@/pages/Board.vue'
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
        this.$store.dispatch("removeBoard", boardId)
      }
    }
  }
</script>
<style scoped>
    .pointer {
        cursor: pointer;
    }

</style>
