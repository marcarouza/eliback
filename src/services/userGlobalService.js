// sharedStore.js
import {reactive, watchEffect, toRefs} from 'vue';

const userStateGlobal = reactive({
	user: null,
	userID: null,
	userPseudo: null,
	isLoggedIn: false,
	localUserSession: null,
});

async function fetchUserData() {
	try {
		const response = await fetch(
			'https://eli-back.onrender.com/api/checkUserStatus',
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

		// Mise à jour de l'état utilisateur
		userStateGlobal.user = data.user;
		userStateGlobal.userID = data.user._id;
		userStateGlobal.userPseudo = data.user.user;
		userStateGlobal.isLoggedIn = true;

		console.log('🚀 userStateGlobal ~ userID:', userStateGlobal.userID);
		console.log('🚀 userStateGlobal ~ user:', userStateGlobal.user);
		console.log(
			'🚀 userStateGlobal ~ userPseudo:',
			userStateGlobal.userPseudo
		);
	} catch (error) {
		console.error('FROM NAVOK ==> problème avec requête fetch :', error);
	}
}

async function checkLocaluser() {
	try {
		const localUserData = localStorage.getItem('localUserSession');
		userStateGlobal.localUserSession = localUserData
			? JSON.parse(localUserData)
			: null;
		if (userStateGlobal.localUserSession) {
			userStateGlobal.userID = userStateGlobal.localUserSession._id;
			console.log(
				'🚀 checkLocaluser ~ userID:',
				userStateGlobal.userID
			);
		}
		console.log(
			'✅ FROM checkLocaluser in NavOk ==> localUserSession:',
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
			'User ID before sending to logOutApi:',
			userStateGlobal.userID
		);

		const response = await fetch(
			'https://eli-back.onrender.com/api/logOut',
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

		// Réinitialiser l'état utilisateur
		userStateGlobal.isLoggedIn = false;
		userStateGlobal.user = null;
		userStateGlobal.userID = null;
		localStorage.removeItem('localUserSession');
		sessionStorage.removeItem('localUserSession');

		console.log('🚀 Déconnexion réussie !!!');

		if (router) {
			await router.push({name: 'homepage'});
		}
	} catch (error) {
		console.error('🍌 Erreur lors de la déconnexion :', error.message);
	}
}

// Lancer la récupération des données
fetchUserData();
checkLocaluser();

watchEffect(() => {
	console.log("-----------------Mise à jour de l'état utilisateur :", {
		user: userStateGlobal.user,
		userID: userStateGlobal.userID,
		userPseudo: userStateGlobal.userPseudo,
		isLoggedIn: userStateGlobal.isLoggedIn,
		localUserSession: userStateGlobal.localUserSession,
	});
});



// Exporter l'objet réactif et les fonctions que vous souhaitez utiliser ailleurs
export {
	userStateGlobal as userGlobalService,
	fetchUserData,
	checkLocaluser,
	logOUTapi,
};

export const {user, userID, userPseudo, isLoggedIn} =
	toRefs(userStateGlobal);

