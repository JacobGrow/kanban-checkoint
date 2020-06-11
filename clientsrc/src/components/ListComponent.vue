<template>
  <div class="col-4">
    <div class="card text-left mt-4">
      <h5 class="text-center m-2">
        {{list.title}}
      </h5>
      <div class="card-body">
        <item v-for="item in items" :key="item.id" :item="item" />
        <div class="text-center">
          <form @submit.prevent="addItem" class="mt-3">
            <input type="text" placeholder="List Item..." v-model="newItem.title">
            <button type="submit">Submit</button>
          </form>
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