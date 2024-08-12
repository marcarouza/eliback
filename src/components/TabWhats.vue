<template>
	<a
		href="https://wa.me/33635277086?text=Bonjour%20Elie%2C%20je%20vous%20%C3%A9cris%20depuis%20votre%20site%20Internet"
		target="_blank"
	>
		<div class="stickedTab">
			<i class="fab fa-whatsapp fa-1x whatsapp-icon"></i>
		</div>
	</a>
</template>

<script>
export default {
	name: 'TabWhats',
	data() {
		return {
			// Vos données ici
		};
	},

	methods: {
		// Vos méthodes ici
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
.whatsapp-icon {
	color: #fff;
}

.stickedTab {
	display: flex;
	position: absolute;
	/*  */
	align-items: center;
	justify-content: center;
	box-shadow: 2px 2px 0px 0px rgb(0, 11, 17);
	background: linear-gradient(to top, #1091da 0%, #0e81c2 26%, #0e679b 100%);

	background: linear-gradient(to top, #c0c0c0 0%, #a6a6a6 26%, #8c8c8c 100%);

	background: linear-gradient(130deg, #e0e0e0 0%, #c0c0c0 26%, #808080 100%);

	border: 1px solid #007928;
	right: -1px;
	bottom: 120px;
	bottom: calc(100vh / 3 + 50px);
	z-index: 100;
	border-radius: 10px 0 0 10px;
	text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
	width: 35px;
	height: 35px;
	transition: width 0.3s ease; /* Adding transition for smooth animation */
}

.stickedTab:hover {
	width: 60px;
}

i {
	font-size: 1.2rem;
	margin: 0 0 3px 0;
}
</style>
