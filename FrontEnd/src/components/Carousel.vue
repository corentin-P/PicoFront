<template>

    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="getImage(0)" class="d-block h-100" alt="..." >
    </div>
    <div class="carousel-item">
      <img :src="getImage(1)" class="d-block h-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="getImage(2)" class="d-block h-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</template>

<script setup>
    function getImage(num) {
      let images = ["2_champions_alsace.jpg", "stage_club_11_23.jpg", "séquence_combat_défense.jpg"];
      return "/images/" + images[num]; // appel à WS pour avoir toutes les images 
    }
    
</script>

<style lang="scss">
    @import '../assets/carousel.scss';

</style>