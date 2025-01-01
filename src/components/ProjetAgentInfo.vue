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
								<h2 class="fw-bolder">Info d'agent</h2>
								<ul>
									<li>
										Application permettant de
										prendre connaissance de s
										informations capturées par
										votre navigateur
									</li>
									<li>
										Réalisation avec VueJS 3 et
										d'un script Javascript
										spécifique.
									</li>
									<li>
										Bienvenue sur notre page
										d'information du navigateur
										Dans notre monde numérique
										actuel, naviguer sur Internet
										fait partie intégrante de
										notre quotidien. Mais
										saviez-vous qu’à chaque fois
										que vous visitez un site web,
										votre navigateur web partage
										automatiquement certaines
										informations à votre sujet ?
										Nous avons créé cette page
										pour vous montrer exactement
										quelles données sont
										collectées lors de votre
										navigation. À quoi cela
										sert-il ? L'objectif de cette
										page est de vous sensibiliser
										sur la quantité de données que
										votre navigateur transmet sans
										que vous en soyez
										nécessairement conscient. Ces
										informations comprennent, mais
										ne se limitent pas à : Votre
										adresse IP : Indique votre
										emplacement approximatif. Le
										type et la version de votre
										navigateur : Aide les sites à
										s'afficher correctement. Le
										système d'exploitation :
										Permet d'optimiser la
										compatibilité du site. Les
										paramètres de langue : Pour
										offrir des contenus dans votre
										langue préférée. Historique de
										navigation : Peut être utilisé
										pour personnaliser les
										publicités. Cookies et
										stockage local : Suivent vos
										préférences et vos
										identifiants. Pourquoi c'est
										important ? Nous pensons qu'il
										est essentiel que nos
										utilisateurs soient informés
										des données qu'ils partagent
										en ligne. En comprenant les
										informations récupérées par
										défaut par votre navigateur,
										vous pouvez prendre des
										décisions éclairées sur votre
										confidentialité en ligne et
										adapter vos paramètres en
										conséquence. Notre intention
										est de promouvoir une
										utilisation plus consciente et
										sécurisée du web. Comment
										protéger votre vie privée ?
										Soyez proactif dans la gestion
										de votre vie privée. Voici
										quelques conseils : Révisez
										les paramètres de
										confidentialité de votre
										navigateur. Utilisez des
										extensions de navigation qui
										bloquent les traqueurs. Soyez
										conscient des permissions que
										vous accordez à chaque site
										web. Nous espérons que cette
										page vous aidera à mieux
										comprendre les enjeux de la
										confidentialité en ligne et
										vous incitera à prendre les
										mesures nécessaires pour
										protéger vos informations
										personnelles.
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
