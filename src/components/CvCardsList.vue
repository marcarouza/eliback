<script setup lang="ts">
// import { ref } from 'vue';
import CvCardSkills from './CvCardSkills.vue';

interface CVExperience {
  id: number;
  timePeriod: string;
  jobTitle: string;
  company: string;
  location: string;
  projectTitle: string;
  skills: string[];
  accentColor?: string;
}

interface Props {
  experiences: CVExperience[];
  staggered?: boolean;
  isDark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  staggered: true,
  isDark: false
});

// List of possible accent colors for staggered view
const accentColors = [
  '#1266f1', // Primary blue
  '#aa66cc', // Purple
  '#00c851', // Green
  '#ff4444', // Red
  '#ffbb33', // Orange
  '#2bbbad', // Teal
];

const getAccentColor = (index: number, experience: CVExperience) => {
  if (experience.accentColor) {
    return experience.accentColor;
  }
  
  if (props.staggered) {
    return accentColors[index % accentColors.length];
  }
  
  return '#1266f1'; // Default blue
};
</script>

<template>
  <div class="cv-cards-container p-5">
    <div v-for="(experience, index) in experiences" :key="experience.id" class="cv-card-wrapper">
      <CvCardSkills
        :timePeriod="experience.timePeriod"
        :jobTitle="experience.jobTitle"
        :company="experience.company"
        :location="experience.location"
        :projectTitle="experience.projectTitle"
        :skills="experience.skills"
        :accentColor="getAccentColor(index, experience)"
        :bgColor="isDark ? '#343a40' : '#ffffff'"
        :isDark="isDark"
      />
    </div>
  </div>
</template>

<style scoped>
.cv-cards-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cv-card-wrapper {
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply staggered animation delay */
.cv-card-wrapper:nth-child(1) { animation-delay: 0.1s; }
.cv-card-wrapper:nth-child(2) { animation-delay: 0.2s; }
.cv-card-wrapper:nth-child(3) { animation-delay: 0.3s; }
.cv-card-wrapper:nth-child(4) { animation-delay: 0.4s; }
.cv-card-wrapper:nth-child(5) { animation-delay: 0.5s; }
.cv-card-wrapper:nth-child(6) { animation-delay: 0.6s; }
</style>