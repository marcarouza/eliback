<template>
	<div class="container mt-5">
		<div class="row justify-content-center">
			<div class="col-md-6 formulaire">
				<h5 class="text-center mb-4" id="title">
					Connexion en tant que membre
				</h5>
				<h6 class="text-center mb-4 small">
					Note : Le site est hébergé sur une instance gratuite de
					Render, ce qui peut entraîner un délai d'initialisation
					d'environ une minute lors de la première connexion. Je
					vous remercie de votre patience.
				</h6>
				<form @submit.prevent="fetchToLog" id="loginForm">
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
			id: null,
			pseudo: null,
			localUserSession: null,

			passwordVisible: false,
			isLoggedIn: false,
		};
	},
	mounted() {
		// this.getLocalUserSession();
		// this.getAllDocCookiess();
	},
	methods: {
		async fetchToLog() {
			console.log(
				'🚀 ~ LogUserForm.vue:112 ~ fetchToLog ~ this.formData.pwd  ==> ',
				this.formData.pwd
			);

			console.log(
				'🚀 ~ LogUserForm.vue:112 ~ fetchToLog ~ this.formData.email   ==> ',
				this.formData.email
			);

			if (this.formData.email && this.formData.pwd) {

				const allDataz = {
					email: this.formData.email,
					pwd: this.formData.pwd,
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(this.formData),
							credentials: 'include', // Pour inclure les cookies dans la requête
						
					}

				console.log('🚀 ~ LogUserForm.vue:134 ~ fetchToLog ~ allDataz  ==> ', allDataz)


				try {
					const response = await fetch(


						'https://eli-back.onrender.com/api/logUserPage',
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
						'🚀 ~ fetchToLog RESPONSE / RESPONSE.OK : ',
						response,
						response.ok
					);

					if (response.ok) {
						// La réponse est bonne, on attend du JSON
						const result = await response.json();
						console.log(
							'✅ 🎉 FROM  LogUserForm => Utilisateur connecté dans RESULT : ',
							result
						);

						this.pseudo = result.pseudo;

						// Afficher l'objet pseudo après l'avoir peuplé
						console.log(
							'✅  FROM https://eli-back.onrender.com/logUser => this.pseudo :',
							this.pseudo
						);

						sessionStorage.setItem(
							'localUserSession',
							JSON.stringify(this.pseudo)
						);
						this.isLoggedIn = true;

						this.decodeUSERfromTOKEN();
						this.getAllDocCookiess();

						await this.navigateTO('homepage');
						window.location.reload(true);
					} else {
						const errorData = await response.json();

						console.log(
							'🍌🍌🍌  ~ LogUserForm.vue:166 ~ fetchToLog ~ errorData  ==> ',
							errorData
						);

						alert(
							'⚠️ Email ou mot de passe incorrect : ' +
								errorData.message
						);
					}
				} catch (err) {
					console.error(
						'FROM VUE  => ERR de TRY GLOBAL du SUBMIT du formulaire',
						err
					);
				}
			}
		},

		// Utilisation avec async/await
		async navigateTO(dest) {
			try {
				await this.$router.push({name: dest});
				console.log('Routage OK vers ACCUEIL');
			} catch (error) {
				if (error.name !== 'NavigationDuplicated') {
					console.error(
						'FROM VUE -> Erreur de retour vers ACCUEIL : ',
						error
					);
				}
			}
		},

		getAllDocCookiess() {
			const allCookies = document.cookie;
			if (allCookies) {
				const cookiesArray = allCookies.split('; ');
				console.log(
					'🚀 ~ getAllDocCookiess ~ cookiesArray:',
					cookiesArray
				);
				console.log('🚀 ~ mounted ~ allCookies:', allCookies);
			}
		},

		decodeUSERfromTOKEN() {
			const token = Cookies.get('jwt');

			if (token) {
				try {
					const decoded = jwtDecode(token); // Décoder le JWT
					console.log(
						'ℹ️ 👁️ FROM LogUser decodeUSERfromTOKEN => DECODED TOKEN :',
						decoded
					);
					this.id = decoded.id || null;
					this.email = decoded.email || null;
					this.pseudo = decoded.pseudo || null;
					console.log(
						'ℹ️ 👁️ FROM LogUser => User ID from JWT id / email / pseudo:',
						this.id,
						this.email,
						this.pseudo
					);
				} catch (error) {
					console.error(
						'🍌 FROM LogUser decodeUSERfromTOKEN => Error decoding JWT:',
						error
					);
				}
			} else {
				console.log(
					'🍌 FROM LogUser decodeUSERfromTOKEN => No JWT token found'
				);
			}
		},

		getLocalUserSession() {
			this.localUserSession =
				JSON.parse(sessionStorage.getItem('localUserSession')) ||
				null;
			console.log(
				' ℹ️   ✅   ℹ️ FROM UserStatus ==> this.localUserSession :',
				this.localUserSession
			);
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
