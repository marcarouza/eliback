<!-- src/components/ConfirmationPage.vue -->
<template>
	<div>
		<NavOk />

<ConfirmSignUp>
		<TabWhats />

		<Chat_Box />
		<Footer />
	</div>
</template>

<script>
import ConfirmSignUp from './ConfirmSignUp.vue';
import NavOk from '../components/NavOk';

import Footer from '../components/Footer.vue';

import Chat_Box from '../components/Chat_Box.vue';
import TabWhats from '../components/TabWhats.vue';

export default {
	name: 'ConfirmSignUpPage',
	emits: ['updatePageTitle'],
		components: {
		NavOk,
ConfirmSignUp,
		Chat_Box,
		TabWhats,
		Footer,
	},// Déclarez l'événement ici
	// Autres options du composant
};
</script>

<style scoped>
.container {
	margin-top: 50px;
}
</style>
