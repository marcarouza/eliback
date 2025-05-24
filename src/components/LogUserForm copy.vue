<template>
<section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Entrees votre mail et mot de passe</p>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <!-- <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a> -->
              </div>

            </div>

            <div>
              <p class="mb-0">Vous n'avez pas de compte ?  : <a href="#!" class="text-white-50 fw-bold"> Inscription ici</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="vh-100 bg-image"
  style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button  type="button" data-mdb-button-init
                    data-mdb-ripple-init class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<!-- Pills navs -->
<!-- <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="tab-login" data-mdb-pill-init href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="tab-register" data-mdb-pill-init href="#pills-register" role="tab"
      aria-controls="pills-register" aria-selected="false">Register</a>
  </li>
</ul> -->
<!-- Pills navs -->

<!-- Pills content -->
<!-- <div class="tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
      <div class="text-center mb-3">
        <p>Sign in with:</p>
        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>

      <p class="text-center">or:</p> -->

      <!-- Email input -->
      <!-- <div data-mdb-input-init class="form-outline mb-4">
        <input type="email" id="loginName" class="form-control" />
        <label class="form-label" for="loginName">Email or username</label>
      </div> -->

      <!-- Password input -->
      <!-- <div data-mdb-input-init class="form-outline mb-4">
        <input type="password" id="loginPassword" class="form-control" />
        <label class="form-label" for="loginPassword">Password</label>
      </div> -->

      <!-- 2 column grid layout -->
      <!-- <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
          <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label class="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">
          <a href="#!">Forgot password?</a>
        </div>
      </div> -->

      <!-- <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Sign in</button> -->

      <!-- Register buttons -->
      <!-- <div class="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
      </div>
    </form>
  </div>
  <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form>
      <div class="text-center mb-3">
        <p>Sign up with:</p>
        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>

      <p class="text-center">or:</p> -->

      <!-- Name input -->
      <!-- <div data-mdb-input-init class="form-outline mb-4">
        <input type="text" id="registerName" class="form-control" />
        <label class="form-label" for="registerName">Name</label>
      </div> -->

      <!-- Username input -->
      <!-- <div data-mdb-input-init class="form-outline mb-4">
        <input type="text" id="registerUsername" class="form-control" />
        <label class="form-label" for="registerUsername">Username</label>
      </div> -->

      <!-- Email input -->
      <!-- <div data-mdb-input-init class="form-outline mb-4">
        <input type="email" id="registerEmail" class="form-control" />
        <label class="form-label" for="registerEmail">Email</label>
      </div> -->

      <!-- Password input -->
      <!-- <div data-mdb-input-init class="form-outline mb-4">
        <input type="password" id="registerPassword" class="form-control" />
        <label class="form-label" for="registerPassword">Password</label>
      </div> -->

      <!-- Repeat Password input -->
      <!-- <div data-mdb-input-init class="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" class="form-control" />
        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
      </div> -->

      <!-- Checkbox -->
      <!-- <div class="form-check d-flex justify-content-center mb-4">
        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label class="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div> -->

      <!-- Submit button -->
      <!-- <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-3">Sign in</button>
    </form>
  </div>
</div> -->
<!-- Pills content -->




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
						'FROM VUE  => ERR de TRY GLOBAL du SUBMIT du formulaire : ',
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

<style >


.gradient-custom-3 {
/* fallback for old browsers */
background: #84fab0;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
}
.gradient-custom-4 {
/* fallback for old browsers */
background: #84fab0;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
}












.gradient-custom {
/* fallback for old browsers */
background: #6a11cb;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}
/* .formulaire {
	background-color: #f8f9fa;
	padding: 2rem;
	border-radius: 0.5rem;
	box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
} */

/* #title {
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
} */
</style>
