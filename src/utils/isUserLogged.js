export async function fetchUserData(context) {
	try {
		const response = await fetch(
			'https://eli-back.onrender.com/checkUserStatus',
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
