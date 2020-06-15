<template>
    <div>
        <p class="ml-5 pl-3font-italic small">
            {{comment.description}}
        <i class="fa fa-times text-danger pointer ml-1" @click="removeComment"></i>
        </p>
        
    </div>
</template>


<script>
    export default {
        name: 'comment',
        props: ['comment'],
    methods: {
        removeComment() {
            this.$store.dispatch("removeComment", this.comment)
        }
    }

    }


</script>


<style scoped>
    .pointer {
        cursor: pointer;
    }

.small{
    font-size: small;
}
</style>