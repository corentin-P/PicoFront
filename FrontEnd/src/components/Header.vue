<template>
    <nav class="navbar navbar-expand-lg" style="background-color: #bbebfd">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="!/images/logo.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                {{name}}
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar">
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