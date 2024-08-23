<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container">
			<router-link class="navbar-brand" to="/">
				<img
					class="d-inline-block align-text-top elilogo"
					src="/pix/logos/eliLogo192x192.png"
					alt="Eli Azoura"
				/>
				<span class="hello">Bienvenue dans mon réseau</span>
			</router-link>

			<!-- Bouton de basculement pour petits écrans -->
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item small-caps">
						<router-link
							active-class="active"
							class="nav-link"
							to="/cvPage"
							>cv</router-link
						>
					</li>
					<li class="nav-item small-caps">
						<router-link
							active-class="active"
							class="nav-link"
							to="/projetsPage"
							>projets</router-link
						>
					</li>
					<li class="nav-item small-caps">
						<router-link
							active-class="active"
							class="nav-link"
							to="/contactFormPage"
							>contact</router-link
						>
					</li>

					<li nav-item>
						<a
							id="blogLink"
							@click.prevent="navigateToBlog"
							class="nav-link small-caps"
							:class="{
								active: $route.path === '/homeblogPage',
							}"
							>blog</a
						>
					</li>
				</ul>
				<ul class="navbar-nav ms-auto">
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle btn text-white border border-white border-opacity-25"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<i
								title="mon compte"
								class="bi bi-person"
							></i>
						</a>
						<ul
							v-if="user"
							class="dropdown-menu user_menu"
							aria-labelledby="navbarDropdown"
						>
							<li>
								<router-link
									class="dropdown-item user_menu_item"
									to="/userstatusPage"
									@click.prevent="
										navigateToPrivateNEW
									"
								>
									mon compte
								</router-link>
							</li>
							<li>
								<router-link
									class="dropdown-item user_menu_item"
									to="/allMembersPage"
									>tous les membres</router-link
								>
							</li>
							<li>
								<a
									href="#"
									class="dropdown-item user_menu_item"
									@click.prevent="fetchLogOutApi"
									>déconnexion</a
								>
							</li>
						</ul>

						<ul
							v-else
							id="dynamicWidth"
							class="dropdown-menu user_menu"
							aria-labelledby="navbarDropdown"
						>
							<li>
								<router-link
									class="dropdown-item user_menu_item"
									to="/loguserPage"
									>connexion</router-link
								>
							</li>
							<li>
								<router-link
									class="dropdown-item user_menu_item"
									to="/signuserPage"
									>créer un compte</router-link
								>
							</li>
						</ul>
					</li>
				</ul>
				<ul class="list-unstyled mb-0 ms-3">
					<li v-if="user" class="userlogged">
						<router-link
							class="dropdown-item"
							to="/userstatusPage"
						>
							<span claass="account">
								<i class="bi bi-check-circle"></i
								>&nbsp;{{ user.user }}
							</span></router-link
						>
					</li>
					<li v-else>
						<span class="icon-disconnected px-4">
							<i class="fas fa-user-slash"></i>
							&nbsp;déconnecté
						</span>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavOK',

	data() {
		return {
			isLoggedIn: false,
			user: '',
			localUser: null,
			userID: '',
		};
	},

	mounted() {
		this.fetchUserData();
		this.checkLocaluser();
	},

	methods: {
		async fetchUserData() {
			try {
				const response = await fetch(
					'https://eli-back.onrender.com/checkUserStatus',
					{
						method: 'GET',
						credentials: 'include', // Pour envoyer les cookies avec la requête
					}
				);
				if (!response.ok) {
					throw new Error(
						'🍌 🍌 🍌 🍌 🍌 FROM NAVOK ==> ERR Network response was not ok'
					);
				}
				const data = await response.json();
				this.user = data.user;
				// this.userID = data.user._id;
				console.log(
					'🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 ~ fetchUserData ~ this.userID:',
					this.userID
				);

				this.isLoggedIn = true;
				console.log(
					'🚀 ~ FROM NAVOK ==> checkUserStatus ~ this.user:',
					this.user
				);
			} catch (error) {
				console.error(
					'FROM NAVOK ==> problème avec requête fetch :',
					error
				);
			}
		},
		async fetchLogOutApi() {
			try {
				console.log(
					'User ID before sending to logOutApi:',
					this.userID
				);
				const response = await fetch(
					'https://eli-back.onrender.com/logOutApi',
					{
						method: 'POST', // Utilisez POST pour envoyer des données
						credentials: 'include', // Pour envoyer les cookies avec la requête
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({userID: this.userID}), // Envoyer l'identifiant
					}
				);

				console.log('✅ FROM NavOk ~ LogOutApi :', response);

				if (response.ok) {
					this.isLoggedIn = false;
					console.log('🚀 ~ DECONNEXION REUSSIE !!! ');
					this.user = null; // Mettre à jour l'utilisateur à null
					localStorage.removeItem('localUser'); // Supprimer l'utilisateur de localStorage
					sessionStorage.removeItem('localUser');
					window.location.reload();
					this.$router.push({name: 'homepage'});
				} else {
					console.error('Erreur lors de la déconnexion');
					throw new Error(
						'🍌 🍌 🍌 🍌 🍌 FROM NAVOK ==> ERR Network response was not ok'
					);
				}
			} catch (error) {
				console.error(
					'🍌 🍌 🍌 🍌 🍌 FROM NAVOK ==> problème avec requête fetch :',
					error
				);
			}
		},

		async fetchLogOutApi_NO() {
			try {
				const logout = await fetch(
					'https://eli-back.onrender.com/logOutApi',
					{
						method: 'GET',
						credentials: 'include', // Pour envoyer les cookies avec la requête
					}
				);

				console.log('✅ FROM NavOk ~ LogOutApi :', logout);

				if (logout.ok) {
					this.isLoggedIn = false;
					console.log('🚀 ~ DECONNEXION REUSSIE !!! ');
					this.user = null; // Mettre à jour l'utilisateur à null
					localStorage.removeItem('localUser'); // Supprimer l'utilisateur de localStorage
					sessionStorage.removeItem('localUser');
					// sessionStorage.clear();
					// localStorage.clear();
					window.location.reload();
					this.$router.push({name: 'homepage'});
				} else {
					console.error('Erreur lors de la déconnexion');
					throw new Error(
						'🍌 🍌 🍌 🍌 🍌 FROM NAVOK ==> ERR Network response was not ok'
					);
				}
			} catch (error) {
				console.error(
					'🍌 🍌 🍌 🍌 🍌 FROM NAVOK ==> problème avec requête fetch :',
					error
				);
			}
		},
		navigateToBlog() {
			if (this.user) {
				// Si l'utilisateur est connecté, on le redirige vers la page du blog
				this.$router.push({name: 'homeblogpage'});
			} else {
				// Si l'utilisateur n'est pas connecté, on le redirige vers la page d'accès restreint
				this.$router.push({
					name: 'noaccesspage',
					// params: {isRestricted: true},
				});
			}
		},
		checkLocaluser() {
			try {
				const localUserData = localStorage.getItem('localUser');
				this.localUser = localUserData
					? JSON.parse(localUserData)
					: null;
				if (this.localUser) {
					this.userID = this.localUser._id;
					console.log(
						'🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀  ~ checkLocaluser ~ this.userID:',
						this.userID
					);
				}
				console.log(
					'✅ ℹ️  FROM checkLocaluser in NavOk ==> this.localUser :',
					this.localUser
				);
			} catch (error) {
				console.error(
					'Erreur lors de la récupération ou du parsing de localUser:',
					error
				);
				this.localUser = null; // Assurez-vous que localUser est null en cas d'erreur
			}
		},

		checkLocaluser_NO() {
			if (sessionStorage.getItem('localUser')) {
				this.localUser = JSON.parse(
					sessionStorage.getItem('localUser')
				);
				console.log('Utilisateur récupéré:', this.localUser);
				this.isLoggedIn = true;
				this.userID = this.localUser._id;
				console.log(
					'🚀 ~ checkLocaluser ~ this.userID POUR UTILISATION dans logOut API :',
					this.userID
				);
			} else {
				console.log(
					'ℹ️  🚫  ℹ️ FROM NavOk ==> Aucun utilisateur  dans sessionStorage.'
				);
			}
		},
		navigateToPrivateNEW() {
			if (this.isLoggedIn) {
				// Si l'utilisateur est connecté, on le redirige vers la page du blog
				this.$router.push({name: 'userstatusPage'});
			} else {
				// Si l'utilisateur n'est pas connecté, on le redirige vers la page d'accès restreint
				this.$router.push({
					name: 'noaccesspage',
					// params: {isRestricted: true},
				});
			}
		},
		navigateToPrivate() {
			if (this.user) {
				// Si l'utilisateur est connecté, on le redirige vers la page du blog
				this.$router.push({name: 'userstatusPage'});
			} else {
				// Si l'utilisateur n'est pas connecté, on le redirige vers la page d'accès restreint
				this.$router.push({
					name: 'noaccesspage',
					// params: {isRestricted: true},
				});
			}
		},

		deleteCookie() {
			document.cookie = `${jwt}=; max-age=0; path=/; secure; samesite=None`;
		},
	},
};
</script>

<style scoped>
.small-caps {
	font-variant: small-caps;
}
.hello {
	font-size: 1rem;
	color: rgb(255, 255, 255);
	padding-left: 1rem;
}

#blogLink {
	cursor: pointer;
}

.icon-disconnected {
	color: orange;
	font-size: 0.8rem;
}

.account {
	color: #ff2200 !important;
}
/* Style pour le logo */

.userlogged {
	font-size: 0.8rem;
	color: rgb(0, 223, 0);
}

.active {
	font-weight: bold;
}

.elilogo {
	width: 30px;
	height: 30px;
}

/* Styles pour le menu utilisateur */
.user_menu {
	width: 200px; /* Comme spécifié dans le style en ligne */
	background-color: #212529;
	white-space: nowrap;
}

.user_menu_item {
	padding: 8px 16px;
	color: #fff;
}

/* Style pour l'élément "non connecté" */
ul.list-unstyled > li > span {
	padding-left: 1rem;
	padding-right: 1rem;
}

/* Autres styles potentiellement nécessaires */
.navbar .dropdown-toggle.btn {
	padding: 0.375rem 0.75rem;
}

.navbar .bi-person {
	font-size: 1.2rem;
}
</style>
