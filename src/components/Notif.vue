<!-- Notification.vue -->
<template>
	<div class="toast-container position-fixed p-3">
		<div
			class="toast"
			role="alert"
			aria-live="assertive"
			aria-atomic="true"
			:class="{show: isVisible}"
		>
			<div class="toast-header">
				<strong class="me-auto">{{ title }}</strong>
				<small class="time">{{ timestamp }}&nbsp;</small>
				<button
					type="button"
					class="btn-close"
					@click="hideNotif"
					aria-label="Fermer"
				></button>
			</div>
			<div class="toast-body">
				{{ message }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Notif',
	data() {
		return {
			isVisible: false,
			title: '',
			message: '',
			timestamp: '',
		};
	},
	methods: {
		showNotif(title, message) {
			this.title = title;
			this.message = message;
			this.timestamp = new Date().toLocaleTimeString();
			this.isVisible = true;
			setTimeout(() => {
				this.hideNotif();
			}, 5000); // La notification disparaît après 5 secondes
		},
		hideNotif() {
			this.isVisible = false;
		},
	},
};
</script>

<style scoped>
.toast-container {
	z-index: 1000;
}

.toast-header {
	background-color: #dcdcdc !important;
	height: 50px !important;
}

.btn-close {
	width: 5px !important;
	height: 5px !important;
}
.time {
	color: #b10000;
	font-style: italic;
}
.toast {
	transition: opacity 0.3s ease-in-out;
	opacity: 0;
}
.toast.show {
	opacity: 1;
}
</style>
