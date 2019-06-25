<template>
    <GridLayout rows="*,60">
        <FlexboxLayout row="1" orientation="horizontal" class="divider" height="60" alignItems="center">
            <StackLayout width="20%" @tap="changePage('home')">
                <SvgImage v-if="currentPage === 'home'" src="~/assets/icons/goods/home-bleu.svg" width="40"
                          height="25"/>
                <SvgImage v-else src="~/assets/icons/goods/home.svg" height="25"/>
                <Label text="Accueil" width="100%" textAlignment="center" fontSize="10"
                       :color="currentPage === 'home' ? '#164194' : ''"/>
            </StackLayout>
            <StackLayout width="20%" @tap="changePage('search')">
                <SvgImage v-if="currentPage === 'search'" src="~/assets/icons/goods/recherche-bleu.svg"/>
                <SvgImage v-else src="~/assets/icons/goods/recherche.svg" height="25"/>
                <Label text="Rechercher" width="100%" textAlignment="center" fontSize="10"
                       :color="currentPage === 'search' ? '#164194' : ''"/>
            </StackLayout>

            <StackLayout width="20%" @tap="changePage('shop')">
                <SVGImage v-if="currentPage === 'shop'" src="~/assets/icons/goods/magasin-bleu.svg"
                          height="25"/>
                <SVGImage v-else src="~/assets/icons/goods/magasin.svg" height="25"/>
                <Label text="Magasin" width="100%" textAlignment="center" fontSize="10" :color="currentPage === 'shop' ? '#164194' : ''"/>
            </StackLayout>
            <StackLayout width="20%" @tap="changePage('shop')">
                <SVGImage v-if="currentPage === 'favoris'" src="~/assets/icons/goods/favoris-bleu.svg" height="25"/>
                <SVGImage v-else src="~/assets/icons/goods/favoris.svg" height="25"/>
                <Label text="Favoris" width="100%" textAlignment="center" fontSize="10" :color="currentPage === 'favoris' ? '#164194' : ''"/>
            </StackLayout>
            <StackLayout width="20%" @tap="changePage('account')">
                <SVGImage v-if="currentPage === 'home'" src="~/assets/icons/goods/compte-bleu.svg"
                          height="25"/>
                <SVGImage v-else src="~/assets/icons/goods/compte.svg" height="25"/>
                <Label text="Mon compte" width="100%" textAlignment="center" fontSize="10" :color="currentPage === 'account' ? '#164194' : ''"/>

            </StackLayout>
        </FlexboxLayout>
    </GridLayout>
</template>

<script>
    import * as application from "tns-core-modules/application";

    export default {
        name: "BottomMenu",
        created() {
            let self = this;
            application.android.on(application.AndroidApplication.activityBackPressedEvent, (args) => {
                console.log('ici', self.$store.state.currentPage);
                if (self.$store.state.currentPage !== 'home') {
                    args.cancel = true;
                    self.$store.commit('goBackHistory');
                    console.log('la', self.$store.state.currentPage);
                } else {
                    args.cancel = false;
                }
            });
        },
        methods: {
            changePage(page) {
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('addToHistory', page);
            },
            trigger() {
                this.$refs.fileInput.click()
            },
        },
        computed: {
            currentPage() {
                return this.$store.state.currentPage;
            }
        }
    }
</script>

<style scoped>
    .small {
        font-size: 10px;
    }

    .divider {
        border-top-color: whitesmoke;
        border-top-width: 5px;
    }

    .scale {
    }
</style>
