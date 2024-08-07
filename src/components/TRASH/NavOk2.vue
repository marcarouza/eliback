<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container">
			<a class="navbar-brand" href="/">
				<img
					class="d-inline-block align-text-top elilogo"
					src="/pix/logos/eliLogo192x192.png"
					alt="Eli Azoura"
				/>
			</a>
			<!-- Bouton de basculement pour petits écrans -->
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item">
						<a class="nav-link" href="cv">cv</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="projets">projets</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="contact">contact</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="homeblog">blog</a>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle btn text-white border border-white border-opacity-25"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<i
								title="mon compte"
								class="bi bi-person"
							></i>
						</a>
						<ul
							id="dynamicWidth"
							class="dropdown-menu user_menu"
							aria-labelledby="navbarDropdown"
						>
							<!-- <% if (user) { %> -->
							<li class="dropdown-item user_menu_item">
								<span style="color: cornflowerblue">
									<!-- <%= user.email %> -->
								</span>
							</li>
							<li>
								<a
									class="dropdown-item user_menu_item"
									href="modifyUserPage"
									>mon compte</a
								>
							</li>
							<li>
								<a
									class="dropdown-item user_menu_item"
									href="/logOut"
									>déconnexion</a
								>
							</li>
							<!-- <% } else { %> -->
							<li>
								<a
									class="dropdown-item user_menu_item"
									href="log_user"
									>connexion</a
								>
							</li>
							<li>
								<a
									class="dropdown-item user_menu_item"
									href="sign_user"
									>créer un compte</a
								>
							</li>
							<!-- <% } %> -->
						</ul>
					</li>
				</ul>
				<ul class="list-unstyled mb-0 ms-3">
					<!-- <% if (user) { %> -->
					<li class="txt-white user">
						<!-- <span class="user" style="color: rgb(0, 255, 55)"
							><i class="bi bi-check-circle"></i
							>&nbsp;</span
						> -->

						<!-- <%= user.email %> -->
					</li>
					<!-- <% } else { %> -->
					<li>
						<span class="px-4" style="color: orange"
							>non connecté&nbsp;</span
						>
					</li>
					<!-- <% } %> -->
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavOK',
};
</script>

<style scoped>
/* Style pour le logo */
.elilogo {
	/* Ajoutez ici les styles spécifiques pour votre logo */
	/* Par exemple : */
	width: 30px;
	height: 30px;
}

/* Styles pour le menu utilisateur */
.user_menu {
	width: 200px; /* Comme spécifié dans le style en ligne */
}

.user_menu_item {
	/* Styles pour les éléments du menu utilisateur */
	/* Par exemple : */
	padding: 8px 16px;
}

/* Style pour l'élément "non connecté" */
ul.list-unstyled > li > span {
	padding-left: 1rem;
	padding-right: 1rem;
}

/* Autres styles potentiellement nécessaires */
.navbar .dropdown-toggle.btn {
	/* Styles pour le bouton du menu déroulant */
	padding: 0.375rem 0.75rem;
}

.navbar .bi-person {
	/* Styles pour l'icône de personne */
	font-size: 1.2rem;
}
</style>
