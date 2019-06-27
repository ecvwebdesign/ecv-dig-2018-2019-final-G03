<template>
    <StackLayout>
        <ScrollView class="margin-top">
            <FlexboxLayout justifyContent="space-around" flexWrap="wrap">
                <template v-for="(product) in products">
                    <Image v-if="product.id > 6" :src="product.img" width="169" @tap="changePage('product', product)"/>
                </template>
            </FlexboxLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    import firebase from "nativescript-plugin-firebase";

    export default {
        name: "ProductList",
        methods: {
            changePage(page, product) {
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('addToHistory', page);
                this.$store.commit('setCurrentProduct', product);
            }
        },
        computed: {
            products() {
                return this.$store.state.productList;
            },
        }
    }
</script>

<style scoped>
    .margin-bot {
        margin-bottom: 50px;
    }

    .margin-top {
        margin-top: 50px;
    }
</style>
