<template>
    <StackLayout>
        <FlexboxLayout v-for="product in favorisProduct" justifyContent="center" backgroundColor="white" paddingLeft="50px" paddingRight="30px"
                       paddingTop="40px" paddingBottom="40px">
            <Image :src="product.img" width="40%" height="100px"/>
            <StackLayout marginLeft="50px">
                <FlexboxLayout>
                    <Label :text="product.brand + '- '" class="brand"/>
                    <Label :text="product.name" class="name"/>
                </FlexboxLayout>
                <Label :text="product.price" class="price"/>
                <Label :text="product.color" class="infos"/>
                <FlexboxLayout justifyContent="space-between" marginTop="25px">
                    <Label text="Ajouter au panier" horizontalAlignment="center" class="edit" @tap="addToCart(product)"
                           width="55%" textWrap="false" textAlignment="center"/>
                    <Label text="Supprimer" horizontalAlignment="center" class="delete" @tap="remove(product.id)" width="40%"
                           textAlignment="center"/>
                </FlexboxLayout>
            </StackLayout>
        </FlexboxLayout>
    </StackLayout>
</template>

<script>
    export default {
        name: "Favoris",
        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', 'Mes favoris');
        },
        methods: {
            addToCart(id) {
                let productCart = this.$store.state.cart;
                if (productCart.includes(id)) {
                    productCart.splice(productCart.indexOf(id), 1)
                } else {
                    productCart.push(id);
                }
                this.$store.commit('addCart', productCart);
                this.$store.commit('addProductCart');
            },
            remove(id) {
                let favorisNew = this.$store.state.favoris;
                if (favorisNew.includes(id)) {
                    favorisNew.splice(favorisNew.indexOf(id), 1)
                }
                this.$store.commit('addFavoris', favorisNew);
            }
        },
        computed: {
            favoris() {
                return this.$store.state.favoris;
            },
            products() {
                return this.$store.state.productList;

            },
            favorisProduct() {
                return this.$store.state.productList.filter(product => this.$store.state.favoris.includes(product.id))
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
        font-size: 20px;
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