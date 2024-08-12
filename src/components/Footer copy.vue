<template>
	<footer class="footer bg-dark text-white py-4">
		<div class="container">
			<div class="row">
				<!-- Logo et informations -->
				<div class="col-md-4 mb-3 mb-md-0">
					<h5 class="text-uppercase">Mon Site</h5>
					<p>© 2024 Mon Site. Tous droits réservés.</p>
				</div>

				<!-- Liens utiles -->
				<div class="col-md-4 mb-3 mb-md-0">
					<h5 class="text-uppercase">Liens Utiles</h5>
					<ul class="list-unstyled">
						<li>
							<a href="/contact" class="text-white"
								>Contact</a
							>
						</li>
						<li>
							<a href="/rgpd" class="text-white"
								>Politique de confidentialité (RGPD)</a
							>
						</li>
						<li>
							<a href="/jwt" class="text-white"
								>Utilisation des JWT</a
							>
						</li>
					</ul>
				</div>

				<!-- Réseaux sociaux -->
				<div class="col-md-4">
					<h5 class="text-uppercase">Suivez-nous</h5>
					<a
						href="https://www.facebook.com"
						class="text-white me-3"
					>
						<i class="fab fa-facebook-f"></i>
					</a>
					<a
						href="https://www.twitter.com"
						class="text-white me-3"
					>
						<i class="fab fa-twitter"></i>
					</a>
					<a href="https://www.instagram.com" class="text-white">
						<i class="fab fa-instagram"></i>
					</a>
				</div>
			</div>

			<div class="row mt-3">
				<div class="col text-center">
					<p class="small">
						Ce site utilise des cookies pour vous offrir la
						meilleure expérience possible. En utilisant ce
						site, vous acceptez notre utilisation des cookies
						conformément à notre
						<a href="/rgpd" class="text-white"
							><u>Politique de confidentialité</u></a
						>.
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'SiteFooter',
};
</script>

<style scoped>
.footer {
	position: relative;
	bottom: 0;
	width: 100%;
	background-color: #343a40;
}

.footer a {
	text-decoration: none;
	color: #ffffff;
}

.footer a:hover {
	color: #adb5bd;
	text-decoration: underline;
}

.footer .fab {
	font-size: 1.5rem;
}
</style>
