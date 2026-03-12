// ================================
// MES AQUARELLES — JS
// ================================

const FLICKR_API_KEY = "37a243d5b14bf833201965702402868c";
const FLICKR_USER_ID = "21237428@N08";
const ALBUM_ID = "72177720306889674";

// Google Sheet CSV (à remplir quand tu auras créé le sheet)
// Format du sheet : colonne A = titre Flickr, colonne B = technique, colonne C = description
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9PvSg_j9ZFxVqfUMfhDrivv-qKOXZG_X4lR4ifoPeQ8rwRMMoe33dS77nD6vNi4PS-rXD4z83C9lA/pub?gid=0&single=true&output=csv";

let allPhotos = [];
let currentIndex = 0;
let descriptionsSheet = {}; // { "titre_photo": { technique, description } }

// ================================
// DOM
// ================================
const gallery = document.getElementById("dessins-gallery");
const modal = document.getElementById("modal-dessins");
const modalImg = document.getElementById("modal-dessin-img");
const dessinTitle = document.getElementById("dessin-title");
const dessinTechnique = document.getElementById("dessin-technique");
const dessinDescription = document.getElementById("dessin-description");
const dessinExif = document.getElementById("dessin-exif");
const closeBtn = document.getElementById("close-dessins");
const prevBtn = document.getElementById("prev-dessin");
const nextBtn = document.getElementById("next-dessin");
const countEl = document.getElementById("count-photos");

// ================================
// CHARGEMENT GOOGLE SHEET
// ================================
async function loadGoogleSheet() {
  if (!GOOGLE_SHEET_URL) return;
  try {
    const res = await fetch(GOOGLE_SHEET_URL);
    const text = await res.text();
    const lines = text.trim().split("\n").slice(1); // skip header
    lines.forEach(line => {
      const cols = line.split(",");
      if (cols.length >= 3) {
        const titre = cols[0].trim().replace(/"/g, "");
        const technique = cols[1].trim().replace(/"/g, "");
        const description = cols.slice(2).join(",").trim().replace(/"/g, "");
        descriptionsSheet[titre.toLowerCase()] = { technique, description };
      }
    });
  } catch(e) {
    console.log("Google Sheet non disponible", e);
  }
}

// ================================
// CHARGEMENT FLICKR
// ================================
async function loadPhotos() {
  let page = 1;
  let allLoaded = false;

  while (!allLoaded) {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${ALBUM_ID}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1&extras=url_l,url_m,url_s,title&per_page=100&page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.stat !== "ok") break;

    const photos = data.photoset.photo;
    allPhotos = allPhotos.concat(photos);

    if (page >= data.photoset.pages) allLoaded = true;
    page++;
  }

  countEl.textContent = allPhotos.length;
  renderGallery();
}

// ================================
// AFFICHAGE GALERIE
// ================================
function renderGallery() {
  gallery.innerHTML = "";
  allPhotos.forEach((photo, index) => {
    const card = document.createElement("div");
    card.className = "dessin-card";

    const img = document.createElement("img");
    img.src = photo.url_s || photo.url_m;
    img.alt = photo.title;
    img.loading = "lazy";

    const overlay = document.createElement("div");
    overlay.className = "dessin-card-overlay";
    overlay.innerHTML = `<span class="dessin-card-title">${photo.title}</span>`;

    card.appendChild(img);
    card.appendChild(overlay);
    card.addEventListener("click", () => openModal(index));
    gallery.appendChild(card);
  });
}

// ================================
// MODAL
// ================================
function openModal(index) {
  currentIndex = index;
  const photo = allPhotos[index];
  if (!photo) return;

  modal.classList.remove("hidden");
  modalImg.src = photo.url_l || photo.url_m;
  dessinTitle.textContent = photo.title;

  // Descriptions depuis Google Sheet
  const key = photo.title.toLowerCase();
  const info = descriptionsSheet[key];
  dessinTechnique.textContent = info ? info.technique : "—";
  dessinDescription.textContent = info ? info.description : "—";

  // EXIF Flickr
  loadExif(photo.id);
}

async function loadExif(photoId) {
  dessinExif.innerHTML = "<li>Chargement...</li>";
  try {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.getExif&api_key=${FLICKR_API_KEY}&photo_id=${photoId}&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.stat !== "ok") { dessinExif.innerHTML = "<li>EXIF non disponibles</li>"; return; }

    const tags = {};
    data.photo.exif.forEach(e => { tags[e.tag] = e.raw._content; });
    dessinExif.innerHTML = "";
    if (tags.Make || tags.Model) dessinExif.innerHTML += `<li>Appareil : ${tags.Make||""} ${tags.Model||""}</li>`;
    if (tags.LensModel) dessinExif.innerHTML += `<li>Objectif : ${tags.LensModel}</li>`;
    if (tags.FocalLength) dessinExif.innerHTML += `<li>Focale : ${tags.FocalLength}</li>`;
    if (tags.ISO) dessinExif.innerHTML += `<li>ISO : ${tags.ISO}</li>`;
    if (tags.FNumber) dessinExif.innerHTML += `<li>Ouverture : f/${tags.FNumber}</li>`;
    if (tags.ExposureTime) dessinExif.innerHTML += `<li>Vitesse : ${tags.ExposureTime}</li>`;
    if (tags.DateTimeOriginal) dessinExif.innerHTML += `<li>Date : ${tags.DateTimeOriginal}</li>`;
    if (dessinExif.innerHTML === "") dessinExif.innerHTML = "<li>Pas d'EXIF disponible</li>";
  } catch(e) {
    dessinExif.innerHTML = "<li>EXIF non disponibles</li>";
  }
}

// ================================
// NAVIGATION
// ================================
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
  openModal(currentIndex);
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % allPhotos.length;
  openModal(currentIndex);
});

closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.add("hidden"); });

document.addEventListener("keydown", e => {
  if (modal.classList.contains("hidden")) return;
  if (e.key === "ArrowLeft") prevBtn.click();
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "Escape") modal.classList.add("hidden");
});

// ================================
// INIT
// ================================
async function init() {
  await loadGoogleSheet();
  await loadPhotos();
}

init();
