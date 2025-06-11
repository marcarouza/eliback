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
							<td>{{ user.lastname || 'Non défini' }}</td>
						</tr>
						<tr>
							<th>Prénom</th>
							<td>{{ user.firstname || 'Non défini' }}</td>
						</tr>
						<tr>
							<th>Date de naissance</th>
							<td>
								{{
									user.birthdate
										? formatDate(user.birthdate)
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
							v-for="req in user.friendReqIN"
							:key="req.fromID"
						>
							<th scope="row">
								<i class="fas fa-inbox"></i> Reçue
							</th>
							<td>
								{{
									req.fromPseudo ||
									'Utilisateur inconnu'
								}}
							</td>
							<td>
								<!-- Icônes pour indiquer le statut -->
								<span
									v-if="req.status === 'pending'"
									class="text-warning"
								>
									<i
										class="fas fa-hourglass-half"
									></i>
									En attente
								</span>
								<span
									v-if="req.status === 'accepted'"
									class="text-success"
								>
									<i class="fas fa-check-circle"></i>
									Acceptée
								</span>
								<span
									v-if="req.status === 'rejected'"
									class="text-danger"
								>
									<i class="fas fa-times-circle"></i>
									Refusée
								</span>
							</td>
							<td v-if="req.status === 'pending'">
								<button
									class="btn btn-success btn-sm action"
									@click="
										acceptFriendReq(req.fromID)
									"
								>
									<i class="fas fa-check"></i>
									Accepter
								</button>
								<button
									class="btn btn-danger btn-sm action"
									@click="
										rejectFriendReq(req.fromID)
									"
								>
									<i class="fas fa-times"></i>
									Refuser
								</button>
								<button
									class="btn btn-dark btn-sm action"
									@click="blockUser(req.fromID)"
								>
									<i class="fas fa-ban"></i> Bloquer
								</button>
							</td>
						</tr>

						<!-- Demandes d'amis envoyées -->
						<tr
							v-for="req in user.friendReqOUT"
							:key="req.toID"
						>
							<th scope="row">
								<i class="fas fa-paper-plane"></i>
								Envoyée
							</th>
							<td>
								{{
									req.toPseudo ||
									'Utilisateur inconnu'
								}}
							</td>
							<td>
								<!-- Icônes pour indiquer le statut -->
								<span
									v-if="req.status === 'pending'"
									class="text-warning"
								>
									<i
										class="fas fa-hourglass-half"
									></i>
									En attente
								</span>
								<span
									v-if="req.status === 'accepted'"
									class="text-success"
								>
									<i class="fas fa-check-circle"></i>
									Acceptée
								</span>
								<span
									v-if="req.status === 'rejected'"
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
					class="d-flex justify-content-between align-items-center p-3"
				>
					<h3>Compléter votre profil</h3>
					<router-link :to="{name: 'passmodifypage'}">
						<button type="button" class="btn btn-secondary">
							<i class="fas fa-key"></i> Changer votre mot
							de passe
						</button>
					</router-link>
				</div>

				<div class="modifyProfil">
					<form @submit.prevent="convertDate">
						<div class="mb-3 form-floating">
							<input
								v-model="lastname"
								type="text"
								class="form-control"
								id="lastname"
								placeholder="Nom"
							/>
							<label for="lastname">Nom</label>
						</div>
						<div class="mb-3 form-floating">
							<input
								v-model="firstname"
								type="text"
								class="form-control"
								id="firstname"
								placeholder="Prénom"
							/>
							<label for="firstname">Prénom</label>
						</div>
						<div class="mb-3 form-floating">
							<input
								v-model="birthDate"
								type="date"
								class="form-control"
								id="birthDate"
								placeholder="Date de naissance"
							/>
							<label for="birthDate"
								>Date de naissance</label
							>
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
				<small>{{ timestamp }}</small>
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
import { API_BASE_URL } from "@/config/configDevProd.js"; // Assurez-vous du bon chemin
export default {
	name: 'UserStatus',
	components: {},
	data() {
		return {
			user: null,
			pseudo : null,
			users: [],
			msgRes: '',
			lastname: '',
			firstname: '',
			birthDate: '',
			localUserSession: null,
			//
			isVisible: false,
			title: '',
			message: '',
			timestamp: '',
		};
	},

	computed: {
		infoPlus() {
			return {
				firstname: this.firstname,
				lastname: this.lastname,
				birthDate: this.birthDate,
			};
		},
	},
	mounted() {
		// this.getLocalUser();

		// this.checkUserStatus();
	},
	methods: {
		showNotif(title, message) {
			this.title = title;
			this.message = message;
			this.timestamp = new Date().toLocaleTimeString();
			this.isVisible = true;
			setTimeout(() => {
				this.hideNotif();
			}, 5000); // La notification disparaît après 5 secondes
		},
		hideNotif() {
			this.isVisible = false;
		},
		async completeProfile() {
			await fetch(
				// `https://eli-back.onrender.com/api/completeProfile`,
				`https://${API_BASE_URL}api/getAgent`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(infoPlus),
				}
			);
		},

		convertDate() {
			// Diviser la date en jour, mois et année
			const [day, month, year] = this.birthDate.split('-');

			console.log('🚀 ~ completeProfile ~ year:', year);
			console.log('🚀 ~ completeProfile ~ month:', month);
			console.log('🚀 ~ completeProfile ~ day:', day);
			// Les mois en JavaScript sont indexés à partir de 0, donc soustraire 1 au mois
			const date = new Date(year, month - 1, day).getTime();

			console.log('🚀 ~ completeProfile ~ date:', date);

			console.log(
				'🚨  infoPlus  :   ',
				this.infoPlus,
				typeof this.infoPlus
			);

			// return date.getTime();
		},
		async checkUserStatus() {
			try {
				const response = await fetch(
					// 'https://eli-back.onrender.com/api/checkUserStatus',
					// 'https://eliback.onrender.com/api/checkUser',
					`https://${ API_BASE_URL}api/checkUser`,

					{
						method: 'GET',
						credentials: 'include',
					}
				);
				console.log(
					' ℹ️    ℹ️    ℹ️ FROM UserStatus~ checkUserStatus ~ response:',
					response
				);

				if (!response.ok) {
					throw new Error(
						'FROM USER STATUS ERR Network response was not ok'
					);
				}
				const data = await response.json();
				this.pseudo = data.pseudo;
			} catch (err) {
				console.error(
					'FROM USER STATUS problème avec requête fetch :',
					err
				);
			}
		},

		getLocalUser() {
			this.localUserSession = JSON.parse(sessionStorage.getItem('localUserSession'));

			if (this.localUserSession) {
				console.log(
					'🚀 ~ getLocalUser ~ localUserSession._id:',
					this.localUserSession._id
				);

				this.pseudo = this.localUserSession.pseudo;

				this.fromID = this.localUserSession._id;
				this.isLoggedIn = true;
			} else {
				console.error(
					'Utilisateur local non trouvé dans sessionStorage'
				);
				this.fromID = null;
			}
		},

		formatDate(date) {
			return new Date(date).toLocaleDateString('fr-FR');
		},
		async acceptFriendReq(reqId) {
			if (!this.user || !this.user._id) {
				this.msgRes =
					'Veuillez vous reconnecter (après deconnexion)';
				this.display(this.msgRes);
				this.showNotif("❌ Problème d'identification", this.msgRes);
				return;
			}
			try {
				const response = await fetch(
					// 'https://eli-back.onrender.com/api/acceptFriendReq',
					`https://${ API_BASE_URL}api/acceptFriendReq`,

					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							fromID: reqId,
							toID: this.user._id, // ID de l'utilisateur actuel
						}),
						credentials: 'include',
					}
				);

				console.log(
					'🚀 ~ acceptFriendReq ~ reqId //////// this.user._id : ',
					reqId,
					'    /////   ',
					this.user._id,
					'    /////   ',
					typeof reqId,
					typeof this.user._id
				);

				if (response.ok) {
					const data = await response.json();

					// Mettre à jour le statut de la demande dans la liste sans rafraîchir la page
					const req = this.user.friendReqIN.find(
						(req) => req.fromID === reqId
					);
					if (req) {
						req.status = 'accepted';
					}

					console.log("✅ Demande d'ami acceptée:", data);
					this.msgRes = `✅ Demande d'ami acceptée avec succès`;
				} else {
					const data = await response.json();
					this.msgRes = `❌ Erreur innatendue : ${data.message}`;
				}
			} catch (err) {
				this.msgRes = `Veuillez réessayer plus tard.`;
				console.error(
					"L'acceptation d'ami ne fonctionne pas : ",
					err
				);
			} finally {
				// this.display(this.msgRes);
				this.showNotif('❌ Problème de connexion', this.msgRes);
			}
		},

		async rejectFriendReq(reqId) {
			if (!this.user || !this.user._id) {
				this.msgRes =
					'Veuillez vous reconnecter (après deconnexion)';
				// this.display(this.msgRes);
				this.showNotif("❌ Problème d'identification", this.msgRes);

				return;
			}
			try {
				console.log(
					'🗑️ ~ rejectFriendReq ~ reqId //////// this.user._id : ',
					reqId,
					'    /////   ',
					this.user._id,
					'    /////   ',
					typeof reqId,
					typeof this.user._id
				);
				const response = await fetch(
					// 'https://eli-back.onrender.com/api/rejectFriendReq',
					`https://${ API_BASE_URL}api/rejectFriendReq`,

					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							fromID: reqId,
							toID: this.user._id, // ID de l'utilisateur actuel
						}),
						credentials: 'include',
					}
				);

				console.log(
					'🗑️ ~ rejectFriendReq ~ reqId //////// this.user._id : ',
					reqId,
					'    /////   ',
					this.user._id,
					'    /////   ',
					typeof reqId,
					typeof this.user._id
				);

				if (response.ok) {
					const data = await response.json();

					// Mettre à jour le statut de la demande dans la liste sans rafraîchir la page
					const req = this.user.friendReqIN.find(
						(req) => req.fromID === reqId
					);
					if (req) {
						req.status = 'rejected';
					}

					console.log(
						"🗑️ ✅ 🗑️  Demande d'ami rejetée : ",
						data
					);
					this.msgRes = `🙅‍♂️ Demande d'ami rejetée.`;
				} else {
					const data = await response.json();
					this.msgRes = `🚫 Erreur innatendue : ${data.message}`;
				}
			} catch (err) {
				this.msgRes = `🚨 Problème de connexion, veuillez réessayer plus tard.`;
				console.error(
					"🗑️ Le rejet d'ami ne fonctionne pas : ",
					err
				);
			} finally {
				// this.display(this.msgRes);
				this.showNotif(this.msgRes);
			}
		},

		display(message) {
			alert(message);
		},
	},
};
</script>

<style scoped>
.angle {
	top: 35px;
	right: 80px;
}

.btn-close {
	opacity: 0.5;
	transition: all 0.3s ease;
}

.btn-close:hover {
	opacity: 1;
	transform: rotate(90deg);
	background-color: rgba(255, 0, 0, 0.1); /* Légère teinte rouge au survol */
}

.btn-close:focus {
	box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.25);
	outline: none;
}

.toast-container {
	z-index: 1000;
}

.toast-header {
	background-color: #dcdcdc !important;
	height: 50px !important;
}

.btn-close {
	width: 10px !important;
	height: 10px !important;
}
.time {
	color: #b10000;
	font-style: italic;
}
.toast {
	transition: opacity 0.3s ease-in-out;
	opacity: 0;
}
.toast.show {
	opacity: 1;
}

.friends,
.profil,
.modify {
	margin-top: 2rem;
	border: 1px solid #7171715e;
	margin: O;
	padding: 1rem;
	border-radius: 16px;
	max-height: 650px;
	overflow-y: auto;
	background-color: #eeeeee;
}

.modifyProfil {
	margin-top: 2rem;
	margin: 0 2rem;
	padding: 1rem;
	border-radius: 10px;
	max-height: 650px;
	overflow-y: auto;
	background-color: #f8f9fa;
}

.action {
	/* margin-top: 1rem; */
	margin: 0 1rem;
}

.btn.action {
	padding: 0.3rem;
	border-radius: 0.5rem;
	width: 150px;
	height: min-content;

	text-transform: uppercase;
	letter-spacing: 0.13em;
}
</style>
