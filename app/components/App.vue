<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout columns="*" rows="*">
            <StackLayout>
                <StackLayout>
                    <TextField v-model="email" hint="Email"/>
                    <TextField v-model="password" hint="Password"/>
                    <Button text="Connexion" @tap="signin"></Button>
                    *
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

                <Button row="2" class="btn btn-primary btn-rounded-sm" text="back camera, with flip" @tap="doScanWithBackCamera"></Button>

            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
    import * as geoLocation from "nativescript-geolocation";
    import * as camera from "nativescript-camera";
    import firebase from "nativescript-plugin-firebase";
    import {BarcodeScanner} from "nativescript-barcodescanner";

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
            firebase.init({
                showNotificationsWhenInForeground: true,
                onMessageReceivedCallback(message) {
                    console.log("Title: " + message.title);
                    console.log("Body: " + message.body);
                    // if your server passed a custom property called 'foo', then do this:
                    console.log("Value of 'foo': " + message.data.foo);
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
            },
            onScanResult(evt) {
                console.log(`onScanResult: ${evt.text} (${evt.format})`);
            },
            doScanWithBackCamera() {
                this.scan(false);
            },
            scan(front) {
                new BarcodeScanner().scan({
                    cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
                    cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
                    message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
                    preferFrontCamera: front,     // Android only, default false
                    showFlipCameraButton: true,   // default false
                    showTorchButton: true,        // iOS only, default false
                    torchOn: false,               // launch with the flashlight on (default false)
                    resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
                    beepOnScan: true,             // Play or Suppress beep on scan (default true)
                    openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied
                    closeCallback: () => {
                        console.log("Scanner closed @ " + new Date().getTime());
                    }
                }).then(
                    function (result) {
                        console.log("--- scanned: " + result.text);
                    },
                    function (errorMessage) {
                        console.log("No scan. " + errorMessage);
                    }
                );
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
