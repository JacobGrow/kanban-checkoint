<template>
  <div class="col-3">
    <div class="card shadow text-left mt-4">
      <h5 class="text-center m-2">
        {{list.title}}
      <i class="fa fa-times fa-xs float-right text-danger pointer" @click="removeList"></i>
      </h5>
      <div class="card-body">
        <item v-for="item in items" :key="item.id" :item="item" />
        <div class="text-center">
          <form @submit.prevent="addItem" class="mt-3 form-inline">
            <input class="form-control" type="text" placeholder="List Item..." v-model="newItem.title" style="width: 72%">
            <!-- <i class="fa fa-plus-circle"> </i> -->
            <button type="submit" class="btn btn-outline-success ml-1 float-right">Submit</button>
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
      removeList() {
        this.$store.dispatch("removeList", this.list)
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
<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>