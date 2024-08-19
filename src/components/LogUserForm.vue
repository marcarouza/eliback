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
					<span>
						<router-link to="/signUserPage"
							>Cliquez ici</router-link
						></span
					>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import Cookies from 'js-cookie';

import {jwtDecode} from 'jwt-decode'; // Utilisez jwt-decode pour décoder le JWT

export default {
	name: 'LogUserForm',
	data() {
		return {
			formData: {
				email: '',
				pwd: '',
			},
			passwordVisible: false,
			specError: null,
			oneUser: null,
			localUser: null,
			one2User: null,
			isLoggedIn: false,
		};
	},
	mounted() {
		// this.createLocalUser();
		this.checkLocaluser();
		this.getAllDocCookiess();
	},
	created() {
		this.getAllDocCookiess();
	},
	methods: {
		getAllDocCookiess() {
			const jwtCookie = document.cookie;
			console.log('🚀 ~ mounted ~ jwtCookie:', jwtCookie);
		},
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
						'✅ ✅ ✅ 🎉 FROM  LogUserForm => Utilisateur connecté dans RESULT : ',
						result
					);

					this.oneUser = result.user;

					// Afficher l'objet oneUser après l'avoir peuplé
					console.log(
						'🚀 ~ data ~ this.oneUser APRES :',
						this.oneUser
					);

					// Stocker l'utilisateur dans localStorage
					localStorage.setItem(
						'localUser',
						JSON.stringify(this.oneUser)
					);
					sessionStorage.setItem(
						'localUser',
						JSON.stringify(this.oneUser)
					);
					this.isLoggedIn = true;
					this.$router.push({name: 'homepage'});
				} else {
					const errorData = await response.json();
					console.error(
						'🍌 FROM LogUserForm <= ERR de CONNEXION du MEMBRE: ',
						errorData
					);
					this.specError = errorData.message;
					// alert(errorData.message);
					alert('⚠️ Email ou mot de passe incorrect');
				}
			} catch (err) {
				console.error(
					'🍌 FROM LogUserForm => ERR de TRY GLOBAL du SUBMIT du formulaire',
					err
				);
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

		checkUserLogged() {
			console.log('Tous les cookies:', document.cookie);
			const token = Cookies.get('jwt');
			console.log('Token JWT:', token);
			console.log(
				'ℹ️ 👁️ FROM LogUser checkUserLogged => TOKEN :',
				token
			);
			if (token) {
				try {
					const decoded = jwtDecode(token); // Décoder le JWT
					console.log(
						'ℹ️ 👁️ FROM LogUser checkUserLogged => DECODED TOKEN :',
						decoded
					);
					// Vérifiez si les champs existent dans le JWT décodé
					this.id = decoded.id || null;
					this.email = decoded.email || null;
					this.pseudo = decoded.user || null;
					console.log(
						'ℹ️ 👁️ FROM LogUser => User ID from JWT:',
						this.id
					);
					console.log(
						'ℹ️ 👁️ FROM LogUser => User email from JWT:',
						this.email
					);
					console.log(
						'ℹ️ 👁️ FROM LogUser => User pseudo from JWT:',
						this.pseudo
					);
				} catch (error) {
					console.error(
						'🍌 FROM LogUser checkUserLogged => Error decoding JWT:',
						error
					);
				}
			} else {
				console.log(
					'🍌 FROM LogUser checkUserLogged => => No JWT token found'
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
