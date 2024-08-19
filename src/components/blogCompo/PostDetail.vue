<template>
	<div v-if="post" class="post-detail">
		<h1>Titre &nbsp;{{ post.title }}</h1>
		<p>Par {{ post.author }}</p>
		<p>{{ post.content }}</p>
		<p>Publié le {{ formatDate(post.createdAt) }}</p>
	</div>

	<div v-else class="nopost">
		<p>Désolé, un poblème technique est survenu</p>
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
					this.post = await response.json();
					console.log(
						'🚀 ~ fetchOnePost ~ this.post :',
						this.post
					);
				} else {
					console.error(
						"🍌 Erreur lors de la récupération de l'article."
					);
				}
			} catch (error) {
				console.error(
					'🍌 Erreur CTACH GLBAL lors du FETCH réseau  de récupération du POST : ',
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
.post-detail {
	max-width: 800px;
	margin: auto;
	padding: 20px;
}
</style>
