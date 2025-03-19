<template>
	<div>

		<Projets />

		<TabWhats />
	</div>
</template>

<script>
import Projets from '@/components/Projets.vue';
import TabWhats from '@/components/TabWhats.vue';

export default {
	name: 'ProjetsPage',
	emits: ['updatePageTitle'],

	components: {
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
