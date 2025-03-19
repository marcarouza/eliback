<template>
	<div>
		<!-- <NavNew /> -->

		<div class="container m-5">
			<h1>Bienvenue</h1>
			<p v-if="jwt">Votre JWT : {{ jwt }}</p>
			<p v-else>Cookie 'jwt' non trouvé</p>
		</div>
	</div>
</template>

<script>
import VueCookies from 'vue-cookies';
import NavNew from '@/components/NavNew.vue';

export default {
	name: 'CookiesPage',
	components: {
		NavNew,
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
