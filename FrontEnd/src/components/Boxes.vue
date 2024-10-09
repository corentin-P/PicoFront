<template>
    <div class="boxes">
        <Box  v-for="c in contents" :content="c" />
    </div>
</template>

<script setup>
    import Box from '@/components/Box.vue';
    let props = defineProps({contents : Array});
</script>

<style lang="scss">
    @import "../assets/boxes.scss";
</style>