<template>
    <div class="lists-component">
        <div>
            <form @submit.prevent="addList">
                <input type="text" placeholder="title" v-model="newList.title" required />
                <button type="submit">Create List</button>
            </form>
        </div>
        <list v-for="list in lists" :key="list.id" :list="list" />
    </div>
</template>


<script>
    import List from "@/components/ListComponent.vue"
    export default {
        name: 'Lists',
        mounted() {
            this.$store.dispatch("getLists", this.$route.params.boardId)
        },
        data() {
            return {
                newList: {
                    boardId: this.$route.params.boardId
                }

            }
        },
        computed: {
            lists() {
                return this.$store.state.lists
            }
        },
        methods: {
            addList() {
                this.$store.dispatch("addList", this.newList)
                this.newList = {}
                this.$store.dispatch("getLists", this.$route.params.boardId)
            }
        },
        components: {
            List
        }
    }
</script>


<style scoped>

</style>