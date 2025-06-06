<template>
	<nav class="navbar navbar-expand-lg bg-info">
		<div class="container px-5">
			<router-link
				class="navbar-brand"
				:to="{name: 'homeblogpage'}"
				title="accueil du Blog"
			>
				<i class="bi bi-journal iconi"></i>
			</router-link>
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
				<ul class="navbar-nav me-auto">
					<li class="nav-item">
						<router-link
							title="nouvel article"
							id="blogLink1"
							to="/writepostPage"
							class="nav-link"
							:class="{
								active:
									$route.path === '/writepostPage',
							}"
						>
							rédiger
						</router-link>
					</li>
					<li class="nav-item">
						<router-link
							title="nouvel article"
							id="blogLink2"
							to="/searchpostPage"
							class="nav-link"
							:class="{
								active:
									$route.path === '/searchpostPage',
							}"
						>
							rechercher
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavBlog',
	data() {
		return {
			user: '',
			// Vos données ici
		};
	},
	mounted() {
		this.fetchUserData();
	},
	methods: {
		async fetchUserData() {
			try {
				const response = await fetch(
					// 'https://eli-back.onrender.com/checkUserStatus',
					// 'https://eliback.onrender.com/api/checkUser',
					'https://eliazoura.fr/api/checkUser',
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
		navigateToWrite() {
			if (this.user) {
				// Si l'utilisateur est connecté, on le redirige vers la page du blog
				this.$router.push({name: 'writepostPage'});
			} else {
				// Si l'utilisateur n'est pas connecté, on le redirige vers la page d'accès restreint
				this.$router.push({
					name: 'noaccesspage',
					// params: {isRestricted: true},
				});
			}
		},
		navigateToSearch() {
			if (this.user) {
				// Si l'utilisateur est connecté, on le redirige vers la page du blog
				this.$router.push({name: 'searchpostPage'});
			} else {
				// Si l'utilisateur n'est pas connecté, on le redirige vers la page d'accès restreint
				this.$router.push({
					name: 'noaccesspage',
					// params: {isRestricted: true},
				});
			}
		},
	},
	computed: {
		// Vos propriétés calculées ici
	},
	watch: {
		// Vos observateurs ici
	},
};
</script>

<style scoped>
/*  */

.iconi {
	/* Définissez ici le style que vous souhaitez appliquer à l'icône */
	font-size: 1.5rem;
	color: #ffffff;
}

#blogLink1,
#blogLink2 {
	cursor: pointer;
}
</style>
