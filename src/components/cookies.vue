<template>
	<div class="cookie-viewer container m-5">
		<h2>Cookies du site</h2>
		<div v-if="cookies.length === 0" class="no-cookies">
			Aucun cookie trouvé.
		</div>
		<div v-else class="cookie-list">
			<div
				v-for="(cookie, index) in cookies"
				:key="index"
				class="cookie-item"
			>
				<h3>{{ cookie.name }}</h3>
				<table>
					<tr>
						<td><strong>Valeur:</strong></td>
						<td>{{ cookie.value }}</td>
					</tr>
					<tr v-if="cookie.domain">
						<td><strong>Domaine:</strong></td>
						<td>{{ cookie.domain }}</td>
					</tr>
					<tr v-if="cookie.path">
						<td><strong>Chemin:</strong></td>
						<td>{{ cookie.path }}</td>
					</tr>
					<tr v-if="cookie.expires">
						<td><strong>Expire le:</strong></td>
						<td>{{ formatDate(cookie.expires) }}</td>
					</tr>
					<tr>
						<td><strong>Sécurisé:</strong></td>
						<td>{{ cookie.secure ? 'Oui' : 'Non' }}</td>
					</tr>
					<tr>
						<td><strong>SameSite:</strong></td>
						<td>{{ cookie.sameSite || 'Non spécifié' }}</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Cookie',
	data() {
		return {
			cookies: [],
			localUser: null,
		};
	},
	mounted() {
		this.checkLocaluser();
		this.readCookies();
		this.getCookieAttribute();
		this.getCookieByName();
		this.isCookieSecure();
	},
	methods: {
		checkLocaluser() {
			this.localUser =
				JSON.parse(localStorage.getItem('localUser')) || null;
			console.log(
				'✅ FROM NAVOK ==> this.localUser :',
				this.localUser
			);
		},
		readCookies() {
			if (localUser) {
				const cookieList = document.cookie.split(';');
				this.cookies = cookieList.map((cookie) => {
					const [name, value] = cookie.trim().split('=');
					return {
						name: name,
						value: value,
						domain: this.getCookieAttribute(name, 'domain'),
						path: this.getCookieAttribute(name, 'path'),
						expires: this.getCookieAttribute(name, 'expires'),
						secure: this.isCookieSecure(name),
						sameSite: this.getCookieAttribute(
							name,
							'samesite'
						),
					};
				});
			}
		},
		getCookieAttribute(name, attribute) {
			const cookie = this.getCookieByName(name);
			if (cookie) {
				const match = cookie.match(
					new RegExp(`${attribute}=([^;]+)`)
				);
				return match ? match[1] : null;
			}
			return null;
		},
		getCookieByName(name) {
			const cookies = document.cookie.split(';');
			for (let cookie of cookies) {
				if (cookie.trim().startsWith(name + '=')) {
					return cookie.trim();
				}
			}
			return null;
		},
		isCookieSecure(name) {
			const cookie = this.getCookieByName(name);
			return cookie ? cookie.toLowerCase().includes('secure') : false;
		},
		formatDate(dateString) {
			if (!dateString) return 'Non spécifié';
			return new Date(dateString).toLocaleString();
		},
	},
};
</script>

<style scoped>
.cookie-viewer {
	font-family: Arial, sans-serif;
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
}

.cookie-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 20px;
}

.cookie-item {
	border: 1px solid #ddd;
	padding: 15px;
	border-radius: 5px;
	background-color: #f9f9f9;
}

table {
	width: 100%;
	border-collapse: collapse;
}

td {
	padding: 5px;
	border-bottom: 1px solid #eee;
}

.no-cookies {
	text-align: center;
	color: #666;
	font-style: italic;
}
</style>
