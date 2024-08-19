<template>
	<div class="container mt-5">
		<div v-if="post" class="post-detail">
			<h1 class="text-center mb-4">Titre &nbsp;{{ post.title }}</h1>
			<p class="text-center mb-4">Par {{ post.author }}</p>
			<div class="content mb-4">
				<p>{{ post.content }}</p>
			</div>
			<p class="text-end text-muted">
				Publié le {{ formatDate(post.createdAt) }}
			</p>
		</div>

		<div v-else class="nopost">
			<p class="text-center">
				Désolé, un problème technique est survenu
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PostDetail',
	data() {
		return {
			post: null,
		};
	},
	created() {
		this.fetchOnePost();
	},
	methods: {
		async fetchOnePost() {
			const postId = this.$route.params.id;
			console.log('✅ ~ FROM fetchOnePost => postId :', postId);
			try {
				const response = await fetch(
					`https://eli-back.onrender.com/api/onePostById/${postId}`
				);
				if (response.ok) {
					const result = await response.json();
					console.log(
						'✅ FROM fetchOnePost => ~ result :',
						result
					);
					// Extraire les données du post
					this.post = result.data;
					console.log(
						'✅ FROM fetchOnePost => this.post :',
						this.post
					);
				} else {
					console.error(
						"🍌 Erreur lors de la récupération de l'article."
					);
				}
			} catch (error) {
				console.error(
					'🍌 Erreur CTACH GLBAL lors du FETCH réseau de récupération du POST : ',
					error
				);
			}
		},
		formatDate(date) {
			return new Date(date).toLocaleDateString();
		},
	},
};
</script>

<style scoped>
.container {
	max-width: 800px;
	margin: auto;
	padding: 20px;
	background-color: #f8f9fa;
	border-radius: 8px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

h1 {
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: 20px;
	color: #343a40;
}

p {
	font-size: 1rem;
	line-height: 1.5;
	color: #343a40;
}

.content p {
	margin-bottom: 20px;
}

.text-muted {
	color: #6c757d;
}
</style>
