<!-- StandaloneApp.vue -->
<template>
   <div class="iframe-container">
     <iframe
       :src="buildUrl"
       frameborder="0"
       title="Application SmartCalc"
       class="iframe"
     ></iframe>
   </div>
 </template>
 
 <script setup lang="ts">
   // Ici, on construit l'URL en fonction du contexte de déploiement.
   // Si l'application autonome est dans le dossier public, vous pouvez l'appeler directement :
   const buildUrl = '/app/index.html';
 </script>
 
 <style scoped>
 .iframe-container {
   width: 100%;
   overflow: hidden;
 }
 .iframe {
   width: 100%;
   height: 50%;
   border: 0;
   overflow: hidden;
 }
 </style>
 