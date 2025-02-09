// html
<template>
  <header>
    <Header /> 
    <h1>Open Mind</h1>
    <Carousel :images="carouselImages"/>
  </header>
  <body>
    <Suspense>
      <WelcomeBoxes/>
    </Suspense>
  </body>
  <footer>
    <Footer />
  </footer>
</template>


<script setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import Carousel from '@/components/Carousel.vue'
  import WelcomeBoxes from '@/components/WelcomeBoxes.vue';

  let carouselImages = ["2_champions_alsace.jpg", "stage_club_11_23.jpg", "sequence_combat_defense.jpg"];
  
</script>


<style>
  @import '../assets/main.scss';
  @import 'bootstrap/dist/css/bootstrap.css';
</style>