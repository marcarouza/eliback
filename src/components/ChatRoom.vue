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
			<footer
				class="custom-footer bg-secondary text-white d-flex align-items-center justify-content-center"
			>
				<p class="m-0">Footer</p>
			</footer>
		</div>
	</section>
</template>

<script>
export default {
	name: 'ContactForm',
	data() {
		return {
			form: {
				firstname: '',
				lastname: '',
				email: '',
				code: '+33', // Default
				mobile: '',
				subject: '',
				message: '',
			},
		};
	},
	components: {},
	methods: {
		async submitForm() {
			if (
				this.form.firstname &&
				this.form.lastname &&
				this.form.email &&
				this.form.mobile &&
				this.form.subject &&
				this.form.message
			) {
				try {
					const response = await fetch(
						'https://eli-back.onrender.com/api/contactFormPost',
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(this.form),
						}
					);

					if (!response.ok) {
						throw new Error(
							'😱 😱 😱 FROM ContactForm.vue PAGE FETCH =>  Failed to send (237)'
						);
					}

					const result = await response.json();
					console.log(
						'🤾 ✅ 🤾 FROM ContactForm => EMAIL sent successfully: ' +
							result.response
					);
					this.$router.push({name: 'confirmcontactpage'});
				} catch (error) {
					console.error(
						'🍌 🍌 🍌 🍌 🍌 FROM CONTACT PAGE FETCH => ERR sending email (234) : ' +
							error.message
					);
				}
			} else {
				alert('🍌 🍌 🍌 🍌 🍌 Veuillez remplir tous les champs');
			}
		},
	},
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
