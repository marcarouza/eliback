<template>
	<div class="d-flex align-items-center justify-content-center vh-100">
		<div class="ok">
			<h1 class="display-1 fw-bold">C'est fait !</h1>
			<p class="fs-3">
				<span>
					<i data-v-7b42fc1c="" class="bi bi-check-circle"></i>
					Votre message est envoyé</span
				>
			</p>
			<a href="/" class="btn btn-primary"
				>Retour à la page d'accueil</a
			>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ConfirmContact',
};
</script>

<style scoped>
.vh-100 {
	height: 100vh;
}

.ok {
	text-align: center;
	color: green;
}
</style>
