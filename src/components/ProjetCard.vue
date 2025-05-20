<template>
  <div class="card shadow border-0 rounded-4 py-3 mb-3">
    <div class="d-flex flex-column flex-lg-row align-items-top justify-content-center">
      <img
        class="img-fluid projet order-0 order-lg-1"
        :src="imgSrc"
        :alt="imgAlt"
      />
      <div class="p-5 order-1 order-lg-0">
        <h2 class="fw-bolder">{{ title }}</h2>
        <ul>
          <li v-for="(item, index) in items" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    imgSrc: { type: String, required: true },
    imgAlt: { type: String, required: true },
    title: { type: String, required: true },
    items: { type: Array, required: true }
  }
};
</script>

<style scoped>
/* Ajoutez vos styles personnalisés ici */
</style>
