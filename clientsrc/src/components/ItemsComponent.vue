<template>
    <div class="item">
        <div>
            <ul class="mb-0 pb-0">
                <li>{{item.title}}
                <i class="fa fa-pencil pointer ml-1" @click="showForm=!showForm"></i>
                <i class=" fa fa-trash text-danger pointer ml-1" @click="removeItem"></i>
                </li>
            </ul>
            <div class="ml-3">
            <comment v-for="comment in comments" :key="comment.id" :comment="comment" />
            </div>
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
            },
             removeItem() {
            this.$store.dispatch("removeItem", this.item)
            }
        },
        computed: {
            comments() {
                return this.$store.state.comments[this.item.id]
            },
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