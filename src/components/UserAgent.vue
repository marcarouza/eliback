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
			<thead>
				<tr>
					<th colspan="3">
						Position du pointeur en pixels
						<br />
						<span class="info">
							(déplacer le pointeur lentement pour plus de
							fiabilité)</span
						>
					</th>
				</tr>
				<tr>
					<th>Information</th>
					<th class="celFix">X</th>
					<th class="celFix">Y</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>
						Le pointeur est
						{{ pointerInside ? 'dans' : 'hors de' }} la
						fenêtre.
					</th>
					<td
						:class="[
							'celFix',
							{
								inside: pointerInside,
								outside: !pointerInside,
							},
						]"
					>
						{{ x }}
					</td>
					<td
						:class="[
							'celFix',
							{
								inside: pointerInside,
								outside: !pointerInside,
							},
						]"
					>
						{{ y }}
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td class="table-active text-center" colspan="3">
						Informations à titre informatif récoltées de façon
						anonyme
					</td>
				</tr>
			</tfoot>
		</table>
	</div>
</template>
<!-- 
<script setup>
import {ref, computed, onMounted, onUnmounted} from 'vue';
import {defineOptions} from 'vue';

// Définir le nom du composant
defineOptions({name: 'AgentInfo'});

// Hooks du cycle de vie
onMounted(() => {
	getUserAgentInfo();
	window.addEventListener('mousemove', showCoordinates);
	window.addEventListener('resize', updateDim);
});

onUnmounted(() => {
	window.removeEventListener('mousemove', showCoordinates);
	window.removeEventListener('resize', updateDim);
});

// Définition des propriétés réactives
const userAgentInfo = ref(null);
const x = ref(0);
const y = ref(0);
const winWidth = ref(window.innerWidth);
const winHeight = ref(window.innerHeight);

// Propriété calculée pour vérifier si le pointeur est dans la fenêtre
const pointerInside = computed(() => {
	return (
		x.value > 0 &&
		x.value < winWidth.value - 10 &&
		y.value > 1 &&
		y.value < winHeight.value - 10
	);
});

// Fonction pour afficher les coordonnées de la souris
function showCoordinates(event) {
	x.value = event.clientX;
	y.value = event.clientY;
	console.log('Pointeur dans la fenêtre:', pointerInside.value);
}

function updateDim() {
	winWidth.value = window.innerWidth;
	winHeight.value = window.innerHeight;
}

// Fonction pour obtenir les informations de l'agent utilisateur
const getUserAgentInfo = async () => {
	try {
		const response = await fetch(
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
</script> -->

<script setup>
import {ref, computed, onMounted, reactive, onUnmounted} from 'vue';
import {defineOptions} from 'vue';

// Définir le nom du composant
defineOptions({name: 'AgentInfo'});

// Hooks du cycle de vie
onMounted(() => {
	getUserAgentInfo();
	window.addEventListener('mousemove', captureMousePosition);
	window.addEventListener('resize', updateDim);
	rafId = requestAnimationFrame(updateMousePosition);
});

onUnmounted(() => {
	window.removeEventListener('mousemove', captureMousePosition);
	window.removeEventListener('resize', updateDim);
	if (rafId) {
		cancelAnimationFrame(rafId);
	}
});

// Définition des propriétés réactives
const userAgentInfo = ref(null);
const x = ref(0);
const y = ref(0);
const winWidth = ref(window.innerWidth);
const winHeight = ref(window.innerHeight);

// Variables pour le suivi de la souris
let rafId = null;
let lastX = 0;
let lastY = 0;

// Propriété calculée pour vérifier si le pointeur est dans la fenêtre
const pointerInside = computed(() => {
	const margin = 5;
	return (
		x.value > margin &&
		x.value < winWidth.value - margin &&
		y.value > margin &&
		y.value < winHeight.value - margin
	);
});

// Fonction pour mettre à jour les coordonnées de la souris
function updateMousePosition() {
	x.value = lastX;
	y.value = lastY;
	console.log('Pointeur dans la fenêtre:', pointerInside.value);
	rafId = requestAnimationFrame(updateMousePosition);
}

// Fonction pour capturer les coordonnées de la souris
function captureMousePosition(event) {
	lastX = event.clientX;
	lastY = event.clientY;
}

function updateDim() {
	winWidth.value = window.innerWidth;
	winHeight.value = window.innerHeight;
}

// Fonction pour obtenir les informations de l'agent utilisateur
const getUserAgentInfo = async () => {
	try {
		const response = await fetch(
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

.info {
	font-size: 1rem;
	font-style: italic;
	font-weight: lighter;
}
.blackCell {
	width: 150px;
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
