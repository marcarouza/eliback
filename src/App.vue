<template>
	<CommonHead :pageTitle="pageTitle" />
	<router-view @updatePageTitle="updatePageTitle" />
	<Footer />
</template>

<script>
// import NavOk from './components/NavOk.vue';

import CommonHead from './components/CommonHead.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'App',
	components: {
		CommonHead,
		// NavOk,
		Footer,
	},
	data() {
		return {
			// Vos données ici
			pageTitle: '▶︎ Eli Azoura | Développeur Full Stack',
		};
	},
	methods: {
		// Vos méthodes ici
		updatePageTitle(newTitle) {
			this.pageTitle = newTitle;
		},
	},
	computed: {
		// Vos propriétés calculées ici
	},
	watch: {
		// Vos observateurs ici
	},
};
</script>

<style></style>
