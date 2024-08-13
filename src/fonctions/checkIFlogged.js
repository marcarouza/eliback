import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode'; // Utilisez jwt-decode pour décoder le JWT

export default {
	data() {
		return {
			id: '',
			email: '',
			password: '',
			pseudo: '',
		};
	},
	created() {
		this.checkUserFromCookie();
	},
	methods: {
		checkUserFromCookie() {
			const token = Cookies.get('jwt'); // Lire le cookie JWT
			console.log('🚀 ~ checkUserFromCookie ~ TOKEN :', token);
			if (token) {
				const decoded = jwtDecode(token); // Décoder le JWT
				this.id = decoded.id;
				this.email = decoded.email;
				this.pseudo = decoded.user; // Récupérer l'email de l'utilisateur du JWT décodé
				console.log('User email from JWT:', this.userEmail);
			}
		},

		async fetchUser({commit}) {
			try {
				const response = await fetch(
					'https://eli-back.onrender.com/api/checkUserStatus',
					{
						method: 'GET',
						credentials: 'include', // Important pour envoyer les cookies
					}
				);
				const data = await response.json();
				commit('SET_USER', data.user || null);
			} catch (error) {
				commit('SET_USER', null);
				console.error('Error fetching user:', error);
			}
		},
	},
};
