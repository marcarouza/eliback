export function showNotif(title, message) {
	this.title = title;
	this.message = message;
	this.timestamp = new Date().toLocaleTimeString();
	this.isVisible = true;
	setTimeout(() => {
		this.hideNotif();
	}, 5000); // La notification disparaît après 5 secondes
}

export function hideNotif() {
	this.isVisible = false;
}
