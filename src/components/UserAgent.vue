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
						votre navigateur dès que vous arrivez sur cette
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
							<td>
								{{
									userAgentInfo.isDesktop
										? 'Ordinateur de bureau'
										: userAgentInfo.isMobile
										? 'Appareil mobile'
										: 'Information non disponible'
								}}
							</td>
						</tr>
						<tr>
							<th>Appareil de type robot</th>
							<td>
								{{
									userAgentInfo.isBot
										? 'De type robot'
										: 'De type agent ou navigateur'
								}}
							</td>
						</tr>
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
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {defineOptions} from 'vue';

// const err = ref(null);

// Définir le nom du composant
defineOptions({name: 'AgentInfo'});

// Définition des propriétés réactives
const userAgentInfo = ref(null);

// Fonction pour obtenir les informations de l'agent utilisateur
const getUserAgentInfo = async () => {
	try {
		// err.value = null;
		const response = await fetch(
			'https://eli-back.onrender.com/api/info',
			{
				method: 'GET',
				credentials: 'include',
			}
		);
		if (!response.ok) {
			throw new Error('FROM UserAgent response was not ok');
		}
		const data = await response.json();
		userAgentInfo.value = data.userAgentInfo;
	} catch (err) {
		console.error('FROM UserAgent problème avec requête fetch :', err);
	}
};

// Hooks du cycle de vie
onMounted(() => {
	getUserAgentInfo();
	console.log('Le composant UserAgentInfo est monté');
});
</script>

<style scoped>
h1 {
	color: #42b883;
}
</style>
