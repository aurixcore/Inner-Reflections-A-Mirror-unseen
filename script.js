// ----------------------------
// INNER REFLECTIONS SCRIPT.JS
// ----------------------------

// Get DOM elements
const openBtn = document.getElementById('open-reflection');
const dialog = document.getElementById('reflection-dialog');
const closeBtn = document.getElementById('close-btn');
const saveBtn = document.getElementById('save-btn');
const textarea = document.getElementById('reflection-text');

const STORAGE_KEY = 'inner-reflections:latest-entry';

// ----------------------------
// Load saved journal entry from localStorage
// ----------------------------
if (textarea) {
  textarea.value = localStorage.getItem(STORAGE_KEY) || '';
}

// ----------------------------
// Open Reflection Dialog
// ----------------------------
if (openBtn && dialog) {
  openBtn.addEventListener('click', () => {
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      textarea.focus();
    } else {
      // Fallback for older browsers
      alert('Start writing: ' + textarea.value);
    }
  });
}

// ----------------------------
// Close Reflection Dialog
// ----------------------------
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    if (dialog) dialog.close();
  });
}

// ----------------------------
// Save Journal Entry
// ----------------------------
if (saveBtn) {
  saveBtn.addEventListener('click', () => {
    if (textarea) {
      localStorage.setItem(STORAGE_KEY, textarea.value);
    }
    if (dialog) dialog.close();
  });
}

// ----------------------------
// Autosave on input
// ----------------------------
if (textarea) {
  textarea.addEventListener('input', () => {
    localStorage.setItem(STORAGE_KEY, textarea.value);
  });
}

// ----------------------------
// Highlight Active Page in Menu
// ----------------------------
const currentPage = window.location.pathname.split("/").pop(); // e.g., "index.html"
document.querySelectorAll(".main-menu a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.backgroundColor = "#A6C8FF"; // active page highlight color
    link.style.color = "#1A1F3D";          // text color for contrast
  }
});
