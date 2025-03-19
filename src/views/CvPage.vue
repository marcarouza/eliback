<template>
	<div>
		<!-- <NavNew /> -->
		<Cv />
		<TabWhats />
	</div>
</template>

<script>
import NavNew from '@/components/NavNew.vue';
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
		NavNew,
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
