<template>
	<footer class="bg-dark text-white py-4 mt-3">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
					<p class="mb-0">
						&copy; 2024 Eli Azoura. Tous droits réservés.
					</p>
				</div>
				<div class="col-12 col-md-6 text-center text-md-end">
					<!-- <RouterLink to="/chatroom" class="text-black routeur me-5" target="_blank" rel="noopener noreferrer">
						<i class="fa-solid fa-comment"></i>
					</RouterLink> -->
					<a href="https://gitlab.com/eliazoura" class="text-white me-5" target="_blank" rel="noopener noreferrer">
						<i class="fab fa-gitlab"></i>
					</a>
					<a href="https://www.linkedin.com/in/eliazoura" class="text-white" target="_blank"
						rel="noopener noreferrer">
						<i class="fab fa-linkedin"></i>
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
	name: 'Footer',
};
</script>

<style scoped>
.fab {
	font-size: 1.5rem;
	font-size: x-large;
}

.footer {
	position: relative;
	bottom: 0;
	width: 100%;
	background-color: rgb(33, 37, 41);
	font-size: 0.8rem;
}

.footer a  .routeur{
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

 .routeur{
	font-size: 0.8rem;

	text-decoration: none;
	color: #ffffff;
}



</style>
