<template>
	<div>
		<NavOk />
		<div
			class="d-flex flex-column align-items-center justify-content-center vh-100"
		>
			<AllMembers />
			<TabWhats />
			<Chat_Box />
			<Footer />
		</div>
	</div>
</template>

<script>
import NavOk from '../components/NavOk.vue';

import AllMembers from '../components/AllMembers.vue';
import Footer from '../components/Footer.vue';
import Chat_Box from '../components/Chat_Box.vue';
import TabWhats from '../components/TabWhats.vue';

export default {
	name: 'AllMembersPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici

	mounted() {
		this.$emit(
			'updatePageTitle',
			`Liste des memebres | Eli | Développeur Full Stack`
		);
	},
	components: {
		NavOk,
		AllMembers,
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
