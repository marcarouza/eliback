<template>
	<div>
		<div
			class="d-flex flex-column align-items-center justify-content-center vh-100"
		>
			<ConfirmContact />
			<TabWhats />
		</div>
	</div>
</template>

<script>
import ConfirmContact from '@/components/ConfirmContact.vue';
import TabWhats from '@/components/TabWhats.vue';

export default {
	name: 'ConfirmContactPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici
	components: {
		ConfirmContact,
		TabWhats,
	},
	mounted() {
		this.$emit(
			'updatePageTitle',
			`Message envoyé | Eli | Développeur Full Stack`
		);
	},
};
</script>

<style scoped>
.vh-100 {
	height: 100vh;
}
</style>
