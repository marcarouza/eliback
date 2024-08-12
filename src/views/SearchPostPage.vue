<template>
	<div>
		<NavOk />

		<NavBlog />
		<SearchPost />
		<!-- <Footer /> -->
		<TabWhats />

		<Chat_Box />
	</div>
</template>

<script>
import NavOk from '../components/NavOk.vue';
import NavBlog from '../components/blogCompo/NavBlog.vue';
import SearchPost from '../components/blogCompo/SearchPost.vue';

import Chat_Box from '../components/Chat_Box.vue';
import TabWhats from '../components/TabWhats.vue';
// import Footer from '../components/Footer.vue';

export default {
	name: 'SearchPostPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici

	mounted() {
		this.$emit(
			'updatePageTitle',
			`Rechercher un POST  | Eli | Développeur Full Stack`
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
		SearchPost,
		Footer,
		TabWhats,
		Chat_Box,
	},
};
</script>

<style></style>
