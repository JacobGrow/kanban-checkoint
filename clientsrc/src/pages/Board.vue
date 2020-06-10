<template>
  <div class="board">
    <h1>{{ board.title }}</h1>
    <h5>{{ board.description }}</h5>
    <lists />
  </div>


</template>

<script>
  import Lists from "@/components/ListsComponent.vue"
  export default {
    name: "board",
    mounted() {
      this.$store.dispatch("getBoardDetails", this.$route.params.boardId);
    },
    computed: {
      board() {
        //FIXME This does not work on page reload because the activeBoard is empty in the store
        return this.$store.state.activeBoard;
      }
    },
    props: ["boardId"],
    components: {
      Lists
    }

  };
</script>