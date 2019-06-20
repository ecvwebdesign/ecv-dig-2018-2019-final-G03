<template>
    <Page>
        <TopMenu/>
        <GridLayout columns="*" rows="*">
            <StackLayout>
                <StackLayout class="border">
                    <TextField v-model="email" hint="Email"/>
                    <TextField v-model="password" hint="Password"/>
                    <Button text="Connexion" @tap="signin"></Button>
                </StackLayout>
                <StackLayout>
                    <TextField v-model="email" hint="Email"/>
                    <TextField v-model="password" hint="Password"/>
                    <Button text="Register" @tap="register"></Button>
                </StackLayout>
                <Button text="Google Sign-in" @tap="signinWithGoogle"></Button>
                <Button text="Facebook Sign-in" @tap="signinWithFacebook"></Button>
                <Button text="Show location" @tap="enableLocationServices"
                        :visibility="currentGeoLocation.latitude ? 'collapsed' : 'visible'"/>
                <Button text="Open Camera" @tap="openCamera"/>
                <StackLayout :visibility="currentGeoLocation.latitude ? 'visible' : 'collapsed'">
                    <Label :text="'Latitude: ' + currentGeoLocation.latitude"/>
                    <Label :text="'Longitude: ' + currentGeoLocation.longitude"/>
                    <Label :text="'Altitude: ' + currentGeoLocation.altitude"/>
                    <Label :text="'Direction: ' + currentGeoLocation.direction"/>
                </StackLayout>
                <Button text="log out" @tap="logout"></Button>
                <BarCode/>
                <Home v-if="currentPage('home')"/>
            </StackLayout>
            <BottomMenu/>
        </GridLayout>
    </Page>
</template>

<script>
    import * as geoLocation from "nativescript-geolocation";
    import * as camera from "nativescript-camera";
    import firebase from "nativescript-plugin-firebase";
    import TopMenu from "./Menu/TopMenu";
    import BarCode from "./BarCode";
    import BottomMenu from "./Menu/BottomMenu";
    import Home from "./Pages/Home";
    import * as application from "tns-core-modules/application";


    export default {
        components: {Home, BottomMenu, BarCode, TopMenu},
        data() {
            return {
                currentGeoLocation: {
                    latitude: null,
                    longitude: null,
                    altitude: null,
                    direction: null
                },
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
            camera.requestPermissions().then(
                function success() {
// permission request accepted or already granted
// ... call camera.takePicture here ...
                },
                function failure() {
// permission request rejected
// ... tell the user ...
                }
            );
        },
        methods: {
            currentPage(page) {
                return this.$store.state.currentPage === page;
            },
            openCamera() {
                camera.takePicture()
                    .then((imageAsset) => {
                        console.log("Result is an image asset instance");
                        var image = new imageModule.Image();
                        image.src = imageAsset;
                    }).catch((err) => {
                    console.log("Error -> " + err.message);
                });
            },
            showLocation() {
                geoLocation.watchLocation(location => {
                    this.currentGeoLocation = location;
                }, error => {
                    alert(error);
                }, {
                    desiredAccuracy: 3,
                    updateDistance: 10,
                    minimumUpdateTime: 1000 * 1
                });
            }, enableLocationServices() {
                geoLocation.isEnabled().then(enabled => {
                    if (!enabled) {
                        geoLocation.enableLocationRequest().then(() => this.showLocation());
                    } else {
                        this.showLocation();
                    }
                    console.log(this.currentGeoLocation);
                });
            },
            signin() {
                firebase.login({
                    type: firebase.LoginType.PASSWORD,
                    passwordOptions: {
                        email: this.email,
                        password: this.password
                    }
                }).then((result) => {
                    console.log("[*] Email/Pass Response : " + JSON.stringify(result));
                }, (error) => {
                    console.log("[*] Email/Pass Error : " + error);
                });
            },
            signinWithGoogle() {
                firebase.login({
                    type: firebase.LoginType.GOOGLE,
                }).then((result) => {
                    console.log("[*] Google Auth Response: " + JSON.stringify(result));
                }, (errorMessage) => {
                    console.log("[*] Google Auth Error: " + errorMessage);
                });
            },
            signinWithFacebook() {
                firebase.login({
                    type: firebase.LoginType.FACEBOOK,
                }).then((result) => {
                    console.log("[*] Google Auth Response: " + JSON.stringify(result));
                }, (errorMessage) => {
                    console.log("[*] Google Auth Error: " + errorMessage);
                });
            },
            register() {
                firebase.createUser({
                    email: this.email,
                    password: this.password
                }).then((user) => {
                        console.log(user);
                    },
                    (errorMessage) => {
                        console.log(errorMessage)
                    }
                );
            },
            logout() {
                firebase.logout();
            }
        },
        computed: {

        }
    }
</script>

<style scoped>

</style>
