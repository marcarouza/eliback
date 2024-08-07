<template>
	<div></div>
</template>

<script>
import {useHead} from '@vueuse/head';

export default {
	name: 'CommonHead',
	props: {
		pageTitle: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		useHead({
			title: props.pageTitle,
			meta: [
				{charset: 'utf-8'},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
				},
				{
					name: 'description',
					content: 'Description commune à toutes les pages',
				},
				{name: 'author', content: 'Eli - Développeur Web'},
			],
			link: [
				{rel: 'icon', type: 'image/x-icon', href: 'elilogo'},
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: 'favicon-apple-touch',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					href: 'favicon32',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '16x16',
					href: 'favicon/favicon-16x16.png',
				},
				{rel: 'preconnect', href: 'https://fonts.googleapis.com'},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: '',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
				},

				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Jersey+10+Charted&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swaphttps://fonts.googleapis.com/css2?family=Jersey+10+Charted&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&display=swap',
				},
			],
			script: [
				{
					src: 'https://cdn.jsdelivr.net/npm/flatpickr',
					type: 'text/javascript',
				},
			],
		});

		return {};
	},
};
</script>

<style scoped>
/* Styles spécifiques si nécessaire */
</style>
