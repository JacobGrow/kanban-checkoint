<template>
  <div class="col">
    <div class="row">
      <div class="col-4">
      <ul>
        {{ list.title }}
      </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "list-component",
  props: ["list"]
}
</script>