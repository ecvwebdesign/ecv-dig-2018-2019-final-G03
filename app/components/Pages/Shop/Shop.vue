<template>
    <TabView selectedTabTextColor="#164194">
        <TabViewItem title="Liste">
            <ListShop/>
        </TabViewItem>
        <TabViewItem title="Cartes">
            <ScrollView>
                <Label text="MAP"/>
            </ScrollView>
        </TabViewItem>
    </TabView>
</template>

<script>
    import ListShop from "./Components/ListShop";

    export default {
        name: "Shop",
        components: {ListShop},
        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', 'Mon magasin');
        }
    }
</script>

<style scoped>

</style>