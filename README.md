# Calculateur d'Émissions CO2

Une application Vue.js qui permet de calculer les émissions de CO2 pour différents modes de transport.

## Fonctionnalités

- Calcul des émissions de CO2 pour différents modes de transport :
  - Voiture (essence)
  - Voiture électrique
  - Train
  - Avion
  - Vélo
  - Trottinette électrique

## Installation

1. Assurez-vous d'avoir Node.js installé sur votre machine
2. Clonez ce dépôt
3. Installez les dépendances :
```bash
npm install
```

## Lancement de l'application

Pour lancer l'application en mode développement :
```bash
npm run serve
```

L'application sera accessible à l'adresse : `http://localhost:8080`

## Utilisation

1. Entrez la distance de votre trajet en kilomètres
2. Sélectionnez le mode de transport
3. Cliquez sur "Calculer" pour obtenir le résultat

## Facteurs d'émission utilisés

- Voiture (essence) : 0.192 kg CO2/km
- Voiture électrique : 0.053 kg CO2/km
- Train : 0.014 kg CO2/km
- Avion : 0.285 kg CO2/km
- Vélo : 0 kg CO2/km
- Trottinette électrique : 0.005 kg CO2/km

*Note : Ces facteurs sont des moyennes et peuvent varier selon les conditions réelles.* 