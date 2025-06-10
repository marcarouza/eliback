<template>
	<!-- Navbar -->
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
	  <div class="container-fluid justify-content-between">
		 <!-- Left elements: Brand -->
		 <div class="d-flex">
			<router-link class="navbar-brand" to="/">
			  <img class="d-inline-block align-text-top elilogo" src="/pix/logos/eliLogo192x192.png" alt="Eli Azoura" />
			</router-link>
		 </div>
 
		 <!-- Center elements: Navigation Links -->
		 <ul class="navbar-nav flex-row justify-content-center">
			<li class="nav-item me-1 me-lg-1">
			  <router-link class="nav-link" to="/cvPage" active-class="active">
				 <i class="fas fa-user-circle custom-icon" title="CV" aria-label="CV"></i>
			  </router-link>
			</li>
			<li class="nav-item me-1 me-lg-1">
			  <router-link class="nav-link" to="/projetsPage" active-class="active">
				 <i class="fas fa-code custom-icon" title="PROJETS" aria-label="PROJETS"></i>
			  </router-link>
			</li>
			<li class="nav-item me-1 me-lg-1">
			  <router-link class="nav-link" to="/contactFormPage" active-class="active">
				 <i class="fas fa-paper-plane custom-icon" title="CONTACT" aria-label="CONTACT"></i>
			  </router-link>
			</li>
		 </ul>
 
		 <!-- Right elements: User Dropdown -->
		 <ul class="navbar-nav flex-row">
			<li class="nav-item dropdown me-lg-1">
			  <a data-mdb-dropdown-init 
				  class="nav-link dropdown-toggle hidden-arrow" 
				  href="#" 
				  id="navbarDropdownUser" 
				  role="button" 
				  aria-expanded="false">
				 <i class="fas fa-chevron-circle-down fa-lg"></i>
			  </a>
			  <!-- Menu for logged-in user -->
			  <ul v-if="isUserLoggedIn" class="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDropdownUser">
				 <li>
					<router-link class="dropdown-item" to="/userstatusPage" @click.prevent="navigateToPrivate">
					  <i class="fas fa-user-circle me-2"></i> Mon compte
					</router-link>
				 </li>
				 <li>
					<router-link class="dropdown-item" to="/allMembersPage">
					  <i class="fas fa-users me-2"></i> Tous les membres
					</router-link>
				 </li>
				 <li><hr class="dropdown-divider"></li>
				 <li>
					<a href="#" class="dropdown-item" @click.prevent="logOUTapi">
					  <i class="fas fa-sign-out-alt me-2"></i> Déconnexion
					</a>
				 </li>
			  </ul>
			  <!-- Menu for non-logged-in user -->
			  <ul v-else class="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDropdownUser">
				 <li>
					<router-link class="dropdown-item" to="/logUserPage">
					  <i class="fas fa-sign-in-alt me-2"></i> Connexion
					</router-link>
				 </li>
				 <li>
					<router-link class="dropdown-item" to="/signPage">
					  <i class="fas fa-user-plus me-2"></i> Créer un compte
					</router-link>
				 </li>
			  </ul>
			</li>
		 </ul>
	  </div>
	</nav>
	<!-- Navbar End -->
 </template>
 
 <script setup>
 import { onMounted, ref } from 'vue';
 import { Dropdown, initMDB } from 'mdb-ui-kit';
 import { useRouter } from 'vue-router';
 import {
	userID,
	userPseudo,
	isLoggedIn,
	userGlobalService,
	logOUTapi as globalLogOUTapi,
 } from '@/services/userGlobalService';
 
 const router = useRouter();
 const userId = ref(userID);
 const userPseudoVal = ref(userPseudo);
 const isUserLoggedIn = ref(isLoggedIn);
 
 onMounted(() => {
	initMDB({ Dropdown });
	console.log('MDB Dropdown initialisé / userID, userPseudoVal, isuserLoggedIn', userId.value, userPseudoVal.value, isUserLoggedIn.value);
 });
 
 
 
 // Navigation vers la page privée ou vers une page d'accès refusé selon l'état de connexion
 function navigateToPrivate() {
	if (isUserLoggedIn.value) {
	  router.push({ name: 'userstatusPage' });
	} else {
	  router.push({ name: 'noaccesspage' });
	}
 }
 
 async function logOUTapi() {
	await globalLogOUTapi(router);
 }
 </script>
 
 <style scoped>
 .navbar {
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
 }
 
 .navbar-brand img {
	height: 30px;
 }
 
 .navbar-nav .nav-link {
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
 }
 
 .custom-icon {
	font-size: 1.1rem;
	color: #ffffff;
	transition: color 0.3s ease, transform 0.15s ease;
 }
 
 .custom-icon:hover {
	font-size: 1.2rem;
	transform: rotate(15deg);
 }
 
 /* Positionnement et marge des éléments de navigation */
 .navbar-nav {
	display: flex;
	flex-direction: row;
	justify-content: center;
 }
 
 .nav-item {
	margin-left: 30px;
 }
 
 .active {
	font-weight: bold;
 }
 
 .elilogo {
	width: 30px;
	height: 30px;
 }
 
 /* Styles du menu déroulant */
 .navbar-nav .dropdown-menu {
	position: absolute;
	left: -30px;
	top: 120%;
	border: none;
	border-radius: 0 0 0.25rem 0.25rem;
 }
 
 /* Responsive adjustments */
 @media (max-width: 576px) {
	.navbar-nav .dropdown-menu {
	  left: -45px;
	}
	.custom-icon {
	  font-size: 1rem;
	}
 }
 
 @media (max-width: 430px) {
	.custom-icon {
	  font-size: 1rem;
	}
 }
 </style>
 