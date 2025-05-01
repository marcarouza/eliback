<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 formulaire">
        <h2 class="text-center mb-4">Créer votre compte !</h2>
        <form @submit.prevent="submitForm" id="signUserForm">
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
                :type="passwordVisible ? 'text' : 'password'"
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
                <i :class="passwordVisible ? 'bi bi-eye-slash' : 'bi bi-eye'" id="toggleIcon"></i>
              </button>
            </div>
          </div>

          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              v-model="formData.pseudo"
              id="pseudo"
              name="pseudo"
              placeholder="Choix de votre pseudo"
              required
              minlength="3"
              maxlength="24"
            />
            <label for="pseudo">Pseudo</label>
          </div>

          <h6 class="m-3" style="white-space: pre-line">
            Les informations ci-dessus sont indispensables.
          </h6>
          <ul>
            <li>Vous devez être propriétaire de l'adresse e-mail.</li>
            <li>
              Si votre pseudo est déjà utilisé, vous devrez en choisir un autre.
            </li>
          </ul>

          <div class="d-grid">
            <button type="submit" class="btn btn-primary btn-lg btn-block">
              Créer un compte
            </button>
          </div>
        </form>
        <p class="text-center mt-5 note">
          Vous avez déjà un compte ?<br />
          <router-link active-class="active" class="nav-link" to="/LogUserPage"
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
        pseudo: '',
      },
      passwordVisible: false,
      localUserSession: null,
      specError: '' // Ajout de la propriété pour stocker les erreurs spécifiques
    };
  },
  mounted() {
    // Optionnel : vérifier la session locale dès le montage
    // this.checkLocaluser();
  },
  methods: {
    async submitForm() {
      console.log('🚀 ~ submitForm ~ formData:', this.formData);

      if (this.formData.email && this.formData.pwd && this.formData.pseudo) {
        try {
          const response = await fetch(
            'https://eli-back.onrender.com/api/signPage',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(this.formData),
            }
          );

          // Si la réponse est bonne
          if (response.ok) {
            const result = await response.json();
            console.log('Utilisateur créé:', result);

            // Appeler l'envoi de mail pour confirmation
            await this.sendMail();

            // Redirection vers la page de confirmation
            this.$router.push({ name: 'confirmsignuppage' });
          } else {
            // En cas d'erreur, on essaie de récupérer le message
            const errorData = await response.json();
            console.error('🍌 Erreur lors de la création du compte :', errorData);
            this.specError = errorData.message;
            if (this.specError && this.specError.includes('11000')) {
              alert(
                `⚠️ PSEUDO (ou e-mail) déjà utilisé. Conseil : modifiez d'abord le pseudo. Si cela ne fonctionne pas, modifiez l'email.`
              );
            }
          }
        } catch (err) {
          console.error(
            '🍌 ERR lors de la soumission du formulaire',
            err
          );
          this.specError = err.message;
          alert(`⚠️ ${this.specError}`);
        }
      } else {
        console.error('🍌 Tous les champs ne sont pas remplis.');
      }
    },

    checkLocaluser() {
      this.localUserSession =
        JSON.parse(sessionStorage.getItem('localUserSession')) || null;
      console.log(
        '✅ FROM SignUserForm ==> this.localUserSession:',
        this.localUserSession
      );
    },

    async sendMail() {
      try {
        const response = await fetch(
          'https://eli-back.onrender.com/signUserMAILConfirm',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: this.formData.email,
              pwd: this.formData.pwd,
              pseudo: this.formData.pseudo,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(
            '🍌 ERR lors de l\'envoi de l\'email de confirmation'
          );
        }

        const result = await response.json();
        console.log(
          '✅ EMAIL envoyé avec succès:',
          result.response
        );
      } catch (error) {
        console.error(
          '🍌 ERR lors de l\'envoi de l\'email:',
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
