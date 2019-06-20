<template>
    <Label text="HOME"/>
</template>

<script>
    export default {
        name: "Home",
        created() {
            this.$store.commit('setHeader', false)
        }
    }
</script>

<style scoped>

</style>