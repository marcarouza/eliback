<template>
	<head>
		<title>{{ pageTitle }}</title>
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
