// ============================
// CONFIGURATION
// ============================
const FLICKR_API_KEY = "37a243d5b14bf833201965702402868c";
const FLICKR_USER_ID = "21237428@N08";

const flickrAlbums = {
  "72157603637269892": "Oiseaux et insectes",
  "72157603622203535": "Oiseaux",
  "72157603642256525": "Arbres - Forêt",
  "72157603637350432": "Sud France",
  "72157603637659768": "Coucher de Soleil",
  "72157603655562755": "Nocturne",
  "72157603642280615": "Rivières - Lacs - Eau",
  "72157603934394112": "Alsace (Divers)",
  "72157603948594816": "Nature",
  "72157603974433362": "Carnaval Arlon",
  "72157604777886150": "Fleurs",
  "72157604871221288": "Mai 2008",
  "72157604946550529": "Moselle-Luxembourg-Ahn",
  "72157604283366388": "Sénégal",
  "72157605402782683": "Gare Mariembourg train vapeur",
  "72157605403200633": "Montgolfière en détresse Saint-Léger",
  "72157607586483291": "Saint-Tropez 2007",
  "72157610854511133": "Cimetière voitures",
  "72157611190610287": "Mannequins Vitrines",
  "72157610856090113": "Meeting Aérien Marville sept. 2005",
  "72157610855095021": "Voitures Américaines",
  "72157610926031014": "Ma deuche avant restauration",
  "72157614945581427": "Printemps 2009",
  "72157619790114774": "Madine 2009",
  "72157621923386201": "Alsace (route des vins)",
  "72157622047615538": "Alsace (route des crêtes en 2cv)",
  "72157622047708044": "Alsace (Markstein les loups)",
  "72157622053530422": "Alsace (Feu de la Saint-Jean)",
  "72157624272913190": "Madine 2010",
  "72157624059467297": "150ème Etienne Lenoir Mussy-La-Ville",
  "72157625047381816": "Porto sept 2010",
  "72157719668167074": "Croisière été 2021",
  "72177720301345790": "Croisière 2022",
  "72177720303529212": "Arlon la nuit",
  "72157719592979603": "Moulin de la Paix Saint-Léger",
  "72157716776300882": "VINDO 40 voilier de Gilles",
  "72157672309910677": "N&B 2018",
  "72157709790577377": "Alsace 2019",
  "72157665708787458": "Alsace 2018",
  "72157684393653120": "Alsace 2017",
  "72157677141846941": "Markstein 2017",
  "72157676793372452": "Thann hiver 2016",
  "72157676377931516": "Oderen nuit 2016-12-11",
  "72157676474580455": "Treh 2016-12-11",
  "72157673671869391": "URBEX Fellering",
  "72157673455976311": "MINETT PARK Fond-De-Gras",
  "72157674592395346": "Gomery Ancêtres",
  "72157671218836515": "1945 - Le train du souvenir",
  "72157671125519776": "Journée Médiévale Thann",
  "72157658214449632": "Metz nocturne",
  "72157658500741823": "Nocturne Oderen",
  "72157657735325146": "Oderen Nocturne",
  "72157656152089449": "Test",
  "72157645809300430": "Musée de la moto Bantzenheim",
  "72157640228734695": "Alsace-Hiver 2014",
  "72157670819374186": "Test Day SPA Francorchamps 2016",
  "72177720332449071": "Portrait (Local)",
  "72177720332476644": "Travaux (Local)",
  "72177720332442985": "Photo de rue (Local)",
  "72177720332449277": "Paysage (Local)",
  "72177720332466028": "Instruments (Local)",
  "72177720332442930": "Oiseaux (Local)",
  "72177720332442695": "Arbres (Local)"
};

// ============================
// VIDEOS YOUTUBE PAR TITRE
// ============================
const youtubeVideos = {
  "La force du vent": "CtJkAdIQmWg",
  // Ajoutez d'autres : "Titre exact Flickr": "ID_YouTube",
};

const localAlbums = {
  "paysage": ["_DSC6772.jpg", "_DSC6776.jpg"],
  "oiseaux-local": ["_DSC6570.jpg","_DSC6605.jpg","DSC_1220.jpg"],
  "arbres-local": ["_DSC6760.jpg", "_DSC6762.jpg"],
  "portrait": ["Sophie vin leffe.jpg"],
  "photo de rue": ["DSC_4866.JPG","DSC_4892.JPG"],
  "instruments": ["_DSC6537.jpg","_DSC6540.jpg","_DSC6547.jpg"],
  "travaux": ["IMG_0342.JPG","IMG_0343.JPG","IMG_0344.JPG","IMG_0345.JPG","IMG_0346.JPG","IMG_0347.JPG","IMG_0348.JPG","IMG_0349.JPG","IMG_0350.JPG","IMG_0351.JPG","IMG_0352.JPG","IMG_0353.JPG"]
};

const basePath = "albums/";

const citations = [
  { texte: "La photographie, c'est la vérité. Et le cinéma, c'est vingt-quatre fois la vérité par seconde.", auteur: "Jean-Luc Godard" },
  { texte: "Une bonne photographie, c'est une photographie à laquelle il n'y a rien à ajouter et rien à retirer.", auteur: "Ansel Adams" },
  { texte: "La photographie est le seul langage qui puisse être compris partout dans le monde.", auteur: "Bruno Barbey" },
  { texte: "Dans la photographie, il y a une réalité si subtile qu'elle devient plus réelle que la réalité.", auteur: "Alfred Stieglitz" },
  { texte: "Ce que j'aime dans la photographie, c'est que ça saisit un moment qui est parti pour toujours, impossible à reproduire.", auteur: "Karl Lagerfeld" },
  { texte: "La photographie est un art de l'observation.", auteur: "Elliott Erwitt" },
  { texte: "L'appareil photo est une machine qui apprend aux gens à voir sans appareil photo.", auteur: "Dorothea Lange" },
  { texte: "Photographier c'est mettre sur la même ligne de mire la tête, l'œil et le cœur.", auteur: "Henri Cartier-Bresson" },
  { texte: "Une bonne photographie consiste à savoir capturer la profondeur des sentiments, pas la profondeur du champ.", auteur: "Peter Adams" },
  { texte: "Je ne fais pas confiance aux mots. Je fais confiance aux images.", auteur: "Gilles Peress" },
  { texte: "La photographie fige un instant dans le temps, altère la vie en l'immobilisant.", auteur: "Dorothea Lange" },
  { texte: "Et si le goût de la vie diminue, les photos pâlissent parce que photographier, c'est savourer la vie au 1/125 de seconde", auteur: "Marc Riboud" },
  { texte: "La meilleure chose à propos d'une image est qu'elle ne change jamais, même lorsque les personnes qui y figurent changent.", auteur: "Andy Warhol" },
  { texte: "Ce que j'aime dans les photographies, c'est qu'elles capturent un moment qui est parti pour toujours, impossible à reproduire.", auteur: "Karl Lagerfeld" },
  { texte: "Vous ne prenez pas une photographie, vous la créez.", auteur: "Ansel Adams" },
  { texte: "Voir en couleur est un plaisir pour l'œil mais voir en noir et blanc est un plaisir pour l'âme.", auteur: "Andri Cauldwell" },
];

let currentAlbumPhotos = [];
let currentPhotoIndex = 0;
let currentAlbumId = null;
let photoOfDayUrl = null;

const albumSelect = document.getElementById("album-select");
const miniAlbumsDiv = document.getElementById("mini-albums");
const galleryDiv = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const photoTitle = document.getElementById("photo-title");
const photoNotes = document.getElementById("photo-notes");
const exifList = document.getElementById("exif");
const closeModal = document.getElementById("close");
const countEl = document.getElementById("count-photos");

async function init() {
  buildAlbumSelect();
  await loadPhotoOfDay();
  const firstId = Object.keys(flickrAlbums)[0];
  albumSelect.value = "flickr_" + firstId;
  displayFlickrAlbum(firstId);
  albumSelect.addEventListener("change", onAlbumChange);
}

function buildAlbumSelect() {
  const groupFlickr = document.createElement("optgroup");
  groupFlickr.label = "📷 Albums Flickr";
  const flickrEntries = Object.entries(flickrAlbums).sort((a, b) => a[1].localeCompare(b[1], 'fr'));
  flickrEntries.forEach(([id, name]) => {
    const opt = document.createElement("option");
    opt.value = "flickr_" + id;
    opt.textContent = name;
    groupFlickr.appendChild(opt);
  });
  albumSelect.appendChild(groupFlickr);

  const groupLocal = document.createElement("optgroup");
  groupLocal.label = "💾 Albums locaux";
  const localEntries = Object.entries(localAlbums).sort((a, b) => a[0].localeCompare(b[0], 'fr'));
  localEntries.forEach(([name]) => {
    const opt = document.createElement("option");
    opt.value = "local_" + name;
    opt.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    groupLocal.appendChild(opt);
  });
  albumSelect.appendChild(groupLocal);

  const vedette = flickrEntries.slice(0, 3);
  vedette.forEach(([id, name]) => {
    const mini = document.createElement("div");
    mini.className = "mini-album";
    mini.title = name;
    const img = document.createElement("img");
    img.src = `https://farm1.staticflickr.com/placeholder.jpg`;
    img.alt = name;
    fetchFlickrCover(id).then(url => { if(url) img.src = url; });
    const label = document.createElement("span");
    label.className = "mini-album-label";
    label.textContent = name;
    mini.appendChild(img);
    mini.appendChild(label);
    miniAlbumsDiv.appendChild(mini);
    mini.addEventListener("click", () => {
      albumSelect.value = "flickr_" + id;
      displayFlickrAlbum(id);
    });
  });
}

function onAlbumChange(e) {
  const val = e.target.value;
  if (val.startsWith("flickr_")) {
    displayFlickrAlbum(val.replace("flickr_", ""));
  } else {
    displayLocalAlbum(val.replace("local_", ""));
  }
}

async function loadPhotoOfDay() {
  const photoDay = document.getElementById("photo-of-day");
  const citationEl = document.getElementById("citation-text");
  const citationAuteur = document.getElementById("citation-auteur");
  const cit = citations[Math.floor(Math.random() * citations.length)];
  if (citationEl) citationEl.textContent = `"${cit.texte}"`;
  if (citationAuteur) citationAuteur.textContent = `— ${cit.auteur}`;
  try {
    const ids = Object.keys(flickrAlbums);
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${randomId}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1&extras=url_m&per_page=50`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.stat === "ok" && data.photoset.photo.length > 0) {
      const photos = data.photoset.photo.filter(p => p.url_m);
      const randPhoto = photos[Math.floor(Math.random() * photos.length)];
      if (randPhoto && photoDay) {
        photoDay.src = randPhoto.url_m;
        photoDay.alt = randPhoto.title;
        photoOfDayUrl = randPhoto.url_l || randPhoto.url_m;
        photoDay.style.cursor = "pointer";
        photoDay.addEventListener("click", () => {
          openModalFromUrl(photoOfDayUrl, randPhoto.title, true);
        });
      }
    }
  } catch(e) {
    if (document.getElementById("photo-of-day-section")) {
      document.getElementById("photo-of-day-section").style.display = "none";
    }
  }
}

async function fetchFlickrCover(albumId) {
  try {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${albumId}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1&extras=url_m&per_page=1`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.stat === "ok" && data.photoset.photo[0]) {
      return data.photoset.photo[0].url_m;
    }
  } catch(e) {}
  return null;
}

async function displayFlickrAlbum(albumId) {
  galleryDiv.innerHTML = '<p style="color:#888;padding:20px;">Chargement des photos...</p>';
  currentAlbumId = "flickr_" + albumId;
  try {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${albumId}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1&extras=url_m,url_l,title&per_page=500`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.stat !== "ok") throw new Error("Flickr error");

    currentAlbumPhotos = data.photoset.photo
      .filter(p => p.url_m)
      .map(p => ({ url_m: p.url_m, url_l: p.url_l || p.url_m, title: p.title, isFlickr: true }));

    galleryDiv.innerHTML = "";
    if (countEl) countEl.textContent = currentAlbumPhotos.length;

    currentAlbumPhotos.forEach((photo, index) => {
      const card = document.createElement("div");
      card.className = "photo-card";
      card.dataset.title = photo.title;

      // Vérifier si c'est une vidéo YouTube
      const ytId = youtubeVideos[photo.title];
      if (ytId) {
        card.classList.add("video-card");
        card.style.cssText = "position:relative;padding-bottom:56.25%;height:0;overflow:hidden;grid-column:span 2;margin-bottom:28px;";
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${ytId}`;
        iframe.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;border:none;border-radius:8px;";
        iframe.allowFullscreen = true;
        iframe.loading = "lazy";
        card.appendChild(iframe);
        const label = document.createElement("div");
        label.style.cssText = "position:absolute;bottom:-22px;left:0;font-size:12px;color:#888;";
        label.textContent = "🎬 " + photo.title;
        card.appendChild(label);
      } else {
        const img = document.createElement("img");
        img.src = photo.url_m;
        img.alt = photo.title;
        img.loading = "lazy";
        card.appendChild(img);
        card.addEventListener("click", () => openModalFromUrl(photo.url_l, photo.title, true, index));
      }

      galleryDiv.appendChild(card);
    });

  } catch(e) {
    galleryDiv.innerHTML = '<p style="color:#f66;padding:20px;">Erreur de chargement Flickr. Vérifiez votre connexion.</p>';
  }
}

function displayLocalAlbum(albumName) {
  galleryDiv.innerHTML = "";
  currentAlbumId = "local_" + albumName;
  currentAlbumPhotos = localAlbums[albumName].map(name => ({
    url_m: `${basePath}${albumName}/${name}`,
    url_l: `${basePath}${albumName}/${name}`,
    title: name,
    isFlickr: false
  }));
  if (countEl) countEl.textContent = currentAlbumPhotos.length;
  currentAlbumPhotos.forEach((photo, index) => {
    const card = document.createElement("div");
    card.className = "photo-card";
    const img = document.createElement("img");
    img.src = photo.url_m;
    img.alt = photo.title;
    card.appendChild(img);
    galleryDiv.appendChild(card);
    card.addEventListener("click", () => openModalFromUrl(photo.url_l, photo.title, false, index));
  });
}

function openModalFromUrl(photoUrl, title, isFlickr, index) {
  if (index !== undefined) currentPhotoIndex = index;
  modal.classList.remove("hidden");
  modalImg.src = photoUrl;
  photoTitle.textContent = title || photoUrl.split("/").pop();

  const fileName = photoUrl.split("/").pop();
  const albumPart = photoUrl.includes("albums/") ? photoUrl.split("albums/")[1].split("/")[0] : photoUrl;
  const storageKey = isFlickr ? `note_${photoUrl}` : `note_${albumPart}_${fileName}`;
  const savedNote = localStorage.getItem(storageKey);
  photoNotes.textContent = savedNote || "Clique ici pour ajouter une description...";
  photoNotes.style.color = savedNote ? "#ddd" : "#888";
  photoNotes.style.fontStyle = savedNote ? "normal" : "italic";

  photoNotes.onclick = function() {
    const current = localStorage.getItem(storageKey) || "";
    photoNotes.contentEditable = "true";
    photoNotes.style.color = "#fff";
    photoNotes.style.fontStyle = "normal";
    photoNotes.textContent = current;
    photoNotes.focus();
    photoNotes.onblur = function() {
      const newNote = photoNotes.textContent.trim();
      photoNotes.contentEditable = "false";
      if (newNote) {
        localStorage.setItem(storageKey, newNote);
        photoNotes.textContent = newNote;
        photoNotes.style.color = "#ddd";
        photoNotes.style.fontStyle = "normal";
      } else {
        localStorage.removeItem(storageKey);
        photoNotes.textContent = "Clique ici pour ajouter une description...";
        photoNotes.style.color = "#888";
        photoNotes.style.fontStyle = "italic";
      }
    };
  };

  if (!isFlickr) {
    exifList.innerHTML = "<li>Lecture des EXIF...</li>";
    fetch(photoUrl)
      .then(r => r.arrayBuffer())
      .then(buffer => {
        const view = new DataView(buffer);
        const exifData = parseExif(view);
        exifList.innerHTML = "";
        if (exifData.Make) exifList.innerHTML += `<li>Appareil : ${exifData.Make} ${exifData.Model || ""}</li>`;
        if (exifData.Artist) exifList.innerHTML += `<li>Photographe : ${exifData.Artist}</li>`;
        if (exifData.FocalLength) exifList.innerHTML += `<li>Focale : ${exifData.FocalLength}mm${exifData.FocalLengthIn35mmFilm ? " (équiv. " + exifData.FocalLengthIn35mmFilm + "mm en 24x36)" : ""}</li>`;
        if (exifData.ISOSpeedRatings) exifList.innerHTML += `<li>ISO : ${exifData.ISOSpeedRatings}</li>`;
        if (exifData.FNumber) exifList.innerHTML += `<li>Ouverture : f/${exifData.FNumber}</li>`;
        if (exifData.ExposureTime) {
          const v = exifData.ExposureTime < 1 ? `1/${Math.round(1/exifData.ExposureTime)}s` : `${exifData.ExposureTime}s`;
          exifList.innerHTML += `<li>Vitesse : ${v}</li>`;
        }
        if (exifData.ExposureBias !== undefined) exifList.innerHTML += `<li>Correction expo : ${exifData.ExposureBias.toFixed(1)} EV</li>`;
        if (exifData.DateTimeOriginal) exifList.innerHTML += `<li>Date/Heure : ${exifData.DateTimeOriginal}</li>`;
        if (exifData.Software) exifList.innerHTML += `<li>Logiciel : ${exifData.Software}</li>`;
        if (exifList.innerHTML === "") exifList.innerHTML = "<li>Pas d'EXIF disponible</li>";
      })
      .catch(() => { exifList.innerHTML = "<li>Pas d'EXIF disponible</li>"; });
  } else {
    exifList.innerHTML = "<li>Chargement EXIF...</li>";
    const photoIdMatch = photoUrl.match(/\/([0-9]+)_/);
    if (photoIdMatch) {
      const photoId = photoIdMatch[1];
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.getExif&api_key=${FLICKR_API_KEY}&photo_id=${photoId}&format=json&nojsoncallback=1`)
        .then(r => r.json())
        .then(data => {
          if (data.stat !== "ok") { exifList.innerHTML = "<li>EXIF non disponibles</li>"; return; }
          const tags = {};
          data.photo.exif.forEach(e => { tags[e.tag] = e.raw._content; });
          exifList.innerHTML = "";
          if (tags.Make || tags.Model) exifList.innerHTML += `<li>Appareil : ${tags.Make||""} ${tags.Model||""}</li>`;
          if (tags.Artist) exifList.innerHTML += `<li>Photographe : ${tags.Artist}</li>`;
          if (tags.LensModel) exifList.innerHTML += `<li>Objectif : ${tags.LensModel}</li>`;
          if (tags.FocalLength) exifList.innerHTML += `<li>Focale : ${tags.FocalLength}</li>`;
          if (tags.ISO) exifList.innerHTML += `<li>ISO : ${tags.ISO}</li>`;
          if (tags.FNumber) exifList.innerHTML += `<li>Ouverture : f/${tags.FNumber}</li>`;
          if (tags.ExposureTime) exifList.innerHTML += `<li>Vitesse : ${tags.ExposureTime}</li>`;
          if (tags.ExposureBiasValue) exifList.innerHTML += `<li>Correction expo : ${tags.ExposureBiasValue}</li>`;
          if (tags.DateTimeOriginal) exifList.innerHTML += `<li>Date/Heure : ${tags.DateTimeOriginal}</li>`;
          if (tags.Software) exifList.innerHTML += `<li>Logiciel : ${tags.Software}</li>`;
          if (exifList.innerHTML === "") exifList.innerHTML = "<li>Pas d'EXIF disponible</li>";
        })
        .catch(() => { exifList.innerHTML = "<li>EXIF non disponibles</li>"; });
    } else {
      exifList.innerHTML = "<li>EXIF non disponibles</li>";
    }
  }
}

function parseExif(view) {
  const result = {};
  try {
    if (view.getUint16(0) !== 0xFFD8) return result;
    let offset = 2;
    while (offset < view.byteLength) {
      const marker = view.getUint16(offset);
      if (marker === 0xFFE1) { parseExifIFD(view, offset + 10, result); break; }
      if ((marker & 0xFF00) !== 0xFF00) break;
      offset += 2 + view.getUint16(offset + 2);
    }
  } catch(e) {}
  return result;
}
function parseExifIFD(view, start, result) {
  try {
    const le = view.getUint16(start) === 0x4949;
    readIFD(view, start, start + view.getUint32(start + 4, le), le, result);
  } catch(e) {}
}
function readIFD(view, base, offset, le, result) {
  try {
    const count = view.getUint16(offset, le);
    for (let i = 0; i < count; i++) {
      const e = offset + 2 + i * 12;
      const tag = view.getUint16(e, le);
      const num = view.getUint32(e + 4, le);
      const vo = e + 8;
      switch(tag) {
        case 0x010F: result.Make = readString(view, base, vo, num, le); break;
        case 0x0110: result.Model = readString(view, base, vo, num, le); break;
        case 0x013B: result.Artist = readString(view, base, vo, num, le); break;
        case 0x0131: result.Software = readString(view, base, vo, num, le); break;
        case 0x8769: readIFD(view, base, base + view.getUint32(vo, le), le, result); break;
        case 0x9003: result.DateTimeOriginal = readString(view, base, vo, num, le); break;
        case 0x8827: result.ISOSpeedRatings = view.getUint16(num > 2 ? base + view.getUint32(vo, le) : vo, le); break;
        case 0x829D: result.FNumber = readRational(view, base + view.getUint32(vo, le), le); break;
        case 0x829A: {
          const n = view.getUint32(base + view.getUint32(vo, le), le);
          const d = view.getUint32(base + view.getUint32(vo, le) + 4, le);
          if (d !== 0) result.ExposureTime = n / d;
          break;
        }
        case 0x920A: result.FocalLength = readRational(view, base + view.getUint32(vo, le), le); break;
        case 0xA405: result.FocalLengthIn35mmFilm = view.getUint16(vo, le); break;
        case 0x9204: result.ExposureBias = readSignedRational(view, base + view.getUint32(vo, le), le); break;
      }
    }
  } catch(e) {}
}
function readString(view, base, vo, count, le) {
  try {
    const offset = count > 4 ? base + view.getUint32(vo, le) : vo;
    let str = "";
    for (let i = 0; i < count - 1; i++) {
      const c = view.getUint8(offset + i);
      if (c === 0) break;
      str += String.fromCharCode(c);
    }
    return str.trim();
  } catch(e) { return ""; }
}
function readRational(view, offset, le) {
  try {
    const n = view.getUint32(offset, le), d = view.getUint32(offset + 4, le);
    return d !== 0 ? Math.round((n / d) * 10) / 10 : 0;
  } catch(e) { return 0; }
}
function readSignedRational(view, offset, le) {
  try {
    const n = view.getInt32(offset, le), d = view.getInt32(offset + 4, le);
    return d !== 0 ? Math.round((n / d) * 10) / 10 : 0;
  } catch(e) { return 0; }
}

closeModal.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.add("hidden"); });

const prevBtn = document.getElementById("prev-photo");
const nextBtn = document.getElementById("next-photo");

if (prevBtn) {
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentAlbumPhotos.length === 0) return;
    currentPhotoIndex = (currentPhotoIndex - 1 + currentAlbumPhotos.length) % currentAlbumPhotos.length;
    const p = currentAlbumPhotos[currentPhotoIndex];
    openModalFromUrl(p.url_l || p.url_m, p.title, p.isFlickr, currentPhotoIndex);
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentAlbumPhotos.length === 0) return;
    currentPhotoIndex = (currentPhotoIndex + 1) % currentAlbumPhotos.length;
    const p = currentAlbumPhotos[currentPhotoIndex];
    openModalFromUrl(p.url_l || p.url_m, p.title, p.isFlickr, currentPhotoIndex);
  });
}

document.addEventListener("keydown", (e) => {
  if (modal.classList.contains("hidden")) return;
  if (e.key === "ArrowLeft" && prevBtn) prevBtn.click();
  if (e.key === "ArrowRight" && nextBtn) nextBtn.click();
  if (e.key === "Escape") modal.classList.add("hidden");
});

init();
