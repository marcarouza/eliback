<template>
	<NavOk />

	<div>
		<div
			class="d-flex flex-column align-items-center justify-content-center vh-100"
		>
			<NoAccess />
			<TabWhats />
		</div>
	</div>
</template>

<script>
import NavOk from '../components/NavOk.vue';

import NoAccess from '../components/NoAccess.vue';
import TabWhats from '../components/TabWhats.vue';

export default {
	name: 'NoAccessPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici
	components: {
		NavOk,
		NoAccess,
		TabWhats,
	},

	data() {
		return {
			pageTitle: '😤 Accès restreint | Eli | Développeur Full Stac',
		};
	},
	mounted() {
		this.$emit('updatePageTitle', this.pageTitle);
	},
};
</script>

<style scoped>
.vh-100 {
	height: 80vh;
	/* margin-top: 100px; */
}
</style>
