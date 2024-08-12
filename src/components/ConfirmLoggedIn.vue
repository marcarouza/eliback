<template>
	<div class="container mt-5">
		<div class="row justify-content-center">
			<div class="col-md-6 text-center">
				<h2 class="mb-4">Inscription réussie !</h2>
				<p>Vous vous êtes bien connecté avec votre compte</p>
				<router-link to="/" class="btn btn-primary"
					>Retour à l'accueil</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ConfirmLoggedIn',
};
</script>

<style scoped>
.card {
	transition: all 0.3s ease-in-out;
}

.card:hover {
	transform: translateY(-5px);
}

.btn-primary {
	transition: all 0.2s ease-in-out;
}

.btn-primary:hover {
	transform: scale(1.05);
}
</style>
