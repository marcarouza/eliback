<template>
	<div id="app-container">
		<CommonHead :pageTitle="pageTitle" />
		<div id="content-container">
			<router-view @updatePageTitle="updatePageTitle" />
		</div>
		<Footer />
	</div>
</template>

<script>
// import NavOk from './components/NavOk.vue';

import CommonHead from './components/CommonHead.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'App',
	components: {
		CommonHead,
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

<style scoped>
#app-container {
	display: flex;
	flex-direction: column;
	height: 100vh; /* 100% of the viewport height */
}

#content-container {
	flex-grow: 1; /* Take up remaining space */
	display: flex;
	flex-direction: column;
}

footer {
	flex-shrink: 0; /* Ensure footer does not shrink */
}
</style>
