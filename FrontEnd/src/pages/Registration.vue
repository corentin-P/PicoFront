// html
<template>
  
  <!-- HTML -->
  <header>
    <Header /> 
  </header>
  <body>
    <h1 class="center">Devenir Membre</h1>
    <div class="container">
      <div class="column1">
        <h4>Prérequis</h4>
        <div>
          <ul>
            <li v-for="p in prerequis">{{ p }}</li>
          </ul>
        </div>
      </div>
      <div class="column2">
        <h4>Organisation</h4>
        <div>
          <ul>
            <li v-for="o in organisation">{{ o }}</li>
          </ul>
        </div>
      </div>
    </div>
    <h2 class="center">Vous êtes prêt ?</h2>
    <p class="center">Vous pouvez venir à une séance d’entrainement pour essayer avant de vous décider. <br> Veuillez remplir le formulaire ci dessous et l’envoyer à : president@gmail.com</p>
    <p class="center"><a href="files/formulaire.txt" download="">Formulaire.pdf</a></p>
  </body>
  <footer>
    <Footer />
  </footer>
</template>


<script setup>
  // java script
  import Header from '@/components/Header.vue'; // @ = src, définit dans vite.config.js
  import Footer from '@/components/Footer.vue';

  let prerequis = [
    "être motivé", 
    "Ne pas avoir peur blablablablablablablablablablablablablablablablabl ablablablablablablablablablablablablabla", 
    "...", 
    "...", 
    "...", 
    "...", 
    "...", 
    "...", 
    "...", 
    "...", 
    "..."
  ];

  let organisation = [
    "Vous venez quand vous voulez aux entrainements", 
    "Vous pouvez être débutant ou confirmé blablablablablablablablablabla", 
    "...", 
    "...", 
    "...", 
    "...", 
    "...", 
    "...", 
    "...", 
    "...", 
    "..."
  ]

</script>


<style lang="scss">
  @import '../assets/inscription.scss';
</style>