<template>
<div class="row row-cols-1 row-cols-md-2 g-4 p-5">

<!-- COMPTEUR DE MOTS  -->
<div class="container my-4">
  <div class="row">
    <div class="col">
      <!-- La carte devient clickable pour déclencher l'offCanvas -->
      <div class="card h-100" >
			<a target="_blank"  style="cursor: pointer;"  href="https://eliazoura.fr/navdash/">
				<img src="/pix/projets/compteur.png" class="card-img-top" alt="application NavDash"/>

			</a>
        <div class="card-body">
<div class="container py-5">
  <!-- Titre principal -->
  <div class="row mb-4">
    <div class="col-12 text-start">
		<a target="_blank"  style="cursor: pointer;"  href="https://eliazoura.fr/navdash/">
			<h3 class="fw-bold mb-1">Compteur de mot dynamique</h3>
		</a>

    </div>
  </div>

  <!-- Description globale -->
  <div class="row">
    <div class="col-12 text-start">
      <p class="lead">
        Développée avec <span class="fw-bold">Vue 3</span>, cette application moderne et réactive a été conçue pour optimiser votre expérience de traitement de texte.  
        Son interface épurée vous permet d’analyser et de retravailler vos contenus en temps réel, tout en gardant un contrôle précis sur la mise en forme et la qualité du texte.
      </p>
    </div>
  </div>

  <!-- Fonctionnalités principales -->
  <div class="row my-4">
    <div class="col-12 text-start">
      <h2 class="h4 fw-bold mb-3">Fonctionnalités principales</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Comptage automatique des mots</li>
        <li class="list-group-item">Détection et comptage des espaces multiples</li>
        <li class="list-group-item">Conversion rapide du texte en minuscules ou en majuscules</li>
      </ul>
    </div>
  </div>

  <!-- Résumé -->
  <div class="row mt-4">
    <div class="col-12 text-start">
      <h3 class="h5 fw-bold mb-2">En résumé</h3>
      <p>
        Cette application se présente comme un outil indispensable pour optimiser la clarté de vos messages.
      </p>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Offcanvas -->
<div class="offcanvas offcanvas-end custom-offcanvas" tabindex="-1" id="counterWords">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">À propos de SmartCalc</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ICI COMPTEUR DE MOTS APP
  </div>
</div>

<!-- FIN COMPTEUR   ------------------------------------------------------------->


<!-- CACLUCLO  ------------------------------------------------------------->
<div class="container my-4">
  <div class="row">
    <div class="col">
      <!-- La carte devient clickable pour déclencher l'offCanvas -->
      <div class="card h-100" style="cursor: pointer;" data-bs-toggle="offcanvas" data-bs-target="#calculo">
        <img src="/pix/projets/caclulo1000px.webp" class="card-img-top" alt="Palm Springs Road"/>
        <div class="card-body">
			 <div class="container py-5">
  <!-- Titre principal -->
  <div class="row ">
    <div class="col-12 text-start">
      <h3 class="fw-bold mb-1">Calculatrice</h3>
    </div>
  </div>

  <!-- Description globale -->
  <div class="row">
    <div class="col-12 text-start">
      <p class="lead">
        Développée avec <span class="fw-bold">Vue 3</span>, cette calculatrice moderne et réactive a été conçue pour répondre aux besoins des élèves du collège.  
        Son interface épurée vous permet de réaliser des calculs de base en toute simplicité, tout en offrant des fonctionnalités supplémentaires pour une utilisation optimale.
      </p>
    </div>
  </div>

  <!-- Fonctionnalités principales -->
  <div class="row my-4">
    <div class="col-12 text-start">
      <h2 class="h4 fw-bold mb-3">Fonctionnalités principales</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Calculs de base : addition, soustraction, multiplication, division</li>
        <li class="list-group-item">Gestion de la mémoire de calcul : MC, MR, MS</li>
        <li class="list-group-item">Utilisation des parenthèses pour les calculs complexes</li>
      </ul>
    </div>
  </div>

  <!-- Résumé -->
  <div class="row mt-4">
    <div class="col-12 text-start">
      <h3 class="h5 fw-bold mb-2">En résumé</h3>
      <p>
        Cette calculatrice se présente comme un outil indispensable pour les élèves du collège, facilitant la réalisation des calculs nécessaires pour leurs études.
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>
</div>

<!-- Offcanvas -->
<div class="offcanvas offcanvas-end custom-offcanvas" tabindex="-1" id="calculo">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">À propos de SmartCalc</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

	<iframe src="https://eliazoura.fr/app/index.html" class="w-100 h-100" frameborder="0" title="SmartCalc Application"></iframe>

</div>
</div>

<!-- FIN CACLUCLO  ------------------------------------------------------------->


<!-- JEUX BRIKO  -->
<div class="container my-4">
  <div class="row">
    <div class="col">
      <!-- La carte devient clickable pour déclencher l'offCanvas -->
      <div class="card h-100" style="cursor: pointer;" data-bs-toggle="offcanvas" data-bs-target="#briko">
        <!-- <img src="/pix/projets/briko.png" class="card-img-top" alt="Palm Springs Road"/> -->
        <img src="/pix/projets/videos/extrait-game.gif" class="card-img-top" alt="Palm Springs Road"/>
        <div class="card-body p-5">
<!-- Description globale -->
<div class="row">
  <div class="col-12 text-start">
    <h3 class="fw-bold mb-1">Jeu de Casse Briques</h3>

    <p class="lead">
      Développée en pur JavaScript, cette application de casse-brique offre une expérience arcade rétro revisitée. Conçue pour un seul joueur, elle intègre un système de score motivant ainsi que des effets sonores générés directement en JavaScript pour une immersion audio unique.
    </p>
  </div>
</div>

<!-- Fonctionnalités principales -->
<div class="row my-4">
  <div class="col-12 text-start">
    <h2 class="h4 fw-bold mb-3">Fonctionnalités principales</h2>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        Gameplay classique : Un joueur contrôle une raquette pour détruire des briques dans un univers rétro.
      </li>
      <li class="list-group-item">
        Suivi du score : Un système de score intégré permet de mesurer vos performances en temps réel.
      </li>
      <li class="list-group-item">
        Audio dynamique : Des sons réalistes générés en JavaScript créent une ambiance sonore immersive à chaque action.
      </li>
      <li class="list-group-item">
        Trois niveaux de difficulté : Choisissez entre un challenge accessible, intermédiaire ou expert pour pimenter vos parties.
      </li>
    </ul>
  </div>
</div>

<!-- Résumé -->
<div class="row mt-4">
  <div class="col-12 text-start">
    <h3 class="h5 fw-bold mb-2">En résumé</h3>
    <p>
      Cette application de casse-brique démontre ma capacité à allier un gameplay addictif à des fonctionnalités techniques avancées. Elle illustre parfaitement mon savoir-faire en JavaScript, capable de transformer des idées simples en expériences interactives et riches en émotions.
    </p>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>
</div>

<!-- JEUX BRIKO Offcanvas -->
<div class="offcanvas offcanvas-end custom-offcanvas" tabindex="-1" id="briko">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">JEUX BRIKO </h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    BRIKO
  </div>
</div>


<!-- E L I A Z O U R A .FR  -->

<!-- JEUX BRIKO  -->
<div class="container my-4">
  <div class="row">
    <div class="col">
      <!-- La carte devient clickable pour déclencher l'offCanvas -->
      <div class="card h-100" style="cursor: pointer;" data-bs-toggle="offcanvas" data-bs-target="#eliazoura.fr">
        <img src="/pix/projets/eliazoura.png" class="card-img-top" alt="Palm Springs Road"/>
        <div class="card-body p-5">
<!-- Description globale -->
<div class="row">
  <div class="col-12 text-start">
    <h3 class="fw-bold mb-1">Eliazoura.fr</h3>
    <p class="lead">
      Développée dans le cadre de ma soutenance de développeur Web full stack, <span class="fw-bold">eliazoura.fr</span> est une application en ligne novatrice. Ce projet illustre mon expertise en combinant une interface dynamique réalisée avec <span class="fw-bold">Vue 3</span> et un back-end performant reposant sur <span class="fw-bold">ExpressJS</span>, <span class="fw-bold">NodeJS</span> et <span class="fw-bold">MongoDB</span>.
    </p>
  </div>
</div>

<!-- Fonctionnalités principales -->
<div class="row my-4">
  <div class="col-12 text-start">
    <h2 class="h4 fw-bold mb-3">Fonctionnalités principales</h2>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        Architecture distincte : Déploiement séparé de l’interface utilisateur et du serveur pour une flexibilité accrue.
      </li>
      <li class="list-group-item">
        Back-end robuste : Réalisé avec <span class="fw-bold">ExpressJS</span>, <span class="fw-bold">NodeJS</span> et <span class="fw-bold">MongoDB</span>, assurant performance et évolutivité.
      </li>
      <li class="list-group-item">
        Sécurité renforcée : Les communications entre le front-end et le serveur se font via des appels API vers des endpoints dédiés, complétés par des tests rigoureux pour prévenir les attaques.
      </li>
    </ul>
  </div>
</div>

<!-- Résumé -->
<div class="row mt-4">
  <div class="col-12 text-start">
    <h3 class="h5 fw-bold mb-2">Prochaine évolution</h3>
    <p>
      Intégration d'une application de discussion en ligne entre les membres du site.
    </p>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>
</div>

<!-- JEUX BRIKO Offcanvas -->
<div class="offcanvas offcanvas-end custom-offcanvas" tabindex="-1" id="eliazoura.fr">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">ELIAZOURA.FR </h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    eliazoura.fr
  </div>
</div>



</div>
</template>

<script setup lang="ts">
// Import du composant StandaloneApp

// Avec <script setup>, pour définir des options (par exemple le nom du composant),
// utilisez la macro defineOptions au lieu d’export default.
defineOptions({
	name: 'Projets',
});
</script>

<style>

.custom-offcanvas {
  width: 600px !important; /* Largeur maximale de l'offcanvas */
}

/* Ajoutez ici des styles spécifiques au composant si nécessaire */
</style>
