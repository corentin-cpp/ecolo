# EcoScan - Analyseur d'Impact Environnemental des Plastiques

EcoScan est une application web qui permet d'analyser l'impact environnemental des produits en plastique. Elle offre une interface intuitive pour scanner ou importer des images de produits plastiques et fournit des informations détaillées sur leur impact environnemental, ainsi que des alternatives plus écologiques.

## Fonctionnalités

- **Analyse d'images** : Scan de produits ou import d'images pour analyse
- **Détection de caractéristiques** : Analyse des propriétés visuelles des plastiques (transparence, brillance, couleur, texture)
- **Évaluation environnementale** : Score écologique sur 10 pour chaque produit
- **Détails d'impact** : Informations sur le type de plastique, recyclabilité, temps de décomposition et impact CO2
- **Alternatives écologiques** : Suggestions de produits alternatifs plus respectueux de l'environnement
- **Conseils pratiques** : Recommandations pour réduire l'utilisation de plastique

## Technologies Utilisées

- Vue.js 3
- JavaScript
- HTML5
- CSS3

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-username/ecoscan.git
cd ecoscan
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez l'application en mode développement :
```bash
npm run serve
```

4. Accédez à l'application dans votre navigateur :
```
http://localhost:8080
```

## Utilisation

1. **Scanner un produit** :
   - Cliquez sur le bouton "Scanner un produit"
   - L'application sélectionnera aléatoirement un produit de sa base de données
   - Observez la progression de l'analyse en temps réel

2. **Importer une image** :
   - Cliquez sur "Importer une image"
   - Sélectionnez une image de produit plastique
   - L'application analysera l'image et identifiera le type de plastique

3. **Résultats de l'analyse** :
   - Score environnemental du produit
   - Caractéristiques détectées (transparence, brillance, etc.)
   - Impact environnemental détaillé
   - Alternatives écologiques proposées
   - Conseils d'utilisation

## Base de Données

L'application inclut une base de données de produits plastiques courants avec :
- Bouteilles PET
- Sacs plastiques
- Contenants alimentaires
- Pailles
- Couverts jetables
- Films alimentaires
- Bouteilles de shampoing

Chaque produit est documenté avec :
- Images
- Score environnemental
- Détails d'impact
- Alternatives écologiques

## Améliorations Futures

- Intégration d'une API de vision par ordinateur pour une analyse plus précise
- Ajout de plus de produits dans la base de données
- Fonctionnalité de partage des résultats
- Historique des analyses
- Statistiques personnalisées

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails. 