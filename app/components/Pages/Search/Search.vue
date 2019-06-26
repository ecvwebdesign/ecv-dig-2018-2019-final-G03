<template>
    <StackLayout>
        <BarSearch/>
        <ProducListDefault v-if="searchQuery !== ''"/>
        <CategoryList v-else/>
    </StackLayout>
</template>

<script>
    import CategoryList from "./Components/CategoriesList";
    import BarSearch from "./Components/BarSearch";
    import BarCode from "../../Features/BarCode";
    import ProducListDefault from "./ProducListDefault";

    export default {
        name: "Search",
        components: {ProducListDefault, BarCode, BarSearch, CategoryList},
        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', 'Recherche');
        },
        computed: {
            searchQuery() {
                return this.$store.state.searchQuery;
            }
        }
    }
</script>

<style scoped>
</style>
