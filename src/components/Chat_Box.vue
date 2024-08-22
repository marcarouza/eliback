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

		<div ref="allMess" id="allMess" class="chat-body">
			<!-- Messages vont ici -->
			<div v-if="!isLoggedIn">
				Pour utiliser la messagerie instantanée, vous devez être
				connecté(e).
			</div>
		</div>

		<div class="chat-footer">
			<form id="msg_form" class="chatInput" @submit.prevent="sendMess">
				<input
					ref="messInput"
					v-model="msgBody.msgToSend"
					:disabled="!sLoggedIn"
					id="messInput"
					type="text"
					class="form-control"
					placeholder="Votre message..."
				/>
				<button
					:disabled="isLoggedIn"
					id="sendMsg"
					class="btn btn-primary send-button"
				>
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
console.log('✅ 🐱  FROM ChatBox ===> SOCKET CLIENT : ', socket);

export default {
	name: 'Chat_Box',
	data() {
		return {
			isLoggedIn: false,
			localUser: null,
			welcomeMsg:
				'Pour utiliser la messagerie, vous devez être connecté(e) !',

			msgBody: {
				socketID: null,
				pseudo: null,
				msgToSend: null,
				time: null,
			},
			oneBubble: null, // Remplacer le point-virgule par une virgule
		};
	},

	mounted() {
		this.getLocalUser();
		this.msgBody.pseudo = this.pseudo;

		this.setupSocketListeners(this.pseudo);
	},

	watch: {
		localUser(newValue) {
			this.isLoggedIn = !!newValue;
			if (this.isLoggedIn) {
				this.pseudo = this.localUser.user;
				this.welcomeMsg = `Bonjour ${this.pseudo}, vous êtes en ligne !`;
			} else {
				this.welcomeMsg =
					'Pour utiliser la messagerie, vous devez être connecté(e) !';
				this.pseudo = '';
			}
			this.serverMsg(this.welcomeMsg);
			this.displayChat();
		},
	},

	methods: {
		getLocalUser() {
			const userFromSession = sessionStorage.getItem('localUser');
			if (userFromSession) {
				this.localUser = JSON.parse(userFromSession);
				this.isLoggedIn = true;
				this.pseudo = this.localUser.user;
				this.welcomeMsg = `👉  Bonjour ${this.pseudo}, vous êtes en ligne !`;

				this.setupSocketListeners();

				this.displayChat();
			} else {
				const userFromStorage = localStorage.getItem('localUser');
				if (userFromStorage) {
					this.localUser = JSON.parse(userFromStorage);
					this.isLoggedIn = true;
					this.pseudo = this.localUser.user;
					this.welcomeMsg = `Bonjour ${this.pseudo}, vous êtes en ligne !`;

					this.setupSocketListeners();
					this.displayChat();
				} else {
					this.hideChat();

					this.welcomeMsg =
						'Pour utiliser la messagerie, vous devez être connecté(e) !';
					this.isLoggedIn = false;
					this.localUser = null;
					this.pseudo = null;
				}
			}
			this.frontMsg(this.welcomeMsg);
		},

		createBubble(oneClass) {
			const bubble = document.createElement('div');
			bubble.classList.add(oneClass);

			const p = document.createElement('p');
			p.textContent = this.msgBody.msgToSend; // Ajouter le texte du message
			bubble.appendChild(p);

			this.oneBubble = bubble;
		},

		sendSocketMsg() {
			this.$refs.allMess.appendChild(this.oneBubble); // Utilisation correcte de this.$refs

			this.msgBody.time = this.getCurrentTimestamp();
			socket.emit('message', this.msgBody);
			this.$refs.messInput.value = '';
			this.$refs.messInput.focus();
		},

		displayServerMsg() {
			// Implémentation de la méthode si nécessaire
		},

		setupSocketListeners() {
			socket.on('connect', () => {
				this.msgBody.socketID = socket.id;
			});

			socket.on('disconnect', () => {
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
				this.sendMess(data);
			});

			socket.on('userLeft', (data) => {
				this.serverMsg(data);
			});

			socket.on('userConnected', (data) => {
				this.serverMsg(data);
			});
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

		getCurrentTimestamp() {
			const now = new Date();
			const options = {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
			};
			return now.toLocaleDateString('fr-FR', options);
		},
	},
};
</script>
