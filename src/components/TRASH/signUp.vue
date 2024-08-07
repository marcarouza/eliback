<template>
	<div class="container mt-5">
		<div class="row justify-content-center">
			<div class="col-md-6 formulaire">
				<h2 class="text-center mb-4">Créer votre compte</h2>
				<form action="/createUserPage" method="post" id="loginForm">
					<div class="form-floating mb-3">
						<input
							type="email"
							class="form-control"
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
								type="password"
								class="form-control"
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
								id="togglePWD"
							>
								<i
									class="bi bi-eye"
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
							id="user"
							name="user"
							placeholder="Pseudo (optionnel)"
						/>
						<label for="user">Pseudo </label>
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
					<a id="profil" href="logUserPage">Connectez-vous ici</a
					>.
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
			// Vos données ici
			formData: {
				email: '',
				pwd: '',
				user: '',
			},
			passwordVisible: false,
		};
	},
	methods: {
		// Vos méthodes ici

		async submitForm() {
			try {
				const response = await fetch('/createUserPage', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(this.formData),
				});

				if (response.ok) {
					const result = await response.json();
					console.log('Utilisateur créé:', result);
				} else {
					console.error(
						"Erreur lors de la création de l'utilisateur"
					);
				}
			} catch (error) {
				console.error(
					'Erreur lors de la soumission du formulaire',
					error
				);
			}
		},
		//  togglePasswordVisibility() {
		//    this.passwordVisible = !this.passwordVisible;
		//    const pwdField = document.getElementById('pwd');
		//    if (this.passwordVisible) {
		//      pwdField.type = 'text';
		//    } else {
		//      pwdField.type = 'password';
		//    }
		//  },
	},
	computed: {
		// Vos propriétés calculées ici
	},
	watch: {
		// Vos observateurs ici
	},
};
</script>

<style scoped>
/*  */
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
