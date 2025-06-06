import { ref, computed, onMounted } from 'vue';

export function useTheme() {
  const isDarkMode = ref(false);
  
  // Check system preference for dark mode
  const checkSystemPreference = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDarkMode.value = false;
    }
  };
  
  // Toggle between light and dark mode
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('darkMode', isDarkMode.value ? 'true' : 'false');
    applyTheme();
  };
  
  // Apply theme to document
  const applyTheme = () => {
    if (isDarkMode.value) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };
  
  // Theme object with computed properties
  const theme = computed(() => {
    return {
      isDark: isDarkMode.value,
      backgroundColor: isDarkMode.value ? '#121212' : '#f8f9fa',
      textColor: isDarkMode.value ? '#ffffff' : '#333333',
      cardBg: isDarkMode.value ? '#343a40' : '#ffffff',
    };
  });
  
  // Initialize theme
  onMounted(() => {
    const savedTheme = localStorage.getItem('darkMode');
    
    if (savedTheme) {
      isDarkMode.value = savedTheme === 'true';
    } else {
      checkSystemPreference();
    }
    
    applyTheme();
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (localStorage.getItem('darkMode') === null) {
        isDarkMode.value = e.matches;
        applyTheme();
      }
    });
  });
  
  return {
    isDarkMode,
    toggleDarkMode,
    theme
  };
}