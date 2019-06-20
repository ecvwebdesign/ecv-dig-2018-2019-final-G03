<template>
    <Button row="2" class="btn btn-primary btn-rounded-sm" text="back camera, with flip"
            @tap="doScanWithBackCamera"></Button>
</template>

<script>
    import {BarcodeScanner} from "nativescript-barcodescanner";
    export default {
        name: "BarCode",
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

</style>