<template>
	<head>
		<meta charset="utf-8" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1, shrink-to-fit=no"
		/>
		<meta name="description" content="" />
		<meta name="author" content="" />
		<title>{{ pageTitle }}</title>
		<!-- Favicon-->
		<link rel="icon" type="image/x-icon" href="elilogo" />
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="favicon-apple-touch"
		/>
		<link rel="icon" type="image/png" sizes="32x32" href="favicon32" />
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href="favicon/favicon-16x16.png"
		/>
		<!-- <link rel="manifest" href="webmanifest" /> -->
		<!-- Custom Google font-->
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link
			rel="preconnect"
			href="https://fonts.gstatic.com"
			crossorigin=""
		/>
		<link
			href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
			rel="stylesheet"
		/>

		<!--  -->

		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
		/>
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
			rel="stylesheet"
		/>

		<!--  -->
		<!--  -->
		<!--  -->

		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link
			rel="preconnect"
			href="https://fonts.gstatic.com"
			crossorigin=""
		/>
		<link
			href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
			rel="stylesheet"
		/>

		<!--  -->

		<link
			href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css"
			rel="stylesheet"
		/>

		<link
			href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
			rel="stylesheet"
		/>
	</head>
</template>

<script>
export default {
	props: {
		pageTitle: {
			type: String,
			required: true,
		},
	},
	watch: {
		pageTitle(newTitle) {
			document.title = newTitle;
		},
	},
	mounted() {
		document.title = this.pageTitle;
	},
};
</script>
