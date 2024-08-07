window.addEventListener('DOMContentLoaded', () => {
	//  const socket = io('http://localhost:5555');

	const sendBtn = document.getElementById('sendBtn');
	console.log('🚀 ~ sendBtn:', sendBtn, 'qui est un :', typeof sendBtn);

	const messInput = document.getElementById('messInput');
	messInput.focus();

	document.getElementById('chatToggleBtn').addEventListener('click', () => {
		const chatPopin = document.getElementById('chatPopin');
		// chatPopin.style.display =
		// 	chatPopin.style.display === 'none' ? 'block' : 'none';
		// chatPopin.classList.toggle('show-active');

		chatPopin.classList.toggle('hide-inactive');
	});

	document.getElementById('closeChatBtn').addEventListener('click', () => {
		document.getElementById('chatPopin').style.display = 'none';
	});

	sendBtn.addEventListener('click', (e) => {
		e.preventDefault();

		const messInput = document.getElementById('messInput');

		console.log('🚀 ~ messInput:', messInput);
		const messTxt = messInput.value.trim();
		console.log('🚀 ~ messTxt:', messTxt);

		if (messTxt !== '') {
			const messEl = document.createElement('div');
			messEl.textContent = messTxt;

			document.getElementById('allMess').appendChild(messEl);

			messEl.classList.add('alert', 'alert-secondary', 'buble1');
			messEl.id = 'message';

			messInput.value = ''; // Utilisation correcte de jQuery pour réinitialiser la valeur
			messInput.focus();
			messEl.scrollIntoView();
			const allMess = document.querySelectorAll('#message');

			console.log('🚀 ~ allMess:', allMess.length);
		}
	});
});
