<template>
    <div class="box">
        <h3 class="title">{{ content['title'] }}</h3>
        <div v-for="c in content['description']">
            <p v-if="c.length == 2">{{ c[0] }} : {{ c[1] }}</p>
            <p v-else>{{ c }}</p>
        </div>
    </div>
</template>

<script setup>
    let props = defineProps({content : Array});
    console.log(props.content);
    //
    //<p v-else>{{ content[c] }}</p>
</script>

<style lang="scss">
    @import '../assets/box.scss';
</style>