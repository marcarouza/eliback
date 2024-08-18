<template>
	<div class="container mt-5">
		<h1 class="text-center mb-4">Recherche d'articles de blog</h1>
		<form
			id="searchForm"
			action="/search"
			method="GET"
			class="p-4 bg-light rounded shadow-sm"
		>
			<div class="form-floating mb-3">
				<input
					type="text"
					class="form-control"
					id="date"
					name="date"
					placeholder="Date de publication"
				/>
				<label for="date">Date</label>
			</div>
			<div class="form-floating mb-3">
				<input
					type="text"
					class="form-control"
					id="author"
					name="author"
					placeholder="Nom de l'auteur"
				/>
				<label for="author">Auteur</label>
			</div>
			<div class="form-floating mb-3">
				<input
					type="text"
					class="form-control"
					id="title"
					name="title"
					placeholder="Titre de l'article"
				/>
				<label for="title">Titre</label>
			</div>
			<div class="form-floating mb-3">
				<input
					type="text"
					class="form-control"
					id="content"
					name="content"
					placeholder="Contenu de l'article"
				/>
				<label for="content">Contenu</label>
			</div>
			<button type="submit" class="btn btn-primary w-100 py-3">
				Rechercher
			</button>
		</form>

		<h2 class="mt-5">Résultats de recherche</h2>
		<ul class="list-group">
			<% results.forEach(article => { %>
			<li class="list-group-item mb-3 p-4 rounded shadow-sm">
				<h3 class="mb-2"><%= article.title %></h3>
				<p class="mb-1"><%= article.content %></p>
				<small class="text-muted"
					>Auteur: <%= article.author %> | Date: <%= article.date
					%></small
				>
			</li>
			<% }) %>
		</ul>
		<% } else if (typeof results !== 'undefined') { %>
		<p class="mt-5 text-center">Aucun résultat trouvé</p>
		<% } %>
	</div>
</template>

<script>
export default {
	name: 'SearchPost',
	data() {
		return {
			// Vos données ici
		};
	},
	methods: {
		// Vos méthodes ici
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
.container {
	max-width: 800px;
	margin: auto;
}

h1 {
	font-size: 2.5rem;
	font-weight: 700;
	color: #343a40;
}

form {
	background-color: #f8f9fa;
	border-radius: 8px;
	padding: 20px;
	box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

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
</style>
