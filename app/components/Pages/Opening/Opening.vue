<template>
    <TabView tabBackgroundColor="white" selectedTabTextColor="white" selectedBackgroundColor="white"
             backgroundColor="white">
        <TabViewItem>
            <StackLayout backgroundImage="~/assets/images/opening/background/splash-screen.png" height="100%"/>
        </TabViewItem>
        <TabViewItem>
            <GridLayout row="2">
                <Carousel #carousel showIndicator="true" indicatorAnimation="SWAP"
                          indicatorColor="#164194" indicatorColorUnselected="#cceeff">
                    <CarouselItem backgroundImage="~/assets/images/opening/background/background-light.png">
                        <StackLayout @tap="cancelOnBoarding">
                            <Label class="pastBtn" textWrap="true" text="Passer"/>
                        </StackLayout>
                        <FlexboxLayout height="100%" flexDirection="column" justifyContent="center">
                            <StackLayout>
                                <Image src="~/assets/images/opening/background/onboarding/1/logo.png"
                                       width="150" marginBottom="50"/>
                            </StackLayout>
                            <Label text="Commandez ou réservez tous vos produits en un clic." textWrap="true"/>
                        </FlexboxLayout>
                    </CarouselItem>
                    <CarouselItem backgroundImage="~/assets/images/opening/background/background-light.png">
                        <StackLayout @tap="cancelOnBoarding">
                            <Label class="pastBtn" textWrap="true" text="Passer"/>
                        </StackLayout>
                        <FlexboxLayout height="100%" flexDirection="column" justifyContent="center">
                            <StackLayout>
                                <Image src="~/assets/images/opening/background/onboarding/2/logo.png"
                                       width="150" marginBottom="50"/>
                            </StackLayout>
                            <Label text="Vérifiez les disponibilités en magasin." textWrap="true"/>
                        </FlexboxLayout>
                    </CarouselItem>
                    <CarouselItem backgroundImage="~/assets/images/opening/background/background-light.png">
                        <StackLayout @tap="cancelOnBoarding">
                            <Label class="pastBtn" textWrap="true" text="Passer"/>
                        </StackLayout>
                        <FlexboxLayout height="100%" flexDirection="column" justifyContent="center">
                            <StackLayout>
                                <Image src="~/assets/images/opening/background/onboarding/3/logo.png"
                                       width="150" marginBottom="50"/>
                            </StackLayout>
                            <Label text="Activez votre programme de fidélité" textWrap="true"/>
                        </FlexboxLayout>
                    </CarouselItem>
                    <CarouselItem backgroundImage="~/assets/images/opening/background/background-light.png">
                        <StackLayout @tap="cancelOnBoarding">
                            <Label class="pastBtn" textWrap="true" text="Passer"/>
                        </StackLayout>
                        <FlexboxLayout height="100%" flexDirection="column" justifyContent="center">
                            <StackLayout>
                                <Image src="~/assets/images/opening/background/onboarding/4/logo.png"
                                       width="150" marginBottom="50"/>
                            </StackLayout>
                            <Button text="Personalisez votre application." textWrap="true"
                                    @tap="goToOnBoardingAction" class="nextAction"/>
                        </FlexboxLayout>
                    </CarouselItem>
                </Carousel>
            </GridLayout>
        </TabViewItem>
    </TabView>
</template>

<script>
    export default {
        name: "Opening",
        created() {
        },
        methods: {
            cancelOnBoarding() {
                this.$store.commit('setIsEverOpen', true);
                this.$store.commit('setCurrentPage', 'home');
            },
            goToOnBoardingAction() {
                this.$store.commit('setCurrentPage', 'onBoardingAction');
            },
        }
    }
</script>

<style scoped>
    CarouselItem {
        background-repeat: no-repeat;
    }

    Label {
        color: #164194;
        font-family: OpenSans-Regular;
        text-align: center;
        margin: 10px 180px 10px 180px;
        font-size: 20px;
        letter-spacing: 0, 24px;
    }

    .pastBtn {
        text-align: right;
        margin-right: 20px;
        text-transform: uppercase;
        background-color: white;
        color: #164194;
    }

    .nextAction {
        background-color: #164194;
        color: white;
        height: 170px;
        text-transform: none;
        font-size: 18px;
        margin: 0 110px 0 110px;
    }
</style>