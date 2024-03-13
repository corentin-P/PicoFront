// html
<template>
  
  <!-- HTML -->
  <Header page_name="Accueil"/> <!--importé dans script--> 
  <Carousel />
  <Box title="Actualités du club" description="blabla"/>
  <p>Contenu du site</p>
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


<style>
  @import 'bootstrap/dist/css/bootstrap.css'
</style>