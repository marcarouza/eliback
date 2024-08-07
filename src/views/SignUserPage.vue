<template>
	<div>
		<NavOk />
		<SignUserForm />
		<TabWhats />
		<Chat_Box />
		<Footer />
	</div>
</template>

<script>
import NavOk from '../components/NavOk.vue';
import CommonHead from '../components/CommonHead.vue';
import SignUserForm from '../components/SignUserForm.vue';
import Chat_Box from '../components/Chat_Box.vue';
import TabWhats from '../components/TabWhats.vue';
import Footer from '../components/Footer.vue'; // Ajoutez .vue si nécessaire

export default {
	name: 'SignUserPage',
	emits: ['updatePageTitle'], // Déclarez l'événement ici

	mounted() {
		this.$emit(
			'updatePageTitle',
			`Création d'un compte | Développeur Full Stack`
		);
	},

	components: {
		CommonHead,
		NavOk,
		SignUserForm,
		Chat_Box,
		TabWhats,
		Footer,
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
.formulaire {
	background-color: #f8f9fa;
	padding: 2rem;
	border-radius: 0.5rem;
	box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.note {
	font-size: 0.875rem;
}

.note a {
	color: #007bff;
	text-decoration: none;
}

.note a:hover {
	text-decoration: underline;
}

#profil {
	color: #007bff;
	text-decoration: none;
}

#profil:hover {
	text-decoration: underline;
}

#togglePWD {
	cursor: pointer;
}

#toggleIcon {
	pointer-events: none;
}
</style>
