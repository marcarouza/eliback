<template>
	<!-- <Notif /> -->
	<Notif_Ex />
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
								src="/pix/eli/eli.webp"
								alt="..."
							/>

							<div class="foreground-text">
								<p>
									" Être développeur,
									<br />
									c'est savoir se développer "
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import Notif from './Notif.vue';
import Notif_Ex from './Notif_Ex.vue';

export default {
	name: 'Hero',
	data() {
		return {
			// showNotification: true, // Contrôle l'affichage de la notification
			// notificationMessage: 'This is a notification message', // Message de la notification
			// notificationType: 'success', // Type de la notification (info, success, warning, error)
		};
	},
	components: {Notif_Ex},
	methods: {
		handleNotificationClose() {
			this.showNotification = false; // Ferme la notification lorsque l'événement 'close' est émis
		},
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

.foreground-text {
	font-family: 'Roboto', sans-serif;
	filter: blur(0.4px); /* Applique un flou */
	/* font-family: 'Nunito', sans-serif; */
	font-style: italic;
	letter-spacing: 0.05em;
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
	text-shadow: 0px 0px 10px rgb(5, 0, 27);
	z-index: 10; /* Assure que le texte est devant tout autre élément */
	padding: 30px;
	p {
		margin: 0;
		padding: 0;
	}
}

@media (max-width: 1200px) {
	.foreground-text {
		font-size: 1.4rem; /* Réduit la taille de la police pour les écrans de taille moyenne */
		/* top: 75%; Ajuste la position verticale si nécessaire */
	}
}

@media (max-width: 768px) {
	.foreground-text {
		font-size: 1.4rem; /* Réduit davantage la taille de la police pour les petits écrans */
		letter-spacing: 0.03em; /* Ajuste l'espacement des lettres */
		/* top: 70%; Ajuste la position verticale pour les petits écrans */
		padding: 5px; /* Ajoute du padding si nécessaire pour plus de lisibilité */
	}
}

@media (max-width: 576px) {
	.foreground-text {
		font-size: 1.2rem; /* Encore plus petit pour les très petits écrans */
		/* top: 65%; Ajuste la position verticale */
	}
}
</style>
