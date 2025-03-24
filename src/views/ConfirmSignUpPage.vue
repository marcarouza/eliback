<!-- src/components/ConfirmationPage.vue -->
<template>
	<div>
		<!-- <NavNew /> -->
		<ConfirmSignUp />
		<TabWhats />
	</div>
</template>

<script>
import ConfirmSignUp from '@/components/ConfirmSignUp.vue';
import NavNew from '@/components/NavNew.vue';
import TabWhats from '@/components/TabWhats.vue';

export default {
	name: 'ConfirmSignUpPage',
	emits: ['updatePageTitle'],
	components: {
		// NavNew,
		ConfirmSignUp,
		TabWhats,
	},
	mounted() {
		this.$emit(
			'updatePageTitle',
			`Confirmation | Développeur Full Stack`
		);
	},
};
</script>

<style scoped></style>
