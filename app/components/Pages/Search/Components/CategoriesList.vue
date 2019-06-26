<template>
    <TabView selectedTabTextColor="#164194">
        <TabViewItem title="Sport">
            <ScrollView class="margin-top">
                <FlexboxLayout flexWrap="wrap" justifyContent="center" marginTop="30">
                    <template v-for="(category) in categories" @tap="changePage('subCategories', 'sportCo')">
                        <Image :src="category.img" width="175" height="175" class="default-margin"/>
                    </template>
                </FlexboxLayout>
            </ScrollView>
        </TabViewItem>
        <TabViewItem title="Lifestyle">
            <ScrollView class="margin-top">
                <FlexboxLayout flexWrap="wrap" justifyContent="center" marginTop="30">
                    <template v-for="(category) in categoriesSport">
                        <Image :src="category.img" width="175" height="175" class="default-margin" @tap="changePage('subCategories', 'sportCo')"/>
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
            },
            categoriesSport() {
                return this.$store.state.categoriesSport;

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

    .default-margin {
        margin: 0px 15px 0px 15px;
    }

    .margin-bot {
        margin-bottom: 50px;
    }

    .margin-top {
        margin-top: 50px;
    }
</style>
