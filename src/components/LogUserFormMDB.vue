<template>
<!--Main Navigation-->
<header>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style="z-index: 2000;">
    <div class="container-fluid">
      <!-- Navbar brand -->
		<h5 class="text-center mb-4" id="title">
					Connexion en tant que membre
				</h5>
				<h6 class="text-center mb-4 small">
					Note : Le site est hébergé sur une instance gratuite de
					Render, ce qui peut entraîner un délai d'initialisation
					d'environ une minute lors de la première connexion. Je
					vous remercie de votre patience.
				</h6>
      <button class="navbar-toggler" type="button" data-mdb-collapse-init data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="#intro">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
               target="_blank">Learn Bootstrap 5</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://mdbootstrap.com/docs/standard/" target="_blank">Download MDB UI KIT</a>
          </li>
        </ul>

        <ul class="navbar-nav d-flex flex-row">
          <!-- Icons -->
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
               target="_blank">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="https://www.facebook.com/mdbootstrap" rel="nofollow" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="https://twitter.com/MDBootstrap" rel="nofollow" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="https://github.com/mdbootstrap/mdb-ui-kit" rel="nofollow" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Navbar -->

  <!-- Background image -->
  <div id="intro" class="bg-image shadow-2-strong">
    <div class="mask d-flex align-items-center h-100" style="background-color: rgba(0, 0, 0, 0.8);">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-5 col-md-8">
            <form   @submit.prevent="fetchToLog" id="loginForm"    class="bg-white rounded shadow-5-strong p-5">
              <!-- Email input -->
              <div class="form-outline mb-4" data-mdb-input-init>
                <input type="email" 
					 id="email" 
					 class="form-control" 
					 v-model="formData.email"
					 placeholder="Adresse e-mail"
					 required

					 
					 
					 />
                <label class="form-label" for="email">Votre e-mail</label>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4" data-mdb-input-init>
                <input type="password" id="pwd" class="form-control"
					 placeholder="Mot de passe (entre 8 et 24 signes)"
					 required
								minlength="8"
								maxlength="24"
					  />
                <label class="form-label" for="pwd">Password</label>
              </div>

			  <!-- 2 column grid layout for inline styling -->
			  <div class="row mb-4">
				<div class="col d-flex justify-content-center">
				  <div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
					<label class="form-check-label" for="form1Example3">
					  Se souvenir de moi
					</label>
				  </div>
				</div>
				<div class="col text-center">
				  <!-- Simple link -->
				  <a href="#!"> password?</a>
				</div>
			  </div>

			  <!-- Submit button -->
			  <button type="submit" class="btn btn-primary btn-block" data-mdb-ripple-init>Sign in</button>
			</form>
				<p class="text-center mt-5 note">
					Pas encore de compte ?
					<span>
						<router-link to="/signUserPage"
							>S'inscrire ici</router-link
						></span
					>
				</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Background image -->
</header>
<!--Main Navigation-->

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
				try {
					const response = await fetch(
						'https://eli-back.onrender.com/api/logUser',
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




#intro {
      background-image: url(https://mdbootstrap.com/img/new/fluid/city/008.jpg);
      height: 100vh;
    }

    /* Height for devices larger than 576px */
    @media (min-width: 992px) {
      #intro {
        margin-top: -58.59px;
      }
    }

    .navbar .nav-link {
      color: #fff !important;
    }



	 
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
