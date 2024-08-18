<template>
	<div class="container mt-5">
		<h1 class="text-center mb-4">Rechercher un article de blog</h1>
		<form
			@submit.prevent="searchPost"
			class="p-4 bg-light rounded shadow-sm"
		>
			<div class="form-floating mb-4">
				<input
					type="text"
					class="form-control"
					v-model="searchCriteria.title"
					id="title"
					name="title"
					placeholder="Titre de l'article"
				/>
				<label for="title">Titre</label>
			</div>
			<div class="form-floating mb-4">
				<input
					type="text"
					class="form-control"
					v-model="searchCriteria.content"
					id="content"
					name="content"
					placeholder="Contenu de l'article"
				/>
				<label for="content">Contenu</label>
			</div>
			<div class="form-floating mb-4">
				<select
					class="form-select"
					v-model="searchCriteria.category"
					id="category"
					name="category"
				>
					<option value="" disabled selected>
						Choisir une catégorie
					</option>
					<option value="tech">Tech</option>
					<option value="lifestyle">Tekos Lifestyle</option>
					<option value="travel">Travel</option>
				</select>
				<label for="category">Catégorie</label>
			</div>
			<div class="form-floating mb-4">
				<input
					type="text"
					class="form-control"
					v-model="searchCriteria.author"
					id="author"
					name="author"
					placeholder="Auteur"
				/>
				<label for="author">Auteur</label>
			</div>
			<div class="form-floating mb-4">
				<input
					type="text"
					class="form-control"
					v-model="searchCriteria.tags"
					id="tags"
					name="tags"
					placeholder="Tags (séparés par des virgules)"
				/>
				<label for="tags">Tags</label>
			</div>
			<div class="form-floating mb-4">
				<input
					type="date"
					class="form-control"
					v-model="searchCriteria.createdAt"
					id="createdAt"
					name="createdAt"
					placeholder="Date de création"
				/>
				<label for="createdAt">Date de création</label>
			</div>
			<button type="submit" class="btn btn-primary w-100 py-3">
				Rechercher
			</button>
		</form>

		<div v-if="results.length > 0" class="mt-5">
			<h2 class="mb-4">Résultats de recherche</h2>
			<ul class="list-group">
				<li
					v-for="post in results"
					:key="post._id"
					class="list-group-item mb-3 p-4 rounded shadow-sm"
				>
					<h3 class="mb-2">{{ post.title }}</h3>
					<p class="mb-1">{{ post.content }}</p>
					<small class="text-muted">
						Auteur: {{ post.author.name }} | Date:
						{{ formatDate(post.createdAt) }}
					</small>
					<div class="mt-2">
						<span
							class="badge bg-primary me-1"
							v-for="tag in post.tags"
							:key="tag"
							>{{ tag }}</span
						>
					</div>
				</li>
			</ul>
		</div>
		<p v-else-if="searched" class="mt-5 text-center">
			Aucun résultat trouvé
		</p>
	</div>
</template>

<script>
export default {
	name: 'SearchPost',
	data() {
		return {
			searchCriteria: {
				title: '',
				content: '',
				category: '',
				author: '',
				tags: '',
				createdAt: '',
			},
			results: [], // Pour stocker les résultats de la recherche
			searched: false, // Pour indiquer si une recherche a été effectuée
		};
	},
	methods: {
		async searchPost() {
			try {
				const queryParams = new URLSearchParams(
					this.searchCriteria
				).toString();
				const response = await fetch(
					`https://eli-back.onrender.com/api/searchPost?${queryParams}`
				);
				if (response.ok) {
					const data = await response.json();
					this.results = data.posts;
					this.searched = true;
				} else {
					console.error(
						'Erreur lors de la recherche des posts.'
					);
				}
			} catch (error) {
				console.error(
					'Erreur réseau lors de la recherche des posts:',
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

.form-floating .form-select,
.form-floating .form-control {
	padding: 20px 15px;
	font-size: 1rem;
	height: auto;
	border-radius: 8px;
}

.form-floating label {
	padding: 0 15px;
	font-size: 1rem;
}

button[type='submit'] {
	background-color: #007bff;
	border: none;
	font-size: 1.25rem;
	font-weight: 600;
	border-radius: 8px;
	transition: background-color 0.3s ease;
}

button[type='submit']:hover {
	background-color: #0056b3;
}

.list-group-item {
	background-color: #ffffff;
	border: 1px solid #dee2e6;
}

.badge {
	font-size: 0.875rem;
	padding: 0.5em 0.75em;
	border-radius: 0.25rem;
}
</style>
