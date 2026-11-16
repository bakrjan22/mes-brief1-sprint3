const API_URL = "https://countries.dev/countries";

const country = document.getElementById("country");
const capital = document.getElementById("capital");
const population = document.getElementById("population");
const cards_display = document.getElementById("cards-display");
const select = document.getElementById("select");

function card_builder(img,country_name,capitale_name,population){
  const card = document.createElement('div');
  card.className = "cards";
  const h3_country = document.createElement("h3");
  h3_country.textContent = country_name;
  card.appendChild(h3_country);

  const h4_capitale = document.createElement("h4");
  h4_capitale.textContent = capitale_name;
  card.appendChild(h4_capitale);

  const h5_popu = document.createElement("h5");
  h5_popu.textContent = population;
  card.appendChild(h5_popu);

  cards_display.appendChild(card);
}


let allCountries = [];

// TODO : récupère ici les éléments du DOM dont tu as besoin

/**
 * Récupère tous les pays depuis l'API.
 * - Utilise fetch avec async/await.
 * - Appelée UNE SEULE FOIS, au chargement de la page.
 *
 *  Le tableau de tous les pays.
 */
async function fetchCountries() {
  let res = await fetch(API_URL);
  let j = await res.json();
  allCountries = j;
  displayCountries(allCountries)
  
}
fetchCountries();

/**
 * Crée la carte HTML d'un pays, sur le modèle de la maquette :
 * drapeau (avec un texte alternatif utile), nom, capitale, population.
 *
 * @param {Object} country - Un pays tel que renvoyé par l'API.
 * @returns {HTMLElement} La carte, prête à être ajoutée à la grille.
 */
function createCountryCard(country) {
  card_builder("",country.name,country.capital,country.population);
}

/**
 * Affiche une liste de pays dans la grille.
 * - Vide d'abord la grille (sinon les cartes s'accumulent).
 * - Ajoute une carte par pays.
 * - Si la liste est vide, affiche le message « Aucun pays ne correspond ».
 *
 * @param {Array} countries - Les pays à afficher.
 */
function displayCountries(countries) {
  cards_display.textContent = "";
  let filtered = filterCountries(countries);
  filtered.forEach(country => {
      createCountryCard(country);
  });
}

/**
 * Applique les deux filtres EN MÊME TEMPS sur allCountries :
 * - le continent choisi dans la liste déroulante ;
 * - le texte saisi dans la recherche (majuscules et minuscules ignorées).
 * Puis affiche le résultat avec displayCountries().
 *
 * Aucune requête vers l'API ici !
 */
function filterCountries(countries) {
  if(select.value == "Default"){
    return countries;
  }else {
      countries = countries.filter(n => n.region == select.value);

  }

  return countries;
}

select.addEventListener("change", (e) => {
  fetchCountries();
})

// ------------------------------------------------------------
// BONUS
// ------------------------------------------------------------

/**
 * (Bonus) Trie des pays par population, du plus peuplé au moins peuplé.
 * Attention : ne modifie pas le tableau allCountries d'origine.
 *
 * @param {Array} countries
 * @returns {Array} Un nouveau tableau trié.
 */
function sortByPopulation(countries) {
  // TODO
}

/**
 * (Bonus) Affiche ou masque le message « Chargement des pays… ».
 *
 * @param {boolean} isLoading - true pour l'afficher, false pour le masquer.
 */
function showLoader(isLoading) {
  // TODO
}

/**
 * (Bonus) Affiche un message d'erreur clair quand l'API ne répond pas.
 *
 * @param {string} message
 */
function showError(message) {
  // TODO
}


// ------------------------------------------------------------
// DÉMARRAGE
// ------------------------------------------------------------

/**
 * Point d'entrée de l'application :
 * 1. récupère les pays avec fetchCountries() et les stocke dans allCountries ;
 * 2. affiche les pays du continent sélectionné par défaut ;
 * 3. écoute les changements de continent et la saisie dans la recherche.
 *
 * (Bonus) Gère le chargement et les erreurs avec try...catch.
 */
async function init() {
  // TODO
}

init();
