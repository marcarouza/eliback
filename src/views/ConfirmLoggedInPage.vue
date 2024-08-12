<!-- src/components/ConfirmationPage.vue -->
<template>
	<ConfirmLoggedIn />

	<NavOk />
</template>

<script>
import ConfirmLoggedIn from '../components/ConfirmLoggedIn.vue';
import NavOk from '../components/NavOk.vue';

export default {
	name: 'ConfirmLoggedInPage',

	components: {
		ConfirmLoggedIn,
		NavOk,
	},

	emits: ['updatePageTitle'], // Déclarez l'événement ici
	// Autres options du composant
};
</script>

<style scoped></style>
