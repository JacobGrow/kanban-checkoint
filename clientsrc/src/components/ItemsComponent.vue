<template>
    <div class="items-component">
        <div>
            <form @submit.prevent="addItem">
                <input type="text" placeholder="title" v-model="newItem.title" required />
                <button type="submit">Create Item</button>
            </form>
        </div>
        <item v-for="item in items" :key="item.id" :item="item" />
    </div>
</template>


<script>
    import Item from "@/components/ItemComponent.vue"
    export default {
        name: 'Items',
        mounted() {
            this.$store.dispatch("getItems", this.$route.params.listId)
        },
        data() {
            return {
                newItem: {
                    listId: this.$route.params.listId
                }

            }
        },
        computed: {
            items() {
                return this.$store.state.items
            }
        },
        methods: {
            addItem() {
                this.$store.dispatch("addItem", this.newItem)
                this.newItem = {
                    listId: this.$route.params.listId
                }
            },
        },
        components: {
            Item
        }
    }
</script>


<style scoped>

</style>