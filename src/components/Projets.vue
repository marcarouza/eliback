<template>
	<div class="d-flex flex-column h-100 bg-light">
		<main class="flex-shrink-0">
			<!-- Navigation-->

			<!-- Projects Section-->
			<section class="py-5">
				<div class="container px-5 mb-5">
					<div class="text-center mb-5">
						<h1 class="display-5 fw-bolder mb-0">
							<span class="text-gradient d-inline"
								>Projets</span
							>
						</h1>
					</div>

					<div class="card shadow border-0 rounded-4 py-3">
						<div
							class="d-flex flex-column flex-lg-row align-items-center"
						>
							<img
								class="img-fluid projet order-0 order-lg-1"
								src="https://eliazoura.fr/pix/projets/projet1.png"
								alt="projet web eli azoura"
							/>
							<div class="p-5 order-1 order-lg-0">
								<h2 class="fw-bolder">eliazoura.fr</h2>
								<ul>
									<li>
										Application en ligne
										développée à l'occasion de ma
										soutenance de développeur Web
										full Stack
									</li>
									<li>
										Réalisation avec VueJS 3 pour
										le front et Express jS NodeJS
										et MongoDB pour le back-end
									</li>
									<li>
										J'ai choisi une stratégie de
										développement en deux parties
										: une interface et un serveur
										déployés sur deux adresses
										différentes. Cette approche
										m'a permis de construire mon
										application avec plus de
										libertés, de robustesse et de
										maintenabilité. Tous les
										requêtes depuis le front sont
										faites via des appels API sur
										des points de terminaisons
										dédiés avec à chaque fois des
										tests renforcés pour éviter
										les attaques.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- Call to action section-->
		</main>
	</div>
</template>

<script>
export default {
	name: 'Projets',
};
</script>

<style scoped>
.projet {
	width: 50%;
	object-fit: cover;
	border-radius: 10px;
}

ul {
	li {
		margin-top: 1rem;
		list-style-type: none;
		margin: 1rem;
	}
}
/* Ajoutez ici des styles spécifiques au composant si nécessaire */
</style>
