import {reactive} from 'vue';
export const EventBus = reactive({});

// Optionnellement, vous pouvez ajouter des méthodes utilitaires ici
export const showNotif = (title, message) => {
	EventBus.$emit('displayNotif', {title, message});
};
export const hideNotif = () => {
	EventBus.$emit('hideNotif');
};
