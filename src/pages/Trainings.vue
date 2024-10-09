// html
<template>
  
  <!-- HTML -->
  <header>
    <Header /> 
  </header>
  <body>
    <h1>Entrainements</h1>
    <Boxes :contents="BoxesContents" />
    <div class="text">
      <h3>Plan :</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1215.8866415070886!2d7.297443601912535!3d48.34384969514493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1712757700866!5m2!1sfr!2sfr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  import Boxes from '@/components/Boxes.vue';

  function createHTMLUl (tab) {
    let html = "<ul>";
    for (var i = 0; i < tab.length; i++) {
      html += "<li>" + tab[i] + "</li>";
    }
    html += "</ul>"
    return html;
  }

  let ownMaterial = ["votre coquille", "vos gants", "une tenue"];
  let loanMaterial = ["des batons", "des faux pistolets", "des sacs à main"];
  let ownMaterialHTML = createHTMLUl(ownMaterial);
  let loanMaterialHTML = createHTMLUl(loanMaterial);

  let BoxesContents = [{
    title: 'Séances',
    description: {
      training1: "Tous les lundis (19h30-21h)",
      training2: "Tous les jeudis (20h-21h30)",
      training3: "Tous les samedis (11h-12h30)",
    },
    image: ["images/dojo.jpg", "Image du dojo"]
  },
  {
    title: "Matériel", 
    description: "<p>Vous devez Ramener :</p>" + ownMaterialHTML + "<p>Nous prêtons</p>" + loanMaterialHTML,
    HTML: true
  }, 
  {
    title: "Lieu", 
    description: {
      name: "Dojo du centre sportif de Villé", 
      adress: "Adresse : 4 Rue Belle Vue, 67220 Villé"
    },
    image: ["images/batiment_entrainements.png", "Image du batiment"]
  }
  ];
</script>

<style lang="scss">
  @import '../assets/trainings.scss';
</style>