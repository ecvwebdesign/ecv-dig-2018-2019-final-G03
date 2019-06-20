<template>
    <GridLayout rows="*,60">
        <StackLayout row="1" orientation="horizontal" class="divider">
            <StackLayout width="20%">
                <Image src="~/assets/icons/home.png" width="35"/>
                <Label text="Test" width="35"/>
            </StackLayout>
            <StackLayout width="20%">
                <Image src="~/assets/icons/home.png" width="35"/>
                <Label text="Test" width="35"/>
            </StackLayout>

            <StackLayout width="20%">
                <Image src="~/assets/icons/home.png" width="35"/>
                <Label text="Test" width="35"/>
            </StackLayout>

            <StackLayout width="20%">
                <Image src="~/assets/icons/home.png" width="35"/>
                <Label text="Test" width="35"/>
            </StackLayout>
            <StackLayout width="20%">
                <Image src="~/assets/icons/home.png" width="35"/>
                <Label text="Test" width="35" class="small"/>
            </StackLayout>
        </StackLayout>
    </GridLayout>
</template>

<script>
    export default {
        name: "BottomMenu"
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