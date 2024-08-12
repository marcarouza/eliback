<template>
	<div class="container mt-5">
		<div class="row justify-content-center">
			<div class="col-md-8">
				<div class="card shadow">
					<div class="card-body text-center">
						<i
							class="bi bi-lock-fill display-1 text-muted mb-4"
						></i>
						<h2 class="card-title mb-4">Accès restreint</h2>
						<p class="card-text mb-4">
							Cette partie du site n'est accessible qu'aux
							utilisateurs connectés. Vous devez posséder
							un compte pour accéder à ce contenu.
						</p>
						<div
							class="d-grid gap-2 d-md-flex justify-content-md-center"
						>
							<router-link
								to="/signUserPage"
								class="btn btn-primary me-md-2"
							>
								<i
									class="bi bi-person-plus-fill me-2"
								></i
								>Cliquez ici
							</router-link>

							<router-link
								active-class="active"
								class="btn btn-outline-secondary"
								to="/LogUserPage"
							>
								<i
									class="bi bi-box-arrow-in-right me-2"
								></i
								>Connectez-vous ici
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NoAccess',
	methods: {
		creerCompte() {
			console.log('Redirection vers la page de création de compte');
		},
		seConnecter() {
			console.log('Redirection vers la page de connexion');
		},
	},
};
</script>

<style scoped>
.card {
	border: none;
	border-radius: 15px;
}

.btn-primary {
	background-color: #007bff;
	border-color: #007bff;
}

.btn-primary:hover {
	background-color: #0056b3;
	border-color: #0056b3;
}

.btn-outline-secondary:hover {
	background-color: #6c757d;
	color: white;
}
</style>
