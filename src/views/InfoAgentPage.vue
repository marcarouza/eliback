<template>
	   <h2>Navigation Dashboard</h2>
      <p class="iframe-description">Explorez mon application interactive de tableau de bord de navigation</p>
		<div class="iframe-section">
    <IframeApp 
      src="https://eliazoura.fr/navdash/" 
      title="Navigation Dashboard"
      frameborder="0"
      loading="lazy"
    />
  </div>

		<TabWhats />
	
</template>

<script>
import TabWhats from '@/components/TabWhats.vue';
import IframeApp from '@/components/IframeNavdashApp.vue';


export default {
	name: 'InfoAgentPage',
	emits: ['updatePageTitle'],
	components: {
		TabWhats,
		IframeApp,
	},
	mounted() {
		this.$emit(
			'updatePageTitle',
			`Informations utilisateur et comportement | Eli Azoura | Développeur Full Stack`
		);
		this.hideChat();
	},

	data() {
		return {
			// Vos données ici
		};
	},
	methods: {
		displayChat() {
			const chatPopin = document.getElementById('chatPopin');

			if (!chatPopin) {
				console.error('Element with ID "chatPopin" not found.');
				return;
			}

			chatPopin.classList.toggle('hide-inactive');
		},

		hideChat() {
			const chatPopin = document.getElementById('chatPopin');
			chatPopin.classList.add('hide-inactive');
		},
	},
	computed: {
		// Vos propriétés calculées ici
	},
	watch: {
		// Vos observateurs ici
	},
};
</script>

<style scoped>
.iframe-section {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh; /* ou une autre hauteur définie */
}

.iframe-section h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #213547;
}

.iframe-description {
  margin-bottom: 1.5rem;
  color: #4b5563;
  font-size: 1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .iframe-section {
    padding: 1rem;
    margin: 1.5rem 0;
  }
  
  .iframe-section h2 {
    font-size: 1.5rem;
  }
}
</style>