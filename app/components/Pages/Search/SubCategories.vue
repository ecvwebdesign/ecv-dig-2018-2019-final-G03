<template>
    <ScrollView>
        <StackLayout>
            <StackLayout v-if="currentCategory === 'football'">
                <Label text="Maillot" height="85" backgroundColor="#43b883" @tap="changePage('productList', 'maillot')"/>
                <Label text="Ballon" height="85" backgroundColor="#289062" @tap="changePage('productList', 'ballon')"/>
                <Label text="first" height="85" backgroundColor="#43b883"/>
                <Label text="second" height="85" backgroundColor="#289062"/>
                <Label text="first" height="85" backgroundColor="#43b883"/>
                <Label text="second" height="85" backgroundColor="#289062"/>
                <Label text="first" height="85" backgroundColor="#43b883"/>
                <Label text="second" height="85" backgroundColor="#289062"/>
                <Label text="first" height="85" backgroundColor="#43b883"/>
                <Label text="second" height="85" backgroundColor="#289062"/>
                <Label text="first" height="85" backgroundColor="#43b883"/>
                <Label text="second" height="85" backgroundColor="#289062"/>
                <Label text="first" height="85" backgroundColor="#43b883"/>
                <Label text="second" height="85" backgroundColor="#289062"/>
            </StackLayout>
            <StackLayout v-else-if="currentCategory === 'tennis'">
                <Label text="first" height="85" backgroundColor="#43b883" @tap="changePage('productList', 'raquette')"/>
                <Label text="second" height="85" backgroundColor="#289062"/>
                <Label text="first" height="85" backgroundColor="#43b883"/>
                <Label text="second" height="85" backgroundColor="#289062"/>
            </StackLayout>
        </StackLayout>
    </ScrollView>
</template>

<script>
    export default {
        name: "SubCategories",

        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', this.$store.state.categoryLabels[this.currentCategory]);
        },

        methods: {
            changePage(page, subCategory) {
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('setCurrentSubCategory', subCategory);
                this.$store.commit('addToHistory', page);
            }
        },

        computed: {
            currentCategory() {
                return this.$store.state.currentCategory;
            }
        }
    }
</script>

<style scoped>

</style>
