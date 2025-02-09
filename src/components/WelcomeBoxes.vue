<template>
    <Boxes :contents="BoxesContents"></Boxes>
</template>

<script setup>
    import Boxes from '@/components/Boxes.vue';
    import callApi from '@/utils';

    let nextTournament = await callApi("GET", "/tournament/next", {})
    let lastTournament = await callApi("GET", "/tournament/last", {})
    console.log(nextTournament)
    let BoxesContents = [{
        title: 'Actualités du club',
        description: ["Prochain entrainement : lundi 1/04"]
    }, 
    {
        title: 'Prochaine compétition',
        description: {
            type: nextTournament['title'],
            date: ["Date", nextTournament['date']],
            place: ["Lieu", nextTournament['location']]
        }
    },
    {
        title: 'Résultats de la dernière compétition',
        description: {
            type: lastTournament['title'],
            date: ["Date", lastTournament['date']],
            place: ["Lieu", lastTournament['location']],
            result: ["Résultat", lastTournament['result']]
        }
    }];
</script>

<style lang="scss">
    @import "../assets/boxes.scss";
</style>