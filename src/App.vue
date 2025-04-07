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

        <div class="details-section">
          <h3>Détails de l'impact environnemental</h3>
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
                <p>Score : {{ alt.score }}/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      scannedProduct: null,
      mockProducts: {
        '123456789': {
          name: 'Bouteille d\'eau en plastique',
          image: 'https://via.placeholder.com/150',
          score: 3,
          impactDetails: [
            { label: 'Type de plastique', value: 'PET' },
            { label: 'Recyclabilité', value: 'Moyenne' },
            { label: 'Temps de décomposition', value: '450 ans' },
            { label: 'Impact CO2', value: 'Élevé' }
          ],
          alternatives: [
            {
              name: 'Gourde en inox',
              image: 'https://via.placeholder.com/150',
              score: 9
            },
            {
              name: 'Bouteille en verre',
              image: 'https://via.placeholder.com/150',
              score: 8
            }
          ]
        }
      }
    }
  },
  methods: {
    openScanner() {
      // Simulation d'un scan
      this.scannedProduct = this.mockProducts['123456789']
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
      if (value === 'Moyenne') return 'medium'
      return 'low'
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

.scanner-button {
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.scanner-icon {
  font-size: 24px;
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
  align-items: center;
  gap: 15px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.alternative-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}

.alternative-info h4 {
  margin: 0 0 5px 0;
}
</style> 