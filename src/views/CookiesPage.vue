<template>
	<NavOk />

	<div class="container m-5">
		<h1>Bienvenue</h1>
		<p v-if="jwt">Votre JWT : {{ jwt }}</p>
		<p v-else>Cookie 'jwt' non trouvé</p>
	</div>
</template>

<script>
import VueCookies from 'vue-cookies';
// import {getCookie} from '../utils//cookieUtils.js';
import NavOk from '../components/NavOk.vue';

export default {
	name: 'CookiesPage',
	components: {
		NavOk,
	},
	data() {
		return {
			jwt: null,
		};
	},
	mounted() {
		this.getCookieInfo();
	},
	methods: {
		getCookieInfo() {
			this.jwt = VueCookies.get('jwt');
			if (this.jwt) {
				console.log('JWT:', this.jwt);
			} else {
				console.log('Cookie "jwt" non trouvé');
			}
		},
	},
};
</script>
