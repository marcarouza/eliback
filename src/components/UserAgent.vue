<template>
	<div class="container mt-5 mb-5">
		<div v-if="userAgentInfo">
			<div class="profil">
				<h1 class="text-center mb-4">
					Informations sur votre poste et comportement
					utilisateur
				</h1>
				<h2>Informations anonymes</h2>
				<table class="table table-striped table-bordered mt-3">
					<caption>
						Ces informations sont fournies automatiquement par
						votre navigateur dés que vous arrivez sur cette
						page
					</caption>
					<tbody>
						<tr>
							<th>Navigateur ou "agent" utilisé</th>
							<td>
								{{
									userAgentInfo.browser ||
									'Non défini'
								}}
							</td>
						</tr>
						<tr>
							<th>
								Version du client (navigateur ou agent)
							</th>
							<td>
								{{
									userAgentInfo.version ||
									'Non défini'
								}}
							</td>
						</tr>
						<tr>
							<th>Votre système d'exploitation</th>
							<td>
								{{
									userAgentInfo.os ||
									'Information non disponible'
								}}
							</td>
						</tr>
						<tr>
							<th>Appareil utilisé</th>
							<td>
								{{
									userAgentInfo.platform ||
									'Information non disponible'
								}}
							</td>
						</tr>
						<tr>
							<th>Type d'appareil</th>

							<td v-if="userAgentInfo.isDesktop">
								{{
									'Ordinateur de bureau' ||
									'Information non disponible'
								}}
							</td>
							<td v-if="userAgentInfo.isMobile">
								{{
									'Appareil mobile' ||
									'Information non disponible'
								}}
							</td>
						</tr>
						<tr>
							<th>Appareil de type robot</th>
							<td v-if="userAgentInfo.isBot">
								{{ 'De type robot' || 'Non défini' }}
							</td>
							<td v-if="!userAgentInfo.isBot">
								{{
									'De type agent ou navigateur' ||
									'Non défini'
								}}
							</td>
						</tr>
						<!-- <tr>
							<th>Rôle</th>
							<td>{{ user.role }}</td>
						</tr>
						<tr>
							<th>Statut du compte</th>
							<td>
								{{
									user.isActive ? 'Actif' : 'Inactif'
								}}
							</td>
						</tr>
						<tr>
							<th>Date d'inscription</th>
							<td>
								{{ formatDate(user.dateInscription) }}
							</td>
						</tr> -->
					</tbody>
					<tfoot>
						<tr>
							<td colspan="2">
								Informations à titre informatif
								récoltées de façon anonyme
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>

		<div v-else>
			<h3>Une erreur est survenue, veuillez vous reconnecter</h3>
		</div>
	</div>
	<div>
		<!-- Le template contient la structure HTML du composant -->
		<h1>{{ title }}</h1>
		<p>{{ message }}</p>
		<button @click="incrementCount">Compteur: {{ count }}</button>
	</div>
</template>

<script setup>
import {ref, onMounted} from 'vue';

// Définition des propriétés réactives
const title = ref('Mon Composant Vue 3');
const message = ref('Bienvenue dans ce composant!');
const count = ref(0);

// Méthodes
const incrementCount = () => {
	count.value++;
};

// Hooks du cycle de vie
onMounted(() => {
	console.log('Le composant est monté');
});
</script>

<style scoped>
/* Styles spécifiques au composant */
h1 {
	color: #42b883;
}
</style>
