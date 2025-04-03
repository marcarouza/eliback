<template>
  <div class="container">
    <div class="card shadow-sm">
      <div class="card-body">
        <h1 class="text-center mb-4">Compteur de Mots</h1>
        <p class="text-center mb-4 text-muted">
          Analysez rapidement votre texte : comptez les mots, caractères, espaces simples, doubles et plus encore !
        </p>

        <div class="mb-3">
          <textarea 
            v-model="textInput" 
            class="form-control" 
            rows="7" 
            placeholder="Entrez votre texte ici..."
          ></textarea>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-primary me-md-2" @click="countWords">Compter</button>
          <button class="btn btn-secondary me-md-2" @click="toUpperCase">TO UPPER CASE</button>
          <button class="btn btn-secondary me-md-2" @click="toLowerCase">TO lower CASE</button>
          <button class="btn btn-danger" @click="reset">Reset</button>
        </div>

        <div class="row mt-4">
          <div class="col-md-4" v-for="(count, key) in counts" :key="key">
            <div class="stats-card">
              <h5 class="stats-title text-center">{{ key }}</h5>
              <p class="stats-value text-center">{{ count }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WordCounter",
  data() {
    return {
      textInput: "",
      counts: {
        Signes: 0,
        Mots: 0,
        "Espaces Simples": 0,
        "Espaces Doubles": 0,
        "Espaces Triples": 0
      }
    };
  },
  methods: {
    countWords() {
      const text = this.textInput;
      this.counts.Signes = text.length;
      this.counts.Mots = text.trim().split(/\s+/).filter(Boolean).length;
      this.counts["Espaces Simples"] = (text.match(/ /g) || []).length;
      this.counts["Espaces Doubles"] = (text.match(/  /g) || []).length;
      this.counts["Espaces Triples"] = (text.match(/   /g) || []).length;
    },
    toUpperCase() {
      this.textInput = this.textInput.toUpperCase();
    },
    toLowerCase() {
      this.textInput = this.textInput.toLowerCase();
    },
    reset() {
      this.textInput = "";
      for (const key in this.counts) {
        this.counts[key] = 0;
      }
    }
  }
};
</script>

<style scoped>
/* Couleurs pour le thème sombre */
body {
  background-color: #121212;
  color: #e4e4e4;
}

.card {
  background-color: #1e1e2f;
  border: 1px solid #2a2a3b;
  border-radius: 15px;
  color: #e4e4e4;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

textarea {
  background-color: #1e1e2f;
  color: #e4e4e4;
  border: 1px solid #2a2a3b;
  resize: none;
}

h1 {
  font-weight: bold;
  color: #f0f0f0;
}

.stats-card {
  background-color: #1e1e2f;
  border: 1px solid #2a2a3b;
  border-radius: 12px;
  padding: 15px;
  color: #e4e4e4;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.stats-title {
  font-weight: 500;
  color: #a1a1aa;
}

.stats-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4dabf7;
}
</style>
