// html
<template>
  
  <!-- HTML -->
  <header>
    <Header /> 
  </header>
  <body>
    <h1>Prochaines Compétitions</h1>
    <Tournament :tournaments="nextTournament" />

    <h1>Résultats</h1>
    <Tournament :tournaments="res" />
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

  let res = [
    {
      date: "01/01/1970", 
      title: "Compétitions France", 
      res: "1er",
      place: "Montpellier"
    }, 
    {
      date: "01/01/1970", 
      title: "Compétitions France", 
      res: "1er",
      place: "Montpellier"
    }, 
    {
      date: "01/01/1970", 
      title: "Compétitions France", 
      res: "1er",
      place: "Montpellier"
    }
  ];

  let nextTournament = [
    {
      date: "01/01/1970", 
      title: "Compétitions France", 
      res: "1er",
      place: "Montpellier"
    }
  ]
</script>


<style lang="scss">
  @import '../assets/tournament.scss';
</style>