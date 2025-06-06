<template>
		<CvNew />
		<TabWhats />
</template>

<script>
import CvNew from '@/components/CvNew.vue';
import TabWhats from '@/components/TabWhats.vue';

export default {
	name: 'CvPage',

	emits: ['updatePageTitle'], // Déclarez l'événement ici
	data() {
		return {};
	},
	// Autres options du composant
	components: {
		CvNew,
		TabWhats,
	},

	mounted() {
		this.$emit(
			'updatePageTitle',
			` CV | Eli Azoura | Développeur Full Stack`
		);
	},
};
</script>

<style>
@import 'mdb-vue-ui-kit/css/mdb.min.css';

/* Global styles */
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  transition: background-color 0.3s ease;
}

.main-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.theme-toggle {
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.dark-theme {
  background-color: #121212;
  color: #ffffff;
}

/* Responsive container padding */
@media (max-width: 767.98px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>