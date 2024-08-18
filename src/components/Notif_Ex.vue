<template>
	<div class="container mt-5">
		<h1>Démo de Notification Vue.js</h1>
		<button
			@click="showNotification('info')"
			class="btn btn-primary me-2"
		>
			Info
		</button>
		<button
			@click="showNotification('success')"
			class="btn btn-success me-2"
		>
			Succès
		</button>
		<button
			@click="showNotification('warning')"
			class="btn btn-warning me-2"
		>
			Avertissement
		</button>
		<button @click="showNotification('error')" class="btn btn-danger">
			Erreur
		</button>

		<Notif
			:message="notificationMessage"
			:type="notificationType"
			:duration="5000"
			@close="resetNotification"
		/>
	</div>
</template>

<script>
import {ref} from 'vue';
import Notif from './Notif.vue';

export default {
	name: 'NotificationDemo',
	components: {
		Notif,
	},
	data() {
		return {
			notificationMessage: '',
			notificationType: 'info',
		};
	},
	methods: {
		showNotification(type) {
			this.notificationMessage = `Ceci est une notification de type ${type}`;
			this.notificationType = type;
		},
		resetNotification() {
			this.notificationMessage = '';
		},
	},
};
</script>
