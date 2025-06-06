<script setup lang="ts">
import { computed } from 'vue';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBRow, MDBCol, MDBIcon } from 'mdb-vue-ui-kit';

interface Skill {
  text: string;
  icon?: string;
}

interface Props {
  timePeriod: string;
  jobTitle: string;
  company: string;
  location: string;
  projectTitle: string;
  skills: string[] | Skill[];
  accentColor?: string;
  bgColor?: string;
  isDark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  accentColor: '#1266f1',
  bgColor: '#ffffff',
  isDark: false
});

const formattedSkills = computed(() => {
  return props.skills.map(skill => {
    if (typeof skill === 'string') {
      return { text: skill, icon: 'check-circle' };
    }
    return { text: skill.text, icon: skill.icon || 'check-circle' };
  });
});

const cardStyle = computed(() => {
  return {
    backgroundColor: props.bgColor,
    color: props.isDark ? '#fff' : '#333',
    transition: 'all 0.3s ease',
    border: 'none'
  };
});

const accentStyle = computed(() => {
  return {
    color: props.accentColor,
    fontWeight: 'bold'
  };
});

const leftSideStyle = computed(() => {
  return {
    borderRight: props.isDark 
      ? '1px solid rgba(255,255,255,0.5)' 
      : '1px solid rgba(0,0,0,0.3)',
    background: props.isDark 
      ? 'rgba(0,0,0,0.05)' 
      : 'linear-gradient(90deg, #ffffff 0%, #e0e0e0 100%)',
    padding: '20px',
    borderRadius: '0.5rem 0 0 0.5rem'
  };
});

</script>

<template>
  <MDBCard class="cv-card mb-4 shadow-sm" hover :style="cardStyle">
    <MDBCardBody class="p-0">
      <MDBRow class="g-0">
        <!-- Left side with timeline and job details -->
        <MDBCol md="4" class="left-side" :style="leftSideStyle">
          <div class="time-period" :style="accentStyle">
            {{ timePeriod }}
          </div>
          <div class="job-title mt-3">
            <h4>{{ jobTitle }}</h4>
          </div>
          <div class="company-details mt-2">
            <div class="company">{{ company }}</div>
            <div class="location text-muted">
              <small>{{ location }}</small>
            </div>
          </div>
        </MDBCol>
        
        <!-- Right side with project and skills -->
        <MDBCol md="8" class="right-side p-4">
          <MDBCardTitle class="project-title mb-3">
            {{ projectTitle }}
          </MDBCardTitle>
          
          <ul class="skills-list">
            <li v-for="(skill, index) in formattedSkills" :key="index" class="skill-item">
              <MDBIcon :icon="skill.icon" :style="accentStyle" class="me-2" />
              {{ skill.text }}
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBCardBody>
  </MDBCard>
</template>

<style scoped>

.metal-background {
  background: linear-gradient(135deg, #f8f8f8 0%, #cfcfcf 50%, #f8f8f8 100%);
}

.cv-card {
  border-radius: 0.75rem;
  overflow: hidden;
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
}

.cv-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.time-period {
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  font-weight: 600;
  word-break: break-word;
}

.job-title h4 {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.company-details {
  font-size: clamp(0.9rem, 2vw, 1rem);
}

.location {
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
}

.project-title {
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  font-weight: 600;
  line-height: 1.4;
}

.skills-list {
  list-style: none;
  padding-left: 0;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.skill-item {
  padding: 0.4rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
}

.skill-item:hover {
  transform: translateX(5px);
}

/* Mobile Optimizations */
@media (max-width: 767.98px) {
  .left-side {
    border-right: none !important;
    border-radius: 0.5rem 0.5rem 0 0 !important;
  }
  
  .right-side {
    padding: 1.25rem !important;
  }
  
  .skills-list {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
  
  .cv-card {
    margin: 0.5rem 0;
  }
}

/* Tablet Optimizations */
@media (min-width: 768px) and (max-width: 991.98px) {
  .skills-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Print Optimizations */
@media print {
  .cv-card {
    break-inside: avoid;
    page-break-inside: avoid;
    box-shadow: none !important;
    border: 1px solid #ddd;
  }
  
  .cv-card:hover {
    transform: none;
    box-shadow: none !important;
  }
}
</style>