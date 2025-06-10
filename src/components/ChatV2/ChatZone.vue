<template>
         <!-- Zone de chat -->
         <div class="col-md-8 col-12">
            <div class="chat-zone border rounded">
               <!-- Zone de messages qui occupe toute la hauteur restante -->
               <div class="chat-scroll">
                  <div class="p-3">
                     <p class="text-muted">Zone de chat</p>
                  </div>
               </div>
               <!-- Zone d'envoi (fixe en bas) -->
               <div class="p-2 border-top">
                  <div class="input-group">
                     <input type="text" class="form-control" placeholder="Envoyer un message">
                     <button class="btn btn-primary" type="button"><i class="fas fa-paper-plane"></i> Envoyer</button>
                  </div>
               </div>
            </div>
         </div>
</template>

<script>
export default {
name: 'ChatZone',
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
