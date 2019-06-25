<template>
    <StackLayout orientation="horizontal">
        <SearchBar width="80%" hint="Rechercher" :visibility="searchBarVisibility ? 'visible': 'hidden'" textFieldHintColor="#164194"/>
        <BarCode/>
    </StackLayout>
</template>

<script>
    import BarCode from "../../../Features/BarCode";
    export default {
        name: "BarSearch",
        components: {BarCode},
        data() {
            return {
                searchBarVisibility: false
            }
        },
        created() {
        },
        mounted() {
            this.searchBarVisibility = true;
        }
    }
</script>

<style scoped>
    SearchBar {
        border-color: #164194;
        border-width: 1px;
    }
</style>