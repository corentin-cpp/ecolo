export const products = {
  'bottle-pet': {
    name: 'Bouteille en PET',
    image: 'https://via.placeholder.com/150',
    score: 3,
    impactDetails: [
      { label: 'Type de plastique', value: 'PET' },
      { label: 'Recyclabilité', value: 'Moyenne' },
      { label: 'Temps de décomposition', value: '450 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '1' }
    ],
    alternatives: [
      {
        name: 'Gourde en inox',
        image: 'https://via.placeholder.com/150',
        score: 9,
        description: 'Réutilisable à vie, recyclable à 100%'
      },
      {
        name: 'Bouteille en verre',
        image: 'https://via.placeholder.com/150',
        score: 8,
        description: 'Recyclable à l\'infini'
      }
    ]
  },
  'plastic-bag': {
    name: 'Sac en plastique',
    image: 'https://via.placeholder.com/150',
    score: 2,
    impactDetails: [
      { label: 'Type de plastique', value: 'PE' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '400 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '4' }
    ],
    alternatives: [
      {
        name: 'Sac en tissu',
        image: 'https://via.placeholder.com/150',
        score: 9,
        description: 'Réutilisable des centaines de fois'
      },
      {
        name: 'Panier en osier',
        image: 'https://via.placeholder.com/150',
        score: 10,
        description: '100% naturel et biodégradable'
      }
    ]
  },
  'plastic-container': {
    name: 'Contenant alimentaire',
    image: 'https://via.placeholder.com/150',
    score: 4,
    impactDetails: [
      { label: 'Type de plastique', value: 'PP' },
      { label: 'Recyclabilité', value: 'Bonne' },
      { label: 'Temps de décomposition', value: '500 ans' },
      { label: 'Impact CO2', value: 'Moyen' },
      { label: 'Code recyclage', value: '5' }
    ],
    alternatives: [
      {
        name: 'Contenant en verre',
        image: 'https://via.placeholder.com/150',
        score: 9,
        description: 'Réutilisable et recyclable'
      },
      {
        name: 'Boîte en inox',
        image: 'https://via.placeholder.com/150',
        score: 10,
        description: 'Durable et recyclable'
      }
    ]
  },
  'straw': {
    name: 'Paille en plastique',
    image: 'https://via.placeholder.com/150',
    score: 1,
    impactDetails: [
      { label: 'Type de plastique', value: 'PP' },
      { label: 'Recyclabilité', value: 'Très faible' },
      { label: 'Temps de décomposition', value: '200 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '5' }
    ],
    alternatives: [
      {
        name: 'Paille en inox',
        image: 'https://via.placeholder.com/150',
        score: 9,
        description: 'Réutilisable et lavable'
      },
      {
        name: 'Paille en bambou',
        image: 'https://via.placeholder.com/150',
        score: 10,
        description: '100% biodégradable'
      }
    ]
  },
  'cutlery': {
    name: 'Couverts en plastique',
    image: 'https://via.placeholder.com/150',
    score: 2,
    impactDetails: [
      { label: 'Type de plastique', value: 'PS' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '500 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '6' }
    ],
    alternatives: [
      {
        name: 'Couverts en inox',
        image: 'https://via.placeholder.com/150',
        score: 10,
        description: 'Réutilisables à vie'
      },
      {
        name: 'Couverts en bambou',
        image: 'https://via.placeholder.com/150',
        score: 9,
        description: 'Biodégradables et compostables'
      }
    ]
  },
  'food-wrap': {
    name: 'Film alimentaire',
    image: 'https://via.placeholder.com/150',
    score: 2,
    impactDetails: [
      { label: 'Type de plastique', value: 'PVC' },
      { label: 'Recyclabilité', value: 'Très faible' },
      { label: 'Temps de décomposition', value: '1000 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '3' }
    ],
    alternatives: [
      {
        name: 'Bee\'s Wrap',
        image: 'https://via.placeholder.com/150',
        score: 9,
        description: 'En cire d\'abeille, réutilisable et compostable'
      },
      {
        name: 'Bocaux en verre',
        image: 'https://via.placeholder.com/150',
        score: 10,
        description: 'Réutilisables et recyclables'
      }
    ]
  },
  'shampoo-bottle': {
    name: 'Flacon de shampooing',
    image: 'https://via.placeholder.com/150',
    score: 3,
    impactDetails: [
      { label: 'Type de plastique', value: 'HDPE' },
      { label: 'Recyclabilité', value: 'Bonne' },
      { label: 'Temps de décomposition', value: '450 ans' },
      { label: 'Impact CO2', value: 'Moyen' },
      { label: 'Code recyclage', value: '2' }
    ],
    alternatives: [
      {
        name: 'Shampooing solide',
        image: 'https://via.placeholder.com/150',
        score: 9,
        description: 'Sans emballage plastique'
      },
      {
        name: 'Recharge en vrac',
        image: 'https://via.placeholder.com/150',
        score: 8,
        description: 'Réduction des déchets d\'emballage'
      }
    ]
  }
};

// Fonction pour détecter les caractéristiques visuelles du plastique
const detectPlasticFeatures = (imageData) => {
  // Dans une vraie application, on utiliserait une API de vision par ordinateur
  // Pour la simulation, nous allons utiliser des caractéristiques basées sur l'image
  const imageHash = imageData.substring(0, 10).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const features = {
    transparency: imageHash % 2 === 0,
    shine: (imageHash % 3) === 0,
    color: (imageHash % 4) < 2 ? 'clair' : 'foncé',
    shape: ['bouteille', 'sac', 'contenant', 'paille', 'couverts', 'film', 'flacon'][imageHash % 7]
  };
  
  console.log('Analyse des caractéristiques de l\'image:', features);
  return features;
};

// Fonction pour identifier le type de plastique
const identifyPlasticType = (features) => {
  const productTypes = {
    'bouteille': 'bottle-pet',
    'sac': 'plastic-bag',
    'contenant': 'plastic-container',
    'paille': 'straw',
    'couverts': 'cutlery',
    'film': 'food-wrap',
    'flacon': 'shampoo-bottle'
  };
  
  return productTypes[features.shape] || 'plastic-container';
};

export const analyzeImage = async (imageData) => {
  console.log('Début de l\'analyse de l\'image...');
  
  // Simulation de l'analyse des caractéristiques visuelles
  const features = detectPlasticFeatures(imageData);
  console.log('Caractéristiques détectées:', features);
  
  // Identification du type de plastique
  const plasticType = identifyPlasticType(features);
  console.log('Type de plastique identifié:', plasticType);
  
  // Simulation d'un délai d'analyse
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return plasticType;
}; 