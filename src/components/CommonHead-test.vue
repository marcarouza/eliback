<template>
	<Head>
		<title>{{ pageTitle }}</title>
		<meta
			name="description"
			content="Description commune à toutes les pages"
		/>
		<!-- Ajoutez d'autres balises méta communes ici -->
	</Head>
</template>

<script>
import {Head} from '@vueuse/head';

export default {
	name: 'CommonHead',
	props: {
		pageTitle: {
			type: String,
			required: true,
		},
	},

	components: {
		Head,
	},
};
</script>

<style scoped>
/* Styles spécifiques si nécessaire */
</style>
