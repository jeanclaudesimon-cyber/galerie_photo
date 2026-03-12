// ================================
// SIMOUN'S HOME — JS
// ================================

const FLICKR_API_KEY = "37a243d5b14bf833201965702402868c";
const FLICKR_USER_ID = "21237428@N08";

// ================================
// PARTICULES
// ================================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.2 + 0.3,
      alpha: Math.random() * 0.4 + 0.05,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(240, 236, 228, ${p.alpha})`;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animateParticles);
}

resizeCanvas();
createParticles();
animateParticles();
window.addEventListener("resize", () => { resizeCanvas(); createParticles(); });

// ================================
// STATS FLICKR
// ================================
async function loadStats() {
  try {
    const url = `https://www.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=${FLICKR_API_KEY}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.stat === "ok") {
      const count = data.person.photos.count._content;
      animateNumber("stat-photos", parseInt(count));
    }
  } catch(e) {}

  try {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${FLICKR_API_KEY}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.stat === "ok") {
      animateNumber("stat-albums", data.photosets.photoset.length);
    }
  } catch(e) {}
}

function animateNumber(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = current.toLocaleString("fr-FR");
  }, 20);
}

loadStats();
