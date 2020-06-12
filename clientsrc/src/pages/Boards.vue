<template>
  <div class="boards">
    WELCOME TO THE BOARDS!!!
    <form @submit.prevent="addBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />
      <button type="submit">Create Board</button>
    </form>
    <div v-for="board in boards" :key="board.id" :board="board">
      <router-link :to="{name: 'board', params: {boardId: board.id}}">{{board.title}}</router-link>
      <button @click="removeBoard(board.id)">X</button>
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