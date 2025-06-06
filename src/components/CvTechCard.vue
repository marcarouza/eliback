<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="card h-100 tech-card">
    <div class="card-header text-center py-3">
      <h5 class="card-title gradient-text mb-0">{{ item.name }}</h5>
    </div>
    <div class="card-body d-flex flex-column align-items-center justify-content-center position-relative overflow-hidden">
      <div class="gradient-circle"></div>
      <div class="icon-container mb-3 position-relative">
        <img :src="item.icon" :alt="item.name" class="tech-icon" />
      </div>
      <p class="card-text text-center mb-0 position-relative">
        <span v-if="item.prefix" class="text-muted">{{ item.prefix }} </span>
        <strong class="version-text">{{ item.version }}</strong>
      </p>
    </div>
  </div>
</template>

<style scoped>
.tech-card {
  transition: all 0.3s ease;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(156, 39, 176, 0.15);
  border-color: rgba(156, 39, 176, 0.2);
}

.tech-card:hover .gradient-circle {
  opacity: 1;
}

.card-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background: transparent;
  position: relative;
  z-index: 2;
}

.gradient-text {
  background: linear-gradient(135deg, #9c27b0, #e91e63);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 600;
}

.gradient-circle {
  position: absolute;
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, rgba(156, 39, 176, 0.1), rgba(233, 30, 99, 0.1));
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.icon-container {
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.tech-icon {
  max-height: 80px;
  max-width: 80px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.tech-card:hover .tech-icon {
  transform: scale(1.05);
}

.version-text {
  color: #2196f3;
  font-size: 1.1em;
}

@media (max-width: 768px) {
  .icon-container {
    height: 70px;
    width: 70px;
  }
  
  .tech-icon {
    max-height: 70px;
    max-width: 70px;
  }
}
</style>