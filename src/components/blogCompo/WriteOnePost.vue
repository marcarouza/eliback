<template>
	<div class="container mt-5">
		<h1 class="text-center mb-4">
			Rédiger un nouvel article {{ author }}
		</h1>
		<form @submit.prevent="submitPost">
			<div class="form-floating mb-4">
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
			<div class="form-floating mb-4">
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
			<div class="form-floating mb-4">
				<select
					class="form-select"
					v-model="categories"
					id="categories"
					name="categories"
					required
				>
					<option value="" disabled selected>
						Choisir une catégorie
					</option>
					<option value="tech">Tech</option>
					<option value="lifestyle">Tekos Lifestyle</option>
					<option value="travel">Travel</option>
				</select>
				<label for="categories">Catégorie</label>
			</div>
			<div class="form-floating mb-4">
				<select
					class="form-select"
					v-model="tags"
					id="tags"
					name="tags"
					multiple
					required
				>
					<option value="JavaScript">JavaScript</option>
					<option value="VueJS">VueJS</option>
					<option value="Web Development">
						Web Development
					</option>
					<option value="Programming">Programming</option>
					<option value="Frontend">Frontend</option>
				</select>
				<label for="tags">Tags</label>
			</div>
			<button type="submit" class="btn btn-primary w-100 py-3">
				Soumettre
			</button>
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
			categories: '', // Catégorie comme une seule chaîne de caractères
			tags: [], // Tableau pour les tags sélectionnés
			author: '', // Utiliser l'ID utilisateur connu
		};
	},

	monted() {
		// Logique pour récupérer l'utilisateur local si nécessaire
		this.getLocalUser();
	},

	methods: {
		getLocalUser() {
			const localUser = JSON.parse(
				sessionStorage.getItem('localUser')
			);
			console.log(
				'🚨 ~ FROM getLocalUser in WRITEPOST / localUser:',
				localUser
			);

			// Assurez-vous que localUser existe avant d'essayer d'accéder à _id
			if (localUser && localUser.user) {
				this.author = localUser.user;
			} else {
				console.error(
					'Utilisateur local non trouvé dans sessionStorage'
				);
				// Gérer le cas où l'utilisateur n'est pas trouvé
				this.author = null; // ou une autre valeur par défaut ou une action
			}
		},
		async submitPost() {
			try {
				const postData = {
					title: this.title,
					content: this.content,
					categories: this.categories, // Catégorie en tant que chaîne de caractères
					tags: this.tags, // Les tags sont un tableau de chaînes de caractères
					author: this.author, // Le pseudo de l'utilisateur local
				};
				console.log('🚀 ~ submitPost ~ postData:', postData);

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
					this.categories = '';
					this.tags = [];
					this.$router.push({name: 'homeblogpage'});
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
.form-floating .form-control,
.form-floating textarea {
	padding: 20px 15px;
	font-size: 1rem;
	height: auto;
	border-radius: 8px;
}

.form-floating label {
	padding: 15px 15px;
	font-size: 1rem;
}

.form-floating textarea {
	min-height: 150px;
	resize: none;
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
</style>
