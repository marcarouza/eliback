<template>
	<div id="chatPopin" class="chat-popin chat-container hide-inactive">
		<div class="chat-header">
			<span>Chat avec vos amis…</span>
			<button
				@click="displayChat"
				id="closeChatBtn"
				class="btn btn-close btn-primary float-end"
			></button>
		</div>

		<div v-if="!user" class="chat-body">
			<span class="bubServer">
				Pour utiliser la messagerie instantanée, vous devez être
				connecté(e).
			</span>
		</div>

		<div v-else id="allMess" class="chat-body">
			<!-- Messages vont ici -->
		</div>

		<div class="chat-footer">
			<form id="msg_form" class="chatInput" @submit.prevent="sendMess">
				<input
					id="messInput"
					type="text"
					class="form-control"
					placeholder="Votre message..."
				/>
				<button id="sendMsg" class="btn btn-primary send-button">
					<i class="bi bi-send"></i>
				</button>
			</form>
		</div>
	</div>

	<div @click="displayChat" id="chatToggleBtn" class="stickedTab">
		<i class="bi bi-chat-dots-fill chat_bubble"></i>
	</div>
</template>

<script>
import socket from '../socket/socketClient.js';
console.log('🚀 ~ LE SOCKET CLIENT EST  :    ', socket);

export default {
	name: 'Chat_Box',
	data() {
		return {
			user: null,
			isLoggedIn: false,
			alllMessages: '',

			// Vos données ici
		};
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
				console.log('🚀 ~ fetchUserData ~ response:', response);

				if (!response.ok) {
					throw new Error(
						'🍌 🍌 🍌 🍌 🍌 FROM ChatBox fetchUserData ==> ERR Network response was not ok'
					);
				}

				const data = await response.json();
				this.user = data.user;
				this.isLoggedIn = true;
				console.log(
					'✅ ~ FROM ChatBox fetchUserData  ==> checkUserStatus/ this.user :',
					this.user
				);
				this.serverMsg(
					`Bonjour ${this.user.user}, vous êtes connecté(e) !!!`
				); // Afficher le message de bienvenue ici
				this.setupSocketListeners();
			} catch (error) {
				console.error(
					'🍌 🍌 🍌 🍌 FROM fetchUserData ==> problème avec requête fetch :',
					error
				);
			}
		},
		addDiv(data) {
			console.log('🚀 ~ addDiv ~ data:', data);
			const allMess = document.getElementById('allMess');

			if (!allMess) {
				console.error(
					'🍌 🍌 🍌 🍌  FROM Element with ID "allMess" not found.'
				);
				return;
			}

			const myDiv = document.createElement('div');
			console.log('🚀 ~ addDiv ~ myDiv:', myDiv);

			myDiv.classList.add('bub1');

			const span = document.createElement('span');
			span.textContent = data.pseudo
				? `${data.pseudo}: ${data.text}`
				: `${data.user}: ${data.text}`;
			myDiv.appendChild(span);

			allMess.appendChild(myDiv);
		},
		serverMsg(welcome) {
			const allMess = document.getElementById('allMess');

			if (!allMess) {
				console.error('Element with ID "allMess" not found.');
				return;
			}

			const myDiv = document.createElement('div');
			console.log('🚀 ~ addDiv ~ myDiv:', myDiv);

			myDiv.classList.add('bubServer');

			const span = document.createElement('span');
			span.textContent = welcome;
			myDiv.appendChild(span);

			allMess.appendChild(myDiv);
		},
		sendMess(e) {
			const messInput = document.getElementById('messInput');

			if (!messInput) {
				console.error('Element with ID "messInput" not found.');
				return;
			}

			const messTxt = messInput.value.trim();
			console.log('🚀 ~ messTxt:', messTxt);

			if (messTxt) {
				socket.emit('message', messTxt);
				messInput.value = '';
				messInput.focus();
			}
		},
		displayChat() {
			const chatPopin = document.getElementById('chatPopin');

			if (!chatPopin) {
				console.error('Element with ID "chatPopin" not found.');
				return;
			}

			chatPopin.classList.toggle('hide-inactive');
		},

		hideChat() {
			const chatPopin = document.getElementById('chatPopin');
			chatPopin.classList.add('hide-inactive');
		},
		sendMsg() {
			document
				.getElementById('msg_form')
				.addEventListener('submit', this.sendMess);
		},
		setupSocketListeners() {
			if (this.user) {
				socket.on('connect', () => {
					const completeID = socket.id;
					if (completeID) {
						console.log('🚀 ~ completeID:', completeID);
						const shortClientID = completeID.substring(0, 5);
						console.log(
							'🚀 ~ ~ shortClientID:',
							shortClientID
						);
						socket.shortClientID = shortClientID;

						console.log(
							`FROM CLIENT => ${shortClientID} es CONNECTÉ !`
						);
						this.serverMsg(
							`Bonjour ${shortClientID}, vous êtes connecté(e) !!!`
						);
					}
				});

				socket.on('disconnect', () => {
					const completeID = socket.id;
					if (completeID) {
						const shortClientID = completeID.substring(0, 5);
						console.log(
							`FROM CLIENT => ${shortClientID} est déconnecté`
						);
					}
				});

				socket.on('message', (data) => {
					console.log(
						'STRUCTURE de MSG envoyé à tout le monde : ',
						data
					);
					this.addDiv(data);
				});

				socket.on('userLeft', (data) => {
					this.serverMsg(data);
				});

				socket.on('userConnected', (data) => {
					this.serverMsg(data);
				});
			}
		},
	},
	mounted() {
		this.fetchUserData();
	},
};
</script>

<style>
.chat_bubble {
	font-size: 2rem;
	color: #004fa4;
	font-size: 1rem;
	color: #ffffff;
	text-shadow: -3px 2px 5px rgba(0, 13, 51, 0.6);
}

.whatsapp-icon {
	font-size: 1.5rem;
	font-size: 1rem;
	color: rgb(14, 82, 9) !important;

	text-shadow: -2px 2px 5px rgba(7, 255, 32, 0.314);
}

.chat-popin {
	position: fixed;
	bottom: 10px;
	right: 40px;
	width: 350px;
	background: linear-gradient(
		210deg,
		#e2e2e2 100%,
		#c0c0c0 20%,
		#e2e2e2 100%
	);
	border: 1px solid #006aff;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	z-index: 100;
	transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.hide-inactive {
	opacity: 0;
	pointer-events: none;
	transform: translateX(120%);
	/* Assurez-vous que les transitions sont définies ici */
	transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.show-active {
	opacity: 1;
	pointer-events: auto;
	transform: translateX(0);
	/* Assurez-vous que les transitions sont définies ici */
	transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.msg-input {
	border: 5px solid #ccc;
}

.chat-container {
	display: flex;
	flex-direction: column;
	height: auto;
	max-height: 450px; /* Hauteur maximale de 350px */
	max-width: 600px;
	margin: 0 auto;
	padding: 0;
	overflow-y: auto; /* Ajoute un ascenseur vertical lorsque le contenu dépasse 350px */
}

.btn-close {
	width: 5px;
	height: 5px;
	border: 2px solid hsl(211, 100%, 32%);
	border-radius: 50%;
	background-color: #004fa4;
	color: #fff;
	transition: all 0.3s ease-in-out;
}

.btn-close:hover {
	border: 2px solid rgba(255, 255, 255, 0.503);
}

.chat-popin.show {
	opacity: 1;
	visibility: visible;
}

.chat-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.85rem;
	min-height: 40px;
	background-color: #004fa4;
	color: #fff;
	padding: 5px 10px;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	box-shadow: 0 6px 9px rgb(0 0 0);
}

.chat-body {
	display: flex;
	flex-direction: column;
	min-height: 200px;
	border-bottom: 0.5px solid #00aeff72;
	align-items: flex-start;
	padding: 0.5rem;
	overflow-y: scroll;
	background: rgb(255, 255, 255);
	background: linear-gradient(
		208deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(0, 174, 255, 0.06626400560224088) 100%
	);
}

/* Custom scrollbar styles */
.chat-body::-webkit-scrollbar {
	width: 10px; /* Largeur du scrollbar vertical */
}

.chat-body::-webkit-scrollbar-track {
	background: #ffffff; /* Couleur du fond du track */
	border-radius: 0; /* Coins arrondis du track */
}

.chat-body::-webkit-scrollbar-thumb {
	background: hsl(211, 100%, 32%);
	background: linear-gradient(
		00deg,
		hsla(216, 98%, 52%, 0.529) 0%,
		hsla(216, 98%, 30%, 0.7) 100%
	);
	border-radius: 3px; /* Coins arrondis du thumb */
	min-height: 30px;
	/* max-height: 30px; Hauteur minimale du thumb (non garanti par tous les navigateurs) */
}

.chat-body::-webkit-scrollbar-thumb:hover {
	background: hsl(211, 100%, 32%) 10%;
}

.chat-footer {
	padding: 1px;
	display: flex;
	width: 100%;
	justify-content: flex-start;
	align-items: center;
	box-shadow: 0px 22px 69px rgb(1 8 87);
}

.send-button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15%;
	border-radius: 3px 0 3px 3px !important;
}

.smooth.display.none {
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.3s ease, visibility 0.3s ease;
}

.smooth.display.show {
	opacity: 1;
	visibility: visible;
}

.hidden-button {
	opacity: 0;
	pointer-events: none;
}

.chat-button {
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 1000;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	background-color: #007bff;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.stickedTab {
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 2px 2px 2px 1px #000000c9;
	background: linear-gradient(to top, #e0e0e0 0%, #c0c0c0 26%, #808080 100%);
	border: 1px solid #0077ff;
	position: absolute;
	right: 0;
	bottom: 70px;
	z-index: 100;
	border-radius: 10px 0 0 10px;
	text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
	width: 45px;
	height: 45px;
	transition: width 0.3s ease;
}

.stickedTab:hover {
	width: 70px;
}

.form-control {
	color: rgb(38, 38, 38) !important;
	background-color: #c9c9c9;
	height: auto;
}

.pseudo {
	height: min-content;
	max-width: 600px;
	margin: 0 auto;
	padding: 0;
	overflow: hidden;
}

.pseudo button {
	background-color: #0056b3;
	border-radius: 0.5rem;
	color: #ffffff;
	padding: 0.5rem;
	margin: 0 0 0 0.5rem;
	font-size: small;
	width: max-content;
}

.pseudo .form-control {
	color: white !important;
	background-color: #2b2b2b;
	height: 1rem;
	border: none;
}

#tempo {
	font-size: 2rem;
	color: rgb(0, 123, 255);
}

.tempo {
	text-align: center;
}

.allMess {
	display: inline-flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	flex: 20;
	border-radius: var(--round1) 0 0 0;
	padding: 1rem;
	overflow-y: scroll;
	background-color: #101010;
}

.chatInput {
	display: flex;
	flex-direction: row;
	justify-content: stretch;
	width: 100%;
	padding: 0px;

	input {
		padding: 1rem;
		border-radius: 0 0 0 var(--round2);
		border: none;
		background: rgb(255, 255, 255);
		background: linear-gradient(
			208deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(0, 174, 255, 0.06626400560224088) 100%
		);
	}

	input::before,
	input::after {
		content: '';
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	input::before {
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(to right, #007bff, #00ffcc);
	}

	input::after {
		bottom: 0;
		left: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(to bottom, #007bff, #00ffcc);
	}

	input::before {
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(to right, #007bff, #00ffcc);
	}
}

.bub1 {
	width: max-content;
	background: radial-gradient(
		circle at 20% 60%,
		rgb(230, 255, 255) 0%,
		rgb(171, 255, 255) 100%
	);
	border-radius: 5px 10px 5px 10px;
	padding: 0.8rem;
	margin-bottom: 1rem;
	margin-left: 0rem;
	margin-right: 1rem;
	max-width: 60%;
	font-size: 0.9rem;
	color: #101010;
	box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
	border: 1px solid #0018314f;
}

.bub2 {
	width: max-content;
	background: radial-gradient(
		circle at 20% 60%,
		rgb(230, 255, 255) 0%,
		rgb(213, 255, 135) 100%
	);
	border-radius: 0.6rem 0 0.6rem 0;
	padding: 0.8rem;
	margin-bottom: 1rem;
	margin-left: 0rem;
	margin-right: 1rem;
	max-width: 60%;
	font-size: 0.9rem;
	color: #101010;
}

.bubServer {
	width: max-content;
	background-color: #101010;
	background: radial-gradient(
		circle at 20% 60%,
		rgb(240, 240, 240) 0%,
		rgb(180, 180, 180) 100%
	);
	border-radius: 0.6rem;
	padding: 0.8rem;
	margin-bottom: 1rem;
	margin-left: 0rem;
	margin-right: 1rem;
	max-width: 60%;
	font-size: 0.9rem;
	color: #101010;
	box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);
	border: 1px solid #0018314f;
}

/* Style pour la modale de connexion */
.modal-dialog {
	max-width: 300px;
	margin-top: 300px;
}

.modal-content {
	border-radius: 0.6rem;
}

.modal-header {
	background-color: #007bff;
	color: #ffffff;
	border-radius: 0.5rem 0.5rem 0 0;
}

.modal-body {
	background-color: #555555;
	margin-top: -0.1rem;
	border-radius: 0 0 0.5rem 0.5rem;
}

.btn-primary {
	background-color: #007bff;
	border-color: #007bff;
}

.btn-primary:hover {
	background-color: #0056b3;
	border-color: #0056b3;
}
</style>
