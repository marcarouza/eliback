<template>
	<header class="py-5">
		<div class="container px-5">
			<div class="row gx-3 align-items-center">

				<!-- Colonne Image -->
				<div class="col-12 col-md-7 order-md-2">
					<div class="d-flex justify-content-center mt-md-0">
						<div class="profile skin1to2">
							<img
								class="profile-img"
								src="/pix/eli/eli_portrait.png"
								alt="..."
							/>
							<div class="foreground-text">
								<p>
									" Être développeur,<br />c'est
									savoir se développer "
								</p>
							</div>
						</div>
					</div>
				</div>
				<!-- Colonne Texte -->
				<div class="col-12 col-md-5 order-md-1">
					<!-- Contenu texte -->
					<div class="text-center text-md-start">
						<div
							class="badge bg-gradient-primary-to-secondary text-white mb-4"
						>
							<div class="text-uppercase">
								Web · Développement · Formation · Design
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
							class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-md-start"
						>
							<router-link
								class="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
								to="/cvPage"
							>
								CV
							</router-link>
							<router-link
								class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
								to="/projetsPage"
							>
								Projets
							</router-link>
						</div>
					</div>
				</div>
			</div>

			<!--  -->
		</div>

		<!-- HERO-->
	</header>
</template>

<script>
// import {API_BASE_URL} from '@/config/configDevProd.js';
export default {
	name: 'Hero',

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
	color: #fff;
}

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
