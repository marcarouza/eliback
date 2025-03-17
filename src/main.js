import '/src/assets/styles_temp_dev.css'; // Importer le fichier CSS global
import '/src/assets/styles-persos.css'; // Importer le fichier CSS global
// Importer le CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importer le JS de Bootstrap (optionnel, seulement si vous avez besoin de fonctionnalités JavaScript de Bootstrap)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'bootstrap-icons/font/bootstrap-icons.css';

import '@fortawesome/fontawesome-free/css/all.css';

import {createApp} from 'vue';

import {createHead} from '@vueuse/head';
const head = createHead();

import App from './App.vue';
//
import router from './router';

const app = createApp(App);

app.use(head);
// app.config.errorHandler = (err, info) => {
// 	console.error(`Erreur capturée dasn APP : ${err}, dans ${info}`);
// };

app.use(router).mount('#app');

// createApp(App).use(head).use(router).mount('#app');
