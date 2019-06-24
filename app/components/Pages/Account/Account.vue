<template>
    <FlexboxLayout class="page">
        <StackLayout v-if="user">
            <Label text="50 points" textAlignment="center" marginTop="25"/>
            <Label :text="user.email" textAlignment="center" marginTop="25"/>
            <Image src="~/assets/test/intersport_card.png" margin="35"/>
            <Button text="log out" @tap="logout"></Button>
        </StackLayout>
        <StackLayout v-else class="form">
            <Image class="logo" src="~/assets/images/intersport.png"></Image>

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

        <Label v-if="!user" class="login-label sign-up-label" @tap="displayRegisterForm">
            <FormattedString>
                <Span :text="!displayRegister ? 'Pas encore de compte ? ' : 'Retour à la connexion'"></Span>
                <Span :text="!displayRegister ? 'S\'inscrire' : ''" class="bold"></Span>
            </FormattedString>
        </Label>
        <Label v-if="!user && !isEverOpen" class="login-label sign-up-label" @tap="redirectToHome">
            <FormattedString>
                <Span text="Continuer la navigation sans inscription" class="bold"></Span>
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
        background-color: #D51A1A;
        border-radius: 5;
        font-size: 20;
        font-weight: 600;
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
</style>
