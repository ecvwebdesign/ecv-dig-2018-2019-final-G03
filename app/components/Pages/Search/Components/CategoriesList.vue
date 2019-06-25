<template>
    <TabView selectedTabTextColor="#164194">
        <TabViewItem title="Lifestyle">
            <ScrollView class="margin-top">
                <FlexboxLayout flexWrap="wrap" justifyContent="center" marginTop="30">
                    <Button v-for="(categorie) in categoriesFire" :text="categorie.label" width="175" height="175"
                            marginBottom="20"
                            @tap="changePage('subCategories', categorie.name)" class="last-btn"/>
                </FlexboxLayout>
            </ScrollView>
        </TabViewItem>
        <TabViewItem title="Sport">
            <ScrollView class="margin-top">
                <FlexboxLayout flexWrap="wrap" justifyContent="center" marginTop="30">
                    <template v-for="(category, key, index) in categories">
                        <FlexboxLayout flexWrap="wrap" justifyContent="center">
                            <Button v-for="(category2, key2, index2) in categories"
                                    v-if="index2 === index || index2 === index + 1"
                                    :text="category2.name" width="175" height="175" marginBottom="20" class="last-btn"
                                    @tap="changePage('subCategories', key2)"/>
                        </FlexboxLayout>
                    </template>
                </FlexboxLayout>
            </ScrollView>
        </TabViewItem>
    </TabView>
</template>

<script>
    import firebase from "nativescript-plugin-firebase";

    export default {
        name: "CategoryList",
        data() {
            return {
                categoriesFire: []
            }
        },
        created() {
            firebase.init({
                persist: true
            });

            firebase.getValue('/categories')
                .then(result => this.categoriesFire = result.value)
                .catch(error => console.log("Error: " + error));

        },
        updated() {
        },
        methods: {
            changePage(page, category) {
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('setCurrentCategory', category);
                this.$store.commit('addToHistory', page);
            }
        },

        computed: {
            categories() {
                return this.$store.state.categoryLabels;
            }
        }
    }
</script>

<style scoped>
    TabView {
        font-family: OpenSans-Regular;
    }

    Button {
        font-family: OpenSans-Regular;
        color: #164194;
        border-width: 1px;
        border-color: #164194;
        background-color: white;
        margin: 0px 25px 0px 25px;
    }

    .margin-bot {
        margin-bottom: 50px;
    }

    .margin-top {
        margin-top: 50px;
    }
</style>
