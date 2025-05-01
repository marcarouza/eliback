// sharedStore.js
import {reactive, watchEffect, toRefs} from 'vue';

const userStateGlobal = reactive({
	userID: '',
	userPseudo: '',
	isLoggedIn: false,
	localUserSession: null,
});

async function checkUserStatus() {
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
				`FROM NAVOK ==> ERR Network response was not ok: ${response.status} ${response.statusText}`
			);
		}

		const data = await response.json();

		if (!data || !data.user) {
			throw new Error('FROM NAVOK ==> ERR: No user data received');
		}

		// Mise à jour de l'état utilisateur
		userStateGlobal.userID = data.user._id;
		userStateGlobal.userPseudo = data.user.pseudo;
		userStateGlobal.isLoggedIn = true;

		console.log(
			'🚀 ~ userGlobalService.js:39 ~ checkUserStatus ~ userStateGlobal.userID & userStateGlobal.userPseudo  ==> ',
			userStateGlobal.userID,
			userStateGlobal.userPseudo
		);
	} catch (error) {
		console.log(
			'🚀 ~ userGlobalService.js:42 ~ checkUserStatus ~ error  ==> ',
			error
		);
	}
}

async function getLocalUser() {
	try {
		const localUserDataString = localStorage.getItem('localUserSession');
		userStateGlobal.localUserSession = localUserDataString
			? JSON.parse(localUserDataString)
			: null;
		if (userStateGlobal.localUserSession) {
			console.log(
				'🚀 ~ userGlobalService.js:57 ~ getLocalUser ~ localUserData  ==> ',
				userStateGlobal.localUserSession._id
			);
			userStateGlobal.userID = userStateGlobal.localUserSession._id;
			console.log('🚀 getLocalUser ~ userID:', userStateGlobal.userID);
		}
		console.log(
			'✅ FROM getLocalUser in NavOk ==> localUserSession:',
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
		userStateGlobal.userID = '';
		userStateGlobal.userPseudo = '';
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

// Lancer la récupération des données au démarrage
getLocalUser();
checkUserStatus();

// Surveille les modifications de l'état utilisateur
watchEffect(() => {
	console.log("-----------------Mise à jour de l'état utilisateur :", {
		userID: userStateGlobal.userID,
		userPseudo: userStateGlobal.userPseudo,
		isLoggedIn: userStateGlobal.isLoggedIn,
		localUserSession: userStateGlobal.localUserSession,
	});
});

// Exporter l'objet réactif et les fonctions que vous souhaitez utiliser ailleurs
export {
	userStateGlobal as userGlobalService,
	checkUserStatus,
	getLocalUser,
	logOUTapi,
};

export const {userID, userPseudo, isLoggedIn} = toRefs(userStateGlobal);
