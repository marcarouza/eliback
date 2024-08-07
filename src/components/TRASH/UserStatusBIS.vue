<template>
	<div class="container mt-5">
		<h1 class="text-center mb-4">Votre compte</h1>

		<div v-if="user">
			<p><strong>pseudo :</strong> {{ user.user }}</p>
			<p><strong>Email :</strong> {{ user.email }}</p>
			<p><strong>Role :</strong> {{ user.role }}</p>
			<p><strong>isActive :</strong> {{ user.isActive }}</p>
			<!-- Ajoutez d'autres champs ici selon les données disponibles -->
		</div>
		<div v-else>
			<p>Vous n'êtes pas connecté</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UserStatus',
	data() {
		return {
			user: null,
		};
	},
	mounted() {
		this.fetchUserData();
	},
	methods: {
		async fetchUserData() {
			try {
				const response = await fetch(
					'https://eli-back.onrender.com/checkUserStatus',
					{
						method: 'GET',
						credentials: 'include', // Pour envoyer les cookies avec la requête
					}
				);
				if (!response.ok) {
					throw new Error(
						'FROM USER STATUS ERR Network response was not ok'
					);
				}
				const data = await response.json();
				this.user = data.user;
				console.log('🚀 ~ checkUserStatus ~ this.user:', this.user);
			} catch (error) {
				console.error(
					'FROM USER STATUS problème avec requête fetch :',
					error
				);
			}
		},
	},
};
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
