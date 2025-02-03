// html
<template>
  
  <!-- HTML -->
  <header>
    <Header /> 
  </header>
  <body>
    <h1>Prochaines Compétitions</h1>
    <Suspense>
       <Tournament/>
    </Suspense>
    <Suspense>
    <h1>Résultats</h1>
    <Tournament/>
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
  

  /*export default {
    data() {
      return {
        nextTournament: []
      }
    }, 
    mounted() {
      callApi("GET", "/tournament/all", {})
        .then(data => nextTournament)
      
    }
  }*/

  //let tournament = nextTournament[0][date];
  // await callApi("GET", "/tournament/all", {})
  /*let nextTournament = [
          {
            date: "01/01/1970", 
            title: "Compétitions France", 
            result: "1er",
            location: "Montpellier"
          }
        ]
*/
</script>


<style lang="scss">
  @import '../assets/tournament.scss';
</style>