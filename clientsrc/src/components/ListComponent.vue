<template>
  <div class="col">
    <div class="row">
      <div class="col-4">
        <ul>
          {{list.title}}
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "List",
    props: ["list"],
    mounted() {
      // this.$store.dispatch("getLists", this.$route.params.boardId)
    }

  }
</script>