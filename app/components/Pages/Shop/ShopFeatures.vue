<template>
    <ScrollView>
        <StackLayout>
            <Label :text="'Bienvenue dans votre ' + currentShop.name + ' !' " textAlignment="center" class="title"
                   textWrap="true"/>
            <FlexboxLayout flexWrap="wrap" justifyContent="center" marginTop="30">
                <BarCode/>
                <FlexboxLayout backgroundColor="white" width="169" height="169" justifyContent="center"
                               flexDirection="column" flexWrap="wrap" class="default-margin">
                    <SvgImage src="~/assets/images/shop/img/magasin_promo.svg" height="80"/>
                    <Label text="Les promotions actuelles" class="subtitle" textWrap="true"/>
                </FlexboxLayout>
                <FlexboxLayout backgroundColor="white" width="169" height="169" justifyContent="center"
                               flexDirection="column" flexWrap="wrap" class="default-margin">
                    <SvgImage src="~/assets/images/shop/img/magasin_stock.svg" height="80"/>
                    <Label text="Vérifier les stocks" class="subtitle" textWrap="true"/>
                </FlexboxLayout>

                <FlexboxLayout backgroundColor="white" width="169" height="169" justifyContent="center"
                               flexDirection="column" flexWrap="wrap" class="default-margin" @tap="changePage()">
                    <SvgImage src="~/assets/images/shop/img/magasin_info.svg" height="80"/>
                    <Label text="Je demande de l'aide à un vendeur" class="subtitle" textWrap="true"/>
                </FlexboxLayout>
                <FlexboxLayout backgroundColor="white" width="90%" height="200" justifyContent="center"
                               flexDirection="column" flexWrap="wrap" class="default-margin">
                    <SvgImage src="~/assets/images/shop/img/magasin_panierinteractif.svg" height="80"/>
                    <Label text="J'ajoute des produits à mon panier virtuel" class="bottom-subtitle" textWrap="true"/>
                </FlexboxLayout>
            </FlexboxLayout>
        </StackLayout>
    </ScrollView>
</template>

<script>
    import BarCode from "../../Features/BarCode";

    export default {
        name: "ShopFeature",
        components: {BarCode},
        methods: {
            changePage() {
                this.$store.commit('setCurrentPage', 'helpSeller');
                this.$store.commit('addToHistory', 'helpSeller');
            },
        },
        computed: {
            currentPage() {
                return this.$store.state.currentPage;
            },
            currentShop() {
                return this.$store.state.currentShop;
            }
        }
    }
</script>

<style scoped>
    Label {
        color: #164194;
        font-size: 20;
        text-align: center;
        font-weight: 600;
    }

    .title {
        margin: 10 70 10 70;

    }

    .subtitle {
        font-size: 17;
        margin: 10 9;
    }

    .default-margin {
        margin: 0 9 20 9;
    }

    .bottom-subtitle {
        font-size: 17;
        margin: 10 90;
    }
</style>