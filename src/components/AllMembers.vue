<template>
	<div class="container">
		<h2 class="mb-3">Les membres</h2>
		<h5 class="mb-3">
			Les informations présentés ici sont publiques et autorisées par
			les membres lors de l'inscription
		</h5>
		<div class="card p-3" v-if="users.length > 0">
			<table class="table table-striped">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Utilisateur</th>
						<th class="text-center" scope="col">
							État en ligne
						</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(user, index) in users" :key="user._id">
						<th scope="row">{{ index + 1 }}</th>
						<td>{{ user.user }}</td>
						<td class="text-center">
							<!-- Statut avec couleur personnalisée -->
							<span v-if="user.isActive">
								<i
									class="fas fa-circle"
									style="color: green"
								></i>
							</span>
							<span v-else>
								<i
									class="fas fa-circle"
									style="color: red"
								></i>
							</span>
						</td>
						<td>
							<button
								v-if="fromID != user._id"
								class="btn btn-primary"
								@click="
									sendFriendReq(
										fromID,
										user._id,
										user.user
									)
								"
							>
								<i class="fas fa-user-plus"></i>
								Ajouter
							</button>
							<button v-else class="btn btn-dark">
								🙋
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div v-else>
			<p>
				Impossible d'afficher le membres du site. Soit nous
				rencontrons un problème technique, soit vous n'êtes pas
				connecté(e) !
			</p>
		</div>
	</div>
	<div class="toast-container position-fixed p-3 angle">
		<div
			class="toast"
			role="alert"
			aria-live="assertive"
			aria-atomic="true"
			:class="{show: isVisible}"
		>
			<div class="toast-header">
				<strong class="me-auto">{{ title }}</strong>
				<small class="time">{{ timestamp }}</small>
				<button
					type="button"
					class="btn-close"
					@click="hideNotif"
					aria-label="Fermer"
				></button>
			</div>
			<div class="toast-body">
				{{ message }}
			</div>
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
			toID: '',
			fromID: '',
			msgRes: '',
			toFriend: '',
			errorMessage: '',
			Friend: '',
			isLoggedIn: false,
			localUserSession: null,
			BoX: null,
			//
			isVisible: false,
			title: '',
			message: '',
			timestamp: '',
		};
	},

	mounted() {
		this.getLocalUser();
		this.fetchAllMembers();
		this.$emit('updatePageTitle', 'Les membres du site', true);
	},
	methods: {
		showNotif(title, message) {
			this.title = title;
			this.message = message;
			this.timestamp = new Date().toLocaleTimeString();
			this.isVisible = true;
			setTimeout(() => {
				this.hideNotif();
			}, 60000); // La notification disparaît après 5 secondes
		},
		hideNotif() {
			this.isVisible = false;
		},
		display(message) {
			alert(message);
		},

		getLocalUser() {
			this.localUserSession = JSON.parse(
				sessionStorage.getItem('localUserSession')
			);

			if (this.localUserSession && this.localUserSession._id) {
				console.log(
					'🚀 ~ getLocalUser ~ localUserSession._id:',
					this.localUserSession._id
				);
				console.log(
					'🚀 ~ getLocalUser ~ localUserSession:',
					this.localUserSession
				);
				this.user = this.localUserSession.user;

				this.fromID = this.localUserSession._id;
				//
				this.isLoggedIn = true;
				//
				console.log('🚀 ~ getLocalUser ~ this.toID:', this.toID);
			} else {
				console.error(
					'Utilisateur local non trouvé dans sessionStorage'
				);
				this.fromID = null;
			}
		},

		async fetchAllMembers() {
			try {
				const response = await fetch(
					// 'https://eli-back.onrender.com/api/allMembers',
					'https://eliback.onrender.com/api/getAllMembers',
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
						`🍌  FROM fetchAllMembers ERR HTTP: ${response.status}`
					);
				}
			} catch (err) {
				console.error('🍌  ERR de récupération des membres:', err);
				// Vous pouvez également afficher un message d'erreur à l'utilisateur ici
			}
		},
		async sendFriendReq(fromID, toID, toPseudo) {
			console.log('👉 sendFriendReq ~ toID:', toID);
			console.log('👉 sendFriendReq ~ fromID:', fromID);
			// console.log('🚀 ~ sendFriendReq ~ toPseudo:', toPseudo);

			try {
				const response = await fetch(
					// 'https://eli-back.onrender.com/api/askFor1Friend',
					'https://eliback.onrender.com/api/askFor1Friend',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							fromID: fromID,
							toID: toID,
						}),
						credentials: 'include',
					}
				);

				if (response.ok) {
					const data = await response.json();
					console.log('ℹ️ ✅ ✅  sendFriendReq ~ data:', data);
					this.msgRes = `Envoyée à ${toPseudo}`;
				} else if (response.status === 409) {
					// Si le statut est 409, c'est un conflit : demande déjà envoyée

					this.msgRes = toPseudo
						? `⚠️ Une demande d'ami a déjà été envoyée à ${toPseudo}`
						: `⚠️ Une demande d'ami a déjà été envoyée à ${toID.substring(
								0,
								5
						  )}`;
				} else {
					// Pour toutes les autres réponses non-OK : demande deja faite par exemple
					const data = await response.json(); // Récupérer les détails de l'erreur
					this.msgRes = `${data.message}`;
				}
				// this.display(this.msgRes);
				this.showNotif(`Demande d'ami`, this.msgRes);
			} catch (err) {
				// Gestion des erreurs réseau ou autres erreurs inattendues
				this.msgRes = `Problème de connexion, veuillez réessayer plus tard.`;
				this.showNotif(`✋ Demande d'ami`, this.msgRes);

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
							fromEmail: this.localUserSession.email,
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
					'🍌 🍌 🍌  FROM FETCH signUserConfirm  =>  ERR sending email: ' +
						error.message
				);
			}
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
.angle {
	top: 35px;
	right: 80px;
}

.time {
	font-style: italic;
	margin-right: 5px;
}

.toast-container {
	z-index: 1000;
}

.btn-close {
	opacity: 0.5;
	transition: all 0.3s ease;
}

.btn-close:hover {
	opacity: 1;
	transform: rotate(3deg);
	background-color: rgba(255, 0, 0, 0.1); /* Légère teinte rouge au survol */
}

/* .btn-close:focus {
	box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.25);
	outline: none;
} */
.toast-header {
	background-color: #dcdcdc !important;
	min-height: 35px;
}
.toast {
	transition: opacity 0.3s ease-in-out;
	opacity: 0;
}
.toast.show {
	opacity: 1;
}

.list-group-item {
	background-color: #f8f9fa;
	border: 1px solid #dee2e6;
}

.btn-primary {
	background-color: #007bff;
	border-color: #007bff;
}
</style>
