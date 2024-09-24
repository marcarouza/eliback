import Vue from 'vue';

export const EventBus = new Vue();

// Optionnellement, vous pouvez ajouter des méthodes utilitaires ici
export const showNotification = (title, message) => {
	EventBus.$emit('showNotifi', {title, message});
};
