<template>
	<footer class="bg-white py-4 mb-5">
		<div class="container px-5">
			<div
				class="row align-items-center justify-content-between flex-column flex-sm-row"
			>
				<div class="col-auto">
					<div class="small m-0">copyright © eliazoura.fr</div>
				</div>
				<div class="col-auto">
					<ul class="small">
						<li class="navbar-nav ms-auto">
							<a
								class="nav-link"
								href="https://www.linkedin.com/in/eliazoura/"
								>LinkedIn</a
							>
						</li>
						<li class="nav-item">
							<router-link
								active-class="active"
								class="nav-link"
								to="/apiPage"
								>api</router-link
							>
						</li>
					</ul>
					<a class="small" href="#!">RGPD</a>
					<span class="mx-1">·</span>
					<a class="small" href=""> IP publique</a>
					<span class="mx-1">·</span>
					<a class="small" href="contact.html">Contact</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
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

<style scoped>
/* Votre style ici */
</style>
