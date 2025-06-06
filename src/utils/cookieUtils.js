// cookieUtils.js
export function getCookie(name) {
	let cookieArr = document.cookie.split(';');
	for (let i = 0; i < cookieArr.length; i++) {
		let cookiePair = cookieArr[i].split('=');
		if (name === cookiePair[0].trim()) {
			return decodeURIComponent(cookiePair[1]);
		}
	}
	return null;
}

export async function fetchUserData(context) {
	try {
		const response = await fetch(
			// 'https://eli-back.onrender.com/checkUserStatus',
			// 'https://eliback.onrender.com/checkUser',
			'https://eliazoura.fr/api/checkUser',
			{
				method: 'GET',
				credentials: 'include', // Pour envoyer les cookies avec la requête
			}
		);

		if (!response.ok) {
			throw new Error(
				'FROM USER STATUS ERR Network response was not ok'
			);
		}

		const data = await response.json();
		context.user = data.user;
		console.log('🚀 ~ checkUserStatus ~ context.user:', context.user);
	} catch (error) {
		console.error(
			'FROM USER STATUS problème avec requête fetch :',
			error
		);
	}
}
