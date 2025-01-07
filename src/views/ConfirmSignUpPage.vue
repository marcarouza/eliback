<!-- src/components/ConfirmationPage.vue -->
<template>
	<div>
		<NavOk />
		<ConfirmSignUp />
		<TabWhats />
	</div>
</template>

<script>
import ConfirmSignUp from '@/components/ConfirmSignUp.vue';
import NavOk from '@/components/NavOk.vue';
import TabWhats from '@/components/TabWhats.vue';

export default {
	name: 'ConfirmSignUpPage',
	emits: ['updatePageTitle'],
	components: {
		NavOk,
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
