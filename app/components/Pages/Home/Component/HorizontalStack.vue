<template>
    <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false" height="350">
        <StackLayout orientation="horizontal">
            <StackLayout v-for="product in products" :backgroundImage="product.img" width="169"
                         @tap="addFavoris(product.id)">
                <SvgImage
                        :src="favoris.includes(product.id) !== true ? '~/assets/images/home/news/accueil_coeurvide.svg' : '~/assets/images/home/news/accueil_coeurplein.svg'"
                        height="25" class="alignLike"/>
            </StackLayout>
        </StackLayout>
    </ScrollView>
</template>

<script>
    export default {
        name: "HorizontalStack",
        created() {
            console.log(this.$store.state.favoris);
        },
        methods: {
            addFavoris(id) {
                let favorisNew = this.$store.state.favoris;
                if (favorisNew.includes(id)) {
                    favorisNew.splice(favorisNew.indexOf(id), 1)
                } else {
                    favorisNew.push(id);
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

            }
        }
    }
</script>

<style scoped>
    Image {
        margin: 20px -10px 70px 50px;
    }

    StackLayout {
        background-repeat: no-repeat;
        background-size: contain;
        margin: 20px 35px 70px 25px;
    }

    .alignLike {
        margin: 50px 0 0 100;
    }

    /*Ajouter un margin right au last*/
</style>