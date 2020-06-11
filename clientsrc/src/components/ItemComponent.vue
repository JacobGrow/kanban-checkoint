<template>
    <div class="col">
        <div class="row">
            <div class="col-4">
                <div class="card text-left">
                    <ul>
                        {{item.title}}
                    </ul>
                    <div class="card-body">

                    </div>
                </div>
            </div>
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