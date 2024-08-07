<template>
	<Hero />
</template>

<script>
export default {
	name: 'Home',
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
.py-5 {
	padding-top: 3rem;
	padding-bottom: 3rem;
}

.px-5 {
	padding-left: 3rem;
	padding-right: 3rem;
}

.gx-3 {
	--bs-gutter-x: 1rem;
}

.align-items-center {
	align-items: center !important;
}

.col-xxl-5,
.col-xxl-7 {
	flex: 0 0 auto;
	width: 41.666667%;
}

.text-center {
	text-align: center !important;
}

.text-xxl-start {
	text-align: start !important;
}

.badge {
	display: inline-block;
	padding: 0.35em 0.65em;
	font-size: 75%;
	font-weight: 700;
	line-height: 1;
	text-align: center;
	white-space: nowrap;
	vertical-align: baseline;
	border-radius: 0.25rem;
}

.bg-gradient-primary-to-secondary {
	background: linear-gradient(to right, #007bff, #6c757d);
}

.text-white {
	color: #fff !important;
}

.mb-4 {
	margin-bottom: 1.5rem !important;
}

.text-uppercase {
	text-transform: uppercase !important;
}

.fs-3 {
	font-size: 1.75rem !important;
}

.fw-light {
	font-weight: 300 !important;
}

.text-muted {
	color: #6c757d !important;
}

.display-3 {
	font-size: 4.5rem !important;
}

.fw-bolder {
	font-weight: bolder !important;
}

.mb-5 {
	margin-bottom: 3rem !important;
}

.text-gradient {
	background: linear-gradient(45deg, #f3ec78, #af4261);
	-webkit-background-clip: text;
	color: transparent;
}

.d-inline {
	display: inline !important;
}

.d-grid {
	display: grid !important;
}

.gap-3 {
	gap: 1rem !important;
}

.d-sm-flex {
	display: flex !important;
}

.justify-content-sm-center {
	justify-content: center !important;
}

.justify-content-xxl-start {
	justify-content: flex-start !important;
}

.btn {
	display: inline-block;
	font-weight: 400;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	user-select: none;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: 0.25rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
	color: #fff;
	background-color: #007bff;
	border-color: #007bff;
}

.btn-lg {
	padding: 0.5rem 1rem;
	font-size: 1.25rem;
	border-radius: 0.3rem;
}

.px-5 {
	padding-left: 3rem !important;
	padding-right: 3rem !important;
}

.py-3 {
	padding-top: 1rem !important;
	padding-bottom: 1rem !important;
}

.me-sm-3 {
	margin-right: 1rem !important;
}

.fs-6 {
	font-size: 1rem !important;
}

.fw-bolder {
	font-weight: bolder !important;
}

.btn-outline-dark {
	color: #343a40;
	border-color: #343a40;
}

.btn-outline-dark:hover {
	color: #fff;
	background-color: #343a40;
	border-color: #343a40;
}

.mt-5 {
	margin-top: 3rem !important;
}

.mt-xxl-0 {
	margin-top: 0 !important;
}

.d-flex {
	display: flex !important;
}

.justify-content-center {
	justify-content: center !important;
}

.profile {
	position: relative;
	display: inline-block;
}

.bg-gradient-primary-to-secondary {
	background: linear-gradient(to right, #007bff, #6c757d);
}

.profile-img {
	border-radius: 50%;
	width: 50px;
	height: 50px;
}

.dots-1,
.dots-2,
.dots-3,
.dots-4 {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
}

/* Votre style ici */
</style>
