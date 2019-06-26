<template>
    <StackLayout>
        <ScrollView>
            <StackLayout backgroundColor="#eeeded">
                <template>
                    <Image src="~/assets/images/step3-panier.png" stretch="aspectFill" height="250px"/>
                    <StackLayout backgroundColor="white" paddingTop="40px" paddingLeft="50px" paddingRight="30px" paddingBottom="30px">
                        <Label text="ADRESSE ET FACTURATION" marginTop="30px" :color="'black'" fontSize="20px" class="font-weight-bold"/>
                        <TextField v-model="fullname" hint="Prénom et nom"/>
                        <TextField v-model="address" hint="Adresse"/>
                        <TextField v-model="addressComplet" hint="Complément d'adresse"/>
                        <FlexboxLayout justifyContent="space-between">
                            <TextField v-model="codePostal" width="35%" hint="Code Postale"/>
                            <TextField v-model="city" width="60%" hint="Ville"/>
                        </FlexboxLayout>

                        <Image src="~/assets/images/france-metro.png" marginTop="30px"/>
                        <TextField v-model="tel" hint="Numéro de téléphone"/>

                    </StackLayout>

                    <Image src="~/assets/images/pay-mode.png" marginBottom="30px" marginTop="15px"/>
                    <Image src="~/assets/images/total-pay.png" marginBottom="10px"/>

                    <Button text="JE COMMANDE" class="btn-default" marginBottom="20" marginTop="20"
                            @tap="changepage('confirmpay')"/>
                </template>
            </StackLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    export default {
        name: "Paiement",

        data() {
            return {
                items: [
                    'France métropolitaine',
                    'Wallis et futuna',
                    'Angleterre',
                    'Espagne'
                ],
                fullname: null,
                address: null,
                addressComplet: null,
                codePostal: null,
                city: null,
                tel: null,
            }
        },

        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', 'PAIEMENT');
        },

        methods: {
            changepage(page) {
                let factuInfos = {
                    fullname: this.fullname,
                    address: this.address,
                    addressComplet: this.addressComplet,
                    codePostal: this.codePostal,
                    city: this.city,
                    tel: this.tel
                };
                let commande = {
                    factuInfos: factuInfos,
                    cart: this.$store.state.cart
                };
                this.$store.commit('setFactuInfos', factuInfos);
                this.$store.commit('addCommande', commande);
                this.$store.commit('resetCart');
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('addToHistory', page);
                console.log(JSON.stringify(this.$store.state.commandes));
            }
        }
    }
</script>

<style scoped>
    TextField {
        border-width: 1;
        border-color: #c4c4c4;
        margin-top: 30px;
    }

    .btn-default {
        background-color: #164194;
        color: white;
        margin: 0 180px 0 180px;
        width: 250;
    }
</style>
