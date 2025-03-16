import {io} from 'socket.io-client';

// Remplacez par l'URL de votre serveur back-end
const socket = io('https://socket-simple.onrender.com', {
	reconnection: true,
	reconnectionAttempts: Infinity,
	reconnectionDelay: 1000,
	reconnectionDelayMax: 5000,
	randomizationFactor: 0.5,
	withCredentials: true, // Pour envoyer les cookies de session
	extraHeaders: {},
});

console.log('INIT SOCKET FROM VUE <= socketClient.js => socket', socket); // Vérification de l'initialisation

export default socket;
