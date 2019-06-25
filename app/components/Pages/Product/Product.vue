<template>
    <StackLayout>
        <ScrollView class="margin-top">
            <FlexboxLayout flexDirection="column" justifyContent="space-around">
                <TabView>
                    <TabViewItem>
                        <Image src="~/assets/images/produit.png" width="100%" height="100px"></Image>
                    </TabViewItem>
                    <TabViewItem>
                        <Image src="~/assets/images/produit.png" width="100%"></Image>
                    </TabViewItem>
                    <TabViewItem>
                        <Image src="~/assets/images/produit.png" width="100%"></Image>
                    </TabViewItem>
                </TabView>
            </FlexboxLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    export default {
        name: "Product",

        computed: {
            product() {
                return this.$store.state.product;
            }
        }
    }
</script>

<style scoped>

</style>
