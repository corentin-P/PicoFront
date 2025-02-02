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
    <Tournament v-if="results" :tournaments="results" />
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
  import callApi from '@/utils'
  import { ref, watch } from 'vue'

  export default {
    data() {
      return {
        results: null,
        error: null,
        
      }
    },

    async loadResults() {
        try{
          const results = await callApi("GET", "/tournament/all", {})
          console.log(results)
        } catch (err) {
          const error = err.toString()
          console.log(error.value)
        }
      }
  }

  
  let nextTournament = [
          {
            date: "01/01/1970", 
            title: "Compétitions France", 
            result: "1er",
            location: "Montpellier"
          }
        ]

</script>


<style lang="scss">
  @import '../assets/tournament.scss';
</style>