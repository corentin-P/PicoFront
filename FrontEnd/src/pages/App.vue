// html
<template>
  
  <!-- HTML -->
  <header>
    <Header /> 
    <Carousel />
  </header>
  <body>
    <Boxes :contents="BoxesContents"/>
  </body>
  <footer>
    <Footer />
  </footer>

</template>


<script setup>
  // java script
  import Header from '@/components/Header.vue'; // @ = src, définit dans vite.config.js
  import Footer from '@/components/Footer.vue';
  import Boxes from '@/components/Boxes.vue';
  import Carousel from '@/components/Carousel.vue'

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

  //let contenuActus = FileReader();
  //let text = contenuActus.readAsText('text/Accueil_Actus.txt');
</script>


<style>
  @import 'bootstrap/dist/css/bootstrap.css';
</style>