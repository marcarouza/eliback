<template>
	<div id="app-container">
		<CommonHead :pageTitle="pageTitle" />
		<div id="content-container">
			<router-view @updatePageTitle="updatePageTitle" />
		</div>
		<Footer />

		<!-- Affichage conditionnel de Chat_Box basé sur la route -->
		<ChatBox :show="showChatBox" />
		<Notif />
	</div>
</template>

<script>
import CommonHead from './components/CommonHead.vue';
import Footer from './components/Footer.vue';
import ChatBox from './components/ChatBox.vue';
import Notif from './components/Notif.vue';

export default {
	name: 'App',
	components: {
		CommonHead,
		ChatBox,
		Footer,
		Notif,
	},
	data() {
		return {
			pageTitle: '▶︎ Eli Azoura | Développeur Full Stack',
			isLoggedIn: false,
			localUser: null,
			pseudo: '',
			welcomeMsg: '',
		};
	},

	mounted() {
		this.checkLocalUser();
	},

	methods: {
		clooooseNotif() {
			this.show = false;
			// this.$emit('close');
		},

		shooooowNotif() {
			var toastEl = document.getElementById('notificationToast');
			var toast = new bootstrap.Toast(toastEl);

			document
				.getElementById('showNotification')
				.addEventListener('click', function () {
					toast.show();
				});
		},
		checkLocalUser() {
			const userFromSession = sessionStorage.getItem('localUser');
			if (userFromSession) {
				this.localUser = JSON.parse(userFromSession);
				this.isLoggedIn = true;
				this.pseudo = this.localUser.user;
				this.welcomeMsg = `Bonjour ${this.pseudo}, vous êtes en ligne !`;

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
					this.welcomeMsg =
						'Pour utiliser la messagerie, vous devez être connecté(e) !';
					this.isLoggedIn = false;
					this.hideChat();
				}
			}
			this.serverMsg(this.welcomeMsg);
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
	},
	computed: {
		showChatBox() {
			return this.$route.meta.showChatBox !== false; // Affiche Chat_Box sauf si explicitement désactivé
		},
	},
};
</script>

<style scoped>
#app-container {
	display: flex;
	flex-direction: column;
	height: 100vh; /* 100% of the viewport height */
}

#content-container {
	flex-grow: 1; /* Take up remaining space */
	display: flex;
	flex-direction: column;
}

footer {
	flex-shrink: 0; /* Ensure footer does not shrink */
}
</style>
