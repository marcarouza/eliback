<template>
	<div class="post-detail">
		<h1>{{ post.title }}</h1>
		<p>Par {{ post.author }}</p>
		<p>{{ post.content }}</p>
		<p>Publié le {{ formatDate(post.createdAt) }}</p>
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
	async created() {
		const postId = this.$route.params.id;
		try {
			const response = await fetch(
				`https://eli-back.onrender.com/api/onePostById/${postId}`
			);
			if (response.ok) {
				this.post = await response.json();
			} else {
				console.error(
					"Erreur lors de la récupération de l'article."
				);
			}
		} catch (error) {
			console.error(
				"Erreur réseau lors de la récupération de l'article:",
				error
			);
		}
	},
	methods: {
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
