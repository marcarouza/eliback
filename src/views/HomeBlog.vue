<template>
	<div>
		<NavOk />
		<NavBlog />
		<BlogCore />
		<Footer />
		<TabWhats />

		<Chat_Box />
	</div>
</template>

<script>
import NavOk from '../components/NavOk.vue';
import NavBlog from '../components/blogCompo/NavBlog.vue';
import BlogCore from '../components/blogCompo/BlogCore.vue';

import Chat_Box from '../components/Chat_Box.vue';
import TabWhats from '../components/TabWhats.vue';
import Footer from '../components/Footer.vue';

export default {
	name: 'HomeBlog',
	emits: ['updatePageTitle'], // Déclarez l'événement ici
	// Autres options du composant
	mounted() {
		this.$emit(
			'updatePageTitle',
			`ACCUEIL - Blog d'Eli | Développeur Full Stack`
		);
	},

	data() {
		return {
			// Vos données ici
		};
	},
	methods: {
		// Vos méthodes ici
	},
	computed: {
		// Vos propriétés calculées ici
	},
	watch: {
		// Vos observateurs ici
	},
	components: {
		NavOk,
		NavBlog,
		BlogCore,
		TabWhats,
		Chat_Box,
		Footer,
	},
};
</script>

<style></style>
