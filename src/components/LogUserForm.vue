<template>
  <!-- Section Login -->
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">
              <!-- Formulaire de login -->
              <form @submit.prevent="fetchToLog">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                  <p class="text-white-50 mb-5">Entrez votre mail et mot de passe</p>

                  <div data-mdb-input-init class="form-outline form-white mb-4">
                    <input type="email" id="typeEmailX" v-model="formData.email" class="form-control form-control-lg"
                      required />
                    <label class="form-label" for="typeEmailX">Email</label>
                  </div>

                  <div data-mdb-input-init class="form-outline form-white mb-4">
                    <input :type="passwordVisible ? 'text' : 'password'" id="typePasswordX" v-model="formData.pwd"
                      class="form-control form-control-lg" required />
                    <label class="form-label" for="typePasswordX">Password</label>
                  </div>

                  <p class="small mb-5 pb-lg-2">
                    <a class="text-white-50" href="#!">Forgot password?</a>
                  </p>

                  <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5"
                    type="submit">
                    Login
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
                    <input type="text" id="form3Example1cg" class="form-control form-control-lg" required />
                    <label class="form-label" for="form3Example1cg">Your Name</label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="email" id="form3Example3cg" class="form-control form-control-lg" required />
                    <label class="form-label" for="form3Example3cg">Your Email</label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="password" id="form3Example4cg" class="form-control form-control-lg" required />
                    <label class="form-label" for="form3Example4cg">Password</label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="password" id="form3Example4cdg" class="form-control form-control-lg" required />
                    <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" id="form2Example3cg" />
                    <label class="form-check-label" for="form2Example3cg">
                      I agree all statements in
                      <a href="#!" class="text-body"><u>Terms of service</u></a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center">
                    <button type="button" data-mdb-button-init data-mdb-ripple-init
                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
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
  </section>
</template>

<script>
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; // Import par défaut pour jwt-decode
import { API_BASE_URL } from "@/config/configDevProd.js";

export default {
  name: "LogUserForm",
  data() {
    return {
      formData: {
        email: "",
        pwd: ""
      },
      id: null,
      pseudo: null,
      userEmail: null,        // Email utilisateur issu du token
      localUserSession: null,
      passwordVisible: false,
      isLoggedIn: false
    };
  },
  mounted() {
    // Optionnel : récupérer la session locale si nécessaire
    // this.getLocalUserSession();
    // this.getAllDocCookiess();
  },
  methods: {
    async fetchToLog() {
  // Affichage formaté pour faciliter le débogage
  console.log(`Fetching login with pwd: ${this.formData.pwd} and email: ${this.formData.email}`);

  // Vérifier que les champs email et mot de passe sont remplis
  if (!this.formData.email || !this.formData.pwd) {
    console.warn("Les champs email et mot de passe doivent être renseignés.");
    return;
  }

  try {
    // Envoyer la requête POST pour le login
    const response = await fetch(`${API_BASE_URL}api/logIN`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.formData),
      credentials: "include" // Inclut les cookies dans la requête
    });

    console.log("Response:", response, response.ok);

    if (response.ok) {
      // Extraction du résultat et déstructuration des propriétés user
      const result = await response.json();
      console.log("Utilisateur connecté :", result);

      const { user: { pseudo, email, birthDate } } = result;
      this.pseudo = pseudo;
      this.email = email;
      this.birthDate = birthDate;

      // Stocker une information utile en session, ici le pseudo
      sessionStorage.setItem("localUserSession", JSON.stringify(this.pseudo));
      this.isLoggedIn = true;

      // Mettre à jour les informations liées au token et afficher tous les cookies
      this.decodeUSERfromTOKEN();
      this.getAllDocCookiess();

      // Naviguer vers la page d'accueil (assurez-vous que la route est nommée "homePage")
      await this.navigateTO("homePage");
    } else {
      // Extraction et affichage de l'erreur de login
      const errorData = await response.json();
      console.error("Erreur de login:", errorData);
      alert(`⚠️ Email ou mot de passe incorrect : ${errorData.message}`);
    }
  } catch (err) {
    console.error("Erreur lors de la soumission du formulaire:", err);
  }
}


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
  if (!token) {
    console.log("Aucun token JWT trouvé");
    return;
  }
  
  try {
    const decoded = jwtDecode(token);
    // Déstructuration pour extraire les propriétés en assignant une valeur par défaut
    const { id = null, email = null, pseudo = null } = decoded;
    
    this.id = id;
    this.userEmail = email;
    this.pseudo = pseudo;
    
    console.log(`User info (id: ${id}, email: ${email}, pseudo: ${pseudo})`);
  } catch (error) {
    console.error("Erreur lors du décodage du token:", error);
  }
}

    getLocalUserSession() {
      this.localUserSession =
        JSON.parse(sessionStorage.getItem("localUserSession")) || null;
      console.log("Session utilisateur locale:", this.localUserSession);
    },

    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    }
  }
};
</script>



<style>
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