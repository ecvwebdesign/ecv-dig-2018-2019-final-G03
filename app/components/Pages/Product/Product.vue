<template>
    <StackLayout>
        <ScrollView class="margin-top">
            <FlexboxLayout flexDirection="column" justifyContent="space-around">
                <GridLayout height="250">
                    <Carousel #carousel showIndicator="true" indicatorAnimation="SWAP"
                              indicatorColor="#164194" indicatorColorUnselected="#cceeff" height="100%" width="100%">
                        <CarouselItem>
                            <Image src="~/assets/images/produit.png" stretch="aspectFill"/>
                        </CarouselItem>
                        <CarouselItem>
                            <Image src="~/assets/images/produit.png" stretch="aspectFill"/>
                        </CarouselItem>
                        <CarouselItem>
                            <Image src="~/assets/images/produit.png" stretch="aspectFill"/>
                        </CarouselItem>
                    </Carousel>
                </GridLayout>
                <FlexboxLayout justifyContent="center" height="150px" marginTop="5px">
                    <FlexboxLayout justifyContent="center" width="50%">
                        <Image src="~/assets/images/produit.png" stretch="aspectFill" class="bottom-img"/>
                        <Image src="~/assets/images/produit.png" stretch="aspectFill" class="bottom-img"/>
                        <Image src="~/assets/images/produit.png" stretch="aspectFill" class="bottom-img"/>
                    </FlexboxLayout>
                </FlexboxLayout>
                <StackLayout paddingBottom="80px" paddingLeft="80px" paddingRight="80px" backgroundColor="white">
                    <FlexboxLayout justifyContent="space-between">
                        <Label text="Brand" color="#164194" fontSize="30px" class="brand"/>
                        <Label text="Price" color="#164194" fontSize="22px" marginTop="12px" class="price"/>
                    </FlexboxLayout>
                    <FlexboxLayout justifyContent="space-between">
                        <Label text="Name" color="black" fontSize="20px" class="name"/>
                        <Label text="-50%" color="#164194" fontSize="16px" marginTop="6px" class="promo"/>
                    </FlexboxLayout>
                    <FlexboxLayout class="borderSize" justifyContent="space-between" marginTop="20px" marginBottom="20px" paddingBottom="20px" paddingTop="20px">
                        <Label text="TAILLE" color="black" class="sizeText"/>
                        <FlexboxLayout justifyContent="flex-end" width="30%">
                            <Label text="36" color="black" class="size"/>
                            <Image src="~/assets/icons/deploiement-bas-bleu.png" width="40px" marginLeft="30px"></Image>
                        </FlexboxLayout>
                    </FlexboxLayout>
                    <FlexboxLayout justifyContent="center" marginTop="20px">
                        <Label text="Guide des tailles" class="tailles"/>
                    </FlexboxLayout>
                </StackLayout>
                <StackLayout orientation="horizontal" row="1" height="150px" class="btn-bottom" backgroundColor="white">
                    <StackLayout width="50%" padding="20px" height="100%">
                        <Label text="Réserver en magasin" class="resamagasin"/>
                    </StackLayout>
                    <StackLayout backgroundColor="#164194" width="50%" padding="20px" height="100%">
                        <Label text="Ajouter au panier" class="ajoutpanier"/>
                    </StackLayout>
                </StackLayout>
                <Image src="~/assets/images/dispomagasin.png" stretch="aspectFill" marginTop="5px" marginBottom="5px"/>
                <StackLayout backgroundColor="white">
                    <FlexboxLayout justifyContent="space-between" class="expansion"
                                   :class="selectedExpansion === 'description' ? 'active' : ''" @tap="setSelectedExpansion('description')">
                        <Label text="DESCRIPTION" class="expansionLabel"/>
                        <Image src="~/assets/icons/deploiement-bas-bleu.png" width="50px" v-if="selectedExpansion === 'description'"></Image>
                        <Image v-else src="~/assets/icons/deploiement-droite-noir.png" width="30px"></Image>
                    </FlexboxLayout>
                    <StackLayout v-show="selectedExpansion === 'description'" >
                        <Label text="Description du produit"/>
                    </StackLayout>

                    <FlexboxLayout justifyContent="space-between" class="expansion"
                                   :class="selectedExpansion === 'livraison' ? 'active' : ''" @tap="setSelectedExpansion('livraison')">
                        <Label text="LIVRAISON" class="expansionLabel"/>
                        <Image src="~/assets/icons/deploiement-bas-bleu.png" width="50px" v-if="selectedExpansion === 'livraison'"></Image>
                        <Image v-else src="~/assets/icons/deploiement-droite-noir.png" width="30px"></Image>
                    </FlexboxLayout>
                    <StackLayout v-show="selectedExpansion === 'livraison'" >
                        <Label text="Détail de la livraison"/>
                    </StackLayout>

                    <FlexboxLayout justifyContent="space-between" class="expansion"
                                   :class="selectedExpansion === 'avis' ? 'active' : ''" @tap="setSelectedExpansion('avis')">
                        <Label text="AVIS" class="expansionLabel"/>
                        <Image src="~/assets/icons/deploiement-bas-bleu.png" width="50px" v-if="selectedExpansion === 'avis'"></Image>
                        <Image v-else src="~/assets/icons/deploiement-droite-noir.png" width="30px"></Image>
                    </FlexboxLayout>
                    <StackLayout v-show="selectedExpansion === 'avis'" >
                        <Label text="Avis du produit"/>
                    </StackLayout>
                </StackLayout>
                <StackLayout>
                    <FlexboxLayout marginLeft="50px" marginBottom="10px" marginTop="50px">
                        <Label text="Vous aimeriez peut-être ..." class="reco"/>
                    </FlexboxLayout>
                    <HorizontalStack></HorizontalStack>
                </StackLayout>
            </FlexboxLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    import HorizontalStack from "../Home/Component/HorizontalStack";
    export default {
        name: "Product",
        components: {HorizontalStack},
        data() {
            return {
                selectedExpansion: null,
            }
        },

        methods: {
            setSelectedExpansion(expansion) {
                this.selectedExpansion = this.selectedExpansion === expansion ? null : expansion;
            }
        },

        computed: {
            product() {
                return this.$store.state.product;
            }
        }
    }
</script>

<style scoped>
    .borderSize {
        border-width: 1;
        border-color: black;
        padding: 20px;
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 20px;
    }

    .

    .brand {
        font-weight: 800;
    }

    .price {
        font-weight: bold;
    }

    .promo {
        font-weight: bold;
    }

    .size {
        font-size: 20px;
        font-weight: 300;
    }

    .tailles {
        font-size: 14px;
        font-weight: 300;
        text-decoration: underline;
    }

    .resamagasin {
        font-size: 20px;
        color: #164194;
        text-align: center;
        margin-top: 5px;
    }

    .ajoutpanier {
        color: white;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-top: 5px;
    }

    .btn-bottom {
        border-width: 1;
        border-color: #164194;
    }

    .expansion {
        border-bottom-color: black;
        border-bottom-width: 2px;
        margin-left: 50px;
        margin-right: 50px;
        padding-bottom: 50px;
        padding-top: 50px;
    }

    .active {
        color: #164194;
    }

    .expansionLabel {
        color: black;
        font-size: 20px;
        font-weight: bold;
    }

    .reco {
        color: black;
        font-size: 20px;
        font-weight: bold;
    }

    .sizeText {
        font-size: 20px;
        font-weight: bold;
    }

    .bottom-img {
        margin: 5px;
    }
</style>
