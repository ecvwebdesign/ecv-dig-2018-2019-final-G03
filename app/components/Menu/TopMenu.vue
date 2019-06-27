<template>
    <ActionBar backgroundColor="white">
        <StackLayout orientation="horizontal">
            <Image v-if="headerHasImage" src="~/assets/images/intersport.png" width="40%" marginRight="80" marginLeft="100"/>
            <Label v-else :text="headerLabel" textAlignment="center" width="40%" fontSize="16" marginRight="80" marginLeft="100" textWrap="true"/>
            <template v-if="currentPage !== 'confirmpay'">
                <SvgImage v-if="nbProductCart === 1" src="~/assets/icons/panier-1.svg" width="60px" @tap="changePage('cart')"/>
                <SvgImage v-if="nbProductCart === 2" src="~/assets/icons/panier-2.svg" width="60px" @tap="changePage('cart')"/>
                <SvgImage v-if="nbProductCart === 3" src="~/assets/icons/panier-3.svg" width="60px" @tap="changePage('cart')"/>
                <SvgImage v-if="nbProductCart === 4" src="~/assets/icons/panier-4.svg" width="60px" @tap="changePage('cart')"/>
                <Image v-if="nbProductCart === 0" src="~/assets/icons/panier.png" width="6%" @tap="changePage('cart')"/>
            </template>
            <SvgImage v-else src="~/assets/icons/croix.svg" width="60px" @tap="changePage('home')"/>
        </StackLayout>
    </ActionBar>
</template>
<script>
    export default {
        name: "TopMenu",
        methods: {
            changePage(page) {
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('addToHistory', page);
            }
        },
        computed: {
            headerHasImage() {
                return this.$store.state.headerHasImage;
            },
            headerLabel() {
                return this.$store.state.headerLabel;
            },
            nbProductCart() {
                return this.$store.state.cart.length;
            },
            currentPage() {
                return this.$store.state.currentPage;
            }
        }
    }
</script>

<style scoped>
    Label {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 30px;
    }
</style>
