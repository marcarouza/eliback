<template>
	<div>
		<NavOk />

		<NavBlog />
		<SearchPost />
		<TabWhats />
	</div>
</template>

<script>
import NavOk from '@/components/NavOk.vue';
import NavBlog from '@/components/blogCompo/NavBlog.vue';
import SearchPost from '@/components/blogCompo/SearchPost.vue';

import TabWhats from '@/components/TabWhats.vue';

export default {
	name: 'SearchPostPage',
	emits: ['updatePageTitle'],
	components: {
		NavOk,
		NavBlog,
		SearchPost,
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
