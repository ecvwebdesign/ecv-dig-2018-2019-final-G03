<template>
    <FlexboxLayout height="100%" flexDirection="column" justifyContent="center">
        <StackLayout>
            <SvgImage src="~/assets/images/shop/img/magasin_info.svg" height="120" marginBottom="50"/>

        </StackLayout>
        <Label text="Besoin d’un vendeur Intersport pour vous conseiller ?" textWrap="true" class="title"/>
        <Label text="Ne cherchez plus, scannez le QR code de votre rayon et un vendeur sera alerté de votre attente.*"
               textWrap="true" class="subtitle"/>
        <BarCode/>
        <Label text=" *(en fonction de la fréquentation du magasin)" class="legal"/>
    </FlexboxLayout>
</template>

<script>
    import BarCode from "../../../Features/BarCode";
    export default {
        name: "HelpSeller",
        components: {BarCode},
        computed: {},
        created() {
        }
    }
</script>

<style scoped>
    Label {
        color: #164194;
        font-family: OpenSans-Regular;
    }

    .title {

        text-align: center;
        margin: 10px 100px 70px 100px;
        font-size: 20px;
        letter-spacing: 0, 24px;
        font-weight: 600;
    }

    .subtitle {
        margin: 100px 100px 10px 100px;
        color: black;
        font-size: 15px;
    }

    .legal {
        margin: 20px 70px 10px 70px;
        color: black;
    }
</style>