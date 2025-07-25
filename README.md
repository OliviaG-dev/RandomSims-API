# 🎮 RandomSims-API

Une API RESTful pour le jeu The Sims 4 qui permet de randomiser différents aspects du jeu comme les aspirations, les traits, les défis et plus encore !

## 🌟 Fonctionnalités

- 🎯 **Aspirations** - Gestion des aspirations de vie
- 🎭 **Traits** - Collection de traits de personnalité
- 🏢 **Métiers** - Liste des carrières disponibles
- 🗺️ **Maps** - Sélection des mondes du jeu
- 🎨 **Couleurs** - Palette de couleurs pour la personnalisation
- 🏆 **Défis** - Collection de défis de jeu
- 🌍 **Défis Terrain** - Défis spécifiques aux terrains
- 🎯 **Préférences de Tueur** - Options pour les joueurs maléfiques
- 🌱 **Traits de Terrain** - Caractéristiques des terrains

## 🚀 Installation

1. Clonez le repository :

```bash
git clone https://github.com/OliviaG-dev/RandomSims-API.git
```

2. Installez les dépendances :

```bash
pnpm install
```

3. Lancez le serveur :

```bash
pnpm dev
```

Le serveur démarrera sur `http://localhost:3000`

## 📡 Endpoints API

- `GET /data/aspiration` - Liste des aspirations
- `GET /data/trait` - Liste des traits
- `GET /data/job` - Liste des métiers
- `GET /data/map` - Liste des maps
- `GET /data/color` - Liste des couleurs
- `GET /data/challenge` - Liste des défis
- `GET /data/defiTerrain` - Liste des défis terrain
- `GET /data/prefTue` - Liste des préférences de tueur
- `GET /data/traitTerrain` - Liste des traits de terrain

## 🛠️ Technologies Utilisées

- ⚡ Express.js
- 🔄 TypeScript
- 🔒 CORS
- 📦 Node.js

## 🔒 Sécurité

L'API est configurée avec CORS pour permettre les requêtes depuis :

- http://localhost:5173
- http://localhost:3000

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT.

## 👥 Auteurs

- OliviaG-dev

---

Made with ❤️ pour la communauté The Sims 4
