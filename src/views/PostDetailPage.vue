<template>
	<div>
		<NavBlog />
		<PostDetail />
		<TabWhats />
	</div>
</template>

<script>
import NavBlog from '@/components/blogCompo/NavBlog.vue';
import PostDetail from '@/components/blogCompo/PostDetail.vue';

import TabWhats from '@/components/TabWhats.vue';

export default {
	name: 'HomeBlogPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici
	components: {
		NavBlog,
		PostDetail,
		TabWhats,
	},
	data() {
		return {
			pageTitle: `Détail d'un post | Développeur Full Stack`,
		};
	},
	mounted() {
		this.$emit('updatePageTitle', this.pageTitle);
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
