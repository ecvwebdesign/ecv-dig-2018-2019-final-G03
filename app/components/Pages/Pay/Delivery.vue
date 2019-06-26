<template>
    <StackLayout>
        <ScrollView>
            <StackLayout backgroundColor="#eeeded">
                <template>
                    <Image src="~/assets/images/step2-panier.png" stretch="aspectFill" height="250px"/>
                    <StackLayout backgroundColor="white" paddingTop="40px">
                        <Label text="MON PANIER" marginTop="30px" :color="'black'" fontSize="20px" class="font-weight-bold"
                               paddingLeft="50px" paddingRight="30px"/>
                        <WrapLayout height="250px" paddingTop="20px" paddingBottom="20px"
                                     paddingLeft="50px" paddingRight="30px">
                            <Image src="~/assets/images/produit.png" marginRight="15px"/>
                            <Image src="~/assets/images/produit.png"/>
                        </WrapLayout>
                        <Label text="TOTAL : PRICE" marginTop="30px" :color="'black'" fontSize="20px" class="font-weight-bold"
                               paddingLeft="50px" paddingRight="30px"/>
                        <Label text="(TVA incluse / Frais de livraison non inclus)" textWrap="true" fontSize="12px" marginBottom="20px"
                               paddingLeft="50px" paddingRight="30px"/>
                        <StackLayout paddingLeft="50px" paddingRight="30px" backgroundColor="white"
                        marginBottom="50px">
                            <Image src="~/assets/images/offerte.png"/>
                        </StackLayout>
                    </StackLayout>

                    <Image src="~/assets/images/livraison-infos.png" marginBottom="30px" marginTop="15px"/>
                    <Image src="~/assets/images/total-livraison.png" marginBottom="10px"/>
                    <Image src="~/assets/images/conditions.png"/>

                    <Button text="JE PASSE AU PAIEMENT" class="btn-default" marginBottom="20" marginTop="20"
                            @tap="changepage('paiement')"/>
                </template>
            </StackLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    export default {
        name: "Delivery",

        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', 'LIVRAISON');
        },

        methods: {
            changepage(page) {
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('addToHistory', page);
            }
        }
    }
</script>

<style scoped>
    .btn-default {
        background-color: #164194;
        color: white;
        margin: 0 180px 0 180px;
        width: 250;
    }
</style>
