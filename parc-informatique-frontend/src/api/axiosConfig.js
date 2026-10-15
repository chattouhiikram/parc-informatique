import axios from 'axios';

// Le backend Spring Boot tourne sur le port 8081 (le port 8080 par défaut
// étant déjà utilisé par une autre application sur cette machine —
// voir server.port dans application.properties).
const api = axios.create({
  baseURL: 'http://localhost:8081/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Sans ceci, une requête qui échoue (backend arrêté, erreur de validation,
// contrainte unique en base, etc.) se contentait de rejeter la promesse sans
// aucune trace exploitable, ce qui donnait l'impression que "rien ne se passe"
// quand on clique sur Enregistrer. On logue ici un message clair dans la
// console (F12 → Console) pour pouvoir diagnostiquer rapidement.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(
        `Erreur API ${error.response.status} sur ${error.config?.url} :`,
        error.response.data
      );
    } else if (error.request) {
      console.error(
        `Aucune réponse du backend (est-il démarré sur ${api.defaults.baseURL} ?) :`,
        error.message
      );
    } else {
      console.error('Erreur lors de la requête API :', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;