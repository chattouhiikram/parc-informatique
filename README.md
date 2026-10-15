# 🖥️ Parc Informatique

Application web de **gestion de parc informatique** : elle permet de suivre les employés, les équipements (ordinateurs, téléphones, etc.) et leurs affectations.

---

## 📌 Fonctionnalités

- **Employés** : ajouter, consulter, modifier et supprimer.
- **Équipements** : ajouter, consulter, modifier et supprimer (nom, type, numéro de série, statut, état).
- **Affectations** : attribuer un équipement à un employé et suivre son historique.
- **Recherche et filtres** : recherche par nom, type ou numéro de série, filtres par type, statut et état.
- **Données persistantes** : tout est enregistré dans une base PostgreSQL.

---

## 🛠️ Technologies utilisées

| Partie | Technologies |
|---|---|
| Back-end | Java 21, Spring Boot 3.5, Spring Data JPA, Hibernate, Lombok, Maven |
| Front-end | React, Vite, Axios |
| Base de données | PostgreSQL |

---

## 🏗️ Architecture

```
parc-informatique-corrige/
├── parc-informatique/            # Back-end (API REST Spring Boot)
│   └── src/main/java/...         # entités, repositories, services, contrôleurs
└── parc-informatique-frontend/   # Front-end (React + Vite)
    └── src/                      # pages et composants
```

Le front-end (port **5173**) communique avec l'API du back-end (port **8081**) via Axios. Le back-end lit et écrit dans PostgreSQL (port **5432**).

---

## ✅ Prérequis

- **JDK 21** ou plus récent
- **Node.js** et **npm**
- **PostgreSQL**
- **Git**

---

## 🚀 Installation et lancement

### 1. Cloner le projet

```bash
git clone https://github.com/TON_NOM/parc-informatique.git
cd parc-informatique
```

### 2. Créer la base de données

Dans PostgreSQL, crée une base nommée :

```sql
CREATE DATABASE parc_informatique_db;
```

### 3. Configurer le back-end

Dans `parc-informatique/src/main/resources/application.properties`, vérifie l'URL et l'utilisateur de la base. Le mot de passe est lu depuis une variable d'environnement :

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/parc_informatique_db
spring.datasource.username=postgres
spring.datasource.password=${DB_PASSWORD:changeme}
server.port=8081
```

Sous Windows, définis le mot de passe avant de lancer :

```bash
set DB_PASSWORD=ton_mot_de_passe
```

### 4. Lancer le back-end

```bash
cd parc-informatique
.\mvnw spring-boot:run
```

Attends le message `Started ParcInformatiqueApplication`. L'API est disponible sur `http://localhost:8081`.
Les tables sont créées automatiquement au premier démarrage.

### 5. Lancer le front-end

Dans un **deuxième terminal** :

```bash
cd parc-informatique-frontend
npm install
npm run dev
```

Ouvre ensuite **http://localhost:5173** dans ton navigateur.

---

## 🧪 Vérifier que tout fonctionne

1. Le terminal du back-end affiche `Tomcat started on port 8081`.
2. La page `http://localhost:5173` s'ouvre avec le menu **Employés / Équipements**.
3. Ajoute un employé et un équipement, puis rafraîchis la page : les données restent affichées.
4. Dans le navigateur (F12, onglet **Network**), les requêtes vers `localhost:8081` répondent avec le statut **200**.

---

## 🗺️ Pistes d'amélioration

- Authentification et gestion des rôles
- Export des données (Excel / PDF)
- Tableau de bord avec statistiques
- Tests automatisés et déploiement

---

## 👤 Auteur

Projet réalisé par **Ikram**.
