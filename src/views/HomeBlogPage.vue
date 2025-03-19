<template>
	<div>
		<!-- <NavOk /> -->
		<NavBlog />
		<BlogCore />
		<TabWhats />
	</div>
</template>

<script>
// import NavOk from '@/components/NavOk.vue';
import NavBlog from '@/components/blogCompo/NavBlog.vue';
import BlogCore from '@/components/blogCompo/BlogCore.vue';

import TabWhats from '@/components/TabWhats.vue';

export default {
	name: 'HomeBlogPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici
	components: {
		// NavOk,
		NavBlog,
		BlogCore,
		TabWhats,
	},
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
};
</script>

<style></style>
