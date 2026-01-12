// ----------------------------
// INNER REFLECTIONS SCRIPT.JS
// ----------------------------

// ----------------------------
// JOURNAL FUNCTIONALITY
// ----------------------------
const openBtn = document.getElementById('open-reflection');
const dialog = document.getElementById('reflection-dialog');
const closeBtn = document.getElementById('close-btn');
const saveBtn = document.getElementById('save-btn');
const textarea = document.getElementById('reflection-text');
const STORAGE_KEY = 'inner-reflections:latest-entry';

// Load saved journal entry
if (textarea) {
  textarea.value = localStorage.getItem(STORAGE_KEY) || '';
}

// Open journal dialog
if (openBtn && dialog) {
  openBtn.addEventListener('click', () => {
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      textarea.focus();
    }
  });
}

// Close journal dialog
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    if (dialog) dialog.close();
  });
}

// Save journal entry
if (saveBtn) {
  saveBtn.addEventListener('click', () => {
    if (textarea) localStorage.setItem(STORAGE_KEY, textarea.value);
    if (dialog) dialog.close();
  });
}

// Autosave while typing
if (textarea) {
  textarea.addEventListener('input', () => {
    localStorage.setItem(STORAGE_KEY, textarea.value);
  });
}

// ----------------------------
// MENU ACTIVE PAGE HIGHLIGHT
// ----------------------------
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".main-menu a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.backgroundColor = "#A6C8FF";
    link.style.color = "#1A1F3D";
  }
});

// ----------------------------
// MINI-GAME FUNCTIONALITY
// Only run on game.html
// ----------------------------
if (currentPage === "game.html") {
  const canvas = document.getElementById('star-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = 400;

  const stars = [];
  const starCount = 30;
  const messages = [
    "Breathe deeply…",
    "You are calm and safe.",
    "Notice your inner peace.",
    "Every star is a gentle thought.",
    "Let go and relax.",
    "Observe your feelings with kindness.",
    "A quiet mind is a happy mind."
  ];

  // Create stars
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 2,
      clicked: false
    });
  }

  // Draw stars
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star
