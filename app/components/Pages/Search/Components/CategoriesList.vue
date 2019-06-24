<template>
    <TabView>
        <TabViewItem title="Lifestyle">
            <ScrollView class="margin-top">
                <FlexboxLayout flexDirection="column-reverse" justifyContent="space-around">
                        <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top margin-bot">
                        <Label text="football" width="40%" height="100" backgroundColor="#43b883" @tap="changePage('subCategories', 'football')"/>
                        <Label text="basket" width="40%" height="100" backgroundColor="#43b883" @tap="changePage('subCategories', 'basket')"/>
                    </FlexboxLayout>
                        <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                        <Label text="first" width="40%" height="100" backgroundColor="#43b883" @tap="changePage('subCategories', 1)"/>
                        <Label text="first" width="40%" height="100" backgroundColor="#43b883" @tap="changePage('subCategories', 1)"/>
                    </FlexboxLayout>
                        <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                        <Label text="first" width="40%" height="100" backgroundColor="#43b883" @tap="changePage('subCategories', 1)"/>
                        <Label text="first" width="40%" height="100" backgroundColor="#43b883" @tap="changePage('subCategories', 1)"/>
                    </FlexboxLayout>
                        <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                        <Label text="test" width="40%" height="100" backgroundColor="#43b883" @tap="changePage('subCategories', 1)"/>
                        <Label text="test" width="40%" height="100" backgroundColor="#43b883" @tap="changePage('subCategories', 1)"/>
                    </FlexboxLayout>
                        <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                        <Label text="ersdfh" width="40%" height="100" backgroundColor="#43b883" @tap="changePage('subCategories', 1)"/>
                        <Label text="test" width="40%" height="100" backgroundColor="#43b883" @tap="changePage('subCategories', 1)"/>
                    </FlexboxLayout>
                    <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                        <Label text="velo" width="40%" height="100" backgroundColor="#43b883" @tap="changePage('subCategories', 'velo')"/>
                        <Label text="tennis" width="40%" height="100" backgroundColor="#43b883" @tap="changePage('subCategories', 'tennis')"/>
                    </FlexboxLayout>
                </FlexboxLayout>
            </ScrollView>
        </TabViewItem>
        <TabViewItem title="Sport">
            <ScrollView class="margin-top">
                <FlexboxLayout flexDirection="column-reverse" justifyContent="space-around">
                        <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top margin-bot">
                        <Label text="first" width="40%" height="100" backgroundColor="#43b883"/>
                        <Label text="first" width="40%" height="100" backgroundColor="#43b883"/>
                    </FlexboxLayout>
                        <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                        <Label text="first" width="40%" height="100" backgroundColor="#43b883"/>
                        <Label text="first" width="40%" height="100" backgroundColor="#43b883"/>
                    </FlexboxLayout>
                        <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                        <Label text="first" width="40%" height="100" backgroundColor="#43b883"/>
                        <Label text="first" width="40%" height="100" backgroundColor="#43b883"/>
                    </FlexboxLayout>
                        <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                        <Label text="test" width="40%" height="100" backgroundColor="#43b883"/>
                        <Label text="test" width="40%" height="100" backgroundColor="#43b883"/>
                    </FlexboxLayout>
                        <FlexboxLayout justifyContent="space-around" width="100%" class="margin-top">
                        <Label text="ersdfh" width="40%" height="100" backgroundColor="#43b883"/>
                        <Label text="test" width="40%" height="100" backgroundColor="#43b883"/>
                    </FlexboxLayout>
                </FlexboxLayout>
            </ScrollView>
        </TabViewItem>
    </TabView>
</template>

<script>
    export default {
        name: "CategoryList",

        created() {
        },

        methods: {
            changePage(page, category) {
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('setCurrentCategory', category);
                this.$store.commit('addToHistory', page);
            }
        },
    }
</script>

<style scoped>
    .margin-bot {
        margin-bottom: 50px;
    }

    .margin-top {
        margin-top: 50px;
    }
</style>
