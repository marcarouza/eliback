<template>
	<nav>
		<ul>
			<li><a href="#home">Home</a></li>
			<li><a href="#about">About</a></li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'MyNav',
};
</script>

<style scoped>
nav {
	background-color: #333;
	color: #fff;
	padding: 1em;
}
ul {
	list-style: none;
	padding: 0;
}
li {
	display: inline;
	margin-right: 1em;
}
a {
	color: #fff;
	text-decoration: none;
}
</style>
