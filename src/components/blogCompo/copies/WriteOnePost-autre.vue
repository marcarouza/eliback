<template>
	<div class="container mt-5">
		<h1 class="text-center mb-4">Rédiger un nouvel article</h1>
		<form @submit.prevent="submitPost">
			<div class="form-floating mb-3">
				<input
					type="text"
					class="form-control"
					v-model="title"
					id="title"
					name="title"
					placeholder="Entrez le titre du billet"
					required
				/>
				<label for="title">Titre</label>
			</div>
			<div class="form-floating mb-3">
				<textarea
					class="form-control"
					v-model="content"
					id="content"
					name="content"
					placeholder="Écrivez votre contenu ici"
					style="min-height: 200px"
					required
				></textarea>
				<label for="content">Contenu</label>
			</div>
			<div class="form-floating mb-3">
				<select
					style="min-height: 100px"
					class="form-select"
					v-model="categories"
					id="categories"
					name="categories"
					multiple
					required
				>
					<option value="tech">Tech</option>
					<option value="lifestyle">Tekos Lifestyle</option>
					<option value="travel">Travel</option>
				</select>
				<label for="categories">Catégories</label>
			</div>
			<div class="form-floating mb-3">
				<input
					type="text"
					class="form-control"
					v-model="tags"
					id="tags"
					name="tags"
					placeholder="Séparez les tags par des virgules"
					required
				/>
				<label for="tags">Tags</label>
			</div>
			<button type="submit" class="btn btn-primary">Soumettre</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'WriteOnePost',
	data() {
		return {
			title: '',
			content: '',
			categories: [],
			tags: '',
			author: '', // Utiliser l'ID utilisateur connu
		};
	},
	methods: {
		async submitPost() {
			try {
				const postData = {
					title: this.title,
					content: this.content,
					categories: this.categories,
					tags: this.tags.split(','), // Transformer les tags en tableau
					author: this.author, // Inclure  l'auteur
				};

				const response = await fetch(
					'https://eli-back.onrender.com/api/addOnePost',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(postData),
					}
				);

				if (response.ok) {
					alert('Votre article a été soumis avec succès!');
					// Réinitialiser le formulaire
					this.title = '';
					this.content = '';
					this.categories = [];
					this.tags = '';
				} else {
					const errorData = await response.json();
					console.error(
						'Erreur lors de la soumission:',
						errorData
					);
					alert(
						'Une erreur est survenue lors de la soumission de votre article.'
					);
				}
			} catch (error) {
				console.error(
					"Erreur réseau lors de la soumission de l'article:",
					error
				);
				alert('Une erreur réseau est survenue.');
			}
		},
	},
};
</script>

<style scoped>
/* Vos styles ici */
</style>
