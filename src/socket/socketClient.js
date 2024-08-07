import {io} from 'socket.io-client';

// Remplacez par l'URL de votre serveur back-end
const socket = io('https://socket-simple.onrender.com', {
	withCredentials: true, // Pour envoyer les cookies de session
	extraHeaders: {},
});

console.log('FROM VUE <= socketClient.js => socket', socket); // Vérification de l'initialisation

export default socket;
