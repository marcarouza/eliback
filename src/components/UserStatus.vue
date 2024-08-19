<template>
	<div class="container mt-5 mb-5">
		<div v-if="user">
			<div class="profil">
				<h1 class="text-center mb-4">Votre compte utilisateur</h1>
				<h2>Informations connues à ce jour</h2>
				<table class="table table-striped table-bordered mt-3">
					<tbody>
						<tr>
							<th>Identifiant (confidentiel)</th>
							<td>{{ user._id || 'Non défini' }}</td>
						</tr>
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
										? formatDate(
												user.dateNaissance
										  )
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
							<td>
								{{
									user.isActive ? 'Actif' : 'Inactif'
								}}
							</td>
						</tr>
						<tr>
							<th>Date d'inscription</th>
							<td>
								{{ formatDate(user.dateInscription) }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="friends">
				<h1 class="text-center mb-4">Gestions de votre réseau</h1>
				<h2 class="mb-4">
					Demandes reçues et envoyées, tous statuts confondus
				</h2>
				<table class="table table-striped table-bordered mt-3">
					<thead>
						<tr>
							<th>Type de demande</th>
							<th>Utilisateur</th>
							<th>Statut</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<!-- Demandes d'amis reçues -->
						<tr
							v-for="request in user.friendRequestsReceived"
							:key="request.fromId"
						>
							<th scope="row">
								<i class="fas fa-inbox"></i> Reçue
							</th>
							<td>
								{{
									request.fromPseudo ||
									'Utilisateur inconnu'
								}}
							</td>
							<td>
								<!-- Icônes pour indiquer le statut -->
								<span
									v-if="request.status === 'pending'"
									class="text-warning"
								>
									<i
										class="fas fa-hourglass-half"
									></i>
									En attente
								</span>
								<span
									v-if="
										request.status === 'accepted'
									"
									class="text-success"
								>
									<i class="fas fa-check-circle"></i>
									Acceptée
								</span>
								<span
									v-if="
										request.status === 'rejected'
									"
									class="text-danger"
								>
									<i class="fas fa-times-circle"></i>
									Refusée
								</span>
							</td>
							<td>
								<button
									v-if="request.status === 'pending'"
									class="btn btn-success btn-sm action"
									@click="
										acceptFriendReq(
											request.fromId
										)
									"
								>
									<i class="fas fa-check"></i>
									Accepter
								</button>
								<button
									v-if="request.status === 'pending'"
									class="btn btn-danger btn-sm action"
									@click="
										rejectFriendRequest(
											request.fromId
										)
									"
								>
									<i class="fas fa-times"></i>
									Refuser
								</button>
								<button
									class="btn btn-secondary btn-sm action"
									@click="blockUser(request.fromId)"
								>
									<i class="fas fa-ban"></i> Bloquer
								</button>
							</td>
						</tr>

						<!-- Demandes d'amis envoyées -->
						<tr
							v-for="request in user.friendRequestsSent"
							:key="request.toId"
						>
							<th scope="row">
								<i class="fas fa-paper-plane"></i>
								Envoyée
							</th>
							<td>
								{{
									request.toPseudo ||
									'Utilisateur inconnu'
								}}
							</td>
							<td>
								<!-- Icônes pour indiquer le statut -->
								<span
									v-if="request.status === 'pending'"
									class="text-warning"
								>
									<i
										class="fas fa-hourglass-half"
									></i>
									En attente
								</span>
								<span
									v-if="
										request.status === 'accepted'
									"
									class="text-success"
								>
									<i class="fas fa-check-circle"></i>
									Acceptée
								</span>
								<span
									v-if="
										request.status === 'rejected'
									"
									class="text-danger"
								>
									<i class="fas fa-times-circle"></i>
									Refusée
								</span>
							</td>
							<td>
								<!-- Pas d'action pour les demandes envoyées, juste affichage du statut -->
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="modify px-5">
				<div
					class="d-flex justify-content-between align-items-center"
				>
					<h3>Modifier votre profil</h3>
					<button
						type="button"
						class="btn btn-secondary"
						@click="initiatePasswordChange"
					>
						Changer votre mot de passe
					</button>
				</div>

				<div class="modifyProfil">
					<form @submit.prevent="updateProfile">
						<div class="mb-3">
							<label for="nom" class="form-label"
								>Nom</label
							>
							<input
								v-model="profileForm.nom"
								type="text"
								class="form-control"
								id="nom"
							/>
						</div>
						<div class="mb-3">
							<label for="prenom" class="form-label"
								>Prénom</label
							>
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
							<label for="pseudo" class="form-label"
								>Pseudo</label
							>
							<input
								v-model="profileForm.pseudo"
								type="text"
								class="form-control"
								id="pseudo"
							/>
						</div>
						<div class="mb-3">
							<label for="email" class="form-label"
								>Email</label
							>
							<input
								v-model="profileForm.email"
								type="email"
								class="form-control"
								id="email"
							/>
						</div>
						<div class="d-flex justify-content-center">
							<button
								type="submit"
								class="btn btn-primary mt-5"
							>
								Mettre à jour le profil
							</button>
						</div>
					</form>
				</div>
			</div>
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
			msgRes: '',
			profileForm: {
				nom: '',
				prenom: '',
				dateNaissance: '',
				pseudo: '',
				email: '',
			},
			localUser: null,
		};
	},
	mounted() {
		this.fetchUserData();
		this.checkLocaluser();
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
				console.log(
					' ℹ️    ℹ️    ℹ️ FROM UserStatus~ fetchUserData ~ response:',
					response
				);

				if (!response.ok) {
					throw new Error(
						'FROM USER STATUS ERR Network response was not ok'
					);
				}
				const data = await response.json();
				this.user = data.user;
				// this.initProfileForm(); A REACTIVER POUR MODIFIER LE PROFIL DU MEMEBRE CONNECTE
			} catch (err) {
				console.error(
					'FROM USER STATUS problème avec requête fetch :',
					err
				);
			}
		},
		checkLocaluser() {
			this.localUser =
				JSON.parse(localStorage.getItem('localUser')) || null;
			console.log(
				' ℹ️   ✅   ℹ️ FROM UserStatus ==> this.localUser :',
				this.localUser
			);
		},

		formatDate(date) {
			return new Date(date).toLocaleDateString('fr-FR');
		},
		async acceptFriendReq(requestId) {
			try {
				console.log('🚀 ~ acceptFriendReq ~ requestId:', requestId);
				console.log(
					'🚀 ~ acceptFriendReq ~ requestId:',
					this.user._id,
					typeof requestId,
					typeof this.user._id
				);

				const response = await fetch(
					'https://eli-back.onrender.com/acceptFriendReq',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							fromId: requestId, // Remarquez que j'ai changé `fromID` en `fromId` pour correspondre au backend
							toId: this.user._id, // ID de l'utilisateur actuel
						}),
						credentials: 'include',
					}
				);

				if (response.ok) {
					const data = await response.json();
					console.log("✅ Demande d'ami acceptée:", data);
					this.msgRes = `✅ Demande d'ami acceptée avec succès`;

					// Mettre à jour le statut de la demande dans la liste sans rafraîchir la page
					const request = this.user.friendRequestsReceived.find(
						(req) => req.fromId === requestId
					);
					if (request) {
						request.status = 'accepted';
					}
				} else {
					const data = await response.json();
					this.msgRes = `❌ Erreur innatendue : ${data.message}`;
				}
			} catch (err) {
				this.msgRes = `❌ Problème de connexion, veuillez réessayer plus tard.`;
				console.error(
					"Erreur lors de l'acceptation de la demande d'ami:",
					err
				);
			} finally {
				this.display(this.msgRes);
			}
		},

		display(message) {
			alert(message);
		},
	},
};
</script>

<style scoped>
.table-striped tbody tr:nth-of-type(odd) {
	background-color: #343a40 !important; /* Gris foncé */
}

.table-striped tbody tr:nth-of-type(even) {
	background-color: #495057 !important; /* Gris foncé légèrement plus clair */
}

.table-striped tbody tr {
	color: #ffffff !important; /* Texte en blanc pour le contraste */
}

.friends,
.profil,
.modify {
	margin-top: 2rem;
	border: 1px solid #b0b0b0;
	margin: O;
	padding: 1rem;
	border-radius: 16px;
	max-height: 650px;
	overflow-y: auto;
	background-color: #e0e0e0;
}

.modifyProfil {
	margin-top: 2rem;
	margin: 0 5rem;
	padding: 1rem;
	border-radius: 16px;
	max-height: 650px;
	overflow-y: auto;
	background-color: #f8f9fa;
}

.action {
	/* margin-top: 1rem; */
	margin: 0 1rem;
}

.btn.action {
	padding: rem;
	border-radius: 0.5rem;
	width: 150px;
	height: min-content;

	text-transform: uppercase;
	letter-spacing: 0.13em;
}

.table-striped tbody tr {
	padding: 1rem 0;
}

th,
td {
	padding: 0.5rem 0rem 0.6rem 1rem;
}
</style>
