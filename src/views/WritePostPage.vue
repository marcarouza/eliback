<template>

		<NavBlog />

		<WriteOnePost />

		<TabWhats />
</template>

<script>
import NavBlog from '@/components/blogCompo/NavBlog.vue';
import WriteOnePost from '@/components/blogCompo/WriteOnePost.vue';

import TabWhats from '@/components/TabWhats.vue';

export default {
	name: 'WritePostPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici
	components: {
		NavBlog,
		WriteOnePost,
		TabWhats,
	},
	data() {
		return {
			pageTitle: 'USER STATUS  | Développeur Full Stack',
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
