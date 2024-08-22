<template>
	<NavOk />

	<div class="d-flex flex-column align-items-center justify-content-center">
		<PassModify />
		<TabWhats />
		<!-- <Chat_Box /> -->
	</div>
</template>

<script>
import NavOk from '../components/NavOk.vue';
import PassModify from '../components/PassModify';
// import Chat_Box from '../components/Chat_Box.vue';
import TabWhats from '../components/TabWhats.vue';

export default {
	name: 'PassModifyPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici

	components: {
		NavOk,
		// PassModify,
		// Chat_Box,
		TabWhats,
	},

	data() {
		return {
			pageTitle: 'USER STATUS  | Développeur Full Stack',
		};
	},
	mounted() {
		this.$emit('updatePageTitle', this.pageTitle);
	},
};
</script>

<style scoped>
.vh-100 {
	height: 50%;
}
</style>
