<template>
    <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false">
        <StackLayout orientation="horizontal">
            <Image src="~/assets/images/home/news/accueil_nouveaute1.png" width="169"/>
            <Image src="~/assets/images/home/news/accueil_nouveaute2.png" width="169"/>
            <Image src="~/assets/images/home/news/accueil_nouveaute3.png" width="169"/>
            <Image src="~/assets/images/home/news/accueil_nouveaute1.png" width="169"/>
            <Image src="~/assets/images/home/news/accueil_nouveaute2.png" width="169"/>
            <Image src="~/assets/images/home/news/accueil_nouveaute3.png" width="169" marginRight="20"/>
        </StackLayout>
    </ScrollView>
</template>

<script>
    export default {
        name: "HorizontalStack"
    }
</script>

<style scoped>
    Image {
        margin: 20px 0px 70px 50px;
    }

    /*Ajouter un margin right au last*/
</style>