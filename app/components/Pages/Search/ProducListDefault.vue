<template>
    <StackLayout>
        <ScrollView class="margin-top">
            <FlexboxLayout justifyContent="space-around" flexWrap="wrap">
                <template v-for="(product) in products">
                    <Image :src="product.img" width="120"/>
                </template>
            </FlexboxLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    export default {
        name: "ProducListDefault",
        computed: {
            products() {
                if (this.searchQuery === '') {
                    return this.$store.state.productList;
                }
                return this.$store.state.productList.filter(product => product.name.toLowerCase().startsWith(this.searchQuery.toLowerCase()));
            },
            searchQuery() {
                return this.$store.state.searchQuery;
            }
        }
    }
</script>

<style scoped>
Image {
    margin-bottom: 45px;
}
</style>