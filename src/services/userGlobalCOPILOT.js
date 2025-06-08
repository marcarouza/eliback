// useUser.js
import {reactive, watchEffect, toRefs} from 'vue';

// Déclaration de l'état utilisateur en dehors de la fonction
const state = reactive({
	userID: null,
	userPseudo: null,
	isLoggedIn: false,
	localUserSession: null,
});

export function useUser() {
	// Fonctions manipulant cet état
	const checkUser = async () => {
		try {
			const response = await fetch(
				'https://eliazoura.fr/api/checkUser',
				{
					method: 'GET',
					credentials: 'include',
				}
			);

			if (!response.ok) {
				throw new Error('La réponse réseau n’est pas correcte');
			}

			const data = await response.json();
			console.log('🚀 checkUser - data:', data);

			if (data && data.user) {
				state.userID = data.user._id;
				state.userPseudo = data.user.pseudo;
				state.isLoggedIn = true;
			}
		} catch (error) {
			console.error('🚀 checkUser - error:', error.message);
		}
	};

	const getLocalUser = async () => {
		try {
			const localUserData = localStorage.getItem('localUserSession');
			state.localUserSession = localUserData
				? JSON.parse(localUserData)
				: null;
			if (state.localUserSession) {
				console.log(
					'🚀 getLocalUser - localUserSession _id:',
					state.localUserSession._id
				);
				state.userID = state.localUserSession._id;
			}
			console.log(
				'✅ getLocalUser - localUserSession:',
				state.localUserSession
			);
		} catch (error) {
			console.error(
				'Erreur lors de la récupération de la session locale :',
				error
			);
			state.localUserSession = null;
		}
	};

	const logOut = async (router) => {
		try {
			console.log(
				'🚀 logOut - userID avant déconnexion:',
				state.userID
			);

			const response = await fetch('https://eliazoura.fr/api/logOUT', {
				method: 'POST',
				credentials: 'include',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({fromID: state.userID}),
			});

			if (!response.ok) {
				throw new Error(`Erreur HTTP! statut: ${response.status}`);
			}

			// Réinitialisation de l'état utilisateur
			state.isLoggedIn = false;
			state.userID = null;
			state.userPseudo = null;
			localStorage.removeItem('localUserSession');
			sessionStorage.removeItem('localUserSession');

			console.log('🚀 Déconnexion réussie !!!');

			if (router) {
				await router.push({name: 'homepage'});
			}
		} catch (error) {
			console.error(
				'🍌 logOut - Erreur lors de la déconnexion :',
				error.message
			);
		}
	};

	// Initialisation : on récupère d'abord la session locale puis l'état de l'utilisateur
	getLocalUser().then(checkUser);

	// Observer les changements d'état pour le debug (ou pour d'autres actions)
	watchEffect(() => {
		console.log('----------------- Mise à jour de l’état utilisateur :', {
			userID: state.userID,
			userPseudo: state.userPseudo,
			isLoggedIn: state.isLoggedIn,
			localUserSession: state.localUserSession,
		});
	});

	return {
		...toRefs(state),
		checkUser,
		getLocalUser,
		logOut,
	};
}
