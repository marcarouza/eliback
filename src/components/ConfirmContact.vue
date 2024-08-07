<template>
	<div class="d-flex align-items-center justify-content-center vh-100">
		<div class="ok text-center">
			<h1 class="display-1 fw-bold text-success mb-4">C'est fait !</h1>
			<p class="fs-3 mb-4">
				<span>
					<i class="bi bi-check-circle-fill me-2"></i>
					Votre inscription est confirmée
				</span>
			</p>
			<router-link to="/" class="btn btn-success btn-lg">
				Retour à la page d'accueil
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ConfirmationInscription',
};
</script>

<style scoped>
.vh-100 {
	height: 100vh;
}

.ok {
	color: #28a745; /* Vert Bootstrap */
}

.btn-success {
	transition: all 0.2s ease-in-out;
}

.btn-success:hover {
	transform: scale(1.05);
}

.bi-check-circle-fill {
	font-size: 1.2em;
}
</style>
