import { reactive, watchEffect, toRefs } from 'vue';
import {API_BASE_URL} from '@/config/configDevProd.js';

  // Déclaration de l'état utilisateur avec reactive
const userStateGlobal = reactive({
	userID: null,
	userPseudo: null,
	isLoggedIn: false,
	localUserSession: null,
});

  // Vérifie l'utilisateur auprès de l'API

async function checkUser() {
	try {
		const response = await fetch(
			// 'https://eliback.onrender.com/api/checkUser',
			// 'https://eliazoura.fr/api/checkUser',
			`${API_BASE_URL}api/checkUser`,
			{
				method: 'GET',
				credentials: 'include',
			}
		);

		if (!response.ok) {
			throw new Error(
				'FROM NAVOK ==> ERR Network response was not ok'
			);
		}

		const data = await response.json();

		console.log('🚀 checkUser - data:', data);

		if (data && data.user) {
			// Mise à jour de l'état utilisateur
			userStateGlobal.userID = data.user._id;
			userStateGlobal.userPseudo = data.user.pseudo;
			userStateGlobal.isLoggedIn = true;
		}

		console.log(
			'🚀 userStateGlobal:',
			'userID:',
			userStateGlobal.userID,
			'userPseudo:',
			userStateGlobal.userPseudo
		);
	} catch (err) {
		console.error('🚀 checkUser - error:', err.message);
	}
}

async function getLocalUser() {
	try {
		const localUserData = localStorage.getItem('localUserSession');
		userStateGlobal.localUserSession = localUserData
			? JSON.parse(localUserData)
			: null;
		if (userStateGlobal.localUserSession) {
			console.log(
				'🚀 getLocalUser - localUserSession _id:',
				userStateGlobal.localUserSession._id
			);
			userStateGlobal.userID = userStateGlobal.localUserSession._id;
			// Vous pouvez aussi mettre à jour d'autres propriétés si nécessaire
		}
		console.log(
			'✅ getLocalUser - localUserSession:',
			userStateGlobal.localUserSession
		);
	} catch (error) {
		console.error(
			'Erreur sur la récupération de localUserSession :',
			error
		);
		userStateGlobal.localUserSession = null;
	}
}

async function logOUTapi(router) {
	try {
		console.log(
			'🚀 logOUTapi - userID avant déconnexion:',
			userStateGlobal.userID
		);

		const response = await fetch(
			// 'https://eliback.onrender.com/api/logOUT',
			'https://eliazoura.fr/api/logOUT',
			{
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({fromID: userStateGlobal.userID}),
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		// Réinitialisation de l’état utilisateur
		userStateGlobal.isLoggedIn = false;
		userStateGlobal.userID = null;
		userStateGlobal.userPseudo = null;
		localStorage.removeItem('localUserSession');
		sessionStorage.removeItem('localUserSession');

		console.log('🚀 Déconnexion réussie !!!');

		if (router) {
			await router.push({name: 'homepage'});
		}
	} catch (error) {
		console.error(
			'🍌 logOUTapi - Erreur lors de la déconnexion :',
			error.message
		);
	}
}

// Lancer la récupération des données utilisateur dès le démarrage
getLocalUser();
checkUser();

watchEffect(() => {
	console.log("----------------- Mise à jour de l'état utilisateur :", {
		userID: userStateGlobal.userID,
		userPseudo: userStateGlobal.userPseudo,
		isLoggedIn: userStateGlobal.isLoggedIn,
		localUserSession: userStateGlobal.localUserSession,
	});
});

export {
	userStateGlobal as userGlobalService,
	checkUser,
	getLocalUser,
	logOUTapi,
};

export const {userID, userPseudo, isLoggedIn, localUserSession} =
	toRefs(userStateGlobal);
