<template>
	<div class="container mt-5">
		<div class="row">
			<!-- Blog Posts Section -->
			<div class="col-md-8">
				<h2 class="mb-4">Articles récents</h2>

				<div v-if="allPosts.length > 0">
					<!-- Boucle pour afficher chaque post -->
					<div
						v-for="post in allPosts"
						:key="post._id"
						class="card mb-4 shadow-sm"
					>
						<div class="card-header bg-primary text-white">
							<h3 class="mb-0">{{ post.title }}</h3>
						</div>
						<div class="card-body">
							<p class="card-text">
								{{ post.summary }}
							</p>
							<a
								:href="`/posts/${post._id}`"
								class="btn btn-outline-primary"
							>
								Lire la suite
							</a>
						</div>
						<div
							class="card-footer text-muted d-flex justify-content-between align-items-center"
						>
							<div>
								Posté par
								<a
									:href="`/users/${post._id}`"
									class="text-decoration-none"
								>
									{{ post.author }}
								</a>
							</div>
							<div>
								{{ formatDate(post.createdAt) }}
							</div>
						</div>
					</div>
				</div>

				<div v-else class="hello">
					<p>Aucune publication pour le moment</p>
				</div>
			</div>

			<!-- Sidebar -->
			<div class="col-md-4">
				<div class="p-3 mb-4 bg-light rounded shadow-sm">
					<h2 class="mb-3">À propos de l'auteur</h2>
					<p>Quelques mots sur l'auteur : biographie etc.</p>
				</div>
				<div class="p-3 bg-light rounded shadow-sm">
					<h3 class="mb-3">Catégories</h3>
					<ul class="list-group">
						<li class="list-group-item mb-2">
							<a
								href="/category/tech"
								class="text-decoration-none"
								>Tech</a
							>
						</li>
						<li class="list-group-item mb-2">
							<a
								href="/category/lifestyle"
								class="text-decoration-none"
								>Code</a
							>
						</li>
						<li class="list-group-item">
							<a
								href="/category/travel"
								class="text-decoration-none"
								>Jobs</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BlogCore',
	data() {
		return {
			allPosts: [],
			authorID: '',

			// Pour stocker les posts récupérés
		};
	},
	methods: {
		async fetchPosts() {
			try {
				const response = await fetch(
					'https://eli-back.onrender.com/api/allPosts'
				);
				if (response.ok) {
					const data = await response.json();
					this.allPosts = data.data;
					console.log(
						'🚀 ~ fetchPosts ~ data.allPosts:',
						this.allPosts,
						'TYPE OF : ',
						typeof this.allPosts
					);
				} else {
					console.error(
						'Erreur lors de la récupération des posts.'
					);
				}
			} catch (error) {
				console.error(
					'Erreur réseau lors de la récupération des posts:',
					error
				);
			}
		},
		getLocalUser() {
			const localUser = JSON.parse(
				sessionStorage.getItem('localUser')
			);

			// Assurez-vous que localUser existe avant d'essayer d'accéder à _id
			if (localUser && localUser._id) {
				this.authorId = localUser._id;
			} else {
				console.error(
					'Utilisateur local non trouvé dans sessionStorage'
				);
				// Gérer le cas où l'utilisateur n'est pas trouvé
				this.authorId = null; // ou une autre valeur par défaut ou une action
			}
		},
		formatDate(date) {
			// Formatage de la date si nécessaire
			return new Date(date).toLocaleDateString();
		},
	},
	created() {
		// Appel de la méthode pour récupérer les posts lorsque le composant est monté
		this.fetchPosts();
		this.getLocalUser();
	},
};
</script>

<style scoped>
.container {
	max-width: 1100px;
	margin: auto;
}

h2 {
	font-size: 2rem;
	font-weight: 600;
	color: #343a40;
}

.card-header {
	padding: 15px;
	font-size: 1.25rem;
}

.card-text {
	font-size: 1rem;
	color: #6c757d;
}

.card-body {
	padding: 20px;
}

.card-footer {
	padding: 10px 20px;
	background-color: #f8f9fa;
}

.btn-outline-primary {
	font-weight: 600;
	padding: 10px 20px;
	transition: background-color 0.3s, color 0.3s;
}

.btn-outline-primary:hover {
	background-color: #007bff;
	color: #fff;
}

.bg-light {
	background-color: #f8f9fa !important;
}

.p-3 {
	padding: 1rem !important;
}

.shadow-sm {
	box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.text-decoration-none {
	text-decoration: none !important;
}
</style>
