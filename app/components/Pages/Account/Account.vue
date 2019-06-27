<template>
    <FlexboxLayout class="page">
        <StackLayout v-if="user">
            <StackLayout backgroundColor="#EEEDED">
                <Label :text="user.displayName" textAlignment="center" marginTop="25" class="name"/>
                <AbsoluteLayout @tap="updateCard">
                    <Image src="~/assets/images/account/carte.png" marginRight="35" marginLeft="35" width="325"/>
                    <Label width="100%" :height="displayCard ? '0' : '80'" top="125" backgroundColor="white" left="0"
                           right="0"></Label>
                </AbsoluteLayout>
            </StackLayout>
            <AbsoluteLayout marginTop="-10">
                <FlexboxLayout>
                    <Image src="~/assets/images/account/points.png" margin="35" width="30%"/>
                    <FlexboxLayout flexDirection="column" alignContent="flex-start"
                                   justifyContent="center" width="225" flexWrap="wrap">
                        <Label textWrap="true">
                            <FormattedString>
                                <Span color="black" text="1 € d’achat = "></Span>
                                <Span color="#164194" text="1 point" class="bold"></Span>
                            </FormattedString>
                        </Label>
                        <Label textWrap="true" marginBottom="10">
                            <FormattedString>
                                <Span color="black" text="1 passage en caisse ="></Span>
                                <Span color="#164194" text="10 points" class="bold"></Span>
                            </FormattedString>
                        </Label>
                        <Label textWrap="true">
                            <FormattedString>
                                <Span color="black"
                                      text="Il vous reste encore 230 points à cumuler pour pouvoir bénéficier de la remise de 10%."/>
                            </FormattedString>
                        </Label>
                    </FlexboxLayout>
                </FlexboxLayout>
            </AbsoluteLayout>
            <StackLayout>
                <template>
                    <FlexboxLayout justifyContent="space-between" class="expansion">
                        <Label text="Mes avantages fidélités" fontSize="15px"/>
                        <Image src="~/assets/icons/deploiement-droite-noir.png" width="30px"/>
                    </FlexboxLayout>
                    <FlexboxLayout justifyContent="space-between" class="expansion">
                        <Label text="Mes commandes" fontSize="15px"/>
                        <Image src="~/assets/icons/deploiement-droite-noir.png" width="30px"/>
                    </FlexboxLayout>
                    <FlexboxLayout justifyContent="space-between" class="expansion">
                        <Label text="Mes alertes" fontSize="15px"/>
                        <Image src="~/assets/icons/deploiement-droite-noir.png" width="30px"/>
                    </FlexboxLayout>
                    <FlexboxLayout justifyContent="space-between" class="expansion">
                        <Label text="Informations" fontSize="15px"/>
                        <Image src="~/assets/icons/deploiement-droite-noir.png" width="30px"/>
                    </FlexboxLayout>
                    <FlexboxLayout justifyContent="space-between" class="expansion">
                        <Label text="Newsletter" fontSize="15px"/>
                        <Image src="~/assets/icons/deploiement-droite-noir.png" width="30px"/>
                    </FlexboxLayout>
                </template>
            </StackLayout>
            <Button text="Se déconnecter" @tap="logout" class="btn btn-signup" width="330"/>
        </StackLayout>
        <StackLayout v-else height="85%">
            <Image class="logo" src="~/assets/images/intersport.png" width="70%"/>
            <StackLayout class="form" height="78%">
                <StackLayout class="input-field">
                    <TextField class="input" hint="Email" keyboardType="email" autocorrect="false"
                               autocapitalizationType="none" v-model="email" returnKeyType="next"></TextField>
                    <StackLayout class="hr-light"></StackLayout>
                </StackLayout>

                <StackLayout class="input-field">
                    <TextField class="input" hint="Password" secure="true" v-model="password"
                               :returnKeyType="!displayRegister ? 'done' : 'next'"></TextField>
                    <StackLayout class="hr-light"></StackLayout>
                </StackLayout>

                <StackLayout v-if="displayRegister" class="input-field">
                    <TextField class="input" hint="Confirm password" secure="true" v-model="passwordConfirm"
                               returnKeyType="done"></TextField>
                    <StackLayout class="hr-light"></StackLayout>
                </StackLayout>

                <Button :text="!displayRegister ? 'Connexion' : 'Inscription'" @tap="submit"
                        class="btn btn-primary m-t-20"></Button>
                <Label v-if="!user" class="login-label sign-up-label" @tap="displayRegisterForm" width="100%"
                       textAlignment="right">
                    <FormattedString>
                        <Span :text="!displayRegister ? 'Mot de passe oublié ?' : ''"></Span>
                    </FormattedString>
                </Label>

                <Label text="ou" textAlignment="center" marginTop="10px" marginBottom="10px"/>

                <FlexboxLayout class="btn btn-google" justifyContent="center" padding="5" @tap="signinWithGoogle">
                    <Image src="~/assets/icons/google.png" width="10%" height="100%" marginRight="10"></Image>
                    <Label text="Google" verticalAlignment="center" marginTop="12px"></Label>
                </FlexboxLayout>

                <FlexboxLayout class="btn btn-facebook" justifyContent="center" padding="5" @tap="signinWithFacebook">
                    <Image src="~/assets/icons/facebook.png" width="10%" height="100%" marginRight="10"></Image>
                    <Label text="Facebook" verticalAlignment="center" marginTop="12px"></Label>
                </FlexboxLayout>
            </StackLayout>
        </StackLayout>

        <!--        <Label v-if="!user" class="login-label sign-up-label" @tap="displayRegisterForm">-->
        <!--            <FormattedString>-->
        <!--                <Span :text="!displayRegister ? 'Pas encore de compte ? ' : 'Retour à la connexion'"></Span>-->
        <!--                <Span :text="!displayRegister ? 'S\'inscrire' : ''" class="bold"></Span>-->
        <!--            </FormattedString>-->
        <!--        </Label>-->
        <Button v-if="!user" :text="!displayRegister ? 'S\'inscrire' : 'Se connecter'" @tap="displayRegisterForm"
                class="btn btn-signup" width="330"></Button>
        <Label v-if="!user && (!isEverOpen || afterLogin)" class="login-label sign-up-label blue-underline" @tap="redirectToHome">
            <FormattedString>
                <Span text="Continuer sans s'identifier" class="blue"></Span>
            </FormattedString>
        </Label>
    </FlexboxLayout>
</template>

<script>
    import firebase from "nativescript-plugin-firebase";

    export default {
        name: "Account",
        data() {
            return {
                email: null,
                password: null,
                passwordConfirm: null,
                displayRegister: false,
                displayCard: false
            }
        },
        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', 'Mon compte');
        },

        methods: {
            displayRegisterForm() {
                this.displayRegister = !this.displayRegister;
            },
            signin() {
                let self = this;
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
                    this.$store.commit('setIsEverOpen', true);
                    console.log("[*] Google Auth Response: " + JSON.stringify(result));
                }, (errorMessage) => {
                    console.log("[*] Google Auth Error: " + errorMessage);
                });
            },
            signinWithFacebook() {
                firebase.login({
                    type: firebase.LoginType.FACEBOOK,
                }).then((result) => {
                    this.$store.commit('setIsEverOpen', true);
                    console.log(firebase.getCurrentUser());
                    console.log("[*] Facebook Auth Response: " + JSON.stringify(result));
                }, (errorMessage) => {
                    console.log("[*] Facebook Auth Error: " + errorMessage);
                });
            },
            register() {
                let self = this;
                firebase.createUser({
                    email: self.email,
                    password: self.password
                }).then((user) => {
                        this.$store.commit('setIsEverOpen', true);
                    },
                    (errorMessage) => {
                        console.log(errorMessage)
                    }
                );
            },
            logout() {
                firebase.logout();
                console.log('[*] logout success');
            },
            submit() {
                if (this.displayRegister) {
                    this.register();
                } else {
                    this.signin();
                }
            },
            redirectToHome() {
                this.$store.commit('setIsEverOpen', true);
                this.$store.commit('setCurrentPage', 'home');
                this.$store.commit('addToHistory', 'home');
            },
            updateCard() {
                this.displayCard = !this.displayCard;
            },
            afterLogin() {
                if (this.$store.state.history[this.$store.state.history.length - 2] === 'cart') {
                    return true;
                } else {
                    return false;
                }
            }
        },

        computed: {
            user() {
                return this.$store.state.user;
            },
            isEverOpen() {
                return this.$store.state.isEverOpen;
            }
        },
    }
</script>

<style scoped>
    FlexboxLayout {
        font-family: OpenSans-Regular;
    }

    .name {
        font-weight: 600;
        color: #164194;
        text-transform: uppercase;
        font-size: 20;
    }

    .page {
        align-items: center;
        flex-direction: column;
        background-color: white;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        height: 70;
        font-weight: bold;
        margin-top: 20px;
    }

    .input-field {
        margin-bottom: 20;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .btn-primary {
        height: 50;
        margin: 30 5 5 5;
        background-color: #164194;
        border-radius: 5;
        font-size: 20;
        font-weight: normal;
        text-transform: none;
    }

    .btn-google {
        height: 50;
        margin: 5 5 5 5;
        background-color: white;
        border-radius: 5;
        font-size: 20;
        font-weight: 600;
        color: #737373;
        border-width: 2;
        border-color: black;
    }

    .btn-facebook {
        height: 50;
        margin: 5 5 5 5;
        background-color: #181d9b;
        border-radius: 5;
        font-size: 20;
        font-weight: 600;
        color: white;
    }

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
        margin-top: 5px;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }

    .blue-underline {
        border-bottom-color: #164194;
        border-bottom-width: 2px;
    }

    .blue {
        color: #164194;
    }

    .btn-signup {
        height: 50;
        margin: 5 5 5 5;
        background-color: white;
        border-radius: 5;
        font-size: 20;
        font-weight: 600;
        color: #164194;
        text-transform: none;
        border-color: #164194;
        border-width: 2px;
        margin-bottom: 45px;
    }

    .expansion {
        border-bottom-color: black;
        border-bottom-width: 2px;
        padding-left: 50px;
        margin-left: 50px;
        margin-right: 50px;
        padding: 40px 0px 40px 50px;
        color: black;
        font-weight: 600;
    }

    .active {
        color: #181d9b;
    }
</style>
