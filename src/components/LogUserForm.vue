<template>
  <!-- Section Login -->
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card text-white" style="border-radius: 1rem;background-color: rgba(0, 0, 0, 0.6);">
            <div class="card-body p-5 text-center">
              <!-- Formulaire de login -->
              <form @submit.prevent="fetchToLog">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                  <p class="text-white-50 mb-5">Entrez votre mail et mot de passe</p>

                  <div data-mdb-input-init class="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="email"
                      v-model="formData.email"
                      class="form-control form-control-lg"
                      required
                    />
                    <label class="form-label" for="email">Email</label>
                  </div>

                  <div data-mdb-input-init class="form-outline form-white mb-4">
                    <input
                      :type="passwordVisible ? 'text' : 'password'"
                      id="pwd"
                      v-model="formData.pwd"
                      class="form-control form-control-lg"
                      required
                    />
                    <label class="form-label" for="pwd">Password</label>
                  </div>

                  <!-- <p class="small mb-5 pb-lg-2">
                    <a class="text-white-50" href="#!">Mot de passe oublié ?</a>
                  </p> -->

                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Connexion
                  </button>

                  <div class="d-flex justify-content-center text-center mt-4 pt-1">
                    <!-- Eventuels icônes sociales peuvent être ajoutés ici -->
                  </div>
                </div>
              </form>

              <div>
                <p class="mb-0">
                  Vous n'avez pas de compte ? :
                  <a href="#!" class="text-white-50 fw-bold"> Inscription ici</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Inscription -->
  <!-- <section
    class="vh-100 bg-image"
    style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"
  >
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Create an account</h2>
                <form>
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1cg"
                      class="form-control form-control-lg"
                      required
                    />
                    <label class="form-label" for="form3Example1cg">Your Name</label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3cg"
                      class="form-control form-control-lg"
                      required
                    />
                    <label class="form-label" for="form3Example3cg">Your Email</label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4cg"
                      class="form-control form-control-lg"
                      required
                    />
                    <label class="form-label" for="form3Example4cg">Password</label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4cdg"
                      class="form-control form-control-lg"
                      required
                    />
                    <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      id="form2Example3cg"
                    />
                    <label class="form-check-label" for="form2Example3cg">
                      I agree all statements in
                      <a href="#!" class="text-body"><u>Terms of service</u></a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center">
                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    >
                      Register
                    </button>
                  </div>

                  <p class="text-center text-muted mt-5 mb-0">
                    Have already an account?
                    <a href="#!" class="fw-bold text-body"><u>Login here</u></a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode"; 
export default {
  name: "LogUserForm",
  data() {
    return {
      formData: {
        email: "",
        pwd: "",
      },
      id: null,
      pseudo: null,
      // Ajout d'un champ email utilisateur issu du token (optionnel)
      userEmail: null,
      localUserSession: null,
      passwordVisible: false,
      isLoggedIn: false,
    };
  },
  mounted() {
    // Exécuter les méthodes de récupération de session si nécessaire
    // this.getLocalUserSession();
    // this.getAllDocCookiess();
  },
  methods: {
    async fetchToLog() {
      console.log(
        "Fetching login with pwd:",
        this.formData.pwd,
        " and email:",
        this.formData.email
      );

      if (this.formData.email && this.formData.pwd) {
        try {
          const response = await fetch(
            "https://eli-back.onrender.com/api/logUser",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(this.formData),
              credentials: "include", // Pour inclure les cookies dans la requête
            }
          );

          console.log("Response:", response, response.ok);

          if (response.ok) {
            const result = await response.json();
            console.log("Utilisateur connecté:", result);

            this.pseudo = result.pseudo;
            // Facultatif : stocker aussi l'email
            this.userEmail = result.email;

            sessionStorage.setItem(
              "localUserSession",
              JSON.stringify(this.pseudo)
            );
            this.isLoggedIn = true;

            this.decodeUSERfromTOKEN();
            this.getAllDocCookiess();
            await this.navigateTO("homepage");
            window.location.reload();
          } else {
            const errorData = await response.json();
            console.error("Erreur de login:", errorData);
            alert("⚠️ Email ou mot de passe incorrect : " + errorData.message);
          }
        } catch (err) {
          console.error("Erreur lors de la soumission du formulaire:", err);
        }
      }
    },

    async navigateTO(dest) {
      try {
        await this.$router.push({ name: dest });
        console.log("Routage vers", dest, "OK");
      } catch (error) {
        if (error.name !== "NavigationDuplicated") {
          console.error("Erreur de routage vers", dest, ":", error);
        }
      }
    },

    getAllDocCookiess() {
      const allCookies = document.cookie;
      if (allCookies) {
        const cookiesArray = allCookies.split("; ");
        console.log("Tous les cookies:", cookiesArray);
      }
    },

    decodeUSERfromTOKEN() {
      const token = Cookies.get("jwt");
      if (token) {
        try {
          const decoded = jwtDecode(token);
          console.log("Decoded JWT :", decoded);
          this.id = decoded.id || null;
          // Vérifier la présence des propriétés dans le token
          this.userEmail = decoded.email || null;
          this.pseudo = decoded.pseudo || null;
          console.log("User info (id, email, pseudo):", this.id, this.userEmail, this.pseudo);
        } catch (error) {
          console.error("Erreur lors du décodage du token:", error);
        }
      } else {
        console.log("Aucun token JWT trouvé");
      }
    },

    getLocalUserSession() {
      this.localUserSession =
        JSON.parse(sessionStorage.getItem("localUserSession")) || null;
      console.log("Session utilisateur locale:", this.localUserSession);
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


.form-control {
  background-color: white !important;
  color: black !important;
}

label.form-label {
  color:hsl(0, 0%, 72%) !important;
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
