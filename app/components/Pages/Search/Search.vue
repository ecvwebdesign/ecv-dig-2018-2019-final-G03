<template>
    <StackLayout>
        <BarSearch/>
        <CategoryList/>
    </StackLayout>
</template>

<script>
    import CategoryList from "./Components/CategoriesList";
    import BarSearch from "./Components/BarSearch";

    export default {
        name: "Search",
        components: {BarSearch, CategoryList},
        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', 'Recherche');
        }
    }
</script>

<style scoped>
</style>