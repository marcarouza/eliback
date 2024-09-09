<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container">
			<router-link class="navbar-brand" to="/">
				<img
					class="d-inline-block align-text-top elilogo"
					src="/pix/logos/eliLogo192x192.png"
					alt="Eli Azoura"
				/>
				<!-- <span class="hello">Bienvenue dans mon réseau</span> -->
			</router-link>
			<ul class="navbar-nav">
				<li class="nav-item small-caps">
					<router-link
						active-class="active"
						class="nav-link"
						to="/cvPage"
					>
						<i
							class="fas fa-file-alt custom-icon"
							title="CV"
							aria-label="CV"
						></i>
					</router-link>
				</li>
				<li class="nav-item small-caps">
					<router-link
						active-class="active"
						class="nav-link"
						to="/projetsPage"
					>
						<i
							class="fas fa-code custom-icon"
							title="PROJETS"
							aria-label="PROJETS"
						></i>
					</router-link>
				</li>
				<li class="nav-item small-caps">
					<router-link
						active-class="active"
						class="nav-link"
						to="/contactFormPage"
					>
						<i
							class="fas fa-envelope custom-icon"
							title="CONTACT"
							aria-label="CONTACT"
						></i>
					</router-link>
				</li>

				<li class="nav-item small-caps">
					<a
						id="blogLink"
						@click.prevent="navigateToBlog"
						class="nav-link small-caps"
						:class="{
							active: $route.path === '/homeblogPage',
						}"
					>
						<i
							class="fas fa-blog custom-icon"
							title="BLOG"
							aria-label="BLOG"
						></i>
					</a>
				</li>
			</ul>

			<div class="" id="">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item dropdown">
						<a
							class="userMenu dropdown-toggle btn text-white border border-white border-opacity-25"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<li v-if="user" class="userlogged">
								<router-link
									class="dropdown-item"
									to="/userstatusPage"
								>
									<span claass="account">
										<i
											class="bi bi-check-circle connected"
											>&nbsp;&nbsp;{{
												user.user
											}}</i
										>
									</span></router-link
								>
							</li>
							<li v-else>
								<span class="icon-disconnected px-4">
									<i class="fas fa-user-slash"></i>
									<!-- &nbsp;déconnecté -->
								</span>
							</li>
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
									@click.prevent="navigateToPrivate"
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
				this.userID = data.user._id;
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
		navigateToPrivate() {
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
.connected {
	font-size: 1rem;
}

.custom-icon {
	font-size: 1.1rem;
	color: #ffffff;
	transition: color 0.3s ease, transform 0.15s ease;
}

.custom-icon:hover {
	font-size: 1.2rem;

	color: #ffffff;

	transform: rotate(15deg);
}

.userMenu {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	/* width: 100%; */
	/* justify-content: center; */
	gap: 5px;
}

.navbar-nav {
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.nav-item {
	margin-left: 30px;
	/* margin-right: 5px; */
}

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
	color: rgb(255, 157, 0);
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
	/* display: flex; */
	/* flex-direction: column; */
	/* align-items: flex-end; */
	/* justify-content: center; */
	min-width: 50px !important;
	background-color: #212529;
	padding: 0;
	/* margin: 0; */
	white-space: nowrap;
}

.user_menu_item {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	padding: 8px 16px;
	color: #fff;
	font-size: 0.8rem;
}

/* Autres styles potentiellement nécessaires */
.navbar .dropdown-toggle.btn {
	padding: 0.2rem 0.5rem;
	/* padding: 0; */
	margin: 0;
}

.navbar-nav .dropdown-menu {
	position: absolute;

	left: -30px;
}

.navbar .bi-person {
	font-size: 1.5rem;
}

@media (max-width: 576px) {
	.connected {
		font-size: 0.8rem;
	}

	.custom-icon {
		font-size: 1rem;
		color: #ffffff;
	}

	.navbar-nav .dropdown-menu {
		position: absolute;

		left: -30px;
	}
}

@media (max-width: 430px) {
	.connected {
		font-size: 0.8rem;
	}

	.navGlobal {
		display: flex;
		flex-direction: row !important;
		align-items: center;
	}

	.custom-icon {
		font-size: 1rem;
		color: #ffffff;
	}

	.user_menu_item {
		padding: 5px 8px 8px 8px;
		color: #fff;
		font-size: 0.8rem;
		justify-content: flex-end;
	}

	.user_menu {
		min-width: 100px !important;
		/* width: 50px; */
		background-color: #212529;
		/* white-space: nowrap; */
	}

	.navbar-nav .dropdown-menu {
		position: absolute;
		/* right: 0px; */
		left: -10px;
		/* right: 0px; */
		/* margin: 0; */
		/* width: 50px; */
	}
}
</style>
