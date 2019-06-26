<template>
    <ActionBar backgroundColor="white">
        <StackLayout orientation="horizontal">
            <Image v-if="headerHasImage" src="~/assets/images/intersport.png" width="40%" marginRight="80" marginLeft="100"/>
            <Label v-else :text="headerLabel" textAlignment="center" width="40%" fontSize="23" marginRight="80" marginLeft="100"/>
            <SvgImage v-if="nbProductCart !== 0" src="~/assets/icons/cart.svg" width="60px"/>
            <Image v-else src="~/assets/icons/panier.png" width="6%"/>
        </StackLayout>
    </ActionBar>
</template>
<script>
    export default {
        name: "TopMenu",
        computed: {
            headerHasImage() {
                return this.$store.state.headerHasImage;
            },
            headerLabel() {
                return this.$store.state.headerLabel;
            },
            nbProductCart() {
                return this.$store.state.nbProductCart;
            }
        }
    }
</script>

<style scoped>
    Label {
        text-transform: uppercase;
        font-weight: 600;
    }
</style>
