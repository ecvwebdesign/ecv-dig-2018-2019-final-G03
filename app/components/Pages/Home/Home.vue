<template>
    <ScrollView>
        <StackLayout>
            <VerticalStack/>
            <Label text="New products" backgroundColor="red"/>
            <HorizontalStack/>
            <Label text="Categories" backgroundColor="red"/>
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
    Label {
        margin: 65px 50px 0px 50px;
    }
</style>