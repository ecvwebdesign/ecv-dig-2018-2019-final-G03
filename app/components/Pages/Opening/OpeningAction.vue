<template>
    <TabView tabBackgroundColor="white" selectedTabTextColor="white" selectedBackgroundColor="white"
             backgroundColor="white" :selectedIndex="selectedIndex">
        <TabViewItem>
            <FlexboxLayout flexDirection="column" justifyContent="center"
                           backgroundImage="~/assets/images/opening/background/background-light.png">
                <FlexboxLayout justifyContent="center" height="25%" flexDirection="column">
                    <Label text="Quels types de produits vous intéressent ?"
                           textWrap="true" class="OpenSans-Regular third-label" fontSize="20" textAlignment="center"/>
                </FlexboxLayout>
                <FlexboxLayout flexDirection="column" height="60%">
                    <Button text="Pour homme" @tap="setPreferenceFor('men')"
                            :class="changeColor === 'men' ? 'active' : ''" class="third-btn"/>
                    <Button text="Pour femme" @tap="setPreferenceFor('women')"
                            :class="changeColor === 'women' ? 'active' : ''" class="third-btn"/>
                    <Button text="Pour enfant" @tap="setPreferenceFor('child')"
                            :class="changeColor === 'child' ? 'active' : ''" class="third-btn"/>
                    <Button text="Confirmer" class="btn-default" marginTop="100" @tap="selectedIndex = 1"/>
                </FlexboxLayout>
            </FlexboxLayout>
        </TabViewItem>
        <TabViewItem>
            <ScrollView>
                <StackLayout backgroundImage="~/assets/images/opening/background/background-light.png">
                    <FlexboxLayout justifyContent="center" height="40%" flexDirection="column">
                        <Label text="Sélectionnez les sports ou les marques qui vous intéressent le plus."
                               textWrap="true" class="OpenSans-Regular last-label" fontSize="20"
                               textAlignment="center" marginTop="100"/>
                    </FlexboxLayout>
                    <FlexboxLayout flexWrap="wrap" justifyContent="space-around">
                        <Button text="Aucun" width="175" height="175" marginBottom="15" @tap="setInterests('none')"
                                :class="getInterests('none') ? 'active' : ''" class="last-btn"/>
                        <Button text="Sport d'eau" width="175" height="175" marginBottom="15"
                                @tap="setInterests('water')"
                                :class="getInterests('water') ? 'active' : ''" class="last-btn"/>
                        <Button text="Fitness et Training" width="175" height="175" marginBottom="15"
                                @tap="setInterests('fitness')"
                                :class="getInterests('fitness') ? 'active' : ''" class="last-btn"/>
                        <Button text="Nike" width="175" height="175" marginBottom="15" @tap="setInterests('nike')"
                                :class="getInterests('nike') ? 'active' : ''" class="last-btn"/>
                        <Button text="Adidas" width="175" height="175" marginBottom="15" @tap="setInterests('adidas')"
                                :class="getInterests('adidas') ? 'active' : ''" class="last-btn"/>
                        <Button text="Lacoste" width="175" height="175" marginBottom="15" @tap="setInterests('lacoste')"
                                :class="getInterests('lacoste') ? 'active' : ''" class="last-btn"/>
                        <Button text="Randonnées" width="175" height="175" marginBottom="15"
                                @tap="setInterests('randonnee')"
                                :class="getInterests('randonnee') ? 'active' : ''" class="last-btn"/>
                        <Button text="Tennis" width="175" height="175" marginBottom="15" @tap="setInterests('tennis')"
                                :class="getInterests('tennis') ? 'active' : ''" class="last-btn"/>
                    </FlexboxLayout>
                    <Button text="Confirmer" class="btn-default" marginBottom="50" marginTop="20" @tap="selectedIndex = 2"/>
                </StackLayout>
            </ScrollView>
        </TabViewItem>
        <TabViewItem>
            <Account/>
        </TabViewItem>
    </TabView>
</template>

<script>
    import Account from "../Account/Account";

    export default {
        name: "OpeningAction",
        components: {Account},
        data() {
            return {
                changeColor: null,
                interests: [],
                selectedIndex: 0
            }
        },
        methods: {
            setPreferenceFor(type) {
                this.$store.commit('setPreferenceFor', type);
                this.changeColor = type;
            },
            setInterests(interest) {
                if (this.interests.includes(interest)) {
                    this.interests.splice(this.interests.indexOf(interest), 1)
                } else {
                    this.interests.push(interest);
                }
            },
            getInterests(intereset) {
                return this.interests.includes(intereset);
            },
            saveStore() {
                this.$store.commit('setInterests', this.interests);
                this.$store.commit('setIsEverOpen', true);
                this.$store.commit('setCurrentPage', 'account');
            }
        },
        created() {

        },
        computed: {
            changeColor() {
                return this.changeColor;
            }
        }
    }
</script>

<style scoped>
    StackLayout {
        background-repeat: no-repeat;
    }

    Label {
        color: #164194;
        text-align: center;
        font-family: OpenSans-Regular;
    }

    .second-label {
        margin: 150px 180px 150px 180px;
    }

    .third-label {
        margin: 150px 190px 150px 190px;
    }

    .third-btn {
        height: 100;
        margin: 7 95 7 95;
    }

    .last-label {
        margin: 150px 50px 150px 50px;
    }

    Button {
        border-width: 2;
        border-color: #164194;
        color: #164194;
    }

    .last-btn {
        background-color: #FFFFFF;
    }

    .active {
        background-color: #164194;
        color: #FFFFFF;
    }

    .btn-default {
        background-color: #164194;
        color: white;
        margin: 0 180px 0 180px;
        width: 250;
    }
</style>