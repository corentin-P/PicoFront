<template>
    <nav class="navbar navbar-expand-lg" >
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="/images/logo.jpg" alt="Logo" width="40" height=auto class="d-inline-block align-text-top">   
            </a>
            <div class="collapse navbar-collapse" id="navbar">
                <h3 class = "navbar-title">{{name}}</h3>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="inscription.html">{{inscription}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{trainings}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{competitions}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{images}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{about}}</a>
                    </li>
                
                </ul>
            </div>
        </div>
    </nav>
</template>


<script setup>
    defineProps(['page_name'])
    let name = 'Open Mind';
    let inscription = 'Devenir Membre';
    let trainings = 'Entrainements';
    let competitions = 'Compétitions';
    let images = 'Galerie';
    let about = 'A propos';
</script>
<style lang="scss">
    @import '../assets/navbar.scss';

</style>