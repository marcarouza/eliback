<template>
  <div>
    <!-- Le contenu principal du composant peut être ajouté ici -->
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  watch: {
    pageTitle(newTitle) {
      document.title = newTitle;
    },
  },
  mounted() {
    document.title = this.pageTitle;
  },
};
</script>
