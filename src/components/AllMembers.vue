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
						<h5>{{ user.isActive }}</h5>
						<!-- <p class="mb-0 text-muted">{{ user.email }}</p> -->
					</div>
					<button
						class="btn btn-primary"
						@click="
							sendFriendReq_NEW(
								user._id,
								user.user,
								user.email
							)
						"
					>
						Demander en ami
					</button>
				</div>
			</div>
		</div>
		<div v-else>
			<p>
				Impossible d'afficher le membres du site. Soit nous
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
			msgRes: '',
			toFriend: '',
			errorMessage: '',
			Friend: '',
			isLoggedIn: false,
			localUser: null,
			BoX: null,
		};
	},

	mounted() {
		this.fetchUserData();
		this.fetchAllMembers();
		this.checkLocaluser();
	},
	methods: {
		display(message) {
			alert(message);
		},
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

				if (this.user) {
					this.fromID = this.user._id;
					console.log(
						'✅ ✅ ✅ FROM AllMembers ~ this.fromID:',
						this.fromID
					);
				}
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
		async sendFriendReq_NEW(toID, toPseudo) {
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
					//  requête réussie
					const data = await response.json();
					console.log(
						'ℹ️ ✅ ✅  sendFriendReq_NEW ~ data:',
						data
					);
					this.msgRes = `✅ Demande d'ami envoyée à ${toPseudo}`;

					// this.sendMAILreq2Friend(
					// 	this.localUser,
					// 	toPseudo,
					// 	toEmail
					// );
				} else if (response.status === 409) {
					// Si le statut est 409, c'est un conflit : demande déjà envoyée
					this.msgRes = `⚠️ Une demande d'ami a déjà été envoyée à cette personne.`;
				} else {
					// Pour toutes les autres réponses non-OK
					const data = await response.json(); // Récupérer les détails de l'erreur
					this.msgRes = `❌ Erreur inattendue: ${data.message}`;
				}
				this.display(this.msgRes);
			} catch (err) {
				// Gestion des erreurs réseau ou autres erreurs inattendues
				this.msgRes = `❌ Problème de connexion, veuillez réessayer plus tard.`;
				this.display(this.msgRes);
				console.error("Erreur lors de la demande d'ami:", err);
			}
		},

		async sendMAILreq2Friend(fromONE, toONE, toPseudo) {
			console.log('🚀 ~ sendMAILreq2Friend ~ toPseudo:', toPseudo);
			console.log('🚀 ~ sendMAILreq2Friend ~ toONE:', toONE);
			console.log('🚀 ~ sendMAILreq2Friend ~ fromONE:', fromONE);
			BoX = {
				from: fromONE.email,
				to: toONE,
				fromPseudo: toONE.user,
				toPseudo: toPseudo,
				subject: "Demande d'ami",
				text: `Vous avez reçu une demande d\'ami`,
			};

			console.log('🚀 ~ sendMAILreq2Friend ~ BoX:', BoX);

			try {
				const response = await fetch(
					'https://eli-back.onrender.com/mailFriendReq',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							fromEmail: this.localUser.email,
							toEmail: toEmail,
							pseudo: this.formData.user,
							subject: "Demande d'ami depuis eliazoura.fr",
							text: `Vous avez reçu une demande d\'ami de la part de ${fromONE}`,
						}),
					}
				);

				if (!response.ok) {
					throw new Error(
						'🍌 🍌 🍌 🍌 🍌 FROM FETCH signUserConfirm  =>  Failed to send message'
					);
				}

				const result = await response.json();
				console.log(
					'✅ FROM signUserConfirm => EMAIL sent successfully : ' +
						result.response
				);
			} catch (error) {
				console.error(
					'🍌 🍌 🍌 🍌 🍌  FROM FETCH signUserConfirm  =>  ERR sending email: ' +
						error.message
				);
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
							// 'Authorization': `Bearer ${this.token}`,
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
					console.log(
						'✅ FROM /askForFriend API => toID:',
						toID
					);
					console.log(
						'✅  FROM /askForFriend API => fromID:',
						fromID
					);
					alert(
						`✅  FROM /askForFriend  Demande d'ami envoyée à ${fromID.user}!`
					);
				} else {
					console.log('FROM /askForFriend API =>  toID:', toID);
					console.log(
						'FROM /askForFriend API => ~ fromID:',
						fromID
					);

					console.error(
						"👁️ 🍌 👁️  FROM /askForFriend API => La réponse n'est pas Ok !"
					);
				}
			} catch (error) {
				console.error(
					"🍌 👁️ 🍌  FROM /askForFriend API => Err FETCH demande d'ami:",
					error
				);
			}
			this.errorMessage =
				'🍌 👁️ 👁️ Impossible de récupérer les membres. Veuillez réessayer plus tard.';
		},
		checkLocaluser() {
			this.localUser =
				JSON.parse(localStorage.getItem('localUser')) || null;
			console.log(
				' ℹ️   ✅   ℹ️ FROM UserStatus ==> this.localUser :',
				this.localUser
			);
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
