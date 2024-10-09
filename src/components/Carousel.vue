<template>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel">
    <div id="imagesContainer" class="carousel-inner">
      <div class="carousel-item active">
        <img :src="activeImage" class="d-block h-100" alt="..." />
      </div>
      <div class="carousel-item" v-for="i in props.images">
        <img :src="i" class="d-block h-100" alt="..." />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
</template>

<script setup>
    let props = defineProps({images : Array, active: Number});

    for (var i = 0; i < props.images.length; i++) {
      props.images[i] = "/images/" + props.images[i];
    }
    if (typeof props.active === 'undefined') {
      var active = 0;
    } else {
      var active = props.active;
    }
    let activeImage = props.images[active];
    
    // modification de la liste pour que l'image active soit en première position
    if (active !== 0) {
      for (let i = 0; i < active; i++) {
        props.images.push(props.images[0]);
        props.images.shift();
      }
    }
    props.images.shift();

</script>

<style lang="scss">
    @import '../assets/carousel.scss';
</style>