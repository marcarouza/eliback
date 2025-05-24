<template>
	<div class="d-flex flex-column h-100 bg-light">
		<main class="flex-shrink-0">
			<!-- Navigation-->

			<!-- Projects Section-->
			<section class="py-5">
				<div class="container px-5 mb-5">
					<div class="text-center mb-5">
						<h1 class="display-5 fw-bolder mb-0">
							<span class="text-gradient d-inline">Projets récents</span>
						</h1>
					</div>

					<!-- TEST AVEC APP CALCULO  -->

					<!-- Offcanvas (placé en dehors du bloc) -->
					<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasCalculo"
						aria-labelledby="offcanvasCalculoLabel">
						<div class="offcanvas-header">
							<h5 class="offcanvas-title" id="offcanvasCalculoLabel">
								SmartCalc
							</h5>
							<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
								aria-label="Fermer"></button>
						</div>


						<iframe src="https://eliazoura.fr/app/index.html" class="w-100 h-100" frameborder="0"
							title="SmartCalc Application"></iframe>

					</div>

					<!-- Bloc de la carte initiale (invariant) -->
					<div class="card shadow border-0 rounded-4 py-3 mb-3">
						<div class="d-flex flex-column flex-lg-row align-items-top justify-content-center">
							<!-- L'image est cliquable et déclenche l'offcanvas -->
							<img class="img-fluid projet order-0 order-lg-1 " src="/pix/projets/calculo.webp"
								alt="projet web eli azoura" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCalculo"
								aria-controls="offcanvasCalculo" style="cursor: pointer" />
							<div class="p-5 order-1 order-lg-0">
								<router-link active-class="active" class="nav-link" to="/Calculo">
									<h2 class="fw-bolder">
										SmartCalc
									</h2>
								</router-link>
								<ul>
									<li>
										Application de type
										calculatrice configurable,
										fonctionnant directement dans
										votre navigateur (en cours de
										développement)
									</li>
								</ul>
							</div>
						</div>
					</div>

					<!--  -->

				</div>
			</section>
			<!-- Call to action section-->
		</main>
	</div>
</template>

<script setup lang="ts">
// Import du composant StandaloneApp

// Avec <script setup>, pour définir des options (par exemple le nom du composant),
// utilisez la macro defineOptions au lieu d’export default.
defineOptions({
	name: 'Projets',
});
</script>

<style>
.bg-gradient-custom {
	background: linear-gradient(90deg, #000000be, #1e30f3);
	background-size: 200% 200%;
	animation: gradient 30s ease infinite;
}

.bg-gradient-custom .nav-link {
	color: white;
	opacity: 0.9;
	/* Légère transparence pour les onglets inactifs */
	transition: opacity 0.3s ease;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}

	50% {
		background-position: 100% 50%;
	}

	100% {
		background-position: 0% 50%;
	}
}

.projet {
	/* Évite les espaces indésirables autour des images */
	/* Centre horizontalement */
	max-width: 30%;
	padding-right: 1rem;
	/* S'assure que l'image ne dépasse pas la largeur du conteneur */
	height: auto;
	/* Maintient les proportions de l'image */
	object-fit: contain;
	/* Assure que l'image s'adapte entièrement à son conteneur */
	/* Facultatif si vous appliquez à un conteneur parent */
}

ul {
	li {
		margin-top: 1rem;
		/* list-style-type: none; */
		margin: 1rem;
	}
}

/* Ajoutez ici des styles spécifiques au composant si nécessaire */
</style>
