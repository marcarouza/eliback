<template>
	<nav class="navbar navbar-expand-lg bg-info">
		<div class="container">
			<a class="navbar-brand" href="/homeblog" title="accueil du Blog"
				><i class="bi bi-journal iconi"></i
			></a>

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
				<ul class="navbar-nav me-auto">
					<!-- <li class="nav-item">
					<a title="voir tous les articles" class="nav-link btn btn-primary" href="/allPosts">tout voir</a>
				</li> -->
					<li class="nav-item">
						<a
							title="nouvel article"
							class="nav-link btn btn-primary"
							href="/writepostpage"
							>publier</a
						>
					</li>
					<li class="nav-item">
						<a
							title="rechercher un article"
							class="nav-link btn btn-primary"
							href="/searchpostpage"
							>recherche</a
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavBlog',
	data() {
		return {
			// Vos données ici
		};
	},
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
/*  */

        .iconi {
            /* Définissez ici le style que vous souhaitez appliquer à l'icône */
            font-size: 1.5rem;
            color: #ffffff;
        }
</style>
