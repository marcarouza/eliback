<template>
  <div>
    <!-- Le template contient la structure HTML du composant -->
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <button @click="incrementCount">Compteur: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Définition des propriétés réactives
const title = ref('Mon Composant Vue 3')
const message = ref('Bienvenue dans ce composant!')
const count = ref(0)

// Méthodes
const incrementCount = () => {
  count.value++
}

// Hooks du cycle de vie
onMounted(() => {
  console.log('Le composant est monté')
})
</script>

<style scoped>
/* Styles spécifiques au composant */
h1 {
  color: #42b883;
}
</style>