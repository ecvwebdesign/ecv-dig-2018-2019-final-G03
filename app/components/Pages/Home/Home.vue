<template>
    <ScrollView>
        <StackLayout>
            <VerticalStack/>
            <FlexboxLayout alignContent="center">
                <Label text="Nouveautés" class="newLabel"/>
                <SvgImage src="~/assets/images/home/accueil_flechedroite.svg" width="10"/>
            </FlexboxLayout>
            <HorizontalStack/>
            <FlexboxLayout alignContent="center">
                <Label text="Vente privée" class="newLabel"/>
                <SvgImage src="~/assets/images/home/accueil_flechedroite.svg" width="10"/>
            </FlexboxLayout>
            <HorizontalStack/>
            <FlexboxLayout alignContent="center">
                <Label text="LifeStyle" class="newLabel"/>
                <SvgImage src="~/assets/images/home/accueil_flechedroite.svg" width="10"/>
            </FlexboxLayout>
            <HorizontalStack/>
            <FlexboxLayout alignContent="center">
                <Label text="Soldes" class="newLabel"/>
                <SvgImage src="~/assets/images/home/accueil_flechedroite.svg" width="10"/>
            </FlexboxLayout>
            <HorizontalStack/>
        </StackLayout>
    </ScrollView>
</template>

<script>
    import VerticalStack from "./Component/VerticalStack";
    import HorizontalStack from "./Component/HorizontalStack";

    export default {
        name: "Home",
        components: {HorizontalStack, VerticalStack},
        created() {
            this.$store.commit('setHeader', true);
        }
    }
</script>

<style scoped>
    ScrollView {
        background-color: #EEEDED;
    }

    Label {
        font-family: OpenSans-Regular;
        font-size: 25px;
        color: #164194;
    }

    .newLabel {
        margin: 15px 25px 25px 50px;
    }
</style>