<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout columns="*" rows="*">
            <StackLayout>
                <StackLayout>
                    <TextField v-model="email" hint="Email"/>
                    <TextField v-model="password" hint="Password"/>
                    <Button text="Connexion" @tap="signin"></Button>*
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

            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
    import * as geoLocation from "nativescript-geolocation";
    import * as camera from "nativescript-camera";
    import firebase from "nativescript-plugin-firebase";

    export default {
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
            firebase.init({}).then((instance) => {
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
            openCamera() {
                camera.takePicture()
                    .then(function (imageAsset) {
                        console.log("Result is an image asset instance");
                        var image = new imageModule.Image();
                        image.src = imageAsset;
                    }).catch(function (err) {
                    console.log("Error -> " + err.message);
                });
            },
            showLocation: function () {
                geoLocation.watchLocation(location => {
                    this.currentGeoLocation = location;
                }, error => {
                    alert(error);
                }, {
                    desiredAccuracy: 3,
                    updateDistance: 10,
                    minimumUpdateTime: 1000 * 1
                });
            }, enableLocationServices: function () {
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
                }).then(
                    function (user) {
                    console.log(user);
                    },
                    function (errorMessage) {
                    console.log(errorMessage)
                    }
                );
            },
            logout() {
                firebase.logout();
            }
        }
    }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
