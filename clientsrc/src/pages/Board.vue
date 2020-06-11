<template>
  <div class="row">
    <div class="col">

      <div class="board">
        <h1>{{ board.title }}</h1>
        <h5>{{ board.description }}</h5>
        <div class="lists-component">
          <div>
            <form @submit.prevent="addList">
              <input type="text" placeholder="title" v-model="newList.title" required />
              <button type="submit">Create List</button>
            </form>
          </div>
          <div class="row">
            <list v-for="list in lists" :key="list.id" :list="list" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import List from '@/components/ListComponent.vue'
  export default {
    name: "board",
    mounted() {
      this.$store.dispatch("getBoardDetails", this.$route.params.boardId);
      this.$store.dispatch("getLists", this.$route.params.boardId)
    },
    data() {
      return {
        newList: {
          boardId: this.$route.params.boardId
        }
      }
    },
    computed: {
      lists() {
        return this.$store.state.lists
      },
      board() {
        //FIXME This does not work on page reload because the activeBoard is empty in the store
        return this.$store.state.activeBoard;
      }
    },
    methods: {
      addList() {
        this.$store.dispatch("addList", this.newList)
        this.newList = {
          boardId: this.$route.params.boardId
        }
      }
    },
    components: {
      List
    }


  };
</script>