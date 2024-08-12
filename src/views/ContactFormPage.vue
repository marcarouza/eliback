<template>
	<div>
		<NavOk />

		<ContactForm />
		<TabWhats />

		<Chat_Box />
	</div>
</template>

<script>
import NavOk from '../components/NavOk.vue';
import ContactForm from '../components/ContactForm.vue';


import Chat_Box from '../components/Chat_Box.vue';
import TabWhats from '../components/TabWhats.vue';

export default {
	name: 'ContactFormPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici
	// Autres options du composant
	components: {
		NavOk,
		ContactForm,
		Chat_Box,
		TabWhats,
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
