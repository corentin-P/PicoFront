<template>
    <div v-for="t in tournaments" class="text">
        <p><strong>{{ t.title }}</strong></p>
        <p>Lieux : {{ t.place }}</p>
        <p>Date : {{ t.date }}</p>
        <p>Classement : {{ t.res }}</p>
    </div>
</template>

<script setup>
    let props = defineProps({tournaments: Array});
</script>