<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTheme } from './01data/useTheme';
import { MDBBtn, MDBIcon, MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit';

import CVCardsList from './CvCardsList.vue';
import CvExp from './CvExp.vue';
import TechnologySection from './CvTechnoCard.vue';
import { competencyData } from './01data/competencyData';
import { techData, frameworkData } from './01data/techData';

const { isDarkMode, toggleDarkMode, theme } = useTheme();


// Sample CV experiences data
const experiences = ref([
  {
    id: 4,
    timePeriod: "2013 - 2025",
    jobTitle: "Formateur web & graphisme",
    company: "Ellipse formations",
    location: "Paris",
    projectTitle: "Conception et animation de formations",
    skills: [
      "Audit des apprenants, constitution des groupes",
      "Formations en présentiel et en ligne (groupe et individuel)",
      "Accompagnement des apprenants",
      "Adaptation des contenus aux besoins spécifiques",
      "Outils graphiques : Suite Adobe, Figma",
      "Langages et structure web : HTML, CSS, JS",
    ],
    accentColor: "#fbc02d" // Exemple de jaune MDB
  },
  {
    id: 1,
    timePeriod: "Depuis mars 2024 à mars 2025",
    jobTitle: "Développeur web & assistant formateur",
    company: "Ifocop",
    location: "Paris",
    projectTitle: "Refonte du LMS sous Moodle",
    skills: [
      "Scripts JS",
      "Templating Html",
      "Css Responsive",
      "Accessibilité",
      "Intégration de plugins",
      "Formation à la nouvelle interface"
    ],
    accentColor: "#1266f1" // MDB primary blue
  },
  {
    id: 2,
    timePeriod: "2020 - 2023",
    jobTitle: "Concepteur de sites web",
    company: "Indépendant (B2B & B2C)",
    location: "Paris, Puteaux, Neuilly",
    projectTitle: "Créations web : design et contenu",
    skills: [
      "Concepteur de sites internet",
      "Visibilité et performance",
      "Adaptation responsive",
      "Stratégies SEO",
      "Référencement naturel"
    ],
    accentColor: "#ff9800" // Exemple d'orange MDB
  },
  {
    id: 3,
    timePeriod: "2017 - 2022",
    jobTitle: "Création de tutoriels vidéo",
    company: "Indépendant : Udemy & Tuto.com",
    location: "Puteaux, Neuilly",
    projectTitle: "Création et réalisation de tutoriels vidéo",
    skills: [
      "Plan, écriture, réalisation et montage",
      "Maintien de l'engagement des utilisateurs",
      "Réponses aux questions des apprenants",
      "Adaptation des contenus"
    ],
    accentColor: "#f44336" // Exemple de rouge MDB
  }
]);



// Theme styles
const containerStyle = computed(() => ({
  backgroundColor: theme.value.backgroundColor,
  color: theme.value.textColor,
  minHeight: '100vh',
  padding: 'clamp(1rem, 5vw, 2rem) 0',
  transition: 'background-color 0.3s ease, color 0.3s ease'
}));
</script>

<template>
  <div class="app-wrapper mt-5" :style="containerStyle">
    <MDBContainer class="px-3 px-md-0">
      <MDBRow class="mb-4">
        <MDBCol>
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
  <div class="text-center mx-auto">
    <h1 class=" ">Développeur Web Full Stack & Formateur</h1>
    <h2 class=" ">Eli Azoura</h2>
    <!-- <h2 class="">Mon Parcours Professionnel</h2> -->
    <p class="text-muted mb-0">Découvrez mon expérience professionnelle et mes compétences</p>
  </div>
</div>

        </MDBCol>
      </MDBRow>
      
      <CVCardsList 
        :experiences="experiences" 
        :staggered="true"
        :isDark="isDarkMode"
      />
    </MDBContainer>

    <div class="container py-0 px-5">

<CvExp 
        :experiences="experiences" 
        :isDark="isDarkMode"
      />


    <div class="container py-0 px-5">
    <TechnologySection 
      title="Languages | Technologies" 
      :items="techData" 
      gradientClass="tech-gradient"
    />
    
    <div class="mt-5"></div>
    
    <TechnologySection 
      title="FrameWorks" 
      :items="frameworkData"
      gradientClass="framework-gradient" 
    />
  </div>
  </div>
  </div>
</template>

<style>
.tech-gradient, .framework-gradient {
  display: inline-block;
  background-image: linear-gradient(to right, hsl(241, 80%, 54%), hsl(327, 77%, 49%));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

body {
  background-color: #f8f9fa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>