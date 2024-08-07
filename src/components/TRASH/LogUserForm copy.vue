<template>
	<div class="container mt-5">
		<div class="row justify-content-center">
			<div class="col-md-6 formulaire">
				<h5 class="text-center mb-4" id="title">
					Connexion en tant que membre
				</h5>
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

					<div class="d-grid">
						<button
							type="submit"
							class="btn btn-primary btn-lg btn-block"
						>
							Connexion
						</button>
					</div>
				</form>
				<p class="text-center mt-5 note">
					Pas encore de compte ?
					<span> <a href="signPage">Cliquez-ici</a></span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import checkIFlogged from '../../mixIns/checkIFlogged.js';
export default {
	name: 'LogUserForm',
	mixins: [checkIFlogged],
	data() {
		return {
			formData: {
				email: '',
				pwd: '',
			},
			passwordVisible: false,
			error: null,

			oneUser: {
				email: '',
				pwd: '',
				pseudo: '',
				id: '',
				role: '',
				createdAt: '',
				updatedAt: '',
				isActive: '',
				friends: [],
			},
		};
	},
	created() {
		this.checkUserFromCookie();
	},
	methods: {
		async submitForm() {
			try {
				const response = await fetch(
					'https://eli-back.onrender.com/logUser',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(this.formData),
						credentials: 'include', // Pour inclure les cookies dans la requête
					}
				);
				console.log(
					'🚀 ~ submitForm ~ this.formData:',
					this.formData
				);

				console.log('🚀 ~ submitForm RESPONSE : ', response);
				console.log('🚀 ~ submitForm RESPONSE OK : ', response.ok);

				if (response.ok) {
					const result = await response.json();
					console.log(
						'FROM  LogUserForm => Utilisateur connecté dans RESULT:',
						result
					);

					console.log(
						'🚀 ~ data ~ oneUser AVANT :',
						this.oneUser
					);

					const one2User = result.user;

					// Peupler les données de oneUser avec les propriétés de result
					this.oneUser.email = one2User.email || '';
					this.oneUser.pwd = one2User.pwd || '';
					this.oneUser.pseudo = one2User.pseudo || '';
					this.oneUser.id = one2User._id || '';
					this.oneUser.role = one2User.role || '';
					this.oneUser.createdAt = one2User.createdAt || '';
					this.oneUser.updatedAt = one2User.updatedAt || '';
					this.oneUser.isActive = one2User.isActive || '';
					this.oneUser.friends = one2User.friends || [];

					// Afficher l'objet oneUser après l'avoir peuplé
					console.log(
						'🚀 ~ data ~ this.oneUser APRES :',
						this.oneUser
					);

					this.checkUserFromCookie(); // Vérifier l'utilisateur après une connexion réussie

					this.$router.push({name: 'homepage'}); // Rediriger vers la page d'accueil après connexion réussie
				} else {
					const errorData = await response.json();
					console.error(
						'FROM LogUserForm <= ERR de CONNEXION du MEMBRE: ',
						errorData
					);
				}
			} catch (error) {
				console.error(
					'FROM LogUserForm => ERR de SUBMIT du formulaire',
					error
				);
			}
		},

		checkUserFromCookie() {
			const token = Cookies.get('jwt'); // Lire le cookie JWT
			console.log('🚀 ~ checkUserFromCookie ~ TOKEN :', token);
			if (token) {
				try {
					const decoded = jwt_decode(token); // Décoder le JWT
					console.log(
						'🚀 ~ checkUserFromCookie ~ DECODED :',
						decoded
					);
					// Vérifiez si les champs existent dans le JWT décodé
					this.id = decoded.id || null;
					this.email = decoded.email || null;
					this.pseudo = decoded.user || null;
					console.log('User ID from JWT:', this.id);
					console.log('User email from JWT:', this.email);
					console.log('User pseudo from JWT:', this.pseudo);
				} catch (error) {
					console.error('Error decoding JWT:', error);
				}
			} else {
				console.log('No JWT token found');
			}
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

#title {
	color: #495057;
}

.note {
	font-size: 0.875rem;
}

.note span a {
	color: #007bff;
	text-decoration: none;
}

.note span a:hover {
	text-decoration: underline;
}
</style>
