<template>
    <div v-for="t in tournaments" class="text">
        <p><strong>{{ t.title }}</strong></p>
        <p>Lieux : {{ t.location }}</p>
        <p>Date : {{ t.date }}</p>
        <p>Classement : {{ t.result }}</p>
    </div>
</template>

<script setup>
    import callApi from '@/utils'
    let tournaments = await callApi("GET", "/tournament/all", {})
</script>