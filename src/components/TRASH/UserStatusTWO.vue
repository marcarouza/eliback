<template>
	<div class="container mt-5">
		<h1 class="text-center mb-4">Votre compte utilisateur</h1>
		<h2>Informations connues à ce jour</h2>

		<div v-if="user">
			<table class="table table-striped table-bordered mt-3">
				<tbody>
					<tr>
						<th>Nom</th>
						<td>{{ user.nom || 'Non défini' }}</td>
					</tr>
					<tr>
						<th>Prénom</th>
						<td>{{ user.prenom || 'Non défini' }}</td>
					</tr>
					<tr>
						<th>Date de naissance</th>
						<td>
							{{
								user.dateNaissance
									? formatDate(user.dateNaissance)
									: 'Non définie'
							}}
						</td>
					</tr>
					<tr>
						<th>Email</th>
						<td>{{ user.email }}</td>
					</tr>
					<tr>
						<th>Pseudo</th>
						<td>{{ user.user || 'Non défini' }}</td>
					</tr>
					<tr>
						<th>Rôle</th>
						<td>{{ user.role }}</td>
					</tr>
					<tr>
						<th>Statut du compte</th>
						<td>{{ user.isActive ? 'Actif' : 'Inactif' }}</td>
					</tr>
					<tr>
						<th>Date d'inscription</th>
						<td>{{ formatDate(user.dateInscription) }}</td>
					</tr>
				</tbody>
			</table>

			<h3 class="mt-5 mb-3">Modifier votre profil</h3>
			<form @submit.prevent="updateProfile">
				<div class="mb-3">
					<label for="nom" class="form-label">Nom</label>
					<input
						v-model="profileForm.nom"
						type="text"
						class="form-control"
						id="nom"
					/>
				</div>
				<div class="mb-3">
					<label for="prenom" class="form-label">Prénom</label>
					<input
						v-model="profileForm.prenom"
						type="text"
						class="form-control"
						id="prenom"
					/>
				</div>
				<div class="mb-3">
					<label for="dateNaissance" class="form-label"
						>Date de naissance</label
					>
					<input
						v-model="profileForm.dateNaissance"
						type="date"
						class="form-control"
						id="dateNaissance"
					/>
				</div>
				<div class="mb-3">
					<label for="pseudo" class="form-label">Pseudo</label>
					<input
						v-model="profileForm.pseudo"
						type="text"
						class="form-control"
						id="pseudo"
					/>
				</div>
				<div class="mb-3">
					<label for="email" class="form-label">Email</label>
					<input
						v-model="profileForm.email"
						type="email"
						class="form-control"
						id="email"
					/>
				</div>
				<button type="submit" class="btn btn-primary">
					Mettre à jour le profil
				</button>
			</form>
		</div>

		<div v-else>
			<h3>Une erreur est survenue, veuillez vous reconnecter</h3>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UserStatus',
	data() {
		return {
			user: null,
			profileForm: {
				nom: '',
				prenom: '',
				dateNaissance: '',
				pseudo: '',
				email: '',
			},
		};
	},
	mounted() {
		this.fetchUserData();
	},
	methods: {
		async fetchUserData() {
			try {
				const response = await fetch(
					'https://eli-back.onrender.com/checkUserStatus',
					{
						method: 'GET',
						credentials: 'include',
					}
				);
				if (!response.ok) {
					throw new Error(
						'FROM USER STATUS ERR Network response was not ok'
					);
				}
				const data = await response.json();
				this.user = data.user;
				this.initProfileForm();
			} catch (error) {
				console.error(
					'FROM USER STATUS problème avec requête fetch :',
					error
				);
			}
		},
		initProfileForm() {
			this.profileForm.nom = this.user.nom || '';
			this.profileForm.prenom = this.user.prenom || '';
			this.profileForm.dateNaissance = this.user.dateNaissance
				? new Date(this.user.dateNaissance)
						.toISOString()
						.split('T')[0]
				: '';
			this.profileForm.pseudo = this.user.user || '';
			this.profileForm.email = this.user.email || '';
		},
		formatDate(date) {
			return new Date(date).toLocaleDateString('fr-FR');
		},
		async updateProfile() {
			try {
				// Ici, vous devez implémenter la logique pour envoyer les nouvelles données au serveur
				// Par exemple :
				// const response = await fetch('https://eli-back.onrender.com/updateProfile', {
				//   method: 'POST',
				//   credentials: 'include',
				//   headers: {
				//     'Content-Type': 'application/json',
				//   },
				//   body: JSON.stringify(this.profileForm),
				// });
				// if (response.ok) {
				//   // Mettre à jour les données locales
				//   Object.assign(this.user, this.profileForm);
				//   alert('Profil mis à jour avec succès');
				// } else {
				//   throw new Error('Erreur lors de la mise à jour du profil');
				// }
				console.log(
					'Mise à jour du profil avec :',
					this.profileForm
				);
				alert('Fonctionnalité de mise à jour non implémentée');
			} catch (error) {
				console.error(
					'Erreur lors de la mise à jour du profil :',
					error
				);
				alert('Erreur lors de la mise à jour du profil');
			}
		},
	},
};
</script>

<style scoped>
/* Vous pouvez ajouter des styles personnalisés ici si nécessaire */
</style>
