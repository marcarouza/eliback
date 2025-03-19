<template>

	<div class="d-flex flex-column align-items-center justify-content-center">
		<PassModify />
		<TabWhats />
	</div>
</template>

<script>
// import NavOk from '@/components/NavOk.vue';
import PassModify from '@/components/PassModify.vue';
import TabWhats from '@/components/TabWhats.vue';

export default {
	name: 'PassModifyPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici

	components: {
		PassModify,
		TabWhats,
	},

	data() {
		return {
			pageTitle:
				'Modifier votre mot de passe | Développeur Full Stack',
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
