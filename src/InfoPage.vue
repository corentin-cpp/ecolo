<template>
    <div class="info-page">
        <header class="info-header">
            <h1><i class="fas fa-leaf"></i> En savoir plus sur EcoScan</h1>
            <p>Comprendre, agir et adopter de meilleures habitudes pour la planète.</p>
        </header>

        <section class="info-section">
            <h2><i class="fas fa-question-circle"></i> Pourquoi EcoScan ?</h2>
            <p>
                Chaque jour, des millions d’objets plastiques sont utilisés puis jetés, sans que nous en connaissions
                vraiment l’impact.
                EcoScan vous aide à <strong>identifier ces produits</strong>, à <strong>comprendre leur impact
                    environnemental</strong>, et à découvrir
                des <strong>alternatives durables</strong>.
            </p>
        </section>

        <section class="info-section">
            <h2><i class="fas fa-camera"></i> Comment ça fonctionne ?</h2>
            <ul>
                <li><strong>1. Scan ou import :</strong> prenez une photo ou importez une image d’un objet plastique.
                </li>
                <li><strong>2. Analyse :</strong> EcoScan détecte automatiquement le type de plastique et calcule son
                    score environnemental.</li>
                <li><strong>3. Résultat :</strong> obtenez des informations détaillées et des propositions
                    d’alternatives plus écologiques.</li>
            </ul>
        </section>

        <section class="info-section">
            <h2><i class="fas fa-seedling"></i> C’est quoi un bon score ?</h2>
            <p>
                Le score environnemental est une note sur 10. Il tient compte de plusieurs facteurs comme :
            </p>
            <ul>
                <li>La <strong>recyclabilité</strong> du matériau</li>
                <li>Le <strong>temps de décomposition</strong> dans la nature</li>
                <li>L’<strong>empreinte carbone</strong> de sa production</li>
                <li>La présence d’<strong>alternatives</strong> viables</li>
            </ul>
        </section>

        <section class="info-section">
            <h2><i class="fas fa-exchange-alt"></i> Les alternatives proposées</h2>
            <p>
                Pour chaque produit plastique, EcoScan vous recommande 2 alternatives plus responsables. Ces
                alternatives sont choisies
                pour leur durabilité, leur caractère réutilisable ou compostable.
            </p>
        </section>

        <section class="info-section">
            <h2><i class="fas fa-users"></i> Notre mission</h2>
            <p>
                EcoScan est une initiative éducative et citoyenne visant à rendre l’écologie plus accessible. Le projet
                est open-source,
                collaboratif et pensé pour sensibiliser tout en proposant des solutions concrètes.
            </p>
        </section>
    </div>
</template>

<script>
export default {
    name: "InfoPage"
};
</script>

<style scoped>
.info-page {
    padding: 2rem;
    max-width: 900px;
    margin: 0 auto;
    color: var(--text-primary);
}

.info-header {
    text-align: center;
    margin-bottom: 2rem;
}

.info-header h1 {
    font-size: 2rem;
    color: var(--primary-color);
}

.info-header p {
    color: var(--text-secondary);
    font-size: 1rem;
}

.info-section {
    margin-bottom: 2rem;
    background-color: var(--card-background);
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
}

.info-section h2 {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
    color: var(--primary-dark);
}

.info-section ul {
    margin-top: 0.5rem;
    padding-left: 1.2rem;
}

.info-section li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
}
</style>