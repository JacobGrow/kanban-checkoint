<template>
    <div class="item">
        <div>
    <!-- <li>List Item</li> -->
    <li> {{item.title}} </li>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'item',
        props: ["item"],

    }
</script>


<style scoped>

</style>