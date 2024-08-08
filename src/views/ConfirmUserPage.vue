<!-- src/components/ConfirmationPage.vue -->
<template>
	<div class="container mt-5">
		<div class="row justify-content-center">
			<div class="col-md-6 text-center">
				<h2 class="mb-4">Inscription réussie !</h2>
				<p>
					Merci de vous être inscrit. Un e-mail de confirmation
					vous a été envoyé.
				</p>
				<router-link to="/" class="btn btn-primary"
					>Retour à l'accueil</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ConfirmUserPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici
	// Autres options du composant
};
</script>

<style scoped>
.container {
	margin-top: 50px;
}
</style>
