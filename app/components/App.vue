<template>
    <Page>
        <TopMenu/>
        <GridLayout columns="*" rows="*">
            <StackLayout marginBottom="75">
                <Home v-if="currentPage === 'home'"/>
                <Feature v-if="currentPage === 'feature'"/>
            </StackLayout>
            <BottomMenu/>
        </GridLayout>
    </Page>
</template>

<script>
    import firebase from "nativescript-plugin-firebase";
    import TopMenu from "./Menu/TopMenu";
    import BarCode from "./BarCode";
    import BottomMenu from "./Menu/BottomMenu";
    import Home from "./Pages/Home/Home";
    import Feature from "./Feature";


    export default {
        components: {Feature, Home, BottomMenu, BarCode, TopMenu},
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
                        self.$store.commit('setUser', data.user);
                    } else {
                        self.$store.commit('setUser', null);
                    }
                }
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
            }
        }
    }
</script>

<style scoped>

</style>
