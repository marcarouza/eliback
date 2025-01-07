<template>
	<div>
		<NavOk />
		<div
			class="d-flex flex-column align-items-center justify-content-center mt-5"
		>
			<AllMembers />
			<TabWhats />
		</div>
	</div>
</template>

<script>
import NavOk from '@/components/NavOk.vue';

import AllMembers from '@/components/AllMembers.vue';
import TabWhats from '@/components/TabWhats.vue';

export default {
	name: 'AllMembersPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici

	mounted() {
		this.$emit(
			'updatePageTitle',
			`Liste des membres | Eli | Développeur Full Stack`
		);
	},
	components: {
		NavOk,
		AllMembers,
		TabWhats,
	},
};
</script>

<style scoped>
.vh-100 {
	height: 100vh;
}
</style>
