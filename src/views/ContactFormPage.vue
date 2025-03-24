<template>
	<div>

		<ContactForm />
		<TabWhats />
	</div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

import TabWhats from '@/components/TabWhats.vue';

export default {
	name: 'ContactFormPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici
	// Autres options du composant
	components: {
		ContactForm,
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
