<template>
	<footer class="footer bg-dark text-white py-4">
		<div class="container">
			<div class="row">
				<!-- Logo et informations -->
				<div class="col-md-4 mb-1">
					<p>
						© 2024 | eliazoura.fr
						<span class="text-black-50"
							>version 1.5 du 20.08-15H00</span
						>
						<br />
					</p>
					<p class="small">
						En utilisant ce site, vous acceptez notre
						utilisation des cookies conformément à notre
						<router-link :to="{name: 'rgpdpage'}">
							<u>politique de confidentialité</u>
						</router-link>
					</p>
				</div>

				<!-- Liens utiles -->
				<!-- Liens utiles -->
				<div class="col-md-4 mb-1">
					<ul class="list-unstyled">
						<li class="nav-item">
							<router-link
								active-class="active"
								class="nav-link text-black-50"
								to="/apiPage"
								>api</router-link
							>
						</li>
						<li class="nav-item"></li>
					</ul>
				</div>

				<!-- Réseaux sociaux -->
				<div class="col-md-4 mb-1 d-flex justify-content-end">
					<hr />
					<ul class="list-unstyled">
						<li
							class="mb-2 d-flex justify-content-end align-items-center"
						>
							<a
								href="https://gitlab.com/eliazoura"
								class="text-white d-flex align-items-center"
							>
								<span class="me-2">GitLab</span>
								<i class="fab fa-gitlab"></i>
							</a>
						</li>
						<li
							class="mb-2 d-flex justify-content-end align-items-center"
						>
							<a
								href="https://www.linkedin.com/in/eliazoura"
								class="text-white d-flex align-items-center"
							>
								<span class="me-2">LinkedIn</span>
								<i class="fab fa-linkedin"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import {ref} from 'vue';
import Notif from './Notif';

export default {
	name: 'Footer',
};
</script>

<style scoped>
.footer {
	position: relative;
	bottom: 0;
	width: 100%;
	background-color: rgb(33, 37, 41);
	font-size: 0.8rem;
}

.footer a {
	font-size: 0.8rem;

	text-decoration: none;
	color: #ffffff;
}

.footer a:hover {
	color: #adb5bd;
	text-decoration: underline;
}

.footer .fab {
	font-size: 1.3rem;
}
</style>
