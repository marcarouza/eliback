<template>
	<div>
		<Cv />
		<TabWhats />
	</div>
</template>

<script>
import Cv from '@/components/Cv.vue';
import TabWhats from '@/components/TabWhats.vue';

export default {
	name: 'CvPage',

	emits: ['updatePageTitle'], // Déclarez l'événement ici
	data() {
		return {};
	},
	// Autres options du composant
	components: {
		Cv,
		TabWhats,
	},

	mounted() {
		this.$emit(
			'updatePageTitle',
			` CV | Eli Azoura | Développeur Full Stack`
		);
	},
};
</script>

<style></style>
