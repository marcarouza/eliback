<template>
	<div class="container">
		<div class="row justify-content-center mt-1">
			<div class="col-md-8">
				<div class="card border-0 shadow-lg">
					<div class="card-body text-center p-5">
						<div class="mb-4">
							<i
								class="bi bi-check-circle-fill text-success"
								style="font-size: 5rem"
							></i>
						</div>
						<h2 class="card-title mb-3">Merci transmis.</h2>
						<p class="card-text lead mb-4">
							Je vous remerice (réponse sous 48h.)
							<br />
							Vous recevrez une copie de votre demande sur
							l'adresse e-mail fournie.
							<br />
							Eli
						</p>
						<router-link
							to="/"
							class="btn btn-primary btn-lg"
						>
							Retourner à l'accueil
							<i class="bi bi-house-door-fill ms-2"></i>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ConfirmContact',
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
