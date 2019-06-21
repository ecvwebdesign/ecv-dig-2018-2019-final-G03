<template>
    <ScrollView>
        <StackLayout>
            <FlexboxLayout justifyContent="space-around" flexWrap="wrap">
                <BarCode/>
                <Button width="169" height="169" backgroundImage="~/assets/test/search.png"/>
                <Button width="169" height="169" backgroundImage="~/assets/test/sold.png"/>
                <Button width="169" height="169" backgroundImage="~/assets/test/barcode.png"/>
            </FlexboxLayout>
            <StackLayout marginLeft="15,5" marginRight="15,5">
                <Button text="first" height="180" backgroundColor="#43b883"/>
                <Button text="second" height="80" backgroundColor="#289062"/>
            </StackLayout>
        </StackLayout>
    </ScrollView>
</template>

<script>
    import BarCode from "../../Features/BarCode";
    export default {
        name: "ShopFeature",
        components: {BarCode},
        computed: {
            currentPage() {
                return this.$store.state.currentPage;
            }
        }
    }
</script>

<style scoped>
    Button {
        margin: 65px 0px 0px 0px;
    }
</style>