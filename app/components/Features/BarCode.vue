<template>

    <FlexboxLayout v-if="currentPage === 'shopFeatures'" backgroundColor="white" width="169" height="169"
                   justifyContent="center"
                   flexDirection="column" flexWrap="wrap" class="default-margin" @tap="doScanWithBackCamera">
        <SvgImage src="~/assets/images/shop/img/magasin_scan.svg" height="80"/>
        <Label text="Je scanne mes produits" class="subtitle" textWrap="true"/>
    </FlexboxLayout>
    <Button v-else-if="currentPage === 'helpSeller'" text="Je scanne le QR code" @tap="doScanWithBackCameraForNotif" class="btn btn-primary" width="330"/>

    <FlexboxLayout v-else justifyContent="space-around" width="20%"
                   @tap="doScanWithBackCamera">
        <SvgImage src="~/assets/icons/goods/flashcode.svg" height="50" width="35"/>
    </FlexboxLayout>
</template>

<script>
    import {BarcodeScanner} from "nativescript-barcodescanner";
    import * as camera from "nativescript-camera";
    import { messaging, Message } from "nativescript-plugin-firebase/messaging";


    export default {
        name: "BarCode",
        created() {
            camera.requestPermissions().then(
                function success() {
                },
                function failure() {
                }
            );
            messaging.registerForPushNotifications({
                onPushTokenReceivedCallback: (token) => {
                    console.log("Firebase plugin received a push token: " + token);
                },

                onMessageReceivedCallback: (message) => {
                    console.log("Push message received: " + message.title);
                },

                // Whether you want this plugin to automatically display the notifications or just notify the callback. Currently used on iOS only. Default true.
                showNotifications: true,

                // Whether you want this plugin to always handle the notifications when the app is in foreground. Currently used on iOS only. Default false.
                showNotificationsWhenInForeground: true
            }).then(() => console.log("Registered for push"));
        },
        methods: {
            onScanResult(evt) {
                console.log(`onScanResult: ${evt.text} (${evt.format})`);
            },
            doScanWithBackCamera() {
                this.scanProduct(false);
            },
            doScanWithBackCameraForNotif() {
                this.scanProductForNotif(false);
            },
            scanProduct(front) {
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
                }).then(result => this.changePage('product', this.product),
                    function (errorMessage) {
                        console.log("No scan. " + errorMessage);
                    }
                );
            },
            scanProductForNotif(front) {
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
                }).then(result => alert('Your message'),
                    function (errorMessage) {
                        console.log("No scan. " + errorMessage);
                    }
                );
            },
            changePage(page, product) {
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('addToHistory', page);
                this.$store.commit('setCurrentProduct', product);
            }
        },
        computed: {
            currentPage() {
                return this.$store.state.currentPage;
            },
            product() {
                return this.$store.state.productBarcode
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

    .subtitle {
        font-size: 17;
        margin: 10 9;
    }
    .btn-primary {
        height: 50;
        background-color: #164194;
        border-radius: 5;
        font-size: 20;
        font-weight: normal;
        text-transform: none;
        text-transform: uppercase;
        margin: 100px 70px 10px 70px;

    }
</style>