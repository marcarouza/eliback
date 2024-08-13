// src/mixins/globalMixin.js

export default {
	data() {
		return {
			globalStatus: {
				isConnected: false,
				userConnected: null,
				firstName: '',
				lastName: '',
				email: '',
				pseudo: '',
			},
		};
	},
	created() {
		this.checkUserStatus();
	},
	methods: {
		async checkUserStatus() {
			console.log(
				'Fonction globale CHECKUSERSTATUS exécutée au chargement du composant'
			);

			try {
				const response = await fetch(
					'https://eli-back.onrender.com/api/checkUserStatus',
					{
						method: 'GET',
						credentials: 'include', // Assurez-vous que les cookies sont envoyés avec la requête
					}
				);

				const userConnected = await response.json();
				console.log(
					'🚀 FROM GLOBALMIX ~ checkUserStatus ~ userConnected:',
					userConnected
				);

				if (userConnected) {
					this.globalStatus.isConnected = true;
					this.globalStatus.userConnected = userConnected;
					this.globalStatus.firstName = userConnected.firstName;
					this.globalStatus.lastName = userConnected.lastName;
					this.globalStatus.email = userConnected.email;
					this.globalStatus.pseudo = userConnected.pseudo;
				} else {
					console.log(
						'JE NE SAIS QUI VOUS ETES MAIS QUI ETES VOUS '
					);
				}
			} catch (error) {
				console.error(
					"FROM GLOBAL MIXIN => ERR vérification du statut de l'utilisateur AVEC checkUserStatus()",
					error
				);
			}
		},
	},
};
