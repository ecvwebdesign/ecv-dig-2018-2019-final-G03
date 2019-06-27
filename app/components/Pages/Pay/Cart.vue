<template>
    <StackLayout>
        <ScrollView>
            <StackLayout backgroundColor="#eeeded">
                <template v-if="nbProductCart > 0">
                    <Image src="~/assets/images/step-panier.png" stretch="aspectFill" height="250px"/>
                    <StackLayout>
                        <FlexboxLayout v-for="product in cartProduct" justifyContent="center" backgroundColor="white"
                                       paddingLeft="50px" paddingRight="30px"
                                       paddingTop="40px" paddingBottom="40px">
                            <Image :src="product.miniature[0]" width="40%" height="100px"/>
                            <StackLayout marginLeft="50px">
                                <FlexboxLayout>
                                    <Label :text="product.brand + ' - '" class="brand"/>
                                    <Label :text="product.name" class="name"/>
                                </FlexboxLayout>
                                <Label :text="product.price" class="price"/>
                                <Label :text="product.color" class="infos"/>
                                <FlexboxLayout justifyContent="space-between" marginTop="10px">
                                    <Label text="Modifier" horizontalAlignment="center" class="edit" @tap="edit"
                                           width="40%"
                                           marginRight="15px" padding="5px" paddingLeft="50px"/>
                                    <Label text="Supprimer" horizontalAlignment="center" class="delete"
                                           @tap="remove(product)"
                                           width="40%"
                                           padding="5px" paddingLeft="50px"/>
                                    <SVGImage src="~/assets/icons/goods/favoris.svg" height="15px" width="10%" marginLeft="20"/>
                                </FlexboxLayout>
                            </StackLayout>
                        </FlexboxLayout>
                        <Image src="~/assets/images/code-promo.png" stretch="aspectFill" height="250px" marginTop="60px"
                               marginBottom="40px"/>
                        <Label text="TOTAL : Price" marginBottom="20px" :color="'black'" fontSize="20px" class="total"
                               paddingLeft="50px" paddingRight="30px"/>
                        <Label text="(TVA incluse / Frais de livraison non inclus)" marginBottom="30px"
                               paddingLeft="50px" paddingRight="30px"/>

                        <Button text="JE VALIDE MON PANIER" class="btn-default" marginBottom="20" marginTop="20"
                                @tap="changepage('livraison')"/>
                    </StackLayout>
                </template>
                <template v-else>
                    <StackLayout verticalAlignment="center" backgroundColor="white">
                        <Label text="Vous n'avez aucun produits " fontSize="25px" :color="'black'" marginTop="200"
                               textAlignment="center"/>
                        <Label text="dans votre panier" fontSize="25px" textAlignment="center" :color="'black'"/>
                    </StackLayout>
                </template>
            </StackLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    export default {
        name: "Cart",

        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', 'MON PANIER');
        },

        methods: {
            edit() {

            },
            remove(id) {
                let cartNew = this.$store.state.cart;
                if (cartNew.includes(id)) {
                    cartNew.splice(cartNew.indexOf(id), 1)
                }
                this.$store.commit('addCart', cartNew);
            },
            changepage(page) {
                if (!this.$store.state.user) {
                    this.$store.commit('setDisplayLogin');
                    this.$store.commit('setCurrentPage', 'account');
                    this.$store.commit('addToHistory', 'account');
                } else {
                    this.$store.commit('setCurrentPage', page);
                    this.$store.commit('addToHistory', page);
                }
            }
        },

        computed: {
            nbProductCart() {
                return this.$store.state.cart.length;
            },
            cartProduct() {
                return this.$store.state.cart;
            }
        }
    }
</script>

<style scoped>
    .brand {
        font-size: 20px;
        color: #164194;
    }

    .name {
        font-size: 20px;
        color: black;
    }

    .price {
        font-size: 18px;
        color: black;
        font-weight: bold;
    }

    .infos {
        font-size: 14px;
        color: black;
    }

    .edit {
        font-size: 14px;
        color: #164194;
        border-width: 1;
        border-color: #164194;
    }

    .delete {
        font-size: 14px;
        color: black;
        border-width: 1;
        border-color: black;
    }

    .theborder {
        border-bottom-width: 2;
        border-bottom-color: black;
        margin-right: 50px;
        margin-left: 50px;
    }

    .total {
        font-weight: bold;
    }

    .btn-default {
        background-color: #164194;
        color: white;
        margin: 0 180px 0 180px;
        width: 250;
    }
</style>
