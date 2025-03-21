<template>
	<section class="d-flex flex-column vh-100">
		<div id="app" class="d-flex flex-column flex-grow-1">
			<!-- Header -->
			<header
				class="custom-header bg-black text-white d-flex align-items-center justify-content-center"
			>
				<h1 class="m-0">Chat room</h1>
			</header>

			<!-- Contenu principal -->
			<div class="d-flex flex-grow-1">
				<!-- Aside avec largeur fixe -->
				<aside class="bg-light p-3" style="width: 250px">
					<h4>Vous êtes en discussion avec …</h4>
					<p>{{ asideContent }}</p>
				</aside>

				<!-- Main adaptable -->
				<main class="content-area">
					<h2>Main Content</h2>
					<!-- Exemple d'un contenu dynamique qui peut s'adapter à la taille -->
					<div
						v-for="item in mainContent"
						:key="item.id"
						class="mb-3 p-2 border rounded"
					>
						{{ item.text }}
					</div>
				</main>
			</div>

			<!-- Footer -->
			<!-- <footer
				class="custom-footer bg-secondary text-white d-flex align-items-center justify-content-center"
			>
				<p class="m-0">Footer</p>
			</footer> -->
		</div>
	</section>
</template>

<script>
export default {
	name: 'ChatRoom',

};
</script>

<style>
/* Header et Footer conservent des tailles fixes */
.custom-header {
	height: 60px;
	/* hauteur fixe du header */
}

.custom-footer {
	height: 60px;
	/* hauteur fixe du footer */
}

/* La zone de contenu (Main + Aside) prend toute la place restante */
.content-area {
	flex: 1;
	overflow: auto;
	padding: 20px;
}

.bgchat {
	background-color: #2e38a5;
	color: #fff;
}

.bgchatfooter {
	background-color: #070b41;
	color: #fff;
}

.bgaside {
	background-color: #1a1e56;
	color: #fff;
}
</style>
