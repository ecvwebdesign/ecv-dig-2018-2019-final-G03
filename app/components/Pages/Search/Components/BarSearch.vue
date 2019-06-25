<template>
    <StackLayout orientation="horizontal">
        <SearchBar width="80%" hint="Rechercher" :visibility="searchBarVisibility ? 'visible': 'hidden'"/>
        <FlexboxLayout justifyContent="space-around" width="20%">
            <Label text="SearchCode"/>
        </FlexboxLayout>
    </StackLayout>
</template>

<script>
    export default {
        name: "BarSearch",
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

</style>