<template>
    <GridLayout rows="*,60">
        <StackLayout row="1" orientation="horizontal" class="divider">
            <StackLayout width="20%" @tap="changePage('home')">
                <Image src="~/assets/icons/home.png" width="35"/>
                <Label text="Test" width="35"/>
            </StackLayout>
            <StackLayout width="20%" @tap="changePage('search')">
                <Image src="~/assets/icons/home.png" width="35"/>
                <Label text="Test" width="35"/>
            </StackLayout>

            <StackLayout width="20%" @tap="changePage('shop')">
                <Image src="~/assets/icons/home.png" width="35"/>
                <Label text="Test" width="35"/>
            </StackLayout>

            <StackLayout width="20%">
                <Image src="~/assets/icons/home.png" width="35"/>
                <Label text="Test" width="35"/>
            </StackLayout>
            <StackLayout width="20%" @tap="changePage('account')">
                <Image src="~/assets/icons/home.png" width="35"/>
                <Label text="Test" width="35" class="small"/>
            </StackLayout>
        </StackLayout>
    </GridLayout>
</template>

<script>
    import * as application from "tns-core-modules/application";

    export default {
        name: "BottomMenu",
        created() {
            let self = this;
            application.android.on(application.AndroidApplication.activityBackPressedEvent, (args) => {
                console.log('ici', self.$store.state.currentPage);
                if (self.$store.state.currentPage !== 'home') {
                    args.cancel = true;
                    self.$store.commit('goBackHistory');
                    console.log('la', self.$store.state.currentPage);
                } else {
                    args.cancel = false;
                }
            });
        },
        methods: {
            changePage(page) {
                this.$store.commit('setCurrentPage', page);
                this.$store.commit('addToHistory', page);
            },
            trigger() {
                this.$refs.fileInput.click()
            }
        }
    }
</script>

<style scoped>
    .small {
        font-size: 10px;
    }

    .divider {
        border-top-color: black;
        border-top-width: 2px;
    }
</style>
