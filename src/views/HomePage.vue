<template>
	<div>
		<Hero />
		<TabWhats />
	</div>
</template>

<script>

import Hero from '@/components/Hero.vue';
import TabWhats from '@/components/TabWhats.vue';

export default {
	name: 'HomePage',
	emits: ['updatePageTitle'],
	components: {

		Hero,
		TabWhats,
	},
	mounted() {
		this.$emit('updatePageTitle', `Eli Azoura | Développeur Full Stack`);
		// this.hideChat();
	},

	data() {
		return {
			// Vos données ici
		};
	},
	methods: {
		displayChat() {
			const chatPopin = document.getElementById('chatPopin');

			if (!chatPopin) {
				console.error('Element with ID "chatPopin" not found.');
				return;
			}

			chatPopin.classList.toggle('hide-inactive');
		},

		hideChat() {
			const chatPopin = document.getElementById('chatPopin');
			chatPopin.classList.add('hide-inactive');
		},
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
