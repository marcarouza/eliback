<template>
	<div>
		<NavOk />

		<NavBlog />

		<WriteOnePost />

		<TabWhats />

		<Chat_Box />
	</div>
</template>

<script>
import NavOk from '../components/NavOk.vue';
import NavBlog from '../components/blogCompo/NavBlog.vue';
import WriteOnePost from '../components/blogCompo/WriteOnePost.vue';

import Chat_Box from '../components/Chat_Box.vue';
import TabWhats from '../components/TabWhats.vue';

export default {
	name: 'WritePostPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici
	components: {
		NavOk,
		NavBlog,
		WriteOnePost,
		TabWhats,
		Chat_Box,
	},
	mounted() {
		this.$emit(
			'updatePageTitle',
			`Publier un post | Eli | Développeur Full Stack`
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
