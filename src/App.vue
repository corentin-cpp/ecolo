<template>
  <div class="app">
    <header>
      <h1>EcoScan</h1>
      <p>Scannez vos produits pour connaître leur impact environnemental</p>
    </header>

    <main>
      <div class="scanner-section">
        <div class="scanner-button" @click="openScanner">
          <div class="scanner-icon">📷</div>
          <span>Scanner un produit</span>
        </div>
        <div class="upload-section">
          <input 
            type="file" 
            id="image-upload" 
            accept="image/*" 
            @change="handleImageUpload" 
            style="display: none"
          >
          <label for="image-upload" class="upload-button">
            <div class="upload-icon">📤</div>
            <span>Importer une image</span>
          </label>
        </div>
      </div>

      <div class="analysis-section" v-if="isAnalyzing">
        <div class="loading">
          <div class="spinner"></div>
          <p>Analyse en cours...</p>
          <p class="analysis-details">{{ analysisMessage }}</p>
          <div class="analysis-progress" v-if="analysisProgress">
            <div class="progress-bar">
              <div class="progress" :style="{ width: analysisProgress + '%' }"></div>
            </div>
            <p>{{ analysisProgress }}%</p>
          </div>
        </div>
      </div>

      <div class="product-info" v-if="scannedProduct">
        <div class="product-header">
          <img :src="scannedProduct.image" :alt="scannedProduct.name" class="product-image">
          <h2>{{ scannedProduct.name }}</h2>
        </div>

        <div class="eco-score" :class="getScoreClass(scannedProduct.score)">
          <div class="score-circle">
            {{ scannedProduct.score }}/10
          </div>
          <p>{{ getScoreMessage(scannedProduct.score) }}</p>
        </div>

        <div class="analysis-details" v-if="analysisFeatures">
          <h3>Détails de l'analyse</h3>
          <div class="features-grid">
            <div class="feature-item" v-for="(value, key) in filteredFeatures" :key="key">
              <span class="feature-label">{{ formatFeatureLabel(key) }}</span>
              <span class="feature-value" :class="getFeatureClass(key, value)">{{ formatFeatureValue(key, value) }}</span>
            </div>
          </div>
        </div>

        <div class="details-section">
          <h3>Impact environnemental</h3>
          <div class="impact-details">
            <div class="impact-item" v-for="(detail, index) in scannedProduct.impactDetails" :key="index">
              <span class="impact-label">{{ detail.label }}</span>
              <span class="impact-value" :class="getImpactClass(detail.value)">{{ detail.value }}</span>
            </div>
          </div>
        </div>

        <div class="alternatives-section" v-if="scannedProduct.alternatives.length > 0">
          <h3>Alternatives plus écologiques</h3>
          <div class="alternatives-list">
            <div class="alternative" v-for="(alt, index) in scannedProduct.alternatives" :key="index">
              <img :src="alt.image" :alt="alt.name" class="alternative-image">
              <div class="alternative-info">
                <h4>{{ alt.name }}</h4>
                <p class="score">Score : {{ alt.score }}/10</p>
                <p class="description">{{ alt.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="tips-section">
          <h3>Conseils d'utilisation</h3>
          <ul class="tips-list">
            <li>Privilégiez les alternatives réutilisables</li>
            <li>Recyclez correctement vos déchets plastiques</li>
            <li>Évitez les produits à usage unique</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { products, analyzeImage } from './data/products'

export default {
  name: 'App',
  data() {
    return {
      scannedProduct: null,
      isAnalyzing: false,
      analysisMessage: 'Analyse de l\'image...',
      analysisProgress: 0,
      analysisFeatures: null,
      products
    }
  },
  methods: {
    async openScanner() {
      this.isAnalyzing = true;
      this.analysisMessage = 'Analyse de l\'image...';
      this.analysisProgress = 0;
      
      // Simulation de la progression de l'analyse
      const interval = setInterval(() => {
        this.analysisProgress += 5;
        if (this.analysisProgress >= 100) {
          clearInterval(interval);
        }
      }, 100);

      // Sélection aléatoire d'un produit
      const productKeys = Object.keys(this.products);
      const randomProductKey = productKeys[Math.floor(Math.random() * productKeys.length)];
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      this.scannedProduct = this.products[randomProductKey];
      this.analysisFeatures = {
        transparency: Math.random() > 0.5,
        shine: Math.random() > 0.7,
        color: ['clair', 'moyen', 'foncé'][Math.floor(Math.random() * 3)],
        texture: ['lisse', 'rugueux', 'texturé'][Math.floor(Math.random() * 3)],
        confidence: Math.floor(Math.random() * 26) + 70
      };
      
      this.isAnalyzing = false;
      this.analysisProgress = 0;
    },
    async handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.isAnalyzing = true;
        this.analysisMessage = 'Analyse de l\'image...';
        this.analysisProgress = 0;
        
        const interval = setInterval(() => {
          this.analysisProgress += 5;
          if (this.analysisProgress >= 100) {
            clearInterval(interval);
          }
        }, 100);

        const reader = new FileReader();
        
        reader.onload = async (e) => {
          try {
            this.analysisMessage = 'Reconnaissance du type de plastique...';
            const productId = await analyzeImage(e.target.result);
            this.scannedProduct = this.products[productId];
            this.analysisFeatures = {
              transparency: Math.random() > 0.5,
              shine: Math.random() > 0.7,
              color: ['clair', 'moyen', 'foncé'][Math.floor(Math.random() * 3)],
              texture: ['lisse', 'rugueux', 'texturé'][Math.floor(Math.random() * 3)],
              confidence: Math.floor(Math.random() * 26) + 70
            };
          } catch (error) {
            console.error('Erreur lors de l\'analyse:', error);
            this.analysisMessage = 'Erreur lors de l\'analyse. Veuillez réessayer.';
          } finally {
            this.isAnalyzing = false;
            this.analysisProgress = 0;
          }
        };
        
        reader.readAsDataURL(file);
      }
    },
    getScoreClass(score) {
      if (score >= 8) return 'excellent'
      if (score >= 6) return 'good'
      if (score >= 4) return 'medium'
      return 'poor'
    },
    getScoreMessage(score) {
      if (score >= 8) return 'Excellent choix !'
      if (score >= 6) return 'Bon choix'
      if (score >= 4) return 'Peut mieux faire'
      return 'Impact environnemental élevé'
    },
    getImpactClass(value) {
      if (value === 'Élevé') return 'high'
      if (value === 'Moyenne' || value === 'Moyen') return 'medium'
      return 'low'
    },
    formatFeatureLabel(key) {
      const labels = {
        transparency: 'Transparence',
        shine: 'Brillance',
        color: 'Couleur',
        texture: 'Texture',
        confidence: 'Confiance'
      };
      return labels[key] || key;
    },
    formatFeatureValue(key, value) {
      if (typeof value === 'boolean') {
        return value ? 'Oui' : 'Non';
      }
      if (key === 'confidence') {
        return value + '%';
      }
      return value;
    },
    getFeatureClass(key, value) {
      if (key === 'confidence') {
        if (value >= 90) return 'high';
        if (value >= 80) return 'medium';
        return 'low';
      }
      return '';
    }
  },
  computed: {
    filteredFeatures() {
      if (!this.analysisFeatures) return [];
      return Object.entries(this.analysisFeatures)
        .filter(([key]) => key !== 'scores')
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }
  }
}
</script>

<style>
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

header h1 {
  color: #2e7d32;
  margin-bottom: 10px;
}

.scanner-section {
  text-align: center;
  margin-bottom: 30px;
}

.scanner-button, .upload-button {
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin: 10px;
  transition: transform 0.2s;
}

.scanner-button:hover, .upload-button:hover {
  transform: scale(1.05);
}

.upload-section {
  margin-top: 20px;
}

.scanner-icon, .upload-icon {
  font-size: 24px;
}

.analysis-section {
  text-align: center;
  margin: 20px 0;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.analysis-details {
  color: #666;
  font-size: 0.9em;
  margin-top: 10px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4CAF50;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.product-info {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.product-header {
  text-align: center;
  margin-bottom: 20px;
}

.product-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.eco-score {
  text-align: center;
  margin: 20px 0;
  padding: 20px;
  border-radius: 12px;
}

.score-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #4CAF50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin: 0 auto 10px;
}

.excellent .score-circle { background-color: #2e7d32; }
.good .score-circle { background-color: #4CAF50; }
.medium .score-circle { background-color: #ff9800; }
.poor .score-circle { background-color: #f44336; }

.impact-details {
  margin: 20px 0;
}

.impact-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.impact-value {
  font-weight: bold;
}

.impact-value.high { color: #f44336; }
.impact-value.medium { color: #ff9800; }
.impact-value.low { color: #4CAF50; }

.alternatives-section {
  margin-top: 30px;
}

.alternatives-list {
  display: grid;
  gap: 15px;
  margin-top: 15px;
}

.alternative {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
  transition: transform 0.2s;
}

.alternative:hover {
  transform: translateY(-2px);
}

.alternative-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}

.alternative-info {
  flex: 1;
}

.alternative-info h4 {
  margin: 0 0 5px 0;
  color: #2e7d32;
}

.alternative-info .score {
  color: #666;
  font-size: 0.9em;
  margin: 5px 0;
}

.alternative-info .description {
  color: #333;
  font-size: 0.9em;
  margin: 5px 0;
}

.tips-section {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.tips-list {
  list-style-type: none;
  padding: 0;
}

.tips-list li {
  padding: 10px;
  margin: 5px 0;
  background-color: #e8f5e9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.tips-list li:before {
  content: '🌱';
}

.analysis-progress {
  margin-top: 20px;
  width: 100%;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #4CAF50;
  transition: width 0.3s ease;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.feature-item {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.feature-label {
  font-weight: bold;
  color: #666;
}

.feature-value {
  font-weight: bold;
}

.feature-value.high { color: #4CAF50; }
.feature-value.medium { color: #ff9800; }
.feature-value.low { color: #f44336; }
</style> 