// html
<template>
  <header>
    <Header /> 
    <h1>Open Mind</h1>
    <Carousel :images="carouselImages"/>
  </header>
  <body>
    <Boxes :contents="BoxesContents"/>
  </body>
  <footer>
    <Footer />
  </footer>
</template>


<script setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import Boxes from '@/components/Boxes.vue';
  import Carousel from '@/components/Carousel.vue'

  let carouselImages = ["2_champions_alsace.jpg", "stage_club_11_23.jpg", "sequence_combat_defense.jpg"];

  let BoxesContents = [{
    title: 'Actualités du club',
    description: ["Prochain entrainement : lundi 1/04"]
  }, 
  {
    title: 'Prochaines compétitions',
    description: {
      type: ["Type de championnat", "Coupe d'Alsace"],
      date: ["Date", "Samedi 6/04"],
      place: ["Lieu", "Strasbourg"]
    }
  },
  {
    title: 'Résultats de la dernière compétition',
    description: {
      type: ["Type de championnat ", " Coupe de France"],
      price: ["Prix", " 2 médailles d'or"],
      date: ["Date", "Samedi 30/04"],
      place: ["Lieu", "Lyon"]
    }
  }];
</script>


<style>
  @import '../assets/main.scss';
  @import 'bootstrap/dist/css/bootstrap.css';
</style>