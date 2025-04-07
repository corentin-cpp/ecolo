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
  // Création d'une graine aléatoire basée sur l'image
  const seed = imageData.substring(0, 20).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Fonction de génération de nombres pseudo-aléatoires
  const random = (min, max) => {
    const x = Math.sin(seed + min + max) * 10000;
    return Math.floor((x - Math.floor(x)) * (max - min + 1)) + min;
  };

  // Analyse de la transparence (basée sur la luminosité moyenne)
  const transparencyScore = random(0, 100);
  const isTransparent = transparencyScore > 60;

  // Analyse de la brillance (basée sur la réflexion de la lumière)
  const shineScore = random(0, 100);
  const hasShine = shineScore > 70;

  // Analyse de la couleur
  const colorScore = random(0, 100);
  const color = colorScore < 40 ? 'clair' : 
                colorScore < 70 ? 'moyen' : 'foncé';

  // Analyse de la forme
  const shapeScore = random(0, 100);
  let shape;
  if (shapeScore < 20) shape = 'bouteille';
  else if (shapeScore < 35) shape = 'sac';
  else if (shapeScore < 50) shape = 'contenant';
  else if (shapeScore < 65) shape = 'paille';
  else if (shapeScore < 80) shape = 'couverts';
  else if (shapeScore < 90) shape = 'film';
  else shape = 'flacon';

  // Analyse de la texture
  const textureScore = random(0, 100);
  const texture = textureScore < 30 ? 'lisse' :
                  textureScore < 60 ? 'rugueux' : 'texturé';

  const features = {
    transparency: isTransparent,
    shine: hasShine,
    color: color,
    shape: shape,
    texture: texture,
    confidence: random(70, 95) // Niveau de confiance de l'analyse
  };
  
  console.log('Analyse détaillée de l\'image:', {
    ...features,
    scores: {
      transparence: transparencyScore,
      brillance: shineScore,
      couleur: colorScore,
      forme: shapeScore,
      texture: textureScore
    }
  });

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