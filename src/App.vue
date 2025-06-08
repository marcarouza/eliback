<template>
	<div id="app-container" class="app-container">
		<CommonHeadNew :pageTitle="pageTitle" />
		<NavOkService > </NavOkService>

		<Notif />
		<!-- <ChatBox2025 :key="chatBoxKey" /> -->
		<RouterView  class=""/>


	</div>
	<Footer />

</template>

<script>

import CommonHeadNew from './components/CommonHeadNew.vue';
import NavOkService from './components/NavOkService.vue';


import Footer from './components/Footer.vue';
// import ChatBox from './components/ChatBox.vue';
// import ChatBox2025 from './components/ChatBox2025.vue';
import Notif from './components/Notif.vue';
import { RouterView } from 'vue-router';

export default {
	name: 'App',
	components: {
		NavOkService,
		CommonHeadNew,
		// ChatBox,
		// ChatBox2025,
		Footer,
		Notif,
	},
	data() {
		return {
			pageTitle: '▶︎ Eli Azoura | Développeur Full Stack',
			// isLoggedIn: false,
			chatBoxKey: 0,
			localUserSession: null,
			pseudo: '',
			welcomeMsg: '',
		};
	},

	methods: {
		checkLocalUserSession() {
			if (sessionStorage.getItem('localUserSession')) {
				const userData = JSON.parse(
					sessionStorage.getItem('localUserSession')
				);
				this.localUserSession = userData;
				this.pseudo = userData.user;
				this.welcomeMsg = `Bonjour ${this.pseudo}, vous êtes en ligne !`;
				this.isLoggedIn = true;
				// this.chatBoxKey += 1;
				console.log(
					'🚀 ~ checkLocalUserSession() ~ this.chatBoxKey:',
					this.chatBoxKey
				);
				// this.setupSocketListeners();
				this.displayChat();
			} else {
				this.welcomeMsg =
					'Pour utiliser la messagerie, vous devez être connecté(e) !';
				this.isLoggedIn = false;
				this.hideChat();
			}

			this.serverMsg(this.welcomeMsg);
		},
		refreshChatBox() {
			this.chatBoxKey += 1; // Incrémente la clé pour forcer le rechargement
		},
		updatePageTitle(newTitle) {
			this.pageTitle = newTitle;
		},
		displayChat() {
			const chatPopin = document.getElementById('chatPopin');
			if (!chatPopin) {
				console.error('Element with ID "chatPopin" not found.');
				return;
			}
			chatPopin.classList.remove('hide-inactive');
		},
		hideChat() {
			const chatPopin = document.getElementById('chatPopin');
			if (chatPopin) {
				chatPopin.classList.add('hide-inactive');
			}
		},
		serverMsg(message) {
			// Implémentez cette méthode si elle n'existe pas déjà
			// console.log('Server message:', message);
		},
		setupSocketListeners() {
			// Implémentez cette méthode si elle n'existe pas déjà
			// console.log('Setting up socket listeners');
		},
	},

	onMounted() {
		// this.checkLocalUserSession();
		this.updatePageTitle(this.pageTitle);
		console.log('🐱-🐱-🐱 this.chatBoxKey:', this.chatBoxKey);
		initMDB({ Dropdown });
		
	},
};
</script>

<style scoped>

html, body {
      height: 100%;
      margin: 0;
    }
    
    /* Conteneur principal en Flexbox */
    .container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    /* Le contenu principal qui se développe pour remplir l'espace disponible */
    .main-content {
      flex: 1;
    }
    

.sounav {

	margin-top: 5rem	;
	/* Ensure it stays on top */
}
#app-container {
	display: flex;
	flex-direction: column;
	min-height: 90vh;

	/* 100% of the viewport height */
}

#content-container {
	flex-grow: 1;
	/* Take up remaining space */
	display: flex;
	flex-direction: column;
}

footer {
	flex-shrink: 0;
	/* Ensure footer does not shrink */
}
</style>
