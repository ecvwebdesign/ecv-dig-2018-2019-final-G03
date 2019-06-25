<template>
    <StackLayout>
        <ScrollView class="margin-top">
            <FlexboxLayout flexDirection="column" justifyContent="space-around">
                <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                    <Label text="Produit" width="40%" height="180" backgroundColor="#43b883" @tap="changePage('product')"/>
                    <Label text="Produit" width="40%" height="180" backgroundColor="#43b883" @tap="changePage('product')"/>
                </FlexboxLayout>

                <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                    <Label text="Produit" width="40%" height="180" backgroundColor="#43b883" @tap="changePage('product')"/>
                    <Label text="Produit" width="40%" height="180" backgroundColor="#43b883" @tap="changePage('product')"/>
                </FlexboxLayout>

                <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                    <Label text="Produit" width="40%" height="180" backgroundColor="#43b883" @tap="changePage('product')"/>
                    <Label text="Produit" width="40%" height="180" backgroundColor="#43b883" @tap="changePage('product')"/>
                </FlexboxLayout>

                <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                    <Label text="Produit" width="40%" height="180" backgroundColor="#43b883" @tap="changePage('product')"/>
                    <Label text="Produit" width="40%" height="180" backgroundColor="#43b883" @tap="changePage('product')"/>
                </FlexboxLayout>

                <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                    <Label text="Produit" width="40%" height="180" backgroundColor="#43b883" @tap="changePage('product')"/>
                    <Label text="Produit" width="40%" height="180" backgroundColor="#43b883" @tap="changePage('product')"/>
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

            // for(let magasin in data.Magasins) {
            //     this.products = Object.assign(this.products, data.Magasins[magasin].Products);
            // }
            //
            // this.products = Object.values(this.products);
            //
            // console.log(this.products);

            // let self = this;
            // firebase.getValue('/Magasins/3/Products/')
            //     .then(result => {
            //         self.products = result.value;
            //         firebase.getValue('/Magasins/4/Products/')
            //             .then(result => {
            //                 self.products = Object.assign(self.products, result.value);
            //                 firebase.getValue('/Magasins/5/Products/')
            //                     .then(result => {
            //                         self.products = Object.assign(self.products, result.value);
            //                     })
            //                     .catch(error => console.log("Error: " + error));
            //             })
            //             .catch(error => console.log("Error: " + error));
            //     })
            //     .catch(error => console.log("Error: " + error));
        },
        methods: {
            changePage(page) {
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('addToHistory', page);
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
