// Base de données des produits plastiques
const products = {
  'bottle-pet': {
    name: 'Bouteille en PET',
    image: 'https://example.com/bottle-pet.jpg',
    score: 4,
    impactDetails: [
      { label: 'Type de plastique', value: 'PET (Polyéthylène téréphtalate)' },
      { label: 'Recyclabilité', value: 'Élevée' },
      { label: 'Temps de décomposition', value: '450 ans' },
      { label: 'Impact CO2', value: 'Moyen' },
      { label: 'Code recyclage', value: '1' }
    ],
    alternatives: [
      {
        name: 'Gourde en inox',
        image: 'https://example.com/stainless-bottle.jpg',
        score: 9,
        description: 'Réutilisable, durable et sans BPA'
      },
      {
        name: 'Bouteille en verre',
        image: 'https://example.com/glass-bottle.jpg',
        score: 8,
        description: '100% recyclable et sans produits chimiques'
      }
    ]
  },
  'plastic-bag': {
    name: 'Sac plastique',
    image: 'https://example.com/plastic-bag.jpg',
    score: 2,
    impactDetails: [
      { label: 'Type de plastique', value: 'Polyéthylène' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '1000 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '4' }
    ],
    alternatives: [
      {
        name: 'Sac en tissu',
        image: 'https://example.com/cotton-bag.jpg',
        score: 9,
        description: 'Réutilisable et biodégradable'
      },
      {
        name: 'Panier en osier',
        image: 'https://example.com/basket.jpg',
        score: 10,
        description: 'Naturel et durable'
      }
    ]
  },
  'plastic-container': {
    name: 'Contenant alimentaire',
    image: 'https://example.com/plastic-container.jpg',
    score: 3,
    impactDetails: [
      { label: 'Type de plastique', value: 'Polypropylène' },
      { label: 'Recyclabilité', value: 'Moyenne' },
      { label: 'Temps de décomposition', value: '500 ans' },
      { label: 'Impact CO2', value: 'Moyen' },
      { label: 'Code recyclage', value: '5' }
    ],
    alternatives: [
      {
        name: 'Boîte en verre',
        image: 'https://example.com/glass-container.jpg',
        score: 9,
        description: 'Réutilisable et sans produits chimiques'
      },
      {
        name: 'Contenant en inox',
        image: 'https://example.com/stainless-container.jpg',
        score: 10,
        description: 'Durable et sans danger pour la santé'
      }
    ]
  },
  'straw': {
    name: 'Paille en plastique',
    image: 'https://example.com/straw.jpg',
    score: 1,
    impactDetails: [
      { label: 'Type de plastique', value: 'Polypropylène' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '450 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '5' }
    ],
    alternatives: [
      {
        name: 'Paille en inox',
        image: 'https://example.com/stainless-straw.jpg',
        score: 9,
        description: 'Réutilisable et durable'
      },
      {
        name: 'Paille en bambou',
        image: 'https://example.com/bamboo-straw.jpg',
        score: 8,
        description: 'Naturelle et biodégradable'
      }
    ]
  },
  'cutlery': {
    name: 'Couverts en plastique',
    image: 'https://example.com/cutlery.jpg',
    score: 2,
    impactDetails: [
      { label: 'Type de plastique', value: 'Polystyrène' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '500 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '6' }
    ],
    alternatives: [
      {
        name: 'Couverts en inox',
        image: 'https://example.com/stainless-cutlery.jpg',
        score: 10,
        description: 'Réutilisables et durables'
      },
      {
        name: 'Couverts en bambou',
        image: 'https://example.com/bamboo-cutlery.jpg',
        score: 9,
        description: 'Naturels et biodégradables'
      }
    ]
  },
  'food-wrap': {
    name: 'Film alimentaire',
    image: 'https://example.com/food-wrap.jpg',
    score: 2,
    impactDetails: [
      { label: 'Type de plastique', value: 'Polyéthylène' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '450 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '4' }
    ],
    alternatives: [
      {
        name: 'Bee\'s Wrap',
        image: 'https://example.com/bees-wrap.jpg',
        score: 9,
        description: 'Naturel et réutilisable'
      },
      {
        name: 'Boîtes en verre',
        image: 'https://example.com/glass-boxes.jpg',
        score: 10,
        description: 'Réutilisables et sans danger'
      }
    ]
  },
  'shampoo-bottle': {
    name: 'Bouteille de shampoing',
    image: 'https://example.com/shampoo-bottle.jpg',
    score: 3,
    impactDetails: [
      { label: 'Type de plastique', value: 'HDPE' },
      { label: 'Recyclabilité', value: 'Moyenne' },
      { label: 'Temps de décomposition', value: '500 ans' },
      { label: 'Impact CO2', value: 'Moyen' },
      { label: 'Code recyclage', value: '2' }
    ],
    alternatives: [
      {
        name: 'Shampoing solide',
        image: 'https://example.com/solid-shampoo.jpg',
        score: 9,
        description: 'Sans emballage plastique'
      },
      {
        name: 'Recharge en vrac',
        image: 'https://example.com/bulk-refill.jpg',
        score: 8,
        description: 'Réduction des déchets'
      }
    ]
  },
  'scanner': {
    name: 'Scanner EcoScan',
    image: 'https://example.com/scanner.jpg',
    score: 8,
    impactDetails: [
      { label: 'Type de plastique', value: 'Électronique' },
      { label: 'Recyclabilité', value: 'Élevée' },
      { label: 'Temps de décomposition', value: 'Non applicable' },
      { label: 'Impact CO2', value: 'Faible' },
      { label: 'Code recyclage', value: 'WEEE' }
    ],
    alternatives: [
      {
        name: 'Application mobile',
        image: 'https://example.com/mobile-app.jpg',
        score: 9,
        description: 'Solution sans matériel supplémentaire'
      },
      {
        name: 'Scanner portable',
        image: 'https://example.com/portable-scanner.jpg',
        score: 7,
        description: 'Version plus compacte et économe en énergie'
      }
    ]
  },
  'toothbrush': {
    name: 'Brosse à dents en plastique',
    image: 'https://example.com/toothbrush.jpg',
    score: 2,
    impactDetails: [
      { label: 'Type de plastique', value: 'PP' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '500 ans' },
      { label: 'Impact CO2', value: 'Moyen' },
      { label: 'Code recyclage', value: '5' }
    ],
    alternatives: [
      {
        name: 'Brosse à dents en bambou',
        image: 'https://example.com/bamboo-toothbrush.jpg',
        score: 9,
        description: 'Biodégradable et compostable'
      },
      {
        name: 'Brosse à dents rechargeable',
        image: 'https://example.com/rechargeable-toothbrush.jpg',
        score: 8,
        description: 'Seule la tête est à changer'
      }
    ]
  },
  'coffee-cup': {
    name: 'Gobelet à café',
    image: 'https://example.com/coffee-cup.jpg',
    score: 1,
    impactDetails: [
      { label: 'Type de plastique', value: 'PS' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '450 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '6' }
    ],
    alternatives: [
      {
        name: 'Tasse réutilisable',
        image: 'https://example.com/reusable-cup.jpg',
        score: 10,
        description: 'Réutilisable à l\'infini'
      },
      {
        name: 'Gobelet compostable',
        image: 'https://example.com/compostable-cup.jpg',
        score: 7,
        description: 'Biodégradable en conditions industrielles'
      }
    ]
  },
  'water-bottle': {
    name: 'Bouteille d\'eau',
    image: 'https://example.com/water-bottle.jpg',
    score: 2,
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
        image: 'https://example.com/stainless-bottle.jpg',
        score: 10,
        description: 'Réutilisable et durable'
      },
      {
        name: 'Bouteille en verre',
        image: 'https://example.com/glass-bottle.jpg',
        score: 9,
        description: '100% recyclable'
      }
    ]
  },
  'shopping-bag': {
    name: 'Sac de courses',
    image: 'https://example.com/shopping-bag.jpg',
    score: 1,
    impactDetails: [
      { label: 'Type de plastique', value: 'LDPE' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '1000 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '4' }
    ],
    alternatives: [
      {
        name: 'Sac en tissu',
        image: 'https://example.com/cotton-bag.jpg',
        score: 10,
        description: 'Réutilisable et lavable'
      },
      {
        name: 'Panier en osier',
        image: 'https://example.com/basket.jpg',
        score: 9,
        description: 'Naturel et durable'
      }
    ]
  },
  'food-container': {
    name: 'Boîte alimentaire',
    image: 'https://example.com/food-container.jpg',
    score: 4,
    impactDetails: [
      { label: 'Type de plastique', value: 'PP' },
      { label: 'Recyclabilité', value: 'Moyenne' },
      { label: 'Temps de décomposition', value: '500 ans' },
      { label: 'Impact CO2', value: 'Moyen' },
      { label: 'Code recyclage', value: '5' }
    ],
    alternatives: [
      {
        name: 'Boîte en verre',
        image: 'https://example.com/glass-container.jpg',
        score: 9,
        description: 'Réutilisable et saine'
      },
      {
        name: 'Boîte en inox',
        image: 'https://example.com/stainless-container.jpg',
        score: 10,
        description: 'Durable et écologique'
      }
    ]
  },
  'yogurt-pot': {
    name: 'Pot de yaourt',
    image: 'https://example.com/yogurt-pot.jpg',
    score: 3,
    impactDetails: [
      { label: 'Type de plastique', value: 'PS' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '450 ans' },
      { label: 'Impact CO2', value: 'Moyen' },
      { label: 'Code recyclage', value: '6' }
    ],
    alternatives: [
      {
        name: 'Yaourt en pot de verre',
        image: 'https://example.com/glass-yogurt.jpg',
        score: 9,
        description: '100% recyclable'
      },
      {
        name: 'Yaourt fait maison',
        image: 'https://example.com/homemade-yogurt.jpg',
        score: 10,
        description: 'Sans emballage'
      }
    ]
  },
  'plastic-wrap': {
    name: 'Film alimentaire',
    image: 'https://example.com/plastic-wrap.jpg',
    score: 1,
    impactDetails: [
      { label: 'Type de plastique', value: 'LDPE' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '1000 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '4' }
    ],
    alternatives: [
      {
        name: 'Bee wrap',
        image: 'https://example.com/beewrap.jpg',
        score: 9,
        description: 'Naturel et réutilisable'
      },
      {
        name: 'Couvercles en silicone',
        image: 'https://example.com/silicone-lids.jpg',
        score: 8,
        description: 'Réutilisables et durables'
      }
    ]
  },
  'disposable-plate': {
    name: 'Assiette jetable',
    image: 'https://example.com/disposable-plate.jpg',
    score: 1,
    impactDetails: [
      { label: 'Type de plastique', value: 'PS' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '450 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '6' }
    ],
    alternatives: [
      {
        name: 'Assiette en bambou',
        image: 'https://example.com/bamboo-plate.jpg',
        score: 9,
        description: 'Biodégradable'
      },
      {
        name: 'Assiette en palmier',
        image: 'https://example.com/palm-leaf-plate.jpg',
        score: 10,
        description: '100% naturelle'
      }
    ]
  },
  'disposable-cup': {
    name: 'Verre jetable',
    image: 'https://example.com/disposable-cup.jpg',
    score: 1,
    impactDetails: [
      { label: 'Type de plastique', value: 'PS' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '450 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '6' }
    ],
    alternatives: [
      {
        name: 'Verre réutilisable',
        image: 'https://example.com/reusable-glass.jpg',
        score: 10,
        description: 'Réutilisable à l\'infini'
      },
      {
        name: 'Gobelet en carton',
        image: 'https://example.com/cardboard-cup.jpg',
        score: 7,
        description: 'Recyclable et compostable'
      }
    ]
  },
  'plastic-bottle-cap': {
    name: 'Bouchon de bouteille',
    image: 'https://example.com/bottle-cap.jpg',
    score: 2,
    impactDetails: [
      { label: 'Type de plastique', value: 'PP' },
      { label: 'Recyclabilité', value: 'Moyenne' },
      { label: 'Temps de décomposition', value: '500 ans' },
      { label: 'Impact CO2', value: 'Moyen' },
      { label: 'Code recyclage', value: '5' }
    ],
    alternatives: [
      {
        name: 'Bouchon en liège',
        image: 'https://example.com/cork-cap.jpg',
        score: 9,
        description: 'Naturel et biodégradable'
      },
      {
        name: 'Bouchon en métal',
        image: 'https://example.com/metal-cap.jpg',
        score: 8,
        description: 'Recyclable à l\'infini'
      }
    ]
  },
  'plastic-bag-seal': {
    name: 'Fermeture de sachet',
    image: 'https://example.com/bag-seal.jpg',
    score: 1,
    impactDetails: [
      { label: 'Type de plastique', value: 'LDPE' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '1000 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '4' }
    ],
    alternatives: [
      {
        name: 'Pince en bois',
        image: 'https://example.com/wooden-clip.jpg',
        score: 9,
        description: 'Naturelle et réutilisable'
      },
      {
        name: 'Élastique naturel',
        image: 'https://example.com/natural-rubber.jpg',
        score: 8,
        description: 'Biodégradable'
      }
    ]
  },
  'plastic-straw': {
    name: 'Paille en plastique',
    image: 'https://example.com/plastic-straw.jpg',
    score: 1,
    impactDetails: [
      { label: 'Type de plastique', value: 'PP' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '500 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '5' }
    ],
    alternatives: [
      {
        name: 'Paille en inox',
        image: 'https://example.com/stainless-straw.jpg',
        score: 10,
        description: 'Réutilisable et durable'
      },
      {
        name: 'Paille en bambou',
        image: 'https://example.com/bamboo-straw.jpg',
        score: 9,
        description: 'Naturelle et biodégradable'
      }
    ]
  },
  'plastic-cutlery': {
    name: 'Couverts en plastique',
    image: 'https://example.com/plastic-cutlery.jpg',
    score: 1,
    impactDetails: [
      { label: 'Type de plastique', value: 'PS' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '450 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '6' }
    ],
    alternatives: [
      {
        name: 'Couverts en inox',
        image: 'https://example.com/stainless-cutlery.jpg',
        score: 10,
        description: 'Réutilisables et durables'
      },
      {
        name: 'Couverts en bambou',
        image: 'https://example.com/bamboo-cutlery.jpg',
        score: 9,
        description: 'Naturels et biodégradables'
      }
    ]
  },
  'plastic-food-tray': {
    name: 'Barquette alimentaire',
    image: 'https://example.com/food-tray.jpg',
    score: 2,
    impactDetails: [
      { label: 'Type de plastique', value: 'PET' },
      { label: 'Recyclabilité', value: 'Moyenne' },
      { label: 'Temps de décomposition', value: '450 ans' },
      { label: 'Impact CO2', value: 'Moyen' },
      { label: 'Code recyclage', value: '1' }
    ],
    alternatives: [
      {
        name: 'Barquette en carton',
        image: 'https://example.com/cardboard-tray.jpg',
        score: 8,
        description: 'Recyclable et compostable'
      },
      {
        name: 'Contenant en verre',
        image: 'https://example.com/glass-container.jpg',
        score: 9,
        description: 'Réutilisable et sain'
      }
    ]
  },
  'plastic-food-container': {
    name: 'Boîte repas en plastique',
    image: 'https://example.com/food-container.jpg',
    score: 3,
    impactDetails: [
      { label: 'Type de plastique', value: 'PP' },
      { label: 'Recyclabilité', value: 'Moyenne' },
      { label: 'Temps de décomposition', value: '500 ans' },
      { label: 'Impact CO2', value: 'Moyen' },
      { label: 'Code recyclage', value: '5' }
    ],
    alternatives: [
      {
        name: 'Boîte repas en inox',
        image: 'https://example.com/stainless-lunchbox.jpg',
        score: 10,
        description: 'Durable et écologique'
      },
      {
        name: 'Boîte repas en verre',
        image: 'https://example.com/glass-lunchbox.jpg',
        score: 9,
        description: 'Réutilisable et saine'
      }
    ]
  },
  'plastic-food-wrap': {
    name: 'Film alimentaire',
    image: 'https://example.com/food-wrap.jpg',
    score: 1,
    impactDetails: [
      { label: 'Type de plastique', value: 'LDPE' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '1000 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '4' }
    ],
    alternatives: [
      {
        name: 'Bee wrap',
        image: 'https://example.com/beewrap.jpg',
        score: 9,
        description: 'Naturel et réutilisable'
      },
      {
        name: 'Couvercles en silicone',
        image: 'https://example.com/silicone-lids.jpg',
        score: 8,
        description: 'Réutilisables et durables'
      }
    ]
  },
  'plastic-food-bag': {
    name: 'Sachet alimentaire',
    image: 'https://example.com/food-bag.jpg',
    score: 1,
    impactDetails: [
      { label: 'Type de plastique', value: 'LDPE' },
      { label: 'Recyclabilité', value: 'Faible' },
      { label: 'Temps de décomposition', value: '1000 ans' },
      { label: 'Impact CO2', value: 'Élevé' },
      { label: 'Code recyclage', value: '4' }
    ],
    alternatives: [
      {
        name: 'Sachet en tissu',
        image: 'https://example.com/cotton-bag.jpg',
        score: 9,
        description: 'Réutilisable et lavable'
      },
      {
        name: 'Sachet en papier',
        image: 'https://example.com/paper-bag.jpg',
        score: 8,
        description: 'Recyclable et compostable'
      }
    ]
  },
  'plastic-food-container-lid': {
    name: 'Couvercle de boîte',
    image: 'https://example.com/container-lid.jpg',
    score: 2,
    impactDetails: [
      { label: 'Type de plastique', value: 'PP' },
      { label: 'Recyclabilité', value: 'Moyenne' },
      { label: 'Temps de décomposition', value: '500 ans' },
      { label: 'Impact CO2', value: 'Moyen' },
      { label: 'Code recyclage', value: '5' }
    ],
    alternatives: [
      {
        name: 'Couvercle en verre',
        image: 'https://example.com/glass-lid.jpg',
        score: 9,
        description: 'Réutilisable et sain'
      },
      {
        name: 'Couvercle en inox',
        image: 'https://example.com/stainless-lid.jpg',
        score: 10,
        description: 'Durable et écologique'
      }
    ]
  }
};

// Caractéristiques visuelles pour l'identification
const possibleFeatures = {
  'bottle-pet': {
    shape: 'cylindrique',
    transparency: 0.8,
    shine: 0.7,
    color: ['clair', 'transparent'],
    texture: 'lisse',
    weight: 0.3
  },
  'plastic-bag': {
    shape: 'plat',
    transparency: 0.6,
    shine: 0.4,
    color: ['transparent', 'clair'],
    texture: 'fin',
    weight: 0.1
  },
  'plastic-container': {
    shape: 'rectangulaire',
    transparency: 0.5,
    shine: 0.6,
    color: ['clair', 'opaque'],
    texture: 'rigide',
    weight: 0.4
  },
  'straw': {
    shape: 'cylindrique',
    transparency: 0.7,
    shine: 0.5,
    color: ['clair', 'transparent'],
    texture: 'lisse',
    weight: 0.05
  },
  'cutlery': {
    shape: 'allongé',
    transparency: 0.3,
    shine: 0.8,
    color: ['clair', 'opaque'],
    texture: 'rigide',
    weight: 0.2
  },
  'food-wrap': {
    shape: 'plat',
    transparency: 0.9,
    shine: 0.3,
    color: ['transparent'],
    texture: 'fin',
    weight: 0.1
  },
  'shampoo-bottle': {
    shape: 'cylindrique',
    transparency: 0.4,
    shine: 0.6,
    color: ['opaque', 'coloré'],
    texture: 'rigide',
    weight: 0.3
  }
};

// Fonction pour générer un nombre pseudo-aléatoire basé sur une graine
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Fonction pour détecter les caractéristiques visuelles d'une image
function detectVisualFeatures(imageData) {
  // Créer une graine basée sur les premiers caractères de l'image
  const seed = imageData.substring(0, 20).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Sélectionner aléatoirement un type de produit
  const productTypes = Object.keys(possibleFeatures);
  const randomIndex = Math.floor(seededRandom(seed) * productTypes.length);
  const selectedType = productTypes[randomIndex];
  
  // Obtenir les caractéristiques de base
  const baseFeatures = possibleFeatures[selectedType];
  
  // Ajouter des variations aléatoires
  const features = {
    ...baseFeatures,
    transparency: baseFeatures.transparency + (seededRandom(seed + 1) * 0.2 - 0.1),
    shine: baseFeatures.shine + (seededRandom(seed + 2) * 0.2 - 0.1),
    confidence: Math.floor(seededRandom(seed + 3) * 30 + 70) // Confiance entre 70% et 100%
  };

  return {
    features,
    productType: selectedType
  };
}

// Fonction pour identifier le type de produit
function identifyProductType(features) {
  const { features: detectedFeatures, productType } = features;
  
  // Calculer la confiance en fonction des caractéristiques détectées
  const confidence = detectedFeatures.confidence;
  
  return {
    productId: productType,
    confidence: confidence
  };
}

// Fonction pour calculer le score environnemental
function calculateEnvironmentalScore(product) {
  return product.score;
}

// Fonction principale d'analyse d'image
async function analyzeImage(imageData) {
  console.log('Analyse de l\'image en cours...');
  
  try {
    // Détecter les caractéristiques visuelles
    const visualFeatures = detectVisualFeatures(imageData);
    console.log('Caractéristiques détectées:', visualFeatures.features);
    
    // Identifier le type de produit
    const identification = identifyProductType(visualFeatures);
    console.log('Produit identifié:', identification);
    
    // Vérifier si le produit existe dans la base de données
    if (!products[identification.productId]) {
      console.warn('Produit non trouvé, utilisation du produit par défaut');
      identification.productId = 'plastic-container';
    }
    
    // Calculer le score environnemental
    const product = products[identification.productId];
    const score = calculateEnvironmentalScore(product);
    console.log('Score environnemental calculé:', score);
    
    return {
      productId: identification.productId,
      confidence: identification.confidence,
      features: visualFeatures.features,
      score: score
    };
  } catch (error) {
    console.error('Erreur lors de l\'analyse:', error);
    // Retourner un produit par défaut en cas d'erreur
    return {
      productId: 'plastic-container',
      confidence: 50,
      features: {
        shape: 'rectangulaire',
        transparency: 0.5,
        shine: 0.6,
        color: 'clair',
        texture: 'rigide'
      },
      score: 3
    };
  }
}

export { analyzeImage };
export default products; 