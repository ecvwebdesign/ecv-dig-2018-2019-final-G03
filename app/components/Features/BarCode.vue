<template>
    <FlexboxLayout v-if="currentPage !== 'shopFeatures'" justifyContent="space-around" width="20%" @tap="doScanWithBackCamera">
        <SvgImage src="~/assets/icons/goods/flashcode.svg" height="50" width="35"/>
    </FlexboxLayout>
    <FlexboxLayout v-else backgroundColor="white" width="169" height="169" justifyContent="center"
                   flexDirection="column" flexWrap="wrap" class="default-margin" @tap="doScanWithBackCamera">
        <SvgImage src="~/assets/images/shop/img/magasin_scan.svg" height="80"/>
        <Label text="Je scanne mes produits" class="subtitle" textWrap="true"/>
    </FlexboxLayout>
</template>

<script>
    import {BarcodeScanner} from "nativescript-barcodescanner";
    import * as camera from "nativescript-camera";

    export default {
        name: "BarCode",
        created() {
            camera.requestPermissions().then(
                function success() {
                },
                function failure() {
                }
            );
        },
        methods: {
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
                }).then(result => this.changePage('product'),
                    function (errorMessage) {
                        console.log("No scan. " + errorMessage);
                    }
                );
            },
            changePage(page) {
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('addToHistory', page);

            }
        },
        computed: {
            currentPage() {
               return this.$store.state.currentPage;
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
</style>