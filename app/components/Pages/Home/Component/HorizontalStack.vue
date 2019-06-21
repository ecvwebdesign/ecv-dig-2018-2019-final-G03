<template>
    <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false">
        <StackLayout orientation="horizontal">
            <Label text="first" height="169"  width="169" backgroundColor="#43b883"/>
            <Label text="second" height="169" width="169" backgroundColor="#289062"/>
            <Label text="second" height="169" width="169" backgroundColor="#289062"/>
            <Label text="second" height="169" width="169" backgroundColor="#289062"/>
        </StackLayout>
    </ScrollView>
</template>

<script>
    export default {
        name: "HorizontalStack"
    }
</script>

<style scoped>
    Label {
        margin: 65px 0px 0px 50px;
    }

    /*Ajouter un margin right au last*/
</style>