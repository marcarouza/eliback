<!-- src/components/ConfirmationPage.vue -->
<template>
	<ConfirmLoggedIn />
</template>

<script>
import ConfirmLoggedIn from '../components/ConfirmLoggedIn.vue';
export default {
	name: 'ConfirmLoggedInPage',

	components: {
		ConfirmLoggedIn,
	},

	emits: ['updatePageTitle'], // Déclarez l'événement ici
	// Autres options du composant
};
</script>

<style scoped></style>
