<template>
  <div class="projects-container">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :imgSrc="project.imgSrc"
      :imgAlt="project.imgAlt"
      :title="project.title"
      :items="project.items"
    />
  </div>
</template>

<script>
import ProjectCard from './ProjetCard.vue';
// Importation du composant ProjetCard

export default {
  name: "ProjectsList",
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          imgSrc: '/pix/projets/calculo.webp',
          imgAlt: 'projet web eli azoura',
          title: 'SmartCalc',
          items: [
            "Application de type calculatrice configurable, fonctionnant directement dans votre navigateur (en cours de développement)"
          ]
        },
        {
          imgSrc: '/pix/projets/second.webp',
          imgAlt: 'projet web second',
          title: 'Project Two',
          items: [
            "Description du deuxième projet avec des fonctionnalités avancées."
          ]
        },
        {
          imgSrc: '/pix/projets/third.webp',
          imgAlt: 'projet web third',
          title: 'Project Three',
          items: [
            "Présentation du troisième projet, axé sur l'innovation design."
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
