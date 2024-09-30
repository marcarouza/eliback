<script>
import socket from '../socket/socketClient.js';
console.log('✅ 🐱  FROM ChatBox ===> SOCKET CLIENT : ', socket);

export default {
	data() {
		return {
			username: 'UserXYZ',
			roomId: 'general',
		};
	},
	mounted() {
		this.setupSocketListeners();
	},
	methods: {
		setupSocketListeners() {
			socket.on('connect', () => {
				console.log('Connecté au serveur');

				// 1. Réinitialisation de l'état de connexion
				this.resetConnectionState();

				// 2. Envoi des informations d'identification
				this.sendAuthInfo();

				// 3. Rejoindre des salles spécifiques
				this.joinRooms();

				// 4. Demande de synchronisation des données
				this.requestDataSync();

				// 5. Réactivation des fonctionnalités dépendantes de la connexion
				this.enableConnectionDependentFeatures();
			});

			// Autres écouteurs d'événements...
		},

		resetConnectionState() {
			// Réinitialiser les variables d'état liées à la connexion
			this.isReconnecting = false;
			this.connectionAttempts = 0;
		},

		sendAuthInfo() {
			socket.emit('authenticate', {
				username: this.username,
				token: this.authToken,
			});
		},

		joinRooms() {
			socket.emit('joinRoom', this.roomId);
		},

		requestDataSync() {
			socket.emit('syncData', {lastSyncTimestamp: this.lastSyncTime});
		},

		enableConnectionDependentFeatures() {
			// Activer les boutons d'envoi de message, par exemple
			this.isChatEnabled = true;
		},

		// Autres méthodes...
	},
};
</script>
