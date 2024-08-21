<template>
	<div>
		<NavOk />
		<div class="container m-5">
			<h1>API POUR LECTURE DU TOKEN from FETCH API getCookie</h1>
			<p v-if="token">JWT Token => {{ token }}</p>
			<p v-else>no token !</p>
			<p v-if="tokenData">
				TokenData from jwtDecode(this.jwt)=> {{ tokenData }}
			</p>
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
		this.viewCookie();
		getCookieByName();
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
				console.log('🚀 ~ getCookieInfo ~ data:', data);
				this.token = data.token;

				// Décoder le token pour obtenir les données
				this.tokenData = jwtDecode(data.token);
				console.log(
					'🚩 Données du token via jwtDecode:',
					this.tokenData
				);
			} catch (err) {
				console.error(
					'🚫 FROM ApiPage / getCookieInfo  NO jwt FOUND ! :',
					err
				);
				localStorage.removeItem('localUser');
			}
		},

		viewCookie() {
			console.log(
				'Cookie from via vueCookies:',
				VueCookies.get('jwt')
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
