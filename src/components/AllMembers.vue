<template>
	<div class="container">
		<h2 class="mb-5">Liste des membres 01 ( par pseudonymes)</h2>
		<div v-if="users.length > 0">
			<div class="list-group">
				<div
					v-for="user in users"
					:key="user._id"
					class="list-group-item d-flex justify-content-between align-items-center"
				>
					<div>
						<h5>ID: {{ user._id }}</h5>
						<h5>{{ user.user }}</h5>
						<!-- <p class="mb-0 text-muted">{{ user.email }}</p> -->
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
			<p>
				Impossible d'afficher le memebres du site. Soit nous
				rencontrons un problème technique, soit vous n'êtes pas
				connecté(e) !
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AllMembers',
	data() {
		return {
			users: [],
			user: '',
			fromID: '',
			errorMessage: '',
			isLoggedIn: false,
		};
	},

	mounted() {
		this.fetchUserData();
		this.fetchAllMembers();
	},
	methods: {
		async fetchUserData() {
			try {
				const response = await fetch(
					'https://eli-back.onrender.com/checkUserStatus',
					{
						method: 'GET',
						credentials: 'include', // Pour envoyer les cookies avec la requête
					}
				);
				if (!response.ok) {
					throw new Error(
						'🍌 🍌 🍌 🍌 🍌 FROM AllMembers ==> ERR Network response was not ok'
					);
				}
				const data = await response.json();
				this.user = data.user;
				this.isLoggedIn = true;
				console.log(
					'✅  FROM AllMembers ==> checkUserStatus ~ this.user:',
					this.user
				);
				this.fromID = data.user._id;
				console.log(
					'✅ ✅ ✅ FROM AllMembers ~ this.fromID:',
					this.fromID
				);
			} catch (error) {
				console.error(
					'🍌 🍌 🍌 🍌 🍌 FROM AllMembers ==> problème avec requête fetch :',
					error
				);
			}
		},
		async fetchAllMembers() {
			try {
				const response = await fetch(
					'https://eli-back.onrender.com/allMembers',
					{
						method: 'GET',
						credentials: 'include', // Pour envoyer les cookies avec la requête
					}
				);

				if (response.ok) {
					console.log(
						'🚀 ~ fetchAllMembers ~ response:',
						response
					);

					const data = await response.json();
					this.users = data; // Stocke les utilisateurs si la réponse est bien en JSON
					console.log(
						'✅ fetchAllMembers ~ this.users:',
						this.users
					);
				} else {
					throw new Error(
						`🍌 🍌 🍌 🍌 FROM fetchAllMembers ERR HTTP: ${response.status}`
					);
				}
			} catch (err) {
				console.error(
					'🍌 🍌 🍌  ERR de récupération des membres:',
					err
				);
				// Vous pouvez également afficher un message d'erreur à l'utilisateur ici
			}
		},
		async sendFriendReq(toID) {
			try {
				const response = await fetch(
					'https://eli-back.onrender.com/askFor1Friend',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							toID: toID,
							fromID: this.fromID,
						}),
						credentials: 'include',
					}
				);
				if (response.ok) {
					console.log(
						'🚀 ~ sendFriendReq ~ response:',
						response,
						response.ok
					);
					alert(
						"✅ 🎉 FROM /askForFriend  Demande d'ami envoyée !"
					);
				} else {
					console.log('🚀 ~ sendFriendReq ~ toID:', toID);

					console.error(
						"🍌 🍌 🍌 FROM /askForFriend API => La réponse n'est pas Ok !"
					);
				}
			} catch (error) {
				console.error(
					"🍌 🍌 🍌 FROM /askForFriend API => Err FETCH demande d'ami:",
					error
				);
			}
			this.errorMessage =
				'🍌 🍌 🍌 Impossible de récupérer les membres. Veuillez réessayer plus tard.';
		},

		isFriend(userId) {
			// Retourne vrai si l'utilisateur est déjà ami
			const user = this.users.find((u) => u._id === this.fromID);
			return user && user.friends.includes(userId);
		},
		hasSentRequest(userId) {
			// Retourne vrai si une demande a déjà été envoyée à cet utilisateur
			const user = this.users.find((u) => u._id === this.fromID);
			return user && user.friendRequestsSent.includes(userId);
		},
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
