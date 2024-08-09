<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container">
			<router-link class="navbar-brand" to="/">
				<img
					class="d-inline-block align-text-top elilogo"
					src="/pix/logos/eliLogo192x192.png"
					alt="Eli Azoura"
				/>
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
					<li class="nav-item">
						<router-link
							active-class="active"
							class="nav-link"
							to="/userstatusPage"
							>userstatus</router-link
						>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/cookiesPage"
							>cookies</router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							active-class="active"
							class="nav-link"
							to="/apiPage"
							>api</router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							active-class="active"
							class="nav-link"
							to="/cvPage"
							>cv</router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							active-class="active"
							class="nav-link"
							to="/projetsPage"
							>projets</router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							active-class="active"
							class="nav-link"
							to="/contactPage"
							>contact</router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							active-class="active"
							class="nav-link"
							to="/homeblogPage"
							>blog</router-link
						>
					</li>
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
							id="dynamicWidth"
							class="dropdown-menu user_menu"
							aria-labelledby="navbarDropdown"
						>
							<li>
								<router-link
									class="dropdown-item user_menu_item"
									to="/userstatusPage"
									>mon compte</router-link
								>
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
						<span>
							<i class="bi bi-check-circle"></i>&nbsp;{{
								user.email
							}}
						</span>
					</li>
					<li v-else>
						<span class="px-4" style="color: orange">
							non connecté&nbsp;
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
			user: null,
		};
	},

	mounted() {
		this.fetchUserData();
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

		deleteCookie() {
			document.cookie = `${jwt}=; max-age=0; path=/; secure; samesite=None`;
		},
	},
};
</script>

<style scoped>
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
