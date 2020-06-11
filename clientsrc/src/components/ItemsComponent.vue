<template>
    <div class="item">
        <div>
            <ul class="mb-0 pb-0">
                <li class="pointer" @click="showForm=!showForm">{{item.title}}</li>
            </ul>
            <comment v-for="comment in comments" :key="comment.id" :comment="comment" />
            <form action="" v-if="showForm" @submit.prevent="addComment">
                <input type="text" class="mt-0 pt-0 mb-1" placeholder="Enter Comment..."
                    v-model="newComment.description">
                <button type="submit">Submit
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    import comment from '@/components/CommentComponent.vue'
    export default {
        name: 'item',
        props: ["item"],
        mounted() {
            this.$store.dispatch("getComments", this.item.id)
        },
        data() {
            return {
                newComment: {
                    itemId: this.item.id
                },
                showForm: false
            }
        },
        methods: {
            addComment() {
                this.$store.dispatch("addComment", this.newComment)
                this.newComment = {
                    itemId: this.item.id
                }
            }
        },
        computed: {
            comments() {
                return this.$store.state.comments[this.item.id]
            }
        },
        components: {
            comment
        }

    }
</script>


<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>