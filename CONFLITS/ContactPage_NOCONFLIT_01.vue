<template>
	<div>
		<NavOk />

		<Contact />
		<TabWhats />

		<Chat_Box />
		<Footer />
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import MyNav from './components/Mynav.vue';
import NavOk from '../components/NavOk';
import Contact from '../components/Contact';

import Footer from '../components/Footer';

import Chat_Box from '../components/Chat_Box.vue';
import TabWhats from '../components/TabWhats.vue';

export default {
	name: 'ContactPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici
	// Autres options du composant
	components: {
		NavOk,
		Contact,
		Chat_Box,
		TabWhats,
		Footer,
	},

	data() {
		return {};
	},

	mounted() {
		this.$emit('updatePageTitle', `Contact | Développeur Full Stack`);
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
