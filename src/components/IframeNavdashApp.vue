<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'NavDash'
  },
  height: {
    type: String,
    default: '600px'
  },
  width: {
    type: String,
    default: '100%'
  }
});

const isLoading = ref(false);
const iframeRef = ref<HTMLIFrameElement | null>(null);

const handleIframeLoad = () => {
  isLoading.value = false;
};

onMounted(() => {
  if (iframeRef.value) {
    iframeRef.value.addEventListener('load', handleIframeLoad);
  }
});
</script>

<template>
  <div class="iframe-container">
    <div v-if="isLoading" class="iframe-loader">
      <div class="loader-spinner"></div>
      <p>Chargement de l'application...</p>
    </div>
    <iframe
      ref="iframeRef"
      :src="src"
      :title="title"
      :style="{ height, width }"
      frameborder="0"
      @load="handleIframeLoad"
      class="embedded-iframe"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
</template>

<style scoped>
.iframe-container {
  position: relative;
  width: 100%;
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.embedded-iframe {
  border: none;
  width: 100%;
  transition: opacity 0.3s ease;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.iframe-loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;
}

.loader-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #646cff;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>