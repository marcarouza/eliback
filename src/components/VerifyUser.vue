<!-- MyComponent.vue -->
<template>
   <div>
     <!-- Afficher un contenu conditionnel selon l'état de connexion -->
     <p v-if="isLoggedIn">Connecté en tant que {{ userPseudo }}</p>
     <p v-else>Vous n'êtes pas connecté.</p>
     <button @click="checkUser">Vérifier l'utilisateur</button>
     <button @click="logOut">Se déconnecter</button>
   </div>
 </template>
 
 <script setup>
 import { useUser } from '@/services/useUser';
 
 // Ici, on récupère les références et fonctions du composable
 const { isLoggedIn, userPseudo, checkUser, logOut } = useUser();
 </script>
 