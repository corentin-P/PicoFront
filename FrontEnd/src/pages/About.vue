// html
<template>
  
  <!-- HTML -->
  <header>
    <Header /> 
  </header>
  <body>
    <h1>Qui sommes nous? </h1>
    <div class="text">
      <p>Nous sommes une association qui a vu le jour en 2023. 
      Nous organisons des cours et participons à des compétitions de Krav Maga. </p>
      <h3>Bureau : </h3>
      <p><strong>Président :</strong> intel</p>
      <p><strong>Vice-président :</strong> intel</p>
      <p><strong>Secrétaire :</strong> intel</p>
      <p><strong>Secrétaire adjoint :</strong> intel</p>
      <p><strong>trésorier :</strong> intel</p> 
      <p><strong>trésorier adjoint :</strong> intel</p>

    </div>
  </body>
  <footer>
    <Footer />
  </footer>

</template>


<script setup>
  // java script
  import Header from '@/components/Header.vue'; // @ = src, définit dans vite.config.js
  import Footer from '@/components/Footer.vue';
</script>


<style lang="scss">
  @import '../assets/main.scss';
</style>