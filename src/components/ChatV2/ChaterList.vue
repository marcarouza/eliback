<template>
         <!-- Panneau des participants -->
         <div class="col-md-4 col-12 mb-3 mb-md-0">
            <div class="participants-panel border-end">
               <div class="participants-content">
                  <!-- En-tête du panneau participants -->
                  <div class="participants-header">
                     <h5 class="mb-0">Participants</h5>
                  </div>
                  <!-- Liste scrollable -->
                  <div class="participants-scroll">
                     <ul class="list-unstyled mb-0">
                        <li class="p-2 border-bottom bg-light">
                           <a href="#!" class="d-flex justify-content-between text-decoration-none">
                              <div class="d-flex flex-row">
                                 <div class="position-relative me-3">
                                    <img
                                       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                       alt="Marie Horwitz avatar" class="d-flex align-self-center" width="60">
                                    <span class="badge position-absolute bottom-0 end-0 badge-dot bg-success"></span>
                                 </div>
                                 <div class="pt-1">
                                    <p class="fw-bold mb-0">Marie Horwitz</p>
                                    <p class="small text-muted mb-0">Hello, Are you there?</p>
                                 </div>
                              </div>
                              <div class="pt-1">
                                 <p class="small text-muted mb-1">Just now</p>
                                 <span class="badge bg-danger rounded-pill float-end">3</span>
                              </div>
                           </a>
                        </li>
                        <li class="p-2 border-bottom">
                           <a href="#!" class="d-flex justify-content-between text-decoration-none">
                              <div class="d-flex flex-row">
                                 <div class="position-relative me-3">
                                    <img
                                       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                       alt="Alexa Chung avatar" class="d-flex align-self-center" width="60">
                                    <span class="badge position-absolute bottom-0 end-0 badge-dot bg-warning"></span>
                                 </div>
                                 <div class="pt-1">
                                    <p class="fw-bold mb-0">Alexa Chung</p>
                                    <p class="small text-muted mb-0">Lorem ipsum dolor sit.</p>
                                 </div>
                              </div>
                              <div class="pt-1">
                                 <p class="small text-muted mb-1">5 mins ago</p>
                                 <span class="badge bg-danger rounded-pill float-end">2</span>
                              </div>
                           </a>
                        </li>
                        <li class="p-2 border-bottom">
                           <a href="#!" class="d-flex justify-content-between text-decoration-none">
                              <div class="d-flex flex-row">
                                 <div class="position-relative me-3">
                                    <img
                                       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                       alt="Danny McChain avatar" class="d-flex align-self-center" width="60">
                                    <span class="badge position-absolute bottom-0 end-0 badge-dot bg-success"></span>
                                 </div>
                                 <div class="pt-1">
                                    <p class="fw-bold mb-0">Danny McChain</p>
                                    <p class="small text-muted mb-0">Lorem ipsum dolor sit.</p>
                                 </div>
                              </div>
                              <div class="pt-1">
                                 <p class="small text-muted mb-1">Yesterday</p>
                              </div>
                           </a>
                        </li>
                        <li class="p-2 border-bottom">
                           <a href="#!" class="d-flex justify-content-between text-decoration-none">
                              <div class="d-flex flex-row">
                                 <div class="position-relative me-3">
                                    <img
                                       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                       alt="Ashley Olsen avatar" class="d-flex align-self-center" width="60">
                                    <span class="badge position-absolute bottom-0 end-0 badge-dot bg-danger"></span>
                                 </div>
                                 <div class="pt-1">
                                    <p class="fw-bold mb-0">Ashley Olsen</p>
                                    <p class="small text-muted mb-0">Lorem ipsum dolor sit.</p>
                                 </div>
                              </div>
                              <div class="pt-1">
                                 <p class="small text-muted mb-1">Yesterday</p>
                              </div>
                           </a>
                        </li>
                        <li class="p-2 border-bottom">
                           <a href="#!" class="d-flex justify-content-between text-decoration-none">
                              <div class="d-flex flex-row">
                                 <div class="position-relative me-3">
                                    <img
                                       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                                       alt="Kate Moss avatar" class="d-flex align-self-center" width="60">
                                    <span class="badge position-absolute bottom-0 end-0 badge-dot bg-warning"></span>
                                 </div>
                                 <div class="pt-1">
                                    <p class="fw-bold mb-0">Kate Moss</p>
                                    <p class="small text-muted mb-0">Lorem ipsum dolor sit.</p>
                                 </div>
                              </div>
                              <div class="pt-1">
                                 <p class="small text-muted mb-1">Yesterday</p>
                              </div>
                           </a>
                        </li>
                        <li class="p-2 border-bottom">
                           <a href="#!" class="d-flex justify-content-between text-decoration-none">
                              <div class="d-flex flex-row">
                                 <div class="position-relative me-3">
                                    <img
                                       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                       alt="Ben Smith avatar" class="d-flex align-self-center" width="60">
                                    <span class="badge position-absolute bottom-0 end-0 badge-dot bg-success"></span>
                                 </div>
                                 <div class="pt-1">
                                    <p class="fw-bold mb-0">Ben Smith</p>
                                    <p class="small text-muted mb-0">Lorem ipsum dolor sit.</p>
                                 </div>
                              </div>
                              <div class="pt-1">
                                 <p class="small text-muted mb-1">Yesterday</p>
                              </div>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
</template>

<script>
export default {
	name: 'ChatterList',
	data() {
		return {
			users: [],
			user: '',
			toID: '',
			fromID: '',
			msgRes: '',
			toFriend: '',
			errorMessage: '',
			Friend: '',
			isLoggedIn: false,
			localUserSession: null,
			BoX: null,
			//
			isVisible: false,
			title: '',
			message: '',
			timestamp: '',
		};
	},

	mounted() {
		this.getLocalUser();
		this.fetchAllMembers();
		this.$emit('updatePageTitle', 'Les membres du site', true);
	},
	methods: {
		showNotif(title, message) {
			this.title = title;
			this.message = message;
			this.timestamp = new Date().toLocaleTimeString();
			this.isVisible = true;
			setTimeout(() => {
				this.hideNotif();
			}, 60000); // La notification disparaît après 5 secondes
		},

	},
};
</script>

<style scoped>



/* html et body en pleine hauteur avec fond clair */
html,
body {
   height: 100%;
   background: #f0f2f5;
   margin: 0;
}

/* Le conteneur principal occupe 85% de la hauteur de la fenêtre */
.chat-wrapper {
   height: 85vh;
   display: flex;
   flex-direction: column;
}

/* L'en-tête global ne se redimensionne pas */
.chat-header {
   flex-shrink: 0;
}

/* La zone principale prend tout l'espace restant */
.chat-main {
   flex-grow: 1;
   overflow: hidden;
}

/* Participants panel et chat zone doivent occuper toute la hauteur de leur colonne */
.participants-panel,
.chat-zone {
   height: 100%;
}

/* Dans le panneau participants, on structure le contenu en colonne */
.participants-panel .participants-content {
   display: flex;
   flex-direction: column;
   height: 100%;
}

/* L'en-tête du panneau participants a une hauteur fixe (et ne grandit pas) */
.participants-header {
   flex-shrink: 0;
   padding: 1rem;
   border-bottom: 1px solid #dee2e6;
}

/* Le conteneur scrollable prend le reste de l'espace */
.participants-scroll {
   flex-grow: 1;
   overflow-y: auto;
}

/* Pour la zone de chat, on utilise également un conteneur flexible */
.chat-zone {
   display: flex;
   flex-direction: column;
}

/* La zone des messages occupe tout l'espace disponible */
.chat-scroll {
   flex-grow: 1;
   overflow-y: auto;
}






</style>
