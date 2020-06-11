<template>
  <div class="col">
    <div class="row">
      <div class="col-4">
        <div class="card text-left">
          <ul>
            {{list.title}}
          </ul>
          <div class="card-body">
            <items />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
  import items from "@/components/ItemsComponent.vue"
  export default {
    name: "List",
    props: ["list"],
    mounted() {
      // this.$store.dispatch("getLists", this.$route.params.boardId)
    },
    components: {
      items
    }
  }

</script>