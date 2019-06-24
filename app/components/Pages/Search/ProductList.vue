<template>
    <StackLayout>
        <ScrollView class="margin-top">
            <FlexboxLayout flexDirection="column-reverse" justifyContent="space-around">
                <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top margin-bot">
                    <Label text="football" width="40%" height="150" backgroundColor="#43b883" @tap="changePage('product', 'football')"/>
                    <Label text="basket" width="40%" height="150" backgroundColor="#43b883" @tap="changePage('product', 'basket')"/>
                </FlexboxLayout>
                <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                    <Label text="first" width="40%" height="150" backgroundColor="#43b883" @tap="changePage('product', 1)"/>
                    <Label text="first" width="40%" height="150" backgroundColor="#43b883" @tap="changePage('product', 1)"/>
                </FlexboxLayout>
                <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                    <Label text="first" width="40%" height="150" backgroundColor="#43b883" @tap="changePage('product', 1)"/>
                    <Label text="first" width="40%" height="150" backgroundColor="#43b883" @tap="changePage('product', 1)"/>
                </FlexboxLayout>
                <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                    <Label text="test" width="40%" height="150" backgroundColor="#43b883" @tap="changePage('product', 1)"/>
                    <Label text="test" width="40%" height="150" backgroundColor="#43b883" @tap="changePage('product', 1)"/>
                </FlexboxLayout>
                <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                    <Label text="ersdfh" width="40%" height="150" backgroundColor="#43b883" @tap="changePage('product', 1)"/>
                    <Label text="test" width="40%" height="150" backgroundColor="#43b883" @tap="changePage('product', 1)"/>
                </FlexboxLayout>
                <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                    <Label text="velo" width="40%" height="150" backgroundColor="#43b883" @tap="changePage('product', 'velo')"/>
                    <Label text="tennis" width="40%" height="150" backgroundColor="#43b883" @tap="changePage('product', 'tennis')"/>
                </FlexboxLayout>
            </FlexboxLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    export default {
        name: "ProductList",

        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', this.$store.state.subCategoryLabels[this.currentSubCategory]);
        },

        methods: {
            changePage(page, product) {
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('addToHistory', page);
            }
        },

        computed: {
            currentSubCategory() {
                return this.$store.state.currentSubCategory;
            }
        }
    }
</script>

<style scoped>

</style>
