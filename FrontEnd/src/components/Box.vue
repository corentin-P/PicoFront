<template>
    <div class="box">
        <h3 class="center">{{ content['title'] }}</h3>

        <div v-for="c in content['description']" v-if="!content['HTML']">
            <p v-if="c.length == 2">{{ c[0] }} : {{ c[1] }}</p>
            <p v-else>{{ c }}</p>
        </div> 
        <div v-else v-html="content['description']">
        </div>
        <img v-if="content['image']" :src="content['image'][0]" :alt="content['image'][1]"/>
    </div>
</template>

<script setup>
    let props = defineProps({content : Object});
    
</script>

<style lang="scss">
    @import '../assets/box.scss';
</style>