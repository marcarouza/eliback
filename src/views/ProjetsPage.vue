<template>
	<div>
		<NavOk />

		<Projets />

		<!-- <Chat_Box /> -->
		<TabWhats />
	</div>
</template>

<script>
import NavOk from '../components/NavOk.vue';
import Projets from '../components/Projets.vue';
// import Chat_Box from '../components/Chat_Box.vue';
import TabWhats from '../components/TabWhats.vue';

export default {
	name: 'ProjetsPage',
	emits: ['updatePageTitle'],

	components: {
		NavOk,
		Projets,
		// Chat_Box,
		TabWhats,
	},
	data() {
		return {
			pageTitle: 'Projets | Développeur Full Stack',
		};
	},
	mounted() {
		this.$emit('updatePageTitle', this.pageTitle);
	},
};
</script>

<style></style>
