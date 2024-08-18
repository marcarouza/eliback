<template>
	<div class="container mt-5">
		<div class="row">
			<!-- Blog Posts Section -->
			<div class="col-md-8">
				<h2>Articles récents</h2>
				<div
					v-for="post in posts"
					:key="post._id"
					class="card mb-4"
				>
					<div class="card-header">{{ post.title }}</div>
					<div class="card-body">
						<p class="card-text">
							{{ post.summary }}
						</p>
						<a
							:href="`/posts/${post._id}`"
							class="btn btn-primary"
						>
							Read More
						</a>
					</div>
					<div class="card-footer text-muted">
						Posted by
						<a :href="`/users/${post.user._id}`">{{
							post.user.name
						}}</a>
						on {{ formatDate(post.createdAt) }}
					</div>
				</div>
			</div>

			<!-- Sidebar -->
			<div class="col-md-4">
				<h2>À propos de l'auteur</h2>
				<p class="m-2 mb-3">
					Quelques mots sur l'auteur : biographie etc.
				</p>
				<h3>Categories</h3>
				<ul class="list-group mb-3">
					<li class="list-group-item mb-1">
						<a href="/category/tech">Tech</a>
					</li>
					<li class="list-group-item mb-1">
						<a href="/category/lifestyle">Code</a>
					</li>
					<li class="list-group-item mb-1">
						<a href="/category/travel">Jobs</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BlogCore',
	data() {
		return {
			posts: [], // Pour stocker les posts récupérés
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
					this.posts = data.allPosts;
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
		formatDate(date) {
			// Formatage de la date si nécessaire
			return new Date(date).toLocaleDateString();
		},
	},
	created() {
		// Appel de la méthode pour récupérer les posts lorsque le composant est monté
		this.fetchPosts();
	},
};
</script>

<style scoped>
/* Ajoutez votre CSS ici */
</style>
