<template>
	<div>
		<!-- <NavOk /> -->
		<Hero />
		<Apropos />
		<TabWhats />

		<Chat_Box />
	</div>
</template>

<script>
// import NavOk from '../components/NavOk';
import Hero from '../components/Hero.vue';
import Apropos from '../components/Apropos.vue';
import Chat_Box from '../components/Chat_Box.vue';
import TabWhats from '../components/TabWhats.vue';

export default {
	name: 'HomePage',
	emits: ['updatePageTitle'],
	components: {
		// NavOk,
		Hero,
		Apropos,
		TabWhats,
		Chat_Box,
	},
	mounted() {
		this.$emit('updatePageTitle', `Eli Azoura | Développeur Full Stack`);
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
