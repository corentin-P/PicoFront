<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="/images/logo.jpg" alt="Logo" width="40" height="40" class="d-inline-block align-text-top">
                <h3 class="navbar-title" style="margin-left: 5px; margin-top: 2px;">{{name}}</h3>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbar" aria-controls="navbar"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="registration.html">{{inscription}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trainings.html">{{trainings}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="tournament.html">{{competitions}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="gallery.html">{{images}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">{{about}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script setup>
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