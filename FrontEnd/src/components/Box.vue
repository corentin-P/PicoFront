<template>

    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
</template>

<script setup>
    let props = defineProps(['title', 'description']);
</script>