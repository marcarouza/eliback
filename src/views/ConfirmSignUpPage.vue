<!-- src/components/ConfirmationPage.vue -->
<template>
	<div>
		<NavOk />
		<ConfirmSignUp>
			<TabWhats />
			<Chat_Box />
		</ConfirmSignUp>
		<Footer />
	</div>
</template>

<script>
import ConfirmSignUp from '../components/ConfirmSignUp.vue';
import NavOk from '../components/NavOk.vue';
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
	},
};
</script>

<style scoped></style>
