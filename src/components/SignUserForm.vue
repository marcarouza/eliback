<template>
	<div class="container mt-5">
		<div class="row justify-content-center">
			<div class="col-md-6 formulaire">
				<h2 class="text-center mb-4">Créer votre compte</h2>
				<form @submit.prevent="submitForm" id="loginForm">
					<div class="form-floating mb-3">
						<input
							type="email"
							class="form-control"
							v-model="formData.email"
							id="email"
							name="email"
							placeholder="Adresse e-mail"
							required
						/>
						<label for="email">Votre e-mail</label>
					</div>
					<div class="form-floating mb-3">
						<div class="input-group">
							<input
								:type="
									passwordVisible
										? 'text'
										: 'password'
								"
								class="form-control"
								v-model="formData.pwd"
								id="pwd"
								name="pwd"
								placeholder="Mot de passe (entre 8 et 24 signes)"
								required
								minlength="8"
								maxlength="24"
							/>
							<button
								class="btn btn-outline-secondary"
								type="button"
								@click="togglePasswordVisibility"
							>
								<i
									:class="
										passwordVisible
											? 'bi bi-eye-slash'
											: 'bi bi-eye'
									"
									id="toggleIcon"
								></i>
							</button>
						</div>
					</div>
					<div class="form-floating mb-3">
						<input
							minlength="3"
							maxlength="24"
							required
							type="text"
							class="form-control"
							v-model="formData.user"
							id="user"
							name="user"
							placeholder="Pseudo (optionnel)"
						/>
						<label for="user">Pseudo</label>
					</div>

					<h6 class="m-3" style="white-space: pre-line">
						Les informations ci-dessus sont indispensables.
					</h6>

					<ul>
						<li>
							Vous devez être propriétaire de l'adresse
							e-mail.
						</li>
						<li>
							Si votre pseudo est déjà utilisé, vous devrez
							en choisir un autre.
						</li>
					</ul>

					<div class="d-grid">
						<button
							type="submit"
							class="btn btn-primary btn-lg btn-block"
						>
							Créer un compte
						</button>
					</div>
				</form>
				<p class="text-center mt-5 note">
					Vous avez déjà un compte ?<br />

					<router-link
						active-class="active"
						class="nav-link"
						to="/LogUserPage"
						>Connectez-vous ici</router-link
					>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SignUserForm',
	data() {
		return {
			formData: {
				email: '',
				pwd: '',
				user: '',
			},
			passwordVisible: false,
		};
	},
	methods: {
		// CREATION DU USER VIA API
		async submitForm() {
			if (
				this.formData.email &&
				this.formData.pwd &&
				this.formData.user
			) {
				try {
					const response = await fetch(
						'https://eli-back.onrender.com/create_user',
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(this.formData),
						}
					);
					console.log(
						' ✅  FROM SignUserForm => RESPONSE, REPONSE.OK : ',
						response,
						response.ok
					);

					if (response.ok) {
						const result = await response.json();
						console.log('Utilisateur créé:', result);

						await this.sendMail(); // Utilisation de `this` pour appeler `sendMail`

						// this.$router.push('/ConfirmUserPage');

						this.$router.push({name: 'confirmsignuppage'});
						// à rempalcer par une NOTIF <= Rediriger vers la page de confirmation
					} else {
						console.error(
							'🍌 🍌 🍌 🍌 🍌  ~ FROM SignUserForm => ERR lors de la création du MEMBRE'
						);
					}
				} catch (error) {
					console.error(
						'🍌 🍌 🍌 🍌 🍌  ~ FROM SignUserForm => ERR lors du SUBMIT du formulaire',
						error
					);
				}
			} else {
				console.error(
					'🍌 🍌 🍌 🍌 🍌  ~ FROM SIGNUSERFORM => tous les champs ne sont pas remplis'
				);
			}
		},

		async sendMail() {
			try {
				const response = await fetch(
					'https://eli-back.onrender.com/signUserConfirm',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							email: this.formData.email,
							pwd: this.formData.pwd,
							pseudo: this.formData.user,
						}),
					}
				);

				if (!response.ok) {
					throw new Error(
						'🍌 🍌 🍌 🍌 🍌 FROM FETCH signUserConfirm  =>  Failed to send message'
					);
				}

				const result = await response.json();
				console.log(
					'✅ FROM signUserConfirm => EMAIL sent successfully : ' +
						result.response
				);
			} catch (error) {
				console.error(
					'🍌 🍌 🍌 🍌 🍌  FROM FETCH signUserConfirm  =>  ERR sending email: ' +
						error.message
				);
			}
		},

		togglePasswordVisibility() {
			this.passwordVisible = !this.passwordVisible;
		},
	},
};
</script>

<style scoped>
.formulaire {
	background-color: #f8f9fa;
	padding: 2rem;
	border-radius: 0.5rem;
	box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.note {
	font-size: 0.875rem;
}

.note a {
	color: #007bff;
	text-decoration: none;
}

.note a:hover {
	text-decoration: underline;
}

#profil {
	color: #007bff;
	text-decoration: none;
}

#profil:hover {
	text-decoration: underline;
}

#togglePWD {
	cursor: pointer;
}

#toggleIcon {
	pointer-events: none;
}
</style>
