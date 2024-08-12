<template>
	<div>
		<NavOk />
		<div
			class="d-flex flex-column align-items-center justify-content-center vh-100"
		>
			<ConfirmContact />
			<TabWhats />
			<Chat_Box />
		</div>
	</div>
</template>

<script>
import NavOk from '../components/NavOk.vue';
import ConfirmContact from '../components/ConfirmContact.vue';
import Chat_Box from '../components/Chat_Box.vue';
import TabWhats from '../components/TabWhats.vue';

export default {
	name: 'ConfirmContactPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici
	components: {
		NavOk,
		ConfirmContact,
		Chat_Box,
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
