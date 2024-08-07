<template>
	<div class="d-flex align-items-center justify-content-center vh-100">
		<div class="text-center">
			<h1 class="display-1 fw-bold">404</h1>
			<p class="fs-3">
				<span class="text-danger">Oops!</span> Cette page n'existe
				pas.
			</p>
			<a href="/" class="btn btn-primary"
				>Retour à la page d'accueil</a
			>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NotFound',
};
</script>

<style scoped>
.vh-100 {
	height: 100vh;
}
</style>
