#!/bin/bash

# Créer le dossier si nécessaire
mkdir -p images-ecoscans

# Lecture de chaque ligne contenant nom|url
while IFS="|" read -r name url; do
  echo "Téléchargement de $name..."
  curl -s -L "$url" -o "images-ecoscans/${name}.jpg"
done <<EOF
bottle-pet|https://images.unsplash.com/photo-1581579185169-b0b0c3eeafce
plastic-bag|https://images.unsplash.com/photo-1581579184900-63c8da4c7d4f
plastic-container|https://images.unsplash.com/photo-1603252109303-2751441f82ed
straw|https://images.unsplash.com/photo-1583341993600-16840f314511
cutlery|https://images.unsplash.com/photo-1612197523317-5d114f4b0c21
food-wrap|https://images.unsplash.com/photo-1612969303565-386ae0430f6b
shampoo-bottle|https://images.unsplash.com/photo-1615486364694-5a73f730a07b
scanner|https://images.unsplash.com/photo-1517059224940-d4af9eec41e5
toothbrush|https://images.unsplash.com/photo-1588776814546-d77c3b73f03b
coffee-cup|https://images.unsplash.com/photo-1517701604592-4e80243d54e4
water-bottle|https://images.unsplash.com/photo-1600110239207-22d6b9d694b8
shopping-bag|https://images.unsplash.com/photo-1581579185283-24194fbcaa47
food-container|https://images.unsplash.com/photo-1625231326002-7397d79dbb4d
yogurt-pot|https://images.unsplash.com/photo-1590080876644-0027f6b39f4e
plastic-wrap|https://images.unsplash.com/photo-1580894732444-c6640a0ae8b1
disposable-plate|https://images.unsplash.com/photo-1607355766817-4773e3076f50
disposable-cup|https://images.unsplash.com/photo-1586773860410-1be99b0796de
plastic-bottle-cap|https://images.unsplash.com/photo-1611095781181-4f2bffea6ae3
plastic-bag-seal|https://images.unsplash.com/photo-1625226542853-bd59c59e86ed
plastic-straw|https://images.unsplash.com/photo-1620813271541-16497d2c90b4
plastic-cutlery|https://images.unsplash.com/photo-1592844368346-e328f7eabfaa
plastic-food-tray|https://images.unsplash.com/photo-1611042553480-4b7ce275b263
plastic-food-container|https://images.unsplash.com/photo-1590080876644-0027f6b39f4e
plastic-food-wrap|https://images.unsplash.com/photo-1612969303565-386ae0430f6b
plastic-food-bag|https://images.unsplash.com/photo-1581579184900-63c8da4c7d4f
plastic-food-container-lid|https://images.unsplash.com/photo-1603252109303-2751441f82ed
EOF

echo "✅ Téléchargement terminé !"
