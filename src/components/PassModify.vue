<template>
	<div class="change-password">
		<h2 class="text-center mb-5">Changer votre mot de passe</h2>
		<form @submit.prevent="modifyPWD" class="mx-auto">
			<div class="form-floating mb-3 wider-input">
				<input
					v-model="currentPassword"
					type="password"
					class="form-control"
					id="currentPassword"
					placeholder="Mot de passe actuel"
					required
				/>
				<label for="currentPassword">Mot de passe actuel</label>
			</div>
			<div class="form-floating mb-3 wider-input">
				<input
					v-model="newPassword"
					type="password"
					class="form-control"
					id="newPassword"
					placeholder="Nouveau mot de passe"
					required
				/>
				<label for="newPassword">Nouveau mot de passe</label>
			</div>
			<div class="form-floating mb-3 wider-input">
				<input
					v-model="confirmPassword"
					type="password"
					class="form-control"
					id="confirmPassword"
					placeholder="Confirmer le nouveau mot de passe"
					required
				/>
				<label for="confirmPassword"
					>Confirmer le mot de passe</label
				>
			</div>
			<button
				@click.prevent="modifyPWD"
				type="submit"
				class="btn btn-primary btn-block"
			>
				<i class="fas fa-key"></i> Modifier
			</button>
		</form>
		<p v-if="errorMessage" class="text-danger text-center mt-3">
			<i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
		</p>
		<p v-if="successMessage" class="text-success text-center mt-3">
			<i class="fas fa-check-circle"></i> {{ successMessage }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'PassModify',

	data() {
		return {
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
			errorMessage: '',
			successMessage: '',
			localUser: null,
		};
	},

	mounted() {
		// this.createLocalUser();
		this.checkLocaluser();
	},
	methods: {
		async modifyPWD() {
			// Validation côté client
			if (this.newPassword !== this.confirmPassword) {
				this.errorMessage =
					'Les nouveaux mots de passe ne correspondent pas.';
				alert(this.errorMessage);

				return;
			}

			try {
				const response = await fetch(
					'https://eli-back.onrender.com/api/modifyPassword',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						credentials: 'include', // Inclut les cookies pour la session de l'utilisateur
						body: JSON.stringify({
							userID: this.localUser._id,
							currentPassword: this.currentPassword,
							newPassword: this.newPassword,
						}),
					}
				);

				const data = await response.json();

				if (response.ok) {
					this.successMessage =
						'Mot de passe modifié avec succès.';
					this.errorMessage = '';

					alert(this.successMessage);

					this.$router.push({name: 'userstatusPage'});
				} else {
					this.errorMessage =
						data.message || "Une erreur s'est produite.";
					this.successMessage = '';
				}
			} catch (error) {
				this.errorMessage =
					'Erreur de connexion. Veuillez réessayer plus tard.';
				this.successMessage = '';
			}
		},
		checkLocaluser() {
			this.localUser =
				JSON.parse(localStorage.getItem('localUser')) || null;
			console.log(
				' ℹ️   ✅   ℹ️ FROM UserStatus ==> this.localUser :',
				this.localUser
			);
		},
	},
};
</script>

<style scoped>
.change-password {
	padding: 2rem;
	border: 1px solid #ccc;
	border-radius: 16px;
	background-color: #f8f9fa;
	margin-top: 5rem;
	max-width: 600px;
	margin-left: auto;
	margin-right: auto;
}

.wider-input {
	width: 100%; /* Augmente la largeur des champs d'environ 30 % */
}

.btn-block {
	width: 100%;
}

.text-danger,
.text-success {
	font-size: 1.1rem;
}
</style>
