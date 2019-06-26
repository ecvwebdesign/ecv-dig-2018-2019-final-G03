<template>

</template>

<script>
    export default {
        name: "Cart",

        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', 'MON PANIER');
        },
    }
</script>

<style scoped>

</style>
