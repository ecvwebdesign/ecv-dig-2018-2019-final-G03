<template>
    <StackLayout>
        <ScrollView class="margin-top">
            <FlexboxLayout flexDirection="column" justifyContent="space-around">
                <FlexboxLayout flexDirection="column" justifyContent="space-around">
                    <template v-for="(product, key, index) in products">
                        <FlexboxLayout v-if="index % 2 === 0" justifyContent="space-around" width="100%" class="margin-top">
                            <Label v-for="(product2, key2, index2) in products" v-if="index2 === index || index2 === index + 1"
                                   :text="product2.name" width="40%" height="180" backgroundColor="#43b883" @tap="changePage('product', key2)"/>
                        </FlexboxLayout>
                    </template>
                </FlexboxLayout>
            </FlexboxLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    import firebase from "nativescript-plugin-firebase";

    export default {
        name: "ProductList",

        data() {
            return {
                products: [],
            }
        },

        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', this.currentSubCategory.name);

            let self = this;
            firebase.getValue('/Magasins/3/Products/')
                .then(result => {
                    self.products = result.value;
                    firebase.getValue('/Magasins/4/Products/')
                        .then(result => {
                            self.products = Object.assign(self.products, result.value);
                            firebase.getValue('/Magasins/5/Products/')
                                .then(result => {
                                    self.products = Object.assign(self.products, result.value);
                                })
                                .catch(error => console.log("Error: " + error));
                        })
                        .catch(error => console.log("Error: " + error));
                })
                .catch(error => console.log("Error: " + error));
        },
        methods: {
            changePage(page, product) {
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('addToHistory', page);
                this.$store.commit('setCurrentProduct', product);
            }
        },

        computed: {
            currentCategory() {
                return this.$store.state.categoryLabels[this.$store.state.currentCategory];
            },
            currentSubCategory() {
                return this.currentCategory.subCategoryLabels[this.$store.state.currentSubCategory];
            },
        },
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
