<template>
    <div>
        <li>
            {{comment.description}}
        </li>
    </div>
</template>


<script>
    export default {
        name: 'comment',
        props: ['comment']

    }
</script>


<style scoped>

</style>