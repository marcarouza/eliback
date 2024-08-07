<template>
	<header class="py-5">
		<div class="container px-5">
			<div class="row gx-3 align-items-center">
				<div class="col-xxl-5">
					<!-- Header text content-->
					<div class="text-center text-xxl-start">
						<div
							class="badge bg-gradient-primary-to-secondary text-white mb-4"
						>
							<div class="text-uppercase">
								Web · Development · Design
							</div>
						</div>
						<div class="fs-3 fw-light text-muted">
							Eli Azoura
						</div>
						<h1 class="display-3 fw-bolder mb-5">
							<span class="text-gradient d-inline"
								>Développeur web full stack</span
							>
						</h1>
						<div
							class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start"
						>
							<a
								class="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
								href="cv"
								>CV</a
							>
							<a
								class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
								href="projets"
								>Projets</a
							>
						</div>
					</div>
				</div>
				<div class="col-xxl-7">
					<!-- Header profile picture-->
					<div
						class="d-flex justify-content-center mt-5 mt-xxl-0"
					>
						<div
							class="profile bg-gradient-primary-to-secondary"
						>
							<img
								class="profile-img"
								src="/pix/eli/eli-head-boot-trame.png"
								alt="..."
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Hero',
	data() {
		return {
			// Vos données ici
		};
	},
	methods: {
		// Vos méthodes ici
	},
	computed: {
		// Vos propriétés calculées ici
	},
	watch: {
		// Vos observateurs ici
	},
};
</script>

<style scoped></style>
