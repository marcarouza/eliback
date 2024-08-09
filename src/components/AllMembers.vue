<template>
	<div class="container mt-4">
		<h2 class="mb-4">Liste des Utilisateurs</h2>
		<div v-if="users.length > 0">
			<div class="list-group">
				<div
					v-for="user in users"
					:key="user._id"
					class="list-group-item d-flex justify-content-between align-items-center"
				>
					<div>
						<h5>{{ user._id }}</h5>

						<h5>{{ user.user }}</h5>
						<p class="mb-0 text-muted">{{ user.email }}</p>
					</div>
					<button
						class="btn btn-primary"
						@click="sendFriendReq(user._id)"
					>
						Demander en ami
					</button>
				</div>
			</div>
		</div>
		<div v-else>
			<p>Aucun utilisateur trouvé.</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AllMembers',
	data() {
		return {
			users: [],
		};
	},
	methods: {
		async fetchAllMembers() {
			try {
				const response = await fetch(
					'https://eli-back.onrender.com/allMembers'
				);

				if (!response.ok) {
					throw new Error(`Erreur HTTP: ${response.status}`);
				}

				const data = await response.json();
				this.users = data; // Stocke les utilisateurs si la réponse est bien en JSON
			} catch (err) {
				console.error(
					'🍌 🍌 🍌  ERR de récupération des membres:',
					err
				);
				// Vous pouvez également afficher un message d'erreur à l'utilisateur ici
			}
		},
		async sendFriendReq(userId) {
			try {
				const response = await fetch(
					'https://eli-back.onrender.com/friendReq',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({receiverId: userId}),
					}
				);
				if (response.ok) {
					alert("Demande d'ami envoyée !");
				} else {
					console.error(
						"Erreur lors de l'envoi de la demande d'ami."
					);
				}
			} catch (error) {
				console.error(
					"Erreur lors de l'envoi de la demande d'ami:",
					error
				);
			}
		},
	},
	mounted() {
		this.fetchAllMembers();
	},
};
</script>

<style scoped>
.list-group-item {
	background-color: #f8f9fa;
	border: 1px solid #dee2e6;
}

.btn-primary {
	background-color: #007bff;
	border-color: #007bff;
}
</style>
