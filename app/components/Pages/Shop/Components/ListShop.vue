<template>
    <StackLayout>
        <Label text="first" height="85" backgroundColor="#43b883" @tap="changePage('shopFeatures', 1)"/>
        <Label text="second" height="85" backgroundColor="#289062"/>
        <Label text="first" height="85" backgroundColor="#43b883"/>
        <Label text="second" height="85" backgroundColor="#289062"/>
        <Label text="first" height="85" backgroundColor="#43b883"/>
        <Label text="second" height="85" backgroundColor="#289062"/>
        <Label text="first" height="85" backgroundColor="#43b883"/>
        <Label text="second" height="85" backgroundColor="#289062"/>
        <Label text="first" height="85" backgroundColor="#43b883"/>
        <Label text="second" height="85" backgroundColor="#289062"/>
        <Label text="first" height="85" backgroundColor="#43b883"/>
        <Label text="second" height="85" backgroundColor="#289062"/>
        <Label text="first" height="85" backgroundColor="#43b883"/>
        <Label text="second" height="85" backgroundColor="#289062"/>
    </StackLayout>
</template>

<script>
    export default {
        name: "ListShop",
        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', 'Mon magasin');
        },
        methods: {
            changePage(page, id) {
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('setCurrentShop', id);
            }
        },
    }
</script>

<style scoped>

</style>