<template>
  <div class="app" :class="{ 'dark-mode': isDarkMode }">
    <header class="header">
      <div class="header-content">
        <h1 class="title">EcoScan</h1>
        <button class="theme-toggle" @click="toggleTheme">
          <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
      </div>
    </header>

    <main class="main-content">
      <div v-if="!currentProduct" class="scan-section">
        <div class="scan-options">
          <button class="scan-button" @click="startScan" :disabled="isAnalyzing">
            <i class="fas fa-camera"></i>
            Scanner un produit
          </button>
          <div class="or-divider">
            <span>ou</span>
          </div>
          <div class="upload-section">
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              @change="handleImageUpload"
              :disabled="isAnalyzing"
              class="file-input"
            />
            <label for="image-upload" class="upload-button">
              <i class="fas fa-upload"></i>
              Importer une image
            </label>
          </div>
        </div>
      </div>

      <div v-else class="product-section">
        <div class="product-header">
          <button class="back-button" @click="resetAnalysis">
            <i class="fas fa-arrow-left"></i>
            Retour
          </button>
          <h2 class="product-title">{{ currentProduct.name }}</h2>
        </div>

        <div class="product-content">
          <div class="product-image-container">
            <img 
              :src="currentProduct.image" 
              :alt="currentProduct.name"
              class="product-image"
              loading="lazy"
            />
          </div>

          <div class="product-details">
            <div class="impact-score">
              <div class="score-circle" :class="getScoreClass(currentProduct.score)">
                {{ currentProduct.score }}/10
              </div>
              <span class="score-label">Score environnemental</span>
            </div>

            <div class="impact-details">
              <h3>Impact environnemental</h3>
              <ul>
                <li v-for="(detail, index) in currentProduct.impactDetails" :key="index">
                  <span class="detail-label">{{ detail.label }}:</span>
                  <span class="detail-value">{{ detail.value }}</span>
                </li>
              </ul>
            </div>

            <div class="alternatives">
              <h3>Alternatives écologiques</h3>
              <div class="alternatives-grid">
                <div v-for="(alternative, index) in currentProduct.alternatives" :key="index" class="alternative-card">
                  <img 
                    :src="alternative.image" 
                    :alt="alternative.name"
                    class="alternative-image"
                    loading="lazy"
                  />
                  <div class="alternative-info">
                    <h4>{{ alternative.name }}</h4>
                    <div class="alternative-score" :class="getScoreClass(alternative.score)">
                      {{ alternative.score }}/10
                    </div>
                    <p>{{ alternative.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isAnalyzing" class="loading-overlay">
        <div class="loading-content">
          <div class="spinner"></div>
          <p class="loading-text">Analyse en cours...</p>
          <div class="progress-bar">
            <div class="progress" :style="{ width: progress + '%' }"></div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import products, { analyzeImage } from './data/products';

export default {
  name: 'App',
  data() {
    return {
      isDarkMode: false,
      isAnalyzing: false,
      progress: 0,
      currentProduct: null,
      products
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode');
    },
    async startScan() {
      this.isAnalyzing = true;
      this.progress = 0;
      
      // Simulation de l'analyse
      const interval = setInterval(() => {
        this.progress += 10;
        if (this.progress >= 100) {
          clearInterval(interval);
          this.selectRandomProduct();
        }
      }, 500);
    },
    async handleImageUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      this.isAnalyzing = true;
      this.progress = 0;

      try {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const imageData = e.target.result;
          
          // Utilisation de la fonction analyzeImage
          const analysisResult = await analyzeImage(imageData, this.products);
          console.log('Résultat de l\'analyse:', analysisResult);
          
          // Simulation de l'analyse avec progression
          const interval = setInterval(() => {
            this.progress += 10;
            if (this.progress >= 100) {
              clearInterval(interval);
              if (analysisResult && analysisResult.productId) {
                this.currentProduct = this.products[analysisResult.productId];
              } else {
                this.selectRandomProduct();
              }
              this.isAnalyzing = false;
            }
          }, 500);
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.error('Erreur lors de l\'analyse de l\'image:', error);
        this.isAnalyzing = false;
      }
    },
    selectRandomProduct() {
      const productKeys = Object.keys(this.products);
      const randomKey = productKeys[Math.floor(Math.random() * productKeys.length)];
      this.currentProduct = this.products[randomKey];
      this.isAnalyzing = false;
    },
    resetAnalysis() {
      this.currentProduct = null;
    },
    getScoreClass(score) {
      if (score >= 8) return 'score-high';
      if (score >= 5) return 'score-medium';
      return 'score-low';
    }
  },
  mounted() {
    // Vérifier la préférence de thème de l'utilisateur
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode = prefersDark;
    if (prefersDark) {
      document.body.classList.add('dark-mode');
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

:root {
  --primary-color: #4CAF50;
  --primary-dark: #388E3C;
  --primary-light: #81C784;
  --text-primary: #333;
  --text-secondary: #666;
  --background: #f5f5f5;
  --card-background: #fff;
  --border-color: #e0e0e0;
  --shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}

.dark-mode {
  --primary-color: #66BB6A;
  --primary-dark: #4CAF50;
  --primary-light: #81C784;
  --text-primary: #fff;
  --text-secondary: #ccc;
  --background: #121212;
  --card-background: #1e1e1e;
  --border-color: #333;
  --shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--background);
  color: var(--text-primary);
  transition: var(--transition);
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: var(--primary-color);
  color: white;
  padding: 1rem;
  box-shadow: var(--shadow);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
}

.theme-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: var(--transition);
}

.theme-toggle:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.scan-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.scan-options {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 500px;
}

.scan-button, .upload-button {
  width: 100%;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  background-color: var(--primary-color);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: var(--transition);
}

.scan-button:hover, .upload-button:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
}

.scan-button:disabled, .upload-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.or-divider {
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--text-secondary);
}

.or-divider::before,
.or-divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--border-color);
}

.or-divider span {
  padding: 0 1rem;
}

.file-input {
  display: none;
}

.product-section {
  animation: fadeIn 0.5s ease;
}

.product-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.back-button {
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
}

.back-button:hover {
  color: var(--primary-dark);
}

.product-title {
  font-size: 1.8rem;
  font-weight: 600;
}

.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.product-image-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.product-image {
  width: 100%;
  height: auto;
  display: block;
  transition: var(--transition);
}

.product-image:hover {
  transform: scale(1.02);
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.impact-score {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.score-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  transition: var(--transition);
}

.score-high {
  background-color: #4CAF50;
}

.score-medium {
  background-color: #FFC107;
}

.score-low {
  background-color: #F44336;
}

.score-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.impact-details {
  background-color: var(--card-background);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.impact-details h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.impact-details ul {
  list-style: none;
}

.impact-details li {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color);
}

.impact-details li:last-child {
  border-bottom: none;
}

.detail-label {
  color: var(--text-secondary);
}

.detail-value {
  font-weight: 500;
}

.alternatives {
  background-color: var(--card-background);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.alternatives h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.alternatives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.alternative-card {
  background-color: var(--background);
  border-radius: 8px;
  overflow: hidden;
  transition: var(--transition);
}

.alternative-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.alternative-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.alternative-info {
  padding: 1rem;
}

.alternative-info h4 {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.alternative-score {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-content {
  background-color: var(--card-background);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  width: 90%;
  max-width: 400px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--border-color);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  margin: 0 auto 1rem;
  animation: spin 1s linear infinite;
}

.loading-text {
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background-color: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
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

@media (max-width: 768px) {
  .product-content {
    grid-template-columns: 1fr;
  }

  .main-content {
    padding: 1rem;
  }

  .product-title {
    font-size: 1.5rem;
  }

  .alternatives-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }

  .scan-button, .upload-button {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .product-details {
    gap: 1.5rem;
  }
}
</style> 