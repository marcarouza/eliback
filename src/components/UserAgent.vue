<template>
	<div class="container mt-5 mb-5">
		<div v-if="userAgentInfo">
			<div class="profil">
				<h1 class="text-center mb-4">
					Informations sur votre poste et comportement
					utilisateur
				</h1>
				<table class="table table-striped table-bordered mt-3">
					<!-- <caption
						classs="text-center bg-dark text-white p-2 caption-style"
					>
						> Ces informations sont fournies automatiquement
						par votre navigateur dès que vous arrivez sur
						cette page
					</caption> -->
					<tbody>
						<tr>
							<th>Navigateur (agent) utilisé</th>
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
										: 'Non : agent ou navigateur'
								}}
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td
								class="table-active text-right"
								colspan="3"
							>
								Informations à titre informatif
								récoltées de façon anonyme
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
		<div v-else>
			<h3>
				Les informations de votre client ou agent, ne sont pas
				disponibles.
			</h3>
		</div>
	</div>

	<div class="container">
		<table class="table table-striped table-bordered mt-3">
			<tbody>
				<tr>
					<th>
						Position en pixels, du pointeur souris (dans cette
						fenêtre)
					</th>
					<td class="celFix">X</td>
					<td class="celFix">Y</td>
				</tr>
				<tr class="p">
					Le pointeur est
					{{
						pointerInside ? 'dans' : 'hors de'
					}}
					la fenêtre.
				</tr>
				<tr>
					<th v-if="pointerInside"></th>
					<th v-else></th>
					<td
						:class="[
							'position',
							{
								inside: pointerInside,
								outside: !pointerInside,
							},
						]"
					>
						{{ x }}
					</td>
					<td class="blackCell">{{ y }}</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td class="table-active text-center" colspan="2">
						Informations à titre informatif récoltées de façon
						anonyme
					</td>
				</tr>
			</tfoot>
		</table>
	</div>
</template>

<script setup>
import {ref, computed, onMounted, onUnmounted} from 'vue';
import {defineOptions} from 'vue';

// const err = ref(null);

// Définir le nom du composant
defineOptions({name: 'AgentInfo'});

// Hooks du cycle de vie
onMounted(() => {
	getUserAgentInfo();
	window.addEventListener('mousemove', showCoordinates);
	window.addEventListener('resize', updateWindowWidth);
});

onUnmounted(() => {
	window.removeEventListener('mousemove', showCoordinates);
	window.removeEventListener('resize', updateWindowDimensions);
});

// Propriété calculée pour vérifier si le pointeur est dans la fenêtre
const pointerInside = computed(() => {

const inOut = (
		x.value >= 0 &&
		x.value <= winWidth.value &&
		y.value >= 0 &&
		y.value <= winHeight.value
)


console.log(inOut)

	return (
		x.value >= 0 &&
		x.value <= winWidth.value &&
		y.value >= 0 &&
		y.value <= winHeight.value
	);
});

// Définition des propriétés réactives
const userAgentInfo = ref(null);
const x = ref(0);
const y = ref(0);
const winWidth = ref(window.innerWidth);
const winHeight = ref(window.innerHeight);

// Fonction pour afficher les coordonnées de la souris
function showCoordinates(event) {
	x.value = event.clientX;
	y.value = event.clientY;
	// console.log(`Souris : X=${x}, Y=${y}`);
}

function updateWindowWidth() {
	winWidth.value = window.innerWidth;
	winHeight.value = window.innerHeight;
}

// Fonction pour obtenir les informations de l'agent utilisateur
const getUserAgentInfo = async () => {
	try {
		// err.value = null;
		const response = await fetch(
			console.log("🚀 ~ pointerInside ~ inOut:", inOut)
			console.log("🚀 ~ pointerInside ~ inOut:", inOut)
			console.log("🚀 ~ pointerInside ~ inOut:", inOut)
			'https://eli-back.onrender.com/api/info',

			{
				method: 'GET',
				credentials: 'include',
			}
		);
		if (!response.ok) {
			throw new Error(
				`FROM UserAgent API response was not ok ==> ${response.status}`
			);
		}
		const data = await response.json();
		console.log('🚀 ~ getUserAgentInfo ~ data:', data);
		userAgentInfo.value = data.userAgentInfo;
	} catch (err) {
		console.error('FROM UserAgent problème avec requête fetch :', err);
	}
};
</script>

<style scoped>
h1 {
	color: #42b883;
}

.position {
	background-color: gray;
}

.inside {
	background-color: lightgreen;
}
.outside {
	background-color: red;
}

.caption-style {
	caption-side: top;
}

.blackCell {
	width: 100px;
	font-weight: bold;
	font-size: 1.2rem;
	background-color: black;
	color: white;
	text-align: right;
}

.celFix {
	width: 150px;
	text-align: center;
	font-weight: bold;
}
</style>
