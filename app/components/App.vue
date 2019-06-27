<template>
    <Page v-if="everOpen === true">
        <TopMenu/>
        <GridLayout columns="*" rows="*">
            <StackLayout marginBottom="60">
                <Home v-if="currentPage === 'home'"/>
                <Search v-if="currentPage === 'search'"/>
                <SubCategories v-if="currentPage === 'subCategories'"/>
                <ProductList v-if="currentPage === 'productList'"/>
                <Shop v-if="currentPage === 'shop'"/>
                <ShopFeature v-if="currentPage === 'shopFeatures'"/>
                <Account v-if="currentPage === 'account'"/>
                <Product v-if="currentPage === 'product'"/>
                <Cart v-if="currentPage === 'cart'"/>
                <Favoris v-if="currentPage === 'favoris'"/>
                <HelpSeller v-if="currentPage === 'helpSeller'"/>
                <Delivery v-if="currentPage === 'livraison'"/>
                <Paiement v-if="currentPage === 'paiement'"/>
                <Confirm v-if="currentPage === 'confirmpay'"/>
            </StackLayout>
            <BottomMenu/>
        </GridLayout>
    </Page>
    <Page actionBarHidden="true" v-else>
        <TopMenu/>
        <GridLayout columns="*" rows="*">
            <Opening v-if="currentPage !== 'onBoardingAction'"/>
            <OpeningAction v-else/>
        </GridLayout>
    </Page>
</template>

<script>
    import firebase from "nativescript-plugin-firebase";
    import TopMenu from "./Menu/TopMenu";
    import BarCode from "./Features/BarCode";
    import BottomMenu from "./Menu/BottomMenu";
    import Home from "./Pages/Home/Home";
    import Feature from "./Feature";
    import Shop from "./Pages/Shop/Shop";
    import ShopFeature from "./Pages/Shop/ShopFeatures";
    import Search from "./Pages/Search/Search";
    import Account from "./Pages/Account/Account";
    import SubCategories from "./Pages/Search/SubCategories";
    import ProductList from "./Pages/Search/ProductList";
    import Opening from "./Pages/Opening/Opening";
    import OpeningAction from "./Pages/Opening/OpeningAction";
    import Product from "./Pages/Product/Product";
    import Cart from "./Pages/Pay/Cart";
    import Favoris from "./Pages/Favoris/Favoris";
    import HelpSeller from "./Pages/Shop/Components/HelpSeller";
    import Delivery from "./Pages/Pay/Delivery";
    import Paiement from "./Pages/Pay/Paiement";
    import Confirm from "./Pages/Pay/Confirm";


    export default {
        components: {
            Confirm,
            Paiement,
            HelpSeller,
            Delivery,
            Favoris,
            Cart,
            OpeningAction,
            Opening,
            Product,
            ProductList,
            SubCategories, Account, Search, ShopFeature, Shop, Feature, Home, BottomMenu, BarCode, TopMenu
        },
        data() {
            return {
                email: null,
                password: null,
            }
        },
        created() {
            let self = this;
            firebase.init({
                showNotificationsWhenInForeground: true,
                onMessageReceivedCallback(message) {
                    console.log("Title: " + message.title);
                    console.log("Body: " + message.body);
                    // if your server passed a custom property called 'foo', then do this:
                    console.log("Value of 'foo': " + message.data.foo);
                },
                onAuthStateChanged(data) {
                    if (data.loggedIn) {
                        console.log('user add store');
                        self.$store.commit('setUser', data.user);
                    } else {
                        console.log('user remove store');
                        self.$store.commit('setUser', null);
                    }
                },
                persist: true
            }).then((instance) => {
                console.log("[*] Firebase was successfully initialised");
            }, (error) => {
                console.log("[*] Huston we've an initializationerror: " + error);
            });
        },
        methods: {},
        computed: {
            currentPage() {
                return this.$store.state.currentPage;
            },
            everOpen() {
                return this.$store.state.isEverOpen;
            }
        }
    }
</script>

<style scoped>
    Page {
        font-family: OpenSans-Regular;
        background-color: #FAFAFA;
    }
</style>
