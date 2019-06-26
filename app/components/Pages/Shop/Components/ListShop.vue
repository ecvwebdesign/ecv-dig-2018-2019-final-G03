<template>
    <StackLayout>
        <StackLayout v-for="(shop) in shops" orientation="horizontal" class="divider" height="50" @tap="setShop(shop)">
            <Label :text="shop.name" width="70%" class="name" :class="currentShop !== null && currentShop.name === shop.name ?'blue-letter' : ''"/>
            <Label :text="shop.distance +'Km'" width="20%" class="mile"/>
            <SvgImage src="~/assets/icons/goods/magasin_pin.svg" width="48px"
                      height="48px"/>
        </StackLayout>
        <Button text="Je choisi ce magasin" @tap="changePage"/>
    </StackLayout>
</template>

<script>
    export default {
        name: "ListShop",
        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', 'Mon magasin');
        },
        methods: {
            changePage() {
                this.$store.commit('setCurrentPage', 'shopFeatures');
                this.$store.commit('addToHistory', 'shopFeatures');
            },
            setShop(shop) {
                this.$store.commit('setCurrentShop', shop);
            }
        },
        computed: {
            shops() {
                return this.$store.state.shops
            },
            currentShop() {
                return this.$store.state.currentShop;
            }
        }
    }
</script>

<style scoped>
    .divider {
        width: 90%;
        text-align: left;
        padding: 15 0 15 0;
        font-size: 17;
        border-bottom-color: #164194;
        border-bottom-width: 1px;
        vertical-align: bottom;
    }

    .mile {
        color: #164194;
        font-size: 15;
        text-align: right;
        margin-right: 25px;
    }

    .name {
        font-size: 16px;
        color: black;
    }

    Button {
        font-family: OpenSans-Regular;
        color: white;
        background-color: #164194;
        margin: 900px 100px 0px 100px;
    }
    .blue-letter {
        color: #164194;
    }
</style>