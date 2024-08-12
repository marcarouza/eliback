<template>
	<div>
		<!-- <NavOk /> -->
		<LogUserForm />
		<TabWhats />
	</div>
</template>

<script>
import NavOk from '../components/NavOk.vue';
import LogUserForm from '../components/LogUserForm.vue';
import TabWhats from '../components/TabWhats.vue';

export default {
	name: 'LogUserPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici
	components: {
		// NavOk,
		LogUserForm,
		TabWhats,
	},
	mounted() {
		this.$emit(
			'updatePageTitle',
			'Connexion | Développeur Full Stack | Eli'
		);
	},
	data() {
		return {
			email: '',
			pwd: '',
			error: null,
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

<style scoped>
/* Ajoutez vos styles ici si nécessaire */
</style>
