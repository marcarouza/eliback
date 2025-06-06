<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBBtn, MDBBadge } from 'mdb-vue-ui-kit';
import { projectsData, type Project } from './01data/projectsData';
import { useTheme } from './01data/useTheme';

const { isDarkMode, theme } = useTheme();
const visibleProjects = ref<Project[]>([]);
const showAllProjects = ref(false);

// Control how many projects to show initially
const initialProjectCount = 3;

// Initialize with initial set of projects
onMounted(() => {
  visibleProjects.value = projectsData.value.slice(0, initialProjectCount);
});

// Toggle between showing all projects and initial set
const toggleProjectsView = () => {
  if (showAllProjects.value) {
    visibleProjects.value = projectsData.value.slice(0, initialProjectCount);
  } else {
    visibleProjects.value = [...projectsData.value];
  }
  showAllProjects.value = !showAllProjects.value;
};

// Section title styling with gradient to match existing sections
const sectionTitleStyle = computed(() => ({
  display: 'inline-block',
  backgroundImage: 'linear-gradient(to right, hsl(241, 80%, 54%), hsl(327, 77%, 49%))',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  fontWeight: '600',
  marginBottom: '1.5rem',
  fontSize: '2rem'
}));

// Card styles based on theme
const cardStyle = computed(() => ({
  backgroundColor: isDarkMode.value ? theme.value.cardBg : '#fff',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  borderRadius: '10px',
  overflow: 'hidden',
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
}));

// Function to open project URL in new tab
const openProjectUrl = (url: string) => {
  window.open(url, '_blank');
};
</script>

<template>
  <div class="projects-section mt-5 mb-5">
    <h2 :style="sectionTitleStyle">Mes Projets Récents</h2>
    
    <MDBRow class="g-4">
      <MDBCol v-for="project in visibleProjects" :key="project.id" cols="12" sm="6" lg="4">
        <MDBCard 
          :style="cardStyle" 
          class="project-card h-100"
          @click="openProjectUrl(project.url)"
        >
          <div class="card-image-wrapper">
            <MDBCardImg 
              :src="project.imageUrl" 
              position="top" 
              alt="Image du projet" 
              class="project-image"
            />
            <div class="project-overlay">
              <MDBBtn 
                color="light" 
                class="visit-btn"
                @click.stop="openProjectUrl(project.url)"
              >
                Visiter le site
              </MDBBtn>
            </div>
          </div>
          
          <MDBCardBody>
            <div class="accent-bar" :style="{ backgroundColor: project.accentColor }"></div>
            
            <MDBCardTitle class="fw-bold mb-3">{{ project.title }}</MDBCardTitle>
            <MDBCardText class="mb-3">{{ project.description }}</MDBCardText>
            
            <div class="d-flex flex-wrap gap-2 mt-auto pt-2">
              <MDBBadge 
                v-for="tag in project.tags" 
                :key="tag" 
                :color="isDarkMode ? 'light' : 'primary'"
                class="tag-badge"
                pill
              >
                {{ tag }}
              </MDBBadge>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    
    <div class="text-center mt-4">
      <MDBBtn 
        color="primary" 
        outline 
        class="toggle-projects-btn" 
        @click="toggleProjectsView"
      >
        {{ showAllProjects ? 'Voir moins' : 'Voir tous les projets' }}
      </MDBBtn>
    </div>
  </div>
</template>

<style scoped>
.projects-section {
  padding: 1rem 0;
}

.project-card {
  cursor: pointer;
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15) !important;
}

.card-image-wrapper {
  position: relative;
  overflow: hidden;
  height: 200px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.visit-btn {
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.project-card:hover .visit-btn {
  transform: translateY(0);
}

.accent-bar {
  height: 4px;
  width: 60px;
  margin-bottom: 15px;
  border-radius: 2px;
}

.tag-badge {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.35rem 0.65rem;
}

.toggle-projects-btn {
  margin-top: 2rem;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.toggle-projects-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .card-image-wrapper {
    height: 160px;
  }
  
  .project-overlay {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }
  
  .visit-btn {
    transform: translateY(0);
  }
}
</style>