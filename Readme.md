🎯 Mini application Ionic
“Mini Carnet de Santé Bâtiment – Terrain”

Objectif :
👉 Montrer que tu as compris que le CDSB est un outil mobile de consultation rapide sur le terrain, pas juste une base de données.

🧠 Concept

Une mini app mobile Ionic qui permet à un agent immobilier de :

Retrouver un bâtiment rapidement

Consulter son état de santé global

Voir l’historique des actions

Identifier les points critiques immédiatement

Pas de login, pas de backend → 100 % focus usage métier

📱 Écrans à développer (4 écrans max)
1️⃣ Écran Liste des bâtiments

Liste sous forme de cards

Infos visibles immédiatement :

Nom du bâtiment

Ville

Badge couleur :

🟢 Conforme

🟠 À surveiller

🔴 Non conforme

Exemple :

Bâtiment République
Paris 10e
🟠 Performance énergétique à surveiller

2️⃣ Recherche & filtres

Recherche par nom / ville

Filtres simples :

État de conformité

Performance énergétique (A–G)

Occupation (occupé / vacant)

👉 Très aligné avec :

moteur de recherche performant
utilisation terrain

3️⃣ Fiche bâtiment (le cœur de l’app)

Découpée en sections très lisibles :

Identité

Nom

Adresse

Usage (bureau, logement, mixte)

Indicateurs clés (cards)

Conformité réglementaire

Performance énergétique

Occupation

Alertes

“⚠️ Contrôle sécurité expiré”

“⚠️ DPE inférieur à D”

4️⃣ Timeline des actions

Timeline verticale (hyper visuelle)

Exemples :

2021 – Audit énergétique

2023 – Non-conformité détectée

2024 – Travaux planifiés

👉 C’est LE truc qui va te démarquer.

🧱 Modèle de données (simple & crédible)
```
interface Building {
id: number;
name: string;
city: string;
address: string;
usage: 'Bureau' | 'Logement' | 'Mixte';
energyRating: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
complianceStatus: 'OK' | 'SURVEILLANCE' | 'NON_CONFORME';
occupancy: 'OCCUPE' | 'VACANT';
alerts: string[];
actions: BuildingAction[];
}

interface BuildingAction {
date: string;
type: 'Audit' | 'Travaux' | 'Contrôle';
description: string;
status: 'TERMINE' | 'EN_COURS' | 'PLANIFIE';
}
```

Data mockée en local (JSON / service Angular).

⚙️ Stack recommandée

Ionic + Angular

IonList / IonCard / IonBadge

Routing Ionic

Service Angular pour les données mockées

💡 Bonus (si temps) :

Stockage local (Storage) → cohérent avec usage terrain

Dark mode (terrain 👷‍♂️)

⏱️ Planning réaliste
3–4 heures

Écran liste

Navigation

Data mockée

+2 heures

Fiche bâtiment

Indicateurs

+1 heure

Timeline actions

➡️ En une journée, tu as une app présentable.

🧑‍💼 Comment la vendre en entretien

Phrase clé à utiliser :

“J’ai volontairement développé une mini application mobile Ionic, car le Carnet de Santé des Bâtiments est avant tout un outil de consultation terrain. J’ai priorisé la lisibilité, la rapidité d’accès à l’information et le suivi des actions.”

Et tu peux ajouter :

“Le backend est mocké, l’objectif était de montrer ma compréhension métier et produit, pas de refaire l’existant.”

🚀 Si tu veux aller encore plus loin (optionnel)

Bouton “Exporter la fiche bâtiment (PDF)” → vision terrain

Simulation d’une future API (interfaces + commentaires)
