// html
<template>
  
  <!-- HTML -->
  <header>
    <Header /> 
  </header>
  <body>
    <h1>Prochaines Compétitions</h1>
    <Suspense>
       <Tournament :next='true'/>
    </Suspense>
  <h1>Résultats</h1>
  <Suspense>
    <Tournament :next='false'/>
  </Suspense>
  </body>
  <footer>
    <Footer />
  </footer>
  
</template>


<script setup>
  // java script
  import Header from '@/components/Header.vue'; // @ = src, définit dans vite.config.js
  import Footer from '@/components/Footer.vue';
  import Tournament from '@/components/Tournament.vue';
  
</script>


<style lang="scss">
  @import '../assets/tournament.scss';
</style>