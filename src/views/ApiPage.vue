<template>
	<div>
		<NavOk />
		<div class="container m-5">
			<h1>API POUR LECTURE DU TOKEN from FETCH API getCookie</h1>

			<table class="table table-striped table-bordered">
				<thead>
					<tr>
						<th>Clé</th>
						<th>Valeur</th>
					</tr>
				</thead>
				<tbody>
					<tr v-if="token">
						<td>JWT Token</td>
						<td>{{ token }}</td>
					</tr>
					<tr v-else>
						<td colspan="2">No token!</td>
					</tr>
					<tr v-if="tokenData">
						<td>Token Data (Decoded)</td>
						<td>{{ tokenData }}</td>
					</tr>
					<tr v-if="cookies">
						<td>Cookies</td>
						<td>{{ cookies }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import VueCookies from 'vue-cookies';

import {jwtDecode} from 'jwt-decode';

import NavOk from '../components/NavOk';

export default {
	name: 'ApiPage',
	components: {
		NavOk,
	},
	data() {
		return {
			token: null,
			tokenData: null,
			jwt: null,
			cookies: null,
		};
	},
	mounted() {
		this.getCookieInfo();
		this.checkJwtCookie();
		this.getCookieByName();
	},
	methods: {
		checkJwtCookie() {
			this.jwt = VueCookies.get('jwt');
			if (this.jwt) {
				console.log('JWT via VueCookies :', this.jwt);
				// Décoder le JWT et stocker les données
				this.tokenData = jwtDecode(this.jwt);
			} else {
				console.log('Cookie "jwt" non trouvé');
			}
		},

		checkUserLogged() {
			const token = Cookies.get('jwt');
			if (token) {
				try {
					const decoded = jwtDecode(token);
					console.log('Token décodé:', decoded);
					this.oneUser = {
						id: decoded.id,
						email: decoded.email,
						pseudo: decoded.user,
					};
				} catch (error) {
					console.error(
						'Erreur lors du décodage du token JWT:',
						error
					);
				}
			} else {
				console.log('Aucun token JWT trouvé');
			}
		},

		async getCookieInfo() {
			try {
				const response = await fetch(
					'https://eli-back.onrender.com/getCookie',
					{
						method: 'GET',
						credentials: 'include', // Inclure les cookies dans la requête
					}
				);

				if (!response.ok) {
					throw new Error(
						'🚫 FROM ApiPageView : Network response was not ok'
					);
				}

				const data = await response.json();
				console.log('🚀 ~ getCookieInfo ~ dataTOKEN is :', data);
				this.token = data.token;

				// Décoder le token pour obtenir les données
				this.tokenData = jwtDecode(data.token);
				console.log(
					'🚩 Données du token via jwtDecode:',
					this.tokenData
				);

				this.vueCookie();
			} catch (err) {
				console.error(
					'🚫 FROM ApiPage / getCookieInfo  NO jwt FOUND ! :',
					err
				);
			}
		},

		vueCookie() {
			const vueJWTCookie = VueCookies.get('jwt');
			console.log(
				'✅ 🤷🏽‍♂️ FROM vueCookie / LogUserFORM C:',
				vueJWTCookie
			);
		},
		getCookieByName(name) {
			const cookies = document.cookie.split(';');
			for (let cookie of cookies) {
				if (cookie.trim().startsWith(name + '=')) {
					return cookie.trim();
				}
			}
			return null;
		},
	},
};
</script>

<style scoped>
table {
	max-width: 980px;

	td {
		word-wrap: break-word; /* Permet de passer à la ligne pour les mots longs */
		overflow-wrap: break-word; /* Le remplaçant moderne de word-wrap */
	}

	table-layout: fixed;
	/* border-collapse: collapse; */
}
</style>
