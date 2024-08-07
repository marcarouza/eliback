<template>
	<div class="container text-center mb-5">
		<p class="text-gradient citation">
			Être développeur,
			<br />
			c'est savoir se développer
			<!-- <i class="bi bi-quote opening-quote">
				Être développeur, c'est savoir se développer</i
			>

			<i class="bi bi-quote closing-quote">.</i> -->
		</p>
	</div>
</template>

<script>
export default {
	name: 'Apropos',
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

.citation {
	/* display: inline; */
	/* text-align: center; */
	font-family: 'QuickSand Sans', sans-serif;
	font-family: 'Nunito Sans', sans-serif;
	font-family: 'Jersey', sans-serif;
	/* font-optical-sizing: auto; */
	/* font-weight: 300; */
	/* font-style: italic; */
	font-variation-settings: 'wdth' 100, 'YTLC' 500;
}

.text-gradient {
	display: inline-block !important;
	font-size: 2.5rem; /* Taille de police définie à 2.5 rem */
	line-height: 2.2rem; /* Hauteur de ligne définie à 2.2 rem */
	padding: 0.5em 0; /* Padding de 0.5 em en haut et en bas */
	width: 100%;
}

.opening-quote {
	font-size: 1.3rem;

	/* margin-right: 0.3rem; */
	display: inline; /* Assure que les guillemets sont en ligne */
	margin: 0 0.2rem; /* Ajustez les marges pour l'espacement désiré */
}

.closing-quote {
	display: inline; /* Assure que les guillemets sont en ligne */

	/* margin: 0 0.2rem; Ajustez les marges pour l'espacement désiré */

	font-size: 1.3rem;

	transform: rotate(
		180deg
	) !important; /* Faire pivoter pour simuler les guillemets fermants */
}

.text-gradient {
	display: inline !important; /* Assure que tout est en ligne */
	font-size: 2.5rem;
	line-height: 2.2rem;
}

.text-gradient {
	display: inline;
	padding: 0.5em 0;
	display: inline-block;
	font-size: 1.9rem;
	width: 100%;
	line-height: 2rem;
}

.line1,
.line2 {
	display: inline;
	text-align: center;
	font-family: 'Nunito Sans', sans-serif;
	font-optical-sizing: auto;
	font-weight: 300;
	font-style: italic;
	font-variation-settings: 'wdth' 100, 'YTLC' 500;
}

.line2 {
	margin-top: 0.2em; /* Ajustez cette valeur pour l'espacement vertical souhaité */
}

/* Votre style ici */
</style>
