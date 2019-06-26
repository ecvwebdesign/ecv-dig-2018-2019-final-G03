<template>
    <ActionBar backgroundColor="white">
        <StackLayout orientation="horizontal">
            <Image v-if="headerHasImage" src="~/assets/images/intersport.png" width="40%" marginRight="80" marginLeft="100"/>
            <Label v-else :text="headerLabel" textAlignment="center" width="40%" fontSize="21" marginRight="80" marginLeft="100"/>
            <Image src="~/assets/icons/panier.png" width="6%"/>
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