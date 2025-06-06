<script setup lang="ts">
import TechCard from './CvTechCard.vue';

defineProps<{
  title: string;
  items: Record<string, any>[];
  gradientClass?: string;
}>();
</script>

<template>
  <section class="tech-section">
    <div class="d-flex align-items-center mb-4">
      <div class="gradient-icon me-3"></div>
      <h2 class="mb-0" :class="gradientClass">{{ title }}</h2>
    </div>
    
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div v-for="(item, index) in items" :key="index" class="col">
        <TechCard :item="item" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-section {
  position: relative;
  padding: 2rem 0;
}

.gradient-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #9c27b0, #e91e63);
  box-shadow: 0 4px 15px rgba(156, 39, 176, 0.3);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 4px 15px rgba(156, 39, 176, 0.3);
  }
  50% {
    box-shadow: 0 4px 25px rgba(156, 39, 176, 0.5);
  }
  100% {
    box-shadow: 0 4px 15px rgba(156, 39, 176, 0.3);
  }
}

@media (max-width: 576px) {
  h2 {
    font-size: 1.5rem;
  }
  
  .gradient-icon {
    width: 30px;
    height: 30px;
  }
}
</style>