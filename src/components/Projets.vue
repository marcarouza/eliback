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
					
					<!-- CALCULO A VENIR  -->
					<div class="card shadow border-0 rounded-4 py-3 mb-3">
						<div
							class="d-flex flex-column flex-lg-row align-items-top justify-content-center"
						>
							<img
								class="img-fluid projet order-0 order-lg-1"
								src="/pix/projets/calculo.webp"
								alt="projet web eli azoura"
							/>
							<div class="p-5 order-1 order-lg-0">
								<h2 class="fw-bolder">SmartCalc</h2>
								<ul>
									<li>
										Application de type
										calculatrice configurable,
										fonctionant directement dans
										votre navigateur (en cours de
										développement)
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!--  -->

					<div class="card shadow border-0 rounded-4 py-3 mb-3">
						<div
							class="d-flex flex-column flex-lg-row align-items-top"
						>
							<img
								class="img-fluid projet order-0 order-lg-1"
								src="/pix/projets/infoAgentRed.png"
								alt="projet web eli azoura"
							/>
							<div class="p-5 order-1 order-lg-0">
								<router-link
									active-class="active"
									class="nav-link"
									to="/InfoAgentPage"
								>
									<h2 class="fw-bolder">SpyNav</h2>
								</router-link>
								<ul>
									<li>
										Application permettant de
										prendre connaissance des
										informations capturées par
										votre navigateur
									</li>
									<li>
										Réalisation avec VueJS 3 et
										d'un script Javascript
										spécifique.
									</li>
									<li>
										Dans notre monde numérique, la
										navigation sur Internet
										implique que votre navigateur
										partage automatiquement
										certaines informations vous
										concernant, telles que votre
										adresse IP, le type et la
										version de votre navigateur,
										votre système d'exploitation,
										vos paramètres de langue,
										votre historique de navigation
										et vos cookies.
										<br />
										<br />

										Cette page vise à vous
										sensibiliser à la quantité de
										données transmises à votre
										insu et à l'importance de
										comprendre ces échanges pour
										faire des choix éclairés
										concernant votre
										confidentialité en ligne.
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!--  -->
					<div class="card shadow border-0 rounded-4 py-3 px-3">
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
						<!-- ACCORDEON -->
						<nav
							class="rounded-top-3 mt-5 bg-gradient-custom"
						>
							<div
								class="nav nav-tabs mt-1 px-1"
								id="nav-tab"
								role="tablist"
							>
								<button
									class="nav-link active"
									id="client-tab"
									data-bs-toggle="tab"
									data-bs-target="#client"
									type="button"
									role="tab"
									aria-controls="client"
									aria-selected="true"
								>
									Client
								</button>
								<button
									class="nav-link"
									id="serveur-tab"
									data-bs-toggle="tab"
									data-bs-target="#serveur"
									type="button"
									role="tab"
									aria-controls="serveur"
									aria-selected="false"
								>
									Serveur
								</button>
								<button
									class="nav-link"
									id="nav-contact-tab"
									data-bs-toggle="tab"
									data-bs-target="#nav-contact"
									type="button"
									role="tab"
									aria-controls="nav-contact"
									aria-selected="false"
								>
									Base de donnée
								</button>
								<button
									class="nav-link"
									id="nav-socket-tab"
									data-bs-toggle="tab"
									data-bs-target="#nav-socket"
									type="button"
									role="tab"
									aria-controls="nav-socket"
									aria-selected="false"
								>
									Socket
								</button>
							</div>
						</nav>
						<div
							class="bg-light tab-content"
							id="nav-tabContent"
						>
							<div
								class="tab-pane fade show active px-4 py-4"
								id="client"
								role="tabpanel"
								aria-labelledby="client-tab"
								tabindex="0"
							>
								<p>
									<strong
										>Frontend dynamique avec
										VueJS</strong
									>
								</p>

								<p>
									J'exploite la puissance du
									framework VueJS dans sa version 3.
									Dans ce cadre de développement je
									béneficie à la fois d'une bonne
									flexibilité et des performances
									offrant une expérience utilisateur
									fluide et réactive, similaire à
									celle d'une application native.
								</p>

								<p>
									VueJS me permet de créer des
									interfaces dynamiques et
									interactives, avec une gestion
									d'état efficace et des transitions
									élégantes entre les différentes
									vues de l'application.Sa courbe
									d'apprentissage douce et ses
									performances exceptionnelles en on
									font un choix stratégique pour un
									développements ambitieux et
									évolutif.
								</p>

								<p>
									<strong
										>Architecture moderne : Single
										Page Application (SPA)</strong
									>
								</p>

								<p>
									J'adopte l'architecture Single Page
									Application (SPA), une approche
									moderne du développement web qui
									offre une expérience utilisateur
									comparable à celle d'une
									application native.
								</p>

								<p>
									Les avantages clés de cette
									approche SPA incluent :
								</p>
								<ul>
									<li>
										Le routage côté client permet
										de réduire la charge du
										serveur, avec une réactivité
										optimale
									</li>

									<li>
										Cohérence de l'expérience
										utilisateur sur tous les
										appareils
									</li>

									<li>
										Fonctionnalités hors ligne
										pour une utilisation continue
									</li>
								</ul>

								<p>
									Cette architecture SPA, combinée à
									l'efficacité de VueJS, me permet de
									développer des interfaces
									utilisateur hautement interactives
									et performantes. Le résultat : une
									expérience utilisateur immersive et
									une application facile à maintenir
									et à faire évoluer, répondant aux
									exigences actuelles tout en
									anticipant les besoins futurs dans
									un paysage digital en constante
									évolution.
								</p>
							</div>
							<div
								class="tab-pane fade px-4 py-4"
								id="serveur"
								role="tabpanel"
								aria-labelledby="serveur-tab"
								tabindex="0"
							>
								<p>
									<strong
										>Infrastructure Backend
										Robuste avec Node.js et
										Express.js</strong
									>
								</p>

								<p>
									Mon architecture backend s'appuie
									sur Node.js, offrant une plateforme
									hautement performante et évolutive,
									capable de répondre aux exigences
									des applications
									modernes.Express.js, fonctionnant
									dans le contexte Node.js, me
									fournit un framework serveur épuré
									mais puissant pour la gestion
									efficace des routes, des
									middlewares et des requêtes API,
									garantissant une flexibilité et une
									maintenabilité optimales.
								</p>

								<p>
									Cette synergie technologique me
									permet de gérer efficacement un
									volume important de connexions
									simultanées, un atout crucial pour
									les applications à forte
									interactivité.L'infrastructure
									serveur est entièrement développée
									avec Node.js, déployée et optimisée
									sur la plateforme cloud Render.com
									sur deux serveurs différents
									(adresses sur demande) pour assurer
									performance et fiabilité.
								</p>
								<p>
									Le fonctionnement sur 2
									sous-domaines différents (dans le
									processus CI/CD de Render.com) me
									permet de mettre en place des
									mesures de sécurités CORS pour les
									cookies afin d'éviter les attaques
									les plus courantes.
								</p>

								<p>
									<strong
										>Fonctionnalités Avancées de
										Réseautage Social</strong
									>
								</p>

								<p>
									Ma plateforme intègre un écosystème
									social sophistiqué, élaboré sur une
									infrastructure technologique
									robuste et éprouvée.<br />
									Les utilisateurs bénéficient d'une
									interface intuitive pour gérer
									leurs connexions, étendre leur
									réseau et participer à des échanges
									en ligne de manière fluide et
									sécurisée.
								</p>

								<p>
									Grâce à l'intégration de Socket.io,
									j'offre une mise à jour en temps
									réel des statuts de connexion,
									permettant une visibilité
									instantanée des utilisateurs en
									ligne.<br />
									Cette fonctionnalité, couplée à mon
									système de messagerie instantanée,
									crée une expérience de réseautage
									immersive et dynamique, favorisant
									l'engagement et les interactions
									entre utilisateurs.
								</p>
								<br />
								<br />
								<br />
								<br />
							</div>
							<div
								class="tab-pane fade px-4 py-4"
								id="nav-contact"
								role="tabpanel"
								aria-labelledby="nav-contact-tab"
								tabindex="0"
							>
								<p>
									<strong
										>Architecture de Données
										Scalable avec MongoDB</strong
									>
								</p>

								<p>
									Dans mon approche full stack, j'ai
									implémenté MongoDB comme solution
									de persistance des données. Cette
									base de données NoSQL (qui signifie
									<strong>Not Only</strong> SQL)
									offre une flexibilité inégalée,
									cruciale pour gérer efficacement
									les structures de données complexes
									et évolutives inhérentes aux
									applications web modernes.
								</p>

								<p>
									Avantages techniques clés de mon
									implémentation :
								</p>
								<ul>
									<li>
										Schéma dynamique permettant
										une itération rapide et une
										adaptation agile aux
										changements des spécifications
									</li>
									<li>
										Indexation avancée et requêtes
										optimisées pour des
										performances exceptionnelles
										sur de larges volumes de
										données
									</li>
									<li>
										Intégration seamless avec
										Node.js via Mongoose,
										facilitant les opérations CRUD
										et la validation des schémas
									</li>
									<li>
										Capacités de sharding native
										pour une scalabilité
										horizontale efficace
									</li>
									<li>
										Support des transactions ACID
										pour garantir l'intégrité des
										données dans les opérations
										complexes
									</li>
								</ul>

								<p>
									Cette architecture de données
									robuste me permet d'optimiser les
									performances backend, d'assurer une
									gestion efficace du flux de données
									entre le client et le serveur, et
									de maintenir une cohérence
									applicative solide à travers toutes
									les couches de la stack.
								</p>

								<p>
									<em
										>Note technique :
										L'intégration de MongoDB dans
										ma stack MEVN (MongoDB,
										Express, Vue.js, Node.js)
										offre une synergie puissante.
										Cette architecture full stack
										me permet de développer des
										applications web hautement
										réactives et scalables, avec
										une gestion de l'état côté
										client optimisée grâce à une
										couche de persistance flexible
										et performante côté
										serveur.</em
									>
								</p>
								<br />

								<br />
							</div>
							<div
								class="tab-pane fade px-4 py-4"
								id="nav-socket"
								role="tabpanel"
								aria-labelledby="nav-socket-tab"
								tabindex="0"
							>
								<p>
									<strong
										>Architecture de communication
										en temps réel avec
										Socket.io</strong
									>
								</p>

								<p>
									Au cœur de mon infrastructure de
									communication en temps réel, j'ai
									implémenté Socket.io, une
									bibliothèque robuste et
									performante.<br />
									Cette technologie me permet
									d'établir des connexions
									WebSocket"augmentée"
									bidirectionnelles persistantes
									entre le client et le serveur,
									offrant une base solide pour des
									fonctionnalités de mise à jour en
									temps réel de meta données.
								</p>

								<p>
									Mon implémentation de Socket.io
									permet les fonctionnalités
									suivantes :
								</p>
								<ul>
									<li>
										Synchronisation en temps réel
										de l'état des utilisateurs à
										travers l'application
									</li>
									<li>
										Système de notification push
										instantané avec gestion des
										événements côté client
									</li>
									<li>
										Messagerie en direct avec
										latence minimale et gestion
										efficace des connexions
									</li>
									<li>
										Diffusion sélective
										d'événements pour optimiser
										les performances réseau
									</li>
									<li>
										Mécanismes de reconnexion
										automatique pour une
										expérience utilisateur fluide
									</li>
								</ul>

								<p>
									Cette architecture de communication
									en temps réel s'intègre
									harmonieusement dans ma stack,
									créant une synergie entre le
									frontend réactif et le backend
									événementiel. Elle permet une
									expérience utilisateur hautement
									interactive et engageante, tout en
									optimisant l'utilisation des
									ressources serveur grâce à une
									gestion efficace des connexions.
								</p>

								<p>
									<em
										>Note technique :
										L'intégration de Socket.io
										dans mon architecture MEVN
										(MongoDB, Express, VueJS,
										Node.js) me permet de
										concevoir des flux de données
										bidirectionnels performants.
										Cette approche facilite la
										mise en œuvre de
										fonctionnalités complexes
										comme la collaboration en
										temps réel, les mises à jour
										en direct de l'interface
										utilisateur, et la gestion
										d'états distribués, renforçant
										ainsi la réactivité et
										l'interactivité globale de
										l'application.</em
									>
								</p>
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
import ProjetsList from './ProjetsList.vue';

export default {
	name: 'Projets',

	data() {
	return {
		projects: [
			{
				image: "/pix/projets/calculo.webp",
				alt: "projet web eli azoura",
				title: "SmartCalc",
				descriptions: [
					"Application de type calculatrice configurable, fonctionnant directement dans votre navigateur (en cours de développement)",
				],
			},
			{
				image: "/pix/projets/infoAgentRed.png",
				alt: "projet web eli azoura",
				title: "SpyNav",
				descriptions: [
					"Application permettant de prendre connaissance des informations capturées par votre navigateur.",
					"Réalisation avec VueJS 3 et un script JavaScript spécifique.",
					"Sensibilisation à la quantité de données transmises par votre navigateur.",
				],
			},
			// Ajoutez d'autres projets ici si nécessaire
		],
	};
}

};



</script>

<style scoped>
.bg-gradient-custom {
	background: linear-gradient(90deg, #000000be, #1e30f3);
	background-size: 200% 200%;
	animation: gradient 30s ease infinite;
}

.bg-gradient-custom .nav-link {
	color: white;
	opacity: 0.9; /* Légère transparence pour les onglets inactifs */
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
	display: block; /* Évite les espaces indésirables autour des images */
	margin: 0 auto; /* Centre horizontalement */
	max-width: 50%; /* S'assure que l'image ne dépasse pas la largeur du conteneur */
	height: auto; /* Maintient les proportions de l'image */
	object-fit: contain; /* Assure que l'image s'adapte entièrement à son conteneur */
	text-align: center; /* Facultatif si vous appliquez à un conteneur parent */
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
