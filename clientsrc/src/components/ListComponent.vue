<template>
  <div class="col">
    <div class="row">
      <div class="col-4">
        <div class="card text-left">
          <ul>
            {{list.title}}
          </ul>
          <div class="card-body">
            <item v-for="item in items" :key="item.id" :item="item"/>
            <form @submit.prevent="addItem">
              <input type="text" placeholder="List Item..." v-model="newItem.title">
              <button type="submit">Submit</button>
            </form>
        </div>
      </div>
    </div>
  </div>
  </div>

</template>


<script>
  import item from "@/components/ItemsComponent.vue"
  export default {
    name: "List",
    props: ["list"],
    mounted() {
      // this.$store.dispatch("getLists", this.$route.params.boardId)
        this.$store.dispatch("getItems", this.list.id)
    },
    data() {
    return {
      newItem: {
      listId: this.list.id
    }

    }
    },
    methods: {
    addItem() {
    this.$store.dispatch("addItem", this.newItem)
      this.newItem = {
      listId: this.list.id
      }
    },
  },
    computed: {
    items() {
    return this.$store.state.items[this.list.id]
            }
    },
    components: {
      item
    }
  }

</script>