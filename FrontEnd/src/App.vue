// html
<template>
  <!-- HTML -->
  <Header /> <!--importé dans script--> 
  <Box />
  <p>Contenu du site</p>
  <!-- Affichage d'une variable: {{ text }}-->
  <Footer />
</template>


<script setup>
  // java script
  import Header from '@/components/Header.vue'; // @ = src, définit dans vite.config.js
  import Footer from '@/components/Footer.vue';
  import Box from '@/components/Box.vue';


  //let contenuActus = FileReader();
  //let text = contenuActus.readAsText('text/Accueil_Actus.txt');
</script>


<style scoped>

</style>