<template>

  <div  id="chatPopin2"     class="hide-inactive pop">

    <div class="row d-flex justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">

        <div class="card" id="chat1" style="border-radius: 15px;">
          <div
            class="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
            style="border-top-left-radius: 15px; border-top-right-radius: 15px;">
            <i class="fas fa-angle-left"></i>
            <p class="mb-0 fw-bold">Live chat</p>
            <i class="fas fa-times"></i>
          </div>
          <div class="card-body">

            <div class="d-flex flex-row justify-content-start mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
              <div class="p-3 ms-3" style="border-radius: 15px; background-color: rgba(57, 192, 237,.2);">
                <p class="small mb-0">Hello and thank you for visiting MDBootstrap. Please click the video
                  below.</p>
              </div>
            </div>

            <div class="d-flex flex-row justify-content-end mb-4">
              <div class="p-3 me-3 border bg-body-tertiary" style="border-radius: 15px;">
                <p class="small mb-0">Thank you, I really like your product.</p>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
            </div>

            <div class="d-flex flex-row justify-content-start mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
              <div class="ms-3" style="border-radius: 15px;">
                <div class="bg-image">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp"
                    style="border-radius: 15px;" alt="video">
                  <a href="#!">
                    <div class="mask"></div>
                  </a>
                </div>
              </div>
            </div>

            <div class="d-flex flex-row justify-content-start mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
              <div class="p-3 ms-3" style="border-radius: 15px; background-color: rgba(57, 192, 237,.2);">
                <p class="small mb-0">...</p>
              </div>
            </div>

            <!-- <div data-mdb-input-init class="form-outline ">
              <textarea class="form-control bg-body-tertiary retrait " id="textAreaExample" rows="4"></textarea>
              <label class="form-label" for="textAreaExample">Type your message</label>
            </div> -->


		<div class="chat-foot">
			<form id="msg_form" class="chatInput" @submit.prevent="sendMess">
				<input
					id="messInput"
					type="text"
					class="form-control"
					:placeholder="
						isLoggedIn
							? 'Votre message...'
							: 'Connectez-vous pour chatter'
					"
					:disabled="!isLoggedIn"
				/>
				<button
					id="sendMsg"
					class="btn btn-primary send-button"
					:disabled="!isLoggedIn"
				>
					<i class="bi bi-send"></i>
				</button>
			</form>
		</div>

          </div>
        </div>

      </div>
    </div>

  </div>

  <div @click="displayChat" id="chatToggleBtn" class="stickedTab">
		<i class="bi bi-chat-dots-fill chat_bubble"></i>
	</div>

</template>

<script >
import { toRefs } from 'vue';

import socket from '../socket/socketClient.js';


import { userGlobalService, userID, userPseudo, isLoggedIn } from '@/services/userGlobalService';



const { user } = toRefs(userGlobalService);

console.log('🚀 ------------------------------------------🚀')
console.log('🚀 ~ ChatBox2025.vue:112 ~ user  ==> ', user)
console.log('🚀 ------------------------------------------🚀')



// const router = useRouter();
// console.log('✅ 🐱  FROM ChatBox ===> SOCKET CLIENT : ', socket);

export default {
    name: 'ChatBox2025',

    data() {
        return {
            membersonline: 0,
            isLoggedIn: false,
            localUserSession: null,
            pseudo: '',
            welcomeMsg: 'Pour utiliser la messagerie, vous devez être connecté(e) !',
            completeID: null,
            shortID: null,
            userFromSession: '',
            isConnected: false,
            reconnectAttempts: 0,
        };
    },

    mounted() {
        this.hideChat();
      //   this.checkLocalUserSession();
		//  this.checkUSER();

		   // console.log('************ User:', user.value);
  console.log('************ UserID:', userID.value);
  console.log('************ UserPseudo:', userPseudo.value);
  console.log('************ IsLoggedIn:', isLoggedIn.value);
    },

    beforeUnmount() {
      //   this.disconnectUser();
      //   socket.off('connect');
    },

    methods: {
        checkUSER() {
            if (user ) {
                try {
                    this.isLoggedIn = true;
                    this.pseudo = user.pseudo;
                    this.welcomeMsg = `👋 ${this.pseudo}, vous êtes en ligne ! Naviguer sur le site n'affectera pas votre fil de discussion ... contrairement au rafraîchissement volontaire de la page !`;
                    this.initSocket(this.pseudo);
                    this.displayChat();
                } catch (err) {
                    console.error('FROM checkLocalUserSession => Invalid JSON in sessionStorage:', err);
                    this.localUserSession = null;
                    this.isLoggedIn = false;
                }
            } else {
                this.welcomeMsg = 'Pour utiliser la messagerie, vous devez être connecté(e) !';
                this.isLoggedIn = false;
                this.hideChat();
            }
            this.serverMsg(this.welcomeMsg);
        },


        setServerPseudo() {
            socket.pseudo = user.pseudo;
            socket.emit('setPseudo', { pseudo: user.pseudo });
        },

        initSocket() {
            this.setServerPseudo();
            if (this.isLoggedIn) {
                socket.on('connect', () => {
                    this.isConnected = true;
                    this.reconnectAttempts = 0;
                    this.completeID = socket.id;

                    if (this.completeID) {
                        this.shortID = this.completeID.substring(0, 5);
                        socket.shortID = this.shortID;
                        socket.pseudo = this.pseudo;
                        console.log(`📬 ${this.shortID} = ${this.pseudo} est CONNECTÉ !`);
                    }
                });

                socket.on('disconnect', (reason) => {
                    console.log('🚀 ~ socket.on ~ reason:', reason);
                    this.isConnected = false;

                    if (reason === 'io server disconnect') {
                        socket.connect();
                    }
                });

                socket.on('reconnect', (attemptNumber) => {
                    console.log(`Reconnecté au serveur après ${attemptNumber} tentatives`);
                    this.isConnected = true;
                    this.createBubble('✅ Connexion rétablie', 'bubServer');
                });

                socket.on('message', (data) => {
                    console.log('MSG reçu : ', data);
                    this.createBubble(data, 'bub2');
                });

                socket.on('userLeft', (data) => {
                    this.createBubble(data, 'bubServer');
                });

                socket.on('userConnected', (data) => {
                    console.log('🚀 ~ userConnected ==> data:', data);
                    this.createBubble(data, 'bubServer');
                });
            }
        },

        serverMsg(message) {
            console.log('🚀 ~ serverMsg ~ message:', message);

            const allMess = document.getElementById('allMess');
            if (!allMess) {
                console.error('Element with ID "allMess" not found.');
                return;
            }

            const myServerDiv = document.createElement('div');
            myServerDiv.classList.add('bubServer');

            const span = document.createElement('span');
            span.textContent = message;
            myServerDiv.appendChild(span);

            allMess.appendChild(myServerDiv);
        },

        sendMess() {
            const messInput = document.getElementById('messInput');

            if (!messInput) {
                console.error('Element with ID "messInput" not found.');
                return;
            }

            const messTxt = messInput.value.trim();
            if (messTxt) {
                socket.emit('message', `${this.pseudo} : ${messTxt}`);
                this.createBubble(`Vous : ${messTxt}`, 'bub1');
                messInput.value = '';
                messInput.focus();
            }
        },

        displayChat() {
            const chatPopin2 = document.getElementById('chatPopin2');
            if (!chatPopin2) {
                console.error('Element with ID "chatPopin2" not found.');
                return;
            }
            chatPopin2.classList.toggle('hide-inactive');
        },

        hideChat() {
            const chatPopin2 = document.getElementById('chatPopin2');
            if (chatPopin2) {
                chatPopin2.classList.add('hide-inactive');
            }
        },

        createBubble(message, style) {
            const allMess = document.getElementById('allMess');

            if (!allMess) {
                console.error('Element with ID "allMess" not found.');
                return;
            }

            const myDiv = document.createElement('div');
            myDiv.classList.add(style);

            const span = document.createElement('span');
            span.textContent = message;
            myDiv.appendChild(span);

            allMess.appendChild(myDiv);
        },

        disconnectUser() {
            socket.emit('userLeft', { ID: this.shortID, pseudo: this.pseudo });
        },
    },
};
</script>



<style>
.chatInput {
	display: flex;
	flex-direction: row;
	justify-content: stretch;
	width: 100%;
	padding: 0px;
	margin-top: 1rem;

	input {
		padding: 1rem;
		border-radius: 0 0 0 var(--round2);
		border: none;
		background: rgb(255, 255, 255);
		background: linear-gradient(
			208deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(0, 174, 255, 0.06626400560224088) 100%
		);
	}

	input::before,
	input::after {
		content: '';
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	input::before {
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(to right, #007bff, #00ffcc);
	}

	input::after {
		bottom: 0;
		left: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(to bottom, #007bff, #00ffcc);
	}

	input::before {
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(to right, #007bff, #00ffcc);
	}
}

.form-control {
padding-top: 1.5rem !important;
}
.bg-info{
	background-color: #007bff !important;
}

.membersonline {
	font-size: 0.7rem;
	color: #fff200cf;
	text-shadow: -3px 2px 5px rgba(0, 13, 51, 0.6);
}




.pop {
	position: fixed;
	bottom: 20px;
	right: 40px;
	z-index: 1000;
}

.hide-inactive {
	opacity: 0;
	pointer-events: none;
	transform: translateX(120%);
	/* Assurez-vous que les transitions sont définies ici */
	transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.show-active {
	opacity: 1;
	pointer-events: auto;
	transform: translateX(0);
	/* Assurez-vous que les transitions sont définies ici */
	transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}





.btn-close {
	width: 5px !important;
	height: 5px !important;
	border-radius: 50%;
	background-color: #004fa4;
	color: #fff;
	transition: all 0.3s ease-in-out;
}

.btn-close:hover {
	border: 2px solid rgba(255, 255, 255, 0.503) !important;
}

.chat-popin.show {
	opacity: 1;
	visibility: visible;
}


.chat-footer {
	padding: 1px;
	display: flex;
	width: 100%;
	justify-content: flex-start;
	align-items: center;
	box-shadow: 0px 22px 69px rgb(1 8 87);
}

.send-button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15%;
	border-radius: 3px 0 3px 3px !important;
}

.smooth.display.none {
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.3s ease, visibility 0.3s ease;
}

.smooth.display.show {
	opacity: 1;
	visibility: visible;
}

.hidden-button {
	opacity: 0;
	pointer-events: none;
}

.chat-button {
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 1000;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	background-color: #007bff;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.stickedTab {
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 2px 2px 2px 1px #000000c9;
	background: linear-gradient(to top, #e0e0e0 0%, #c0c0c0 26%, #808080 100%);
	border: 1px solid #0077ff;
	position: absolute;
	right: 0;
	bottom: 70px;
	bottom: calc((100vh / 3));
	z-index: 100;
	border-radius: 10px 0 0 10px;
	text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
	width: 45px;
	height: 45px;
	transition: width 0.3s ease;
}

.stickedTab:hover {
	width: 70px;
}

.form-control {
	color: rgb(38, 38, 38) !important;
	background-color: #c9c9c9;
	height: auto;
}

.pseudo {
	height: min-content;
	max-width: 600px;
	margin: 0 auto;
	padding: 0;
	overflow: hidden;
}

.pseudo button {
	background-color: #0056b3;
	border-radius: 0.5rem;
	color: #ffffff;
	padding: 0.5rem;
	margin: 0 0 0 0.5rem;
	font-size: small;
	width: max-content;
}

.pseudo .form-control {
	color: white !important;
	background-color: #2b2b2b;
	height: 1rem;
	border: none;
}

#tempo {
	font-size: 2rem;
	color: rgb(0, 123, 255);
}

.tempo {
	text-align: center;
}

.allMess {
	display: inline-flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	flex: 20;
	border-radius: var(--round1) 0 0 0;
	padding: 1rem;
	overflow-y: scroll;
	background-color: #101010;
}

.chatInput {
	display: flex;
	flex-direction: row;
	justify-content: stretch;
	width: 100%;
	padding: 0px;

	input {
		padding: 1rem;
		border-radius: 0 0 0 var(--round2);
		border: none;
		background: rgb(255, 255, 255);
		background: linear-gradient(
			208deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(0, 174, 255, 0.06626400560224088) 100%
		);
	}

	input::before,
	input::after {
		content: '';
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	input::before {
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(to right, #007bff, #00ffcc);
	}

	input::after {
		bottom: 0;
		left: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(to bottom, #007bff, #00ffcc);
	}

	input::before {
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(to right, #007bff, #00ffcc);
	}
}

.bub1 {
	width: max-content;
	background: radial-gradient(
		circle at 20% 60%,
		rgb(230, 255, 255) 0%,
		rgb(171, 255, 255) 100%
	);
	border-radius: 5px 10px 5px 10px;
	padding: 0.8rem;
	margin-bottom: 1rem;

	margin-right: 0rem;
	margin-left: auto;

	max-width: 60%;
	font-size: 0.8rem;
	color: #101010;
	box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
	border: 1px solid #0018314f;
}

.bub2 {
	width: max-content;
	background: radial-gradient(
		circle at 20% 60%,
		rgb(230, 255, 255) 0%,
		rgb(213, 255, 135) 100%
	);
	border-radius: 0.6rem 0 0.6rem 0;
	padding: 0.8rem;
	margin-bottom: 1rem;

	margin-right: auto;
	margin-left: 0;

	max-width: 60%;
	font-size: 0.8rem;
	color: #101010;
	box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
	border: 1px solid rgb(134, 159, 88);
}

.bubServer {
	width: max-content;
	background-color: #101010;
	background: radial-gradient(
		circle at 20% 60%,
		rgb(240, 240, 240) 0%,
		rgb(180, 180, 180) 100%
	);
	border-radius: 0.6rem;
	padding: 0.8rem;
	margin-bottom: 1rem;
	margin-left: 0rem;
	margin-right: 1rem;
	max-width: 80%;
	font-size: 0.7rem;
	color: #004fa4;
	box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);
	border: 1px solid #006cdf86;
}

/* Style pour la modale de connexion */
.modal-dialog {
	max-width: 300px;
	margin-top: 300px;
}

.modal-content {
	border-radius: 0.6rem;
}

.modal-header {
	background-color: #007bff;
	color: #ffffff;
	border-radius: 0.5rem 0.5rem 0 0;
}

.modal-body {
	background-color: #555555;
	margin-top: -0.1rem;
	border-radius: 0 0 0.5rem 0.5rem;
}

.btn-primary {
	background-color: #007bff;
	border-color: #007bff;
}

.btn-primary:hover {
	background-color: #0056b3;
	border-color: #0056b3;
}
</style>