<template>
	<div>
		<LogUserForm />
		<TabWhats />
	</div>
</template>

<script>
// import NavOk from '@/components/NavOk.vue';
import LogUserForm from '@/components/LogUserForm.vue';
import TabWhats from '@/components/TabWhats.vue';

export default {
	name: 'LogUserPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici
	components: {
		LogUserForm,
		TabWhats,
	},
	mounted() {
		this.$emit(
			'updatePageTitle',
			'Connexion | Développeur Full Stack | Eli'
		);
	}
};
</script>

<style scoped>
/* Ajoutez vos styles ici si nécessaire */
</style>
