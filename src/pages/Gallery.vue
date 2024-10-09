// html
<template>
  <header>
    <Header /> 
  </header>
  <body>
    <h1>Galerie</h1>
    <div class="gallery">
      <div class="carousel" id="carouselContainer">
        <Carousel :images="imgs"/>
      </div>
      <div class="icons">
        <img class="icon" v-for="(image, i) in imgs" :src=path+image @click="change(i)"/>
      </div>
    </div>
  </body>
  <footer>
    <Footer />
  </footer>
</template>


<script setup>
  import Header from '@/components/Header.vue'; 
  import Footer from '@/components/Footer.vue';
  import Carousel from '@/components/Carousel.vue';
  
  let path = "/images/";
  let imgs = ["stage_club_11_23.jpg", "sequence_combat_defense.jpg", "sequence_combat_defense_2.jpg", "dojo.jpg", "batiment_entrainements.png", "2_champions_alsace.jpg", "2_champions_alsace_2.jpg", "2_champions_alsace_3.jpg"];

  /**
   * Change d'image active dans le carousel
   * @param index : index de l'image à activer dans le carousel
   */
  function change(index) {
    // enlève l'image active courante (liste = sécurité)
    let active = document.getElementsByClassName('carousel-item active');
    for (let i = 0; i < active.length; i++) {
      active[i].className = 'carousel-item';
    }
    // active l'image à activer
    let images = document.getElementsByClassName('carousel-item');
    images[index].className = 'carousel-item active';
    return;
  }

</script>


<style lang="scss">
  @import '../assets/gallery.scss';
</style>