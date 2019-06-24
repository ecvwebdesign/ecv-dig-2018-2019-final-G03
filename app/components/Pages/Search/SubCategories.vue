<template>
    <ScrollView>
        <StackLayout>
            <template v-for="(subCategory, key, index) in currentCategory.subCategoryLabels">
                <FlexboxLayout justifyContent="space-between" class="expansion"
                               :class="currentSubCategory && subCategory.name === currentSubCategory.name ? 'active' : ''" @tap="setCurrentSubCategory(key)">
                    <Label :text="subCategory.name" fontSize="20px"/>
                    <Image src="~/assets/icons/deploiement-bas-bleu.png" width="50px" v-if="currentSubCategory && subCategory.name === currentSubCategory.name"></Image>
                    <Image v-else src="~/assets/icons/deploiement-droite-noir.png" width="30px"></Image>
                </FlexboxLayout>
                <StackLayout v-show="currentSubCategory && subCategory.name === currentSubCategory.name" v-if="currentCategory.subCategoryLabels[key].subSubCategoryLabels.length !== 0"
                             marginLeft="100px" marginTop="30px">
                    <Label v-for="(subSubCategory, key2, index2) in currentCategory.subCategoryLabels[key].subSubCategoryLabels"
                           :text="subSubCategory" @tap="changePage('productList', key, key2)" fontSize="15px" marginBottom="50px"/>
                </StackLayout>
            </template>
        </StackLayout>
    </ScrollView>
</template>

<script>
    export default {
        name: "SubCategories",

        created() {
            this.$store.commit('setHeader', false);
            this.$store.commit('setHeaderLabel', this.currentCategory.name);
        },

        methods: {
            changePage(page, subCategory, subSubCategory) {
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('setCurrentSubCategory', subCategory);
                this.$store.commit('setCurrentSubSubCategory', subSubCategory);
                this.$store.commit('addToHistory', page);
            },
            setCurrentSubCategory(subCategory) {
                this.$store.commit('setCurrentSubCategory', subCategory);
            }
        },

        computed: {
            currentCategory() {
                return this.$store.state.categoryLabels[this.$store.state.currentCategory];
            },
            currentSubCategory() {
                return this.currentCategory.subCategoryLabels[this.$store.state.currentSubCategory];
            },
        }
    }
</script>

<style scoped>
    .expansion {
        border-bottom-color: black;
        border-bottom-width: 2px;
        padding-left: 50px;
        margin-left: 50px;
        margin-right: 50px;
        padding-bottom: 70px;
        padding-top: 70px;
    }

    .active {
        color: #181d9b;
    }
</style>
