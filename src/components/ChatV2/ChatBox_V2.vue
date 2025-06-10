<template>
   <!-- Panneau des participants -->
    <!-- Chat Bubble -->
    <div class="chat-bubble" :class="{ active: showChatBox }" @click="toggleChatBox">
      <i class="fas fa-comments"></i>
      <div class="chat-bubble-notification" v-if="hasNewMessages">3</div>
    </div>

    <!-- Chat Box -->
    <div class="chat-box" :class="{ show: showChatBox }">
      <div class="chat-box-header">
        <div class="d-flex align-items-center">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=support&backgroundColor=b6e3f4" 
               alt="Support" class="chat-box-avatar me-2">
          <div>
            <h6 class="mb-0">Support ChatApp</h6>
            <small class="text-success">
              <i class="fas fa-circle me-1" style="font-size: 6px;"></i>
              En ligne
            </small>
          </div>
        </div>
        <div class="chat-box-actions">
          <button class="chat-box-action" @click="openFullScreenChat" title="Ouvrir en plein écran">
            <i class="fas fa-expand"></i>
          </button>
          <button class="chat-box-action" @click="closeChatBox" title="Fermer">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      
      <div class="chat-box-messages">
        <div class="chat-box-message">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=support&backgroundColor=b6e3f4" 
               alt="Support" class="chat-box-message-avatar">
          <div class="chat-box-message-content">
            <div class="chat-box-message-bubble">
              Bonjour ! 👋 Comment puis-je vous aider aujourd'hui ?
            </div>
            <div class="chat-box-message-time">Il y a 2 minutes</div>
          </div>
        </div>
        
        <div v-for="message in chatBoxMessages" :key="message.id" class="chat-box-message" :class="{ own: message.isOwn }">
          <img v-if="!message.isOwn" 
               src="https://api.dicebear.com/7.x/avataaars/svg?seed=support&backgroundColor=b6e3f4" 
               alt="Support" class="chat-box-message-avatar">
          <div class="chat-box-message-content">
            <div class="chat-box-message-bubble">
              {{ message.text }}
            </div>
            <div class="chat-box-message-time">{{ message.time }}</div>
          </div>
          <img v-if="message.isOwn" 
               src="https://api.dicebear.com/7.x/avataaars/svg?seed=me&backgroundColor=ffd5dc" 
               alt="Moi" class="chat-box-message-avatar">
        </div>
      </div>
      
      <div class="chat-box-input">
        <div class="input-group">
          <input 
            v-model="chatBoxMessage" 
            type="text" 
            class="form-control" 
            placeholder="Tapez votre message..."
            @keypress.enter="sendChatBoxMessage"
          >
          <button class="btn btn-primary" @click="sendChatBoxMessage" :disabled="!chatBoxMessage.trim()">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
        <div class="chat-box-footer">
          <small class="text-muted">
            <i class="fas fa-expand-arrows-alt me-1"></i>
            <a href="#" @click.prevent="openFullScreenChat" class="text-decoration-none">
              Ouvrir en plein écran pour continuer la conversation
            </a>
          </small>
        </div>
      </div>
    </div>

    <!-- Chat Box Backdrop -->
    <div class="chat-box-backdrop" :class="{ show: showChatBox }" @click="closeChatBox"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ChatBoxMessage {
  id: string
  text: string
  time: string
  isOwn: boolean
}

const showChatBox = ref(false)
const hasNewMessages = ref(true)
const chatBoxMessage = ref('')
const chatBoxMessages = ref<ChatBoxMessage[]>([])

const emit = defineEmits<{
  openFullScreenChat: []
}>()

const toggleChatBox = () => {
  showChatBox.value = !showChatBox.value
  if (showChatBox.value) {
    hasNewMessages.value = false
  }
}

const closeChatBox = () => {
  showChatBox.value = false
}

const openFullScreenChat = () => {
  emit('openFullScreenChat')
}

const sendChatBoxMessage = () => {
  if (!chatBoxMessage.value.trim()) return

  const message: ChatBoxMessage = {
    id: Date.now().toString(),
    text: chatBoxMessage.value.trim(),
    time: 'À l\'instant',
    isOwn: true
  }

  chatBoxMessages.value.push(message)
  chatBoxMessage.value = ''

  // Simulate response
  setTimeout(() => {
    const response: ChatBoxMessage = {
      id: (Date.now() + 2).toString(),
      text: 'Merci pour votre message ! Un agent va vous répondre sous peu.',
      time: 'À l\'instant',
      isOwn: false
    }
    chatBoxMessages.value.push(response)
  }, 1000)
}
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
