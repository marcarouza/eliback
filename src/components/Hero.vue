<template>
	<header class="py-5">
		<div class="container px-5">
			<div class="row gx-3 align-items-center">

								<!-- Colonne Image -->
				<div class="col-12 col-md-7 order-md-2">
					<div class="d-flex justify-content-center  mt-md-0">
						<div class="profile skin1to2 ">
							<img class="profile-img"
								src="https://static.wixstatic.com/media/67301c_afa0214573694a2da83f1c41745862db~mv2.png"
								alt="..." />
							<div class="foreground-text">
								<p>" Être développeur,<br />c'est savoir se développer "</p>
							</div>
						</div>
					</div>
				</div>
				<!-- Colonne Texte -->
				<div class="col-12 col-md-5 order-md-1">
					<!-- Contenu texte -->
					<div class="text-center text-md-start">
						<div class="badge bg-gradient-primary-to-secondary text-white mb-4">
							<div class="text-uppercase">Web · Développement · Formation · Design</div>
						</div>
						<div class="fs-3 fw-light text-muted">Eli Azoura</div>
						<h1 class="display-3 fw-bolder mb-5">
							<span class="text-gradient d-inline">Développeur web full stack</span>
						</h1>
						<div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-md-start">
							<router-link class="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" to="/cvPage">
								CV
							</router-link>
							<router-link class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" to="/projetsPage">
								Projets
							</router-link>
						</div>
					</div>
				</div>


			</div>


			<!-- ACCORDEON -->
<nav class="rounded-top-3 mt-5 bg-gradient-custom">
    <div class="nav nav-tabs mt-3" id="nav-tab" role="tablist">
        <button class="nav-link active" id="client-tab" data-bs-toggle="tab" data-bs-target="#client"
            type="button" role="tab" aria-controls="client" aria-selected="true">
            Client
        </button>
        <button class="nav-link" id="serveur-tab" data-bs-toggle="tab" data-bs-target="#serveur" 
            type="button" role="tab" aria-controls="serveur" aria-selected="false">
            Serveur
        </button>
        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
            type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
            Base de donnée
        </button>
        <button class="nav-link" id="nav-socket-tab" data-bs-toggle="tab" data-bs-target="#nav-socket"
            type="button" role="tab" aria-controls="nav-socket" aria-selected="false">
            Socket
        </button>
    </div>
</nav>




			<div class="bg-light tab-content" id="nav-tabContent">
				<div class="tab-pane fade show active px-4 py-4" id="client" role="tabpanel" aria-labelledby="client-tab"
					tabindex="0">
					<p><strong>Frontend dynamique avec VueJS</strong></p>

					<p>
						J'exploite la puissance du framework VueJS dans sa
						version 3. Dans ce cadre de développement je
						béneficie à la fois d'une bonne flexibilité et des
						performances offrant une expérience utilisateur
						fluide et réactive, similaire à celle d'une
						application native.
					</p>

					<p>
						VueJS me permet de créer des interfaces dynamiques
						et interactives, avec une gestion d'état efficace
						et des transitions élégantes entre les différentes
						vues de l'application.Sa courbe d'apprentissage
						douce et ses performances exceptionnelles en on
						font un choix stratégique pour un développements
						ambitieux et évolutif.
					</p>

					<p>
						<strong>Architecture moderne : Single Page
							Application (SPA)</strong>
					</p>

					<p>
						Nous adoptons l'architecture Single Page
						Application (SPA), une approche moderne du
						développement web qui offre une expérience
						utilisateur comparable à celle d'une application
						native.
					</p>

					<p>
						Les avantages clés de cette approche SPA incluent
						:
					</p>
					<ul>
						<li>
							Le routage côté client permet de réduire la
							charge du serveur, avec une réactivité
							optimale
						</li>

						<li>
							Cohérence de l'expérience utilisateur sur
							tous les appareils
						</li>

						<li>
							Fonctionnalités hors ligne pour une
							utilisation continue
						</li>
					</ul>

					<p>
						Cette architecture SPA, combinée à l'efficacité de
						VueJS, me permet de développer des interfaces
						utilisateur hautement interactives et
						performantes. Le résultat : une expérience
						utilisateur immersive et une application facile à
						maintenir et à faire évoluer, répondant aux
						exigences actuelles tout en anticipant les besoins
						futurs dans un paysage digital en constante
						évolution.
					</p>
				</div>
				<div class="tab-pane fade px-4 py-4" id="serveur" role="tabpanel" aria-labelledby="serveur-tab"
					tabindex="0">
					<p>
						<strong>Infrastructure Backend Robuste avec Node.js
							et Express.js</strong>
					</p>

					<p>
						Mon architecture backend s'appuie sur Node.js,
						offrant une plateforme hautement performante et
						évolutive, capable de répondre aux exigences des
						applications modernes.Express.js, fonctionnant
						dans le contexte Node.js, me fournit un framework
						serveur épuré mais puissant pour la gestion
						efficace des routes, des middlewares et des
						requêtes API, garantissant une flexibilité et une
						maintenabilité optimales.
					</p>

					<p>
						Cette synergie technologique me permet de gérer
						efficacement un volume important de connexions
						simultanées, un atout crucial pour les
						applications à forte
						interactivité.L'infrastructure serveur est
						entièrement développée avec Node.js, déployée et
						optimisée sur la plateforme cloud Render.com sur
						deux serveurs différents (adresses sur demande)
						pour assurer performance et fiabilité.
					</p>
					<p>
						Le fonctionnement sur 2 sous-domaines différents
						(dans le processus CI/CD de Render.com) me permet
						de mettre en place des mesures de sécurités CORS
						pour les cookies afin d'éviter les attaques les
						plus courantes.
					</p>

					<p>
						<strong>Fonctionnalités Avancées de Réseautage
							Social</strong>
					</p>

					<p>
						Ma plateforme intègre un écosystème social
						sophistiqué, élaboré sur une infrastructure
						technologique robuste et éprouvée.<br />
						Les utilisateurs bénéficient d'une interface
						intuitive pour gérer leurs connexions, étendre
						leur réseau et participer à des échanges en ligne
						de manière fluide et sécurisée.
					</p>

					<p>
						Grâce à l'intégration de Socket.io, j'offre une
						mise à jour en temps réel des statuts de
						connexion, permettant une visibilité instantanée
						des utilisateurs en ligne.<br />
						Cette fonctionnalité, couplée à mon système de
						messagerie instantanée, crée une expérience de
						réseautage immersive et dynamique, favorisant
						l'engagement et les interactions entre
						utilisateurs.
					</p>
					<br />
					<br />
					<br />
					<br />
				</div>
				<div class="tab-pane fade px-4 py-4" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"
					tabindex="0">
					<p>
						<strong>Architecture de Données Scalable avec
							MongoDB</strong>
					</p>

					<p>
						Dans mon approche full stack, j'ai implémenté
						MongoDB comme solution de persistance des données.
						Cette base de données NoSQL (qui signifie
						<strong>Not Only</strong> SQL) offre une
						flexibilité inégalée, cruciale pour gérer
						efficacement les structures de données complexes
						et évolutives inhérentes aux applications web
						modernes.
					</p>

					<p>
						Avantages techniques clés de mon implémentation :
					</p>
					<ul>
						<li>
							Schéma dynamique permettant une itération
							rapide et une adaptation agile aux
							changements des spécifications
						</li>
						<li>
							Indexation avancée et requêtes optimisées
							pour des performances exceptionnelles sur de
							larges volumes de données
						</li>
						<li>
							Intégration seamless avec Node.js via
							Mongoose, facilitant les opérations CRUD et
							la validation des schémas
						</li>
						<li>
							Capacités de sharding native pour une
							scalabilité horizontale efficace
						</li>
						<li>
							Support des transactions ACID pour garantir
							l'intégrité des données dans les opérations
							complexes
						</li>
					</ul>

					<p>
						Cette architecture de données robuste me permet
						d'optimiser les performances backend, d'assurer
						une gestion efficace du flux de données entre le
						client et le serveur, et de maintenir une
						cohérence applicative solide à travers toutes les
						couches de la stack.
					</p>

					<p>
						<em>Note technique : L'intégration de MongoDB
							dans ma stack MEVN (MongoDB, Express, Vue.js,
							Node.js) offre une synergie puissante. Cette
							architecture full stack me permet de
							développer des applications web hautement
							réactives et scalables, avec une gestion de
							l'état côté client optimisée grâce à une
							couche de persistance flexible et performante
							côté serveur.</em>
					</p>
					<br />

					<br />
				</div>
				<div class="tab-pane fade px-4 py-4" id="nav-socket" role="tabpanel" aria-labelledby="nav-socket-tab"
					tabindex="0">
					<p>
						<strong>Architecture de communication en temps réel
							avec Socket.io</strong>
					</p>

					<p>
						Au cœur de mon infrastructure de communication en
						temps réel, j'ai implémenté Socket.io, une
						bibliothèque robuste et performante.<br />
						Cette technologie me permet d'établir des
						connexions WebSocket"augmentée" bidirectionnelles
						persistantes entre le client et le serveur,
						offrant une base solide pour des fonctionnalités
						de mise à jour en temps réel de meta données.
					</p>

					<p>
						Mon implémentation de Socket.io permet les
						fonctionnalités suivantes :
					</p>
					<ul>
						<li>
							Synchronisation en temps réel de l'état des
							utilisateurs à travers l'application
						</li>
						<li>
							Système de notification push instantané avec
							gestion des événements côté client
						</li>
						<li>
							Messagerie en direct avec latence minimale et
							gestion efficace des connexions
						</li>
						<li>
							Diffusion sélective d'événements pour
							optimiser les performances réseau
						</li>
						<li>
							Mécanismes de reconnexion automatique pour
							une expérience utilisateur fluide
						</li>
					</ul>

					<p>
						Cette architecture de communication en temps réel
						s'intègre harmonieusement dans ma stack, créant
						une synergie entre le frontend réactif et le
						backend événementiel. Elle permet une expérience
						utilisateur hautement interactive et engageante,
						tout en optimisant l'utilisation des ressources
						serveur grâce à une gestion efficace des
						connexions.
					</p>

					<p>
						<em>Note technique : L'intégration de Socket.io
							dans mon architecture MEVN (MongoDB, Express,
							VueJS, Node.js) me permet de concevoir des
							flux de données bidirectionnels performants.
							Cette approche facilite la mise en œuvre de
							fonctionnalités complexes comme la
							collaboration en temps réel, les mises à jour
							en direct de l'interface utilisateur, et la
							gestion d'états distribués, renforçant ainsi
							la réactivité et l'interactivité globale de
							l'application.</em>
					</p>
				</div>
			</div>

			<!--  -->
		</div>

		<!-- HERO-->
	</header>
</template>

<script>
export default {
	name: 'Hero',
	data() {
		return {};
	},
	components: {},
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&display=swap');


    /* Style de l'onglet actif */
    .nav-tabs .nav-link.active {
        background-color: #e9ecef; /* Couleur de fond au survol */
        color: #000; /* Texte noir au survol */


    }

    /* Style des onglets inactifs */
    .nav-tabs .nav-link {

        transition: background-color 0.3s ease, color 0.3s ease; /* Transition pour les effets */
    }

    /* Ajout d'un effet au survol */
    .nav-tabs .nav-link:hover {
        background-color: #e9ecef; /* Couleur de fond au survol */
        color: #000; /* Texte noir au survol */
    }


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

/* Style pour l'onglet actif */

/* Effet de survol */

.tabactive {
	background-color: #012041;
	color: #fff;}

.foreground-text {
	font-family: 'Roboto', sans-serif;
	font-weight: bolder;
	letter-spacing: 0.08rem;
	/* filter: blur(0.1px); */
	/* Applique un flou */
	/* font-family: 'Nunito', sans-serif; */
	font-style: italic;
	/* letter-spacing: 0.05em; */
	line-height: 1.1;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	top: 89%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: rgb(255, 255, 255);
	font-size: 1.8rem;
	font-weight: 300;
	text-align: center;
	/* text-shadow: 1px 1px 5px #000000; */
text-shadow: 2px 2px 3px #000000, 4px 4px 10px #2c00db8b;
text-shadow: -3px 0px 2px #01004c, 5px 0px 1px #c90571d7;


	z-index: 10;
	/* Assure que le texte est devant tout autre élément */
	padding: 30px;

	p {
		margin: 0;
		padding: 0;
	}
}

@media (max-width: 1200px) {
	.foreground-text {
		font-size: 1.4rem;
		/* Réduit la taille de la police pour les écrans de taille moyenne */
		/* top: 75%; Ajuste la position verticale si nécessaire */
	}
}

@media (max-width: 768px) {
	.foreground-text {
		font-size: 1.4rem;
		/* Réduit davantage la taille de la police pour les petits écrans */
		letter-spacing: 0.03em;
		/* Ajuste l'espacement des lettres */
		/* top: 70%; Ajuste la position verticale pour les petits écrans */
		padding: 5px;
		/* Ajoute du padding si nécessaire pour plus de lisibilité */
	}
}

@media (max-width: 576px) {
	.foreground-text {
		font-size: 1.2rem;
		/* Encore plus petit pour les très petits écrans */
		/* top: 65%; Ajuste la position verticale */
	}
}
</style>
