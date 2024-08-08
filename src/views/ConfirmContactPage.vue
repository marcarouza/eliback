<template>
	<div>
		<NavOk />
		<div
			class="d-flex flex-column align-items-center justify-content-center vh-100"
		>
			<ConfirmContact />
			<TabWhats />
			<Chat_Box />
			<Footer />
		</div>
	</div>
</template>

<script>
import NavOk from '../components/NavOk.vue';
import ConfirmContact from '../components/ConfirmContactNO.vue';
import Footer from '../components/Footer.vue';
import Chat_Box from '../components/Chat_Box.vue';
import TabWhats from '../components/TabWhats.vue';

export default {
	name: 'NotFoundPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici

	mounted() {
		this.$emit(
			'updatePageTitle',
			`Message envoyé | Eli | Développeur Full Stack`
		);
	},
	components: {
		NavOk,
		ConfirmContact,
		Footer,
		Chat_Box,
		TabWhats,
	},
};
</script>

<style scoped>
.vh-100 {
	height: 100vh;
}
</style>
