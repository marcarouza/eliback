<template>
	<div>
		<NavOk />
		<NavBlog />
		<PostDetail />
		<TabWhats />

		<!-- <Chat_Box /> -->
	</div>
</template>

<script>
import NavOk from '../components/NavOk.vue';
import NavBlog from '../components/blogCompo/NavBlog.vue';
import PostDetail from '../components/blogCompo/PostDetail';

// import Chat_Box from '../components/Chat_Box.vue';
import TabWhats from '../components/TabWhats.vue';

export default {
	name: 'HomeBlogPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici
	components: {
		NavOk,
		NavBlog,
		PostDetail,
		TabWhats,
		// Chat_Box,
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
