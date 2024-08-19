<template>
	<div class="change-password">
		<h2 class="text-center mb-5">Changer votre mot de passe</h2>
		<form @submit.prevent="modifyPWD" class="mx-auto">
			<div class="mb-3 wider-input">
				<label for="currentPWD" class="form-label"
					>Mot de passe actuel</label
				>
				<div class="input-group">
					<input
						:type="currentPWDVisible ? 'text' : 'password'"
						v-model="currentPWD"
						class="form-control"
						id="currentPWD"
						required
					/>
					<button
						class="btn btn-outline-secondary"
						type="button"
						@click="toggleCurrentPWDVisibility"
					>
						<i
							:class="
								currentPWDVisible
									? 'bi bi-eye-slash'
									: 'bi bi-eye'
							"
						></i>
					</button>
				</div>
			</div>

			<div class="mb-3 wider-input">
				<label for="newPWD" class="form-label"
					>Nouveau mot de passe</label
				>
				<div class="input-group">
					<input
						:type="newPWDVisible ? 'text' : 'password'"
						v-model="newPWD"
						class="form-control"
						id="newPWD"
						required
					/>
					<button
						class="btn btn-outline-secondary"
						type="button"
						@click="toggleNewPWDVisibility"
					>
						<i
							:class="
								newPWDVisible
									? 'bi bi-eye-slash'
									: 'bi bi-eye'
							"
						></i>
					</button>
				</div>
			</div>

			<div class="mb-3 wider-input">
				<label for="confirmPassword" class="form-label"
					>Confirmer le mot de passe</label
				>
				<div class="input-group">
					<input
						:type="confirmPWDvisible ? 'text' : 'password'"
						v-model="confirmPassword"
						class="form-control"
						id="confirmPassword"
						required
					/>
					<button
						class="btn btn-outline-secondary"
						type="button"
						@click="toggleConfirmPasswordVisibility"
					>
						<i
							:class="
								confirmPWDvisible
									? 'bi bi-eye-slash'
									: 'bi bi-eye'
							"
						></i>
					</button>
				</div>
			</div>

			<button type="submit" class="btn btn-primary btn-block">
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
			currentPWD: '',
			newPWD: '',
			confirmPassword: '',
			currentPWDVisible: false,
			newPWDVisible: false,
			confirmPWDvisible: false,
			errorMessage: '',
			successMessage: '',
			localUser: null,
		};
	},
	mounted() {
		this.checkLocaluser();
	},
	methods: {
		async modifyPWD() {
			if (this.newPWD !== this.confirmPassword) {
				this.errorMessage =
					'Les nouveaux mots de passe ne correspondent pas.';
				return;
			}

			console.log('🚨 ~ modifyPWD ~ this.newPWD:', this.newPWD);
			console.log(
				'🚨  ~ modifyPWD ~ this.currentPWD:',
				this.currentPWD
			);
			console.log(
				'🚨 ~ modifyPWD ~ this.localUser._id:',
				this.localUser._id
			);

			try {
				const response = await fetch(
					'https://eli-back.onrender.com/api/modifyPWD',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						credentials: 'include',
						body: JSON.stringify({
							userID: this.localUser._id,
							currentPWD: this.currentPWD,
							newPWD: this.newPWD,
						}),
					}
				);

				const data = await response.json();
				console.log('ℹ️  FROM /api/modifyPWD  data:', data);

				if (response.ok) {
					this.successMessage =
						'Mot de passe modifié avec succès.';
					this.errorMessage = '';
					// this.$router.push({name: 'userstatusPage'});
				} else {
					this.errorMessage =
						data.message || "Une erreur s'est produite.";
					this.successMessage = '';
				}
			} catch (error) {
				console.log('🍌 ~ CATCH ERR  : ', error);
				this.errorMessage =
					'Erreur de connexion. Veuillez réessayer plus tard.';
				this.successMessage = '';
			}
		},
		checkLocaluser() {
			this.localUser =
				JSON.parse(localStorage.getItem('localUser')) || null;
			console.log(
				' ℹ️  ✅ ✅  ℹ️ FROM checkLocaluser/modifyPWD ==> this.localUser :',
				this.localUser
			);
		},
		toggleCurrentPWDVisibility() {
			this.currentPWDVisible = !this.currentPWDVisible;
		},
		toggleNewPWDVisibility() {
			this.newPWDVisible = !this.newPWDVisible;
		},
		toggleConfirmPasswordVisibility() {
			this.confirmPWDvisible = !this.confirmPWDvisible;
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
	width: 100%;
}

.btn-block {
	width: 100%;
}

.text-danger,
.text-success {
	font-size: 1.1rem;
}
</style>
