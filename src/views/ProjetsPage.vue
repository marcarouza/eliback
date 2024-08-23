<template>
	<div>
		<NavOk />

		<Projets />

		<TabWhats />
	</div>
</template>

<script>
import NavOk from '../components/NavOk.vue';
import Projets from '../components/Projets.vue';
import TabWhats from '../components/TabWhats.vue';

export default {
	name: 'ProjetsPage',
	emits: ['updatePageTitle'],

	components: {
		NavOk,
		Projets,
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
