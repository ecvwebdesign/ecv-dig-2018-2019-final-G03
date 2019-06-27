<template>
    <StackLayout>
        <ScrollView>
            <StackLayout backgroundColor="#eeeded">
                <Image src="~/assets/images/confirm-pay.png"/>
                <Image src="~/assets/images/recap-pay.png"/>
                <Image src="~/assets/images/action-confirm.png"/>
            </StackLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    export default {
        name: "Confirm",

        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', 'CONFIRMATION');
        },
    }
</script>

<style scoped>

</style>
