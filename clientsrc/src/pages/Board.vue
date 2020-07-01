<template>
<div class="container-fluid">

  <div class="row justify-content-center">
    <div class="col-6">

      <div class="board">
        <h1>{{ board.title }}</h1>
        <h5>{{ board.description }}</h5>
        <div class="lists-component">
          <div>
    </div>
  </div>
    </div>
            <form @submit.prevent="addList" >
              <input class="form-control mx-auto" type="text" placeholder="title" v-model="newList.title" required style="width: 75%" />
              <button type="submit" class="btn btn-dark shadow mt-2">Create List</button>
            </form>
  </div>
      </div>

  <div class="row"> 
            <list v-for="list in lists" :key="list.id" :list="list" />
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
      },

    },
    components: {
      List
    }


  };
</script>