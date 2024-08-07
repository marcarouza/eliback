window.addEventListener('DOMContentLoaded', () => {
	const socket = io('http://127.0.0.1:5555');

	const messInput = document.getElementById('messInput');
	messInput.focus();

	const myDiv = document.createElement('div');

	const addDiv = (text) => {
		const allMess = document.getElementById('allMess');

		if (allMess) {
			const myDiv = document.createElement('div');
			myDiv.classList.add('alert', 'alert-secondary', 'buble1');
			myDiv.textContent = text;
			allMess.appendChild(myDiv);
		} else {
			console.error('Element with ID "allMess" not found.');
		}
	};

	addDiv('Hello World!');

	const sendMess = (e) => {
		e.preventDefault();

		const messTxt = messInput.value.trim();
		console.log('🚀 ~ messTxt:', messTxt);

		if (messTxt) {
			const messEl = document.createElement('div');

			socket.emit('message', messTxt);
		}

		messInput.value = '';
		messInput.focus();
	};

	const myForm = document.querySelector('form');
	myForm.addEventListener('submit', sendMess);

	socket.on('connect', () => {
		console.log('Connected to server', socket.id); // console inspecteur
	});

	socket.on('message', (data) => {
		console.log('message : ', data);
		const messageText = `${data.user}: ${data.text}`;
		addDiv(messageText);
	});
});
