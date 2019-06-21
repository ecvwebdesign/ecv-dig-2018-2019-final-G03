<template>
    <StackLayout>
        <Label text="50 points" textAlignment="center" marginTop="25"/>
        <Image src="~/assets/test/intersport_card.png" margin="35"/>
    </StackLayout>
</template>

<script>
    export default {
        name: "Account",
        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', 'Mon compte');
        }
    }
</script>

<style scoped>
</style>