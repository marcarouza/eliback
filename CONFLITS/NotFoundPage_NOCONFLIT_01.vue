<template>
	<div>
		<NavOk />

		<div
			class="d-flex flex-column align-items-center justify-content-center vh-100"
		>
			<NotFound />
			<TabWhats />
			<Chat_Box />
			<Footer />
		</div>
	</div>
</template>

<script>
import NavOk from '../components/NavOk.vue';
import NotFound from '../components/NotFound.vue';
import Footer from '../components/Footer.vue';
import Chat_Box from '../components/Chat_Box.vue';
import TabWhats from '../components/TabWhats.vue';

export default {
	name: 'NotFoundPage',
	components: {
		NavOk,
		NotFound,
		Footer,
		Chat_Box,
		TabWhats,
	},
};
</script>

<style scoped>
.vh-100 {
	height: 100vh;
}
</style>
