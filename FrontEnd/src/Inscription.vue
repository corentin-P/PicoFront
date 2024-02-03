// html
<template>
  
  <!-- HTML -->
  <Header page_name="Accueil"/> <!--importé dans script--> 
  <Box title="S'inscrire?" description="blablabla"/>
  <p>Contenu du site2</p>
  <!-- Affichage d'une variable: {{ text }}-->
  <Footer />
</template>


<script setup>
  // java script
  import Header from '@/components/Header.vue'; // @ = src, définit dans vite.config.js
  import Footer from '@/components/Footer.vue';
  import Box from '@/components/Box.vue';
  import Carousel from '@/components/Carousel.vue'


  //let contenuActus = FileReader();
  //let text = contenuActus.readAsText('text/Accueil_Actus.txt');
</script>


<style scoped>
  @import 'bootstrap/dist/css/bootstrap.css'
</style>